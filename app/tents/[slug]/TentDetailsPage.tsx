"use client";

import React, { useEffect, useState, useMemo, memo } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { getTentBySlug, Tent } from "../tentData";

// Using centralized tent data from tentData.ts

const TentDetailsPage: React.FC = () => {
  const params = useParams();
  const [activeTab, setActiveTab] = useState("photo");
  const [isClient, setIsClient] = useState(false);
  const [tent, setTent] = useState<Tent | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, address, message } = formData;

    const fullMessage = `Hello, my name is ${name}. I live at ${address}. I have a query: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);

    window.open(
      `https://api.whatsapp.com/send?phone=+918077570122&text=${encodedMessage}`,
      "_blank"
    );

    // Reset the form data
    setFormData({
      name: "",
      address: "",
      message: "",
    });
  };

  // Get tent data using slug from params
  useEffect(() => {
    const slug = params.slug as string;
    if (!slug) return;

    const tentData = getTentBySlug(slug);
    setTent(tentData || null);
  }, [params]);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);

    // Set mobile state after hydration
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Scroll to top after hydration
    window.scrollTo(0, 0);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Enhanced structured data for tent details (memoized for performance)
  const structuredData = useMemo(() => {
    if (!tent) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      name: tent.title,
      description: tent.metaDescription,
      brand: {
        "@type": "Brand",
        name: "Tapovan Swiss Camps",
      },
      offers: {
        "@type": "Offer",
        url: `https://tapovanswisscampsofficial.com/tents/${tent.slug}`,
        priceCurrency: "INR",
        price: tent.price,
        priceValidUntil: "2024-12-31",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
      },
      image: tent.images[0].url,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "50",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Tent Type",
          value: tent.title,
        },
        {
          "@type": "PropertyValue",
          name: "Capacity",
          value: `${tent.capacity.min}-${tent.capacity.max} persons`,
        },
        {
          "@type": "PropertyValue",
          name: "Beds",
          value: tent.beds.toString(),
        },
        {
          "@type": "PropertyValue",
          name: "Bathrooms",
          value: tent.baths.toString(),
        },
      ],
      location: {
        "@type": "Place",
        name: "Tapovan Swiss Camps",
        geo: {
          "@type": "GeoCoordinates",
          latitude: "30.1394342",
          longitude: "78.3127861",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Deecon Valley Road, Vill. Dholshoot Tapovan",
          addressLocality: "Rishikesh",
          addressRegion: "Uttarakhand",
          postalCode: "249192",
          addressCountry: "IN",
        },
      },
    };
  }, [tent]);

  // FAQ Schema for better SEO (memoized)
  const faqSchema = useMemo(() => {
    if (!tent) return null;
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `What amenities are included in the ${tent.title}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The ${tent.title} includes ${tent.amenities
              .slice(0, 5)
              .join(
                ", "
              )}, and many more premium amenities for a comfortable stay.`,
          },
        },
        {
          "@type": "Question",
          name: `What is the capacity of the ${tent.title}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The ${tent.title} can accommodate ${tent.capacity.min} to ${tent.capacity.max} persons comfortably.`,
          },
        },
        {
          "@type": "Question",
          name: `What is the price of the ${tent.title}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The ${tent.title} is available starting from ₹${tent.price} per tent, with special offers available.`,
          },
        },
      ],
    };
  }, [tent]);

  // Breadcrumb Schema (memoized)
  const breadcrumbSchema = useMemo(() => {
    if (!tent) return null;
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://tapovanswisscampsofficial.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tents",
          item: "https://tapovanswisscampsofficial.com/tents",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: tent.title,
          item: `https://tapovanswisscampsofficial.com/tents/${tent.slug}`,
        },
      ],
    };
  }, [tent]);

  // Show loading during hydration
  if (!isClient || !tent) {
    return <Loading />;
  }

  return (
    <>
      {/* High Quality Image Styles */}
      <style jsx>{`
        .img-responsive {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: high-quality;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }

        .swiper-slide img {
          object-fit: cover;
          object-position: center;
          transition: transform 0.3s ease;
        }

        .swiper-slide img:hover {
          transform: scale(1.02);
        }

        .zoom-thumbs .swiper-slide img {
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .zoom-thumbs .swiper-slide.swiper-slide-thumb-active img {
          border-color: #007bff;
          transform: scale(1.05);
        }
      `}</style>

      {isClient && structuredData && (
        <>
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
        </>
      )}
      {/* Breadcrumb Navigation */}
      <section className="breadcrumb-section py-3 bg-light">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/tents" className="text-decoration-none">
                  Tents
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {tent.title}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="room-details-area ptb-60">
        <div className="container">
          <div className="row">
            {/* Sidebar Section */}
            <div className="col-lg-4 mb-5 mb-lg-0 order-lg-2">
              <div style={{ position: "unset" }} className="sticky-top">
                {/* Room Details */}
                <div className="mb-4">
                  <h3 className="title">{tent.title}</h3>
                  <span className="price d-block">
                    {" "}
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#F2003D",
                        marginRight: 5,
                      }}
                    >
                      ₹{tent.mainPrice}
                    </span>{" "}
                    ₹{tent.price}.00
                  </span>
                  <small className="d-block mb-2">
                    Starting from ₹{tent.price} per tent
                  </small>
                  <div className="mb-4">
                    <h4>
                      The displayed price is based on an occupancy of up to five
                      guests.
                      <p className="mt-2">
                        Please check the pricing based on your occupancy{" "}
                        <Link href="/">Home</Link>
                      </p>
                    </h4>
                  </div>
                  <div className="mb-2">
                    <p>
                      Enjoy a clean and spacious tent equipped with comfortable
                      beds and warm blankets. We pride ourselves on excellent
                      service and delicious meals.
                    </p>
                  </div>

                  <Link
                    href={
                      "https://www.google.com/maps/place/Tapovan+Swiss+Camp+in+Rishikesh+and+Rafting+in+Rishikesh+and+Bike+rent+in+Rishikesh/@30.1394342,78.3127861,17z/data=!3m1!4b1!4m9!3m8!1s0x390917d95828f9b7:0x5628ba3506250e88!5m2!4m1!1i2!8m2!3d30.1394296!4d78.315361!16s%2Fg%2F11sxvndwwz?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                    }
                    className="d-block mb-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <i className="bx bx-location-plus pe-2"></i>
                    Deecon Valley Road, Vill. Dholshoot Tapovan, Rishikesh(UK)
                  </Link>
                  <ul className="room-detail-meta list-unstyled">
                    <li>
                      <Link
                        style={{ textDecoration: "none" }}
                        href="#"
                        title="Rating"
                      >
                        <i className="bx bx-star text-warning pe-2"></i>5/5
                      </Link>
                    </li>
                    <li className="share-box">
                      <Link href="#" title="Share">
                        <i className="bx bx-share-alt"></i>
                      </Link>
                      <ul className="list-unstyled share-box-social">
                        <li>
                          <Link href="#">
                            <i className="ri-facebook-fill"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="ri-twitter-fill"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="ri-instagram-line"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="ri-linkedin-fill"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="ri-pinterest-fill"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#" title="Wishlist">
                        <i className="bx bx-heart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" title="Compare">
                        <i className="bx bx-transfer"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" title="Print">
                        <i className="bx bx-printer"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact With Agent */}
                <h3 className="title mb-4">Contact With Agent</h3>
                <div className="agent-contact-inner bg-dark p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="agent-contact-avatar me-3">
                      <Image
                        className="img-fluid rounded-circle avatar avatar-lg"
                        src="/assets/img/team/rohit.jpeg"
                        alt="Agent"
                        width={80}
                        height={80}
                        quality={100}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        sizes="80px"
                      />
                    </div>
                    <div className="agent-contact-name">
                      <Link
                        style={{ textDecoration: "none" }}
                        href="team-details.html"
                      >
                        <h6 className="text-white">Rohit Panchal</h6>
                      </Link>
                      <span className="text-white">Property Manager</span>
                    </div>
                  </div>
                  <div className="contact-info d-flex mb-4 align-items-center">
                    <h6 className="text-primary border p-2 mb-0">
                      <Link
                        style={{ textDecoration: "none" }}
                        href="tel:8077570122"
                      >
                        <i className="fas fa-phone-volume text-white pe-2"></i>
                        +91 807 757 0122
                      </Link>
                    </h6>
                    <Link className="btn btn-link p-0 ms-auto" href="/tents">
                      <u>View All Tents</u>
                    </Link>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="Your Address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        name="message"
                        className="form-control"
                        rows={3}
                        placeholder="Write Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        required
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="flexCheckDefault"
                      >
                        I hereby agree for processing my personal data.
                      </label>
                    </div>
                    <button
                      type="submit"
                      style={{
                        borderRadius: "0px",
                        borderColor: "#507650",
                        paddingBlock: "15px",
                      }}
                      className="btn d-grid w-100 style5"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                <Link
                  style={{ borderRadius: "0px", paddingBlock: "15px" }}
                  className="btn style5 mt-5 w-100"
                  href={tent.linkBooking}
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Main Content Section */}
            <div className="col-lg-8 order-lg-1">
              {/* Room Gallery */}
              <div className="room-detail-gallery overflow-hidden">
                <ul
                  className="nav nav-tabs nav-tabs-02 mb-4"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <button
                      className={`nav-link shadow ${
                        activeTab === "photo" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("photo")}
                    >
                      <span className="d-none d-md-inline">Photos</span>
                      <FaImage className="d-md-none" />
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link shadow ${
                        activeTab === "map" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("map")}
                    >
                      <span className="d-none d-md-inline">Map</span>
                      <FaLocationDot className="d-md-none" />
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="photo"
                    role="tabpanel"
                    aria-labelledby="photo-tab"
                  >
                    {activeTab === "photo" && (
                      <div className="slider-slick">
                        {/* Main Image Slider */}
                        <Swiper
                          modules={[Navigation, Thumbs]}
                          navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                          }}
                          className="swiper-container zoom-top"
                        >
                          {tent.images.map((item) => (
                            <SwiperSlide key={item.id}>
                              <Image
                                src={item.url}
                                alt={`${tent.title} at Tapovan Swiss Camps - ${item.alt}`}
                                width={1200}
                                height={675}
                                loading="lazy"
                                className="img-responsive m-auto"
                                quality={100}
                                priority={false}
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        {/* Custom Navigation Buttons */}
                        <div className="custom-prev">
                          <FaChevronLeft />
                        </div>
                        <div className="custom-next">
                          <FaChevronRight />
                        </div>

                        {/* Thumbnail Slider */}
                        <Swiper
                          slidesPerView={4}
                          spaceBetween={10}
                          className="swiper-container mt-20 zoom-thumbs slider-nav-style-1 small-nav"
                        >
                          {tent.images.map((item) => (
                            <SwiperSlide key={item.id}>
                              <Image
                                className="img-responsive m-auto"
                                src={item.url}
                                alt={item.alt}
                                width={300}
                                height={200}
                                quality={100}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                sizes="(max-width: 768px) 25vw, 20vw"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    )}
                  </div>

                  {/* Map Content */}
                  {activeTab === "map" && (
                    <div className="map-container" style={{ height: "500px" }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.5441739492603!2d78.30568959999998!3d30.107238399999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390917d95828f9b7%3A0x5628ba3506250e88!2sTapovan%20Swiss%20Camp%20in%20Rishikesh%20and%20Rafting%20in%20Rishikesh%20and%20Bike%20rent%20in%20Rishikesh!5e0!3m2!1sen!2sin!4v1740547557035!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>

              {/* Room Info */}
              <div className="room-info mt-5">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Room Details</h5>
                  </div>
                  <div className="col-sm-9">
                    <div className="row mb-3">
                      <div className="col-sm-6">
                        <ul className="room-list list-unstyled">
                          <li>
                            <b>Capacity:</b> {tent.capacity.min}-
                            {tent.capacity.max} persons
                          </li>
                          <li>
                            <b>Price:</b> ₹{tent.price}.00
                          </li>
                          <li>
                            <b>Beds:</b> {tent.beds}
                          </li>
                          <li>
                            <b>Bathrooms:</b> {tent.baths}
                          </li>
                          <li>
                            <b>Check-in:</b> 12:00 PM
                          </li>
                          <li>
                            <b>Check-out:</b> 11:00 AM
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="room-list list-unstyled">
                          <li>
                            <b>Tent Type:</b> {tent.title}
                          </li>
                          <li>
                            <b>Category:</b> {tent.category}
                          </li>
                          <li>
                            <b>Facilities:</b> WiFi, Dining, Food, Pool, Games,
                            Meals (Lunch, Dinner, Breakfast)
                          </li>
                          <li>
                            <b>Activities:</b> Volleyball, Cricket, Badminton,
                            Bonfire
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Room Description */}
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="room-description">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Description</h5>
                  </div>
                  <div className="col-sm-9">
                    <p
                      dangerouslySetInnerHTML={{ __html: tent.description }}
                    ></p>
                  </div>
                </div>
              </div>

              {/* Room Features */}
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="room-features">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Features</h5>
                  </div>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-sm-6">
                        <h6 className="mb-3">Tent Features:</h6>
                        <ul className="room-list-style-2 list-unstyled mb-4">
                          {tent.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="mb-3">Amenities:</h6>
                        <ul className="room-list-style-2 list-unstyled mb-0">
                          {tent.amenities.slice(0, 8).map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tent Highlights */}
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="tent-highlights">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Highlights</h5>
                  </div>
                  <div className="col-sm-9">
                    <div className="row">
                      {tent.highlights.map((highlight, index) => (
                        <div key={index} className="col-sm-6 mb-3">
                          <div className="highlight-item d-flex align-items-center">
                            <i className="bx bx-check-circle text-success me-2"></i>
                            <span>{highlight}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tent Policies */}
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="tent-policies">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Policies</h5>
                  </div>
                  <div className="col-sm-9">
                    <div className="row">
                      {tent.policies.map((policy, index) => (
                        <div key={index} className="col-sm-6 mb-2">
                          <div className="policy-item d-flex align-items-center">
                            <i className="bx bx-info-circle text-info me-2"></i>
                            <span>{policy}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Room Address */}
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="room-address">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Address</h5>
                  </div>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-sm-6">
                        <ul className="room-list list-unstyled mb-0">
                          <li>
                            <b>Address:</b> Deecon Valley Road
                          </li>
                          <li>
                            <b>Village:</b> Dholshoot Tapovan
                          </li>
                          <li>
                            <b>District:</b> Tehri Garhwal (Rishikesh)
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="room-list list-unstyled mb-0">
                          <li>
                            <b>State:</b> Uttarakhand
                          </li>
                          <li>
                            <b>Pin Code:</b> 249192
                          </li>
                          <li>
                            <b>Country:</b> India
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Room Video */}
              {/* <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="room-video">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Camp Video</h5>
                  </div>
                  <div className="col-sm-9">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/UJEUwEJ6gH4"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* FAQ Section */}
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="tent-faq">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Frequently Asked Questions</h5>
                  </div>
                  <div className="col-sm-9">
                    <div className="accordion" id="tentFAQ">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq1"
                            aria-expanded="true"
                            aria-controls="faq1"
                          >
                            What amenities are included in the {tent.title}?
                          </button>
                        </h2>
                        <div
                          id="faq1"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#tentFAQ"
                        >
                          <div className="accordion-body">
                            The {tent.title} includes{" "}
                            {tent.amenities.slice(0, 5).join(", ")}, and many
                            more premium amenities for a comfortable stay. All
                            tents come with clean bedding, modern facilities,
                            and access to our common areas including dining,
                            swimming pool, and recreational activities.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq2"
                            aria-expanded="false"
                            aria-controls="faq2"
                          >
                            What is the capacity of the {tent.title}?
                          </button>
                        </h2>
                        <div
                          id="faq2"
                          className="accordion-collapse collapse"
                          data-bs-parent="#tentFAQ"
                        >
                          <div className="accordion-body">
                            The {tent.title} can comfortably accommodate{" "}
                            {tent.capacity.min} to {tent.capacity.max} persons.
                            The tent features {tent.beds} beds and {tent.baths}{" "}
                            bathroom(s), making it perfect for{" "}
                            {tent.capacity.min === 1
                              ? "solo travelers"
                              : tent.capacity.max <= 3
                              ? "couples and small families"
                              : "families and groups"}
                            .
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq3"
                            aria-expanded="false"
                            aria-controls="faq3"
                          >
                            What is the price of the {tent.title}?
                          </button>
                        </h2>
                        <div
                          id="faq3"
                          className="accordion-collapse collapse"
                          data-bs-parent="#tentFAQ"
                        >
                          <div className="accordion-body">
                            The {tent.title} is available starting from ₹
                            {tent.price} per tent. This includes accommodation,
                            access to all facilities, and basic amenities. Meals
                            and additional services can be arranged separately.
                            Special group discounts and seasonal offers are
                            available.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Nearby */}
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
              <div className="room-nearby">
                <div className="row">
                  <div className="col-sm-3 mb-3 mb-sm-0">
                    <h5>Nearby Attractions</h5>
                  </div>
                  <div className="col-sm-9">
                    <div className="nearby-info mb-4">
                      <span className="nearby-title mb-2 d-block text-info">
                        <i className="bx bxs-landmark me-2"></i>
                        <b>Spiritual Sites</b>
                      </span>
                      <div className="nearby-list">
                        <ul className="room-list list-unstyled mb-0">
                          <li className="d-flex">
                            <span className="me-1">
                              <b>Tapovan</b> (1.10 km)
                            </span>
                          </li>
                          <li className="d-flex">
                            <span className="me-1">
                              <b>Triveni Ghat</b> (4.5 km)
                            </span>
                          </li>
                          <li className="d-flex">
                            <span className="me-1">
                              <b>Neelkanth Mahadev Temple</b> (22 km)
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="nearby-info mb-4">
                      <span className="nearby-title mb-2 d-block text-success">
                        <i className="bx bx-swim me-2"></i>
                        <b>Adventure Activities</b>
                      </span>
                      <div className="nearby-list">
                        <ul className="room-list list-unstyled mb-0">
                          <li className="d-flex">
                            <span className="me-1">
                              <b>Secret Waterfall</b> (1 km)
                            </span>
                          </li>
                          <li className="d-flex">
                            <span className="me-1">
                              <b>River Rafting</b> (1 km)
                            </span>
                          </li>
                          <li className="d-flex">
                            <span className="me-1">
                              <b>Bungee Jumping</b> (7 km)
                            </span>
                          </li>
                          <li className="d-flex">
                            <span className="me-1">
                              <b>Trekking Trails</b> (1 km)
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="nearby-info">
                      <span className="nearby-title mb-2 d-block text-danger">
                        <i className="bx bx-restaurant me-2"></i>
                        <b>Food & Dining</b>
                      </span>
                      <div className="nearby-list">
                        <ul className="room-list list-unstyled mb-0">
                          <li className="d-flex">
                            <span className="me-1">
                              <b>Local Cafes</b> (0.5 km)
                            </span>
                          </li>
                          <li className="d-flex">
                            <span className="me-1">
                              <b>Riverside Restaurants</b> (1.5 km)
                            </span>
                          </li>
                          <li className="d-flex">
                            <span className="me-1">
                              <b>Street Food Markets</b> (1 km)
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TentDetailsPage;
