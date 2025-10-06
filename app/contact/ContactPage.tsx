"use client";

import Loading from "@/components/Loading";
import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    msg_subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Efficient Mobile Resize Listener with debounce
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    let resizeTimer: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        checkMobile();
      }, 150);
    };

    checkMobile();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // AOS Init & Client Check
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with actual API call
    setSuccessMessage("Thanks for reaching out! We'll be in touch very soon.");
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  if (!isClient) return <Loading />;

  return (
    <>
      {/* Enhanced ContactPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": "https://www.tapovanswisscampsofficial.com/contact",
          name: "Contact Tapovan Swiss Camps - Luxury Camping & Rafting in Rishikesh",
          description:
            "Contact Tapovan Swiss Camps for luxury camping and Ganga river rafting in Rishikesh. Book Swiss tents, AC & cooler tents, adventure activities starting ₹999.",
          url: "https://www.tapovanswisscampsofficial.com/contact",
          inLanguage: "en-IN",
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://www.tapovanswisscampsofficial.com",
            name: "Tapovan Swiss Camps",
            url: "https://www.tapovanswisscampsofficial.com",
          },
          mainEntity: {
            "@type": "Organization",
            name: "Tapovan Swiss Camps",
            url: "https://www.tapovanswisscampsofficial.com",
            telephone: "+917906924003",
            email: "info@tapovanswisscampsofficial.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Tapovan",
              addressLocality: "Rishikesh",
              addressRegion: "Uttarakhand",
              postalCode: "249201",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 30.129,
              longitude: 78.3153,
            },
            openingHoursSpecification: {
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
            priceRange: "₹999-₹1799",
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 30.129,
                longitude: 78.3153,
              },
              geoRadius: "50000",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Adventure Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Luxury Camping in Rishikesh",
                    description: "Swiss tents with AC and cooler options",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "River Rafting in Rishikesh",
                    description: "White water rafting on Ganga River",
                  },
                },
              ],
            },
          },
          potentialAction: {
            "@type": "ContactAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://www.tapovanswisscampsofficial.com/contact",
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform",
              ],
            },
            "query-input":
              "required name=name email=email phone=phone_number subject=msg_subject message=message",
          },
        })}
      </script>

      {/* Enhanced Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "@id": "https://www.tapovanswisscampsofficial.com",
          name: "Tapovan Swiss Camps",
          alternateName: "Tapovan Swiss Camps Rishikesh",
          description:
            "Luxury camping and adventure sports resort in Rishikesh offering Swiss tents, river rafting, and adventure activities near Ganga River.",
          image: [
            "https://www.tapovanswisscampsofficial.com/assets/img/logo.png",
            "https://www.tapovanswisscampsofficial.com/assets/img/room/ACTent1.webp",
            "https://www.tapovanswisscampsofficial.com/assets/img/gallery/pool.webp",
          ],
          url: "https://www.tapovanswisscampsofficial.com",
          telephone: "+917906924003",
          email: "info@tapovanswisscampsofficial.com",
          priceRange: "₹999-₹1799",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Tapovan",
            addressLocality: "Rishikesh",
            addressRegion: "Uttarakhand",
            postalCode: "249201",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 30.129,
            longitude: 78.3153,
          },
          openingHoursSpecification: {
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
          hasMap: "https://maps.google.com/?q=30.129,78.3153",
          isAccessibleForFree: false,
          paymentAccepted: ["Cash", "UPI", "Credit Card", "Debit Card"],
          currenciesAccepted: "INR",
        })}
      </script>

      {/* FAQ Schema for Featured Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What types of tents are available for camping in Rishikesh?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer three types of luxury tents: Luxury AC Tents (₹1,599/person), Luxury Cooler Tents (₹1,299/person), and Ordinary Tents (₹999/person). All include comfortable beds and modern amenities.",
              },
            },
            {
              "@type": "Question",
              name: "What is included in the camping package price?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our packages include tent accommodation, all meals (breakfast, lunch, dinner, snacks), adventure activities, bonfire, swimming pool access, WiFi, parking, and basic amenities. No hidden charges!",
              },
            },
            {
              "@type": "Question",
              name: "What are the different rafting routes available in Rishikesh?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer Brahmapuri (9km, Grade I-II), Shivpuri (16km, Grade II-III), Marine Drive (24km, Grade III), and Kaudiyala (36km, Grade III-IV) routes with prices starting from ₹499.",
              },
            },
            {
              "@type": "Question",
              name: "What is the best time for rafting in Rishikesh?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The best time for rafting in Rishikesh is from October to June, with optimal conditions from November to April. Monsoon season (July-September) is closed for safety.",
              },
            },
            {
              "@type": "Question",
              name: "How can I book camping and rafting in Rishikesh?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can book by calling +91 7906924003, WhatsApp, filling our contact form, or visiting our website. We offer instant confirmation and 24/7 customer support.",
              },
            },
            {
              "@type": "Question",
              name: "Where is Tapovan Swiss Camps located in Rishikesh?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We are located in Tapovan, Rishikesh, just 1km from Ganga River, 1.5km from Ganga Aarti Point, and 1km from Tapovan Market - perfect for exploring all major attractions.",
              },
            },
          ],
        })}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
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
              name: "Contact",
              item: "https://www.tapovanswisscampsofficial.com/contact",
            },
          ],
        })}
      </script>
      <section
        className={`contact-form-area ${isMobile ? "ptb-200" : "ptb-60"}`}
        itemScope
        itemType="https://schema.org/ContactPage"
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
              <li style={{ color: "#333", fontWeight: "500" }}>Contact Us</li>
            </ol>
          </nav>

          <div className="section-title text-center">
            <h1 itemProp="name">
              Contact Tapovan Swiss Camps - Book Your Rishikesh Adventure Today
            </h1>
            <p className="lead" itemProp="description">
              Have questions about our{" "}
              <strong>luxury camping packages in Rishikesh</strong> or{" "}
              <strong>Ganga river rafting</strong> adventures? Our
              Rishikesh-based experts are ready to help you plan your perfect
              <strong> camping and rafting experience</strong>. Get instant
              booking support and group discounts!
            </p>

            {/* Quick Contact Info */}
            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                backgroundColor: "#f8f9fa",
                borderRadius: "10px",
                border: "2px solid #507650",
              }}
            >
              <h3 style={{ color: "#507650", marginBottom: "15px" }}>
                📞 Quick Contact Information
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <strong>📱 Call Now:</strong>
                  <br />
                  <a
                    href="tel:7906924003"
                    style={{
                      color: "#507650",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    +91 7906924003
                  </a>
                </div>
                <div style={{ textAlign: "center" }}>
                  <strong>💬 WhatsApp:</strong>
                  <br />
                  <a
                    href="https://wa.me/7906924003?text=Hello, I'm interested in your Camping and Rafting packages!"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#507650",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Chat Now
                  </a>
                </div>
                <div style={{ textAlign: "center" }}>
                  <strong>📍 Location:</strong>
                  <br />
                  <span style={{ color: "#333", fontWeight: "500" }}>
                    Tapovan, Rishikesh
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-end">
            {/* Form */}
            <div className="col-lg-6">
              <form
                className="contact__form contact-form"
                onSubmit={handleSubmit}
                itemScope
                itemType="https://schema.org/ContactAction"
              >
                <h3>
                  We&lsquo;re Just One Message Away - Book Your Rishikesh
                  Adventure
                </h3>
                <p className="form-intro">
                  Fill this form for fastest response regarding your{" "}
                  <strong>camping and rafting in Rishikesh</strong>:
                </p>
                <ul className="benefit-list">
                  <li>
                    ✓ <strong>Luxury camping bookings</strong> - Swiss tents, AC
                    & cooler options
                  </li>
                  <li>
                    ✓ <strong>River rafting packages</strong> - All grade levels
                    available
                  </li>
                  <li>
                    ✓ <strong>Group discount inquiries</strong> - Special rates
                    for large groups
                  </li>
                  <li>
                    ✓ <strong>Custom adventure packages</strong> - Tailored
                    experiences
                  </li>
                  <li>
                    ✓ <strong>Bike rental services</strong> - Explore Rishikesh
                    on wheels
                  </li>
                  <li>
                    ✓ <strong>Partnership opportunities</strong> - Travel agents
                    & tour operators
                  </li>
                </ul>
                <div className="row">
                  {[
                    {
                      label: "Name",
                      name: "name",
                      type: "text",
                      placeholder: "Name",
                    },
                    {
                      label: "Email",
                      name: "email",
                      type: "email",
                      placeholder: "example@gmail.com",
                    },
                    {
                      label: "Phone",
                      name: "phone_number",
                      type: "text",
                      placeholder: "+91 333 673 2945",
                    },
                    {
                      label: "Subject",
                      name: "msg_subject",
                      type: "text",
                      placeholder: "Subject",
                    },
                  ].map(({ name, type, placeholder }) => (
                    <div key={name} className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type={type}
                          name={name}
                          className="form-control"
                          placeholder={placeholder}
                          required
                          value={formData[name as keyof typeof formData]}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Message */}
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        cols={30}
                        rows={6}
                        placeholder="Your message here"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="submit-btn">
                      Send Message <i className="bx bx-chevron-right"></i>
                    </button>
                  </div>

                  {successMessage && (
                    <div className="col-12">
                      <div className="alert alert-success contact__msg">
                        {successMessage}
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Image */}
            <div className="col-lg-6">
              <div className="contact-img">
                <Image
                  src="/assets/img/contact-img.png"
                  alt="Contact Tapovan Swiss Camps - Luxury Camping & Rafting in Rishikesh"
                  width={300}
                  height={200}
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* FAQ Section for Featured Snippets */}
          <div style={{ marginTop: "60px" }}>
            <div className="section-title text-center">
              <h2>❓ Frequently Asked Questions - Contact & Booking</h2>
              <p>
                Get instant answers to common questions about{" "}
                <strong>camping and rafting in Rishikesh</strong>
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div
                  style={{
                    padding: "25px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "12px",
                    border: "2px solid #507650",
                    marginBottom: "20px",
                  }}
                >
                  <h4 style={{ color: "#507650", marginBottom: "15px" }}>
                    🏕️ Camping & Accommodation
                  </h4>

                  <div style={{ marginBottom: "20px" }}>
                    <h5
                      style={{
                        color: "#333",
                        marginBottom: "8px",
                        fontSize: "16px",
                      }}
                    >
                      Q: What types of tents are available for camping in
                      Rishikesh?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> We offer three types of luxury tents:
                      Luxury AC Tents (₹1,599/person), Luxury Cooler Tents
                      (₹1,299/person), and Ordinary Tents (₹999/person). All
                      include comfortable beds and modern amenities.
                    </p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h5
                      style={{
                        color: "#333",
                        marginBottom: "8px",
                        fontSize: "16px",
                      }}
                    >
                      Q: What is included in the camping package price?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> Our packages include tent
                      accommodation, all meals (breakfast, lunch, dinner,
                      snacks), adventure activities, bonfire, swimming pool
                      access, WiFi, parking, and basic amenities. No hidden
                      charges!
                    </p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h5
                      style={{
                        color: "#333",
                        marginBottom: "8px",
                        fontSize: "16px",
                      }}
                    >
                      Q: Is camping in Rishikesh safe for families with
                      children?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> Absolutely! We provide 24/7 CCTV
                      security, first aid facilities, child-friendly play areas,
                      and our staff is trained to ensure family safety.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  style={{
                    padding: "25px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "12px",
                    border: "2px solid #507650",
                    marginBottom: "20px",
                  }}
                >
                  <h4 style={{ color: "#507650", marginBottom: "15px" }}>
                    🚣 Rafting & Adventure Activities
                  </h4>

                  <div style={{ marginBottom: "20px" }}>
                    <h5
                      style={{
                        color: "#333",
                        marginBottom: "8px",
                        fontSize: "16px",
                      }}
                    >
                      Q: What are the different rafting routes available in
                      Rishikesh?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> We offer Brahmapuri (9km, Grade I-II),
                      Shivpuri (16km, Grade II-III), Marine Drive (24km, Grade
                      III), and Kaudiyala (36km, Grade III-IV) routes with
                      prices starting from ₹499.
                    </p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h5
                      style={{
                        color: "#333",
                        marginBottom: "8px",
                        fontSize: "16px",
                      }}
                    >
                      Q: What is the best time for rafting in Rishikesh?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> The best time for rafting in Rishikesh
                      is from October to June, with optimal conditions from
                      November to April. Monsoon season (July-September) is
                      closed for safety.
                    </p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h5
                      style={{
                        color: "#333",
                        marginBottom: "8px",
                        fontSize: "16px",
                      }}
                    >
                      Q: Do you provide bike rental services in Rishikesh?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> Yes! We arrange bike rentals directly
                      from our camp so guests can conveniently explore Rishikesh
                      and its surroundings at their own pace.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div
                  style={{
                    padding: "25px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "12px",
                    border: "2px solid #507650",
                    marginBottom: "20px",
                  }}
                >
                  <h4 style={{ color: "#507650", marginBottom: "15px" }}>
                    📞 Booking & Contact
                  </h4>

                  <div style={{ marginBottom: "20px" }}>
                    <h5
                      style={{
                        color: "#333",
                        marginBottom: "8px",
                        fontSize: "16px",
                      }}
                    >
                      Q: How can I book camping and rafting in Rishikesh?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> You can book by calling +91
                      7906924003, WhatsApp, filling our contact form, or
                      visiting our website. We offer instant confirmation and
                      24/7 customer support.
                    </p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h5
                      style={{
                        color: "#333",
                        marginBottom: "8px",
                        fontSize: "16px",
                      }}
                    >
                      Q: Do you offer group discounts for camping in Rishikesh?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> Yes! We offer special group discounts
                      for large groups. Contact us for customized packages and
                      competitive rates for group bookings.
                    </p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h5
                      style={{
                        color: "#333",
                        marginBottom: "8px",
                        fontSize: "16px",
                      }}
                    >
                      Q: Can you arrange transportation from Delhi/Dehradun?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> Yes! We can arrange pickup from
                      Dehradun Airport (45km), Haridwar Railway Station (25km),
                      or Delhi. Contact us for transportation arrangements and
                      pricing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  style={{
                    padding: "25px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "12px",
                    border: "2px solid #507650",
                    marginBottom: "20px",
                  }}
                >
                  <h4 style={{ color: "#507650", marginBottom: "15px" }}>
                    📍 Location & Amenities
                  </h4>

                  <div style={{ marginBottom: "20px" }}>
                    <h5
                      style={{
                        color: "#333",
                        marginBottom: "8px",
                        fontSize: "16px",
                      }}
                    >
                      Q: Where is Tapovan Swiss Camps located in Rishikesh?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> We are located in Tapovan, Rishikesh,
                      just 1km from Ganga River, 1.5km from Ganga Aarti Point,
                      and 1km from Tapovan Market - perfect for exploring all
                      major attractions.
                    </p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h5
                      style={{
                        color: "#333",
                        marginBottom: "8px",
                        fontSize: "16px",
                      }}
                    >
                      Q: What amenities are available at your camping site?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> We provide swimming pool, WiFi,
                      parking, restaurant, bonfire area, adventure activities,
                      24/7 security, clean washrooms, and all modern amenities
                      for a comfortable stay.
                    </p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <h5
                      style={{
                        color: "#333",
                        marginBottom: "8px",
                        fontSize: "16px",
                      }}
                    >
                      Q: What is your cancellation policy?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> We offer free cancellation up to 24
                      hours before check-in. For last-minute cancellations,
                      please contact us directly for assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div
            style={{
              marginTop: "40px",
              padding: "30px",
              backgroundColor: "linear-gradient(135deg, #507650, #6b8e6b)",
              borderRadius: "15px",
              textAlign: "center",
              color: "white",
            }}
          >
            <h3 style={{ color: "white", marginBottom: "15px" }}>
              🏕️ Ready to Book Your Rishikesh Adventure?
            </h3>
            <p
              style={{ color: "white", marginBottom: "20px", fontSize: "18px" }}
            >
              Join 3,500+ satisfied customers who chose Tapovan Swiss Camps for
              their <strong>camping and rafting in Rishikesh</strong>{" "}
              experience!
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                justifyContent: "center",
              }}
            >
              <a
                href="tel:7906924003"
                style={{
                  backgroundColor: "white",
                  color: "#507650",
                  padding: "12px 25px",
                  borderRadius: "25px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                📞 Call Now: +91 7906924003
              </a>
              <a
                href="https://wa.me/7906924003?text=Hello, I'm interested in your Camping and Rafting packages!"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#25D366",
                  color: "white",
                  padding: "12px 25px",
                  borderRadius: "25px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
