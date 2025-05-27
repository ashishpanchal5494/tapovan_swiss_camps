"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import "odometer/themes/odometer-theme-default.css";

// Lazy-load Odometer only on the client
const Testimonial = dynamic(() => import("../app/testimonial/page"), {
  ssr: false,
});
const Team = dynamic(() => import("../app/team/page"), { ssr: false });

const counters = [
  { icon: "bx bx-home-circle", target: 20, label: "Exclusive Tents" },
  { icon: "bx bx-check-circle", target: 990, label: "Successful Story" },
  { icon: "bx bx-trophy", target: 3500, label: "Happy Cumstomer" },
  { icon: "bx bx-certification", target: 54, label: "Experiences" },
];

const BASE_URL = "https://www.tapovanswisscampsofficial.com";

function AboutPageClient() {
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

  // Structured Data (JSON-LD) for LocalBusiness
  // This JSON-LD should be placed within a <script type="application/ld+json"> tag in your JSX
  // For a server component, you could return this as part of the `Head` component or directly in the JSX.
  // Since this is a "use client" component, you'd typically render this using a <script> tag.
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tapovan Swiss Camps",
    image: `${BASE_URL}/assets/img/room/garden.webp`, // Replace with your logo image
    url: `${BASE_URL}/about`,
    telephone: "+91-7906924003", // **IMPORTANT: Replace with your actual phone number**
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tapovan", // Example, be more specific if possible
      addressLocality: "Rishikesh",
      addressRegion: "Uttarakhand",
      postalCode: "249192", // Example, be more specific if possible
      addressCountry: "IN",
    },
    priceRange: "₹999-₹1799", // Example: $, $$, $$$
    description:
      "Tapovan Swiss Camps offers a unique blend of comfort and nature in Rishikesh, providing exclusive tents, modern amenities, and a serene environment for travelers seeking relaxation and adventure.",
    hasMap: "https://www.google.com/maps/place/Tapovan+Swiss+Camps", // **IMPORTANT: Replace with your actual Google Maps URL**
    openingHours: "Mo-Su 00:00-23:59", // Assuming 24/7 operation
    sameAs: [
      // Add your social media links here
      "https://www.facebook.com/61574061994310",
      "https://www.instagram.com/tapovanswisscampsofficial",
      // ... other social media profiles
    ],
  };
  return (
    <>
      {" "}
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <section
        className={isMobile ? "about-area ptb-200" : "about-area ptb-60"}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-two mb-0">
                <span className="top-title">About Us</span>
                <h2>
                  Welcome to Tapovan Swiss Camps – Where Comfort Meets Nature!
                </h2>
                <p>
                  Nestled amidst serene landscapes and lush greenery, our resort
                  is a peaceful getaway designed for travelers seeking both
                  relaxation and adventure. At Tapovan Swiss Camps, we pride
                  ourselves on offering a perfect blend of modern comfort and
                  natural charm. Whether you‘re planning a family vacation, a
                  weekend escape, or a group retreat, our resort promises a
                  memorable experience like no other.
                </p>

                <h5>🌿 What We Offer</h5>
                <ul>
                  <li>
                    <i className="bx bx-check"></i> Spacious Tents with
                    Comfortable Beds
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Clean & Hygienic Washrooms
                  </li>
                  <li>
                    <i className="bx bx-check"></i> 24/7 Water Supply & Power
                    Backup
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Swimming Pool
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Greenery with Flowers
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Dining Area & Home-Style
                    Meals
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Bonfire Area
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Outdoor Seating
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Volleyball Court, Cricket,
                    Badminton
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Free Parking
                  </li>
                  <li>
                    <i className="bx bx-check"></i> WiFi
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Security (CCTV)
                  </li>
                  <li>
                    <i className="bx bx-check"></i> First Aid Kit
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Menu (Order to Have)
                  </li>
                </ul>

                <h5>👥 Our Dedicated Team</h5>
                <p>
                  Behind every smooth experience at our resort is a team of
                  passionate professionals who care:
                </p>
                <ul>
                  <li>
                    <i className="bx bx-check"></i> Owner – The visionary who
                    built this escape for nature lovers
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Manager – Ensures a flawless
                    and welcoming stay for all guests
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Property Manager – Maintains
                    cleanliness, ambiance, and operations
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Developer – Crafts our
                    seamless online experience and booking process
                  </li>
                </ul>

                <p>
                  At Tapovan Swiss Camps, we are committed to delivering
                  hospitality that‘s warm, personal, and unforgettable. We don‘t
                  just offer a stay — we offer an experience.
                </p>

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
                      ref={(el) => {
                        odometerRefs.current[index] = el;
                      }}
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
}

export default AboutPageClient;
