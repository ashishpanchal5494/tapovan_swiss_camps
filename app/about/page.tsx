import AboutPageClient from "@/components/AboutPageClient";
import { Metadata } from "next";

const BASE_URL = "https://www.tapovanswisscampsofficial.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title:
    "About Tapovan Swiss Camps - Best Luxury Camping in Rishikesh Near Ganga River | 2025",
  description:
    "Discover Tapovan Swiss Camps - Rishikesh's #1 luxury camping destination near Ganga River. Experience premium Swiss tents, swimming pool, adventure sports, and 5-star hospitality in Tapovan. Perfect for families, couples, and groups. Book now for the best camping experience in Rishikesh with river views, rafting, yoga, and bonfire nights. Starting ₹999 per person.",
  authors: [
    {
      name: "Tapovan Swiss Camps",
      url: "https://www.tapovanswisscampsofficial.com",
    },
  ],
  creator: "Tapovan Swiss Camps",
  publisher: "Tapovan Swiss Camps",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "Tapovan Swiss Camps",
    "Rishikesh camping",
    "camping in rishikesh",
    "camping in rishikesh tapovan",
    "luxury camping in rishikesh",
    "best camping in rishikesh",
    "camping near ganga river rishikesh",
    "swiss tents rishikesh",
    "rishikesh camping and rafting",
    "riverside camping in rishikesh",
    "best camp in tapovan rishikesh",
    "camping in rishikesh near river",
    "gangaview camp rishikesh",
    "swimming pool camp rishikesh",
    "rishikesh adventure camping",
    "family camping rishikesh",
    "couple camping rishikesh",
    "group camping rishikesh",
    "rishikesh accommodation",
    "tapovan camping resort",
    "luxury tents rishikesh",
    "camping with pool rishikesh",
    "bonfire camping rishikesh",
    "yoga retreat rishikesh",
    "rafting camp rishikesh",
    "himalayan camping experience",
    "uttarakhand camping",
    "rishikesh tourism",
    "camping booking rishikesh",
    "affordable camping rishikesh",
    "premium camping rishikesh",
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title:
      "About Tapovan Swiss Camps - Best Luxury Camping in Rishikesh Near Ganga River",
    description:
      "Discover Tapovan Swiss Camps - Rishikesh's premier luxury camping destination near Ganga River. Premium Swiss tents, swimming pool, adventure sports, and 5-star hospitality in Tapovan. Perfect for families, couples, and groups. Book now for the best camping experience in Rishikesh!",
    url: `${BASE_URL}/about`,
    siteName: "Tapovan Swiss Camps",
    images: [
      {
        url: `${BASE_URL}/assets/img/room/gardenPhoto.webp`,
        width: 1200,
        height: 630,
        alt: "Tapovan Swiss Camps - Luxury Riverside Camping in Rishikesh with Ganga River View",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tapovan Swiss Camps - Best Luxury Camping in Rishikesh",
    description:
      "Rishikesh's premier luxury camping destination near Ganga River. Premium Swiss tents, adventure sports, and 5-star hospitality.",
    images: [`${BASE_URL}/assets/img/room/gardenPhoto.webp`],
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
};

const About = () => {
  return <AboutPageClient />;
};

export default About;
