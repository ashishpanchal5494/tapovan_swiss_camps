import GalleryPage from "./galleryPage";

import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  const baseUrl = "https://www.tapovanswisscampsofficial.com";

  return {
    title:
      "Photo Gallery - Luxury Camping in Rishikesh | Tapovan Swiss Camps | 39+ HD Images",

    description:
      "Explore 39+ stunning photos of luxury camping in Rishikesh at Tapovan Swiss Camps. See luxury tents, adventure activities, pool facilities, group experiences, and scenic views. Best glamping destination near Ganga river.",

    keywords: [
      "Rishikesh camping photos",
      "Tapovan Swiss Camps gallery",
      "luxury tents images rishikesh",
      "Ganga riverside camping pictures",
      "glamping in Rishikesh photos",
      "Swiss tent accommodations images",
      "Rishikesh adventure camp photos",
      "premium camping photos",
      "best campsite in Rishikesh pictures",
      "family camping Rishikesh images",
      "rafting photos rishikesh",
      "pool camping rishikesh",
      "volleyball camping activities",
      "group camping experiences",
      "party camping rishikesh",
      "nature camping photos",
      "morning views camping",
      "AC tent rishikesh photos",
      "cooler tent images",
      "washroom facilities camping",
      "garden camping photos",
      "scenic camping views",
      "adventure activities photos",
      "social events camping",
      "memorable moments camping",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title:
        "Photo Gallery - Luxury Camping in Rishikesh | Tapovan Swiss Camps",
      description:
        "Explore 39+ stunning photos showcasing luxury camping facilities, adventure activities, and scenic views at Rishikesh's premier glamping destination.",
      url: `${baseUrl}/gallery`,
      siteName: "Tapovan Swiss Camps",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${baseUrl}/assets/img/gallery/group.webp`,
          width: 1200,
          height: 630,
          alt: "Happy campers at Tapovan Swiss Camps - Luxury camping in Rishikesh",
        },
        {
          url: `${baseUrl}/assets/img/gallery/tentPhoto.webp`,
          width: 1200,
          height: 630,
          alt: "Luxury Swiss tents at Tapovan Swiss Camps Rishikesh",
        },
        {
          url: `${baseUrl}/assets/img/gallery/pool.webp`,
          width: 1200,
          height: 630,
          alt: "Swimming pool at Tapovan Swiss Camps with mountain views",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Photo Gallery - Luxury Camping in Rishikesh | Tapovan Swiss Camps",
      description:
        "Explore 39+ stunning photos of luxury camping, adventure activities, and scenic views at Rishikesh's best glamping destination.",
      images: [`${baseUrl}/assets/img/gallery/group.webp`],
    },
    other: {
      "geo.region": "IN-UT",
      "geo.placename": "Rishikesh",
      "geo.position": "30.129;78.3153",
      ICBM: "30.129, 78.3153",
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
