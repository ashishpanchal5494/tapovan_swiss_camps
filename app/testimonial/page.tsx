import { Metadata } from "next";
import TestimonialPage from "./TestimonialPage";

export const metadata: Metadata = {
  title:
    "5-Star Camping Reviews | Tapovan Swiss Camps - #1 Rated Camping in Rishikesh 2025",
  description:
    "Read 50+ verified 5-star guest reviews of Tapovan Swiss Camps - India's top-rated luxury camping destination in Rishikesh. Real testimonials from happy guests about our premium tents, scenic mountain views, adventure activities, and exceptional hospitality. Book now!",
  keywords: [
    "Tapovan Swiss Camps reviews",
    "5 star camping reviews Rishikesh",
    "best camping reviews Tapovan Rishikesh",
    "luxury camping testimonials Rishikesh",
    "verified guest reviews Rishikesh camping",
    "top rated camping site Rishikesh",
    "glamping reviews Rishikesh 2024",
    "camping testimonials Uttarakhand",
    "best budget camping reviews Rishikesh",
    "mountain camping reviews Tapovan",
    "adventure camping testimonials",
    "family camping reviews Rishikesh",
    "couple camping reviews Rishikesh",
    "group camping testimonials",
    "camping with food reviews Rishikesh",
    "riverside camping reviews",
    "hill station camping reviews",
    "peaceful camping reviews Rishikesh",
    "affordable luxury camping reviews",
    "camping near Laxman Jhula reviews",
  ],
  authors: [{ name: "Tapovan Swiss Camps" }],
  creator: "Tapovan Swiss Camps",
  publisher: "Tapovan Swiss Camps",
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
      "5-Star Camping Reviews | Tapovan Swiss Camps - #1 Rated Camping in Rishikesh",
    description:
      "50+ verified 5-star guest reviews for Tapovan Swiss Camps - India's top-rated luxury camping destination in Rishikesh. Real testimonials from happy guests about premium tents, scenic views, and exceptional hospitality.",
    url: "https://tapovanswisscampsofficial.com/testimonial",
    type: "website",
    locale: "en_IN",
    siteName: "Tapovan Swiss Camps",
    images: [
      {
        url: "https://tapovanswisscampsofficial.com/assets/img/room/group.webp",
        width: 1200,
        height: 630,
        alt: "Happy guests enjoying luxury camping at Tapovan Swiss Camps in Rishikesh",
      },
      {
        url: "https://tapovanswisscampsofficial.com/assets/img/gallery/gardenPhoto.webp",
        width: 1200,
        height: 630,
        alt: "Beautiful mountain views and luxury tents at Tapovan Swiss Camps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "5-Star Camping Reviews | Tapovan Swiss Camps - #1 Rated in Rishikesh",
    description:
      "50+ verified 5-star guest reviews for India's top-rated luxury camping destination in Rishikesh. Real testimonials from happy guests.",
    images: [
      "https://tapovanswisscampsofficial.com/assets/img/room/group.webp",
    ],
  },
  alternates: {
    canonical: "https://tapovanswisscampsofficial.com/testimonial",
  },
  category: "Travel & Tourism",
  classification: "Camping Reviews and Testimonials",
  other: {
    "geo.region": "IN-UT",
    "geo.placename": "Rishikesh",
    "geo.position": "30.1394342;78.3127861",
    ICBM: "30.1394342, 78.3127861",
  },
};

function TestimonialSection() {
  return <TestimonialPage />;
}

export default TestimonialSection;
