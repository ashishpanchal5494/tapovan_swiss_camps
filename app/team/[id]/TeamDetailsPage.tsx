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

const TeamDetailsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState<TeamData | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const name = searchParams.get("name");
    if (!name) return;

    setData({
      name,

      role: searchParams.get("role") ?? "Team Member",
      image: searchParams.get("image") ?? "/assets/img/team/avatar.png",
      description:
        searchParams.get("description") ??
        `${name} is a valued team member at Tapovan Swiss Camps, contributing to our mission of providing exceptional camping experiences in Rishikesh.`,
      facebook: searchParams.get("facebook") ?? "#",
      twitter: searchParams.get("twitter") ?? "#",
      whatsApp: searchParams.get("whatsApp") ?? "#",
      instagram: searchParams.get("instagram") ?? "#",
    });
  }, [searchParams]);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (!data) return <p style={{ textAlign: "center" }}>Loading…</p>;

  // Structured data for team member
  const teamMemberStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    jobTitle: data.role,
    description: data.description,
    image: data.image.startsWith("/")
      ? `https://tapovanswisscampsofficial.com${data.image}`
      : data.image,
    worksFor: {
      "@type": "Organization",
      name: "Tapovan Swiss Camps",
      url: "https://tapovanswisscampsofficial.com",
    },
    sameAs: [
      data.facebook !== "#" ? data.facebook : null,
      data.twitter !== "#" ? data.twitter : null,
      data.instagram !== "#" ? data.instagram : null,
    ].filter(Boolean),
  };

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(teamMemberStructuredData)}
      </script>

      <div
        className={
          isMobile ? "team-details-area ptb-200" : "team-details-area ptb-60"
        }
      >
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/about">About Us</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {data.name}
              </li>
            </ol>
          </nav>

          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-7">
              <div className="team-details-content">
                <h1 className="title">{data.name}</h1>
                <span className="subtitle">{data.role}</span>
                <div className="team-member-meta mb-4">
                  <div className="meta-item">
                    <i className="ri-user-3-line"></i>
                    <span>Team Member Since: 2023</span>
                  </div>
                  <div className="meta-item">
                    <i className="ri-map-pin-line"></i>
                    <span>Based in Rishikesh, Uttarakhand</span>
                  </div>
                  <div className="meta-item">
                    <i className="ri-customer-service-2-line"></i>
                    <span>Specializes in: Guest Services</span>
                  </div>
                </div>

                <ul className="social-share list-unstyled">
                  {[
                    {
                      href: data.facebook,
                      icon: "ri-facebook-fill",
                      label: "Facebook profile",
                    },
                    {
                      href: data.whatsApp,
                      icon: "ri-whatsapp-fill",
                      label: "Contact via WhatsApp",
                    },
                    {
                      href: data.twitter,
                      icon: "ri-twitter-fill",
                      label: "Twitter profile",
                    },
                    {
                      href: data.instagram,
                      icon: "ri-instagram-fill",
                      label: "Instagram profile",
                    },
                  ].map(({ href, icon, label }, i) => (
                    <li key={i}>
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        style={{ textDecoration: "none" }}
                      >
                        <i className={icon}></i>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="team-bio mt-4">
                  <h2>About {data.name.split(" ")[0]}</h2>
                  <p>{data.description}</p>

                  <h3>Role at Tapovan Swiss Camps</h3>
                  <p>
                    As our {data.role.toLowerCase()}, {data.name.split(" ")[0]}{" "}
                    plays a key role in ensuring our guests have an
                    unforgettable camping experience in Rishikesh.{" "}
                    {data.name.split(" ")[0]}&lsquo;s expertise contributes to
                    making Tapovan Swiss Camps one of the{" "}
                    <strong>
                      top-rated camping destinations near the Ganges
                    </strong>
                    .
                  </p>

                  <h3>Guest Testimonials</h3>
                  <div className="testimonial-quote">
                    <blockquote>
                      &ldquo;The team at Tapovan Swiss Camps made our stay
                      exceptional. {data.name.split(" ")[0]}
                      went above and beyond to ensure we had everything we
                      needed for our adventure.&ldquo;
                      <footer>- Happy Guest, Google Review</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5">
              <div className="team-details-thumb">
                <Image
                  className="paralax-image img-fluid rounded"
                  src={data.image}
                  alt={`${data.name}, ${data.role} at Tapovan Swiss Camps`}
                  width={400}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>

          <div className="related-team mt-5">
            <h2>Meet Our Entire Team</h2>
            <p>
              Tapovan Swiss Camps is powered by a dedicated team of camping
              professionals committed to providing the{" "}
              <strong>best glamping experience in Rishikesh</strong>.
            </p>
            <Link
              href="/team"
              className="btn style1 rounded py-2 px-4 text-white"
            >
              View All Team Members
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetailsPage;
