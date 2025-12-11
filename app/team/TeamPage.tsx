"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { teamMembers } from "./teamData";
import { usePathname } from "next/navigation";

const Loading = dynamic(() => import("@/components/Loading"), { ssr: false });

// Optimize Dynamic Import
const TeamCard = dynamic(() => import("@/components/TeamCard"), {
  ssr: false,
  loading: () => <Loading />,
});

const TeamPage: React.FC = () => {
  const pathname = usePathname();
  const showBreadcrumb = pathname === "/team";
  // Generate Person schema for each team member
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tapovan Swiss Camps",
    url: "https://tapovanswisscampsofficial.com",
    logo: "https://tapovanswisscampsofficial.com/assets/img/logo.png",
    employee: teamMembers.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      description: member.description,
      image: `https://tapovanswisscampsofficial.com/${member.image}`,

      sameAs: Object.values(member.socialLinks).filter((link) => link !== "#"),
    })),
  };

  return (
    <>
      {/* Organization & Team Schema */}
      <script type="application/ld+json">{JSON.stringify(teamSchema)}</script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://tapovanswisscampsofficial.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Our Team",
              item: "https://tapovanswisscampsofficial.com/team",
            },
          ],
        })}
      </script>

      {/* Hero Section */}

      {/* Breadcrumb Navigation */}
      {/* <section className="breadcrumb-section py-3 bg-light">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Our Team
              </li>
            </ol>
          </nav>
        </div>
      </section> */}

      {/* Team Members Section */}
      <section className="team-members-section py-5 py-md-6 py-lg-7">
        {showBreadcrumb && (
          <nav aria-label="breadcrumb" className="container mb-2 mb-md-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Our Team
              </li>
            </ol>
          </nav>
        )}
        <div
          className=" pt-40 team-hero bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 py-16 py-md-20 py-lg-24 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(80, 118, 80, 0.1) 0%, rgba(107, 155, 107, 0.1) 25%, rgba(139, 176, 139, 0.1) 50%, rgba(255, 215, 0, 0.05) 75%, rgba(248, 255, 254, 0.9) 100%)",
          }}
        >
          <div className="hero-pattern absolute inset-0 opacity-10"></div>
          <div className="container relative z-10">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-md-10 col-lg-8">
                <div className="hero-content">
                  <div className="hero-icon mb-4">
                    <i className="bx bx-group display-1 text-primary-custom"></i>
                  </div>
                  <h1 className="display-4 display-md-3 display-lg-2 fw-bold text-dark mb-4 mb-md-5">
                    Meet Our{" "}
                    <span className="text-primary-custom">Expert Team</span>
                  </h1>
                  <p className="lead text-muted mb-5 mb-md-6 px-2 px-md-0">
                    The passionate professionals behind your unforgettable{" "}
                    <strong className="text-primary-custom">
                      Rishikesh camping experience
                    </strong>
                    . Our dedicated team combines local expertise with
                    international standards to create magical moments by the
                    Ganges.
                  </p>
                  <div className="hero-stats d-flex justify-content-center gap-3 gap-md-4 gap-lg-5 mb-5 flex-wrap">
                    <div className="stat-item text-center">
                      <div className="h4 h3-md text-primary-custom mb-1">4</div>
                      <small className="text-muted">Expert Team Members</small>
                    </div>
                    <div className="stat-item text-center">
                      <div className="h4 h3-md text-primary-custom mb-1">
                        15+
                      </div>
                      <small className="text-muted">
                        Years Combined Experience
                      </small>
                    </div>
                    <div className="stat-item text-center">
                      <div className="h4 h3-md text-primary-custom mb-1">
                        24/7
                      </div>
                      <small className="text-muted">Support Available</small>
                    </div>
                    <div className="stat-item text-center">
                      <div className="h4 h3-md text-primary-custom mb-1">
                        100%
                      </div>
                      <small className="text-muted">Guest Satisfaction</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="display-6 display-md-5 display-lg-4 fw-bold text-dark mb-3">
                Our <span className="text-primary-custom">Leadership Team</span>
              </h2>
              <p className="lead text-muted">
                Meet the passionate professionals who make Tapovan Swiss Camps
                the premier luxury camping destination in Rishikesh
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section
        className="team-values-section py-5 py-md-6 py-lg-7 bg-light"
        style={{
          background:
            "linear-gradient(135deg, rgba(248, 255, 254, 0.8) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(248, 255, 254, 0.8) 100%)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="display-6 display-md-5 display-lg-4 fw-bold text-dark mb-3">
                Our <span className="text-primary-custom">Core Values</span>
              </h2>
              <p className="lead text-muted">
                The principles that guide our team and shape your experience at
                Tapovan Swiss Camps
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-6 col-md-6 col-lg-3">
              <div className="value-card bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                <div className="value-icon mb-3">
                  <i className="bx bx-heart text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Passion</h4>
                <p className="text-muted mb-0">
                  We&apos;re passionate about creating unforgettable camping
                  experiences in the heart of nature.
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="value-card bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                <div className="value-icon mb-3">
                  <i className="bx bx-shield text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Excellence</h4>
                <p className="text-muted mb-0">
                  We maintain the highest standards of service and hospitality
                  for every guest.
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="value-card bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                <div className="value-icon mb-3">
                  <i className="bx bx-leaf text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Sustainability</h4>
                <p className="text-muted mb-0">
                  We&apos;re committed to eco-friendly practices and preserving
                  the natural beauty of Rishikesh.
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="value-card bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                <div className="value-icon mb-3">
                  <i className="bx bx-group text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Community</h4>
                <p className="text-muted mb-0">
                  We believe in building lasting relationships with our guests
                  and local community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Team Section */}
      <section
        className="contact-team-section py-5 py-md-6 py-lg-7 bg-primary-custom text-white"
        style={{
          background:
            "linear-gradient(135deg, #507650 0%, #6B9B6B 50%, #8BB08B 100%)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="cta-content">
                <div className="cta-icon mb-3 mb-md-4">
                  <i className="bx bx-phone-call h1 d-md-none text-white"></i>
                  <i className="bx bx-phone-call display-1 d-none d-md-block text-white"></i>
                </div>
                <h2 className="h4 d-md-none fw-bold mb-3 mb-md-4">
                  Ready to <span className="text-warning">Connect?</span>
                </h2>
                <h2 className="display-5 display-md-4 display-lg-3 d-none d-md-block fw-bold mb-4">
                  Ready to <span className="text-warning">Connect?</span>
                </h2>
                <p className="small d-md-none mb-4 mb-md-5 mb-lg-6">
                  Our team is here to help you plan the perfect camping
                  experience in Rishikesh. Contact us today for personalized
                  assistance and expert recommendations.
                </p>
                <p className="lead d-none d-md-block mb-5 mb-md-6">
                  Our team is here to help you plan the perfect camping
                  experience in Rishikesh. Contact us today for personalized
                  assistance and expert recommendations.
                </p>
                <div className="cta-buttons d-flex flex-nowrap justify-content-center gap-2 gap-md-3">
                  <a
                    href="tel:+919205182131"
                    className="btn btn-light btn-sm d-md-none px-3 py-2 rounded-pill"
                  >
                    <i className="bx bx-phone me-1"></i>
                    Call
                  </a>
                  <a
                    href="tel:+919205182131"
                    className="btn btn-light btn-lg d-none d-md-inline-block px-5 py-3 rounded-pill"
                  >
                    <i className="bx bx-phone me-2"></i>
                    Call Us Now
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=+919205182131&text=I have a query"
                    className="btn btn-outline-light btn-sm d-md-none px-3 py-2 rounded-pill"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-whatsapp me-1"></i>
                    WhatsApp
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=+919205182131&text=I have a query"
                    className="btn btn-outline-light btn-lg d-none d-md-inline-block px-5 py-3 rounded-pill"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-whatsapp me-2"></i>
                    WhatsApp Us
                  </a>
                </div>
                <div className="cta-features mt-5">
                  <div className="row g-3">
                    <div className="col-6 col-md-3">
                      <div className="feature-item">
                        <i className="bx bx-check-circle text-warning me-2"></i>
                        <small>Instant Response</small>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="feature-item">
                        <i className="bx bx-check-circle text-warning me-2"></i>
                        <small>Expert Guidance</small>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="feature-item">
                        <i className="bx bx-check-circle text-warning me-2"></i>
                        <small>24/7 Support</small>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="feature-item">
                        <i className="bx bx-check-circle text-warning me-2"></i>
                        <small>Personalized Service</small>
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

export default TeamPage;
