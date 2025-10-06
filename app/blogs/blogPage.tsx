"use client";

import { useEffect, useState, memo, Suspense, useMemo } from "react";
import dynamic from "next/dynamic";
import { blogData } from "@/data/blogData";

// Lazy load BlogCard component
const BlogCard = dynamic(() => import("@/components/BlogCard"), {
  loading: () => <div className="blog-card-skeleton">Loading...</div>,
  ssr: true,
});

// Lazy load Loading component
const Loading = dynamic(() => import("@/components/Loading"), {
  ssr: false,
});

// Memoized blog data to prevent unnecessary re-renders
const memoizedBlogData = blogData;

// Memoized structured data generation
const generateStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.tapovanswisscampsofficial.com/blogs",
    name: "Rishikesh Adventure Blogs - Tapovan Swiss Camps",
    description:
      "Discover expert travel guides for Rishikesh camping, rafting, bungee jumping, and bike rentals. Get insider tips, safety guides, and booking information from Tapovan Swiss Camps.",
    url: "https://www.tapovanswisscampsofficial.com/blogs",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.tapovanswisscampsofficial.com",
      name: "Tapovan Swiss Camps",
      url: "https://www.tapovanswisscampsofficial.com",
    },
    breadcrumb: {
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
          name: "Blogs",
          item: "https://www.tapovanswisscampsofficial.com/blogs",
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Rishikesh Adventure Blog Posts",
      description:
        "Complete collection of adventure and travel guides for Rishikesh",
      numberOfItems: memoizedBlogData.length,
      itemListElement: memoizedBlogData.map((blog, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          headline: blog.seoTitle || blog.title,
          description:
            blog.metaDescription ||
            blog.excerpt ||
            blog.content.substring(0, 200) + "...",
          url: `https://www.tapovanswisscampsofficial.com/blogs/${blog.slug}`,
          image: [
            `https://www.tapovanswisscampsofficial.com${blog.image}`,
            ...(blog.additionalImages || []).map(
              (img) => `https://www.tapovanswisscampsofficial.com${img}`
            ),
          ],
          datePublished: blog.publishedDate || "2024-05-01T00:00:00Z",
          dateModified: blog.modifiedDate || "2024-05-20T00:00:00Z",
          author: {
            "@type": "Organization",
            name: "Tapovan Swiss Camps",
            url: "https://www.tapovanswisscampsofficial.com",
            logo: {
              "@type": "ImageObject",
              url: "https://www.tapovanswisscampsofficial.com/assets/img/logo.png",
              width: 600,
              height: 60,
            },
          },
          publisher: {
            "@type": "Organization",
            name: "Tapovan Swiss Camps",
            logo: {
              "@type": "ImageObject",
              url: "https://www.tapovanswisscampsofficial.com/assets/img/logo.png",
              width: 600,
              height: 60,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.tapovanswisscampsofficial.com/blogs/${blog.slug}`,
          },
          keywords: blog.tags?.join(", ") || "",
          articleSection: blog.category,
          wordCount: blog.content.length,
        },
      })),
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.tapovanswisscampsofficial.com/blogs?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return JSON.stringify(structuredData);
};

const BlogPage: React.FC = memo(() => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Optimized mobile detection with single useEffect
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    // Debounced resize handler
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 150);
    };

    // Initial setup
    setIsClient(true);
    checkMobile();

    // Add event listener
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Memoized structured data
  const structuredData = useMemo(() => generateStructuredData(), []);

  if (!isClient) {
    return (
      <Suspense
        fallback={<div className="loading-placeholder">Loading blogs...</div>}
      >
        <Loading />
      </Suspense>
    );
  }

  return (
    <>
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <div
        className={`blog-area ${isMobile ? "ptb-200" : "ptb-60"}`}
        suppressHydrationWarning
      >
        <div className="container">
          <div className="section-title">
            <h1>Rishikesh Adventure Blogs – Tapovan Swiss Camps</h1>
            <p>
              Discover comprehensive travel guides, insider tips, and expert
              advice for the best camping, rafting, bungee jumping, and bike
              rental experiences in Rishikesh. From safety tips to booking
              guides, our blogs help you plan the perfect Himalayan adventure.
            </p>
            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                border: "1px solid #e9ecef",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  marginBottom: "10px",
                  color: "#507650",
                }}
              >
                📚 What You'll Find in Our Blogs:
              </h2>
              <ul style={{ margin: "0", paddingLeft: "20px" }}>
                <li>
                  <strong>Complete Activity Guides:</strong> Step-by-step
                  instructions for camping, rafting, bungee jumping, and bike
                  rentals
                </li>
                <li>
                  <strong>Safety Tips & Best Practices:</strong> Essential
                  information to ensure your adventure is both thrilling and
                  safe
                </li>
                <li>
                  <strong>Pricing & Booking Information:</strong> Transparent
                  costs and easy booking processes
                </li>
                <li>
                  <strong>Local Insider Knowledge:</strong> Hidden gems and
                  secret spots only locals know about
                </li>
                <li>
                  <strong>Seasonal Recommendations:</strong> Best times to visit
                  and weather considerations
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <Suspense
              fallback={
                <div className="blog-grid-skeleton">Loading blog posts...</div>
              }
            >
              {memoizedBlogData.map((blog, index) => (
                <BlogCard
                  key={blog.id}
                  {...blog}
                  priority={index < 2} // Prioritize first 2 images
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
});

BlogPage.displayName = "BlogPage";

export default BlogPage;
