"use client";

import React, { useEffect, useState, useMemo } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  const handleSearch = () => {
    const queryObject: Record<string, string> = {
      checkIn: searchData.checkIn?.toISOString().split("T")[0] || "",
      checkOut: searchData.checkOut?.toISOString().split("T")[0] || "",
      adults: String(searchData.adults),
      children: String(searchData.children),
      tentType: searchData.tentType,
    };

    const query = new URLSearchParams(queryObject).toString();
    router.push(`/tents?${query}`);
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const sliderSettings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      pauseOnFocus: true,
      cssEase: "ease-in-out",
      beforeChange: (_: number, newIndex: number) =>
        setActiveSlide(() => newIndex),
    }),
    []
  );

  const slides = [
    {
      id: 1,
      title: "Welcome To Our Camp Side",
      text: "Imagine a place where you can be yourself.",
      btnText: "About Us",
      link: "/about",
      bgClass: "bg_1",
    },
    {
      id: 2,
      title: "Welcome To Our Resort",
      text: "Choose us once, and you will choose us always.",
      btnText: "Booking",
      link: "/booking-form",
      bgClass: "bg_2",
    },
    {
      id: 3,
      title: "Welcome To Our Pool Side",
      text: "Where friends and family will always feel at home!",
      btnText: "Contact Us",
      link: "/contact",
      bgClass: "bg_3",
    },
  ];

  return (
    <>
      <section className="banner-slider">
        <Slider {...sliderSettings}>
          {slides.map(({ id, title, text, btnText, link, bgClass }, index) => (
            <div className={`single-banner-part ${bgClass}`} key={id}>
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-8">
                    <motion.div
                      key={id}
                      initial={{ opacity: 0, x: "-100%" }}
                      animate={
                        index === activeSlide
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: "-100%" }
                      }
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="banner-iner"
                      style={{
                        marginTop: "130px",
                        pointerEvents: index === activeSlide ? "auto" : "none", // Important!
                      }}
                    >
                      <h5>{title}</h5>
                      <h2>{text}</h2>
                      <Link href={link} className="banner-btn">
                        {btnText}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <div className="hotel-search-area">
        <div className="container">
          <div className="bg-white shadow p-4">
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  {/* Check-in and Check-out */}
                  {["checkIn", "checkOut"].map((field) => (
                    <div className="col-xl-3 col-lg-6 col-md-6" key={field}>
                      <DatePicker
                        selected={searchData[field as "checkIn" | "checkOut"]}
                        onChange={(date) => handleDateChange(field, date)}
                        className="form-control"
                        placeholderText={
                          field === "checkIn"
                            ? "Check-in Date"
                            : "Check-out Date"
                        }
                        dateFormat="yyyy-MM-dd"
                      />
                    </div>
                  ))}

                  {/* Adults Dropdown */}
                  <div className="col-xl-2 col-lg-4 col-md-4">
                    <select
                      className="form-control"
                      name="adults"
                      value={searchData.adults}
                      onChange={handleChange}
                    >
                      <option value="">Person</option>
                      {[...Array(100)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Children Dropdown */}
                  <div className="col-xl-2 col-lg-4 col-md-4">
                    <select
                      className="form-control"
                      name="children"
                      value={searchData.children}
                      onChange={handleChange}
                    >
                      <option value="">Children (Below 5Yrs)</option>
                      {[...Array(4)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Tent Type Dropdown */}
                  <div className="col-xl-2 col-lg-4 col-md-4">
                    <select
                      className="form-control"
                      name="tentType"
                      value={searchData.tentType}
                      onChange={handleChange}
                    >
                      <option value="">Select Tent Type</option>
                      <option value="Luxury AC tent">Luxury AC Tent</option>
                      <option value="Luxury Cooler tent">
                        Luxury Cooler Tent
                      </option>
                      <option value="Ordinary tent">Ordinary Tent</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="col-xl-2 col-lg-2 col-md-3">
                <button
                  className="btn btn-primary w-100"
                  style={{ padding: "10px", lineHeight: "25px" }}
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
