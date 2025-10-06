"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import Loading from "@/components/Loading";

function PrivacyPolicyPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  const privacyFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What information does Tapovan Swiss Camps collect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We collect personal details like name, email, phone number, booking information, payment details, and technical data about your device and browser when you use our website for camping bookings in Rishikesh.",
        },
      },
      {
        "@type": "Question",
        name: "How is my payment information secured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use industry-standard SSL/TLS encryption and PCI-compliant payment processors (Razorpay, Stripe) to ensure your payment information is always protected during camping bookings.",
        },
      },
      {
        "@type": "Question",
        name: "Can I request deletion of my personal data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can request access, correction, or deletion of your personal data by contacting us at info@tapovanswisscamp.com, subject to legal requirements and booking records.",
        },
      },
      {
        "@type": "Question",
        name: "Do you use cookies on your camping website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we use essential cookies for website functionality, analytics cookies for performance improvement, and optional marketing cookies for personalized camping offers.",
        },
      },
      {
        "@type": "Question",
        name: "Is Tapovan Swiss Camps GDPR compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we follow GDPR principles for data protection, including user rights, data minimization, and secure processing of personal information for camping services.",
        },
      },
      {
        "@type": "Question",
        name: "How long do you keep my camping booking data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We retain your booking data for as long as necessary to provide services, comply with legal obligations, and resolve disputes, typically 7 years for financial records.",
        },
      },
    ],
  };

  const privacyPolicySchema = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    name: "Privacy Policy - Tapovan Swiss Camps",
    description:
      "Comprehensive privacy policy for Tapovan Swiss Camps Rishikesh covering data protection, security measures, and user rights for camping bookings.",
    url: "https://www.tapovanswisscampsofficial.com/privacy-policy",
    dateModified: "2024-12-15",
    publisher: {
      "@type": "Organization",
      name: "Tapovan Swiss Camps",
      url: "https://www.tapovanswisscampsofficial.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Main Tapovan",
        addressLocality: "Rishikesh",
        addressRegion: "Uttarakhand",
        addressCountry: "India",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@tapovanswisscamp.com",
        contactType: "Privacy Officer",
      },
    },
    about: {
      "@type": "Thing",
      name: "Data Protection and Privacy",
      description:
        "Privacy policy covering personal data collection, usage, security, and user rights for camping and rafting services in Rishikesh",
    },
  };

  const breadcrumbSchema = {
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
        name: "Privacy Policy",
        item: "https://tapovanswisscampsofficial.com/privacy-policy",
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyFAQSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacyPolicySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="privacy-hero bg-gradient-to-br from-blue-50 to-green-50 py-12 py-md-16 py-lg-20">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="hero-content">
                <div className="privacy-icon mb-4">
                  <i className="bx bx-shield-check display-1 text-primary-custom"></i>
                </div>
                <h1 className="display-6 display-md-5 display-lg-4 fw-bold text-dark mb-3 mb-md-4">
                  Privacy Policy
                </h1>
                <p className="lead text-muted mb-4 mb-md-5 px-2 px-md-0">
                  Your privacy and data security are our top priorities at{" "}
                  <span className="text-primary-custom fw-semibold">
                    Tapovan Swiss Camps
                  </span>
                  . Learn how we protect your personal information and ensure
                  secure booking experiences.
                </p>
                <div className="hero-stats d-flex justify-content-center gap-2 gap-md-3 gap-lg-4 mb-4 flex-wrap">
                  <div className="stat-item text-center px-2">
                    <div className="h5 h4-md text-primary-custom mb-1">SSL</div>
                    <small className="text-muted">Encrypted</small>
                  </div>
                  <div className="stat-item text-center px-2">
                    <div className="h5 h4-md text-primary-custom mb-1">PCI</div>
                    <small className="text-muted">Compliant</small>
                  </div>
                  <div className="stat-item text-center px-2">
                    <div className="h5 h4-md text-primary-custom mb-1">
                      GDPR
                    </div>
                    <small className="text-muted">Ready</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="breadcrumb-section py-3 bg-light">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Privacy Policy
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="toc-section py-4 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="toc-box bg-light rounded-4 p-4">
                <h3 className="h5 mb-3 text-center">
                  <i className="bx bx-list-ul me-2"></i>
                  Quick Navigation
                </h3>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2">
                        <a
                          href="#information-collection"
                          className="text-decoration-none"
                        >
                          <i className="bx bx-chevron-right me-2"></i>
                          Information We Collect
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="#data-usage" className="text-decoration-none">
                          <i className="bx bx-chevron-right me-2"></i>
                          How We Use Your Data
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="#cookies-tracking"
                          className="text-decoration-none"
                        >
                          <i className="bx bx-chevron-right me-2"></i>
                          Cookies & Tracking
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="#third-party" className="text-decoration-none">
                          <i className="bx bx-chevron-right me-2"></i>
                          Third-Party Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2">
                        <a
                          href="#data-security"
                          className="text-decoration-none"
                        >
                          <i className="bx bx-chevron-right me-2"></i>
                          Data Security
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="#your-rights" className="text-decoration-none">
                          <i className="bx bx-chevron-right me-2"></i>
                          Your Rights
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="#children-privacy"
                          className="text-decoration-none"
                        >
                          <i className="bx bx-chevron-right me-2"></i>
                          Children&apos;s Privacy
                        </a>
                      </li>
                      <li className="mb-2">
                        <a href="#contact-us" className="text-decoration-none">
                          <i className="bx bx-chevron-right me-2"></i>
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content py-4 py-md-5 py-lg-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <article
                itemScope
                itemType="https://schema.org/PrivacyPolicy"
                className="privacy-content"
              >
                <div className="intro-section mb-5">
                  <p className="lead" itemProp="description">
                    At <strong itemProp="publisher">Tapovan Swiss Camps</strong>
                    , your privacy is of utmost importance. This comprehensive
                    policy outlines how we collect, use, and protect your
                    personal data when you visit our website:{" "}
                    <strong>https://www.tapovanswisscampsofficial.com</strong>.
                  </p>
                  <div className="last-updated-box bg-primary-custom text-white p-3 rounded-3 mb-4">
                    <div className="d-flex align-items-center">
                      <i className="bx bx-calendar me-3"></i>
                      <div>
                        <strong>Last Updated:</strong>{" "}
                        <span itemProp="dateModified">December 15, 2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 1 */}
                <section
                  id="information-collection"
                  itemScope
                  itemType="https://schema.org/WebPageElement"
                  className="privacy-section mb-5"
                >
                  <div className="section-header d-flex align-items-center mb-4">
                    <div className="section-icon me-3">
                      <i className="bx bx-data text-primary-custom"></i>
                    </div>
                    <h2 itemProp="name" className="h3 mb-0">
                      1. Information We Collect
                    </h2>
                  </div>
                  <div className="section-content">
                    <p itemProp="text" className="mb-4">
                      When you interact with our website or book with us, we
                      collect the following types of information:
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="info-card bg-light p-4 rounded-3 mb-3">
                          <h4 className="h6 text-primary-custom mb-3">
                            <i className="bx bx-user me-2"></i>
                            Personal Information
                          </h4>
                          <ul className="list-unstyled mb-0">
                            <li className="mb-2">
                              <i className="bx bx-check text-success me-2"></i>
                              Full name and contact details
                            </li>
                            <li className="mb-2">
                              <i className="bx bx-check text-success me-2"></i>
                              Email address and phone number
                            </li>
                            <li className="mb-2">
                              <i className="bx bx-check text-success me-2"></i>
                              Billing and payment information
                            </li>
                            <li className="mb-2">
                              <i className="bx bx-check text-success me-2"></i>
                              Booking preferences and dates
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="info-card bg-light p-4 rounded-3 mb-3">
                          <h4 className="h6 text-primary-custom mb-3">
                            <i className="bx bx-devices me-2"></i>
                            Technical Information
                          </h4>
                          <ul className="list-unstyled mb-0">
                            <li className="mb-2">
                              <i className="bx bx-check text-success me-2"></i>
                              Device type and browser information
                            </li>
                            <li className="mb-2">
                              <i className="bx bx-check text-success me-2"></i>
                              IP address and location data
                            </li>
                            <li className="mb-2">
                              <i className="bx bx-check text-success me-2"></i>
                              Website usage patterns
                            </li>
                            <li className="mb-2">
                              <i className="bx bx-check text-success me-2"></i>
                              Cookies and tracking data
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section
                  id="data-usage"
                  itemScope
                  itemType="https://schema.org/WebPageElement"
                  className="privacy-section mb-5"
                >
                  <div className="section-header d-flex align-items-center mb-4">
                    <div className="section-icon me-3">
                      <i className="bx bx-cog text-primary-custom"></i>
                    </div>
                    <h2 itemProp="name" className="h3 mb-0">
                      2. How We Use Your Information
                    </h2>
                  </div>
                  <div className="section-content">
                    <p itemProp="text" className="mb-4">
                      We use your personal data for the following legitimate
                      business purposes:
                    </p>
                    <div className="usage-grid">
                      <div className="usage-item d-flex align-items-start mb-4">
                        <div className="usage-icon me-3">
                          <i className="bx bx-calendar-check text-primary-custom"></i>
                        </div>
                        <div>
                          <h4 className="h6 mb-2">Booking Management</h4>
                          <p className="mb-0">
                            Process and confirm your camping reservations,
                            manage check-ins and check-outs, and provide
                            customer support.
                          </p>
                        </div>
                      </div>
                      <div className="usage-item d-flex align-items-start mb-4">
                        <div className="usage-icon me-3">
                          <i className="bx bx-envelope text-primary-custom"></i>
                        </div>
                        <div>
                          <h4 className="h6 mb-2">Communication</h4>
                          <p className="mb-0">
                            Send booking confirmations, important updates, and
                            promotional offers (only with your consent).
                          </p>
                        </div>
                      </div>
                      <div className="usage-item d-flex align-items-start mb-4">
                        <div className="usage-icon me-3">
                          <i className="bx bx-trending-up text-primary-custom"></i>
                        </div>
                        <div>
                          <h4 className="h6 mb-2">Service Improvement</h4>
                          <p className="mb-0">
                            Analyze usage patterns to enhance our website,
                            services, and customer experience.
                          </p>
                        </div>
                      </div>
                      <div className="usage-item d-flex align-items-start mb-4">
                        <div className="usage-icon me-3">
                          <i className="bx bx-shield text-primary-custom"></i>
                        </div>
                        <div>
                          <h4 className="h6 mb-2">Legal Compliance</h4>
                          <p className="mb-0">
                            Meet legal obligations, prevent fraud, and ensure
                            the security of our services.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3 */}
                <section
                  id="cookies-tracking"
                  itemScope
                  itemType="https://schema.org/WebPageElement"
                  className="privacy-section mb-5"
                >
                  <div className="section-header d-flex align-items-center mb-4">
                    <div className="section-icon me-3">
                      <i className="bx bx-cookie text-primary-custom"></i>
                    </div>
                    <h2 itemProp="name" className="h3 mb-0">
                      3. Cookies and Tracking
                    </h2>
                  </div>
                  <div className="section-content">
                    <p itemProp="text" className="mb-4">
                      We use cookies and similar technologies to enhance your
                      browsing experience and analyze website performance:
                    </p>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="cookie-card bg-success bg-opacity-10 p-4 rounded-3 mb-3">
                          <h4 className="h6 text-success mb-3">
                            <i className="bx bx-check-circle me-2"></i>
                            Essential Cookies
                          </h4>
                          <p className="mb-0 small">
                            Required for basic website functionality, security,
                            and user authentication.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="cookie-card bg-info bg-opacity-10 p-4 rounded-3 mb-3">
                          <h4 className="h6 text-info mb-3">
                            <i className="bx bx-bar-chart me-2"></i>
                            Analytics Cookies
                          </h4>
                          <p className="mb-0 small">
                            Help us understand how visitors interact with our
                            website to improve performance.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="cookie-card bg-warning bg-opacity-10 p-4 rounded-3 mb-3">
                          <h4 className="h6 text-warning mb-3">
                            <i className="bx bx-target-lock me-2"></i>
                            Marketing Cookies
                          </h4>
                          <p className="mb-0 small">
                            Used for personalized advertising and promotional
                            content (optional).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="cookie-notice bg-light p-4 rounded-3 mt-4">
                      <p className="mb-0">
                        <i className="bx bx-info-circle text-primary-custom me-2"></i>
                        <strong>Cookie Control:</strong> You can manage your
                        cookie preferences through your browser settings or our
                        cookie consent banner.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 4 */}
                <section
                  id="third-party"
                  itemScope
                  itemType="https://schema.org/WebPageElement"
                  className="privacy-section mb-5"
                >
                  <div className="section-header d-flex align-items-center mb-4">
                    <div className="section-icon me-3">
                      <i className="bx bx-link-external text-primary-custom"></i>
                    </div>
                    <h2 itemProp="name" className="h3 mb-0">
                      4. Third-Party Services
                    </h2>
                  </div>
                  <div className="section-content">
                    <p itemProp="text" className="mb-4">
                      We work with trusted third-party service providers to
                      enhance our services:
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="service-card border p-4 rounded-3 mb-3">
                          <h4 className="h6 mb-3">
                            <i className="bx bx-credit-card text-primary-custom me-2"></i>
                            Payment Processors
                          </h4>
                          <ul className="list-unstyled mb-0">
                            <li className="mb-2">• Razorpay (India)</li>
                            <li className="mb-2">• Stripe (International)</li>
                            <li className="mb-2">• PCI DSS Compliant</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="service-card border p-4 rounded-3 mb-3">
                          <h4 className="h6 mb-3">
                            <i className="bx bx-envelope text-primary-custom me-2"></i>
                            Communication Services
                          </h4>
                          <ul className="list-unstyled mb-0">
                            <li className="mb-2">• Email service providers</li>
                            <li className="mb-2">
                              • SMS notification services
                            </li>
                            <li className="mb-2">• Customer support tools</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="alert alert-info mt-4">
                      <i className="bx bx-info-circle me-2"></i>
                      <strong>Data Sharing:</strong> We only share your data
                      with third parties as necessary for service delivery, and
                      they are bound by strict confidentiality agreements.
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section
                  id="data-security"
                  itemScope
                  itemType="https://schema.org/WebPageElement"
                  className="privacy-section mb-5"
                >
                  <div className="section-header d-flex align-items-center mb-4">
                    <div className="section-icon me-3">
                      <i className="bx bx-shield-check text-primary-custom"></i>
                    </div>
                    <h2 itemProp="name" className="h3 mb-0">
                      5. Data Security
                    </h2>
                  </div>
                  <div className="section-content">
                    <p itemProp="text" className="mb-4">
                      We implement industry-standard security measures to
                      protect your personal information:
                    </p>
                    <div className="security-grid">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="security-item d-flex align-items-center mb-4">
                            <div className="security-icon me-3">
                              <i className="bx bx-lock-alt text-success"></i>
                            </div>
                            <div>
                              <h4 className="h6 mb-1">SSL/TLS Encryption</h4>
                              <p className="mb-0 small">
                                All data transmission is encrypted using 256-bit
                                SSL certificates.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="security-item d-flex align-items-center mb-4">
                            <div className="security-icon me-3">
                              <i className="bx bx-credit-card text-success"></i>
                            </div>
                            <div>
                              <h4 className="h6 mb-1">PCI Compliance</h4>
                              <p className="mb-0 small">
                                Payment processing meets PCI DSS Level 1
                                security standards.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="security-item d-flex align-items-center mb-4">
                            <div className="security-icon me-3">
                              <i className="bx bx-search-alt text-success"></i>
                            </div>
                            <div>
                              <h4 className="h6 mb-1">Regular Audits</h4>
                              <p className="mb-0 small">
                                Conduct regular security assessments and
                                vulnerability testing.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="security-item d-flex align-items-center mb-4">
                            <div className="security-icon me-3">
                              <i className="bx bx-user-check text-success"></i>
                            </div>
                            <div>
                              <h4 className="h6 mb-1">Access Control</h4>
                              <p className="mb-0 small">
                                Strict access controls and authentication for
                                all data access.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 6 */}
                <section
                  id="your-rights"
                  itemScope
                  itemType="https://schema.org/WebPageElement"
                  className="privacy-section mb-5"
                >
                  <div className="section-header d-flex align-items-center mb-4">
                    <div className="section-icon me-3">
                      <i className="bx bx-user-check text-primary-custom"></i>
                    </div>
                    <h2 itemProp="name" className="h3 mb-0">
                      6. Your Rights
                    </h2>
                  </div>
                  <div className="section-content">
                    <p itemProp="text" className="mb-4">
                      You have the following rights regarding your personal
                      data:
                    </p>
                    <div className="rights-grid">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="right-item d-flex align-items-start mb-4">
                            <div className="right-icon me-3">
                              <i className="bx bx-show text-primary-custom"></i>
                            </div>
                            <div>
                              <h4 className="h6 mb-2">Access Rights</h4>
                              <p className="mb-0 small">
                                Request a copy of all personal data we hold
                                about you.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="right-item d-flex align-items-start mb-4">
                            <div className="right-icon me-3">
                              <i className="bx bx-edit text-primary-custom"></i>
                            </div>
                            <div>
                              <h4 className="h6 mb-2">Correction Rights</h4>
                              <p className="mb-0 small">
                                Request correction of inaccurate or incomplete
                                data.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="right-item d-flex align-items-start mb-4">
                            <div className="right-icon me-3">
                              <i className="bx bx-trash text-primary-custom"></i>
                            </div>
                            <div>
                              <h4 className="h6 mb-2">Deletion Rights</h4>
                              <p className="mb-0 small">
                                Request deletion of your data (subject to legal
                                requirements).
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="right-item d-flex align-items-start mb-4">
                            <div className="right-icon me-3">
                              <i className="bx bx-block text-primary-custom"></i>
                            </div>
                            <div>
                              <h4 className="h6 mb-2">Opt-out Rights</h4>
                              <p className="mb-0 small">
                                Unsubscribe from marketing communications at any
                                time.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact-box bg-primary-custom text-white p-4 rounded-3 mt-4">
                      <h4 className="h6 mb-3">
                        <i className="bx bx-envelope me-2"></i>
                        Exercise Your Rights
                      </h4>
                      <p className="mb-3">
                        To exercise any of these rights, please contact us at:
                      </p>
                      <a
                        href="mailto:tswisscamps@gmail.com"
                        itemProp="email"
                        className="btn btn-light"
                      >
                        <i className="bx bx-envelope me-2"></i>
                        tswisscamps@gmail.com
                      </a>
                    </div>
                  </div>
                </section>

                {/* Section 7 */}
                <section
                  id="children-privacy"
                  itemScope
                  itemType="https://schema.org/WebPageElement"
                  className="privacy-section mb-5"
                >
                  <div className="section-header d-flex align-items-center mb-4">
                    <div className="section-icon me-3">
                      <i className="bx bx-child text-primary-custom"></i>
                    </div>
                    <h2 itemProp="name" className="h3 mb-0">
                      7. Children&apos;s Privacy
                    </h2>
                  </div>
                  <div className="section-content">
                    <div className="alert alert-warning">
                      <i className="bx bx-info-circle me-2"></i>
                      <strong>Important:</strong> We do not knowingly collect
                      personal information from children under 13 years of age.
                    </div>
                    <p itemProp="text" className="mb-4">
                      If we become aware that we have collected personal data
                      from a child under 13, we will take immediate steps to
                      delete such information from our systems. Parents or
                      guardians who believe their child has provided personal
                      information to us should contact us immediately.
                    </p>
                    <div className="children-info bg-light p-4 rounded-3">
                      <h4 className="h6 mb-3">
                        <i className="bx bx-shield me-2"></i>
                        Family Bookings
                      </h4>
                      <p className="mb-0">
                        For family bookings, we collect information about
                        children only through their parents or legal guardians,
                        and only as necessary for the booking process.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 8 */}
                <section
                  itemScope
                  itemType="https://schema.org/WebPageElement"
                  className="privacy-section mb-5"
                >
                  <div className="section-header d-flex align-items-center mb-4">
                    <div className="section-icon me-3">
                      <i className="bx bx-refresh text-primary-custom"></i>
                    </div>
                    <h2 itemProp="name" className="h3 mb-0">
                      8. Policy Updates
                    </h2>
                  </div>
                  <div className="section-content">
                    <p itemProp="text" className="mb-4">
                      We may update this privacy policy from time to time to
                      reflect changes in our practices or legal requirements. We
                      will notify you of any significant changes by:
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="bx bx-check text-success me-2"></i>
                        Posting the updated policy on our website
                      </li>
                      <li className="mb-2">
                        <i className="bx bx-check text-success me-2"></i>
                        Sending email notifications to registered users
                      </li>
                      <li className="mb-2">
                        <i className="bx bx-check text-success me-2"></i>
                        Displaying prominent notices on our website
                      </li>
                    </ul>
                    <div className="update-info bg-light p-4 rounded-3">
                      <p className="mb-0">
                        <strong>Last Updated:</strong>{" "}
                        <span itemProp="dateModified">December 15, 2024</span>
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 9 */}
                <section
                  id="contact-us"
                  itemScope
                  itemType="https://schema.org/WebPageElement"
                  className="privacy-section mb-5"
                >
                  <div className="section-header d-flex align-items-center mb-4">
                    <div className="section-icon me-3">
                      <i className="bx bx-phone text-primary-custom"></i>
                    </div>
                    <h2 itemProp="name" className="h3 mb-0">
                      9. Contact Us
                    </h2>
                  </div>
                  <div className="section-content">
                    <p itemProp="text" className="mb-4">
                      If you have any questions about this privacy policy or our
                      data practices, please contact us:
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="contact-card bg-light p-4 rounded-3 mb-4">
                          <h4 className="h6 mb-3">
                            <i className="bx bx-map text-primary-custom me-2"></i>
                            Our Address
                          </h4>
                          <address
                            itemProp="address"
                            itemScope
                            itemType="https://schema.org/PostalAddress"
                            className="mb-0"
                          >
                            <strong>Tapovan Swiss Camps</strong>
                            <br />
                            <span itemProp="streetAddress">Main Tapovan</span>
                            <br />
                            <span itemProp="addressLocality">Rishikesh</span>,
                            <br />
                            <span itemProp="addressRegion">Uttarakhand</span>,
                            India
                          </address>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-card bg-light p-4 rounded-3 mb-4">
                          <h4 className="h6 mb-3">
                            <i className="bx bx-envelope text-primary-custom me-2"></i>
                            Email Contact
                          </h4>
                          <p className="mb-3">For privacy-related inquiries:</p>
                          <a
                            href="mailto:tswisscamps@gmail.com"
                            itemProp="email"
                            className="btn btn-primary-custom"
                          >
                            <i className="bx bx-envelope me-2"></i>
                            tswisscamps@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </article>

              {/* Trust Indicators Section */}
              <section className="trust-indicators py-5 bg-light rounded-4 mb-5">
                <div className="container">
                  <div className="row text-center">
                    <div className="col-12">
                      <h3 className="h4 mb-4">
                        <i className="bx bx-shield-check text-primary-custom me-2"></i>
                        Your Privacy is Protected
                      </h3>
                      <div className="row">
                        <div className="col-md-3 col-6 mb-4">
                          <div className="trust-item">
                            <div className="trust-icon mb-3">
                              <i className="bx bx-lock-alt display-6 text-success"></i>
                            </div>
                            <h5 className="h6 mb-2">SSL Encrypted</h5>
                            <p className="small text-muted mb-0">
                              256-bit encryption
                            </p>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="trust-item">
                            <div className="trust-icon mb-3">
                              <i className="bx bx-check-shield display-6 text-success"></i>
                            </div>
                            <h5 className="h6 mb-2">PCI Compliant</h5>
                            <p className="small text-muted mb-0">
                              Payment security
                            </p>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="trust-item">
                            <div className="trust-icon mb-3">
                              <i className="bx bx-user-check display-6 text-success"></i>
                            </div>
                            <h5 className="h6 mb-2">GDPR Ready</h5>
                            <p className="small text-muted mb-0">
                              Data protection
                            </p>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                          <div className="trust-item">
                            <div className="trust-icon mb-3">
                              <i className="bx bx-time display-6 text-success"></i>
                            </div>
                            <h5 className="h6 mb-2">24/7 Support</h5>
                            <p className="small text-muted mb-0">
                              Always available
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="cta-section py-5 bg-primary-custom text-white rounded-4 mb-5">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h3 className="h4 mb-3">
                        <i className="bx bx-question-mark me-2"></i>
                        Questions About Your Privacy?
                      </h3>
                      <p className="mb-0 text-black">
                        Our privacy team is here to help. Contact us for any
                        questions about how we handle your personal data.
                      </p>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <a
                        href="mailto:tswisscamps@gmail.com"
                        className="btn btn-light btn-lg"
                      >
                        <i className="bx bx-envelope me-2"></i>
                        Contact Privacy Team
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Additional Resources */}
              <section className="resources-section py-4">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h4 className="h5 mb-4 text-center">
                        <i className="bx bx-link-external text-primary-custom me-2"></i>
                        Related Resources
                      </h4>
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <div className="resource-card border rounded-3 p-3 h-100">
                            <h5 className="h6 mb-2">
                              <i className="bx bx-file-blank text-primary-custom me-2"></i>
                              Terms of Service
                            </h5>
                            <p className="small text-muted mb-3">
                              Read our terms and conditions for using our
                              services.
                            </p>
                            <a
                              href="/terms-of-service"
                              className="btn btn-outline-primary-custom btn-sm"
                            >
                              View Terms
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="resource-card border rounded-3 p-3 h-100">
                            <h5 className="h6 mb-2">
                              <i className="bx bx-cookie text-primary-custom me-2"></i>
                              Cookie Policy
                            </h5>
                            <p className="small text-muted mb-3">
                              Learn about how we use cookies and tracking
                              technologies.
                            </p>
                            <a
                              href="/cookie-policy"
                              className="btn btn-outline-primary-custom btn-sm"
                            >
                              Cookie Policy
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="resource-card border rounded-3 p-3 h-100">
                            <h5 className="h6 mb-2">
                              <i className="bx bx-phone text-primary-custom me-2"></i>
                              Contact Us
                            </h5>
                            <p className="small text-muted mb-3">
                              Get in touch with our team for any questions or
                              concerns.
                            </p>
                            <a
                              href="/contact"
                              className="btn btn-outline-primary-custom btn-sm"
                            >
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicyPage;
