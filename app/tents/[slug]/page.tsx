import React from "react";
import TentDetailsPage from "./TentDetailsPage";
import { Metadata, ResolvingMetadata } from "next";
import { getTentBySlug, getAllTentSlugs } from "../tentData";

// Generate static params for all tent slugs
export async function generateStaticParams() {
  const slugs = getAllTentSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const baseUrl = "https://tapovanswisscampsofficial.com";
  const resolvedParams = await params;
  const tent = getTentBySlug(resolvedParams.slug);

  if (!tent) {
    return {
      title: "Tent Not Found | Tapovan Swiss Camps",
      description: "The requested tent could not be found.",
    };
  }

  const { title, metaDescription, image, altText, price, beds, baths } = tent;
  const imageUrl = image.startsWith("/")
    ? `${baseUrl}${image}`
    : `${baseUrl}/${image}`;
  const url = `${baseUrl}/tents/${resolvedParams.slug}`; // Clean canonical URL

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${title} in Tapovan Rishikesh | Premium Camping Experience @ ₹${price} | Tapovan Swiss Camps`,
    description: `${metaDescription} Book now for the best ${title.toLowerCase()} experience in Rishikesh with modern amenities, riverside location, and exceptional hospitality.`,
    alternates: {
      canonical: url,
    },
    keywords: [
      `${title.toLowerCase()} rishikesh`,
      `${title.toLowerCase()} tapovan rishikesh`,
      `${title.toLowerCase()} booking rishikesh`,
      `book ${title.toLowerCase()} near ganga`,
      `${title.toLowerCase()} with ${beds} beds`,
      `${title.toLowerCase()} with ${
        baths === "Common" ? "shared bathroom" : "attached bathroom"
      }`,
      `${title.toLowerCase()} camping rishikesh`,
      `${title.toLowerCase()} for family stay`,
      `${title.toLowerCase()} in shivpuri rishikesh`,
      `best ${title.toLowerCase()} in rishikesh`,
      `best ${title.toLowerCase()} in tapovan rishikesh`,
      "luxury camping tents rishikesh",
      "premium glamping rishikesh",
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
      title: `${title} in Tapovan Rishikesh | Premium Camping Experience @ ₹${price}`,
      description: `${metaDescription} Book now for the best ${title.toLowerCase()} experience in Rishikesh with modern amenities and riverside location.`,
      url: url,
      type: "website",
      siteName: "Tapovan Swiss Camps",
      locale: "en_IN",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: altText,
        },
        {
          url: `${baseUrl}/assets/img/room/ACTent1.webp`,
          width: 1200,
          height: 630,
          alt: "Luxury Camping Tents at Tapovan Swiss Camps Rishikesh",
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} in Tapovan Rishikesh | Premium Camping @ ₹${price}`,
      description: `Experience luxury ${title.toLowerCase()} camping in Rishikesh with premium amenities, riverside location, and exceptional hospitality.`,
      images: [imageUrl],
    },
    other: {
      "geo.region": "IN-UT",
      "geo.placename": "Rishikesh",
      "geo.position": "30.1394342;78.3127861",
      ICBM: "30.1394342, 78.3127861",
    },
  };
}

function TentDetails() {
  return <TentDetailsPage />;
}

export default TentDetails;
