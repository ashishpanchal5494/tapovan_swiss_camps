import React from "react";
import TentDetailsPage from "./TentDetailsPage";
import { Metadata, ResolvingMetadata } from "next";

interface Tent {
  id: number;
  title: string;
  seoTitle: string;
  metaDescription: string;
  mainPrice: number;
  price: number;
  image: string;
  altText: string;
  beds: number;
  baths: number | string;
  description: string;
  linkBooking: string;
}

const tentRooms: Tent[] = [
  {
    id: 1,
    title: "Luxury AC Tent",
    seoTitle:
      "Luxury AC Camping Tent in Rishikesh | Premium Glamping Experience",
    metaDescription:
      "Book our luxury AC tents in Rishikesh with 5 beds, private bath & climate control. Perfect for family glamping with modern amenities amidst nature.",
    altText: "Luxury AC Glamping Tent in Rishikesh with mountain views",
    mainPrice: 2499,
    price: 1799,
    image: "assets/img/room/actent-1.webp",
    beds: 5,
    baths: 1,
    description:
      "Experience unparalleled comfort in our Luxury AC Tents, designed for those who seek a perfect blend of nature and modern amenities. These spacious 5-bed tents feature climate control to ensure your comfort in all seasons, along with attached bathrooms for privacy. Enjoy premium bedding, tasteful decor, and ample space to relax after a day of adventure. <br/> <i>Please note</i>: To maintain a healthy environment for all guests, smoking and consumption of alcohol are strictly prohibited in all tents. We kindly request all guests to help us keep the tents clean and in excellent condition for everyone's enjoyment. <br/> Located amidst lush greenery, our AC tents offer a serene retreat while keeping you connected with essential conveniences. Perfect for families or groups looking for a luxurious camping experience without compromising on comfort.",
    linkBooking: "/booking-form",
  },
  {
    id: 2,
    title: "Luxury Cooler Tent",
    seoTitle: "Luxury Cooler Tent in Rishikesh | Nature Retreat with Comfort",
    metaDescription:
      "Experience natural cooling in our premium tents near Ganga. Perfect for couples and families seeking comfortable camping in Rishikesh.",
    altText: "Luxury Cooler Tent with natural ventilation in Rishikesh",
    mainPrice: 1999,
    price: 1499,
    image: "assets/img/room/coolertent-1.webp",
    beds: 5,
    baths: 1,
    description:
      "Stay cool and comfortable in our Luxury Cooler Tents, designed to provide natural ventilation and temperature regulation. These well-appointed tents feature 5 comfortable beds and attached bathrooms, offering a perfect balance between outdoor living and essential comforts. <br/> <i>Important rules</i>: For the safety and comfort of all guests, smoking and drinking alcohol inside the tents is not permitted. We appreciate your cooperation in maintaining cleanliness and taking care of the tent facilities during your stay. <br/> The evaporative cooling system ensures a pleasant environment even during warmer days. Enjoy the sounds of nature from your private tent, surrounded by our beautifully landscaped property. Ideal for those who want a comfortable camping experience with a touch of traditional cooling methods.",
    linkBooking: "/booking-form",
  },
  {
    id: 3,
    title: "Ordinary Tent",
    seoTitle: "Budget Camping Tent in Rishikesh | Authentic Outdoor Experience",
    metaDescription:
      "Affordable camping tents in Rishikesh for backpackers and adventure seekers. Experience real camping with basic amenities near the Ganges.",
    altText: "Traditional camping tent in Rishikesh for budget travelers",
    mainPrice: 1199,
    price: 999,
    image: "assets/img/room/ordinarytent-1.webp",
    beds: 3,
    baths: "Common",
    description:
      "For the authentic camping enthusiasts, our Ordinary Tents offer a genuine outdoor experience with basic comforts. These 3-bed tents provide shared bathroom facilities and simple, clean accommodations. <br/> <i>Guest policies </i>: We maintain a strict no-smoking and no-alcohol policy in all tents to ensure a pleasant environment for all visitors. Guests are expected to keep their tents tidy and report any issues to our staff immediately. <br/> Perfect for budget-conscious travelers and backpackers who want to immerse themselves in nature without distractions. Located in our scenic property, these tents allow you to enjoy starry nights and fresh mountain air while still having access to our common amenities like dining areas and recreational spaces.",
    linkBooking: "/booking-form",
  },
];

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const baseUrl = "https://tapovanswisscampsofficial.com";

  // Await the promises to get the actual values
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const id = parseInt(
    resolvedParams.id || (resolvedSearchParams.id as string) || "0"
  );
  const tent = tentRooms.find((t) => t.id === id) || tentRooms[0];

  // Optionally access and extend parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const url = new URL(`${baseUrl}/tents/${id}`);
  const urlParams = new URLSearchParams();

  // Use resolvedSearchParams instead of searchParams directly
  if (resolvedSearchParams.id)
    urlParams.append("id", resolvedSearchParams.id as string);
  if (resolvedSearchParams.title)
    urlParams.append("title", resolvedSearchParams.title as string);
  if (resolvedSearchParams.mainPrice)
    urlParams.append("mainPrice", resolvedSearchParams.mainPrice as string);
  if (resolvedSearchParams.price)
    urlParams.append("price", resolvedSearchParams.price as string);
  if (resolvedSearchParams.image)
    urlParams.append("image", resolvedSearchParams.image as string);
  if (resolvedSearchParams.beds)
    urlParams.append("beds", resolvedSearchParams.beds as string);
  if (resolvedSearchParams.baths)
    urlParams.append("baths", resolvedSearchParams.baths as string);
  if (resolvedSearchParams.adults)
    urlParams.append("adults", resolvedSearchParams.adults as string);
  if (resolvedSearchParams.checkIn)
    urlParams.append("checkIn", resolvedSearchParams.checkIn as string);
  if (resolvedSearchParams.checkOut)
    urlParams.append("checkOut", resolvedSearchParams.checkOut as string);
  if (resolvedSearchParams.perHeadPrice)
    urlParams.append(
      "perHeadPrice",
      resolvedSearchParams.perHeadPrice as string
    );
  if (resolvedSearchParams.description)
    urlParams.append("description", resolvedSearchParams.description as string);
  if (resolvedSearchParams.metaDescription)
    urlParams.append(
      "metaDescription",
      resolvedSearchParams.metaDescription as string
    );

  url.search = urlParams.toString();

  return {
    title: `${tent.seoTitle}`,
    description: tent.metaDescription,
    alternates: {
      canonical: url.toString(),
    },
    openGraph: {
      title: tent.seoTitle,
      description: tent.metaDescription,
      url: url.toString(),
      images: [
        {
          url: `${baseUrl}/${tent.image}`,
          width: 1200,
          height: 630,
          alt: tent.altText,
        },
        ...previousImages,
      ],
      siteName: "Tapovan Swiss Camps",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tent.seoTitle} | Tapovan Swiss Camps`,
      description: `Luxury ${tent.seoTitle} tent in Rishikesh with premium amenities`,
      images: [`${baseUrl}/${tent.image}`],
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
