"use client";

import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

import Link from "next/link";

const faqData = [
  // Booking & Payment Category
  {
    question: "How can I book a stay in the camp?",
    answer:
      "You can book your stay directly through our website by selecting your dates, tent type, and confirming the payment. It's fast, secure, and you'll get the best rates guaranteed. We also accept bookings via phone at +91-7906924003.",
    keywords: [
      "book camping rishikesh",
      "swiss tent booking",
      "how to reserve tapovan camps",
    ],
    category: "booking",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards, UPI payments, net banking, and digital wallets. All transactions are processed through secure, PCI-compliant payment gateways for your safety.",
    keywords: [
      "payment methods camping",
      "upi payment rishikesh",
      "credit card booking",
    ],
    category: "booking",
  },
  {
    question: "Is it safe to make payments during booking?",
    answer:
      "Absolutely. We use secure payment gateways with end-to-end encryption to protect your transaction details. Your financial information is never stored on our servers.",
    keywords: [
      "secure camping booking",
      "payment safety tapovan",
      "online reservation security",
    ],
    category: "booking",
  },
  {
    question: "Can I modify my reservation after booking?",
    answer:
      "Yes, you can modify your reservation dates or guest details by contacting our manager or support team. Changes are subject to availability and may incur additional charges.",
    keywords: [
      "change camping dates",
      "modify tent booking",
      "edit reservation tapovan",
    ],
    category: "booking",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made up to 48 hours before check-in are eligible for a full refund. Cancellations between 24-48 hours incur a 25% charge. No refunds for cancellations within 24 hours of check-in.",
    keywords: [
      "rishikesh camping cancellation",
      "refund policy tapovan",
      "last minute cancellation",
    ],
    category: "booking",
  },
  {
    question: "Are there any special offers or discounts available?",
    answer:
      "Yes! We regularly offer seasonal discounts, group packages, and promotional deals. Check our 'Offers' page, follow us on social media, or subscribe to our newsletter to stay updated on the latest deals.",
    keywords: [
      "discounts on swiss tents",
      "rishikesh camping deals",
      "tapovan promo codes",
    ],
    category: "booking",
  },

  // Facilities & Amenities Category
  {
    question: "What facilities are available at the camp?",
    answer:
      "Our luxury camp offers a swimming pool, indoor & outdoor games, free Wi-Fi, yoga sessions, spa services, cafe, restaurant, included meals, guided tours, bonfire area, and 24/7 security to ensure your comfort and enjoyment.",
    keywords: [
      "amenities at tapovan camps",
      "facilities in rishikesh camping",
      "luxury camp features",
    ],
    category: "facilities",
  },
  {
    question: "What types of tents do you offer?",
    answer:
      "We offer Swiss tents with attached bathrooms, deluxe tents with shared facilities, and premium tents with private balconies. All tents are equipped with comfortable bedding, electricity, and modern amenities.",
    keywords: [
      "swiss tent types",
      "luxury tent options",
      "tent categories rishikesh",
    ],
    category: "facilities",
  },
  {
    question: "Is Wi-Fi available at the camp?",
    answer:
      "Yes, we provide complimentary high-speed Wi-Fi throughout the camp area. However, we encourage guests to disconnect and enjoy the natural beauty of Rishikesh.",
    keywords: [
      "wifi camping rishikesh",
      "internet access tapovan",
      "connectivity at camps",
    ],
    category: "facilities",
  },
  {
    question: "What meals are included in the package?",
    answer:
      "We provide breakfast, lunch, and dinner with both vegetarian and non-vegetarian options. Our meals feature local cuisine and fresh ingredients. Special dietary requirements can be accommodated with prior notice.",
    keywords: [
      "meals included camping",
      "food at tapovan camps",
      "dining options rishikesh",
    ],
    category: "facilities",
  },
  {
    question: "Are there laundry facilities available?",
    answer:
      "Yes, we provide laundry services at an additional charge. Dry cleaning and ironing services are also available for your convenience.",
    keywords: [
      "laundry service camping",
      "dry cleaning rishikesh",
      "clothes cleaning tapovan",
    ],
    category: "facilities",
  },

  // Activities & Adventure Category
  {
    question: "What adventure activities are available?",
    answer:
      "We offer white water rafting, bungee jumping, cliff jumping, rappelling, rock climbing, trekking, camping, and yoga sessions. All activities are conducted by certified instructors with proper safety equipment.",
    keywords: [
      "adventure activities rishikesh",
      "rafting bungee jumping",
      "outdoor sports tapovan",
    ],
    category: "activities",
  },
  {
    question: "Is rafting suitable for beginners?",
    answer:
      "Yes! We offer rafting trips for all skill levels, from gentle Grade I-II rapids for beginners to challenging Grade IV-V rapids for experienced rafters. Our certified guides ensure your safety and enjoyment.",
    keywords: [
      "beginner rafting rishikesh",
      "family rafting trips",
      "safe rafting experience",
    ],
    category: "activities",
  },
  {
    question: "What safety measures are in place for adventure activities?",
    answer:
      "All activities are conducted with certified instructors, proper safety equipment, and emergency protocols. We provide life jackets, helmets, and safety briefings before each activity.",
    keywords: [
      "safety measures rafting",
      "adventure safety rishikesh",
      "certified instructors",
    ],
    category: "activities",
  },
  {
    question: "Can children participate in adventure activities?",
    answer:
      "Yes, we have age-appropriate activities for children. Minimum age requirements vary by activity: rafting (8+ years), bungee jumping (12+ years), and trekking (6+ years with parental supervision).",
    keywords: [
      "children adventure activities",
      "family friendly rafting",
      "kids camping rishikesh",
    ],
    category: "activities",
  },
  {
    question: "Do you provide equipment for adventure activities?",
    answer:
      "Yes, we provide all necessary equipment including rafts, paddles, life jackets, helmets, harnesses, and safety gear. You only need to bring comfortable clothes and a sense of adventure!",
    keywords: [
      "rafting equipment provided",
      "adventure gear included",
      "equipment rental tapovan",
    ],
    category: "activities",
  },

  // Policies & Support Category
  {
    question: "Are pets allowed at the camp area?",
    answer:
      "Yes, we are a pet-friendly camp! Please mention your pet while booking to ensure the availability of pet-friendly areas or tents. Additional charges may apply for pet accommodation.",
    keywords: [
      "pet friendly camping rishikesh",
      "dogs allowed in swiss tents",
      "camping with pets ganga",
    ],
    category: "policies",
  },
  {
    question: "Do you offer pickup and drop-off services?",
    answer:
      "Yes, we offer convenient transfer services from Rishikesh railway station, bus stand, and nearby airports at an additional charge. You can add this option during the booking process or contact our support team.",
    keywords: [
      "transport to tapovan camps",
      "rishikesh camping shuttle",
      "airport pickup for camps",
    ],
    category: "policies",
  },
  {
    question: "Is early check-in or late checkout available?",
    answer:
      "Early check-in and late checkout are subject to availability and may incur additional charges. Please contact us in advance to make arrangements. Standard check-in is 2 PM and checkout is 11 AM.",
    keywords: [
      "early arrival rishikesh camp",
      "late checkout tapovan",
      "camping timing flexibility",
    ],
    category: "policies",
  },
  {
    question: "What is the minimum age for booking?",
    answer:
      "Guests must be at least 18 years old to make a booking. Minors must be accompanied by a parent or legal guardian. We require valid ID proof for all guests.",
    keywords: [
      "minimum age booking",
      "adult supervision required",
      "id proof camping",
    ],
    category: "policies",
  },
  {
    question: "Do you have a smoking policy?",
    answer:
      "Smoking is allowed only in designated areas for the safety and comfort of all guests. Smoking inside tents or common areas is strictly prohibited.",
    keywords: [
      "smoking policy camping",
      "designated smoking areas",
      "no smoking tents",
    ],
    category: "policies",
  },
  {
    question: "What should I pack for my camping trip?",
    answer:
      "Pack comfortable clothes, swimwear, sunscreen, insect repellent, a flashlight, and personal toiletries. We provide bedding, towels, and basic amenities. Avoid bringing valuables as we're not responsible for lost items.",
    keywords: [
      "what to pack camping",
      "camping essentials rishikesh",
      "travel checklist tapovan",
    ],
    category: "policies",
  },
  {
    question: "Where is the camp located and how do I reach there?",
    answer:
      "We are located in Main Tapovan, Rishikesh, Uttarakhand. The camp is easily accessible by road, train, or air. You can find detailed directions on our Contact page or via Google Maps. We're just 5 minutes from the main Rishikesh market.",
    keywords: [
      "tapovan camps location",
      "how to reach swiss tents",
      "directions to rishikesh camping",
    ],
    category: "policies",
  },
  {
    question: "What is your emergency contact information?",
    answer:
      "For emergencies, contact our 24/7 helpline at +91-7906924003. We also have a resident manager on-site and are located near medical facilities in Rishikesh.",
    keywords: [
      "emergency contact tapovan",
      "24/7 helpline camping",
      "medical assistance rishikesh",
    ],
    category: "policies",
  },
];

const FAQPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredFAQs, setFilteredFAQs] = useState(faqData);

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
  }, []);

  // Filter FAQs based on search term and category
  useEffect(() => {
    let filtered = faqData;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.keywords.some((keyword) =>
            keyword.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredFAQs(filtered);
  }, [searchTerm, selectedCategory]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  if (!isClient) {
    return <Loading />;
  }

  // Generate FAQ schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQ Schema Markup */}
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Tapovan Swiss Camps",
          image:
            "https://www.tapovanswisscampsofficial.com/assets/img/logo.png",
          "@id": "https://www.tapovanswisscampsofficial.com",
          url: "https://www.tapovanswisscampsofficial.com",
          telephone: "+917906924003",
          priceRange: "₹999-₹1799",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Near Tapovan",
            addressLocality: "Rishikesh",
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
          sameAs: [
            "https://www.facebook.com/61574061994310",
            "https://www.instagram.com/tapovanswisscampsofficial",
          ],
        })}
      </script>

      {/* Hero Section */}
      <section
        className={
          isMobile
            ? "hero-section bg-gradient-to-br from-green-50 to-blue-50 pt-200"
            : "hero-section bg-gradient-to-br from-green-50 to-blue-50 pt-60"
        }
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="hero-content">
                <h1 className="display-6 display-md-5 display-lg-4 fw-bold text-dark mb-3 mb-md-4">
                  Frequently Asked Questions
                </h1>
                <p className="lead text-muted mb-4 mb-md-5 px-2 px-md-0">
                  Everything you need to know about your{" "}
                  <span className="text-[#507650] fw-semibold">
                    luxury camping
                  </span>{" "}
                  and{" "}
                  <span className="text-[#507650] fw-semibold">
                    rafting adventure
                  </span>{" "}
                  in Rishikesh
                </p>
                <div className="hero-stats d-flex justify-content-center gap-2 gap-md-3 gap-lg-4 mb-4 flex-wrap">
                  <div className="stat-item text-center px-2">
                    <div className="h5 h4-md text-[#507650] mb-1">4+</div>
                    <small className="text-muted">Years Experience</small>
                  </div>
                  <div className="stat-item text-center px-2">
                    <div className="h5 h4-md text-[#507650] mb-1">3500+</div>
                    <small className="text-muted">Happy Guests</small>
                  </div>
                  <div className="stat-item text-center px-2">
                    <div className="h5 h4-md text-[#507650] mb-1">24/7</div>
                    <small className="text-muted">Support</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section py-4 py-md-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <div className="search-box position-relative">
                <input
                  type="text"
                  className="form-control form-control-lg border-2 border-[#507650] rounded-pill px-3 px-md-4 py-2 py-md-3"
                  placeholder="Search for answers..."
                  id="faqSearch"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <i className="bx bx-search position-absolute top-50 end-0 translate-middle-y me-3 me-md-4 text-[#507650]"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="categories-section py-3 py-md-4 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="category-tabs d-flex justify-content-center gap-2 gap-md-3 flex-wrap">
                <button
                  className={`btn-[#507650] rounded-pill px-3 px-md-4 py-2 text-nowrap ${
                    selectedCategory === "all"
                      ? "btn-[#507650] text-white"
                      : "btn"
                  }`}
                  onClick={() => handleCategoryChange("all")}
                >
                  All Questions
                </button>
                <button
                  className={`btn-[#507650] rounded-pill px-3 px-md-4 py-2 text-nowrap ${
                    selectedCategory === "booking"
                      ? "btn-[#507650] text-white"
                      : "btn"
                  }`}
                  onClick={() => handleCategoryChange("booking")}
                >
                  <span className="d-none d-sm-inline">Booking & </span>Payment
                </button>
                <button
                  className={`btn-[#507650] rounded-pill px-3 px-md-4 py-2 text-nowrap ${
                    selectedCategory === "facilities"
                      ? "btn-[#507650] text-white"
                      : "btn"
                  }`}
                  onClick={() => handleCategoryChange("facilities")}
                >
                  <span className="d-none d-sm-inline">Facilities & </span>
                  Amenities
                </button>
                <button
                  className={`btn-[#507650] rounded-pill px-3 px-md-4 py-2 text-nowrap ${
                    selectedCategory === "activities"
                      ? "btn-[#507650] text-white"
                      : "btn"
                  }`}
                  onClick={() => handleCategoryChange("activities")}
                >
                  <span className="d-none d-sm-inline">Activities & </span>
                  Adventure
                </button>
                <button
                  className={`btn-[#507650] rounded-pill px-3 px-md-4 py-2 text-nowrap ${
                    selectedCategory === "policies"
                      ? "btn-[#507650] text-white"
                      : "btn"
                  }`}
                  onClick={() => handleCategoryChange("policies")}
                >
                  <span className="d-none d-sm-inline">Policies & </span>Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="accordion-area py-4 py-md-5 py-lg-6">
        <div className="container">
          {/* Results Count */}
          {searchTerm && (
            <div className="row mb-4">
              <div className="col-12 text-center">
                <p className="text-muted">
                  Found {filteredFAQs.length} result
                  {filteredFAQs.length !== 1 ? "s" : ""} for "{searchTerm}"
                </p>
              </div>
            </div>
          )}

          {/* No Results Message */}
          {filteredFAQs.length === 0 && (
            <div className="row">
              <div className="col-12 text-center py-4 py-md-5">
                <div className="no-results">
                  <i className="bx bx-search-alt-2 display-4 display-md-3 display-lg-1 text-muted mb-3"></i>
                  <h4 h3-md>No results found</h4>
                  <p className="text-muted mb-4 px-3 px-md-0">
                    Try adjusting your search terms or browse all categories
                  </p>
                  <button
                    className="btn btn-[#507650] px-4 py-2"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Grid */}
          {filteredFAQs.length > 0 && (
            <div className="row">
              {[0, 1].map((colIndex) => {
                const colFAQs = filteredFAQs.filter(
                  (_, index) => index % 2 === colIndex
                );
                return (
                  <div key={colIndex} className="col-12 col-lg-6">
                    <div className="faq-accordion">
                      <ul className="accordion">
                        {colFAQs.map((item, index) => {
                          const actualIndex = filteredFAQs.findIndex(
                            (faq) => faq === item
                          );
                          return (
                            <li
                              key={actualIndex}
                              className="accordion-item mb-3 mb-md-4"
                              itemScope
                              itemProp="mainEntity"
                              itemType="https://schema.org/Question"
                            >
                              <button
                                className={`accordion-title w-100 text-start p-3 p-md-4 ${
                                  activeIndex === actualIndex ? "active" : ""
                                }`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  toggleAccordion(actualIndex);
                                }}
                                itemProp="name"
                                aria-expanded={activeIndex === actualIndex}
                                aria-controls={`faq-${actualIndex}`}
                              >
                                <div className="d-flex align-items-start gap-3">
                                  <i
                                    className={`bx flex-shrink-0 mt-1 ${
                                      activeIndex === actualIndex
                                        ? "bx-minus"
                                        : "bx-plus"
                                    }`}
                                  ></i>
                                  <div className="flex-grow-1">
                                    <span className="question-text d-block mb-2">
                                      {item.question}
                                    </span>
                                    <span className="category-badge">
                                      <small className="badge bg-light text-dark">
                                        {item.category}
                                      </small>
                                    </span>
                                  </div>
                                </div>
                              </button>

                              <div
                                className={`accordion-content ${
                                  activeIndex === actualIndex ? "show" : ""
                                }`}
                                style={{
                                  height:
                                    activeIndex === actualIndex ? "auto" : "0",
                                }}
                                id={`faq-${actualIndex}`}
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                              >
                                <div className="accordion-content-inner p-3 p-md-4 pt-0">
                                  <p itemProp="text" className="mb-3">
                                    {item.answer}
                                  </p>
                                  <div className="faq-keywords">
                                    <small className="text-muted">
                                      Related: {item.keywords.join(", ")}
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Enhanced CTA Section */}
          <div className="faq-cta mt-4 mt-md-5">
            <div className="row">
              <div className="col-12 col-lg-8 mx-auto">
                <div className="cta-box bg-gradient-to-r from-[#507650] to-[#6b8e6b] text-white p-4 p-md-5 rounded-4 shadow-lg">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-8 mb-4 mb-lg-0">
                      <h3 className="mb-3 text-black">Still Have Questions?</h3>
                      <p className="mb-4 lead">
                        Our adventure specialists are available 24/7 to help you
                        plan your perfect Rishikesh getaway. Get instant answers
                        via WhatsApp or call us directly.
                      </p>
                      <div className="d-flex gap-2 gap-md-3 flex-wrap">
                        <Link
                          href="/contact"
                          className="btn btn-light btn-lg rounded-pill px-3 px-md-4 flex-fill flex-md-grow-0"
                          aria-label="Contact our support team"
                        >
                          <i className="bx bx-phone me-2"></i>
                          <span className="d-none d-sm-inline">Contact </span>
                          Support
                        </Link>
                        <Link
                          href="/booking-form"
                          className="btn btn-light btn-lg rounded-pill px-3 px-md-4 flex-fill flex-md-grow-0"
                          aria-label="Book your adventure now"
                        >
                          <i className="bx bx-calendar me-2"></i>
                          Book Now
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4 text-center">
                      <div className="cta-stats d-flex d-lg-block justify-content-center gap-4">
                        <div className="stat-item">
                          <div className="h3 h2-lg mb-1">24/7</div>
                          <small>Support Available</small>
                        </div>
                        <div className="stat-item">
                          <div className="h3 h2-lg mb-1">5min</div>
                          <small>Average Response</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators mt-4 mt-md-5">
            <div className="row text-center">
              <div className="col-6 col-lg-3 mb-4">
                <div className="trust-item">
                  <i className="bx bx-shield-quarter display-6 display-md-5 display-lg-4 text-[#507650] mb-2 mb-md-3"></i>
                  <h6 h5-md>Secure Booking</h6>
                  <p className="text-muted small">SSL encrypted payments</p>
                </div>
              </div>
              <div className="col-6 col-lg-3 mb-4">
                <div className="trust-item">
                  <i className="bx bx-award display-6 display-md-5 display-lg-4 text-[#507650] mb-2 mb-md-3"></i>
                  <h6 h5-md>Certified Guides</h6>
                  <p className="text-muted small">Professional instructors</p>
                </div>
              </div>
              <div className="col-6 col-lg-3 mb-4">
                <div className="trust-item">
                  <i className="bx bx-heart display-6 display-md-5 display-lg-4 text-[#507650] mb-2 mb-md-3"></i>
                  <h6 h5-md>Happy Customers</h6>
                  <p className="text-muted small">3500+ satisfied guests</p>
                </div>
              </div>
              <div className="col-6 col-lg-3 mb-4">
                <div className="trust-item">
                  <i className="bx bx-time display-6 display-md-5 display-lg-4 text-[#507650] mb-2 mb-md-3"></i>
                  <h6 h5-md>4+ Years</h6>
                  <p className="text-muted small">Experience in adventure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;
