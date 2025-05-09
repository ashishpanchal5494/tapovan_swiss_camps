import type { Metadata } from "next";

import { Readex_Pro } from "next/font/google";

import "./globals.css";
import "../public/assets/css/dark-theme.css";
import "../public/assets/css/remixicon.css";
import "../public/assets/css/fancybox.css";
import "../public/assets/css/animate.css";
import "../public/assets/css/aos.css";
import "../public/assets/css/slick-theme.css";
import "../public/assets/css/style.css";
import "../public/assets/css/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Layout from "@/components/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";

const readexPro = Readex_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-readex-pro",
});

export const metadata: Metadata = {
  title: "Luxury Swiss Camps & Resort in Rishikesh | Tapovan Swiss Camps",
  description:
    "Experience the best riverside camping in Rishikesh with Tapovan Swiss Camps. Enjoy luxury tents, swimming pool, best food, best activities, bonfire nights, rafting, bungee jumping, yoga, and more in the serene Himalayas.",
  keywords: [
    "Rishikesh camping",
    "Luxury AC tents in Rishikesh",
    "Luxury Cooler tents in Rishikesh",
    "Swiss camps in Rishikesh",
    "Adventure camp Rishikesh",
    "Rishikesh resort booking",
    "Riverside camp Rishikesh",
    "Tapovan Swiss Camps",
    "Best camping in Rishikesh",
    "Camp near Ganga river",
    "Yoga retreat Rishikesh",
  ],
  metadataBase: new URL("https://www.tapovanswisscampsofficial.com"),
  authors: [
    {
      name: "Tapovan Swiss Camp",
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
        url: "/assets/img/room/garden.PNG",
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
    images: ["/assets/img/room/garden.PNG"],
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
    apple: "/apple-touch-icon.png", // Add this icon if available
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
          <WhatsAppButton />
        </Layout>
      </body>
    </html>
  );
}
