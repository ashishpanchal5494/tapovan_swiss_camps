import TeamPage from "./TeamPage";
import { Metadata } from "next";

const baseUrl = "https://tapovanswisscampsofficial.com";

export const metadata: Metadata = {
  title:
    "Tapovan Swiss Camps Team - Meet Rishikesh’s Top Camping & Rafting Experts",
  description:
    "Meet the expert team behind Tapovan Swiss Camps in Rishikesh. From camping and rafting professionals to yoga retreat instructors, our dedicated staff ensures the best riverside camping experience with luxury tents, warm service, and serene Ganga views.",
  keywords: [
    "tapovan swiss camps",
    "rishikesh camping",
    "camping in rishikesh",
    "Tapovan Swiss Camps team",
    "Rishikesh camping team",
    "luxury camps contact number",
    "swiss camps contact number",
    "luxury tent management",
    "Ganga riverside resort team",
    "yoga retreat professionals",
    "hospitality experts Rishikesh",
  ],
  openGraph: {
    title:
      "Tapovan Swiss Camps Team | Meet Rishikesh’s Top Camping & Rafting Experts",
    description:
      "Meet the expert team behind Tapovan Swiss Camps in Rishikesh. From camping and rafting professionals to yoga retreat instructors, our dedicated staff ensures the best riverside camping experience with luxury tents, warm service, and serene Ganga views.",
    url: `${baseUrl}/team`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/assets/img/about.webp`,
        width: 1200,
        height: 630,
        alt: "Tapovan Swiss Camps Team",
      },
    ],
    siteName: "Tapovan Swiss Camps",
  },
};

function Team() {
  return <TeamPage />;
}

export default Team;
