"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/img/logo.png";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="footer-wrap">
      <div className="footer-top">
        <div className="container">
          <div className="row ptb-60">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 pe-xl-5">
              <div className="footer-widget">
                <Link href="/">
                  <Image src={logo} alt="Logo" width={220} height={100} />
                </Link>
                <p className="comp-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  emque dicta molest enim beatae ame consequ atur tempo pretium
                  auctor nam.
                </p>
                <div className="newsletter-form contact-form">
                  <form
                    className="subscribe__form"
                    action="/api/subscribe"
                    method="post"
                  >
                    <div className="col-12">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit">Subscribe Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {isMobile ? (
              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  overflowX: "auto",
                  justifyContent: "flex-start",
                }}
              >
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ps-xl-5 ps-lg-4 ps-md-5">
                  <div
                    style={{
                      flex: "0 0 33.33%",
                      minWidth: "130px",
                    }}
                    className="footer-widget"
                  >
                    <h3 className="footer-widget-title">Our Services</h3>
                    <ul className="footer-menu list-style">
                      {[
                        "Rooms & Apartments",
                        "Food & Restaurant",
                        "Spa & Fitness",
                        "Sports & Gaming",
                        "Event & Party",
                        "Gym & Yoga",
                      ].map((service, index) => (
                        <li style={{ width: "80px" }} key={index}>
                          <Link style={{ textDecoration: "none" }} href="#">
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                  <div
                    style={{
                      flex: "0 0 33.33%",
                      minWidth: "130px",
                    }}
                    className="footer-widget"
                  >
                    <h3 className="footer-widget-title">Our Teams</h3>
                    <ul className="footer-menu list-style">
                      {[
                        "Anuj Panchal",
                        "Rohit Panchal",
                        "Ramesh Panchal",
                        "Ashish Panchal",
                      ].map((member, index) => (
                        <li style={{ width: "80px" }} key={index}>
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/team/2"
                          >
                            {member}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ps-md-5">
                  <div
                    style={{
                      flex: "0 0 33.33%",
                      minWidth: "130px",
                    }}
                    className="footer-widget"
                  >
                    <h3 className="footer-widget-title">Contact Info</h3>
                    <ul
                      style={{ marginRight: "10px" }}
                      className="contact-info list-style"
                    >
                      <li style={{ marginRight: "10px" }}>
                        <i className="bx bx-location-plus"></i>
                        <h6 style={{ marginTop: "7px" }}>Location</h6>
                        <Link
                          href={
                            "https://www.google.com/maps/place/Tapovan+Swiss+Camp+in+Rishikesh+and+Rafting+in+Rishikesh+and+Bike+rent+in+Rishikesh/@30.1394342,78.3127861,17z/data=!3m1!4b1!4m9!3m8!1s0x390917d95828f9b7:0x5628ba3506250e88!5m2!4m1!1i2!8m2!3d30.1394296!4d78.315361!16s%2Fg%2F11sxvndwwz?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                          }
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          Deecon Valley Road, Vill. Dholshoot Tapovan,
                          Rishikesh(UK)
                        </Link>
                      </li>
                      <li>
                        <i className="bx bx-envelope"></i>
                        <h6>Email</h6>
                        <Link
                          style={{ textDecoration: "none" }}
                          href="mailto:tswisscamps@gmail.com"
                        >
                          tswisscamps@gmail.com
                        </Link>
                      </li>
                      <li>
                        <i className="bx bx-phone-call"></i>
                        <h6>Phone</h6>
                        <Link
                          style={{ textDecoration: "none" }}
                          href="tel:7906924003"
                        >
                          +91 7906924003
                        </Link>{" "}
                        <br />
                        <Link
                          style={{ textDecoration: "none" }}
                          href="tel:8077570122"
                        >
                          +91 8077570122
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {" "}
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ps-xl-5 ps-lg-4 ps-md-5">
                  <div className="footer-widget">
                    <h3 className="footer-widget-title">Our Services</h3>
                    <ul className="footer-menu list-style">
                      {[
                        "Rooms & Apartments",
                        "Food & Restaurant",
                        "Spa & Fitness",
                        "Sports & Gaming",
                        "Event & Party",
                        "Gym & Yoga",
                      ].map((service, index) => (
                        <li key={index}>
                          <Link style={{ textDecoration: "none" }} href="#">
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h3 className="footer-widget-title">Our Teams</h3>
                    <ul className="footer-menu list-style">
                      {[
                        "Anuj Panchal",
                        "Rohit Panchal",
                        "Ramesh Panchal",
                        "Ashish Panchal",
                      ].map((member, index) => (
                        <li key={index}>
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/team-details"
                          >
                            {member}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ps-md-5">
                  <div className="footer-widget">
                    <h3 className="footer-widget-title">Contact Info</h3>
                    <ul className="contact-info list-style">
                      <li>
                        <i className="bx bx-location-plus"></i>
                        <h6>Location</h6>
                        <Link
                          href={
                            "https://www.google.com/maps/place/Tapovan+Swiss+Camp+in+Rishikesh+and+Rafting+in+Rishikesh+and+Bike+rent+in+Rishikesh/@30.1394342,78.3127861,17z/data=!3m1!4b1!4m9!3m8!1s0x390917d95828f9b7:0x5628ba3506250e88!5m2!4m1!1i2!8m2!3d30.1394296!4d78.315361!16s%2Fg%2F11sxvndwwz?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                          }
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          Deecon Valley Road, Vill. Dholshoot Tapovan,
                          Rishikesh(UK)
                        </Link>
                      </li>
                      <li>
                        <i className="bx bx-envelope"></i>
                        <h6>Email</h6>
                        <Link
                          style={{ textDecoration: "none" }}
                          href="mailto:tswisscamps@gmail.com"
                        >
                          tswisscamps@gmail.com
                        </Link>
                      </li>
                      <li>
                        <i className="bx bx-phone-call"></i>
                        <h6>Phone</h6>
                        <Link
                          style={{ textDecoration: "none" }}
                          href="tel:7906924003"
                        >
                          +91 7906924003
                        </Link>{" "}
                        <br />
                        <Link
                          style={{ textDecoration: "none" }}
                          href="tel:8077570122"
                        >
                          +91 8077570122
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-6 col-sm-7">
              <p className="copyright-text">
                © 2024 Hotelo - Hotel, Resort, Motel Next.js Website. All Rights
                Reserved.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-5">
              <ul className="social-profile style1 list-style">
                {["facebook", "youtube", "instagram", "whatsapp"].map(
                  (platform, index) => (
                    <li key={index}>
                      <Link style={{ textDecoration: "none" }} href="#">
                        <i className={`ri-${platform}-fill`}></i>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
