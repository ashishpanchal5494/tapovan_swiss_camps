"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
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
    AOS.init({ duration: 1200 });
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  return (
    <div className={isMobile ? "page-content ptb-200" : "page-content ptb-60"}>
      <div className="container">
        <h1>Privacy Policy - Tapovan Swiss Camps</h1>
        <p>
          At Tapovan Swiss Camps, your privacy is of utmost importance to us.
          This Privacy Policy explains how we collect, use, and protect your
          information when you visit our website:{" "}
          <strong>https://tapovanswisscamp.com</strong>.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          When you interact with our website or make a booking, we may collect
          the following information:
        </p>
        <ul>
          <li>Name, email address, phone number</li>
          <li>Billing and payment information</li>
          <li>Device and browser type, IP address</li>
          <li>Check-in/check-out dates and preferences</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the collected data to:</p>
        <ul>
          <li>Confirm and manage your bookings</li>
          <li>Enhance your experience on our website</li>
          <li>Send relevant promotional offers</li>
          <li>Improve our services and facilities</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. Cookies and Tracking Technologies</h2>
        <p>
          Our website uses cookies to understand user behavior and enhance your
          browsing experience. You can control cookie preferences through your
          browser settings.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>
          We may partner with trusted third-party tools (like Google Analytics
          and booking engines) to analyze data and optimize our services. These
          partners may also collect data in accordance with their own privacy
          policies.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We implement secure encryption protocols and regular audits to protect
          your personal data from unauthorized access, alteration, or
          disclosure.
        </p>

        <h2>6. Your Privacy Rights</h2>
        <p>
          Depending on your location, you may have the right to access, correct,
          or delete your personal data. You can reach out to us anytime for such
          requests.
        </p>

        <h2>7. Children&lsquo;s Privacy</h2>
        <p>
          Tapovan Swiss Camps does not knowingly collect personal information
          from children under 13 years of age. If we find such data, it will be
          promptly deleted.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Any changes will be
          posted here with an updated date.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or your data,
          please contact us at: <strong>info@tapovanswisscamp.com</strong>
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
