import BlogPage from "./blogPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adventure Blogs – Tapovan Swiss Camps | Rishikesh Travel Guides",
  description:
    "Explore expert travel tips and adventure guides for Rishikesh including camping, rafting, bungee jumping and bike rentals from Tapovan Swiss Camps.",
  keywords: [
    "Rishikesh blogs",
    "rafting in rishikesh",
    "camping in Rishikesh",
    "rafting guide",
    "bungee jumping Rishikesh",
    "bike rental Rishikesh",
    "adventure travel tips",
    "Tapovan Swiss Camps blog",
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
