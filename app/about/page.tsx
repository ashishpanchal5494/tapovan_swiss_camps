import AboutPageClient from "@/components/AboutPageClient";
import { Metadata } from "next";

const BASE_URL = "https://www.tapovanswisscampsofficial.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "About Tapovan Swiss Camps - Best camping in rishikesh",
  description:
    "Discover Tapovan Swiss Camps - the best camping experience in Rishikesh near the Ganga river. Our Swiss-style best camp in Tapovan offers luxury tents with modern amenities amidst nature. Learn about our unique blend of adventure and comfort, perfect for family vacations, group retreats, and weekend getaways. As one of Rishikesh's premier camps, we provide affordable yet high-quality accommodation with stunning river views, swimming pool access, and easy access to rafting and other Himalayan adventures.",
  keywords: [
    "Tapovan Swiss Camps",
    "Rishikesh camping",
    "camping in rishikesh",
    "camping in rishikesh tapovan",
    "about camping in rishikesh",
    "about camping in rishikesh, tapovan",
    "about rishikesh",
    "rishikesh camping and rafting",
    "riverside camping in rishikesh",
    "best camping in rishikesh",
    "best camp in tapovan, rishikesh",
    "camping in rishikesh near ganga",
    "camping in rishikesh near river",
    "best camps in rishikesh near ganga",
    "cheapest camping in rishikesh",
    "Swiss camps Rishikesh",
    "Riverside camp Rishikesh",
    "Camp near Ganga river",
    "Ganga view camp Rishikesh",
    "Swimming pool camp in Rishikesh",
    "Rishikesh accommodation",
  ],
  openGraph: {
    title: "About Tapovan Swiss Camps - Best camping in rishikesh",
    description:
      "Discover Tapovan Swiss Camps - the best camping experience in Rishikesh near the Ganga river. Our Swiss-style riverside camp in Tapovan offers luxury tents with modern amenities amidst nature. Learn about our unique blend of adventure and comfort, perfect for family vacations, group retreats, and weekend getaways. As one of Rishikesh's premier camps, we provide affordable yet high-quality accommodation with stunning river views, swimming pool access, and easy access to rafting and other Himalayan adventures.",
    images: [
      {
        url: `${BASE_URL}/assets/img/room/pool.webp`,
        width: 1200,
        height: 630,
        alt: "Tapovan Swiss Camps - camp Entrance",
      },
    ],
  },
};

const About = () => {
  return <AboutPageClient />;
};

export default About;
