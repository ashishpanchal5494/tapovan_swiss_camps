import TeamPage from "./TeamPage";
import { Metadata } from "next";

const baseUrl = "https://www.tapovanswisscampsofficial.com";

export const metadata: Metadata = {
  title:
    "Meet Our Expert Team - Tapovan Swiss Camps | Rishikesh's Premier Camping & Rafting Professionals",
  description:
    "Meet the passionate team behind Tapovan Swiss Camps Rishikesh. Our expert camping professionals, certified yoga instructors, and hospitality specialists ensure unforgettable luxury tent experiences with 24/7 support, adventure activities, and warm Ganga riverside hospitality.",
  keywords: [
    "tapovan swiss camps team",
    "rishikesh camping team members",
    "camping professionals rishikesh",
    "luxury tent management team",
    "yoga instructors rishikesh",
    "rafting experts team",
    "hospitality staff rishikesh",
    "camping team contact",
    "swiss tent professionals",
    "adventure sports team",
    "ganga riverside staff",
    "camping management team",
    "tent accommodation experts",
    "outdoor activity guides",
    "camping service team",
    "luxury camping staff",
    "nature retreat professionals",
    "camping experience team",
    "tent stay specialists",
    "adventure camping guides",
    "riverside camping team",
    "swiss tent hospitality",
    "camping facility management",
    "outdoor hospitality experts",
    "nature camping professionals",
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
      "Meet Our Expert Team - Tapovan Swiss Camps | Rishikesh's Premier Camping Professionals",
    description:
      "Meet the passionate team behind Tapovan Swiss Camps Rishikesh. Our expert camping professionals, certified yoga instructors, and hospitality specialists ensure unforgettable luxury tent experiences with 24/7 support and warm Ganga riverside hospitality.",
    url: `${baseUrl}/team`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/assets/img/team/group.webp`,
        width: 1200,
        height: 630,
        alt: "Tapovan Swiss Camps Expert Team - Rishikesh Camping Professionals",
      },
      {
        url: `${baseUrl}/assets/img/team/rohit.jpeg`,
        width: 1200,
        height: 630,
        alt: "Rohit Panchal - Certified Yoga Instructor & Property Manager",
      },
      {
        url: `${baseUrl}/assets/img/team/ashish.png`,
        width: 1200,
        height: 630,
        alt: "Ashish Panchal - Developer & Technical Expert",
      },
    ],
    siteName: "Tapovan Swiss Camps",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Expert Team - Tapovan Swiss Camps Rishikesh",
    description:
      "Meet the passionate team behind Tapovan Swiss Camps. Expert camping professionals, certified yoga instructors, and hospitality specialists ensuring unforgettable luxury tent experiences.",
    images: [`${baseUrl}/assets/img/team/group.webp`],
  },
  other: {
    "geo.region": "IN-UT",
    "geo.placename": "Rishikesh",
    "geo.position": "30.129;78.3153",
    ICBM: "30.129, 78.3153",
  },
};

function Team() {
  return <TeamPage />;
}

export default Team;
