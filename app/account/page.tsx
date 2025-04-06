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
    AOS.init({ duration: 1200 });
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
