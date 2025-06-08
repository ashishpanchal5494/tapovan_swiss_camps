import { Metadata } from "next";
import TestimonialPage from "./TestimonialPage";

export const metadata: Metadata = {
  title:
    "Verified Guest Reviews | Tapovan Swiss Camps - Best Camping in Rishikesh",
  description:
    "Read 50+ verified guest reviews of Tapovan Swiss Camps - rated 5/5 for luxury tents, scenic views, and adventure activities in Rishikesh. See why we're the top-rated camping site in Tapovan.",
  keywords: [
    "Tapovan Swiss Camps reviews",
    "best reviews for camping in rishikesh",
    "best reviews for camping in tapovan rishikesh",
    "camping in rishikesh shivpuri reviews",
    "riverdside camping in rishikesh reviews",
    "camping sites in rishikesh",
    "best camping Rishikesh",
    "luxury tents reviews",
    "Rishikesh camping testimonials",
    "verified guest feedback",
    "glamping reviews Rishikesh",
    "Tapovan camping ratings",
  ],

  alternates: {
    canonical: "https://tapovanswisscampsofficial.com/testimonial",
  },

  openGraph: {
    title:
      "Verified Guest Reviews | Tapovan Swiss Camps - Best Camping in Rishikesh",
    description:
      "50+ verified guest reviews with 5/5 ratings for our luxury camping experience in Rishikesh. See why guests love our scenic location and hospitality.",
    url: "https://tapovanswisscampsofficial.com/testimonial",
    type: "website",
    images: [
      {
        url: "https://tapovanswisscampsofficial.com/assets/img/room/group.webp",
        width: 1200,
        height: 630,
        alt: "Happy guests at Tapovan Swiss Camps",
      },
    ],
    siteName: "Tapovan Swiss Camps",
  },

  twitter: {
    card: "summary_large_image",
    title: "Verified Guest Reviews | Tapovan Swiss Camps",
    description:
      "See why we're rated 5/5 by guests for our luxury camping experience in Rishikesh. 50+ verified testimonials.",
    images: [
      "https://tapovanswisscampsofficial.com/assets/img/room/group.webp",
    ],
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

  other: {
    "review-count": "50+",
    "rating-value": "5.0",
    "rating-scale": "5",
  },
};
function TestimonialSection() {
  return <TestimonialPage />;
}

export default TestimonialSection;
