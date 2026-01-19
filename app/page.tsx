import React from "react";
import HomePageClient from "../components/HomePageClient";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Best Luxury Camping in Rishikesh | AC Tents @ ₹999 | Premium Glamping by Ganga River | Tapovan Swiss Camps",
  description:
    "Best luxury camping in Rishikesh! Tapovan Swiss Camps offers premium AC tents, cooler tents with stunning Ganga river views. Enjoy swimming pool, river rafting, yoga sessions, bonfire & delicious food. Perfect for families, couples & adventure lovers. Book your unforgettable camping experience in Rishikesh starting ₹999! 4.8★ rated with 150+ reviews.",
  keywords: [
    // Primary Keywords
    "camping in rishikesh",
    "best camping in rishikesh",
    "luxury camping in rishikesh",
    "rishikesh camping",
    "camping rishikesh",
    "rishikesh camping package",
    "rishikesh camping price",
    "camping in rishikesh near ganga",
    "riverside camping in rishikesh",
    "best camp in rishikesh",

    // Location-based Keywords
    "camping in rishikesh tapovan",
    "tapovan rishikesh camping",
    "shivpuri rishikesh camping",
    "camping in rishikesh shivpuri",
    "rishikesh camping places",
    "camping sites in rishikesh",
    "rishikesh camping resort",

    // Service-based Keywords
    "luxury ac tents rishikesh",
    "luxury cooler tents rishikesh",
    "swiss camps rishikesh",
    "ac tents in rishikesh",
    "cooler tents in rishikesh",
    "premium camping rishikesh",
    "glamping in rishikesh",

    // Activity-based Keywords
    "rishikesh camping and rafting",
    "rafting and camping in rishikesh",
    "yoga retreat rishikesh",
    "bonfire rishikesh camping",
    "swimming pool camp rishikesh",
    "adventure camping rishikesh",
    "rishikesh adventure sports",

    // Target Audience Keywords
    "family camping rishikesh",
    "couple camping rishikesh",
    "group camping rishikesh",
    "friends camping rishikesh",
    "corporate camping rishikesh",
    "team building rishikesh",

    // Price-based Keywords
    "cheapest camping in rishikesh",
    "budget camping rishikesh",
    "affordable camping rishikesh",
    "rishikesh camping price per person",
    "rishikesh camping price for couple",
    "rishikesh camping price for family",
    "camping in rishikesh under 1000",
    "camping in rishikesh under 2000",

    // Experience-based Keywords
    "best camping experience rishikesh",
    "luxury camping in rishikesh reviews",
    "top camping in rishikesh",
    "premium camping rishikesh",
    "best resort rishikesh",
    "ganga view camp rishikesh",
    "riverside camp rishikesh",

    // Booking Keywords
    "rishikesh camping booking",
    "book camping rishikesh",
    "camping rishikesh online booking",
    "rishikesh camping packages",
    "camping package rishikesh",

    // Brand Keywords
    "tapovan swiss camps",
    "tapovan swiss camps rishikesh",
    "tapovan camping rishikesh",
    "swiss camp rishikesh",

    // Long-tail Keywords
    "best luxury camping in rishikesh with ac tents",
    "rishikesh camping with swimming pool",
    "camping in rishikesh with bonfire",
    "family camping in rishikesh with kids",
    "couple camping in rishikesh with river view",
    "group camping in rishikesh for friends",
    "luxury camping in rishikesh with yoga",
    "best camping in rishikesh for adventure lovers",
    "premium camping in rishikesh with rafting",
    "swiss tents in rishikesh with ganga view",
    
    // Seasonal & Event Keywords
    "summer camping rishikesh",
    "winter camping rishikesh",
    "monsoon camping rishikesh",
    "weekend getaway rishikesh",
    "holiday camping rishikesh",
    "vacation camping rishikesh",
    
    // Experience & Quality Keywords
    "5 star camping rishikesh",
    "luxury glamping rishikesh",
    "premium tent stay rishikesh",
    "best rated camping rishikesh",
    "top camping resort rishikesh",
    "award winning camping rishikesh",
    
    // Activity-Specific Keywords
    "camping with rafting package rishikesh",
    "yoga retreat camping rishikesh",
    "adventure sports camping rishikesh",
    "meditation camping rishikesh",
    "nature photography camping rishikesh",
    
    // Location-Specific Long-tail
    "camping near ganga river rishikesh",
    "riverside luxury camping rishikesh",
    "tapovan area camping rishikesh",
    "shivpuri camping with amenities",
    "neelkanth road camping rishikesh",
  ],
  metadataBase: new URL("https://www.tapovanswisscampsofficial.com"),
  alternates: {
    canonical: "https://www.tapovanswisscampsofficial.com",
    languages: {
      "en-IN": "https://www.tapovanswisscampsofficial.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.tapovanswisscampsofficial.com",
    siteName: "Tapovan Swiss Camps",
    title:
      "Best Luxury Camping in Rishikesh | AC Tents @ ₹999 | Premium Glamping by Ganga River",
    description:
      "Book your stay at Tapovan Swiss Camps! Enjoy luxury AC tents, cooler tents with stunning Ganga river views, swimming pool, river rafting, yoga sessions, bonfire & delicious food. Perfect for families, couples & adventure lovers. Best camping in Rishikesh starting ₹999! 4.8★ rated.",
    images: [
      {
        url: "https://www.tapovanswisscampsofficial.com/assets/img/room/gardenPhoto.webp",
        width: 1200,
        height: 630,
        alt: "Luxury camping tents at Tapovan Swiss Camps with Ganga River view in Rishikesh",
      },
      {
        url: "https://www.tapovanswisscampsofficial.com/assets/img/room/ACTent1.webp",
        width: 1200,
        height: 630,
        alt: "Luxury AC tents at Tapovan Swiss Camps Rishikesh",
      },
      {
        url: "https://www.tapovanswisscampsofficial.com/assets/img/room/pool.webp",
        width: 1200,
        height: 630,
        alt: "Swimming pool and camping facilities at Tapovan Swiss Camps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tapovanswisscamps",
    creator: "@tapovanswisscamps",
    title:
      "Best Luxury Camping in Rishikesh | AC Tents @ ₹999 | Premium Glamping by Ganga",
    description:
      "Best luxury camping in Rishikesh! AC tents, Ganga river views, swimming pool, rafting, yoga & more. Perfect for families & couples. Book now @ ₹999! 4.8★ rated.",
    images: [
      "https://www.tapovanswisscampsofficial.com/assets/img/room/gardenPhoto.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Tapovan Swiss Camps",
    description:
      "Best luxury camping in Rishikesh with AC tents, cooler tents, Ganga river views, swimming, rafting, yoga, and delicious food. Perfect for families, couples, and adventure lovers.",
    url: "https://www.tapovanswisscampsofficial.com",
    telephone: "+91-7906924003",
    email: "tswisscamps@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Deecon Valley Road, Vill. Dholshoot Tapovan",
      addressLocality: "Rishikesh",
      addressRegion: "Uttarakhand",
      postalCode: "249137",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "30.1394296",
      longitude: "78.315361",
    },
    priceRange: "₹999-₹1999",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "AC Tents",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Cooler Tents",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Swimming Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Rafting",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Yoga",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Bonfire",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Ganga River View",
        value: true,
      },
    ],
    starRating: {
      "@type": "Rating",
      ratingValue: "4.8",
      bestRating: "5",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
      bestRating: "5",
    },
    image: [
      "https://www.tapovanswisscampsofficial.com/assets/img/room/gardenPhoto.webp",
      "https://www.tapovanswisscampsofficial.com/assets/img/room/ACTent1.webp",
      "https://www.tapovanswisscampsofficial.com/assets/img/room/pool.webp",
    ],
    sameAs: [
      "https://www.facebook.com/tapovanswisscamps",
      "https://www.instagram.com/tapovanswisscamps",
      "https://www.youtube.com/tapovanswisscamps",
    ],
    openingHours: "Mo-Su 00:00-23:59",
    checkinTime: "12:00",
    checkoutTime: "11:00",
    petsAllowed: false,
    smokingAllowed: false,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best camping experience in Rishikesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tapovan Swiss Camps offers the best luxury camping experience in Rishikesh with premium AC tents, cooler tents, stunning Ganga river views, swimming pool, river rafting, yoga sessions, bonfire, and delicious food. Perfect for families, couples, and adventure lovers starting from ₹999.",
        },
      },
      {
        "@type": "Question",
        name: "What are the camping prices in Rishikesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Camping prices in Rishikesh at Tapovan Swiss Camps start from ₹999 per person for cooler tents and ₹1799 for luxury AC tents. Prices include accommodation, meals, bonfire, and access to all facilities. Special group discounts available.",
        },
      },
      {
        "@type": "Question",
        name: "Is camping in Rishikesh safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Tapovan Swiss Camps ensures complete safety with 24/7 security, trained staff, and all necessary safety measures. Our campsite is well-maintained and follows all safety protocols for a secure and enjoyable camping experience.",
        },
      },
      {
        "@type": "Question",
        name: "What activities are available during camping in Rishikesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Camping at Tapovan Swiss Camps includes river rafting, swimming in our pool, yoga sessions, evening bonfire, volleyball, adventure sports, and exploration of nearby attractions. All activities are supervised by trained professionals.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in the camping package?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our camping package includes luxury tent accommodation (AC or cooler tents), all meals (breakfast, lunch, dinner), evening bonfire, access to swimming pool, basic adventure activities, and all modern amenities. Special packages may include rafting and other adventure activities.",
        },
      },
      {
        "@type": "Question",
        name: "Can I book camping for a group in Rishikesh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Tapovan Swiss Camps welcomes groups and offers special group discounts. We have tents suitable for families, friends, and corporate groups. Contact us at +91-7906924003 for customized group packages and special rates.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>
      <HomePageClient />
    </>
  );
}

export default Home;
