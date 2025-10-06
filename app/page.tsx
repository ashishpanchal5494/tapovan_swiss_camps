import React from "react";
import HomePageClient from "../components/HomePageClient";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Tapovan Swiss Camps - Best Luxury Camping in Rishikesh | AC Tents @ ₹999 | Book Now",

  description:
    "Best luxury camping in Rishikesh! Tapovan Swiss Camps offers premium AC tents, cooler tents with Ganga river views. Enjoy swimming, rafting, yoga, bonfire & delicious food. Perfect for families, couples & adventure lovers. Book your unforgettable camping experience in Rishikesh starting ₹999!",
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
      "Tapovan Swiss Camps - Best Luxury Camping in Rishikesh | AC Tents @ ₹999",
    description:
      "Book your stay at Tapovan Swiss Camps! Enjoy luxury AC tents, cooler tents with Ganga river views, swimming, rafting, yoga, bonfire & delicious food. Perfect for families, couples & adventure lovers. Best camping in Rishikesh starting ₹999!",
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
      "Tapovan Swiss Camps - Best Luxury Camping in Rishikesh | AC Tents @ ₹999",
    description:
      "Best luxury camping in Rishikesh! AC tents, Ganga views, swimming, rafting, yoga & more. Book now @ ₹999!",
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
    priceRange: "₹999-₹2999",
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

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <HomePageClient />
    </>
  );
}

export default Home;
