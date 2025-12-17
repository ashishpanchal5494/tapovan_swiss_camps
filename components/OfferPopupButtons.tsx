"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosCloseCircleOutline } from "react-icons/io";


interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
}

const OfferModal = ({ isOpen, onClose, imageSrc, altText }: OfferModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="offer-modal-overlay" onClick={onClose}>
      <div className="offer-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="offer-modal-image-wrapper">
          <button className="offer-modal-close" onClick={onClose} aria-label="Close">
            <IoIosCloseCircleOutline />
          </button>
          <Image
            src={imageSrc}
            alt={altText}
            className="offer-modal-image"
            width={800}
            height={600}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

const OfferPopupButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showChristmasModal, setShowChristmasModal] = useState(false);
  const [showNewYearModal, setShowNewYearModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState<"christmas" | "newyear" | null>(null);
  const [autoShowTooltips, setAutoShowTooltips] = useState(false);
  const [wasAutoOpened, setWasAutoOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-open Christmas offer popup after 2 seconds when app opens
  useEffect(() => {
    const autoOpenTimer = setTimeout(() => {
      setShowChristmasModal(true);
      setWasAutoOpened(true);
    }, 2000);

    return () => clearTimeout(autoOpenTimer);
  }, []);

  // Show tooltips for 7 seconds when user closes the auto-opened popup
  useEffect(() => {
    if (!showChristmasModal && wasAutoOpened) {
      setAutoShowTooltips(true);
      const hideTimer = setTimeout(() => {
        setAutoShowTooltips(false);
        setWasAutoOpened(false); // Reset after showing tooltips
      }, 7000);

      return () => clearTimeout(hideTimer);
    }
  }, [showChristmasModal, wasAutoOpened]);

  return (
    <>
      <div className={`offer-buttons-container ${isVisible ? "visible" : ""}`}>
        {/* Christmas Offer Button */}
        <div className="offer-button-wrapper">
          <button
            className="offer-button christmas-button"
            onClick={() => setShowChristmasModal(true)}
            onMouseEnter={() => setShowTooltip("christmas")}
            onMouseLeave={() => setShowTooltip(null)}
            aria-label="View Christmas Offer"
          >
           
             {/* Small Christmas Logo */}
  <Image
    src="/assets/offer_icons/christmas_icon.png"
    alt="Christmas"
    className="offer-badge"
    width={65}
    height={60}
  />

            <div className="offer-pulse" />
            <div className="offer-ripple" />
          </button>
          {(showTooltip === "christmas" || (autoShowTooltips && !showTooltip)) && (
            <div className="offer-tooltip">
              <span>Christmas Offer</span>
              <div className="tooltip-arrow" />
            </div>
          )}
        </div>

        {/* New Year Offer Button */}
        <div className="offer-button-wrapper">
          <button
            className="offer-button newyear-button"
            onClick={() => setShowNewYearModal(true)}
            onMouseEnter={() => setShowTooltip("newyear")}
            onMouseLeave={() => setShowTooltip(null)}
            aria-label="View New Year Offer"
          >
             <Image
    src="/assets/offer_icons/new_year_icon.png"
    alt="New Year"
    className="offer-badge"
    width={65}
    height={60}
  />
            <div className="offer-pulse" />
            <div className="offer-ripple" />
          </button>
          {(showTooltip === "newyear" || (autoShowTooltips && !showTooltip)) && (
            <div className="offer-tooltip">
              <span>New Year Offer</span>
              <div className="tooltip-arrow" />
            </div>
          )}
        </div>
      </div>

      {/* Christmas Offer Modal */}
      <OfferModal
        isOpen={showChristmasModal}
        onClose={() => setShowChristmasModal(false)}
        imageSrc="/assets/offers/christmas_offer.png"
        altText="Christmas Offer"
      />

      {/* New Year Offer Modal */}
      <OfferModal
        isOpen={showNewYearModal}
        onClose={() => setShowNewYearModal(false)}
        imageSrc="/assets/offers/new_year_offer.png"
        altText="New Year Offer"
      />
    </>
  );
};

export default OfferPopupButtons;
