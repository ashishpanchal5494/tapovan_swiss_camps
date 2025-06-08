import TeamPage from "./TeamPage";
import { Metadata } from "next";

const baseUrl = "https://tapovanswisscampsofficial.com";

export const metadata: Metadata = {
  title: "Meet Our Expert Team ",
  description:
    "Get to know the dedicated team behind Tapovan Swiss Camps. Our hospitality experts, yoga instructors, and management professionals create unforgettable experiences by the Ganges in Rishikesh.",
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
  alternates: {
    canonical: `${baseUrl}/team`,
  },
  openGraph: {
    title: "Meet Our Hospitality Team | Tapovan Swiss Camps Rishikesh",
    description:
      "Discover the passionate professionals who create magical camping experiences by the Ganges in Rishikesh.",
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
  twitter: {
    card: "summary_large_image",
    title: "Our Expert Team | Tapovan Swiss Camps Rishikesh",
    description:
      "The dedicated professionals behind your perfect Rishikesh camping experience",
    images: [`${baseUrl}/assets/img/about.webp`],
  },
};

function Team() {
  return <TeamPage />;
}

export default Team;
