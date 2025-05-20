import HomePageClient from "@/components/HomePageClient";

// ✅ SEO Metadata
export const metadata = {
  title:
    "Tapovan Swiss Camps | Luxury Camping in Rishikesh with AC Tents, best food, best view, Yoga, Rafting",
  description:
    "Tapovan Swiss Camps offers luxury riverside and waterfall-side camping in Rishikesh. Enjoy AC tents, yoga, rafting, bonfire, and family-friendly adventure activities.",
  keywords: [
    "Rishikesh camping",
    "Luxury tents Rishikesh",
    "AC tents in Rishikesh",
    "Tapovan Swiss Camps",
    "Rishikesh resort booking",
    "Adventure camping Rishikesh",
    "Rafting Rishikesh",
    "Yoga retreat Rishikesh",
    "Couples camping Rishikesh",
    "Family camping in Rishikesh",
    "Camping near Ganga Rishikesh",
  ],
  alternates: {
    canonical: "https://www.tapovanswisscampsofficial.com",
  },
  openGraph: {
    title: "Tapovan Swiss Camps | Riverside & Waterfall Camping in Rishikesh",
    description:
      "Book a stay at Tapovan Swiss Camps – Rishikesh's luxury destination for AC tents, rafting, yoga, bonfires, and serene nature views.",
    url: "https://www.tapovanswisscampsofficial.com",
    siteName: "Tapovan Swiss Camps",
    images: [
      {
        url: "https://tapovanswisscampsofficial.com/_next/image?url=%2Fassets%2Fimg%2Froom%2Fgarden.webp&w=1920&q=75",
        width: 1200,
        height: 630,
        alt: "Luxury riverside camping at Tapovan Swiss Camps in Rishikesh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tapovan Swiss Camps | Luxury Camping in Rishikesh",
    description:
      "Tapovan Swiss Camps in Rishikesh offers luxurious AC tents, riverside views, rafting, yoga, and peaceful natural vibes. Perfect for couples and families.",
    images: [
      "https://tapovanswisscampsofficial.com/_next/image?url=%2Fassets%2Fimg%2Froom%2Fgarden.webp&w=1920&q=75",
    ],
    site: "@TapovanSwissCamps",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Home() {
  return <HomePageClient />;
}
