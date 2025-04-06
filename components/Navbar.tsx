"use client";

import { useEffect, useState } from "react";
import AOS from "aos";

import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/img/logo.png";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search bar
  const [isClient, setIsClient] = useState(false); // State for client-side rendering

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsClient(true);
    AOS.init({ duration: 1200 });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu
  };

  useEffect(() => {
    const handleDropdownClick = (event: any) => {
      const parentLi = event.target.closest(".nav-item");
      if (parentLi?.querySelector(".dropdown-menu")) {
        event.preventDefault();
        parentLi.classList.toggle("open");
      }
    };

    if (isMobile) {
      const items = document.querySelectorAll(".nav-item a");
      items.forEach((item) =>
        item.addEventListener("click", handleDropdownClick)
      );

      return () => {
        items.forEach((item) =>
          item.removeEventListener("click", handleDropdownClick)
        );
      };
    }
  }, [isMobile]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle search bar
  };

  const handleClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000); // Hide after 1 seconds
  };

  return (
    <nav>
      {isClient && (
        <>
          <div className="main page-wrapper">
            <header className="header-wrap">
              {/* Header Top Section */}
              <div className="header-top">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6 col-md-6">
                      <div className="header-top-left">
                        <ul
                          className={
                            isMobile ? `mobile-info` : `contact-info list-style`
                          }
                        >
                          <li style={{ marginBottom: "5px" }}>
                            <i className="bx bx-phone-call"></i>
                            <Link
                              style={{
                                textDecoration: "none",
                                fontWeight: "500",
                              }}
                              href="tel:7906924003"
                            >
                              +91 790 692 4003
                            </Link>
                          </li>
                          <li style={{ marginBottom: "5px" }}>
                            <i className="bx bx-phone-call"></i>
                            <Link
                              style={{
                                textDecoration: "none",
                                fontWeight: "500",
                              }}
                              href="tel:8077570122"
                            >
                              +91 807 757 0122
                            </Link>
                          </li>
                          {isMobile === false && (
                            <li style={{ marginBottom: "5px" }}>
                              <i className="bx bx-envelope"></i>
                              <Link
                                style={{
                                  textDecoration: "none",
                                  fontWeight: "500",
                                }}
                                href="mailto:tswisscamps@gmail.com"
                              >
                                tswisscamps@gmail.com
                              </Link>
                            </li>
                          )}
                          {isMobile === false && (
                            <li>
                              <i className="bx bx-location-plus"></i>

                              <Link
                                href={
                                  "https://www.google.com/maps/place/Tapovan+Swiss+Camp+in+Rishikesh+and+Rafting+in+Rishikesh+and+Bike+rent+in+Rishikesh/@30.1394342,78.3127861,17z/data=!3m1!4b1!4m9!3m8!1s0x390917d95828f9b7:0x5628ba3506250e88!5m2!4m1!1i2!8m2!3d30.1394296!4d78.315361!16s%2Fg%2F11sxvndwwz?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  textDecoration: "none",
                                  fontWeight: "500",
                                }}
                              >
                                Deecon Valley Road, Vill. Dholshoot Tapovan,
                                Rishikesh(UK)
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-6">
                      <div className="header-top-right">
                        <ul
                          style={{ marginRight: 15 }}
                          className="social-profile list-style style1"
                        >
                          <li>
                            <Link
                              style={{
                                textDecoration: "none",
                              }}
                              href="https://www.facebook.com/profile.php?id=61574061994310"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="ri-facebook-fill"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{
                                textDecoration: "none",
                              }}
                              href="https://www.youtube.com/@tapovanswisscamps"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="ri-youtube-fill"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{
                                textDecoration: "none",
                              }}
                              href="https://www.instagram.com/tapovanswisscampsofficial/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="ri-instagram-line"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{
                                textDecoration: "none",
                              }}
                              href={`https://wa.me/7906924003?text=Hello, I'm interested in your Camping Side!`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="ri-whatsapp-fill"></i>
                            </Link>
                          </li>
                        </ul>

                        <div
                          className="user-account"
                          style={{
                            position: "relative",
                            display: "inline-block",
                          }}
                        >
                          <i className="ri-account-box-line"></i>
                          <a
                            style={{
                              textDecoration: "none",
                              fontWeight: "500",
                              cursor: "pointer",
                            }}
                            onClick={handleClick}
                          >
                            Login/Register
                          </a>

                          {showPopup && (
                            <div
                              className="popup"
                              style={{
                                position: "absolute",
                                top: "30px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                background: "transparent",
                                color: "gray",
                                padding: "5px 10px",
                                borderRadius: "5px",
                                border: "1px solid gray",
                                fontSize: "12px",
                                whiteSpace: "nowrap",
                                opacity: showPopup ? 0.8 : 0,
                                transition: "opacity 0.5s ease-in-out",
                              }}
                            >
                              Coming Soon
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Header Bottom Section */}
              <div className="header-bottom">
                <div className="container">
                  <nav
                    className={
                      isMobile
                        ? `navmobile navbar navbar-expand-md navbar-light`
                        : ` navbar navbar-expand-md navbar-light`
                    }
                  >
                    <Link className="navbar-brand" href="/">
                      <Image width={220} height={200} src={logo} alt="logo" />
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <div className="mobile-bar-wrap">
                      <button
                        className="searchbtn d-lg-none"
                        onClick={toggleSearch}
                      >
                        <i className="ri-search-line"></i>
                      </button>
                      <div className="mobile-menu d-lg-none">
                        <Link
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleMenu();
                          }}
                        >
                          <i
                            className={
                              isOpen ? "ri-close-line" : "ri-menu-line"
                            }
                          ></i>
                        </Link>
                      </div>
                    </div>

                    {/* Main Menu */}
                    <div
                      className={
                        isMobile
                          ? `mobileCollapse collapse navbar-collapse  ${
                              isOpen ? "show" : ""
                            }`
                          : ` collapse navbar-collapse  ${isOpen ? "show" : ""}`
                      }
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <Link href="/" className="nav-link active">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/tents" className="nav-link">
                            Tents
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/about" className="nav-link">
                            About Us
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="#" className="nav-link">
                            Pages <i className="ri-add-line"></i>
                          </Link>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <Link href="/team" className="nav-link">
                                Team
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/testimonial" className="nav-link">
                                Testimonial
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/booking-form" className="nav-link">
                                Booking Form
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/account" className="nav-link">
                                My Account
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/faq" className="nav-link">
                                FAQ
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/sample-page" className="nav-link">
                                Sample Page
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/privacy-policy" className="nav-link">
                                Privacy Policy
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/error-404" className="nav-link">
                                404 Error Page
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <Link href="/blogs" className="nav-link">
                            Blogs
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/contact" className="nav-link">
                            Contact
                          </Link>
                        </li>
                        <li className="nav-item d-lg-none">
                          <Link
                            href="/booking-form"
                            className="nav-link btn style1"
                          >
                            Book Now
                          </Link>
                        </li>
                      </ul>
                      <div className="other-options md-none">
                        <div className="option-item">
                          <button
                            className="searchbtn d-lg-none"
                            aria-label="Toggle Search"
                            aria-expanded={isSearchOpen}
                            onClick={toggleSearch}
                          >
                            <i className="ri-search-line"></i>
                          </button>
                          <div
                            className={`searchbox lg-none ${
                              isSearchOpen ? "open" : ""
                            }`}
                          >
                            <form action="room-style-grid.html" method="post">
                              <input type="search" placeholder="Search..." />
                              <a href="room-style-grid.html">
                                <i className="bx bx-search"></i>
                              </a>
                            </form>
                          </div>
                        </div>
                        <div className="option-item">
                          <Link
                            style={{
                              paddingInline: 30,
                              paddingBlock: 15,
                              color: "white",
                            }}
                            href="/booking-form"
                            className="btn style1"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </nav>

                  {/* Search Area */}
                  <div className={`search-area ${isSearchOpen ? "open" : ""}`}>
                    <form action="room-style-grid.html" method="post">
                      <input type="search" placeholder="Search..." />
                      <a href="room-style-grid.html">
                        <i className="ri-search-line"></i>
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
