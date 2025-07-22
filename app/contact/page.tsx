import { Metadata } from "next";
import ContactPage from "./ContactPage";

const BASE_URL = "https://tapovanswisscampsofficial.com";

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "Contact Tapovan Swiss Camps - Book Luxury Camping & Rafting in Rishikesh from ₹999";

  const description =
    "Get in touch with Tapovan Swiss Camps to book your luxury camping and Ganga river rafting experience in Rishikesh. Enjoy Swiss tents, AC & cooler tents, and adventure activities starting at just ₹999.";

  const keywords = [
    "contact rishikesh camping",
    "gangs rafting booking",
    "swiss tents inquiry",
    "adventure sports rishikesh contact",
    "rishikesh tour operator contact",
  ];

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/contact`,
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/contact`,
      siteName: "Tapovan Swiss Camps",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/assets/img/room/pool.webp`,
          width: 1200,
          height: 630,
          alt: "Contact Tapovan Swiss Camps in Rishikesh",
        },
      ],
    },
  };
}

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
