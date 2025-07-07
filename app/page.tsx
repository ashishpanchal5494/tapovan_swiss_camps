import React from "react";
import HomePageClient from "../components/HomePageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tapovan Swiss Camps - Best Camping in Rishikesh, Book Now @ ₹999 ",

  description:
    "Tapovan Swiss Camps offers best luxury camping experience in Rishikesh. Enjoy AC & Cooler tents, river views, swimming, rafting, yoga, and delicious food. Perfect for families, couples, and adventure seekers. Book your unforgettable Rishikesh camp stay today in ₹999!",
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

  openGraph: {
    title:
      "Tapovan Swiss Camps - Best Luxury Camping & Resort in Rishikesh, Book Now @ ₹999",
    description:
      "Book your stay at Tapovan Swiss Camp and enjoy riverside luxury tents, yoga, rafting, best food, best nature view, best activities & bonfires in Rishikesh. Perfect for families, couples & adventure lovers. Book direct!",
    images: [
      {
        url: "https://www.tapovanswisscampsofficial.com/assets/img/room/gardenPhoto.webp", // A strong, captivating hero image
        width: 1200,
        height: 630,
        alt: "Panoramic view of Tapovan Swiss Camps and Ganga River in Rishikesh",
      },
    ],
  },
};

function Home() {
  return <HomePageClient />;
}

export default Home;
