"use client";

import React, { useEffect, useState } from "react";

import Loading from "@/components/Loading";

function PrivacyPolicy() {
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

  const privacyFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What information does Tapovan Swiss Camps collect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We collect personal details like name, email, phone number, booking information, payment details, and technical data about your device and browser when you use our website.",
        },
      },
      {
        "@type": "Question",
        name: "How is my payment information secured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use industry-standard encryption (SSL/TLS) and PCI-compliant payment processors to ensure your payment information is always protected.",
        },
      },
      {
        "@type": "Question",
        name: "Can I request deletion of my personal data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can request access, correction, or deletion of your personal data by contacting us at info@tapovanswisscamp.com, subject to legal requirements.",
        },
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div
        className={isMobile ? "page-content ptb-200" : "page-content ptb-60"}
      >
        <div className="container">
          <article itemScope itemType="https://schema.org/PrivacyPolicy">
            <h1 itemProp="name">Privacy Policy - Tapovan Swiss Camps</h1>
            <p itemProp="description">
              At <strong itemProp="publisher">Tapovan Swiss Camps</strong>, your
              privacy is of utmost importance. This policy outlines how we
              collect, use, and protect your data when you visit our website:{" "}
              <strong>https://tapovanswisscampsofficial.com</strong>.
            </p>

            {/* Section 1 */}
            <section itemScope itemType="https://schema.org/WebPageElement">
              <h2 itemProp="name">1. Information We Collect</h2>
              <p itemProp="text">
                When you interact with our site or book with us, we collect:
              </p>
              <ul>
                <li>Name, email, and phone number</li>
                <li>Billing and payment details</li>
                <li>Device/browser type and IP address</li>
                <li>Booking dates and user preferences</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section itemScope itemType="https://schema.org/WebPageElement">
              <h2 itemProp="name">2. How We Use Your Information</h2>
              <p itemProp="text">We use your data to:</p>
              <ul>
                <li>Confirm/manage bookings</li>
                <li>Enhance user experience</li>
                <li>Send promotions (if opted-in)</li>
                <li>Improve services</li>
                <li>Meet legal obligations</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section itemScope itemType="https://schema.org/WebPageElement">
              <h2 itemProp="name">3. Cookies and Tracking</h2>
              <p itemProp="text">
                We use cookies to analyze traffic and enhance performance.
                Types:
              </p>
              <ul>
                <li>
                  <strong>Essential:</strong> Core functionality
                </li>
                <li>
                  <strong>Analytics:</strong> Usage insights
                </li>
                <li>
                  <strong>Marketing:</strong> Personalized offers (optional)
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section itemScope itemType="https://schema.org/WebPageElement">
              <h2 itemProp="name">4. Third-Party Services</h2>
              <p itemProp="text">
                We collaborate with third-party tools to improve services:
              </p>
              <ul>
                <li>Google Analytics</li>
                <li>Payment processors (Razorpay, Stripe)</li>
                <li>Email service providers</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section itemScope itemType="https://schema.org/WebPageElement">
              <h2 itemProp="name">5. Data Security</h2>
              <p itemProp="text">Your data is protected through:</p>
              <ul>
                <li>SSL/TLS encryption</li>
                <li>PCI-compliant payments</li>
                <li>Regular audits</li>
                <li>Restricted access</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section itemScope itemType="https://schema.org/WebPageElement">
              <h2 itemProp="name">6. Your Rights</h2>
              <p itemProp="text">You may request:</p>
              <ul>
                <li>Access to your data</li>
                <li>Correction of errors</li>
                <li>Data deletion (where legal)</li>
                <li>Unsubscribing from promotions</li>
              </ul>
              <p>
                Contact us at{" "}
                <a href="mailto:info@tapovanswisscamp.com" itemProp="email">
                  info@tapovanswisscamp.com
                </a>
              </p>
            </section>

            {/* Section 7 */}
            <section itemScope itemType="https://schema.org/WebPageElement">
              <h2 itemProp="name">7. Children’s Privacy</h2>
              <p itemProp="text">
                We do not knowingly collect data from children under 13. If we
                become aware, we will delete the data immediately.
              </p>
            </section>

            {/* Section 8 */}
            <section itemScope itemType="https://schema.org/WebPageElement">
              <h2 itemProp="name">8. Policy Updates</h2>
              <p itemProp="text">
                We may revise this policy. Last updated:{" "}
                <strong itemProp="dateModified">May 15, 2025</strong>.
              </p>
            </section>

            {/* Section 9 */}
            <section itemScope itemType="https://schema.org/WebPageElement">
              <h2 itemProp="name">9. Contact Us</h2>
              <p itemProp="text">For questions, reach us at:</p>
              <address
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <p>
                  <strong>Tapovan Swiss Camps</strong>
                  <br />
                  <span itemProp="streetAddress">Main Tapovan</span>,<br />
                  <span itemProp="addressLocality">Rishikesh</span>,<br />
                  <span itemProp="addressRegion">Uttarakhand</span>, India
                </p>
              </address>
              <p>
                Email:{" "}
                <a href="mailto:info@tapovanswisscamp.com" itemProp="email">
                  info@tapovanswisscamp.com
                </a>
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
