import AboutPageClient from "@/components/AboutPageClient";
import { Metadata } from "next";

// Define your website's base URL for canonical and Open Graph URLs
const BASE_URL = "https://www.tapovanswisscampsofficial.com"; // **IMPORTANT: Replace with your actual domain**

// Metadata for the About page
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL), // Sets the base URL for all relative URLs in metadata
  title: "About ",
  description:
    "Learn about Tapovan Swiss Camps, a premier camp and resort in Rishikesh offering exclusive tents, modern amenities, and a serene natural environment. Perfect for family vacations, weekend getaways, and group retreats in the Himalayas.",
  keywords: [
    "Tapovan Swiss Camps",
    "Rishikesh camping",
    "camping in rishikesh",
    "Swiss camps Rishikesh",
    "nature retreat",
    "Himalayan camps",
    "luxury tents Rishikesh",
    "family vacation Rishikesh",
    "adventure camps Rishikesh",
    "yoga retreat Rishikesh",
    "Rishikesh accommodation",
  ],
  alternates: {
    canonical: `${BASE_URL}/about`, // Canonical URL to prevent duplicate content issues
  },
  openGraph: {
    title: "About Tapovan Swiss Camps - Rishikesh",
    description:
      "Discover Tapovan Swiss Camps, a serene getaway nestled amidst lush greenery in Rishikesh. Experience a perfect blend of modern comfort and natural charm.",
    url: `${BASE_URL}/about`,
    siteName: "Tapovan Swiss Camps",
    images: [
      {
        url: `${BASE_URL}/assets/img/room/garden.webp`, // **IMPORTANT: Replace with actual path to your OG image**
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
    images: [`${BASE_URL}/assets/img/room/garden.webp`], // **IMPORTANT: Replace with actual path to your Twitter image (1200x675 recommended)**
  },
  // Structured Data (JSON-LD) - This is a significant SEO enhancement
  // You would typically add this in a <script type="application/ld+json"> tag in your component,
  // or use a helper function to inject it. For Next.js App Router, you can define it here
  // or within the component using a client component and a <script> tag.
  // For simplicity and server-side rendering benefits, we'll define a basic one here.
  // For more complex schemas, consider a dedicated JSON-LD component.
  // Note: Next.js metadata object doesn't directly support JSON-LD. You'd typically
  // add this within the component's JSX if it's a client component, or use a separate
  // file/component for server components.
  // For now, I'll provide the JSON-LD structure as a comment, and you can integrate it
  // into your page component using a <script> tag if needed, or use a library for more complex scenarios.
  // The current metadata export handles the <meta> tags.
};

const About = () => {
  return <AboutPageClient />;
};

export default About;
