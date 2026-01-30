import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Simple in-memory rate limiting (use Redis/DB in production)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 3; // max lookups per phone per day
const RATE_LIMIT_WINDOW = 24 * 60 * 60 * 1000; // 24 hours

function checkRateLimit(phone: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(phone);

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(phone, { count: 1, lastReset: now });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

async function lookupSenators(zip: string): Promise<{ name: string; party: string; phone: string }[]> {
  // Google Civic API lookup
  const apiKey = process.env.GOOGLE_CIVIC_API_KEY;

  if (!apiKey) {
    // Fallback for testing - NY senators
    if (zip.startsWith('11') || zip.startsWith('10') || zip.startsWith('12')) {
      return [
        { name: 'Chuck Schumer', party: 'D', phone: '(202) 224-6542' },
        { name: 'Kirsten Gillibrand', party: 'D', phone: '(202) 224-4451' },
      ];
    }
    return [];
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/civicinfo/v2/representatives?address=${zip}&levels=country&roles=legislatorUpperBody&key=${apiKey}`
    );
    const data = await response.json();

    if (!data.officials) return [];

    return data.officials.map((official: any, index: number) => ({
      name: official.name,
      party: official.party?.charAt(0) || '?',
      phone: official.phones?.[0] || 'No phone listed',
    }));
  } catch (error) {
    console.error('Civic API error:', error);
    return [];
  }
}

function generateScriptUrl(zip: string, baseUrl: string): string {
  return `${baseUrl}/call/${zip}`;
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const body = formData.get('Body')?.toString().trim() || '';
  const from = formData.get('From')?.toString() || '';

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://callnow.vercel.app';

  let responseMessage = '';

  // Check if it's a zip code (5 digits)
  const zipMatch = body.match(/^\d{5}$/);

  if (body.toUpperCase() === 'CALL' || body.toUpperCase() === 'START') {
    responseMessage = "Welcome to CallNow! Reply with your 5-digit ZIP code to get your senators' numbers and a script to read.";
  } else if (zipMatch) {
    const zip = zipMatch[0];

    // Rate limiting
    if (!checkRateLimit(from)) {
      responseMessage = "You've reached the daily limit. Each person gets a limited number of lookups to maintain integrity. Try again tomorrow!";
    } else {
      const senators = await lookupSenators(zip);

      if (senators.length === 0) {
        responseMessage = "Sorry, I couldn't find senators for that ZIP code. Please double-check and try again.";
      } else {
        const scriptUrl = generateScriptUrl(zip, baseUrl);

        responseMessage = `Your senators:\n\n`;
        senators.forEach((senator, i) => {
          responseMessage += `${i + 1}. ${senator.name} (${senator.party})\n${senator.phone}\n\n`;
        });
        responseMessage += `Tap a number to call. Script & info:\n${scriptUrl}`;
      }
    }
  } else {
    responseMessage = "Reply CALL to get started, or send your 5-digit ZIP code to find your senators.";
  }

  // Return TwiML response
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Message>${responseMessage}</Message>
</Response>`;

  return new NextResponse(twiml, {
    headers: { 'Content-Type': 'text/xml' },
  });
}
