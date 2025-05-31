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
    template: "%s - Tapovan Swiss Camps | Best Camping in Rishikesh",
  },
  description:
    "Experience the best riverside camping in Rishikesh with Tapovan Swiss Camps. Enjoy luxury tents, swimming pool, best food, best activities, bonfire nights, rafting, bungee jumping, yoga, and more in the serene Himalayas.",
  keywords: [
    "Rishikesh camping",
    "Luxury AC tents Rishikesh",
    "Luxury Cooler tents Rishikesh",
    "Swiss camps Rishikesh",
    "Adventure camp Rishikesh",
    "Rishikesh resort booking",
    "Riverside camp Rishikesh",
    "Tapovan Swiss Camps",
    "Best camping in Rishikesh",
    "Camp near Ganga river",
    "Yoga retreat Rishikesh",
    "Family camping Rishikesh",
    "Couple camping Rishikesh",
    "Group camping Rishikesh",
    "Rishikesh adventure sports",
    "Camping packages Rishikesh",
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
    title: "Tapovan Swiss Camps | Riverside Luxury Camping in Rishikesh",
    description:
      "Book your stay at Tapovan Swiss Camp and enjoy riverside luxury tents, yoga, rafting, best food, best nature view, best activities & bonfires in Rishikesh. Perfect for families, couples & adventure lovers.",
    url: "https://www.tapovanswisscampsofficial.com",
    siteName: "Tapovan Swiss Camps",
    images: [
      {
        url: "https://www.tapovanswisscampsofficial.com/assets/img/room/garden.webp",
        width: 1200,
        height: 630,
        alt: "Tapovan Swiss Camps Rishikesh - Riverside Luxury Camping",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tapovan Swiss Camps | Riverside Luxury Camping in Rishikesh",
    description:
      "Tapovan Swiss Camp offers riverside luxury tents, yoga, adventure sports, and more in the scenic beauty of Rishikesh.",
    images: [
      "https://www.tapovanswisscampsofficial.com/assets/img/room/garden.webp",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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
                "https://www.tapovanswisscampsofficial.com/assets/img/room/garden.webp",
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
          <WhatsAppButton />
        </Layout>
      </body>
    </html>
  );
}
