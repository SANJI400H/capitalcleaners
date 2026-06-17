import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Capital Cleaners — Professional Cleaning Services UK",
  description:
    "Reliable, high-quality cleaning services across the UK. Domestic, office, deep cleaning, end of tenancy, move-in/move-out and more. Call 07919 936046.",
  keywords: "cleaning services UK, domestic cleaning, office cleaning, end of tenancy, deep cleaning, move out cleaning",
  openGraph: {
    title: "Capital Cleaners — Professional Cleaning Services UK",
    description: "Reliable, high-quality cleaning services across the UK.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
