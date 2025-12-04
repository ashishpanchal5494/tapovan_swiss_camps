"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

const PHONE_NUMBER = "917906924003";
const DEFAULT_MESSAGE = "Hello, I'm interested in your resort!";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // Place for analytics if needed
  };

  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <div className={`whatsapp-container ${isVisible ? "visible" : ""}`}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
        <div className="whatsapp-pulse" />
        <div className="whatsapp-ripple" />
      </a>

      {showTooltip && (
        <div className="whatsapp-tooltip">
          <span>Chat with us on WhatsApp</span>
          <div className="tooltip-arrow" />
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
