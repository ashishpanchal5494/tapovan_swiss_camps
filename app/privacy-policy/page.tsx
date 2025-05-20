"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
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

  // Generate FAQ Schema for common privacy questions
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

  return (
    <>
      <Head>
        <title>
          Privacy Policy | Tapovan Swiss Camps - Rishikesh Luxury Camping
        </title>
        <meta
          name="description"
          content="Read our comprehensive privacy policy explaining how Tapovan Swiss Camps collects, uses, and protects your personal data for bookings and website interactions."
        />
        <meta
          name="keywords"
          content="privacy policy rishikesh camping, data protection swiss tents, tapovan camps privacy, booking data security, cookie policy adventure camps"
        />
        <link
          rel="canonical"
          href="https://tapovanswisscampsofficial.com/privacy-policy"
        />

        {/* Open Graph / Social Media Meta Tags */}
        <meta
          property="og:title"
          content="Privacy Policy | Tapovan Swiss Camps"
        />
        <meta
          property="og:description"
          content="Learn how we protect your personal information when you book luxury camping experiences in Rishikesh with Tapovan Swiss Camps."
        />
        <meta
          property="og:url"
          content="https://tapovanswisscampsofficial.com/privacy-policy"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Privacy Policy - Tapovan Swiss Camps"
        />
        <meta
          name="twitter:description"
          content="Your data security matters to us. Read how we handle information for Rishikesh camping bookings and website interactions."
        />

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(privacyFAQSchema)}
        </script>

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
                name: "Privacy Policy",
                item: "https://tapovanswisscampsofficial.com/privacy-policy",
              },
            ],
          })}
        </script>
      </Head>

      <div
        className={isMobile ? "page-content ptb-200" : "page-content ptb-60"}
      >
        <div className="container">
          <article itemScope itemType="https://schema.org/PrivacyPolicy">
            <h1 itemProp="name">Privacy Policy - Tapovan Swiss Camps</h1>
            <p itemProp="description">
              At <strong itemProp="organization">Tapovan Swiss Camps</strong>,
              your privacy is of utmost importance to us. This Privacy Policy
              explains how we collect, use, and protect your information when
              you visit our website:{" "}
              <strong>https://tapovanswisscampsofficial.com</strong>.
            </p>

            <section
              itemProp="hasPart"
              itemScope
              itemType="https://schema.org/WebPageElement"
            >
              <h2 itemProp="name">1. Information We Collect</h2>
              <p itemProp="text">
                When you interact with our website or make a booking, we may
                collect the following information:
              </p>
              <ul>
                <li>Name, email address, phone number</li>
                <li>Billing and payment information</li>
                <li>Device and browser type, IP address</li>
                <li>Check-in/check-out dates and preferences</li>
              </ul>
            </section>

            <section
              itemProp="hasPart"
              itemScope
              itemType="https://schema.org/WebPageElement"
            >
              <h2 itemProp="name">2. How We Use Your Information</h2>
              <p itemProp="text">We use the collected data to:</p>
              <ul>
                <li>Confirm and manage your bookings</li>
                <li>Enhance your experience on our website</li>
                <li>Send relevant promotional offers (with consent)</li>
                <li>Improve our services and facilities</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section
              itemProp="hasPart"
              itemScope
              itemType="https://schema.org/WebPageElement"
            >
              <h2 itemProp="name">3. Cookies and Tracking Technologies</h2>
              <p itemProp="text">
                Our website uses cookies to understand user behavior and enhance
                your browsing experience. You can control cookie preferences
                through your browser settings. We categorize cookies as:
              </p>
              <ul>
                <li>
                  <strong>Essential:</strong> Required for core functionality
                </li>
                <li>
                  <strong>Analytical:</strong> Helps improve user experience
                </li>
                <li>
                  <strong>Marketing:</strong> Used for personalized offers
                  (opt-in required)
                </li>
              </ul>
            </section>

            <section
              itemProp="hasPart"
              itemScope
              itemType="https://schema.org/WebPageElement"
            >
              <h2 itemProp="name">4. Third-Party Services</h2>
              <p itemProp="text">
                We may partner with trusted third-party tools (like Google
                Analytics and booking engines) to analyze data and optimize our
                services. These partners may also collect data in accordance
                with their own privacy policies. Key partners include:
              </p>
              <ul>
                <li>Google Analytics (website analytics)</li>
                <li>Payment processors (Razorpay/Stripe)</li>
                <li>Email service providers</li>
              </ul>
            </section>

            <section
              itemProp="hasPart"
              itemScope
              itemType="https://schema.org/WebPageElement"
            >
              <h2 itemProp="name">5. Data Security</h2>
              <p itemProp="text">
                We implement multiple security measures to protect your
                information:
              </p>
              <ul>
                <li>SSL/TLS encryption for all data transfers</li>
                <li>PCI-DSS compliant payment processing</li>
                <li>Regular security audits and vulnerability testing</li>
                <li>Limited employee access to sensitive data</li>
              </ul>
            </section>

            <section
              itemProp="hasPart"
              itemScope
              itemType="https://schema.org/WebPageElement"
            >
              <h2 itemProp="name">6. Your Privacy Rights</h2>
              <p itemProp="text">
                Depending on your location, you may have rights including:
              </p>
              <ul>
                <li>Access to your personal data</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your data (where applicable)</li>
                <li>Opt-out of marketing communications</li>
              </ul>
              <p>
                To exercise these rights, contact us at{" "}
                <a href="mailto:info@tswisscamps@gmail.com" itemProp="email">
                  info@tswisscamps@gmail.com
                </a>
                .
              </p>
            </section>

            <section
              itemProp="hasPart"
              itemScope
              itemType="https://schema.org/WebPageElement"
            >
              <h2 itemProp="name">7. Children's Privacy</h2>
              <p itemProp="text">
                Tapovan Swiss Camps does not knowingly collect personal
                information from children under 13 years of age. If we discover
                we have inadvertently collected such data, it will be promptly
                deleted.
              </p>
            </section>

            <section
              itemProp="hasPart"
              itemScope
              itemType="https://schema.org/WebPageElement"
            >
              <h2 itemProp="name">8. Changes to This Policy</h2>
              <p itemProp="text">
                We may update this Privacy Policy periodically. The last update
                was on <strong itemProp="dateModified">May 15, 2025</strong>.
                Any changes will be posted here with an updated date.
              </p>
            </section>

            <section
              itemProp="hasPart"
              itemScope
              itemType="https://schema.org/WebPageElement"
            >
              <h2 itemProp="name">9. Contact Us</h2>
              <p itemProp="text">
                For privacy-related inquiries or requests, please contact:
              </p>
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
                  <span itemProp="addressRegion">Uttarakhand</span>{" "}
                  <span itemProp="postalCode">249201</span>
                  <br />
                  Email:{" "}
                  <a href="mailto:info@tswisscamps@gmail.com" itemProp="email">
                    info@tswisscamps@gmail.com
                  </a>
                  <br />
                  Phone:{" "}
                  <a href="tel:+917906924003" itemProp="telephone">
                    +91 79069 24003
                  </a>
                </p>
              </address>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
