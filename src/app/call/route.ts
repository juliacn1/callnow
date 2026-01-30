import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const zip = searchParams.get('zip');

  if (zip && /^\d{5}$/.test(zip)) {
    redirect(`/call/${zip}`);
  }

  redirect('/');
}
