import { Metadata } from "next";
import BookingPage from "./BookingPage";

const BASE_URL = "https://tapovanswisscampsofficial.com";

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "Book Your Adventure - Camping & Rafting in Rishikesh | Tapovan Swiss Camps";
  const description =
    "Secure your spot for the best camping and rafting experiences in Rishikesh. Book luxury Swiss tents or thrilling Ganga river rafting online with instant confirmation.";
  const keywords = [
    "rishikesh camping booking",
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
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/assets/img/about.webp`],
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

const BookingArea: React.FC = () => {
  return <BookingPage />;
};

export default BookingArea;
