"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface TeamData {
  name: string;
  role: string;
  image: string;
  description: string;
  facebook: string;
  twitter: string;
  whatsApp: string;
  instagram: string;
}

const TeamDetails: React.FC = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState<TeamData | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  /* ⬇︎ wait for the real query object, then push into state */
  useEffect(() => {
    const name = searchParams.get("name");
    if (!name) return; // still empty → skip

    setData({
      name,
      role: searchParams.get("role") ?? "",
      image: searchParams.get("image") ?? "/assets/img/team/avatar.png",
      description:
        searchParams.get("description") ??
        "No description available for this team member.",
      facebook: searchParams.get("facebook") ?? "#",
      twitter: searchParams.get("twitter") ?? "#",
      whatsApp: searchParams.get("whatsApp") ?? "#",
      instagram: searchParams.get("instagram") ?? "#",
    });
  }, [searchParams]); // runs again when params appear

  /* viewport helper (unchanged) */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* still hydrating? */
  if (!data) return <p style={{ textAlign: "center" }}>Loading…</p>;

  /* ------------ render with real data ------------- */
  return (
    <div
      className={
        isMobile ? "team-details-area ptb-200" : "team-details-area ptb-60"
      }
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-7">
            <div className="team-details-content">
              <h2 className="title">{data.name}</h2>
              <span className="subtitle">{data.role}</span>
              <ul className="social-share list-unstyled">
                {[
                  { href: data.facebook, icon: "ri-facebook-fill" },
                  { href: data.whatsApp, icon: "ri-whatsapp-fill" },
                  { href: data.twitter, icon: "ri-twitter-fill" },
                  { href: data.instagram, icon: "ri-instagram-fill" },
                ].map(({ href, icon }, i) => (
                  <li key={i}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <i className={icon}></i>
                    </Link>
                  </li>
                ))}
              </ul>
              <p>{data.description}</p>
            </div>
          </div>

          <div className="col-xl-4 col-lg-5">
            <div className="team-details-thumb">
              <Image
                className="paralax-image"
                src={data.image}
                alt={data.name}
                width={400}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
