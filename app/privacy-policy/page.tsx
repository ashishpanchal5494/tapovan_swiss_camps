import PrivacyPolicyPage from "./PrivacyPolicyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Tapovan Swiss Camps protects your personal information. Our privacy policy covers data collection, usage, security measures, and your rights.",
  keywords: [
    "privacy policy",
    "data protection",
    "Rishikesh camps privacy",
    "Tapovan Swiss Camps privacy",
    "personal data security",
    "cookie policy",
    "GDPR compliance India",
  ],
  alternates: {
    canonical: "https://www.tapovanswisscampsofficial.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Tapovan Swiss Camps - Rishikesh",
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
    title: "Privacy Policy | Tapovan Swiss Camps - Rishikesh",
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
