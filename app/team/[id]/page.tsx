"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";

const TeamDetails: React.FC = () => {
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
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div
      className={
        isMobile ? "team-details-area ptb-200" : "team-details-area ptb-60"
      }
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-7">
            <div className="team-details-content" data-aos="fade-up">
              <h2 className="title">Alister Cock</h2>
              <span className="subtitle">Reservation Agent</span>
              <ul className="social-share list-unstyled">
                {[
                  { href: "#", icon: "ri-facebook-fill" },
                  { href: "#", icon: "ri-twitter-fill" },
                  { href: "#", icon: "ri-pinterest-fill" },
                  { href: "#", icon: "ri-linkedin-fill" },
                  { href: "#", icon: "ri-instagram-fill" },
                  { href: "#", icon: "ri-vimeo-fill" },
                  { href: "#", icon: "ri-youtube-fill" },
                  { href: "#", icon: "ri-behance-fill" },
                ].map(({ href, icon }, index) => (
                  <li key={index}>
                    <Link style={{ textDecoration: "none" }} href={href}>
                      <i className={icon}></i>
                    </Link>
                  </li>
                ))}
              </ul>
              <p>
                Phasellus in libero et nunc malesuada tincidunt. Morbi auctor
                tristique semper. Nunc condimentum dapibus felis, non volutpat
                ligula dapibus non. Quisque varius massa magna, eget iaculis
                ipsum tincidunt sed. Sed tempus magna id nunc posuere auctor.
                Morbi aliquam a justo eget cursus. Donec at quam id ex mollis
                dapibus eget ac sem. Maecenas pharetra bibendum massa, ut
                tincidunt lectus.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div
              className="team-details-thumb"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <div className="thumbnail">
                <Image
                  className="paralax-image"
                  src="/assets/img/team/team-4.jpg"
                  alt="Thumbnail"
                  width={400} // Set appropriate width
                  height={500} // Set appropriate height
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
