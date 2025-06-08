import AboutPageClient from "@/components/AboutPageClient";
import { Metadata } from "next";

// Define your website's base URL for canonical and Open Graph URLs
const BASE_URL = "https://www.tapovanswisscampsofficial.com"; // **IMPORTANT: Replace with your actual domain**

// Metadata for the About page
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL), // Sets the base URL for all relative URLs in metadata
  title: "About ",
  description:
    "Discover Tapovan Swiss Camps - the best camping experience in Rishikesh near the Ganga river. Our Swiss-style riverside camp in Tapovan offers luxury tents with modern amenities amidst nature. Learn about our unique blend of adventure and comfort, perfect for family vacations, group retreats, and weekend getaways. As one of Rishikesh's premier camps, we provide affordable yet high-quality accommodation with stunning river views, swimming pool access, and easy access to rafting and other Himalayan adventures.",
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
  alternates: {
    canonical: `${BASE_URL}/about`, // Canonical URL to prevent duplicate content issues
  },
  openGraph: {
    title: "About Tapovan Swiss Camps - Rishikesh",
    description:
      "Discover Tapovan Swiss Camps - the best camping experience in Rishikesh near the Ganga river. Our Swiss-style riverside camp in Tapovan offers luxury tents with modern amenities amidst nature. Learn about our unique blend of adventure and comfort, perfect for family vacations, group retreats, and weekend getaways. As one of Rishikesh's premier camps, we provide affordable yet high-quality accommodation with stunning river views, swimming pool access, and easy access to rafting and other Himalayan adventures.",
    url: `${BASE_URL}/about`,
    siteName: "Tapovan Swiss Camps",
    images: [
      {
        url: `${BASE_URL}/assets/img/room/pool.webp`, // **IMPORTANT: Replace with actual path to your OG image**
        width: 1200,
        height: 630,
        alt: "Tapovan Swiss Camps - camp Entrance",
      },
      // You can add more images if needed
    ],
    locale: "en_IN", // Assuming India, Rishikesh. Adjust if needed.
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tapovan Swiss Camps - Rishikesh",
    description:
      "Discover Tapovan Swiss Camps, a serene getaway nestled amidst lush greenery in Rishikesh. Experience a perfect blend of modern comfort and natural charm.",
    images: [`${BASE_URL}/assets/img/room/pool.webp`],
  },
};

const About = () => {
  return <AboutPageClient />;
};

export default About;
