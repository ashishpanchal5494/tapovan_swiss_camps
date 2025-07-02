import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import TentsClient from "@/components/TentsClient";

import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  const baseUrl = "https://tapovanswisscampsofficial.com";

  return {
    title:
      "Luxury Camping Tents in Tapovan Rishikesh : Best camping experience starts @ ₹999",
    description:
      "Looking for camping in Tapovan Rishikesh? Tapovan Swiss Camps offers luxury AC tents, cooler tents, and riverside glamping starting at just ₹999. Enjoy a premium nature retreat with Ganga river views, attached washrooms, family-friendly amenities, and a peaceful environment. Ideal for couples, families, and groups seeking the best camping experience in Rishikesh.",
    keywords: [
      "tapovan swiss camps",
      "camping in rishikesh",
      "camping in tapovan, rishikesh",
      "luxury camping in rishikesh",
      "luxury camping in tapovan, rishikesh",
      "luxury tents in Rishikesh",
      "luxury tents in Tapovan",
      "luxury tents in Shivpuri",
      "luxury AC tents Rishikesh",
      "luxury tents in shivpuri Rishikesh",
      "luxury tents in tapovan, Rishikesh",
      "glamping near Ganga",
      "premium camping Rishikesh",
      "Swiss tents Tapovan",
      "best camping accommodation in Rishikesh",
      "luxury ac tents in rishikesh",
      "luxury cooler tents in rishikesh",
      "ordinary tents in rishikesh",
      "swiss tents in rishikesh",
      "couple camping tents",
      "family camping tents",
      "couple camping Rishikesh",
      "luxury couple tents in rishikesh",
      "luxury couple tents in tapovan rishikesh",
      "luxury couple tents in shivpuri rishikesh",
      "luxury couple tents in rishikesh shivpuri",
      "luxury camping in rishikesh riverside",
      "tent camping in rishikesh price",
      "luxury tents price",
      "tent camping in rishikesh shivpuri",
      "best camping tents in rishikesh",
    ],
    alternates: {
      canonical: `${baseUrl}/tents`,
    },
    openGraph: {
      title:
        "Luxury Camping Tents in Tapovan Rishikesh : Best camping experience starts @ ₹999",
      description:
        "Discover luxury camping in Tapovan Rishikesh with Swiss tents by the Ganga. Stay in AC, cooler, or ordinary tents with premium amenities and serene views. Perfect for couples, families, and adventure seekers. Book now and experience the best riverside glamping starting at ₹999.",
      url: `${baseUrl}/tents`,
      type: "website",
      images: [
        {
          url: `${baseUrl}/assets/img/room/ACTent1.webp`,
          width: 1200,
          height: 630,
          alt: "AC tent - Tapovan Swiss Camps",
        },
      ],
      siteName: "Tapovan Swiss Camps",
    },
    twitter: {
      card: "summary_large_image",
      title: "Luxury Camping Tents in Tapovan Rishikesh – Starting @ ₹999",
      description:
        "Book luxury AC tents, cooler tents & riverside camping in Tapovan Rishikesh. Enjoy premium glamping with attached bathrooms, nature views, and peaceful stays. Ideal for couples, families, and groups.",
      images: [`${baseUrl}/assets/img/room/ACTent1.webp`],
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

const Tents: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <TentsClient />
      </Suspense>
    </>
  );
};

export default Tents;
