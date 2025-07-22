import GalleryPage from "./galleryPage";

import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  const baseUrl = "https://tapovanswisscampsofficial.com";

  return {
    title:
      "Camping Photos in Rishikesh - Tapovan Swiss Camps  | Luxury Tents & Best Camp Gallery",

    description:
      "Explore real camping photos in Rishikesh at Tapovan Swiss Camps. View images of luxury tents, riverside camps, bonfire nights, rafting adventures, and the best glamping experience in Uttarakhand.",

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
    openGraph: {
      title:
        "Camping Photos in Rishikesh - Tapovan Swiss Camps  | Luxury Tents & Best Camp Gallery",
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
