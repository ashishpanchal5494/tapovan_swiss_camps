import { Metadata } from "next";
import BookingPage from "./BookingPage";

const BASE_URL = "https://tapovanswisscampsofficial.com";

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "Book Camping & Rafting in Rishikesh - Tapovan Swiss Camps starts @ ₹999 ";
  const description =
    "Book your camping and river rafting adventure in Rishikesh with Tapovan Swiss Camps. Enjoy 25% off on luxury Swiss tents, AC and cooler tents, and thrilling Ganga rafting experiences. Instant online booking starts at just ₹999!";

  const keywords = [
    "camping in rishikesh",
    "camps in rishikesh",
    "tapovan swiss camps",
    "rishikesh camping booking",
    "book camping in rishikesh",
    "book camping in tapovan rishikesh",
    "book camp in shivpuri rishikesh",
    "book luxury camps in rishikesh",
    "book luxury camp in rishikesh",
    "book tapovan swiss camps",
    "book luxury cooler tent in rishikesh",
    "book luxury AC tent in rishikesh",
    "book ordinary tent in rishikesh",
    "book rafting",
    "book rafting in rishikesh",
    "book bungee jumping in rishikesh",
    "rafting in rishikesh online",
    "luxury tents rishikesh",
    "gangs river rafting booking",
    "swiss camp rishikesh",
    "adventure booking rishikesh",
  ];

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/booking-form`,
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
          alt: "Booking for Rishikesh Camping and Rafting",
        },
      ],
    },
  };
}

const BookingArea: React.FC = () => {
  return <BookingPage />;
};

export default BookingArea;
