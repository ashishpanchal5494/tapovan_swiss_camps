import type { Metadata } from "next";

import { Readex_Pro } from "next/font/google";

import "./globals.css";

import "../public/assets/css/remixicon.css";
import "../public/assets/css/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";

import Layout from "@/components/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";

import Script from "next/script";

const readexPro = Readex_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-readex-pro",
});

export const metadata: Metadata = {
  title: {
    default: "Luxury Swiss Camps & Resort in Rishikesh | Tapovan Swiss Camps",
    template: "%s | Tapovan Swiss Camps - Best Camping in Rishikesh",
  },
  description:
    "Experience premium riverside camping in Rishikesh with Tapovan Swiss Camps. Enjoy luxury AC tents, adventure sports (rafting, bungee), yoga retreats, bonfire nights & gourmet meals amidst Himalayan scenery. Best family & couple camping resort near Ganga.",
  keywords: [
    "luxury camping Rishikesh",
    "best camping in rishikesh",
    "best Swiss tents Rishikesh",
    "premium riverside resort",
    "AC tents near Ganga",
    "family camping Rishikesh",
    "couple camping packages",
    "adventure sports Rishikesh",
    "yoga retreat with camping",
    "Tapovan Swiss Camps booking",
    "5-star camping experience",
    "Rishikesh nature resort",
    "luxury tents with pool",
  ],
  metadataBase: new URL("https://www.tapovanswisscampsofficial.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/en-IN",
    },
  },
  authors: [
    {
      name: "Tapovan Swiss Camps",
      url: "https://www.tapovanswisscampsofficial.com/about",
    },
  ],
  publisher: "Tapovan Swiss Camps",
  creator: "Tapovan Swiss Camps",
  openGraph: {
    title:
      "Luxury Riverside & waterfall side Camping in Rishikesh | Tapovan Swiss Camps",
    description:
      "Book premium AC tents with adventure activities, yoga, and gourmet dining. Best family & couple camping resort near Ganga river in Rishikesh.",
    url: "https://www.tapovanswisscampsofficial.com",
    siteName: "Tapovan Swiss Camps",
    images: [
      {
        url: "/assets/img/room/garden.webp",
        width: 1200,
        height: 630,
        alt: "Luxury Tents at Tapovan Swiss Camps with Mountain Views",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TapovanSwissCamp",
    creator: "@TapovanSwissCamp",
    title: "Luxury Camping in Rishikesh | Tapovan Swiss Camps",
    description:
      "Premium riverside tents with adventure sports & yoga retreats in Rishikesh",
    images: ["/assets/img/twitter-card.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": ["Campground", "Resort", "LodgingBusiness"],
  "@id": "https://www.tapovanswisscampsofficial.com/#organization",
  name: "Tapovan Swiss Camps",
  image: [
    "https://www.tapovanswisscampsofficial.com/assets/img/room/garden.webp",
    "https://www.tapovanswisscampsofficial.com/assets/img/room/actent-1.webp",
  ],
  description:
    "Luxury riverside & waterfall side camping resort in Rishikesh offering premium AC tents, adventure sports, yoga retreats and gourmet dining experiences.",
  url: "https://www.tapovanswisscampsofficial.com",
  telephone: "+91-7906924003",
  priceRange: "₹999-₹1799",
  starRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Deecon Valley Road, Vill. Dholshoot Tapovan",
    addressLocality: "Rishikesh",
    addressRegion: "Uttarakhand",
    postalCode: "249201",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.1394342",
    longitude: "78.3127861",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.facebook.com/tapovanswisscamps",
    "https://www.instagram.com/tapovanswisscamps",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Camping Packages",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Luxury AC Tents",
        itemListElement: {
          "@type": "Offer",
          itemOffered: {
            "@type": "LodgingReservation",
            name: "Luxury AC Tent Package",
          },
        },
      },
      {
        "@type": "OfferCatalog",
        name: "Adventure Packages",
        itemListElement: {
          "@type": "Offer",
          itemOffered: {
            "@type": "LodgingReservation",
            name: "Rafting + Camping Package",
          },
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={readexPro.variable}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="geo.region" content="IN-UT" />
        <meta name="geo.placename" content="Rishikesh" />
        <meta name="geo.position" content="30.1394342;78.3127861" />
        <meta name="ICBM" content="30.1394342, 78.3127861" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="safe for kids" />
        <meta name="apple-mobile-web-app-title" content="Tapovan Swiss Camps" />
        <meta name="application-name" content="Tapovan Swiss Camps" />
        <meta name="msapplication-TileColor" content="#507650" />

        {/* Preload critical resources */}
        <link rel="preload" href="/assets/css/remixicon.css" as="style" />
        <link rel="preload" href="/assets/css/responsive.css" as="style" />
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />

        {/* Preconnect to important origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Layout>
          {children}
          <Script
            type="application/ld+json"
            id="structured-data"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <WhatsAppButton />
        </Layout>
      </body>
    </html>
  );
}
