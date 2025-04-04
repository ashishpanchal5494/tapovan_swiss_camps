"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "odometer/themes/odometer-theme-default.css";

// Lazy-load Odometer only on the client

const Testimonial = dynamic(() => import("../testimonial/page"), {
  ssr: false,
});
const Team = dynamic(() => import("../team/page"), { ssr: false });

const counters = [
  { icon: "bx bx-home-circle", target: 540, label: "Exclusive Rooms" },
  { icon: "bx bx-check-circle", target: 990, label: "Successful Story" },
  { icon: "bx bx-trophy", target: 3500, label: "Global Presence" },
  { icon: "bx bx-certification", target: 54, label: "Experiences" },
];

const About = () => {
  const odometerRefs = useRef<(HTMLSpanElement | null)[]>([]);

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
    // Initialize AOS for animations
    AOS.init({ duration: 1200 });

    // Ensure Odometer is initialized only on the client
    if (typeof window !== "undefined") {
      import("odometer").then((module) => {
        counters.forEach((counter, index) => {
          if (odometerRefs.current[index]) {
            const odometerInstance = new module.default({
              el: odometerRefs.current[index]!,
              value: 0,
              format: "(,ddd)",
              duration: 2000,
            });

            setTimeout(() => {
              odometerInstance.update(counter.target);
            }, 500);
          }
        });
      });
    }
  }, []);

  return (
    <>
      <section
        className={isMobile ? "about-area ptb-200" : "about-area ptb-60"}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-two mb-0">
                <span className="top-title">About Us</span>
                <h2>Explore the Peaks, Find Your Adventure.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <ul>
                  <li>
                    <i className="bx bx-check"></i> Mobile Check-In
                  </li>
                  <li>
                    <i className="bx bx-check"></i> VIP Shopping at Local
                    Merchants
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Room Amenities: In-Room
                    Tablets
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Enthusiast & Hobbyist Tech
                  </li>
                </ul>

                <Link href="/contact" className="btn style5">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-img-two">
                <div className="video-wrap">
                  <a
                    href="https://www.youtube.com/watch?v=UJEUwEJ6gH4"
                    className="popup-youtube video-btn"
                  >
                    <i className="bx bx-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="counter-area bg-color ptb-70">
        <div className="container">
          <div className="row">
            {counters.map((counter, index) => (
              <div key={index} className="counter-col col-lg-3 col-sm-6">
                <div className="single-counter">
                  <i className={counter.icon}></i>
                  <h2>
                    <span
                      ref={(el) => (odometerRefs.current[index] = el)}
                      className="odometer"
                    >
                      0
                    </span>
                    <span className="target">+</span>
                  </h2>
                  <p>{counter.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonial />
      <Team />
    </>
  );
};

export default About;
