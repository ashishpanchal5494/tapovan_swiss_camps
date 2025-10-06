import { Metadata } from "next";
import ContactPage from "./ContactPage";

const BASE_URL = "https://www.tapovanswisscampsofficial.com";

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "Contact Tapovan Swiss Camps - Book Luxury Camping & Rafting in Rishikesh | Call 7906924003";

  const description =
    "Contact Tapovan Swiss Camps for luxury camping and Ganga river rafting in Rishikesh. Book Swiss tents, AC & cooler tents, adventure activities starting ₹999. Call 7906924003 for instant booking and group discounts.";

  const keywords = [
    "contact rishikesh camping",
    "contact tapovan swiss camps",
    "rishikesh camping booking contact",
    "gangs rafting booking contact",
    "swiss tents inquiry rishikesh",
    "adventure sports rishikesh contact",
    "rishikesh tour operator contact",
    "luxury camping rishikesh contact",
    "camping in rishikesh contact number",
    "rafting in rishikesh contact",
    "bungee jumping rishikesh contact",
    "bike rental rishikesh contact",
    "rishikesh camping packages contact",
    "family camping rishikesh contact",
    "group camping rishikesh contact",
    "couple camping rishikesh contact",
    "best camping in rishikesh contact",
    "camping near ganga river contact",
    "rishikesh adventure sports contact",
    "himalayan camping contact",
    "uttarakhand tourism contact",
    "rishikesh travel guide contact",
    "camping resort rishikesh contact",
    "riverside camping rishikesh contact",
    "tapovan market camping contact",
    "ganga aarti camping contact",
    "rishikesh camping price contact",
    "camping booking rishikesh contact",
    "adventure tourism rishikesh contact",
    "spiritual tourism rishikesh contact",
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
      canonical: `${BASE_URL}/contact`,
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
      url: `${BASE_URL}/contact`,
      siteName: "Tapovan Swiss Camps",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/assets/img/contact-img.png`,
          width: 1200,
          height: 630,
          alt: "Contact Tapovan Swiss Camps - Luxury Camping & Rafting in Rishikesh",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/assets/img/contact-img.png`],
    },
  };
}

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
