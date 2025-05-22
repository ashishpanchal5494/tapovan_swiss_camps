import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import TentsClient from "@/components/TentsClient";
import Head from "next/head";

const Tents: React.FC = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Luxury Camping Tents in Rishikesh | Premium Glamping Experience
        </title>
        <meta
          name="title"
          content="Luxury Camping Tents in Rishikesh | Premium Glamping Experience"
        />
        <meta
          name="description"
          content="Experience premium glamping in Rishikesh with our luxury AC & cooler tents. Book now for family-friendly camping near Ganga with modern amenities amidst nature."
        />
        <meta
          name="keywords"
          content="luxury tents Rishikesh, glamping near Ganga, premium camping Rishikesh, family tents, AC camping tents, luxury cooler tents, best camping in rishikesh"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://tapovanswisscampsofficial.com/tents"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://tapovanswisscampsofficial.com/tents"
        />
        <meta
          property="og:title"
          content="Luxury Camping Tents in Rishikesh | Premium Glamping Experience"
        />
        <meta
          property="og:description"
          content="Experience premium glamping in Rishikesh with our luxury AC & cooler tents. Book now for family-friendly camping near Ganga with modern amenities amidst nature."
        />
        <meta
          property="og:image"
          content="https://tapovanswisscampsofficial.com/assets/img/room/actent-1.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Luxury AC Tent at Tapovan Swiss Camps"
        />
        <meta property="og:site_name" content="Tapovan Swiss Camps" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://tapovanswisscampsofficial.com/tents"
        />
        <meta
          property="twitter:title"
          content="Luxury Camping Tents in Rishikesh | Premium Glamping Experience"
        />
        <meta
          property="twitter:description"
          content="Experience premium glamping in Rishikesh with our luxury AC & cooler tents. Book now for family-friendly camping near Ganga with modern amenities amidst nature."
        />
        <meta
          property="twitter:image"
          content="https://tapovanswisscampsofficial.com/assets/img/room/actent-1.webp"
        />
        <meta
          property="twitter:image:alt"
          content="Luxury AC Tent at Tapovan Swiss Camps"
        />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Tapovan Swiss Camps" />
        <meta name="geo.region" content="IN-UT" />
        <meta name="geo.placename" content="Rishikesh" />
        <meta name="geo.position" content="30.1312;78.3210" />
        <meta name="ICBM" content="30.1312, 78.3210" />

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
      </Head>

      <Suspense fallback={<Loading />}>
        <TentsClient />
      </Suspense>
    </>
  );
};

export default Tents;
