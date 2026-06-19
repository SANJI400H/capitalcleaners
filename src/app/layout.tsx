import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://www.capitalcleaners.co.uk";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0071e3",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Capital Cleaners | Professional Cleaning Services UK",
    template: "%s | Capital Cleaners",
  },
  description:
    "Capital Cleaners — trusted, fully insured professional cleaning services across the UK. Domestic, office, deep cleaning, end of tenancy, move-in/move-out & property cleaning. Free quotes. Call 07919 936046.",
  keywords: [
    "cleaning services UK",
    "professional cleaning services",
    "domestic cleaning services",
    "house cleaning services UK",
    "end of tenancy cleaning",
    "end of tenancy clean UK",
    "deep cleaning service UK",
    "office cleaning services",
    "commercial cleaning services UK",
    "move out cleaning",
    "move in cleaning service",
    "professional cleaners UK",
    "cleaning company UK",
    "home cleaning services",
    "residential cleaning services",
    "regular cleaning service",
    "weekly cleaning service",
    "deep clean house",
    "after tenancy cleaning",
    "get deposit back cleaning",
    "insured cleaning company UK",
    "eco-friendly cleaning service",
    "vetted cleaners UK",
    "affordable cleaning services",
    "cleaning services near me",
    "property cleaning service",
    "communal area cleaning",
    "reliable cleaning company",
    "5 star cleaning service UK",
    "free quote cleaning service",
  ],
  authors: [{ name: "Capital Cleaners", url: SITE_URL }],
  creator: "Capital Cleaners",
  publisher: "Capital Cleaners",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Capital Cleaners | Professional Cleaning Services UK",
    description:
      "Trusted, fully insured cleaning services across the UK. Domestic, office, deep cleaning, end of tenancy & more. Free quotes — call 07919 936046.",
    type: "website",
    url: SITE_URL,
    siteName: "Capital Cleaners",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Cleaners | Professional Cleaning Services UK",
    description:
      "Trusted, fully insured cleaning services across the UK. Domestic, office, deep cleaning, end of tenancy & more. Free quotes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
