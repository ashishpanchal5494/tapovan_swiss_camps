"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getTeamMemberBySlug, TeamMember } from "../teamData";

const TeamDetailsPage: React.FC = () => {
  const params = useParams();
  const [data, setData] = useState<TeamMember | null>(null);
  // removed unused isMobile state

  useEffect(() => {
    const slug = params.slug as string;
    if (!slug) return;

    const teamMember = getTeamMemberBySlug(slug);
    setData(teamMember || null);
  }, [params]);

  if (!data) return <p style={{ textAlign: "center" }}>Loading…</p>;

  // Enhanced structured data for team member
  const teamMemberStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    jobTitle: data.role,
    description: data.description,
    image: data.image.startsWith("/")
      ? `https://www.tapovanswisscampsofficial.com${data.image}`
      : data.image,
    worksFor: {
      "@type": "Organization",
      name: "Tapovan Swiss Camps",
      url: "https://www.tapovanswisscampsofficial.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rishikesh",
        addressRegion: "Uttarakhand",
        addressCountry: "India",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rishikesh",
      addressRegion: "Uttarakhand",
      addressCountry: "India",
    },
    ...(data.experience && { experience: data.experience }),
    ...(data.education && { education: data.education }),
    ...(data.expertise && { knowsAbout: data.expertise }),
    sameAs: [
      data.socialLinks.facebook !== "#" ? data.socialLinks.facebook : null,
      data.socialLinks.twitter !== "#" ? data.socialLinks.twitter : null,
      data.socialLinks.instagram !== "#" ? data.socialLinks.instagram : null,
    ].filter(Boolean),
  };

  // Additional FAQ schema for team member
  const teamFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How can I contact ${data.name} at Tapovan Swiss Camps?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can contact ${
            data.name
          }, our ${data.role.toLowerCase()}, through WhatsApp, Facebook, or Instagram. ${
            data.name
          } specializes in ${
            data.specialties?.join(", ") ||
            "guest services and camping operations"
          } and is available to assist with your Rishikesh camping and adventure needs.`,
        },
      },
      {
        "@type": "Question",
        name: `What services does ${data.name} provide at Tapovan Swiss Camps?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `As our ${data.role.toLowerCase()}, ${
            data.name
          } provides expert assistance with luxury camping bookings, adventure activities, and personalized guest services. With ${
            data.experience || "extensive"
          } experience in ${
            data.expertise?.join(", ") || "hospitality and camping operations"
          }, ${data.name} ensures exceptional experiences for all guests.`,
        },
      },
      {
        "@type": "Question",
        name: `What makes ${data.name} an expert in Rishikesh camping?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${data.name} brings ${
            data.experience || "extensive"
          } experience in ${
            data.expertise?.join(", ") || "hospitality and camping operations"
          } to Tapovan Swiss Camps. ${
            data.achievements?.join(". ") ||
            "With a proven track record of excellence"
          }, ${
            data.name
          } is dedicated to providing the best camping and adventure experiences in Rishikesh.`,
        },
      },
    ],
  };

  return (
    <>
      {/* Enhanced Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(teamMemberStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(teamFAQSchema)}
      </script>

      {/* Hero Section */}
      <section className="team-details-hero bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 py-16 py-md-20 py-lg-24 relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <div className="container relative z-10">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8">
              <div className="hero-content">
                <nav aria-label="breadcrumb" className="mb-4">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/" className="text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/team" className="text-decoration-none">
                        Our Team
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {data.name}
                    </li>
                  </ol>
                </nav>

                <div className="hero-info d-flex align-items-center mb-4">
                  <div className="hero-avatar me-4">
                    <Image
                      src={data.image}
                      alt={`${data.name} - ${data.role}`}
                      width={80}
                      height={80}
                      className="rounded-circle border border-3 border-primary-custom"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h1 className="display-5 display-md-4 display-lg-3 fw-bold text-dark mb-2">
                      {data.name}
                    </h1>
                    <p className="h4 text-primary-custom mb-0">{data.role}</p>
                  </div>
                </div>

                <div className="hero-stats d-flex gap-4 mb-4 flex-wrap">
                  {data.experience && (
                    <div className="stat-item">
                      <div className="h5 text-primary-custom mb-1">
                        {data.experience}
                      </div>
                      <small className="text-muted">Experience</small>
                    </div>
                  )}
                  <div className="stat-item">
                    <div className="h5 text-primary-custom mb-1">Rishikesh</div>
                    <small className="text-muted">Location</small>
                  </div>
                  <div className="stat-item">
                    <div className="h5 text-primary-custom mb-1">24/7</div>
                    <small className="text-muted">Available</small>
                  </div>
                </div>

                <div className="hero-social d-flex gap-3">
                  {data.socialLinks.facebook !== "#" && (
                    <Link
                      href={data.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link facebook d-flex align-items-center justify-content-center"
                    >
                      <i className="bx bxl-facebook"></i>
                    </Link>
                  )}
                  {data.socialLinks.instagram !== "#" && (
                    <Link
                      href={data.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link instagram d-flex align-items-center justify-content-center"
                    >
                      <i className="bx bxl-instagram"></i>
                    </Link>
                  )}
                  {data.socialLinks.whatsApp !== "#" && (
                    <Link
                      href={data.socialLinks.whatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link whatsapp d-flex align-items-center justify-content-center"
                    >
                      <i className="bx bxl-whatsapp"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="hero-image text-center">
                <Image
                  src={data.image}
                  alt={`${data.name} - ${data.role} at Tapovan Swiss Camps`}
                  width={400}
                  height={500}
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-5 py-md-6 py-lg-7">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="about-content">
                <h2 className="display-6 display-md-5 display-lg-4 fw-bold text-dark mb-4">
                  About{" "}
                  <span className="text-primary-custom">
                    {data.name.split(" ")[0]}
                  </span>
                </h2>
                <p className="lead text-muted mb-4">{data.description}</p>

                <div className="about-details">
                  <h3 className="h4 mb-3">Role at Tapovan Swiss Camps</h3>
                  <p className="mb-4">
                    As our <strong>{data.role.toLowerCase()}</strong>,{" "}
                    {data.name.split(" ")[0]} plays a crucial role in ensuring
                    our guests have an unforgettable camping experience in
                    Rishikesh. With expertise in{" "}
                    {data.expertise?.join(", ") ||
                      "hospitality and camping operations"}
                    , {data.name.split(" ")[0]} contributes to making Tapovan
                    Swiss Camps one of the{" "}
                    <strong>
                      top-rated luxury camping destinations near the Ganges
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="contact-card bg-light p-4 rounded-4 h-100">
                <h3 className="h5 mb-4">Contact {data.name.split(" ")[0]}</h3>
                <div className="contact-options">
                  {data.socialLinks.whatsApp !== "#" && (
                    <Link
                      href={data.socialLinks.whatsApp}
                      className="btn btn-success w-100 mb-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bxl-whatsapp me-2"></i>
                      WhatsApp
                    </Link>
                  )}
                  {data.socialLinks.facebook !== "#" && (
                    <Link
                      href={data.socialLinks.facebook}
                      className="btn btn-primary w-100 mb-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bxl-facebook me-2"></i>
                      Facebook
                    </Link>
                  )}
                  {data.socialLinks.instagram !== "#" && (
                    <Link
                      href={data.socialLinks.instagram}
                      className="btn btn-danger w-100 mb-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bxl-instagram me-2"></i>
                      Instagram
                    </Link>
                  )}
                </div>
                <div className="contact-info mt-4">
                  <div className="info-item d-flex align-items-center mb-2">
                    <i className="bx bx-map-pin text-primary-custom me-2"></i>
                    <small>Based in Rishikesh, Uttarakhand</small>
                  </div>
                  <div className="info-item d-flex align-items-center mb-2">
                    <i className="bx bx-time text-primary-custom me-2"></i>
                    <small>Available 24/7 for assistance</small>
                  </div>
                  <div className="info-item d-flex align-items-center">
                    <i className="bx bx-shield-check text-primary-custom me-2"></i>
                    <small>
                      Expert in{" "}
                      {data.specialties?.join(", ") || "guest services"}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Achievements Section */}
      {(data.expertise || data.achievements || data.specialties) && (
        <section className="expertise-section py-5 py-md-6 py-lg-7 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="display-6 display-md-5 display-lg-4 fw-bold text-dark mb-5 text-center">
                  <span className="text-primary-custom">Expertise</span> &
                  Achievements
                </h2>
              </div>
            </div>
            <div className="row g-4">
              {data.expertise && (
                <div className="col-12 col-md-4">
                  <div className="expertise-card bg-white p-4 rounded-4 shadow-sm h-100">
                    <div className="card-icon mb-3">
                      <i className="bx bx-star text-primary-custom"></i>
                    </div>
                    <h3 className="h5 mb-3">Areas of Expertise</h3>
                    <ul className="list-unstyled">
                      {data.expertise.map((skill, index) => (
                        <li key={index} className="mb-2">
                          <i className="bx bx-check text-success me-2"></i>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {data.specialties && (
                <div className="col-12 col-md-4">
                  <div className="expertise-card bg-white p-4 rounded-4 shadow-sm h-100">
                    <div className="card-icon mb-3">
                      <i className="bx bx-target-lock text-primary-custom"></i>
                    </div>
                    <h3 className="h5 mb-3">Specialties</h3>
                    <ul className="list-unstyled">
                      {data.specialties.map((specialty, index) => (
                        <li key={index} className="mb-2">
                          <i className="bx bx-check text-success me-2"></i>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {data.achievements && (
                <div className="col-12 col-md-4">
                  <div className="expertise-card bg-white p-4 rounded-4 shadow-sm h-100">
                    <div className="card-icon mb-3">
                      <i className="bx bx-trophy text-primary-custom"></i>
                    </div>
                    <h3 className="h5 mb-3">Key Achievements</h3>
                    <ul className="list-unstyled">
                      {data.achievements.map((achievement, index) => (
                        <li key={index} className="mb-2">
                          <i className="bx bx-check text-success me-2"></i>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="testimonials-section py-5 py-md-6 py-lg-7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="display-6 display-md-5 display-lg-4 fw-bold text-dark mb-5">
                What Guests Say About{" "}
                <span className="text-primary-custom">
                  {data.name.split(" ")[0]}
                </span>
              </h2>
              <div className="testimonial-card bg-light p-5 rounded-4">
                <div className="testimonial-quote mb-4">
                  <i className="bx bxs-quote-alt-left display-4 text-primary-custom"></i>
                </div>
                <blockquote className="h5 mb-4">
                  &quot;The team at Tapovan Swiss Camps made our stay
                  exceptional. {data.name.split(" ")[0]} went above and beyond
                  to ensure we had everything we needed for our adventure. The
                  level of service and attention to detail was
                  outstanding!&quot;
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="h6 mb-1">Happy Guest</h4>
                    <p className="text-muted mb-0">Google Review - 5 Stars</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 py-md-6 py-lg-7 bg-primary-custom text-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="cta-content">
                <div className="cta-icon mb-4">
                  <i className="bx bx-phone-call display-1 text-white"></i>
                </div>
                <h2 className="display-5 display-md-4 display-lg-3 fw-bold mb-4">
                  Ready to Connect with{" "}
                  <span className="text-warning">
                    {data.name.split(" ")[0]}?
                  </span>
                </h2>
                <p className="lead mb-5 mb-md-6">
                  {data.name} is here to help you plan the perfect camping
                  experience in Rishikesh. Contact {data.name.split(" ")[0]}{" "}
                  today for personalized assistance and expert recommendations.
                </p>
                <div className="cta-buttons">
                  {data.socialLinks.whatsApp !== "#" && (
                    <Link
                      href={data.socialLinks.whatsApp}
                      className="btn btn-light btn-lg px-5 py-3 rounded-pill me-3 mb-3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bxl-whatsapp me-2"></i>
                      WhatsApp {data.name.split(" ")[0]}
                    </Link>
                  )}
                  <Link
                    href="/team"
                    className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill mb-3"
                  >
                    <i className="bx bx-group me-2"></i>
                    Meet Our Full Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetailsPage;
