"use client";

import AOS from "aos";
import React, { useEffect, useState } from "react";

function Account() {
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
    // Initialize AOS only if it's not already initialized
    if (typeof window !== "undefined" && !window.AOS) {
      AOS.init({ duration: 1200 });
      window.AOS = AOS; // Store in window to prevent re-initialization
    }
  }, []);

  return (
    <div suppressHydrationWarning>
      <section
        className={isMobile ? "about-area ptb-200" : "about-area ptb-60"}
      >
        <div className="container">
          <h1>Account</h1>
        </div>
      </section>
    </div>
  );
}

export default Account;
