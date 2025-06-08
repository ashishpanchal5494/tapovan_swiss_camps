import React from "react";
import HomePageClient from "../components/HomePageClient";
import { Metadata } from "next";

// Define specific metadata for the homepage
export const metadata: Metadata = {
  // Overrides default title from layout.tsx for the homepage
  title:
    "Tapovan Swiss Camps | Luxury Riverside Camping in Rishikesh - Book Now!",
  // Overrides default description from layout.tsx for the homepage
  description:
    "Discover the ultimate luxury camping experience at Tapovan Swiss Camps, Rishikesh. Enjoy AC & Cooler tents, river views, swimming, rafting, yoga, and delicious food. Perfect for families, couples, and adventure seekers. Book your unforgettable Rishikesh camp stay today!",
  keywords: [
    "camping in rishikesh",
    "camping in rishikesh tapovan",
    "Rishikesh camping",
    "rishikesh camping and rafting",
    "riverside camping in rishikesh",
    "best camping in rishikesh",
    "best camp in tapovan, rishikesh",
    "rishikesh camping package",
    "rishikesh camping packages",
    "rishikesh camping resort",
    "rishikesh camping places",
    "rishikesh camping price per person",
    "camp brook",
    "luxury camping in rishikesh reviews",
    "luxury camping in rishikesh",
    "camping in rishikesh price",
    "shivpuri rishikesh camping",
    "camping in rishikesh shivpuri",
    "bonfire rishikesh camping",
    "luxury camping in rishikesh photos",
    "camping in rishikesh near ganga",
    "camping in rishikesh near river",
    "best camps in rishikesh near ganga",
    "rishikesh river side camping price",
    "camping sites in rishikesh",
    "rafting & camping in rishikesh",
    "rishikesh camping and rafting",
    "rishikesh camping price for couple",
    "rishikesh camping price for family",
    "cheapest camping in rishikesh",
    "Luxury AC tents Rishikesh",
    "Luxury Cooler tents Rishikesh",
    "Swiss camps Rishikesh",
    "rishikesh camping booking",
    "Riverside camp Rishikesh",
    "Tapovan Swiss Camps",
    "Camp near Ganga river",
    "Yoga retreat Rishikesh",
    "Family camping Rishikesh",
    "Couple camping Rishikesh",
    "Group camping Rishikesh",
    "Rishikesh adventure sports",
    "Best resort Rishikesh",
    "Ganga view camp Rishikesh",
    "Swimming pool camp Rishikesh",
  ],
  // Consider adding specific Open Graph and Twitter overrides if they differ significantly from layout.tsx
  // For example, a homepage-specific image or more direct call to action in the title/description
  openGraph: {
    title: "Tapovan Swiss Camps: Premier Luxury Camping & Resort in Rishikesh",
    description:
      "Experience serene riverside luxury, adventure activities, and premium amenities at Tapovan Swiss Camps. Your ideal getaway in Rishikesh starts here. Book direct!",
    images: [
      {
        url: "https://www.tapovanswisscampsofficial.com/assets/img/room/gardenPhoto.webp", // A strong, captivating hero image
        width: 1920,
        height: 1080,
        alt: "Panoramic view of Tapovan Swiss Camps and Ganga River in Rishikesh",
      },
    ],
  },
};

function Home() {
  return <HomePageClient />;
}

export default Home;
