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
  title: "Tapovan Swiss Camps - Best Camping in Rishikesh, Book Now @ ₹999",
  description:
    "Tapovan Swiss Camps offers best luxury camping experience in Rishikesh. Enjoy AC & Cooler tents, river views, swimming, rafting, yoga, and delicious food. Perfect for families, couples, and adventure seekers. Book your unforgettable Rishikesh camp stay today in ₹999!",
  keywords: [
    "camping in rishikesh",
    "camping in rishikesh tapovan",
    "Rishikesh camping",
    "rishikesh camping and rafting",
    "riverside camping in rishikesh",
    "best camping in rishikesh",
    "best camp in tapovan, rishikesh",
    "rishikesh camping package",
    "rishikesh camping packages",
    "rishikesh camping resort",
    "rishikesh camping places",
    "rishikesh camping price per person",
    "camp brook",
    "luxury camping in rishikesh reviews",
    "luxury camping in rishikesh",
    "camping in rishikesh price",
    "shivpuri rishikesh camping",
    "camping in rishikesh shivpuri",
    "bonfire rishikesh camping",
    "luxury camping in rishikesh photos",
    "camping in rishikesh near ganga",
    "camping in rishikesh near river",
    "best camps in rishikesh near ganga",
    "rishikesh river side camping price",
    "camping sites in rishikesh",
    "rafting & camping in rishikesh",
    "rishikesh camping and rafting",
    "rishikesh camping price for couple",
    "rishikesh camping price for family",
    "cheapest camping in rishikesh",
    "Luxury AC tents Rishikesh",
    "Luxury Cooler tents Rishikesh",
    "Swiss camps Rishikesh",
    "rishikesh camping booking",
    "Riverside camp Rishikesh",
    "Tapovan Swiss Camps",
    "Camp near Ganga river",
    "Yoga retreat Rishikesh",
    "Family camping Rishikesh",
    "Couple camping Rishikesh",
    "Group camping Rishikesh",
    "Rishikesh adventure sports",
    "Best resort Rishikesh",
    "Ganga view camp Rishikesh",
    "Swimming pool camp Rishikesh",
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
    title:
      "Tapovan Swiss Camps - Best Luxury Camping in Rishikesh, Book Now @ ₹999",
    description:
      "Book your stay at Tapovan Swiss Camp and enjoy riverside luxury tents, yoga, rafting, best food, best nature view, best activities & bonfires in Rishikesh. Perfect for families, couples & adventure lovers.",
    url: "https://www.tapovanswisscampsofficial.com",
    siteName: "Tapovan Swiss Camps",
    images: [
      {
        url: "https://www.tapovanswisscampsofficial.com/assets/img/room/gardenPhoto.webp",
        width: 1200,
        height: 630,
        alt: "Tapovan Swiss Camps Rishikesh - Riverside Luxury Camping, Book Now @ ₹999",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tapovan Swiss Camps - Best Luxury Camping in Rishikesh, Book Now @ ₹999",
    description:
      "Tapovan Swiss Camp offers riverside luxury tents, yoga, adventure sports, and more in the scenic beauty of Rishikesh.",
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
    },
  },
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
            id="structured-data"
            strategy="afterInteractive"
          >
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Campground",
              name: "Tapovan Swiss Camps",
              image:
                "https://www.tapovanswisscampsofficial.com/assets/img/room/gardenPhoto.webp",
              description:
                "Luxury riverside camping in Rishikesh with rafting, swimming pool, bonfire nights, and adventure activities.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rishikesh",
                addressRegion: "Uttarakhand",
                postalCode: "249201",
                addressCountry: "IN",
              },
              url: "https://www.tapovanswisscampsofficial.com",
              telephone: "+91-7906924003",
            })}
          </Script>
          <Script
            type="application/ld+json"
            id="structured-data"
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
          <WhatsAppButton />
        </Layout>
      </body>
    </html>
  );
}
