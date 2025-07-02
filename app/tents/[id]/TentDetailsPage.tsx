"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
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

const tentRooms = [
  {
    id: 1,
    title: "Luxury AC Tent",
    price: 1499,
    images: [
      { id: 1, url: "/assets/img/room/ACTent1.webp", alt: "tent 1" },
      { id: 2, url: "/assets/img/room/ACtent2.webp", alt: "tent 2" },
      { id: 3, url: "/assets/img/room/washroom.webp", alt: "washroom" },
      { id: 4, url: "/assets/img/room/tentPhoto.webp", alt: "tent" },
      { id: 5, url: "/assets/img/room/gardenPhoto.webp", alt: "garden" },
      { id: 6, url: "/assets/img/room/gardenPhoto1.webp", alt: "garden 1" },
      { id: 7, url: "/assets/img/room/gardenPhoto2.webp", alt: "garden 2" },
      { id: 8, url: "/assets/img/room/dining.webp", alt: "dining" },
      { id: 9, url: "/assets/img/room/pool.webp", alt: "pool" },
      { id: 10, url: "/assets/img/room/vollyball.webp", alt: "vollyball" },
      { id: 11, url: "/assets/img/room/group.webp", alt: "group" },
    ],
    beds: 5,
    baths: 1,
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    linkBooking: "/booking-form",
  },
  {
    id: 2,
    title: "Luxury Cooler Tent",
    price: 1199,
    images: [
      { id: 1, url: "/assets/img/room/coolerTent1.webp", alt: "cooler tent" },
      { id: 2, url: "/assets/img/room/washroom.webp", alt: "washroom" },
      { id: 3, url: "/assets/img/room/tentPhoto.webp", alt: "tent" },
      { id: 4, url: "/assets/img/room/gardenPhoto.webp", alt: "garden" },
      { id: 5, url: "/assets/img/room/gardenPhoto1.webp", alt: "garden 1" },
      { id: 6, url: "/assets/img/room/gardenPhoto2.webp", alt: "garden 2" },
      { id: 7, url: "/assets/img/room/dining.webp", alt: "dining" },
      { id: 8, url: "/assets/img/room/pool.webp", alt: "pool" },
      { id: 9, url: "/assets/img/room/vollyball.webp", alt: "vollyball" },
      { id: 10, url: "/assets/img/room/group.webp", alt: "group" },
    ],
    beds: 5,
    baths: 1,
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    linkBooking: "/booking-form",
  },
  {
    id: 3,
    title: "Ordinary Tent",
    price: 999,
    images: [
      { id: 1, url: "/assets/img/room/ordinaryTent1.webp", alt: "tent 1" },
      { id: 2, url: "/assets/img/room/ordinaryTent2.webp", alt: "tent 2" },
      { id: 3, url: "/assets/img/room/ordinaryTent3.webp", alt: "tent 3" },
      { id: 4, url: "/assets/img/room/gardenPhoto2.webp", alt: "garden 2" },
      { id: 5, url: "/assets/img/room/gardenPhoto1.webp", alt: "garden 1" },
      { id: 6, url: "/assets/img/room/dining.webp", alt: "dining" },
      { id: 7, url: "/assets/img/room/pool.webp", alt: "pool" },
      { id: 8, url: "/assets/img/room/vollyball.webp", alt: "vollyball" },
      { id: 9, url: "/assets/img/room/group.webp", alt: "group" },
    ],
    beds: 3,
    baths: "Common",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    linkBooking: "/booking-form",
  },
];

const TentDetailsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("photo");
  const [isClient, setIsClient] = useState(false);
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

  const searchParams = useSearchParams();

  // Get all parameters from the URL
  const id = parseInt(searchParams.get("id") || "0");
  const title = searchParams.get("title") || "";
  const price = parseInt(searchParams.get("price") || "0");
  const mainPrice = parseInt(searchParams.get("mainPrice") || "0");
  const baths = searchParams.get("baths") || "";
  console.log(baths);
  const adults = searchParams.get("adults") || "";

  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const perHeadPrice = searchParams.get("perHeadPrice") || "";
  const description = searchParams.get("description") || "";

  const linkBooking = searchParams.get("linkBooking") || "/booking-form";

  // Find the tent from the static data based on ID
  const tent = tentRooms.find((tent) => tent.id === id);

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
    window.scrollTo({ top: 1200, behavior: "smooth" });
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  if (!tent) {
    return <p className="text-center text-danger">Tent not found.</p>;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description: description.replace(/<[^>]*>/g, "").substring(0, 160),
    brand: {
      "@type": "Brand",
      name: "Tapovan Swiss Camps",
    },
    offers: {
      "@type": "Offer",
      url: `https://tapovanswisscampsofficial.com/tents?id=${id}`,
      priceCurrency: "INR",
      price: price,
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
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Tent Type",
      value: title,
    },
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

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <section
        className={
          isMobile ? "room-details-area ptb-200" : "room-details-area ptb-60"
        }
      >
        <div className="container">
          <div className="row">
            {/* Sidebar Section */}
            <div className="col-lg-4 mb-5 mb-lg-0 order-lg-2">
              <div style={{ position: "unset" }} className="sticky-top">
                {/* Room Details */}
                <div className="mb-4">
                  <h3 className="title">{title}</h3>
                  <span className="price d-block">
                    {" "}
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#F2003D",
                        marginRight: 5,
                      }}
                    >
                      ₹{mainPrice}
                    </span>{" "}
                    ₹{price}.00
                  </span>
                  <small className="d-block mb-2">
                    ₹{perHeadPrice} per person (based on {adults} adults)
                  </small>
                  {!checkIn ? (
                    <div className="mb-4">
                      <h4>
                        The displayed price is based on an occupancy of up to
                        five guests.
                        <p className="mt-2">
                          Please check the pricing based on your occupancy{" "}
                          <Link href="/">Home</Link>
                        </p>
                      </h4>
                    </div>
                  ) : (
                    <div className="mb-2">
                      <p>
                        Enjoy a clean and spacious tent equipped with
                        comfortable beds and warm blankets. We pride ourselves
                        on excellent service and delicious meals.
                      </p>
                    </div>
                  )}

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
                        width={64}
                        height={64}
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
                  href={linkBooking}
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
                      } ${isMobile && "p-2"}`}
                      onClick={() => setActiveTab("photo")}
                    >
                      {isMobile ? <FaImage /> : "Photos"}
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link shadow ${
                        activeTab === "map" ? "active" : ""
                      } ${isMobile && "p-2"}`} // Adjust padding based on isMobile
                      onClick={() => setActiveTab("map")}
                    >
                      {isMobile ? <FaLocationDot /> : "Map"}
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
                                alt={`${title} at Tapovan Swiss Camps - ${item.alt}`}
                                width={800}
                                height={450}
                                loading="lazy"
                                className="img-responsive m-auto"
                                quality={85}
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
                                width={200}
                                height={150}
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
                            <b>Adults:</b> {adults}
                          </li>
                          <li>
                            <b>Price:</b> ₹{price}.00
                          </li>
                          <li>
                            <b>Per Head Price:</b> ₹{perHeadPrice}
                          </li>

                          <li>
                            <b>Bathrooms:</b> {baths}
                          </li>
                          <li>
                            <b>Check-in: {checkIn}</b> 12:00 PM
                          </li>
                          <li>
                            <b>Check-out: {checkOut}</b> 11:00 AM
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="room-list list-unstyled">
                          <li>
                            <b>Tent Type:</b> {title}
                          </li>
                          <li>
                            <b>Facilities:</b> Wifi, Dining, Food, Pool, Games,
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
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
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
                        <ul className="room-list-style-2 list-unstyled mb-0">
                          <li>Comfortable Beds</li>
                          <li>Clean Washrooms</li>
                          <li>24/7 Water Supply</li>
                          <li>Power Backup</li>
                          <li>Swimming Pool</li>
                          <li>Greenery With Flowers</li>
                          <li>Dining Area</li>
                          <li>Meals(Lunch, Dinner, Breakfast)</li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="room-list-style-2 list-unstyled mb-0">
                          <li>Bonfire Area</li>
                          <li>Outdoor Seating</li>
                          <li>Volleyball Court, Cricket, badminton</li>
                          <li>Free Parking</li>
                          <li>WiFi</li>
                          <li>Security (CCTV)</li>
                          <li>First Aid</li>
                          <li>Menu (Order to Have)</li>
                        </ul>
                      </div>
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
