import PrivacyPolicyPage from "./PrivacyPolicyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Privacy Policy - Tapovan Swiss Camps | Data Protection & Security for Rishikesh Camping Bookings",

  description:
    "Comprehensive privacy policy for Tapovan Swiss Camps Rishikesh. Learn how we protect your personal data, ensure secure camping bookings, and maintain GDPR compliance. SSL encrypted, PCI compliant data protection.",

  keywords: [
    "privacy policy tapovan swiss camps",
    "data protection rishikesh camping",
    "privacy policy camping rishikesh",
    "GDPR compliance camping india",
    "data security rishikesh camps",
    "personal data protection camping",
    "SSL encryption camping booking",
    "PCI compliant payment security",
    "cookie policy rishikesh camping",
    "data privacy camping rishikesh",
    "secure booking rishikesh camps",
    "privacy rights camping india",
    "data collection camping rishikesh",
    "third party services camping",
    "children privacy policy camping",
    "data retention policy camping",
    "user rights camping rishikesh",
    "privacy contact camping",
    "data breach policy camping",
    "privacy policy updates camping",
    "camping booking data security",
    "luxury camping privacy policy",
    "swiss tent privacy protection",
    "rafting booking data security",
    "adventure camping privacy",
  ],
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
    title:
      "Privacy Policy | Tapovan Swiss Camps - Secure Data Protection for Rishikesh Camping",

    description:
      "Your privacy is our priority. Learn how Tapovan Swiss Camps protects your personal data with SSL encryption, PCI compliance, and GDPR-ready policies for secure camping bookings in Rishikesh.",
    url: "https://www.tapovanswisscampsofficial.com/privacy-policy",
    siteName: "Tapovan Swiss Camps",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.tapovanswisscampsofficial.com/assets/img/about.webp",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Tapovan Swiss Camps Data Protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Tapovan Swiss Camps | Secure Data Protection",
    description:
      "Learn how we protect your personal data with SSL encryption, PCI compliance, and GDPR-ready policies for secure camping bookings in Rishikesh.",
    images: ["https://www.tapovanswisscampsofficial.com/assets/img/about.webp"],
  },
  other: {
    "geo.region": "IN-UT",
    "geo.placename": "Rishikesh",
    "geo.position": "30.129;78.3153",
    ICBM: "30.129, 78.3153",
  },
};

function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}

export default PrivacyPolicy;
