"use client";

import { useEffect, useState, useRef, type ReactNode, Suspense } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import Loading from "@/components/Loading";

// Optimize dynamic imports with better loading strategies
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: true, // Hero should be SSR for better LCP
  loading: () => <Loading />,
});

const TentsClient = dynamic(() => import("@/components/TentsClient"), {
  ssr: false,
  loading: () => <Loading />,
});

const VideoSection = dynamic(() => import("@/components/VideoSection"), {
  ssr: false,
  loading: () => <Loading />,
});

// Defer these heavy components
// (Removed unused FAQPage import)

const BlogPage = dynamic(() => import("../app/blogs/blogPage"), {
  ssr: false,
  loading: () => <Loading />,
});

// (Removed unused TestimonialPage import)

function Defer({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    const ric = window.requestIdleCallback;
    let id: number | undefined;

    if (typeof ric === "function") {
      id = ric(() => setReady(true), { timeout: 1500 });
      return () => {
        if (id && window.cancelIdleCallback) {
          window.cancelIdleCallback(id);
        }
      };
    }

    const t = window.setTimeout(() => setReady(true), 800);
    return () => window.clearTimeout(t);
  }, []);

  return ready ? <>{children}</> : null;
}

export default function Home() {
  const [showInitialLoader, setShowInitialLoader] = useState(true);

  // Show one global full-page loader when the app first opens
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setShowInitialLoader(false);
    }, 1500);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      {showInitialLoader && (
        <Loading fullscreen size="large" text="Loading..." duration={3000} />
      )}

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
        <Suspense fallback={<Loading />}>
          <HeroSection />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <TentsClient />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <VideoSection />
        </Suspense>

        {/** Defer below-the-fold content until idle for better LCP */}
        <Defer>
          <Suspense fallback={<Loading />}>
            <BlogPage />
          </Suspense>
        </Defer>
      </div>
    </>
  );
}
