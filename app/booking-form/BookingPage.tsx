"use client";

import React, { useState } from "react";
import Link from "next/link";

function BookingPage() {
  const [activeTab, setActiveTab] = useState<"camping" | "rafting">("camping");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    date: "",
    days: "1",
    adults: "1",
    children: "1",
    amount: "1000",
    tentType: "",
    ratingType: "",
  });

  const calculateTentPrice = (
    basePrice: number,
    beds: number,
    mainBasePrice: number,
    totalPersons: number,
    totalDays: number
  ) => {
    let perHeadPrice = basePrice;
    let perHeadMainPrice = mainBasePrice;
    const personsPerTent = totalPersons; // assuming 1 tent per booking form

    if (beds === 5) {
      if (personsPerTent === 2) {
        perHeadPrice = Math.round(basePrice * 1.6);
        perHeadMainPrice = Math.round(mainBasePrice * 1.6);
      } else if (personsPerTent === 3) {
        perHeadPrice = Math.round(basePrice * 1.3);
        perHeadMainPrice = Math.round(mainBasePrice * 1.3);
      } else if (personsPerTent === 4) {
        perHeadPrice = Math.round(basePrice * 1.1);
        perHeadMainPrice = Math.round(mainBasePrice * 1.1);
      }
    }

    const totalPrice = perHeadPrice * personsPerTent * totalDays;
    const totalMainPrice = perHeadMainPrice * personsPerTent * totalDays;

    return { perHeadPrice, totalPrice, perHeadMainPrice, totalMainPrice };
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const totalPersons = parseInt(formData.adults || "1");
    const totalDays = parseInt(formData.days || "1");

    const tentaDataMap: Record<string, { price: number; mainPrice: number; beds: number }> = {
      "Holi 1 Night Stay": { price: 1800, mainPrice: 2000, beds: 3 },
      "Holi 2 Night Stay": { price: 3000, mainPrice: 3500, beds: 3 },
      "Luxury (AC) Tent": { price: 1499, mainPrice: 1999, beds: 5 },
      "Luxury (Cooler) Tent": { price: 1299, mainPrice: 1499, beds: 5 },
      "Ordinary Tent": { price: 999, mainPrice: 1199, beds: 3 },
    };

    const tentData = tentaDataMap[formData.tentType];

    let message = `${activeTab === "camping"
      ? `Camping Booking Details:`
      : `Rafting Booking Details:`
      }\nName: ${formData.name}\nAddress: ${formData.address}\nEmail: ${formData.email
      }\nPhone: ${formData.phone}`;

    if (formData.date) {
      message += `\nDate: ${formData.date}`;
    }

    if (activeTab === "camping") {
      message += `\nDays: ${formData.days}`;
    }

    message += `\nAdults: ${formData.adults}`;

    if (activeTab === "camping" && formData.children) {
      message += `\nChildren: ${formData.children}`;
    }

    if (activeTab === "camping" && formData.tentType) {
      message += `\nTent Type: ${formData.tentType}`;
    }

    if (activeTab === "rafting" && formData.ratingType) {
      message += `\nRafting Type: ${formData.ratingType}`;
    }

    if (tentData) {
      const { perHeadPrice, totalPrice } = calculateTentPrice(
        tentData.price,
        tentData.beds,
        tentData.mainPrice,
        totalPersons,
        totalDays
      );

      message += `\nPer head price Amount: ₹${perHeadPrice}`;
      message += `\nTotal price Amount: ₹${totalPrice}`;
    }

    message += `\nBooking Amount: ${formData.amount}`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://api.whatsapp.com/send?phone=+917906924003&text=${encodedMessage}`,
      "_blank"
    );

    // Reset form data
    setFormData({
      name: "",
      address: "",
      email: "",
      phone: "",
      date: "",
      days: "1",
      adults: "1",
      children: "1",
      amount: "1000",
      tentType: "",
      ratingType: "",
    });
  };

  return (
    <>
      {/* Enhanced BookingPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://www.tapovanswisscampsofficial.com/booking-form",
          name: "Book Holi Camping Offer 2026 in Rishikesh - Tapovan Swiss Camps",
          description:
            "Celebrate Holi 2026 at Tapovan Swiss Camps in Rishikesh! Book our Holi Dhamaka packages starting ₹1800 with DJ Party, luxury tents, meals, pool & colours.",
          url: "https://www.tapovanswisscampsofficial.com/booking-form",
          inLanguage: "en-IN",
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://www.tapovanswisscampsofficial.com",
            name: "Tapovan Swiss Camps",
            url: "https://www.tapovanswisscampsofficial.com",
          },
          mainEntity: {
            "@type": "LodgingBusiness",
            name: "Tapovan Swiss Camps",
            url: "https://www.tapovanswisscampsofficial.com",
            telephone: "+917906924003",
            priceRange: "₹1800-₹3000",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Tapovan",
              addressLocality: "Rishikesh",
              addressRegion: "Uttarakhand",
              postalCode: "249201",
              addressCountry: "IN",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Holi Adventure Booking Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Holi 1 Night Stay + Party",
                    description: "1 Night Luxury Swiss Camp stay, meals, snacks, DJ, bonfire, colors",
                  },
                  price: "1800",
                  priceCurrency: "INR",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Holi 2 Night Stay + Dhamaka",
                    description: "2 Nights Luxury Swiss Camp stay, meals, DJ, bonfire, pool access, colors",
                  },
                  price: "3000",
                  priceCurrency: "INR",
                },
              ],
            },
          },
          potentialAction: {
            "@type": "ReserveAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://www.tapovanswisscampsofficial.com/booking-form",
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform",
              ],
            },
          },
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
              name: "What is included in the Rishikesh Holi Camping Package 2026?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our Holi Dhamaka Party package includes Luxury Swiss Camps with blankets, Welcome Drink, Lunch, Unlimited Snacks, DJ Party (Bollywood & Hollywood), Dinner (Veg & Non-Veg), Common Bonfire, Holi colours & festive decor, Swimming Pool Access, and Outdoor Games.",
              },
            },
            {
              "@type": "Question",
              name: "What are the prices for the Holi 2026 camping event in Rishikesh?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer two packages: 1 Night Stay + Holi Party for ₹1,800 per person and 2 Night Stay + Holi Dhamaka for ₹3,000 per person. Kids below 5 years are free (sharing with parents).",
              },
            },
            {
              "@type": "Question",
              name: "When is the main Holi event at Tapovan Swiss Camps?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The main Holi event is on 4 March 2026. You can book our packages to encompass this date with standard check-in and check-out at around 11:00 AM.",
              },
            },
            {
              "@type": "Question",
              name: "What types of tents are available for booking?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer three types of tents: Luxury AC Tents (₹1,499/person), Luxury Cooler Tents (₹1,299/person), and Ordinary Tents (₹999/person). All include comfortable beds and modern amenities.",
              },
            },
            {
              "@type": "Question",
              name: "Is alcohol allowed during the Holi Party?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Alcohol is not available at the camp, and drugs are strictly prohibited to ensure a safe and family-friendly environment.",
              },
            },
          ],
        })}
      </script>

      <section
        className="booking-area ptb-60"
        itemScope
        itemType="https://schema.org/WebPage"
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
              <li style={{ color: "#333", fontWeight: "500" }}>Book Now</li>
            </ol>
          </nav>

          {/* Enhanced SEO Content Section */}
          <div className="seo-content-section mb-5">
            <h1 className="text-center mb-3" itemProp="name">
              {activeTab === "camping"
                ? "🏕️ Book Best Holi Camping Offer 2026 in Rishikesh | Holi Dhamaka Party"
                : "🚣 Book White Water Rafting in Rishikesh | Best Ganga River Adventure"}
            </h1>
            <p className="text-center" itemProp="description">
              {activeTab === "camping"
                ? "Celebrate Holi 2026 in the beautiful lap of mountains away from city crowds! Enjoy our Holi Dhamaka Party on 4 March 2026 with music, DJ, bonfire, delicious food, colours & luxury Swiss tents starting @ ₹1800 per person."
                : "Enjoy thrilling rafting on the Ganges with certified guides. Choose from 12km, 16km or 22km rafting stretches. Book now for instant confirmation!"}
            </p>

            {/* Quick Booking Info */}
            <div
              className="quick-booking-info"
              style={{
                marginTop: "20px",
                padding: "20px",
                backgroundColor: "#f8f9fa",
                borderRadius: "10px",
                border: "2px solid #507650",
              }}
            >
              <h3
                style={{
                  color: "#507650",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                🎯 Why Book with Tapovan Swiss Camps?
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
                  <strong>🎉 Special Holi Event</strong>
                  <br />
                  <span style={{ color: "#666", fontSize: "14px" }}>
                    4 March 2026 Celebration
                  </span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <strong>🎵 DJ & Bonfire</strong>
                  <br />
                  <span style={{ color: "#666", fontSize: "14px" }}>
                    Bollywood & Hollywood Music
                  </span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <strong>� Best Price Guarantee</strong>
                  <br />
                  <span style={{ color: "#666", fontSize: "14px" }}>
                    Holi Packages from ₹1,800
                  </span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <strong>🏆 Premium Experience</strong>
                  <br />
                  <span style={{ color: "#666", fontSize: "14px" }}>
                    Luxury Swiss Camps & Pool access
                  </span>
                </div>
              </div>
            </div>
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
              .booking-tabs-container {
                display: flex;
                justify-content: center;
                flex-wrap: nowrap;
                gap: 8px;
                width: 100%;
              }
              .booking-tab-button {
                flex: 1;
                min-width: 0;
                white-space: nowrap;
                padding: 15px 30px;
                font-size: 18px;
                font-weight: 600;
                border-radius: 25px;
                border: 2px solid #507650;
                transition: all 0.3s ease;
              }
              .book-now-button {
                border-radius: 25px;
                padding: 15px 40px;
                font-size: 18px;
                font-weight: 600;
                background-color: #507650;
                border: none;
                color: white;
                box-shadow: 0 5px 15px rgba(80, 118, 80, 0.3);
                transition: all 0.3s ease;
                width: auto;
              }
              @media only screen and (max-width: 767px) {
                .booking-tabs-container {
                  gap: 6px;
                  padding: 0 5px;
                }
                .booking-tab-button {
                  padding: 10px 12px;
                  font-size: 13px;
                  border-radius: 20px;
                  margin: 0;
                }
                .seo-content-section h1 {
                  font-size: 20px !important;
                  line-height: 1.3 !important;
                  padding: 0 10px;
                }
                .seo-content-section p {
                  font-size: 14px !important;
                  padding: 0 10px;
                }
                .booking-form-container {
                  padding: 20px 15px !important;
                }
                .booking-form-container h2 {
                  font-size: 22px !important;
                }
                .pricing-info-box {
                  padding: 15px 10px !important;
                }
                .pricing-info-box h4 {
                  font-size: 16px !important;
                }
                .pricing-card {
                  padding: 8px 10px !important;
                  font-size: 12px !important;
                }
                .pricing-card strong {
                  font-size: 12px !important;
                }
                .quick-booking-info {
                  padding: 15px 10px !important;
                }
                .quick-booking-info h3 {
                  font-size: 18px !important;
                }
                .quick-booking-info > div {
                  flex-direction: column !important;
                  gap: 15px !important;
                }
                .quick-booking-info > div > div {
                  padding: 10px !important;
                }
                .book-now-button {
                  padding: 12px 25px !important;
                  font-size: 14px !important;
                  border-radius: 20px !important;
                  width: 100%;
                  max-width: 100%;
                }
              }
              @media only screen and (max-width: 480px) {
                .booking-tab-button {
                  padding: 8px 10px;
                  font-size: 12px;
                  border-radius: 18px;
                }
                .seo-content-section h1 {
                  font-size: 18px !important;
                }
                .seo-content-section p {
                  font-size: 13px !important;
                }
                .booking-form-container {
                  padding: 15px 10px !important;
                }
                .booking-form-container h2 {
                  font-size: 20px !important;
                }
                .pricing-card {
                  padding: 6px 8px !important;
                  font-size: 11px !important;
                }
                .book-now-button {
                  padding: 10px 20px !important;
                  font-size: 13px !important;
                  border-radius: 18px !important;
                  width: 100%;
                }
              }
            `,
            }}
          />
          <nav className="booking-tabs-button ptb-40">
            <div className="booking-tabs-container">
              <button
                className={`booking-tab-button nav-link ${activeTab === "camping" ? "active" : ""
                  }`}
                onClick={() => setActiveTab("camping")}
                style={{
                  backgroundColor:
                    activeTab === "camping" ? "#507650" : "transparent",
                  color: activeTab === "camping" ? "white" : "#507650",
                }}
              >
                🏕️ Book Camping
              </button>
              <button
                className={`booking-tab-button nav-link ${activeTab === "rafting" ? "active" : ""
                  }`}
                onClick={() => setActiveTab("rafting")}
                style={{
                  backgroundColor:
                    activeTab === "rafting" ? "#507650" : "transparent",
                  color: activeTab === "rafting" ? "white" : "#507650",
                }}
              >
                🚣 Book Rafting
              </button>
            </div>
          </nav>

          <div className="product-tabs-content">
            <div className="tab-content">
              <div
                className="col-12 contact-form book-form booking-form-container"
                style={{
                  backgroundColor: "white",
                  padding: "30px",
                  borderRadius: "15px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  border: "2px solid #507650",
                }}
              >
                <h2
                  style={{
                    textAlign: "center",
                    color: "#507650",
                    marginBottom: "20px",
                    fontSize: "28px",
                  }}
                >
                  {activeTab === "camping"
                    ? "🏕️ Book Your Luxury Camping Experience"
                    : "🚣 Book Your Rafting Adventure"}
                </h2>

                {/* Pricing Information */}
                <div
                  className="pricing-info-box"
                  style={{
                    marginBottom: "25px",
                    padding: "20px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "10px",
                    border: "1px solid #e9ecef",
                  }}
                >
                  <h4
                    style={{
                      color: "#507650",
                      marginBottom: "15px",
                      textAlign: "center",
                    }}
                  >
                    💰{" "}
                    {activeTab === "camping"
                      ? "Camping Packages"
                      : "Rafting Packages"}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "15px",
                      justifyContent: "center",
                    }}
                  >
                    {activeTab === "camping" ? (
                      <>
                        <div
                          className="pricing-card"
                          style={{
                            padding: "10px 15px",
                            backgroundColor: "white",
                            borderRadius: "8px",
                            border: "1px solid #507650",
                            textAlign: "center",
                          }}
                        >
                          <strong>Holi 1 Night Stay & Party</strong>
                          <br />
                          <span style={{ color: "#507650", fontWeight: "600" }}>
                            ₹1800/person
                          </span>
                        </div>
                        <div
                          className="pricing-card"
                          style={{
                            padding: "10px 15px",
                            backgroundColor: "white",
                            borderRadius: "8px",
                            border: "1px solid #507650",
                            textAlign: "center",
                          }}
                        >
                          <strong>Holi 2 Night Stay & Dhamaka</strong>
                          <br />
                          <span style={{ color: "#507650", fontWeight: "600" }}>
                            ₹3000/person
                          </span>
                        </div>
                        <div
                          className="pricing-card"
                          style={{
                            padding: "10px 15px",
                            backgroundColor: "white",
                            borderRadius: "8px",
                            border: "1px solid #507650",
                            textAlign: "center",
                          }}
                        >
                          <strong>Luxury AC Tent</strong>
                          <br />
                          <span style={{ color: "#507650", fontWeight: "600" }}>
                            ₹1499/person
                          </span>
                        </div>
                        <div
                          className="pricing-card"
                          style={{
                            padding: "10px 15px",
                            backgroundColor: "white",
                            borderRadius: "8px",
                            border: "1px solid #507650",
                            textAlign: "center",
                          }}
                        >
                          <strong>Luxury Cooler Tent</strong>
                          <br />
                          <span style={{ color: "#507650", fontWeight: "600" }}>
                            ₹1299/person
                          </span>
                        </div>
                        <div
                          className="pricing-card"
                          style={{
                            padding: "10px 15px",
                            backgroundColor: "white",
                            borderRadius: "8px",
                            border: "1px solid #507650",
                            textAlign: "center",
                          }}
                        >
                          <strong>Ordinary Tent</strong>
                          <br />
                          <span style={{ color: "#507650", fontWeight: "600" }}>
                            ₹999/person
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className="pricing-card"
                          style={{
                            padding: "10px 15px",
                            backgroundColor: "white",
                            borderRadius: "8px",
                            border: "1px solid #507650",
                            textAlign: "center",
                          }}
                        >
                          <strong>Brahmpuri (12km)</strong>
                          <br />
                          <span style={{ color: "#507650", fontWeight: "600" }}>
                            ₹499/person
                          </span>
                        </div>
                        <div
                          className="pricing-card"
                          style={{
                            padding: "10px 15px",
                            backgroundColor: "white",
                            borderRadius: "8px",
                            border: "1px solid #507650",
                            textAlign: "center",
                          }}
                        >
                          <strong>Shivpuri (16km)</strong>
                          <br />
                          <span style={{ color: "#507650", fontWeight: "600" }}>
                            ₹699/person
                          </span>
                        </div>
                        <div
                          className="pricing-card"
                          style={{
                            padding: "10px 15px",
                            backgroundColor: "white",
                            borderRadius: "8px",
                            border: "1px solid #507650",
                            textAlign: "center",
                          }}
                        >
                          <strong>Marine Drive (22km)</strong>
                          <br />
                          <span style={{ color: "#507650", fontWeight: "600" }}>
                            ₹999/person
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="row">
                    <InputField
                      label="Your Name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      required
                      onChange={handleChange}
                    />
                    <InputField
                      label="Address"
                      name="address"
                      type="text"
                      placeholder="Enter your address"
                      value={formData.address}
                      required
                      onChange={handleChange}
                    />
                    <InputField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      required
                      onChange={handleChange}
                    />
                    <InputField
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      required
                      onChange={handleChange}
                    />
                    <InputField
                      label="Date"
                      name="date"
                      type="date"
                      value={formData.date}
                      required
                      onChange={handleChange}
                    />
                    {activeTab === "camping" && (
                      <InputField
                        label="Days"
                        name="days"
                        type="number"
                        value={formData.days}
                        required
                        onChange={handleChange}
                      />
                    )}

                    <InputField
                      label="Adults"
                      name="adults"
                      type="number"
                      value={formData.adults}
                      required
                      onChange={handleChange}
                    />
                    {activeTab === "camping" && (
                      <InputField
                        label="Childrens"
                        name="children"
                        type="number"
                        value={formData.children}
                        required
                        onChange={handleChange}
                      />
                    )}
                    {activeTab === "camping" && (
                      <SelectField
                        label="Tent Type"
                        name="tentType"
                        value={formData.tentType}
                        options={[
                          "Holi 1 Night Stay",
                          "Holi 2 Night Stay",
                          "Luxury (AC) Tent",
                          "Luxury (Cooler) Tent",
                          "Ordinary Tent",
                        ]}
                        onChange={handleChange}
                      />
                    )}
                    {activeTab === "rafting" && (
                      <SelectField
                        label="Rafting Type"
                        name="ratingType"
                        value={formData.ratingType}
                        options={[
                          "Marine Drive(22km)",
                          "Shivpuri(16km)",
                          "Brahmpuri(12km)",
                        ]}
                        onChange={handleChange}
                      />
                    )}
                    <SelectField
                      label="Booking Amount"
                      name="amount"
                      value={formData.amount}
                      options={["1000 IND", "1500 IND", "2000 IND"]}
                      onChange={handleChange}
                    />
                    <div className="col-12" style={{ textAlign: "center" }}>
                      <button
                        className="btn mt-4 style3 icon book-now-button"
                        type="submit"
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = "#3d5a3d";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = "#507650";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        Book Now - Get Instant Confirmation
                      </button>

                      <p
                        style={{
                          marginTop: "15px",
                          color: "#666",
                          fontSize: "14px",
                          fontStyle: "italic",
                        }}
                      >
                        📞 Need help? Call us at{" "}
                        <a
                          href="tel:7906924003"
                          style={{ color: "#507650", fontWeight: "600" }}
                        >
                          +91 7906924003
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ Section for Better SEO */}
          <div style={{ marginTop: "60px" }}>
            <div className="section-title text-center">
              <h2>❓ Frequently Asked Questions - Booking & Packages</h2>
              <p>
                Get instant answers to common questions about{" "}
                <strong>booking camping and rafting in Rishikesh</strong>
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
                    🏕️ Camping Booking
                  </h4>

                  <div style={{ marginBottom: "20px" }}>
                    <h5
                      style={{
                        color: "#333",
                        marginBottom: "8px",
                        fontSize: "16px",
                      }}
                    >
                      Q: How can I book camping in Rishikesh online?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> You can book camping in Rishikesh
                      online by filling our booking form, calling +91
                      7906924003, or WhatsApp. We offer instant confirmation and
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
                      Q: Do you offer group discounts for camping bookings?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> Yes! We offer special group discounts
                      for large groups. Contact us for customized packages and
                      competitive rates for group bookings.
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
                    🚣 Rafting Booking
                  </h4>

                  <div style={{ marginBottom: "20px" }}>
                    <h5
                      style={{
                        color: "#333",
                        marginBottom: "8px",
                        fontSize: "16px",
                      }}
                    >
                      Q: How can I book rafting in Rishikesh?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> You can book rafting in Rishikesh
                      through our booking form, by calling +91 7906924003, or
                      WhatsApp. We offer instant confirmation and professional
                      guides.
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
                      Q: What are the different rafting routes available?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> We offer Brahmpuri (12km, ₹499),
                      Shivpuri (16km, ₹699), and Marine Drive (22km, ₹999)
                      routes. All include safety gear and certified guides.
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
                      Q: Is rafting safe for beginners?
                    </h5>
                    <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                      <strong>A:</strong> Yes! We provide certified guides,
                      safety gear, and beginner-friendly routes. All safety
                      equipment is provided and guides are trained
                      professionals.
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
            <h3 style={{ color: "gray", marginBottom: "15px" }}>
              🎯 Ready to Book Your Rishikesh Adventure?
            </h3>
            <p
              style={{ color: "black", marginBottom: "20px", fontSize: "18px" }}
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

const InputField: React.FC<{
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, name, type, value, placeholder, required, onChange }) => (
  <div className="mt-4 col-md-6">
    <label className="form-label">{label}</label>
    <input
      type={type}
      name={name}
      className="form-control"
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  </div>
);

const SelectField: React.FC<{
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ label, name, value, options, onChange }) => (
  <div className="mt-4 col-md-12">
    <label className="form-label">{label}</label>
    <select
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value="">Select {label}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default BookingPage;
