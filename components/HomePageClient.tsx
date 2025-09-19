"use client";

import { useEffect, useState, useRef, type ReactNode } from "react";

import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: false,
  loading: () => <Loading />,
});
import Loading from "@/components/Loading";

const VideoSection = dynamic(() => import("@/components/VideoSection"), {
  ssr: false,
  loading: () => <Loading />,
});

import Script from "next/script";

const TentsClient = dynamic(() => import("@/components/TentsClient"), {
  ssr: false,
  loading: () => <Loading />,
});
const FAQPage = dynamic(() => import("../app/faq/FAQPage"), {
  ssr: false,
  loading: () => <Loading />,
});

const BlogPage = dynamic(() => import("../app/blogs/blogPage"), {
  ssr: false,
  loading: () => <Loading />,
});
const TestimonialPage = dynamic(
  () => import("../app/testimonial/TestimonialPage"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

function Defer({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const called = useRef(false);
  useEffect(() => {
    if (called.current) return;
    called.current = true;
    const ric = (window as any).requestIdleCallback as
      | ((cb: () => void, opts?: { timeout?: number }) => number)
      | undefined;
    let id: number | undefined;
    if (typeof ric === "function") {
      id = ric(() => setReady(true), { timeout: 1500 });
      return () => {
        if (id && (window as any).cancelIdleCallback) {
          (window as any).cancelIdleCallback(id);
        }
      };
    }
    const t = window.setTimeout(() => setReady(true), 800);
    return () => window.clearTimeout(t);
  }, []);
  return ready ? <>{children}</> : null;
}

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <Loading />;

  return (
    <>
      {/* ✅ Enhanced Structured Data */}
      <Script
        type="application/ld+json"
        id="local-business-schema"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Campground", "LodgingBusiness", "TouristAttraction"],
          name: "Tapovan Swiss Camps",
          description:
            "Rishikesh's premier luxury camping destination with AC tents, adventure sports, and yoga retreats by the Ganges River.",
          image: [
            "https://www.tapovanswisscampsofficial.com/assets/img/room/gardenPhoto.webp",
            "https://www.tapovanswisscampsofficial.com/assets/img/room/ACTent1.webp",
          ],
          priceRange: "₹999 - ₹1799",
          telephone: "+91-7906924003",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Neelkanth Road, Tapovan",
            addressLocality: "Rishikesh",
            addressRegion: "Uttarakhand",
            postalCode: "249201",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 30.1072384,
            longitude: 78.3056896,
          },
          url: "https://www.tapovanswisscampsofficial.com",
          sameAs: [
            "https://www.facebook.com/61574061994310",
            "https://www.instagram.com/tapovanswisscampsofficial",
          ],
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
          starRating: {
            "@type": "Rating",
            ratingValue: "4.9",
            bestRating: "5",
            ratingCount: "250",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Camping Packages",
            itemListElement: [
              {
                "@type": "OfferCatalog",
                name: "Luxury Tent Stays",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Deluxe Cooler Tent",
                    price: "1499",
                    priceCurrency: "INR",
                  },
                  {
                    "@type": "Offer",
                    name: "Premium AC Tent",
                    price: "1799",
                    priceCurrency: "INR",
                  },
                ],
              },
              {
                "@type": "OfferCatalog",
                name: "Adventure Packages",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Rafting + Camping Combo",
                    price: "2499",
                    priceCurrency: "INR",
                  },
                ],
              },
            ],
          },
        })}
      </Script>

      {/* ✅ Breadcrumb Schema */}
      <Script
        type="application/ld+json"
        id="breadcrumb-schema"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.tapovanswisscampsofficial.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Rishikesh Luxury Camping",
              item: "https://www.tapovanswisscampsofficial.com/tents",
            },
          ],
        })}
      </Script>

      <div className="page-wrapper">
        <HeroSection />
        <TentsClient />
        <VideoSection />
        {/** Defer below-the-fold content until idle for better LCP */}
        <div suppressHydrationWarning>
          {/* Use requestIdleCallback when available to defer heavier sections */}
          {/* This pattern avoids blocking main thread on initial view */}
        </div>
        <Defer>
          <TestimonialPage />
          <FAQPage />
          <BlogPage />
        </Defer>
      </div>
    </>
  );
}
