import React from "react";
import TeamDetailsPage from "./TeamDetailsPage";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
    name?: string;
    role?: string;
    image?: string;
    description?: string;
    facebook?: string;
    twitter?: string;
    whatsApp?: string;
    instagram?: string;
  }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const baseUrl = "https://tapovanswisscampsofficial.com";

  // Resolve the promises
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const name = resolvedSearchParams.name || "Team Member";
  const role = resolvedSearchParams.role || "Team Member";
  const description =
    resolvedSearchParams.description ||
    `${name} is a valued team member at Tapovan Swiss Camps, contributing to our mission of providing exceptional camping experiences in Rishikesh.`;
  const image = resolvedSearchParams.image || "/assets/img/team/avatar.png";
  const imageUrl = image.startsWith("/") ? `${baseUrl}${image}` : image;

  // Build canonical URL with all relevant parameters
  const url = new URL(`${baseUrl}/team/${resolvedParams.id}`);
  const urlParams = new URLSearchParams();

  if (name) urlParams.append("name", name);
  if (role) urlParams.append("role", role);
  if (image) urlParams.append("image", image);
  if (description) urlParams.append("description", description);
  if (resolvedSearchParams.facebook)
    urlParams.append("facebook", resolvedSearchParams.facebook);
  if (resolvedSearchParams.twitter)
    urlParams.append("twitter", resolvedSearchParams.twitter);
  if (resolvedSearchParams.whatsApp)
    urlParams.append("whatsApp", resolvedSearchParams.whatsApp);
  if (resolvedSearchParams.instagram)
    urlParams.append("instagram", resolvedSearchParams.instagram);

  url.search = urlParams.toString();

  // Access and extend parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${name} - ${role} | Camping, Rafting & Travel Contact in Rishikesh - Tapovan Swiss Camps`,

    description: `Contact ${name}, our ${role.toLowerCase()} at Tapovan Swiss Camps. Get assistance with Rishikesh camping bookings, rafting adventures, bike rentals, bungee jumping, and more. Your trusted travel contact in Tapovan, Rishikesh.`,

    keywords: [
      "tapovan swiss camps",
      "camping contact in tapovan rishikesh",
      "camping contact in rishikesh ",
      "rafting contact in rishikesh",
      "contact of rishikesh rafting",
      "contact of rishikesh camping",
      "contact of rishikesh bungee jumping",
      "contact of bike rent in rishikesh",
      "contact of bike rent in tapovan, rishikesh",
      "camping contact number in rishikesh",
      "camping contact number in shivpuri, rishikesh",
      "rafting contact number in rishikesh",
      "rafting contact number in shivpuri, rishikesh",
      `${name}`,
      `${role} at Tapovan Swiss Camps`,
      "camping team Rishikesh",
      `${name} contact`,
      "Tapovan Swiss staff",
    ],
    openGraph: {
      title: `${name} - ${role} | Tapovan Swiss Camps`,
      description: `Learn about ${name}, our ${role.toLowerCase()} at Tapovan Swiss Camps in Rishikesh`,
      url: url.toString(),
      type: "profile",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `${name}, ${role} at Tapovan Swiss Camps`,
        },
        ...previousImages,
      ],
      firstName: name.split(" ")[0],
      lastName: name.split(" ").slice(1).join(" "),
      ...(resolvedSearchParams.facebook && {
        site_name: "Tapovan Swiss Camps",
        profile: {
          username: resolvedSearchParams.facebook,
        },
      }),
    },
  };
}

function TeamDetails() {
  return <TeamDetailsPage />;
}

export default TeamDetails;
