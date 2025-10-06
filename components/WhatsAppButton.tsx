"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "917906924003";
  const message = encodeURIComponent("Hello, I'm interested in your resort!");

  useEffect(() => {
    // Show button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // Track click event if needed
    console.log("WhatsApp button clicked");
  };

  return (
    <div className={`whatsapp-container ${isVisible ? "visible" : ""}`}>
      <Link
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <FaWhatsapp className="whatsapp-icon" />
        <div className="whatsapp-pulse"></div>
        <div className="whatsapp-ripple"></div>
      </Link>

      {showTooltip && (
        <div className="whatsapp-tooltip">
          <span>Chat with us on WhatsApp!</span>
          <div className="tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
