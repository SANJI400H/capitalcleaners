import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capital Cleaners — Professional Cleaning Services UK",
  description:
    "Reliable, high-quality cleaning services across the UK. Domestic, office, deep cleaning, end of tenancy, move-in/move-out and more. Call 07919 936046.",
  keywords: "cleaning services UK, domestic cleaning, office cleaning, end of tenancy, deep cleaning",
  openGraph: {
    title: "Capital Cleaners — Professional Cleaning Services UK",
    description: "Reliable, high-quality cleaning services across the UK.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
