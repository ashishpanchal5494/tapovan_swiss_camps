import BlogPage from "./blogPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adventure Blogs – Tapovan Swiss Camps | Rishikesh Travel Guides",
  description:
    "Explore expert travel tips and adventure guides for Rishikesh including camping, rafting, bungee jumping and bike rentals from Tapovan Swiss Camps.",
  keywords: [
    "Rishikesh blogs",
    "camping in rishikesh blogs",
    "rafting in rishikesh blogs",
    "bungee jumping in rishikesh blogs",
    "bike rent in rishikesh blog",
    "rafting in rishikesh",
    "rafting guide",
    "bungee jumping Rishikesh",
    "bike rental Rishikesh",
    "adventure travel tips",
    "Tapovan Swiss Camps blog",
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
  alternates: {
    canonical: "https://www.tapovanswisscampsofficial.com/blogs",
  },
  openGraph: {
    title: "Adventure Blogs – Tapovan Swiss Camps | Rishikesh Travel Guides",
    description:
      "Explore expert travel tips and adventure guides for Rishikesh including camping, rafting, bungee jumping and bike rentals from Tapovan Swiss Camps.",
    url: "https://www.tapovanswisscampsofficial.com/blogs",
    siteName: "Tapovan Swiss Camps",
    images: [
      {
        url: "https://www.tapovanswisscampsofficial.com/assets/img/blog/camping_rishikesh.webp",
        width: 1200,
        height: 630,
        alt: "Adventure activities in Rishikesh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adventure Blogs – Tapovan Swiss Camps | Rishikesh Travel Guides",
    description:
      "Explore expert travel tips and adventure guides for Rishikesh including camping, rafting, bungee jumping and bike rentals from Tapovan Swiss Camps.",
    images: [
      "https://www.tapovanswisscampsofficial.com/assets/img/blog/camping_rishikesh.webp",
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
};
const Blogs: React.FC = () => {
  return <BlogPage />;
};

export default Blogs;
