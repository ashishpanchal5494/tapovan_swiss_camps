"use client";

import React, { useEffect, useState, memo, Suspense, useMemo } from "react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { blogData, getBlogBySlug } from "@/data/blogData";
import { tentRooms } from "@/app/tents/tentData";

// (No lazy components required here)

// Define your website's base URL for canonical and Open Graph URLs
const BASE_URL = "https://www.tapovanswisscampsofficial.com"; // **IMPORTANT: Replace with your actual domain**

// // Function to clean up content for meta description (remove HTML entities like &lsquo; and shorten)
const cleanContentForDescription = (content: string, maxLength = 160) => {
  let cleaned = content
    .replace(/&lsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&mdash;/g, "—")
    .replace(/&nbsp;/g, " ")
    .replace(/(<([^>]+)>)/gi, ""); // Remove HTML tags
  cleaned = cleaned.split("\n")[0].trim(); // Take only the first paragraph
  if (cleaned.length > maxLength) {
    cleaned = cleaned.substring(0, maxLength - 3) + "...";
  }
  return cleaned;
};

const BlogDetailsPage: React.FC = memo(() => {
  const [isMobile, setIsMobile] = useState(false);
  const { slug } = useParams();

  // Optimized mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 150);
    };

    checkMobile();
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Use optimized blog lookup
  const blog = useMemo(() => getBlogBySlug(slug as string), [slug]);

  // Memoized structured data
  const articleSchema = useMemo(() => {
    if (!blog) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${BASE_URL}/blogs/${blog.slug}`,
      headline: blog.seoTitle || blog.title,
      alternativeHeadline: blog.title,
      image: [
        {
          "@type": "ImageObject",
          url: `${BASE_URL}${blog.image}`,
          width: 1200,
          height: 630,
          caption: `${blog.title} - Tapovan Swiss Camps`,
        },
        ...(blog.additionalImages || []).map((img) => ({
          "@type": "ImageObject",
          url: `${BASE_URL}${img}`,
          width: 1200,
          height: 630,
          caption: `${blog.title} - Additional Image`,
        })),
      ],
      publishedTime: blog.publishedDate || "2023-05-02T12:00:00Z",
      modifiedTime: blog.modifiedDate || "2024-05-22T12:00:00Z",
      author: {
        "@type": "Organization",
        name: "Tapovan Swiss Camps",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/assets/img/logo.png`,
          width: 600,
          height: 60,
        },
        sameAs: [
          "https://www.facebook.com/61574061994310",
          "https://www.instagram.com/tapovanswisscampsofficial",
        ],
      },
      publisher: {
        "@type": "Organization",
        name: "Tapovan Swiss Camps",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/assets/img/logo.png`,
          width: 600,
          height: 60,
        },
      },
      description:
        blog.metaDescription || cleanContentForDescription(blog.content, 500),
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/blogs/${blog.slug}`,
        name: blog.title,
        url: `${BASE_URL}/blogs/${blog.slug}`,
        isPartOf: {
          "@type": "WebSite",
          "@id": BASE_URL,
          name: "Tapovan Swiss Camps",
        },
      },
      keywords: blog.tags?.join(", ") || "",
      articleSection: blog.category,
      wordCount: blog.content.length,
      inLanguage: "en-IN",
      isAccessibleForFree: true,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blogs",
            item: `${BASE_URL}/blogs`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: blog.title,
            item: `${BASE_URL}/blogs/${blog.slug}`,
          },
        ],
      },
      about: {
        "@type": "Thing",
        name: blog.category,
        description: `Information about ${blog.category} in Rishikesh`,
      },
      mentions: [
        {
          "@type": "Place",
          name: "Rishikesh",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Rishikesh",
            addressRegion: "Uttarakhand",
            addressCountry: "IN",
          },
        },
        {
          "@type": "Organization",
          name: "Tapovan Swiss Camps",
          url: BASE_URL,
        },
      ],
    };
  }, [blog]);

  // FAQ Schema for better featured snippets
  const faqSchema = useMemo(() => {
    if (!blog || !blog.faq || blog.faq.length === 0) return null;
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: blog.faq.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
  }, [blog]);

  if (!blog) return notFound();

  return (
    <>
      {/* Structured Data Script (for Article Schema) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* FAQ Schema Script */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div
        className={
          isMobile
            ? "blog-area blog-details-area ptb-200"
            : "blog-area blog-details-area pt-60"
        }
      >
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "20px" }}>
            <ol
              style={{
                display: "flex",
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "14px",
                color: "#666",
              }}
            >
              <li style={{ marginRight: "8px" }}>
                <Link
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "#507650",
                    fontWeight: "500",
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ margin: "0 8px", color: "#999" }}>›</li>
              <li style={{ marginRight: "8px" }}>
                <Link
                  href="/blogs"
                  style={{
                    textDecoration: "none",
                    color: "#507650",
                    fontWeight: "500",
                  }}
                >
                  Blogs
                </Link>
              </li>
              <li style={{ margin: "0 8px", color: "#999" }}>›</li>
              <li style={{ color: "#333", fontWeight: "500" }}>{blog.title}</li>
            </ol>
          </nav>

          {/* Blog Image */}
          <div className="blog-details-image">
            <Image
              src={blog.image}
              alt={`${blog.title} - Tapovan Swiss Camp`}
              width={800}
              height={450}
              priority
              fetchPriority="high"
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>

          {/* Blog Title */}
          <h1>{blog.title}</h1>

          {/* Blog Meta Information */}
          <div
            style={{
              marginBottom: "20px",
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #e9ecef",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                fontSize: "14px",
                color: "#666",
              }}
            >
              <span>
                <strong>Category:</strong> {blog.category}
              </span>
              <span>
                <strong>Published:</strong>{" "}
                {new Date(blog.publishedDate || "").toLocaleDateString()}
              </span>
              <span>
                <strong>Reading Time:</strong>{" "}
                {Math.ceil(blog.content.length / 500)} min read
              </span>
              {blog.tags && (
                <span>
                  <strong>Tags:</strong> {blog.tags.slice(0, 3).join(", ")}
                </span>
              )}
            </div>
          </div>

          {/* Blog Content */}
          <div className="blog-details-content">
            {/* Using dangerouslySetInnerHTML on the full content can be risky if content isn't sanitized.
                Consider a library like 'html-react-parser' or sanitizing input properly.
                For demonstration, keeping your current approach. */}
            <div>
              {blog.content.split("\n").map((para, idx) => (
                <div
                  dangerouslySetInnerHTML={{ __html: para.trim() }}
                  key={idx}
                ></div>
              ))}
            </div>
            <div style={{ marginTop: 10 }}>
              <p>
                📞{" "}
                <Link
                  style={{
                    fontWeight: "500",
                    color: "#507650",
                  }}
                  href="tel:7906924003"
                >
                  Call(7906924003)
                </Link>{" "}
                or{" "}
                <Link
                  style={{
                    fontWeight: "500",
                    color: "#507650",
                  }}
                  href={`https://wa.me/7906924003?text=Hello, I'm interested in your Camping Side!`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </Link>{" "}
                us today to check availability and book your unforgettable
                camping experience in Rishikesh!
              </p>
            </div>
          </div>

          <div
            className="tent-links"
            style={{
              marginTop: "30px",
              padding: "20px",
              backgroundColor: "#f9fbf9",
              borderRadius: "10px",
              border: "1px solid #e6efe6",
            }}
          >
            <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>
              Explore Our Tent Stays
            </h2>
            <p style={{ color: "#666", marginBottom: "12px" }}>
              Planning your stay in Rishikesh? Compare our tent options and book
              the perfect riverside experience.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <Link
                href="/tents"
                style={{
                  textDecoration: "none",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  backgroundColor: "#507650",
                  color: "#fff",
                  fontWeight: "500",
                }}
              >
                View All Tents
              </Link>
              {tentRooms.map((tent) => (
                <Link
                  key={tent.slug}
                  href={`/tents/${tent.slug}`}
                  style={{
                    textDecoration: "none",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    backgroundColor: "#fff",
                    border: "1px solid #dfe8df",
                    color: "#507650",
                    fontWeight: "500",
                  }}
                >
                  {tent.title}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          {blog.faq && blog.faq.length > 0 && (
            <div
              style={{
                marginTop: "40px",
                padding: "25px",
                backgroundColor: "#f8f9fa",
                borderRadius: "12px",
                border: "2px solid #507650",
              }}
            >
              <h2
                style={{
                  color: "#507650",
                  marginBottom: "20px",
                  fontSize: "24px",
                  textAlign: "center",
                }}
              >
                ❓ Frequently Asked Questions
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {blog.faq.map((faq, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "15px",
                      backgroundColor: "white",
                      borderRadius: "8px",
                      border: "1px solid #e9ecef",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}
                  >
                    <h3
                      style={{
                        color: "#333",
                        marginBottom: "10px",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {faq.question}
                    </h3>
                    <p
                      style={{
                        color: "#666",
                        margin: 0,
                        lineHeight: "1.6",
                        fontSize: "14px",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Social Sharing */}
          <div className="social-sharing">
            <Link
              style={{ textDecoration: "none" }}
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                blog.title
              )}&url=${encodeURIComponent(
                `${BASE_URL}/blogs/${blog.slug}` // Use BASE_URL here
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share on Twitter
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                `${BASE_URL}/blogs/${blog.slug}` // Use BASE_URL here
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share on Facebook
            </Link>
          </div>

          {/* Related Posts */}
          <div className="related-posts">
            <h3>You Might Also Like</h3>
            <div className="row">
              <Suspense
                fallback={
                  <div className="related-posts-skeleton">
                    Loading related posts...
                  </div>
                }
              >
                {blogData
                  .filter((b) => b.id !== blog.id)
                  .slice(0, 3)
                  .map((related) => (
                    <div key={related.id} className="col-lg-4 col-md-6">
                      <div className="content-blog blog-grid">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link
                              href={`/blogs/${related.slug}`}
                              prefetch={false}
                            >
                              <Image
                                width={400}
                                height={300}
                                src={
                                  related.image.startsWith("/")
                                    ? related.image
                                    : `/${related.image}`
                                }
                                alt={`${related.title} - Tapovan Swiss Camps`}
                                loading="lazy"
                                quality={85}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </Link>
                            <div className="blog-category">
                              <Link style={{ textDecoration: "none" }} href="#">
                                {related.category}
                              </Link>
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="title">
                              <Link
                                style={{ textDecoration: "none" }}
                                href={`/blogs/${related.slug}`}
                              >
                                {related.title}
                              </Link>
                            </h5>
                            <div className="read-more-btn">
                              <Link
                                style={{ textDecoration: "none" }}
                                className="blog-btn"
                                href={`/blogs/${related.slug}`}
                                aria-label={`Read more about ${related.title}`}
                              >
                                Read More about:{" "}
                                {related.title.split(" ").slice(0, 4).join(" ")}
                                {related.title.split(" ").length > 4 && "..."}
                                <i
                                  className="bx bx-right-arrow-alt"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

BlogDetailsPage.displayName = "BlogDetailsPage";

export default BlogDetailsPage;
