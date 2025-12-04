"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Lazy load DatePicker to reduce initial bundle size
const DatePicker = dynamic(
  () => import("react-datepicker").then((mod) => mod.default || mod),
  {
    ssr: false,
    loading: () => (
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Select date"
        readOnly
      />
    ),
  }
) as React.ComponentType<Record<string, unknown>>;

// Lazy load CSS
if (typeof window !== "undefined") {
  // @ts-expect-error - CSS module import
  import("react-datepicker/dist/react-datepicker.css").catch(() => {
    // CSS import failed, but this is non-critical
  });
}
import {
  FaCalendarAlt,
  FaUsers,
  FaChild,
  FaBed,
  FaSearch,
} from "react-icons/fa";

const HeroSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const router = useRouter();
  const [searchData, setSearchData] = useState({
    checkIn: null as Date | null,
    checkOut: null as Date | null,
    adults: 0,
    children: 0,
    tentType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (name: string, date: Date | null) => {
    setSearchData((prev) => ({
      ...prev,
      [name]: date,
    }));
  };

  const formatDateLocal = (date: Date | null): string => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSearch = () => {
    const queryObject: Record<string, string> = {
      checkIn: formatDateLocal(searchData.checkIn),
      checkOut: formatDateLocal(searchData.checkOut),
      adults: String(searchData.adults),
      children: String(searchData.children),
      tentType: searchData.tentType,
    };

    const query = new URLSearchParams(queryObject).toString();
    router.push(`/tents?${query}`);
  };

  const slides = [
    {
      id: 1,
      title: "Luxury Riverside Camping",
      subtitle: "Experience Nature in Comfort",
      text: "Discover the perfect luxury at Tapovan Swiss Camps. Wake up to the sound of flowing Ganga and enjoy premium amenities in our luxury tents.",
      btnText: "Explore Tents",
      link: "/tents",
      bgImage: "/assets/img/slider/slider-1.webp",
      overlay: "rgba(0,0,0,0.4)",
    },
    {
      id: 2,
      title: "Adventure Awaits You",
      subtitle: "Rafting, Yoga & More",
      text: "From thrilling white-water rafting to peaceful yoga sessions by the river, create unforgettable memories with our adventure packages.",
      btnText: "Book Adventure",
      link: "/booking-form",
      bgImage: "/assets/img/slider/slider-2.webp",
      overlay: "rgba(0,0,0,0.3)",
    },
    {
      id: 3,
      title: "Family Paradise",
      subtitle: "Where Memories Are Made",
      text: "Perfect for families, couples, and groups. Enjoy swimming, bonfires, delicious food, and create lasting memories in the lap of nature.",
      btnText: "Plan Your Stay",
      link: "/contact",
      bgImage: "/assets/img/slider/slider-3.webp",
      overlay: "rgba(0,0,0,0.5)",
    },
  ];

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Auto-advance slides
  React.useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <>
      <section className="hero-section position-relative overflow-hidden">
        {/* Background Images */}
        <div className="hero-background">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-bg-slide ${
                index === activeSlide ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          ))}
          <div className="hero-overlay" />
        </div>

        {/* Content */}
        <div className="container position-relative z-3">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-10 col-xl-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="hero-content text-center text-white"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="hero-badge mb-4"
                  >
                    <span className="badge bg-primary-custom text-white px-4 py-2 rounded-pill fs-6">
                      {slides[activeSlide].subtitle}
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="display-3 display-md-2 display-lg-1 fw-bold mb-4"
                  >
                    {slides[activeSlide].title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="lead mb-5 fw-lighter text-white fs-5"
                  >
                    {slides[activeSlide].text}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="hero-buttons"
                  >
                    <Link
                      href={slides[activeSlide].link}
                      className="btn btn-primary-custom text-white btn-lg px-5 py-3 rounded-pill me-3 mb-3 shadow-lg"
                    >
                      {slides[activeSlide].btnText}
                    </Link>
                    <Link
                      href="/tents"
                      className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill mb-3"
                    >
                      View All Tents
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Search Form */}
      <div className="search-section position-relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="search-card bg-white rounded-4 shadow-lg p-4 p-md-5"
          >
            {/* Mobile View */}
            <div className="d-lg-none">
              <div className="row g-3 mb-3">
                <div className="col-6">
                  <div className="form-group">
                    <label className="form-label small fw-semibold text-dark">
                      <FaCalendarAlt className="me-2 text-primary-custom" />
                      Check-in
                    </label>
                    <DatePicker
                      selected={searchData.checkIn}
                      onChange={(date: Date | null) =>
                        handleDateChange("checkIn", date)
                      }
                      className="form-control form-control-lg"
                      placeholderText="Select date"
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label className="form-label small fw-semibold text-dark">
                      <FaCalendarAlt className="me-2 text-primary-custom" />
                      Check-out
                    </label>
                    <DatePicker
                      selected={searchData.checkOut}
                      onChange={(date: Date | null) =>
                        handleDateChange("checkOut", date)
                      }
                      className="form-control form-control-lg"
                      placeholderText="Select date"
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                </div>
              </div>
              <div className="row g-3 mb-3">
                <div className="col-4">
                  <div className="form-group">
                    <label className="form-label small fw-semibold text-dark">
                      <FaUsers className="me-2 text-primary-custom" />
                      Adults
                    </label>
                    <select
                      className="form-control form-control-lg"
                      name="adults"
                      value={searchData.adults}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label className="form-label small fw-semibold text-dark">
                      <FaChild className="me-2 text-primary-custom" />
                      Children
                    </label>
                    <select
                      className="form-control form-control-lg"
                      name="children"
                      value={searchData.children}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      {[...Array(5)].map((_, i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label className="form-label small fw-semibold text-dark">
                      <FaBed className="me-2 text-primary-custom" />
                      Tent Type
                    </label>
                    <select
                      className="form-control form-control-lg"
                      name="tentType"
                      value={searchData.tentType}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Luxury AC tent">Luxury AC Tent</option>
                      <option value="Luxury Cooler tent">
                        Luxury Cooler Tent
                      </option>
                      <option value="Ordinary tent">Ordinary Tent</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button
                    className="btn btn-primary-custom text-white btn-lg w-100 py-3 rounded-pill"
                    onClick={handleSearch}
                  >
                    <FaSearch className="me-2" />
                    Search Available Tents
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop View */}
            <div className="d-none d-lg-block">
              <div className="row g-3 align-items-end">
                <div className="col-xl-2 col-lg-3">
                  <div className="form-group">
                    <label className="form-label small fw-semibold text-dark mb-2">
                      <FaCalendarAlt className="me-2 text-primary-custom" />
                      Check-in Date
                    </label>
                    <DatePicker
                      selected={searchData.checkIn}
                      onChange={(date: Date | null) =>
                        handleDateChange("checkIn", date)
                      }
                      className="form-control form-control-lg"
                      placeholderText="Select date"
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3">
                  <div className="form-group">
                    <label className="form-label small fw-semibold text-dark mb-2">
                      <FaCalendarAlt className="me-2 text-primary-custom" />
                      Check-out Date
                    </label>
                    <DatePicker
                      selected={searchData.checkOut}
                      onChange={(date: Date | null) =>
                        handleDateChange("checkOut", date)
                      }
                      className="form-control form-control-lg"
                      placeholderText="Select date"
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2">
                  <div className="form-group">
                    <label className="form-label small fw-semibold text-dark mb-2">
                      <FaUsers className="me-2 text-primary-custom" />
                      Adults
                    </label>
                    <select
                      className="form-control form-control-lg"
                      name="adults"
                      value={searchData.adults}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2">
                  <div className="form-group">
                    <label className="form-label small fw-semibold text-dark mb-2">
                      <FaChild className="me-2 text-primary-custom" />
                      Children
                    </label>
                    <select
                      className="form-control form-control-lg"
                      name="children"
                      value={searchData.children}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      {[...Array(5)].map((_, i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2">
                  <div className="form-group">
                    <label className="form-label small fw-semibold text-dark mb-2">
                      <FaBed className="me-2 text-primary-custom" />
                      Tent Type
                    </label>
                    <select
                      className="form-control form-control-lg"
                      name="tentType"
                      value={searchData.tentType}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Luxury AC tent">Luxury AC Tent</option>
                      <option value="Luxury Cooler tent">
                        Luxury Cooler Tent
                      </option>
                      <option value="Ordinary tent">Ordinary Tent</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2">
                  <button
                    className="btn btn-primary-custom text-white btn-lg w-100 py-3 rounded-pill"
                    onClick={handleSearch}
                  >
                    <FaSearch className="me-2" />
                    Search
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
