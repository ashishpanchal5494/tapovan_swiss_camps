import { Metadata } from "next";
import FAQPage from "./FAQPage";

const BASE_URL = "https://tapovanswisscampsofficial.com";

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "FAQs Tapovan Swiss Camps - Complete Guide to Camping & Rafting in Rishikesh | 24/7 Support";
  const description =
    "Get instant answers to all your questions about luxury camping, rafting, and adventure activities in Rishikesh. Comprehensive FAQ covering booking, facilities, safety, and policies at Tapovan Swiss Camps.";

  // Enhanced keywords for better SEO
  const keywords = [
    "camping in rishikesh faq",
    "rishikesh camping questions",
    "frequently asked questions camping rishikesh",
    "frequently asked questions rafting rishikesh",
    "tapovan swiss camps faq",
    "camping in rishikesh information",
    "rafting in rishikesh help",
    "swiss tent booking questions",
    "adventure sports rishikesh faq",
    "luxury camping rishikesh guide",
    "how to book camping rishikesh",
    "how to book rafting rishikesh",
    "bungee jumping rishikesh faq",
    "camping facilities rishikesh",
    "rafting safety rishikesh",
    "pet friendly camping rishikesh",
    "camping cancellation policy",
    "rishikesh adventure activities",
    "tapovan camps location",
    "camping payment methods",
    "swiss tent amenities",
    "rafting equipment provided",
    "camping check in checkout",
    "emergency contact camping",
    "what to pack camping rishikesh",
  ];

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/faq`,
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
    openGraph: {
      title: "FAQs Tapovan Swiss Camps - Complete Guide to Rishikesh Adventure",
      description:
        "Get instant answers to all your questions about luxury camping, rafting, and adventure activities in Rishikesh. 24/7 support available.",
      url: `${BASE_URL}/faq`,
      siteName: "Tapovan Swiss Camps",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/assets/img/room/group.webp`,
          width: 1200,
          height: 630,
          alt: "Frequently Asked Questions - Tapovan Swiss Camps Rishikesh",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "FAQs Tapovan Swiss Camps - Rishikesh Adventure Guide",
      description:
        "Complete FAQ guide for camping and rafting in Rishikesh. Get all your questions answered instantly.",
      images: [`${BASE_URL}/assets/img/room/group.webp`],
    },
    other: {
      "geo.region": "IN-UT",
      "geo.placename": "Rishikesh",
      "geo.position": "30.129;78.3153",
      ICBM: "30.129, 78.3153",
    },
  };
}

const FAQ = () => {
  return <FAQPage />;
};

export default FAQ;
