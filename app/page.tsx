import HomePageClient from "@/components/HomePageClient";

// ✅ Enhanced SEO Metadata with Semantic Structure
export const metadata = {
  title:
    "Luxury Camping in Rishikesh | AC Tents, Yoga, Rafting - Tapovan Swiss Camps",
  description:
    "Experience premium riverside camping in Rishikesh with AC luxury tents, gourmet dining, yoga sessions, white-water rafting, and breathtaking Himalayan views. Best family & couple-friendly resort in Uttarakhand.",
  keywords: [
    "Best camping in Rishikesh",
    "Luxury tents Rishikesh with AC",
    "Rishikesh riverside camping",
    "5-star camping Rishikesh",
    "Tapovan Swiss Camps booking",
    "Rishikesh adventure resort",
    "Ganga view tents Rishikesh",
    "Yoga and rafting package",
    "Premium camping near Delhi",
    "Couple getaway Rishikesh",
    "Family vacation Uttarakhand",
    "Luxury nature retreat India",
  ],
  alternates: {
    canonical: "https://www.tapovanswisscampsofficial.com",
  },
  openGraph: {
    title: "Rishikesh's Premier Luxury Camping | Tapovan Swiss Camps",
    description:
      "Book your stay at Rishikesh's #1 luxury camping destination featuring AC tents, adventure sports, yoga by the Ganges, and gourmet dining amidst nature.",
    url: "https://www.tapovanswisscampsofficial.com",
    siteName: "Tapovan Swiss Camps - Luxury Camping Rishikesh",
    images: [
      {
        url: "https://tapovanswisscampsofficial.com/assets/img/room/actent-1.webp",
        width: 1200,
        height: 630,
        alt: "Luxury AC tent with Ganges view at Tapovan Swiss Camps",
      },
      {
        url: "https://tapovanswisscampsofficial.com/assets/img/blog/rafting_rishikesh.webp",
        width: 1200,
        height: 630,
        alt: "White water rafting adventure in Rishikesh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Camping in Rishikesh | Tapovan Swiss Camps",
    description:
      "5-star camping experience with AC tents, adventure sports, and yoga retreats by the Ganges. Perfect for couples and families.",
    images: [
      "https://tapovanswisscampsofficial.com/assets/assets/img/room/garden.webp",
    ],
    site: "@TapovanSwissCamps",
    creator: "@TapovanSwissCamps",
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
  // ✅ Additional SEO Meta Tags
  authors: [
    {
      name: "Tapovan Swiss Camps",
      url: "https://tapovanswisscampsofficial.com",
    },
  ],
  publisher: "Tapovan Swiss Camps",
  category: "Travel & Tourism",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function Home() {
  return <HomePageClient />;
}
