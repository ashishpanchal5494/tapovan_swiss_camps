"use client";

import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import $ from "jquery"; // Import jQuery
import { useEffect, useState } from "react";

import Loading from "@/components/Loading";

const Error = () => {
  const [isClient, setIsClient] = useState(false);

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
    setIsClient(true);
    // Ensure jQuery is loaded before OwlCarousel initializes
    if (typeof window !== "undefined") {
      (window as any).$ = (window as any).jQuery = $;
    }

    AOS.init({ duration: 1200 });
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  return (
    <>
      <section
        className={
          isMobile ? "page-error-area ptb-200" : "page-error-area ptb-60"
        }
      >
        <div className="container-fluid">
          <div className="page-error-content text-center">
            <Image
              src="/assets/img/error.png"
              alt="404 Error"
              width={400}
              height={300}
              data-aos="fade-up"
              data-aos-duration="1200"
            />
            <h3 data-aos="fade-up" data-aos-duration="1400">
              Error 404 : Page Not Found
            </h3>
            <p data-aos="fade-up" data-aos-duration="1600">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <Link
              href="/"
              className="btn style3 icon"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <i className="bx bx-home-circle"></i> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
