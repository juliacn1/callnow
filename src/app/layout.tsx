import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CallNow - Call Your Senator",
  description: "Take 2 minutes to make your voice heard. Get your senators' numbers and a script to read.",
  openGraph: {
    title: "Call Your Senator",
    description: "Take 2 minutes to make your voice heard on ICE enforcement. Tap to call + script provided.",
    siteName: "CallNow",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Call Your Senator",
    description: "Take 2 minutes to make your voice heard on ICE enforcement.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
