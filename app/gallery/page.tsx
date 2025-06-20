import GalleryPage from "./galleryPage";

import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  const baseUrl = "https://tapovanswisscampsofficial.com";

  return {
    title: "Photos | Tapovan Swiss Camps - Luxury Camping in Rishikesh",
    description:
      "Explore our stunning gallery showcasing luxury tents, riverside views, and adventure activities at Tapovan Swiss Camps - the best glamping experience in Rishikesh.",
    keywords: [
      "Rishikesh camping photos",
      "Tapovan Swiss Camps photos",
      "luxury tents images in rishikesh",
      "Ganga riverside camping pictures",
      "glamping in Rishikesh photos",
      "Swiss tent accommodations images",
      "Rishikesh adventure camp photos",
      "premium camping photos",
      "best campsite in Rishikesh pictures",
      "family camping Rishikesh images",
    ],
    alternates: {
      canonical: `${baseUrl}/gallery`,
    },
    openGraph: {
      title: "Photos | Tapovan Swiss Camps - Premium Camping in Rishikesh",
      description:
        "View our collection of luxury tent accommodations, adventure activities, and scenic views at Rishikesh's premier glamping destination.",
      url: `${baseUrl}/gallery`,
      type: "website",
      images: [
        {
          url: `${baseUrl}/assets/img/gallery/group.webp`,
          width: 1200,
          height: 630,
          alt: "Happy campers at Tapovan Swiss Camps",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Tapovan Swiss Camps Photos",
      description:
        "See why we're rated the best luxury camping experience in Rishikesh through our stunning photo collection.",
      images: [`${baseUrl}/assets/img/gallery/group.webp`],
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
};

function page() {
  return (
    <div>
      <GalleryPage />
    </div>
  );
}

export default page;
