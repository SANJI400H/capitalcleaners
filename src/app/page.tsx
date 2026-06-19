import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TikTokFloat from "@/components/TikTokFloat";

const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => (
    <section className="py-28 px-5 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="h-4 w-20 bg-[#f5f5f7] rounded-full mx-auto mb-4" />
        <div className="h-10 w-64 bg-[#f5f5f7] rounded-2xl mx-auto mb-4" />
        <div className="h-4 w-80 bg-[#f5f5f7] rounded-full mx-auto" />
      </div>
      <div
        className="mx-auto bg-[#f5f5f7] rounded-3xl animate-pulse"
        style={{ maxWidth: "900px", aspectRatio: "16/10" }}
      />
    </section>
  ),
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CleaningService",
      "@id": "https://www.capitalcleaners.co.uk/#business",
      name: "Capital Cleaners",
      url: "https://www.capitalcleaners.co.uk",
      telephone: "+447919936046",
      email: "capitalccleanersss@gmail.com",
      description:
        "Capital Cleaners is a trusted, fully insured professional cleaning company serving homes and businesses across the UK. We specialise in domestic cleaning, office cleaning, deep cleaning, end of tenancy cleaning, move-in/move-out cleaning, and general property cleaning.",
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      priceRange: "££",
      currenciesAccepted: "GBP",
      openingHours: "Mo-Su 07:00-20:00",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cleaning Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Domestic Cleaning", description: "Regular home cleaning tailored to your schedule. Kitchens, bathrooms, bedrooms — everything kept pristine." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Cleaning", description: "Professional workplace cleaning before or after office hours to keep your team in a healthy environment." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Cleaning", description: "A thorough top-to-bottom clean covering every nook and cranny. Perfect for a serious seasonal refresh." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "End of Tenancy Cleaning", description: "Meet landlord and agency standards with our comprehensive end-of-tenancy clean. Get your deposit back." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Move-In / Move-Out Cleaning", description: "Starting fresh or leaving a property? We'll make sure it's spotless for the next chapter." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Property Cleaning", description: "Flexible cleaning for commercial units, communal areas, and any space that needs professional attention." } },
        ],
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "James M." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Absolutely brilliant service — our office has never looked this clean. Would highly recommend Capital Cleaners to anyone.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Sarah R." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Booked end of tenancy clean and got my full deposit back. Professional, thorough, and genuinely great value.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Alex P." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "The deep clean they did on my house was incredible. Could not believe the difference. Will definitely be booking again.",
        },
      ],
      sameAs: ["https://www.tiktok.com/@capital_cleaners"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.capitalcleaners.co.uk/#website",
      url: "https://www.capitalcleaners.co.uk",
      name: "Capital Cleaners",
      publisher: { "@id": "https://www.capitalcleaners.co.uk/#business" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Gallery />
        <WhyUs />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <TikTokFloat />
    </>
  );
}
