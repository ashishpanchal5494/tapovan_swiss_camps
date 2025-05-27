import { Metadata } from "next";
import FAQPage from "./FAQPage";

const BASE_URL = "https://tapovanswisscampsofficial.com";

export async function generateMetadata(): Promise<Metadata> {
  const title = "FAQs About ";
  const description =
    "Find answers to all your questions about luxury camping and rafting in Rishikesh. Booking, cancellations, facilities, and more about Tapovan Swiss Camps.";

  // Generate keywords from FAQ data
  const keywords = [
    "rishikesh camping faq",
    "tapovan swiss camps questions",
    "gangs rafting frequently asked",
    "luxury tents rishikesh help",
    "camping in rishikesh information",
    "swiss tent booking queries",
    "adventure sports rishikesh faq",
  ];

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/faq`,
    },
    openGraph: {
      title: "FAQs | Tapovan Swiss Camps - Rishikesh Adventure Experts",
      description:
        "Get all your questions answered about luxury camping and rafting experiences in Rishikesh with Tapovan Swiss Camps.",
      url: `${BASE_URL}/faq`,
      siteName: "Tapovan Swiss Camps",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/assets/img/room/group.webp`,
          width: 1200,
          height: 630,
          alt: "FAQs About Tapovan Swiss Camps",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "FAQs About Tapovan Swiss Camps | Rishikesh",
      description:
        "Everything you need to know before booking your luxury camping or rafting adventure in Rishikesh.",
      images: [`${BASE_URL}/assets/img/room/group.webp`],
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
  };
}

const FAQ = () => {
  return <FAQPage />;
};

export default FAQ;
