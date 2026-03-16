import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";

import "./globals.css";
import "../public/assets/css/remixicon.css";
import "../public/assets/css/responsive.css";
import "../public/assets/css/team.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";

import Layout from "@/components/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

const readexPro = Readex_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-readex-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Camping in Rishikesh | Best Luxury AC Tents @ ₹999 | Tapovan Swiss Camps",
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
  authors: [
    {
      name: "Tapovan Swiss Camps",
      url: "https://www.tapovanswisscampsofficial.com",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.tapovanswisscampsofficial.com",
    siteName: "Tapovan Swiss Camps",
    title:
      "Camping in Rishikesh | Best Luxury AC Tents @ ₹999 | Tapovan Swiss Camps",
    description:
      "Camping in Rishikesh: Book your stay at Tapovan Swiss Camps! Enjoy luxury AC tents, cooler tents with Ganga river views, swimming, rafting, yoga, bonfire & delicious food. Best camping in Rishikesh starting ₹999!",
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
      "Camping in Rishikesh | Best Luxury AC Tents @ ₹999 | Tapovan Swiss Camps",
    description:
      "Camping in Rishikesh: AC tents, Ganga views, swimming, rafting, yoga & more. Book now @ ₹999!",
    images: [
      "https://www.tapovanswisscampsofficial.com/assets/img/room/gardenPhoto.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
  category: "Travel & Tourism",
  classification: "Luxury Camping Resort",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={readexPro.variable}>
      <body>
        <Layout>
          {children}
          <Script
            type="application/ld+json"
            id="lodging-business-schema"
            strategy="afterInteractive"
          >
            {JSON.stringify({
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
              potentialAction: {
                "@type": "ReserveAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.tapovanswisscampsofficial.com/booking-form",
                  actionPlatform: [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform",
                  ],
                },
                result: {
                  "@type": "Reservation",
                  name: "Camping Reservation at Tapovan Swiss Camps",
                },
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
            })}
          </Script>
          <Script
            type="application/ld+json"
            id="reviews-schema"
            strategy="afterInteractive"
          >
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Babita Rautela",
              },
              datePublished: "2024-04-05",
              reviewBody:
                "I absolutely loved my camp stay! The staff were incredibly friendly, and the food was delicious – it was an all-around fantastic experience.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              itemReviewed: {
                "@type": "LodgingBusiness",
                name: "Tapovan Swiss Camps",
              },
            })}
          </Script>
          <Script
            type="application/ld+json"
            id="organization-schema"
            strategy="afterInteractive"
          >
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tapovan Swiss Camps",
              url: "https://www.tapovanswisscampsofficial.com",
              logo: "https://www.tapovanswisscampsofficial.com/assets/img/logo.png",
              description:
                "Best luxury camping in Rishikesh with AC tents, cooler tents, Ganga river views, swimming, rafting, yoga, and delicious food.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Deecon Valley Road, Vill. Dholshoot Tapovan",
                addressLocality: "Rishikesh",
                addressRegion: "Uttarakhand",
                postalCode: "249137",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-7906924003",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.facebook.com/tapovanswisscamps",
                "https://www.instagram.com/tapovanswisscamps",
                "https://www.youtube.com/tapovanswisscamps",
              ],
            })}
          </Script>
          <WhatsAppButton />
        </Layout>
      </body>
    </html>
  );
}
