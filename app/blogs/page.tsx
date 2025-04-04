"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import BlogCard from "@/components/BlogCard";

const blogData = [
  {
    id: 1,
    image: "assets/img/blog/blog-1.jpg",
    category: "Europe",
    title: "A Behind the Scenes Look at Metro Hotels’ Direct Channel Success.",
  },
  {
    id: 2,
    image: "assets/img/blog/blog-2.jpg",
    category: "Ireland",
    title:
      "The Importance of an Integrated Booking Engine in a Hotel’s Direct Booking.",
  },
  {
    id: 3, // Fixed missing ID
    image: "assets/img/blog/blog-3.jpg",
    category: "Dubai",
    title: "The Secret to Summertime Success on Your Hotel’s Website.",
  },
  {
    id: 4,
    image: "assets/img/blog/blog-4.jpg",
    category: "New York",
    title:
      "How H10 Hotels grew their marketing database by capturing first-party data?",
  },
  {
    id: 5,
    image: "assets/img/blog/blog-5.jpg",
    category: "Singapore",
    title: "How Penta Hotels Tripled Their Survey Answers Using Form Builder?",
  },
  {
    id: 6,
    image: "assets/img/blog/blog-6.jpg",
    category: "Australia",
    title:
      "Inside Palacio Estoril: Combining Historical Charm with Cutting-Edge Hospitality.",
  },
];

const Blogs: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Ensure AOS initializes only once
    if (typeof window !== "undefined" && !window.AOS) {
      AOS.init({ duration: 1200 });
      window.AOS = AOS; // Store in window to prevent re-initialization
    }
  }, []);

  return (
    <div
      className={isMobile ? "blog-area ptb-200" : "blog-area ptb-60"}
      suppressHydrationWarning
    >
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h2>Our Latest Blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida.
          </p>
        </div>
        <div className="row">
          {blogData.map((blog, index) => (
            <BlogCard key={blog.id ?? index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
