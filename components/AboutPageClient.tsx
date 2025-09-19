"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import Script from "next/script";
import "odometer/themes/odometer-theme-default.css";

const TestimonialPage = dynamic(
  () => import("@/app/testimonial/TestimonialPage"),
  {
    ssr: false,
    loading: () => (
      <div className="loading-placeholder">Loading testimonials...</div>
    ),
  }
);
const TeamPage = dynamic(() => import("@/app/team/TeamPage"), {
  ssr: false,
  loading: () => <div className="loading-placeholder">Loading team...</div>,
});

const counters = [
  { icon: "bx bx-home-circle", target: 25, label: "Luxury Swiss Tents" },
  { icon: "bx bx-check-circle", target: 1200, label: "Happy Guests" },
  { icon: "bx bx-trophy", target: 4500, label: "Successful Bookings" },
  { icon: "bx bx-certification", target: 65, label: "Adventure Activities" },
];

const BASE_URL = "https://www.tapovanswisscampsofficial.com";

function AboutPageClient() {
  const odometerRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const initializedRef = useRef(false);
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    let cancelled = false;

    (async () => {
      const mod: any = await import("odometer");
      const Odometer = mod.default || mod;

      counters.forEach((counter, index) => {
        const el = odometerRefs.current[index];
        if (!el) return;

        const instance = new Odometer({
          el,
          value: 0,
          format: "(,ddd)",
          duration: 2000,
        });

        const t = window.setTimeout(() => {
          if (!cancelled) instance.update(counter.target);
        }, 500);

        timeoutsRef.current.push(t);
      });
    })();

    return () => {
      cancelled = true;
      timeoutsRef.current.forEach((t) => clearTimeout(t));
      timeoutsRef.current = [];
    };
  }, []);

  const localBusinessSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": ["Campground", "LodgingBusiness", "TouristAttraction"],
      "@id": `${BASE_URL}/#business`,
      name: "Tapovan Swiss Camps",
      alternateName: "Tapovan Swiss Camp Rishikesh",
      image: [
        `${BASE_URL}/assets/img/room/gardenPhoto.webp`,
        `${BASE_URL}/assets/img/room/pool.webp`,
        `${BASE_URL}/assets/img/room/ACTent1.webp`,
      ],
      url: `${BASE_URL}/about`,
      telephone: "+91-7906924003",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Deecon Valley Road, Vill. Dholshoot Tapovan",
        addressLocality: "Rishikesh",
        addressRegion: "Uttarakhand",
        postalCode: "249201",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.1394296,
        longitude: 78.315361,
      },
      priceRange: "₹999-₹1799",
      description:
        "Tapovan Swiss Camps offers premium luxury camping experience in Rishikesh near Ganga River. Featuring Swiss tents, swimming pool, adventure sports, and 5-star hospitality in the heart of Tapovan.",
      hasMap:
        "https://www.google.com/maps/place/Tapovan+Swiss+Camp+in+Rishikesh+and+Rafting+in+Rishikesh+and+Bike+rent+in+Rishikesh/@30.1394342,78.3127861,17z/data=!3m1!4b1!4m9!3m8!1s0x390917d95828f9b7:0x5628ba3506250e88!5m2!4m1!1i2!8m2!3d30.1394296!4d78.315361!16s%2Fg%2F11sxvndwwz?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
      openingHoursSpecification: [
        {
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
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        ratingCount: 250,
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Swimming Pool" },
        { "@type": "LocationFeatureSpecification", name: "Adventure Sports" },
        { "@type": "LocationFeatureSpecification", name: "Bonfire Area" },
        { "@type": "LocationFeatureSpecification", name: "WiFi" },
      ],
      sameAs: [
        "https://www.facebook.com/61574061994310",
        "https://www.instagram.com/tapovanswisscampsofficial",
        "https://www.youtube.com/@tapovanswisscamps",
      ],
    }),
    []
  );

  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What makes Tapovan Swiss Camps the best camping in Rishikesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Tapovan Swiss Camps offers premium luxury camping near Ganga River with Swiss tents, swimming pool, adventure sports, and 5-star hospitality. Our location in Tapovan provides stunning river views and easy access to rafting and other Himalayan adventures.",
          },
        },
        {
          "@type": "Question",
          name: "What amenities are available at Tapovan Swiss Camps?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "We provide luxury Swiss tents, swimming pool, bonfire area, adventure sports, WiFi, 24/7 power backup, clean washrooms, dining area with home-style meals, volleyball court, free parking, and CCTV security.",
          },
        },
        {
          "@type": "Question",
          name: "How much does camping cost at Tapovan Swiss Camps?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Our camping packages start from ₹999 per person and range up to ₹1799 for premium luxury tents. We offer the best value for money camping experience in Rishikesh with all modern amenities.",
          },
        },
      ],
    }),
    []
  );

  return (
    <>
      <Script type="application/ld+json" id="local-business-schema" strategy="afterInteractive">
        {JSON.stringify(localBusinessSchema)}
      </Script>

      <Script type="application/ld+json" id="faq-schema" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>

      {/* Hero Section */}
      <section className="about-hero-section ptb-100 bg-gradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <h1 className="hero-title">
                About Tapovan Swiss Camps - Rishikesh's Premier Luxury Camping
                Destination
              </h1>
              <p className="hero-subtitle">
                Experience the perfect blend of adventure and comfort in the
                heart of Tapovan, just minutes from the sacred Ganga River.
                Discover why we're Rishikesh's #1 choice for luxury camping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className={isMobile ? "about-area ptb-100" : "about-area ptb-80"}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-two mb-0">
                <span className="top-title">About Tapovan Swiss Camps</span>
                <h2>
                  Welcome to Rishikesh's Most Luxurious Camping Experience Near
                  Ganga River
                </h2>
                <p>
                  Nestled in the serene landscapes of Tapovan, just 2km from the
                  sacred Ganga River, Tapovan Swiss Camps offers an unparalleled
                  luxury camping experience in Rishikesh. Our premium Swiss
                  tents combine modern comfort with nature's tranquility, making
                  us the top choice for families, couples, and adventure seekers
                  visiting the Yoga Capital of the World.
                </p>

                <h3>🏕️ Why Choose Tapovan Swiss Camps for Your Rishikesh
                  Adventure?</h3>
                <p>
                  As Rishikesh's premier luxury camping destination, we provide
                  the perfect base for exploring the Himalayas while enjoying
                  world-class amenities. Our strategic location in Tapovan
                  offers easy access to white-water rafting, yoga retreats, and
                  spiritual experiences, all while maintaining the peace and
                  serenity of nature.
                </p>

                <h3>🌟 Premium Amenities & Facilities</h3>
                <div className="amenities-grid">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="amenities-list">
                        <li>
                          <i className="bx bx-check"></i> Luxury Swiss Tents
                          with AC & Cooler Options
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Swimming Pool with
                          Mountain Views
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Bonfire Area for
                          Evening Gatherings
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Adventure Sports
                          (Rafting, Trekking)
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Volleyball Court &
                          Sports Activities
                        </li>
                        <li>
                          <i className="bx bx-check"></i> 24/7 Power Backup &
                          Water Supply
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Free High-Speed WiFi
                        </li>
                        <li>
                          <i className="bx bx-check"></i> CCTV Security & First
                          Aid
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="amenities-list">
                        <li>
                          <i className="bx bx-check"></i> Clean & Hygienic
                          Washrooms
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Dining Area with
                          Home-Style Meals
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Outdoor Seating with
                          River Views
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Free Parking for All
                          Vehicles
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Yoga & Meditation
                          Sessions
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Group Activities &
                          Team Building
                        </li>
                        <li>
                          <i className="bx bx-check"></i> Local Sightseeing
                          Assistance
                        </li>
                        <li>
                          <i className="bx bx-check"></i> 24/7 Customer Support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3>👥 Our Expert Team</h3>
                <p>
                  Our dedicated team of hospitality professionals ensures every
                  guest enjoys a memorable stay at Tapovan Swiss Camps:
                </p>
                <ul>
                  <li>
                    <i className="bx bx-check"></i> <strong>Founder & Owner</strong> - Visionary leader with 10+
                    years in hospitality
                  </li>
                  <li>
                    <i className="bx bx-check"></i> <strong>Camp Manager</strong> - Ensures flawless guest
                    experience and operations
                  </li>
                  <li>
                    <i className="bx bx-check"></i> <strong>Adventure Coordinator</strong> - Expert guide for
                    rafting and outdoor activities
                  </li>
                  <li>
                    <i className="bx bx-check"></i> <strong>Chef & Kitchen Team</strong> - Prepare delicious
                    local and international cuisine
                  </li>
                  <li>
                    <i className="bx bx-check"></i> <strong>Maintenance Staff</strong> - Keep all facilities in
                    pristine condition
                  </li>
                </ul>

                <h3>🎯 Our Commitment to Excellence</h3>
                <p>
                  At Tapovan Swiss Camps, we don't just provide accommodation -
                  we create unforgettable experiences. Our commitment to
                  sustainable tourism, local community support, and
                  environmental conservation makes us the responsible choice for
                  conscious travelers seeking authentic Himalayan adventures.
                </p>

                <div className="cta-buttons">
                  <Link href="/booking-form" className="btn style1 me-3">
                    Book Your Stay Now
                  </Link>
                  <Link href="/contact" className="btn style5">
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-img-two">
                <div className="video-wrap">
                  <Image
                    src="/assets/img/room/gardenPhoto.webp"
                    alt="Tapovan Swiss Camps - Luxury Camping in Rishikesh with Ganga River View"
                    width={600}
                    height={400}
                    className="img-fluid rounded"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=UJEUwEJ6gH4"
                    className="popup-youtube video-btn"
                    aria-label="Watch Tapovan Swiss Camps video tour"
                    target="_blank"
                    rel="noopener noreferrer"
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
              <div key={counter.label} className="counter-col col-lg-3 col-sm-6">
                <div className="single-counter">
                  <i className={counter.icon}></i>
                  <h2>
                    <span
                      ref={(el) => {
                        odometerRefs.current[index] = el;
                      }}
                      className="odometer"
                      aria-live="polite"
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

      {/* FAQ Section */}
      <section className="faq-section ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-50">
                <h2>Frequently Asked Questions About Tapovan Swiss Camps</h2>
                <p>Everything you need to know about camping in Rishikesh</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="faq-content">
                <div className="faq-item">
                  <h4>
                    What makes Tapovan Swiss Camps the best camping in
                    Rishikesh?
                  </h4>
                  <p>
                    Tapovan Swiss Camps offers premium luxury camping near Ganga
                    River with Swiss tents, swimming pool, adventure sports, and
                    5-star hospitality. Our location in Tapovan provides
                    stunning river views and easy access to rafting and other
                    Himalayan adventures.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>What amenities are available at Tapovan Swiss Camps?</h4>
                  <p>
                    We provide luxury Swiss tents, swimming pool, bonfire area,
                    adventure sports, WiFi, 24/7 power backup, clean washrooms,
                    dining area with home-style meals, volleyball court, free
                    parking, and CCTV security.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>How much does camping cost at Tapovan Swiss Camps?</h4>
                  <p>
                    Our camping packages start from ₹999 per person and range up
                    to ₹1799 for premium luxury tents. We offer the best value
                    for money camping experience in Rishikesh with all modern
                    amenities.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>
                    Is Tapovan Swiss Camps suitable for families with children?
                  </h4>
                  <p>
                    Absolutely! We are family-friendly with safe swimming pool,
                    playground activities, and secure camping environment. Our
                    staff ensures children's safety while parents enjoy the
                    natural beauty of Rishikesh.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>
                    What adventure activities are available near the camp?
                  </h4>
                  <p>
                    We offer white-water rafting, trekking, yoga sessions,
                    volleyball, cricket, and bonfire nights. Our location
                    provides easy access to popular Rishikesh attractions and
                    adventure sports.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>
                    How far is Tapovan Swiss Camps from Rishikesh city center?
                  </h4>
                  <p>
                    We are located just 2km from the sacred Ganga River and 8km
                    from Rishikesh city center, providing the perfect balance of
                    accessibility and natural serenity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section ptb-80 bg-primary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>Ready for Your Perfect Rishikesh Camping Adventure?</h3>
              <p>
                Book your stay at Tapovan Swiss Camps today and experience the
                best luxury camping in Rishikesh near Ganga River.
              </p>
            </div>
            <div className="col-lg-4 text-end">
              <Link href="/booking-form" className="btn style1 btn-white">
                Book Now - Starting ₹999
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialPage />
      <TeamPage />
    </>
  );
}

export default AboutPageClient;
