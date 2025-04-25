"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";

const TeamDetails: React.FC = () => {
  const searchParams = useSearchParams();
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

  const name = searchParams.get("name") || "Team Member";
  const role = searchParams.get("role") || "Role";
  const image = searchParams.get("image") || "/assets/img/team/avatar.png";
  const description =
    searchParams.get("description") ||
    "No description available for this team member.";
  const facebook = searchParams.get("facebook") || "#";
  const twitter = searchParams.get("twitter") || "#";
  const whatsApp = searchParams.get("whatsApp") || "#";
  const instagram = searchParams.get("instagram") || "#";

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
              <h2 className="title">{name}</h2>
              <span className="subtitle">{role}</span>
              <ul className="social-share list-unstyled">
                {[
                  { href: facebook, icon: "ri-facebook-fill" },
                  { href: whatsApp, icon: "ri-whatsapp-fill" },
                  { href: twitter, icon: "ri-twitter-fill" },
                  { href: instagram, icon: "ri-instagram-fill" },
                ].map(({ href, icon }, index) => (
                  <li key={index}>
                    <Link
                      style={{ textDecoration: "none" }}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={icon}></i>
                    </Link>
                  </li>
                ))}
              </ul>
              <p>{description}</p>
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
                  src={image}
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
