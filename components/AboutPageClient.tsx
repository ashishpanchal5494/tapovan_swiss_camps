"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import "odometer/themes/odometer-theme-default.css";

// Lazy-load components for better performance
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${BASE_URL}/about`,
    name: "Tapovan Swiss Camps",
    alternateName: [
      "Tapovan Swiss Camp",
      "Swiss Camps Rishikesh",
      "Rishikesh Swiss Tents",
    ],
    image: [
      `${BASE_URL}/assets/img/room/gardenPhoto.webp`,
      `${BASE_URL}/assets/img/room/ACTent1.webp`,
      `${BASE_URL}/assets/img/room/pool.webp`,
    ],
    logo: `${BASE_URL}/assets/img/logo.png`,
    url: `${BASE_URL}/about`,
    telephone: "+91-7906924003",
    email: "info@tapovanswisscampsofficial.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tapovan, Near Ganga River",
      addressLocality: "Rishikesh",
      addressRegion: "Uttarakhand",
      postalCode: "249201",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "30.1394296",
      longitude: "78.315361",
    },
    priceRange: "₹999-₹1799",
    description:
      "Tapovan Swiss Camps offers a unique blend of comfort and nature in Rishikesh, providing exclusive Swiss tents, modern amenities, swimming pool, adventure sports, and a serene environment for travelers seeking relaxation and adventure near the Ganga River.",
    hasMap:
      "https://www.google.com/maps/place/Tapovan+Swiss+Camp+in+Rishikesh+and+Rafting+in+Rishikesh+and+Bike+rent+in+Rishikesh/@30.1394342,78.3127861,17z/data=!3m1!4b1!4m9!3m8!1s0x390917d95828f9b7:0x5628ba3506250e88!5m2!4m1!1i2!8m2!3d30.1394296!4d78.315361!16s%2Fg%2F11sxvndwwz?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
    openingHours: "Mo-Su 00:00-23:59",
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Swimming Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "WiFi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Restaurant",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Adventure Sports",
        value: true,
      },
    ],
    starRating: {
      "@type": "Rating",
      ratingValue: "4.8",
      bestRating: "5",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "3500",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.facebook.com/61574061994310",
      "https://www.instagram.com/tapovanswisscampsofficial",
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/booking-form`,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Camp Booking",
      },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What amenities does Tapovan Swiss Camps offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tapovan Swiss Camps offers spacious tents with comfortable beds, clean washrooms, 24/7 water supply & power backup, swimming pool, greenery with flowers, dining area with home-style meals, bonfire area, outdoor seating, volleyball court, cricket, badminton, free parking, WiFi, security (CCTV), first aid kit, and menu ordering service.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Tapovan Swiss Camps located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tapovan Swiss Camps is located in Tapovan, Rishikesh, Uttarakhand, near the Ganga River. The exact address is Tapovan, Near Ganga River, Rishikesh, Uttarakhand 249201, India.",
        },
      },
      {
        "@type": "Question",
        name: "What is the price range for camping at Tapovan Swiss Camps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The price range for camping at Tapovan Swiss Camps starts from ₹999 per person and goes up to ₹1799, depending on the tent type and amenities selected.",
        },
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tapovan Swiss Camps",
    url: `${BASE_URL}`,
    logo: `${BASE_URL}/assets/img/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7906924003",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tapovan, Near Ganga River",
      addressLocality: "Rishikesh",
      addressRegion: "Uttarakhand",
      postalCode: "249201",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/61574061994310",
      "https://www.instagram.com/tapovanswisscampsofficial",
    ],
  };

  return (
    <>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <section
        className={isMobile ? "about-area ptb-200" : "about-area ptb-60"}
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-two mb-0">
                <span className="top-title">About Tapovan Swiss Camps</span>
                <h1>
                  Welcome to Tapovan Swiss Camps – Best Luxury Camping in
                  Rishikesh Near Ganga River
                </h1>
                <p>
                  <strong>
                    Discover Rishikesh&apos;s #1 Rated Luxury Camping Experience
                  </strong>{" "}
                  - Nestled amidst the pristine foothills of the Himalayas and
                  the sacred Ganga River, Tapovan Swiss Camps has been
                  Rishikesh&apos;s most trusted luxury camping destination since
                  2018. With over 3,500+ happy customers and 4.8/5 star ratings,
                  we&apos;ve perfected the art of combining adventure with
                  comfort in India&apos;s spiritual capital.
                </p>

                <p>
                  <strong>
                    Why 99% of our guests rate us as the &quot;Best Camping in
                    Rishikesh&quot;?
                  </strong>{" "}
                  Our award-winning resort offers the perfect blend of
                  Swiss-style luxury tents, world-class amenities, and authentic
                  Uttarakhand hospitality. From families with children to
                  adventure-seeking couples, we&apos;ve hosted over 990
                  successful camping experiences, each one creating memories
                  that last a lifetime.
                </p>

                <p>
                  <strong>Strategic Location Advantage:</strong> Located just
                  1km from Tapovan market and 1.5km from the famous Ganga Aarti,
                  our camp provides easy access to all major Rishikesh
                  attractions while maintaining the peaceful ambiance of
                  riverside camping. Whether you&apos;re planning a family
                  vacation, romantic getaway, or group adventure, our luxury
                  camping resort delivers an experience that&apos;s simply
                  unmatched in Rishikesh.
                </p>

                <h2>
                  🌿 Premium Amenities & Facilities at Tapovan Swiss Camps
                </h2>
                <p>
                  Experience luxury camping in Rishikesh with our world-class
                  amenities designed for your comfort and adventure:
                </p>
                <ul>
                  <li>
                    <i className="bx bx-check"></i>{" "}
                    <strong>Luxury Swiss Tents</strong> with Comfortable Beds &
                    AC/Cooler Options
                  </li>
                  <li>
                    <i className="bx bx-check"></i>{" "}
                    <strong>Clean & Hygienic Washrooms</strong> with 24/7 Hot
                    Water
                  </li>
                  <li>
                    <i className="bx bx-check"></i>{" "}
                    <strong>24/7 Water Supply & Power Backup</strong> for
                    Uninterrupted Stay
                  </li>
                  <li>
                    <i className="bx bx-check"></i>{" "}
                    <strong>Swimming Pool</strong> with Ganga River Views
                  </li>
                  <li>
                    <i className="bx bx-check"></i>{" "}
                    <strong>Lush Greenery & Flower Gardens</strong> for Nature
                    Lovers
                  </li>
                  <li>
                    <i className="bx bx-check"></i>{" "}
                    <strong>Dining Area & Home-Style Meals</strong> with Local
                    Cuisine
                  </li>
                  <li>
                    <i className="bx bx-check"></i>{" "}
                    <strong>Bonfire Area</strong> for Evening Gatherings
                  </li>
                  <li>
                    <i className="bx bx-check"></i>{" "}
                    <strong>Outdoor Seating</strong> with River Views
                  </li>
                  <li>
                    <i className="bx bx-check"></i>{" "}
                    <strong>Adventure Sports</strong> - Volleyball Court,
                    Cricket, Badminton
                  </li>
                  <li>
                    <i className="bx bx-check"></i>{" "}
                    <strong>Free Parking</strong> for All Guests
                  </li>
                  <li>
                    <i className="bx bx-check"></i>{" "}
                    <strong>High-Speed WiFi</strong> Throughout the Property
                  </li>
                  <li>
                    <i className="bx bx-check"></i>{" "}
                    <strong>24/7 Security (CCTV)</strong> for Your Safety
                  </li>
                  <li>
                    <i className="bx bx-check"></i>{" "}
                    <strong>First Aid Kit</strong> & Emergency Services
                  </li>
                  <li>
                    <i className="bx bx-check"></i> <strong>Custom Menu</strong>{" "}
                    (Order to Have) with Local & Continental Options
                  </li>
                </ul>

                <h2>👥 Our Dedicated Team at Tapovan Swiss Camps</h2>
                <p>
                  Behind every smooth experience at our luxury camping resort in
                  Rishikesh is a team of passionate professionals who care about
                  your comfort and satisfaction:
                </p>
                <ul>
                  <li>
                    <i className="bx bx-check"></i> <strong>Owner</strong> – The
                    visionary who built this escape for nature lovers and
                    adventure seekers in Rishikesh
                  </li>
                  <li>
                    <i className="bx bx-check"></i> <strong>Manager</strong> –
                    Ensures a flawless and welcoming stay for all guests with
                    personalized service
                  </li>
                  <li>
                    <i className="bx bx-check"></i>{" "}
                    <strong>Property Manager</strong> – Maintains cleanliness,
                    ambiance, and smooth operations of our Swiss tents and
                    facilities
                  </li>
                  <li>
                    <i className="bx bx-check"></i> <strong>Developer</strong> –
                    Crafts our seamless online experience and booking process
                    for easy reservations
                  </li>
                </ul>

                <h2>
                  🏆 Why Tapovan Swiss Camps is Rishikesh&apos;s #1 Choice for
                  Luxury Camping
                </h2>

                <h3>📊 Proven Track Record & Customer Satisfaction</h3>
                <ul>
                  <li>
                    <strong>3,500+ Happy Customers</strong> - Highest customer
                    satisfaction in Rishikesh camping
                  </li>
                  <li>
                    <strong>4.8/5 Star Rating</strong> - Consistently rated as
                    best camping in Rishikesh
                  </li>
                  <li>
                    <strong>990+ Successful Bookings</strong> - Trusted by
                    families, couples, and groups
                  </li>
                  <li>
                    <strong>5+ Years Experience</strong> - Established since
                    2018 with proven expertise
                  </li>
                  <li>
                    <strong>99% Repeat Booking Rate</strong> - Guests love us so
                    much they keep coming back
                  </li>
                </ul>

                <h3>🎯 Perfect for Every Type of Traveler</h3>
                <ul>
                  <li>
                    <strong>Family Camping in Rishikesh:</strong> Safe,
                    child-friendly environment with dedicated play areas, CCTV
                    security, and family-sized tents perfect for parents with
                    kids
                  </li>
                  <li>
                    <strong>Couple Camping in Rishikesh:</strong> Romantic
                    riverside setting with private dining, bonfire arrangements,
                    and intimate tent options for honeymooners and couples
                  </li>
                  <li>
                    <strong>Group Camping in Rishikesh:</strong> Large group
                    tents, team building activities, volleyball courts, and
                    group dining arrangements for corporate retreats and friend
                    groups
                  </li>
                  <li>
                    <strong>Adventure Seekers:</strong> River rafting, yoga
                    sessions, trekking arrangements, and adventure sports
                    packages for thrill-seekers
                  </li>
                  <li>
                    <strong>Nature Lovers:</strong> Ganga River views, Himalayan
                    mountain backdrop, lush gardens, and bird watching
                    opportunities
                  </li>
                  <li>
                    <strong>Spiritual Seekers:</strong> Proximity to Ganga
                    Aarti, yoga sessions, meditation areas, and peaceful
                    environment for spiritual rejuvenation
                  </li>
                </ul>

                <h3>🌟 Unique Features That Set Us Apart</h3>
                <ul>
                  <li>
                    <strong>Swiss-Style Luxury Tents:</strong> Imported Swiss
                    tent technology with AC/Cooler options
                  </li>
                  <li>
                    <strong>Riverside Location:</strong> Only 1km from Ganga
                    River with direct river views
                  </li>
                  <li>
                    <strong>All-Inclusive Packages:</strong> Meals, activities,
                    and amenities included in transparent pricing
                  </li>
                  <li>
                    <strong>24/7 Customer Support:</strong> Round-the-clock
                    assistance for all guest needs
                  </li>
                  <li>
                    <strong>Adventure Sports Integration:</strong> Direct
                    booking for rafting, trekking, and other activities
                  </li>
                  <li>
                    <strong>Cultural Experiences:</strong> Ganga Aarti visits,
                    local market tours, and authentic Uttarakhand cuisine
                  </li>
                </ul>

                <h2>
                  📍 Location & Accessibility - Your Gateway to Rishikesh
                  Adventures
                </h2>
                <p>
                  <strong>Prime Location Benefits:</strong> Our strategic
                  location in Tapovan puts you at the heart of Rishikesh&apos;s
                  most popular attractions:
                </p>
                <ul>
                  <li>
                    <strong>Ganga Aarti Point:</strong> 1.5km - Experience the
                    magical evening Ganga Aarti ceremony
                  </li>
                  <li>
                    <strong>Tapovan Market:</strong> 1km - Shopping for
                    souvenirs, local handicrafts, and essentials
                  </li>
                  <li>
                    <strong>River Rafting Point:</strong> 1km - Direct access to
                    white water rafting adventures
                  </li>
                  <li>
                    <strong>Triveni Ghat:</strong> 4.5km - Sacred bathing ghat
                    and spiritual center
                  </li>
                  <li>
                    <strong>Neelkanth Mahadev Temple:</strong> 22km - Famous
                    temple dedicated to Lord Shiva
                  </li>
                  <li>
                    <strong>Secret Waterfall:</strong> 0.5km - Hidden gem for
                    nature lovers and photographers
                  </li>
                  <li>
                    <strong>Street Food Lane:</strong> 1.2km - Authentic local
                    cuisine and street food
                  </li>
                </ul>

                <h2>
                  ❓ Frequently Asked Questions - Everything You Need to Know
                </h2>

                <h3>🏕️ About Our Camping Experience</h3>
                <p>
                  <strong>
                    Q: What makes Tapovan Swiss Camps the best camping in
                    Rishikesh?
                  </strong>
                </p>
                <p>
                  <strong>A:</strong> We combine Swiss-style luxury tents with
                  authentic Uttarakhand hospitality, offering AC/Cooler options,
                  riverside location, swimming pool, adventure activities, and
                  24/7 services. Our 4.8/5 rating and 3,500+ happy customers
                  speak for our quality.
                </p>

                <p>
                  <strong>Q: What types of tents do you offer?</strong>
                </p>
                <p>
                  <strong>A:</strong> We offer three types of luxury tents:
                  Luxury AC Tents (₹1,599/person), Luxury Cooler Tents
                  (₹1,299/person), and Ordinary Tents (₹999/person). All tents
                  include comfortable beds, clean washrooms, and modern
                  amenities.
                </p>

                <p>
                  <strong>
                    Q: Is camping in Rishikesh safe for families with children?
                  </strong>
                </p>
                <p>
                  <strong>A:</strong> Absolutely! We provide 24/7 CCTV security,
                  first aid facilities, child-friendly play areas, and our staff
                  is trained to ensure family safety. Many families with
                  children under 10 years have enjoyed safe stays with us.
                </p>

                <h3>💰 Pricing & Booking</h3>
                <p>
                  <strong>
                    Q: What is included in the camping package price?
                  </strong>
                </p>
                <p>
                  <strong>A:</strong> Our packages include tent accommodation,
                  all meals (breakfast, lunch, dinner, snacks), adventure
                  activities, bonfire, swimming pool access, WiFi, parking, and
                  basic amenities. No hidden charges!
                </p>

                <p>
                  <strong>
                    Q: What is the best time to visit for camping in Rishikesh?
                  </strong>
                </p>
                <p>
                  <strong>A:</strong> Rishikesh camping is best from October to
                  March (winter season) and September to November
                  (post-monsoon). Summer months (April-June) are also good with
                  our AC tents and swimming pool.
                </p>

                <h3>🎯 Activities & Experiences</h3>
                <p>
                  <strong>
                    Q: What adventure activities can we do during our stay?
                  </strong>
                </p>
                <p>
                  <strong>A:</strong> We arrange river rafting, yoga sessions,
                  trekking, volleyball, cricket, badminton, bonfire nights, DJ
                  parties, and visits to Ganga Aarti. All activities are
                  included in your package.
                </p>

                <p>
                  <strong>
                    Q: Can you arrange transportation from Delhi/Dehradun?
                  </strong>
                </p>
                <p>
                  <strong>A:</strong> Yes! We can arrange pickup from Dehradun
                  Airport (45km), Haridwar Railway Station (25km), or Delhi.
                  Contact us for transportation arrangements and pricing.
                </p>

                <div
                  style={{
                    marginTop: "30px",
                    padding: "20px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "10px",
                    border: "2px solid #507650",
                  }}
                >
                  <h3 style={{ color: "#507650", marginBottom: "15px" }}>
                    🎯 Ready to Experience the Best Camping in Rishikesh?
                  </h3>
                  <p style={{ marginBottom: "15px" }}>
                    <strong>
                      Join 3,500+ satisfied customers who chose Tapovan Swiss
                      Camps for their Rishikesh adventure!
                    </strong>
                  </p>
                  <p style={{ marginBottom: "20px" }}>Book now and get:</p>
                  <ul style={{ marginBottom: "20px" }}>
                    <li>✅ Best price guarantee - Starting ₹999 per person</li>
                    <li>✅ Free cancellation up to 24 hours before check-in</li>
                    <li>✅ Instant confirmation and booking details</li>
                    <li>✅ 24/7 customer support during your stay</li>
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="btn style5"
                  style={{ marginTop: "20px" }}
                >
                  Book Your Rishikesh Camping Experience Now
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img-two text-center">
                <div className="video-wrap">
                  <a
                    href="https://www.youtube.com/watch?v=UJEUwEJ6gH4"
                    className="popup-youtube video-btn"
                    aria-label="Watch Tapovan Swiss Camps Video - Luxury Camping in Rishikesh"
                    title="Watch our luxury camping experience in Rishikesh"
                  >
                    <i className="bx bx-play" aria-hidden="true"></i>
                  </a>
                </div>
                <Image
                  src="/assets/img/about.webp"
                  alt="Tapovan Swiss Camps - Luxury Camping in Rishikesh with Ganga River View"
                  loading="lazy"
                  width={600}
                  height={400}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter Section */}
      <section
        className="counter-area bg-color ptb-70"
        aria-label="Tapovan Swiss Camps Statistics"
      >
        <div className="container">
          <div className="row">
            {counters.map((counter, index) => (
              <div key={index} className="counter-col col-lg-3 col-sm-6">
                <div className="single-counter">
                  <i className={counter.icon} aria-hidden="true"></i>
                  <h2>
                    <span
                      ref={(el) => {
                        odometerRefs.current[index] = el;
                      }}
                      className="odometer"
                      aria-label={`${counter.target} ${counter.label}`}
                    >
                      0
                    </span>
                    <span className="target" aria-hidden="true">
                      +
                    </span>
                  </h2>
                  <p>{counter.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialPage />
      <TeamPage />
    </>
  );
}

export default AboutPageClient;
