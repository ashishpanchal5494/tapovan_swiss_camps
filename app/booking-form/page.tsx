import { Metadata } from "next";
import BookingPage from "./BookingPage";

const BASE_URL = "https://www.tapovanswisscampsofficial.com";

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "Book Holi Camping & Party in Rishikesh 2026 - Tapovan Swiss Camps | ₹1800";
  const description =
    "Celebrate Holi 2026 in Rishikesh! Book Tapovan Swiss Camps Holi Dhamaka Party with DJ, meals, colours, and luxury camping starting at ₹1800. Main Event: 4 March 2026.";

  const keywords = [
    "holi camping in rishikesh",
    "holi party in rishikesh",
    "holi packages rishikesh 2026",
    "holi camping offer rishikesh",
    "rishikesh holi celebration",
    "book holi camping in rishikesh",
    "holi dhamaka party rishikesh",
    "tapovan swiss camps holi",
    "holi luxury camping rishikesh",
    "holi event 4 march 2026",
    "rishikesh camping booking",
    "rishikesh rafting booking",
    "tapovan swiss camps booking",
    "book luxury camping rishikesh",
    "book swiss tents rishikesh",
    "book AC tents rishikesh",
    "book cooler tents rishikesh",
    "book ordinary tents rishikesh",
    "book ganga rafting",
    "book white water rafting rishikesh",
    "book shivpuri rafting",
    "book brahmpuri rafting",
    "book marine drive rafting",
    "camping booking rishikesh",
    "rafting booking rishikesh",
    "adventure booking rishikesh",
    "luxury camping booking",
    "family camping booking",
    "group camping booking",
    "couple camping booking",
    "book camping near ganga",
    "book riverside camping",
    "book camping tapovan",
    "book camping shivpuri",
    "online camping booking",
    "online rafting booking",
    "instant camping booking",
    "instant rafting booking",
    "camping package booking",
    "rafting package booking",
    "adventure package booking",
    "himalayan camping booking",
    "uttarakhand camping booking",
    "rishikesh adventure booking",
    "book camping with meals",
    "book rafting with guide",
    "book camping with activities",
    "book adventure sports",
    "book bungee jumping",
    "book bike rental",
    "book adventure activities",
  ];

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords,
    authors: [{ name: "Tapovan Swiss Camps" }],
    creator: "Tapovan Swiss Camps",
    publisher: "Tapovan Swiss Camps",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `${BASE_URL}/booking-form`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/booking-form`,
      siteName: "Tapovan Swiss Camps",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/assets/img/about.webp`,
          width: 1200,
          height: 630,
          alt: "Book Camping & Rafting in Rishikesh - Tapovan Swiss Camps",
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/assets/img/about.webp`],
    },
  };
}

const BookingArea: React.FC = () => {
  return <BookingPage />;
};

export default BookingArea;
