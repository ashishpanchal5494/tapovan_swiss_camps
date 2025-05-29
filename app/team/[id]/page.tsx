import React from "react";
import TeamDetailsPage from "./TeamDetailsPage";
import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const baseUrl = "https://tapovanswisscampsofficial.com";
  const name = (searchParams.name as string) || "Team Member";
  const role = (searchParams.role as string) || "Team Member";
  const description =
    (searchParams.description as string) ||
    `${name} is a valued team member at Tapovan Swiss Camps, contributing to our mission of providing exceptional camping experiences in Rishikesh.`;
  const image = (searchParams.image as string) || "/assets/img/team/avatar.png";
  const imageUrl = image.startsWith("/") ? `${baseUrl}${image}` : image;

  return {
    title: `${name} - ${role}`,
    description: `Meet ${name}, our ${role.toLowerCase()} at Tapovan Swiss Camps. ${description.substring(
      0,
      155
    )}...`,
    keywords: [
      `${name}`,
      `${role} at Tapovan Swiss Camps`,
      "camping team Rishikesh",
      `${name} contact`,
      "Tapovan Swiss staff",
    ],

    alternates: {
      canonical: `${baseUrl}/team?name=${encodeURIComponent(name)}`,
    },

    openGraph: {
      title: `${name} - ${role} | Tapovan Swiss Camps`,
      description: `Learn about ${name}, our ${role.toLowerCase()} at Tapovan Swiss Camps in Rishikesh`,
      url: `${baseUrl}/team?name=${encodeURIComponent(name)}`,
      type: "profile",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `${name}, ${role} at Tapovan Swiss Camps`,
        },
      ],
      firstName: name.split(" ")[0],
      lastName: name.split(" ").slice(1).join(" "),
    },

    twitter: {
      card: "summary_large_image",
      title: `${name} - ${role} | Tapovan Swiss Camps`,
      description: `Meet ${name}, our ${role.toLowerCase()} at Tapovan Swiss Camps in Rishikesh`,
      images: [imageUrl],
    },
  };
}

function TeamDetails() {
  return <TeamDetailsPage />;
}

export default TeamDetails;
