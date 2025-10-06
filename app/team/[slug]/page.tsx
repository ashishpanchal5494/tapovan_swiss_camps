import React from "react";
import TeamDetailsPage from "./TeamDetailsPage";
import { Metadata, ResolvingMetadata } from "next";
import { getTeamMemberBySlug, getAllTeamMemberSlugs } from "../teamData";

// Generate static params for better SEO
export async function generateStaticParams() {
  const slugs = getAllTeamMemberSlugs();

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

  // Resolve the promises
  const resolvedParams = await params;

  // Get team member data by slug
  const teamMember = getTeamMemberBySlug(resolvedParams.slug);

  if (!teamMember) {
    return {
      title: "Team Member Not Found | Tapovan Swiss Camps",
      description: "The requested team member could not be found.",
    };
  }

  const { name, role, image } = teamMember;
  const imageUrl = image.startsWith("/") ? `${baseUrl}${image}` : image;

  // Build clean canonical URL
  const url = `${baseUrl}/team/${resolvedParams.slug}`;

  // Access and extend parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${name} - ${role} | Expert Team Member at Tapovan Swiss Camps Rishikesh | Luxury Camping & Adventure Specialist`,

    description: `Meet ${name}, our ${role.toLowerCase()} at Tapovan Swiss Camps Rishikesh. Expert in luxury camping, rafting adventures, and hospitality services. Contact ${name} for personalized assistance with Rishikesh camping bookings, adventure activities, and premium tent accommodations by the Ganges.`,

    keywords: [
      `${name} tapovan swiss camps`,
      `${name} rishikesh camping expert`,
      `${role.toLowerCase()} rishikesh`,
      "tapovan swiss camps team member",
      "rishikesh camping professional",
      "luxury tent specialist rishikesh",
      "camping expert contact rishikesh",
      "rafting guide rishikesh",
      "hospitality professional rishikesh",
      "adventure sports expert rishikesh",
      "ganga riverside camping guide",
      "swiss tent accommodation expert",
      "camping booking assistance rishikesh",
      "outdoor adventure specialist",
      "nature retreat professional",
      "camping facility manager",
      "guest service specialist",
      "tent stay expert rishikesh",
      "adventure camping guide",
      "riverside camping professional",
      "swiss tent hospitality expert",
      "camping experience coordinator",
      "nature camping specialist",
      "outdoor hospitality professional",
      "premium camping consultant",
      "adventure travel expert",
      "camping service coordinator",
      "tent accommodation specialist",
      "nature retreat coordinator",
      "outdoor experience manager",
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
      title: `${name} - ${role} | Expert Team Member at Tapovan Swiss Camps Rishikesh`,
      description: `Meet ${name}, our ${role.toLowerCase()} at Tapovan Swiss Camps Rishikesh. Expert in luxury camping, rafting adventures, and hospitality services. Contact for personalized assistance with Rishikesh camping bookings and adventure activities.`,
      url: url,
      type: "profile",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${name} - ${role} at Tapovan Swiss Camps Rishikesh`,
        },
        {
          url: `${baseUrl}/assets/img/team/group.webp`,
          width: 1200,
          height: 630,
          alt: "Tapovan Swiss Camps Expert Team - Rishikesh Camping Professionals",
        },
        ...previousImages,
      ],
      firstName: name.split(" ")[0],
      lastName: name.split(" ").slice(1).join(" "),
      siteName: "Tapovan Swiss Camps",
      locale: "en_IN",
      ...(teamMember.socialLinks.facebook !== "#" && {
        profile: {
          username: teamMember.socialLinks.facebook,
        },
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} - ${role} at Tapovan Swiss Camps Rishikesh`,
      description: `Meet ${name}, our ${role.toLowerCase()} at Tapovan Swiss Camps. Expert in luxury camping, rafting adventures, and hospitality services in Rishikesh.`,
      images: [imageUrl],
    },
    other: {
      "geo.region": "IN-UT",
      "geo.placename": "Rishikesh",
      "geo.position": "30.129;78.3153",
      ICBM: "30.129, 78.3153",
    },
  };
}

function TeamDetails() {
  return <TeamDetailsPage />;
}

export default TeamDetails;
