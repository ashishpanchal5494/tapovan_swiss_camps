import HomePageClient from "@/components/HomePageClient";

// ✅ SEO Metadata
export const metadata = {
  title: "Tapovan Swiss Camps | Luxury and best Camping in Rishikesh",
  description:
    "Book your stay at Tapovan Swiss Camps – premium riverside and waterfall side camping in Rishikesh with AC tents, adventure activities, yoga, rafting, and more. Perfect for families, couples, and groups.",
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
  alternates: {
    canonical: "https://www.tapovanswisscampsofficial.com",
  },
  openGraph: {
    title:
      "Tapovan Swiss Camps | Riverside and waterfall side Camping in Rishikesh",
    description:
      "Experience luxury and best camping in Rishikesh at Tapovan Swiss Camps. Enjoy best food, rafting, yoga, bonfire, and scenic views with top-rated facilities.",
    url: "https://www.tapovanswisscampsofficial.com",
    siteName: "Tapovan Swiss Camps",
    images: [
      {
        url: "https://tapovanswisscampsofficial.com/_next/image?url=%2Fassets%2Fimg%2Froom%2Fgarden.webp&w=1920&q=75",
        width: 1200,
        height: 630,
        alt: "Tapovan Swiss Camps - Luxury Riverside Camping in Rishikesh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tapovan Swiss Camps",
    description:
      "Tapovan Swiss Camps - Riverside luxury tents in Rishikesh with AC rooms, yoga, rafting, and more.",
    images: [
      "https://tapovanswisscampsofficial.com/_next/image?url=%2Fassets%2Fimg%2Froom%2Fgarden.webp&w=1920&q=75",
    ],
  },
};

export default function Home() {
  return <HomePageClient />;
}
