import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import TentsClient from "@/components/TentsClient";

import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  const baseUrl = "https://tapovanswisscampsofficial.com";

  return {
    title: "Luxury Camping Tents in Rishikesh ",
    description:
      "Experience premium glamping with our luxury tents near the Ganga river. Choose from AC, cooler, or traditional tents for your perfect nature retreat.",
    keywords: [
      "luxury tents Rishikesh",
      "glamping near Ganga",
      "premium camping Rishikesh",
      "Swiss tents Tapovan",
      "best camping accommodation Rishikesh",
      "family camping tents",
      "couple camping Rishikesh",
    ],

    alternates: {
      canonical: `${baseUrl}/tents`,
    },

    openGraph: {
      title: "Luxury AC Tent - Tapovan Swiss Camps | Best Camping in Rishikesh",
      description:
        "Experience unparalleled comfort in our Luxury AC Tents, designed for those who seek a perfect blend of nature and modern amenities. These spacious 5-bed tents feature climate control to ensure your comfort in all seasons, along with attached bathrooms for privacy. Enjoy premium bedding, tasteful decor, and ample space to relax after a day of adventure. <br/> <i>Please note</i>: To maintain a healthy environment for all guests, smoking and consumption of alcohol are strictly prohibited in all tents. We kindly request all guests to help us keep the tents clean and in excellent condition for everyone's enjoyment. <br/> Located amidst lush greenery, our AC tents offer a serene retreat while keeping you connected with essential conveniences. Perfect for families or groups looking for a luxurious camping experience without compromising on comfort",
      url: `${baseUrl}/tents`,
      type: "website",
      images: [
        {
          url: `${baseUrl}/assets/img/room/actent-1.webp`,
          width: 1200,
          height: 630,
          alt: "AC tent - Tapovan Swiss Camps",
        },
      ],
      siteName: "Tapovan Swiss Camps",
    },

    twitter: {
      card: "summary_large_image",
      title: "Luxury AC Tent",
      description:
        "Experience unparalleled comfort in our Luxury AC Tents, designed for those who seek a perfect blend of nature and modern amenities. These spacious 5-bed tents feature climate control to ensure your comfort in all seasons, along with attached bathrooms for privacy. Enjoy premium bedding, tasteful decor, and ample space to relax after a day of adventure. <br/> <i>Please note</i>: To maintain a healthy environment for all guests, smoking and consumption of alcohol are strictly prohibited in all tents. We kindly request all guests to help us keep the tents clean and in excellent condition for everyone's enjoyment. <br/> Located amidst lush greenery, our AC tents offer a serene retreat while keeping you connected with essential conveniences. Perfect for families or groups looking for a luxurious camping experience without compromising on comfort",
      images: [`${baseUrl}/assets/img/room/actent-1.webp`],
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
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Luxury Camping Tents in Rishikesh",
          description:
            "Premium glamping experience with luxury tents near Ganga river",
          url: "https://tapovanswisscampsofficial.com/tents",
          image:
            "https://tapovanswisscampsofficial.com/assets/img/room/actent-1.webp",
          publisher: {
            "@type": "Organization",
            name: "Tapovan Swiss Camps",
            logo: {
              "@type": "ImageObject",
              url: "https://tapovanswisscampsofficial.com/assets/img/logo.png",
            },
          },
        })}
      </script>
      <Suspense fallback={<Loading />}>
        <TentsClient />
      </Suspense>
    </>
  );
};

export default Tents;
