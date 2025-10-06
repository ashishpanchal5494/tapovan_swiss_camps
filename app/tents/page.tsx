import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import TentsClient from "@/components/TentsClient";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  const baseUrl = "https://tapovanswisscampsofficial.com";

  return {
    title:
      "Luxury Camping Tents in Tapovan Rishikesh | Premium Glamping Experience @ ₹999 | Tapovan Swiss Camps",
    description:
      "Experience luxury camping in Tapovan Rishikesh with premium AC tents, cooler tents & riverside glamping starting ₹999. Enjoy Ganga river views, attached washrooms, family amenities & adventure activities. Best camping experience for couples, families & groups in Rishikesh.",
    keywords: [
      "luxury camping tents rishikesh",
      "premium glamping tapovan rishikesh",
      "luxury ac tents rishikesh",
      "cooler tents rishikesh",
      "budget camping tents rishikesh",
      "riverside camping rishikesh",
      "gangga river camping",
      "family camping rishikesh",
      "couple camping rishikesh",
      "group camping rishikesh",
      "swiss tents rishikesh",
      "tapovan swiss camps",
      "camping near ganga river",
      "luxury tents with ac rishikesh",
      "glamping experience rishikesh",
      "premium camping accommodation rishikesh",
      "tent stay rishikesh",
      "nature camping rishikesh",
      "adventure camping rishikesh",
      "eco-friendly camping rishikesh",
      "camping with meals rishikesh",
      "bonfire camping rishikesh",
      "swimming pool camping rishikesh",
      "volleyball camping rishikesh",
      "best camping site rishikesh",
      "affordable luxury camping rishikesh",
      "camping packages rishikesh",
      "weekend camping rishikesh",
      "holiday camping rishikesh",
      "camping booking rishikesh",
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
        "Luxury Camping Tents in Tapovan Rishikesh | Premium Glamping Experience @ ₹999",
      description:
        "Discover luxury camping in Tapovan Rishikesh with Swiss tents by the Ganga. Stay in AC, cooler, or ordinary tents with premium amenities and serene views. Perfect for couples, families, and adventure seekers. Book now and experience the best riverside glamping starting at ₹999.",
      url: `${baseUrl}/tents`,
      type: "website",
      siteName: "Tapovan Swiss Camps",
      locale: "en_IN",
      images: [
        {
          url: `${baseUrl}/assets/img/room/ACTent1.webp`,
          width: 1200,
          height: 630,
          alt: "Luxury AC Tent at Tapovan Swiss Camps Rishikesh",
        },
        {
          url: `${baseUrl}/assets/img/room/coolerTent1.webp`,
          width: 1200,
          height: 630,
          alt: "Luxury Cooler Tent at Tapovan Swiss Camps Rishikesh",
        },
        {
          url: `${baseUrl}/assets/img/room/ordinaryTent1.webp`,
          width: 1200,
          height: 630,
          alt: "Budget Ordinary Tent at Tapovan Swiss Camps Rishikesh",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Luxury Camping Tents in Tapovan Rishikesh | Premium Glamping @ ₹999",
      description:
        "Experience luxury camping in Tapovan Rishikesh with premium tents by the Ganga. AC, cooler & budget tents available. Book now for the best riverside glamping experience!",
      images: [`${baseUrl}/assets/img/room/ACTent1.webp`],
    },
    other: {
      "geo.region": "IN-UT",
      "geo.placename": "Rishikesh",
      "geo.position": "30.1394342;78.3127861",
      ICBM: "30.1394342, 78.3127861",
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
