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
    "Rishikesh luxury camping",
    "Riverside camping Rishikesh",
    "Swiss camps Rishikesh",
    "Best camp in Rishikesh",
    "AC tents Rishikesh",
    "Cooler tents Rishikesh",
    "Camping with swimming pool Rishikesh",
    "Rishikesh adventure packages",
    "Yoga and camping Rishikesh",
    "Family friendly camping Rishikesh",
    "Pet friendly camping Rishikesh",
    "Couple camping Rishikesh",
    "Tapovan camp booking",
    "Rishikesh bonfire camp",
    "Ganga river camp Rishikesh",
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
