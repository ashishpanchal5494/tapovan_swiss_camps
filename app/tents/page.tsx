import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import TentsClient from "@/components/TentsClient";
import { Metadata } from "next";
import { tentRooms } from "./tentData";

export const generateMetadata = (): Metadata => {
  const baseUrl = "https://www.tapovanswisscampsofficial.com";

  return {
    title:
      "Luxury Camping Tents in Tapovan Rishikesh | Premium Glamping @ ₹999 | AC Tents by Ganga River | Tapovan Swiss Camps",
    description:
      "Experience luxury camping in Tapovan Rishikesh with premium AC tents, cooler tents & riverside glamping starting ₹999. Enjoy stunning Ganga river views, attached washrooms, modern amenities, swimming pool, rafting, yoga & delicious food. Best camping experience for couples, families & groups in Rishikesh. 4.8★ rated with 150+ reviews. Book now!",
    alternates: {
      canonical: `${baseUrl}/tents`,
    },
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
      "summer camping rishikesh",
      "winter camping rishikesh",
      "monsoon camping rishikesh",
      "weekend getaway rishikesh",
      "holiday camping packages rishikesh",
      "vacation camping rishikesh",
      "luxury glamping rishikesh",
      "premium tent stay rishikesh",
      "best rated camping rishikesh",
      "top camping resort rishikesh",
      "5 star camping rishikesh",
      "camping with rafting package rishikesh",
      "yoga retreat camping rishikesh",
      "adventure sports camping rishikesh",
      "riverside luxury camping rishikesh",
      "tapovan area camping rishikesh",
      "shivpuri camping with amenities",
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
        "Luxury Camping Tents in Tapovan Rishikesh | Premium Glamping @ ₹999 | AC Tents by Ganga River",
      description:
        "Discover luxury camping in Tapovan Rishikesh with Swiss tents by the Ganga. Stay in AC, cooler, or ordinary tents with premium amenities, Ganga river views, swimming pool, rafting, yoga & delicious food. Perfect for couples, families, and adventure seekers. Book now and experience the best riverside glamping starting at ₹999. 4.8★ rated.",
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
          url: `${baseUrl}/assets/img/room/gardenPhoto.webp`,
          width: 1200,
          height: 630,
          alt: "Luxury Camping Tents with Ganga River View at Tapovan Swiss Camps",
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
        "Luxury Camping Tents in Tapovan Rishikesh | Premium Glamping @ ₹999 | AC Tents by Ganga",
      description:
        "Experience luxury camping in Tapovan Rishikesh with premium tents by the Ganga. AC, cooler & budget tents available with modern amenities, swimming pool, rafting & yoga. Book now for the best riverside glamping experience! 4.8★ rated.",
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
  const baseUrl = "https://www.tapovanswisscampsofficial.com";
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Luxury Camping Tents in Tapovan Rishikesh | Premium Glamping by Ganga River",
    description:
      "Premium glamping experience with luxury AC tents, cooler tents, and budget options near Ganga river. Experience riverside camping with modern amenities, swimming pool, rafting, yoga, and delicious food.",
    url: `${baseUrl}/tents`,
    image: `${baseUrl}/assets/img/room/ACTent1.webp`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: tentRooms.length,
      itemListElement: tentRooms.map((tent, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: tent.title,
          description: tent.metaDescription,
          image: tent.image.startsWith("/")
            ? `${baseUrl}${tent.image}`
            : `${baseUrl}/${tent.image}`,
          url: `${baseUrl}/tents/${tent.slug}`,
          brand: {
            "@type": "Brand",
            name: "Tapovan Swiss Camps",
          },
          offers: {
            "@type": "Offer",
            price: tent.price,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: `${baseUrl}/tents/${tent.slug}`,
          },
        },
      })),
    },
    publisher: {
      "@type": "Organization",
      name: "Tapovan Swiss Camps",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/img/logo.png`,
      },
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "999",
      highPrice: "2999",
      priceCurrency: "INR",
      offerCount: tentRooms.length,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tents",
        item: `${baseUrl}/tents`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Suspense fallback={<Loading />}>
        <TentsClient />
      </Suspense>
    </>
  );
};

export default Tents;
