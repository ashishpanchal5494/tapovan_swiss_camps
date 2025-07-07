import PrivacyPolicyPage from "./PrivacyPolicyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Privacy Policy - Tapovan Swiss Camps, Camping & Rafting Booking Security",

  description:
    "Read the privacy policy of Tapovan Swiss Camps, Rishikesh's trusted riverside camping and rafting provider. Learn how we protect your personal data, booking details, and ensure secure experiences at our luxury camps.",

  keywords: [
    "camping in rishikesh tapovan",
    "Rishikesh camping",
    "rishikesh camping and rafting",
    "riverside camping in rishikesh",
    "best camping in rishikesh",
    "best camp in tapovan, rishikesh",
    "rishikesh camps",
    "camps in rishikesh privacy policy",
    "camping in rishikesh",
    "rafting in rishikesh",
    "privacy policy",
    "privacy policy of tapovan swiss camps",
    "privacy policy of camping in rishikesh",
    "data protection",
    "Rishikesh camps privacy policy",
    "Tapovan Swiss Camps privacy policy",
    "personal data security",
    "cookie policy",
    "GDPR compliance India",
  ],
  alternates: {
    canonical: "https://www.tapovanswisscampsofficial.com/privacy-policy",
  },
  openGraph: {
    title:
      "Privacy Policy | Tapovan Swiss Camps - Rishikesh Camping & Rafting Booking Security",

    description:
      "Your privacy matters. Learn how we protect your personal data when you book with Tapovan Swiss Camps in Rishikesh.",
    url: "https://www.tapovanswisscampsofficial.com/privacy-policy",
    siteName: "Tapovan Swiss Camps",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.tapovanswisscampsofficial.com/assets/img/about.webp",
        width: 1200,
        height: 630,
        alt: "Tapovan Swiss Camps Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy | Tapovan Swiss Camps - Rishikesh Camping & Rafting Booking Security",

    description:
      "How we protect your data when you book your Rishikesh adventure with us",
    images: ["https://www.tapovanswisscampsofficial.com/assets/img/about.webp"],
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

function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}

export default PrivacyPolicy;
