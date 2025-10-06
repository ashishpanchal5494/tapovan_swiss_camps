"use client";

import React, { useEffect, useState } from "react";

import Loading from "@/components/Loading";
import Link from "next/link";

function SamplePage() {
  const [isClient, setIsClient] = useState(false);
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
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  return (
    <div className={isMobile ? "page-content ptb-200" : "page-content ptb-60"}>
      {/* Hero Section */}
      <section className="sample-hero bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 py-16 py-md-20 py-lg-24 relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="hero-content">
                <div className="hero-icon mb-4">
                  <i className="bx bx-tent display-1 text-primary-custom"></i>
                </div>
                <h1 className="display-4 display-md-3 display-lg-2 fw-bold text-dark mb-4 mb-md-5">
                  Welcome to{" "}
                  <span className="text-primary-custom">
                    Tapovan Swiss Camps
                  </span>
                </h1>
                <p className="lead text-muted mb-5 mb-md-6 px-2 px-md-0">
                  Experience the perfect blend of{" "}
                  <strong className="text-primary-custom">
                    luxury and nature
                  </strong>{" "}
                  at our premium Swiss tent accommodations in the heart of
                  Rishikesh. Your gateway to adventure and tranquility awaits.
                </p>
                <div className="hero-stats d-flex justify-content-center gap-3 gap-md-4 gap-lg-5 mb-5 flex-wrap">
                  <div className="stat-item text-center">
                    <div className="h4 h3-md text-primary-custom mb-1">4+</div>
                    <small className="text-muted">Years Experience</small>
                  </div>
                  <div className="stat-item text-center">
                    <div className="h4 h3-md text-primary-custom mb-1">
                      3500+
                    </div>
                    <small className="text-muted">Happy Guests</small>
                  </div>
                  <div className="stat-item text-center">
                    <div className="h4 h3-md text-primary-custom mb-1">
                      24/7
                    </div>
                    <small className="text-muted">Support</small>
                  </div>
                  <div className="stat-item text-center">
                    <div className="h4 h3-md text-primary-custom mb-1">5★</div>
                    <small className="text-muted">Rating</small>
                  </div>
                </div>
                <div className="hero-cta">
                  <Link
                    className="btn btn-primary-custom btn-lg px-5 py-3 rounded-pill me-3 mb-3"
                    href="/booking-form"
                  >
                    <i className="bx bx-calendar-check me-2"></i>
                    Book Your Stay
                  </Link>
                  <Link
                    className="btn btn-outline-primary-custom btn-lg px-5 py-3 rounded-pill mb-3"
                    href="/gallery"
                  >
                    <i className="bx bx-images me-2"></i>
                    View Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Why Choose Us */}
        <section className="why-choose-section py-5 py-md-6 py-lg-7">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="display-6 display-md-5 display-lg-4 fw-bold text-dark mb-3">
                Why Choose{" "}
                <span className="text-primary-custom">
                  Tapovan Swiss Camps?
                </span>
              </h2>
              <p className="lead text-muted">
                Discover what makes us the premier choice for luxury camping in
                Rishikesh
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-card bg-white p-4 rounded-4 shadow-sm h-100">
                <div className="feature-icon mb-3">
                  <i className="bx bx-home-heart text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Luxury Swiss Tents</h4>
                <p className="text-muted mb-0">
                  Premium Swiss tents with private bathrooms, comfortable
                  bedding, and modern amenities for a perfect stay.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-card bg-white p-4 rounded-4 shadow-sm h-100">
                <div className="feature-icon mb-3">
                  <i className="bx bx-mountain text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Breathtaking Views</h4>
                <p className="text-muted mb-0">
                  Surrounded by nature with stunning Himalayan views and the
                  serene Ganga river flowing nearby.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-card bg-white p-4 rounded-4 shadow-sm h-100">
                <div className="feature-icon mb-3">
                  <i className="bx bx-fire text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Bonfire & Music</h4>
                <p className="text-muted mb-0">
                  Magical bonfire nights with live music sessions under the
                  starlit sky for unforgettable memories.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-card bg-white p-4 rounded-4 shadow-sm h-100">
                <div className="feature-icon mb-3">
                  <i className="bx bx-yoga text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Yoga & Meditation</h4>
                <p className="text-muted mb-0">
                  Dedicated yoga sessions and peaceful meditation spaces for
                  spiritual rejuvenation and wellness.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-card bg-white p-4 rounded-4 shadow-sm h-100">
                <div className="feature-icon mb-3">
                  <i className="bx bx-water text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Adventure Access</h4>
                <p className="text-muted mb-0">
                  Perfectly located near the Ganga river and rafting start
                  points for easy access to water adventures.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature-card bg-white p-4 rounded-4 shadow-sm h-100">
                <div className="feature-icon mb-3">
                  <i className="bx bx-shield-check text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Safe & Secure</h4>
                <p className="text-muted mb-0">
                  24/7 security, professional staff, and safety protocols ensure
                  a worry-free camping experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="activities-section py-5 py-md-6 py-lg-7 bg-light">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="display-6 display-md-5 display-lg-4 fw-bold text-dark mb-3">
                Adventure &{" "}
                <span className="text-primary-custom">Activities</span>
              </h2>
              <p className="lead text-muted">
                From thrilling water sports to peaceful nature walks, discover
                endless adventures
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="activity-card bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                <div className="activity-icon mb-3">
                  <i className="bx bx-water text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">River Rafting</h4>
                <p className="text-muted mb-3">
                  Experience the thrill of white-water rafting on the mighty
                  Ganges with professional guides.
                </p>
                <div className="activity-badge">
                  <span className="badge bg-primary-custom">Adventure</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="activity-card bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                <div className="activity-icon mb-3">
                  <i className="bx bx-walk text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Nature Walks</h4>
                <p className="text-muted mb-3">
                  Explore scenic hiking trails and nature walks through the
                  beautiful Himalayan foothills.
                </p>
                <div className="activity-badge">
                  <span className="badge bg-success">Nature</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="activity-card bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                <div className="activity-icon mb-3">
                  <i className="bx bx-sun text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Sunrise Yoga</h4>
                <p className="text-muted mb-3">
                  Start your day with peaceful yoga sessions as the sun rises
                  over the mountains.
                </p>
                <div className="activity-badge">
                  <span className="badge bg-info">Wellness</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="activity-card bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                <div className="activity-icon mb-3">
                  <i className="bx bx-fire text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Campfire Evenings</h4>
                <p className="text-muted mb-3">
                  Gather around the campfire under the starlit sky for stories,
                  music, and camaraderie.
                </p>
                <div className="activity-badge">
                  <span className="badge bg-warning">Social</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="activity-card bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                <div className="activity-icon mb-3">
                  <i className="bx bx-church text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Temple Visits</h4>
                <p className="text-muted mb-3">
                  Visit nearby temples and the famous Beatles Ashram for
                  spiritual and cultural experiences.
                </p>
                <div className="activity-badge">
                  <span className="badge bg-secondary">Cultural</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="activity-card bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                <div className="activity-icon mb-3">
                  <i className="bx bx-camera text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Photography</h4>
                <p className="text-muted mb-3">
                  Capture stunning moments with breathtaking views of mountains,
                  rivers, and nature.
                </p>
                <div className="activity-badge">
                  <span className="badge bg-dark">Creative</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section py-5 py-md-6 py-lg-7">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="display-6 display-md-5 display-lg-4 fw-bold text-dark mb-3">
                What Our <span className="text-primary-custom">Guests Say</span>
              </h2>
              <p className="lead text-muted">
                Real experiences from our happy campers who made unforgettable
                memories
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="testimonial-card bg-white p-4 rounded-4 shadow-sm h-100">
                <div className="testimonial-header d-flex align-items-center mb-3">
                  <div className="testimonial-avatar me-3">
                    <div className="avatar-circle bg-primary-custom text-white d-flex align-items-center justify-content-center">
                      <i className="bx bx-user"></i>
                    </div>
                  </div>
                  <div>
                    <h5 className="h6 mb-1">Neha M.</h5>
                    <div className="rating">
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                    </div>
                  </div>
                </div>
                <blockquote className="testimonial-text mb-0">
                  <i className="bx bxs-quote-alt-left text-primary-custom me-2"></i>
                  "A peaceful escape from the city — the tents were clean, food
                  was great, and the team was super welcoming! The bonfire
                  evening was magical."
                  <i className="bx bxs-quote-alt-right text-primary-custom ms-2"></i>
                </blockquote>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="testimonial-card bg-white p-4 rounded-4 shadow-sm h-100">
                <div className="testimonial-header d-flex align-items-center mb-3">
                  <div className="testimonial-avatar me-3">
                    <div className="avatar-circle bg-primary-custom text-white d-flex align-items-center justify-content-center">
                      <i className="bx bx-user"></i>
                    </div>
                  </div>
                  <div>
                    <h5 className="h6 mb-1">Ankit R.</h5>
                    <div className="rating">
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                    </div>
                  </div>
                </div>
                <blockquote className="testimonial-text mb-0">
                  <i className="bx bxs-quote-alt-left text-primary-custom me-2"></i>
                  "Loved the bonfire evenings and yoga mornings. The location is
                  perfect for adventure activities. Would definitely come back!"
                  <i className="bx bxs-quote-alt-right text-primary-custom ms-2"></i>
                </blockquote>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="testimonial-card bg-white p-4 rounded-4 shadow-sm h-100">
                <div className="testimonial-header d-flex align-items-center mb-3">
                  <div className="testimonial-avatar me-3">
                    <div className="avatar-circle bg-primary-custom text-white d-flex align-items-center justify-content-center">
                      <i className="bx bx-user"></i>
                    </div>
                  </div>
                  <div>
                    <h5 className="h6 mb-1">Priya S.</h5>
                    <div className="rating">
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                    </div>
                  </div>
                </div>
                <blockquote className="testimonial-text mb-0">
                  <i className="bx bxs-quote-alt-left text-primary-custom me-2"></i>
                  "The Swiss tents are incredibly comfortable and the views are
                  breathtaking. Perfect for a romantic getaway or family
                  vacation."
                  <i className="bx bxs-quote-alt-right text-primary-custom ms-2"></i>
                </blockquote>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="testimonial-card bg-white p-4 rounded-4 shadow-sm h-100">
                <div className="testimonial-header d-flex align-items-center mb-3">
                  <div className="testimonial-avatar me-3">
                    <div className="avatar-circle bg-primary-custom text-white d-flex align-items-center justify-content-center">
                      <i className="bx bx-user"></i>
                    </div>
                  </div>
                  <div>
                    <h5 className="h6 mb-1">Rajesh K.</h5>
                    <div className="rating">
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                      <i className="bx bxs-star text-warning"></i>
                    </div>
                  </div>
                </div>
                <blockquote className="testimonial-text mb-0">
                  <i className="bx bxs-quote-alt-left text-primary-custom me-2"></i>
                  "Amazing experience! The rafting was thrilling and the staff
                  was very professional. Great value for money and unforgettable
                  memories."
                  <i className="bx bxs-quote-alt-right text-primary-custom ms-2"></i>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="location-section py-5 py-md-6 py-lg-7 bg-light">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="display-6 display-md-5 display-lg-4 fw-bold text-dark mb-3">
                How to <span className="text-primary-custom">Reach Us</span>
              </h2>
              <p className="lead text-muted">
                Conveniently located in the heart of Rishikesh with easy access
                from major cities
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="location-card bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                <div className="location-icon mb-3">
                  <i className="bx bx-map-pin text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Perfect Location</h4>
                <p className="text-muted mb-0">
                  Located in Tapovan, just 1.5 km from Laxman Jhula and 20 km
                  from Dehradun Airport.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="location-card bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                <div className="location-icon mb-3">
                  <i className="bx bx-car text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Easy Access</h4>
                <p className="text-muted mb-0">
                  Well-connected by road from Haridwar, Rishikesh, and other
                  major cities in Uttarakhand.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="location-card bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                <div className="location-icon mb-3">
                  <i className="bx bx-water text-primary-custom"></i>
                </div>
                <h4 className="h5 mb-3">Riverside Setting</h4>
                <p className="text-muted mb-0">
                  Close to the Ganga river and rafting start points for easy
                  access to water adventures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta-section py-5 py-md-6 py-lg-7 bg-primary-custom text-white">
          <div className="container mx-auto px-4">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-md-10 col-lg-8">
                <div className="cta-content">
                  <div className="cta-icon mb-4">
                    <i className="bx bx-calendar-check display-1 text-white"></i>
                  </div>
                  <h2 className="display-5 display-md-4 display-lg-3 fw-bold mb-4">
                    Ready for Your{" "}
                    <span className="text-warning">Adventure?</span>
                  </h2>
                  <p className="lead mb-5 mb-md-6">
                    Don't wait! Book your stay at Tapovan Swiss Camps and create
                    unforgettable memories in the lap of nature. Limited
                    availability during peak season.
                  </p>
                  <div className="cta-buttons">
                    <Link
                      className="btn btn-light btn-lg px-5 py-3 rounded-pill me-3 mb-3"
                      href="/booking-form"
                    >
                      <i className="bx bx-calendar-check me-2"></i>
                      Book Your Stay Now
                    </Link>
                    <Link
                      className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill mb-3"
                      href="/contact"
                    >
                      <i className="bx bx-phone me-2"></i>
                      Call Us Now
                    </Link>
                  </div>
                  <div className="cta-features mt-5">
                    <div className="row g-3">
                      <div className="col-6 col-md-3">
                        <div className="feature-item">
                          <i className="bx bx-check-circle text-warning me-2"></i>
                          <small>Free Cancellation</small>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="feature-item">
                          <i className="bx bx-check-circle text-warning me-2"></i>
                          <small>Best Price Guarantee</small>
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
                          <small>Instant Confirmation</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SamplePage;
