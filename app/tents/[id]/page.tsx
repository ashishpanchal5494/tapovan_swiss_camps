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
    price: 1799,
    images: [
      { id: 1, url: "/assets/img/room/actent-3.JPG", alt: "tent 1" },
      { id: 2, url: "/assets/img/room/actent-1.JPG", alt: "tent 2" },
      { id: 3, url: "/assets/img/room/actent-2.JPG", alt: "tent 3" },
      { id: 4, url: "/assets/img/room/garden.jpeg", alt: "garden" },
      { id: 5, url: "/assets/img/room/garden-2.jpeg", alt: "garden 2" },
      { id: 6, url: "/assets/img/room/dining.jpeg", alt: "dining" },
      { id: 7, url: "/assets/img/room/pool.jpeg", alt: "pool" },
      { id: 8, url: "/assets/img/room/vollyball.jpg", alt: "vollyball" },
      { id: 9, url: "/assets/img/room/group.jpeg", alt: "group" },
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
    price: 1499,
    images: [
      { id: 1, url: "/assets/img/room/actent-3.JPG", alt: "tent 1" },
      { id: 2, url: "/assets/img/room/coolertent-1.JPG", alt: "tent 2" },
      { id: 3, url: "/assets/img/room/actent-2.JPG", alt: "tent 3" },
      { id: 4, url: "/assets/img/room/garden.jpeg", alt: "garden" },
      { id: 5, url: "/assets/img/room/garden-2.jpeg", alt: "garden 2" },
      { id: 6, url: "/assets/img/room/dining.jpeg", alt: "dining" },
      { id: 7, url: "/assets/img/room/pool.jpeg", alt: "pool" },
      { id: 8, url: "/assets/img/room/vollyball.jpg", alt: "vollyball" },
      { id: 9, url: "/assets/img/room/group.jpeg", alt: "group" },
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
      { id: 1, url: "/assets/img/room/ordinarytent-1.jpeg", alt: "tent 1" },
      { id: 2, url: "/assets/img/room/ordinarytent-2.jpeg", alt: "tent 2" },
      { id: 3, url: "/assets/img/room/ordinarytent-3.jpg", alt: "tent 3" },
      { id: 4, url: "/assets/img/room/garden-2.jpeg", alt: "garden 2" },
      { id: 5, url: "/assets/img/room/dining.jpeg", alt: "dining" },
      { id: 6, url: "/assets/img/room/pool.jpeg", alt: "pool" },
      { id: 7, url: "/assets/img/room/vollyball.jpg", alt: "vollyball" },
      { id: 8, url: "/assets/img/room/group.jpeg", alt: "group" },
    ],
    beds: 3,
    baths: "Common",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    linkBooking: "/booking-form",
  },
];

const TentDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState("photo");
  const [isClient, setIsClient] = useState(false);
  const searchParams = useSearchParams();

  // Get all parameters from the URL
  const id = parseInt(searchParams.get("id") || "0");
  const title = searchParams.get("title") || "";
  const price = parseInt(searchParams.get("price") || "0");
  // const image = searchParams.get("image") || "";
  const beds = searchParams.get("beds") || "";
  const baths = searchParams.get("baths") || "";
  // const adults = searchParams.get("adults") || "";

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
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  if (!tent) {
    return <p className="text-center text-danger">Tent not found.</p>;
  }

  return (
    <>
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
                  <span className="price d-block">₹{price}.00</span>
                  <small className="d-block mb-2">₹{perHeadPrice} / Head</small>
                  {!checkIn && (
                    <div className="mb-4">
                      <h4>
                        The listed price is based on an occupancy of up to five
                        persons.
                        <p className="mt-2">
                          Please check the pricing based on your occupancy{" "}
                          <Link href="/">Home</Link>
                        </p>
                      </h4>
                    </div>
                  )}

                  <span className="d-block mb-4">
                    <i className="bx bx-location-plus pe-2"></i>
                    Deecon Valley Road, Vill. Dholshoot Tapovan, Rishikesh(UK)
                  </span>
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
                        src="/assets/img/team/team-1.jpg"
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
                      <u>View All Rooms</u>
                    </Link>
                  </div>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email Address"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Phone Number"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Write Message"
                      ></textarea>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="flexCheckDefault"
                      >
                        I hereby agree for processing my personal data.
                      </label>
                    </div>
                    <Link
                      style={{
                        borderRadius: "0px",
                        borderColor: "#507650",
                        paddingBlock: "15px",
                      }}
                      className="btn btn-primary d-grid style5"
                      href="#"
                    >
                      Send Message
                    </Link>
                  </form>
                </div>
                <Link
                  style={{ borderRadius: "0px", paddingBlock: "15px" }}
                  className="btn style5 mt-5"
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
                                className="img-responsive m-auto"
                                src={item.url}
                                alt={item.alt}
                                width={800}
                                height={400}
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
                            <b>Tent ID:</b> {id}
                          </li>
                          <li>
                            <b>Price:</b> ₹{price}.00
                          </li>
                          <li>
                            <b>Per Head Price:</b> ₹{perHeadPrice}
                          </li>
                          <li>
                            <b>Bedrooms:</b> {beds}
                          </li>
                          <li>
                            <b>Bathrooms:</b> {baths}
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="room-list list-unstyled">
                          <li>
                            <b>Tent Type:</b> {title}
                          </li>
                          <li>
                            <b>Facilities:</b> Wifi, Dining, Pool
                          </li>
                          <li>
                            <b>Activities:</b> Volleyball, Campfire
                          </li>
                          <li>
                            <b>Check-in: {checkIn}</b> 12:00 PM
                          </li>
                          <li>
                            <b>Check-out: {checkOut}</b> 11:00 AM
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
                    <p>{description}</p>
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
                          <li>Laundry Service</li>
                          <li>Dining Area</li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="room-list-style-2 list-unstyled mb-0">
                          <li>Campfire Area</li>
                          <li>Outdoor Seating</li>
                          <li>Volleyball Court</li>
                          <li>Free Parking</li>
                          <li>WiFi</li>
                          <li>Security</li>
                          <li>First Aid</li>
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
                            <b>District:</b> Rishikesh
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
              <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
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
                              <b>Tapovan</b> (2.10 km)
                            </span>
                          </li>
                          <li className="d-flex">
                            <span className="me-1">
                              <b>Triveni Ghat</b> (12 km)
                            </span>
                          </li>
                          <li className="d-flex">
                            <span className="me-1">
                              <b>Neelkanth Mahadev Temple</b> (25 km)
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
                              <b>White Water Rafting</b> (5 km)
                            </span>
                          </li>
                          <li className="d-flex">
                            <span className="me-1">
                              <b>Bungee Jumping</b> (15 km)
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
                              <b>Local Cafes</b> (1 km)
                            </span>
                          </li>
                          <li className="d-flex">
                            <span className="me-1">
                              <b>Riverside Restaurants</b> (3 km)
                            </span>
                          </li>
                          <li className="d-flex">
                            <span className="me-1">
                              <b>Street Food Markets</b> (12 km)
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

export default TentDetails;
