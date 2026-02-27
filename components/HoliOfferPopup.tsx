"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HoliOfferPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Always show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 9999 }}
      onClick={closePopup}
    >
      <div
        className="bg-white rounded-4 shadow-lg position-relative overflow-hidden"
        style={{ maxWidth: 500, width: "90%" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Over Image */}
        <button
          type="button"
          className="btn-close position-absolute bg-white rounded-circle p-2 shadow-sm"
          style={{ top: "15px", right: "15px", zIndex: 10, opacity: 0.9 }}
          aria-label="Close"
          onClick={closePopup}
        />

        {/* Banner Image */}
        <div className="position-relative w-100 holi-banner-img">
          <Image
            src="/assets/offers/holi_banner.png"
            alt="Holi Special Offer Banner"
            fill
            className="object-fit-cover"
            priority
          />
        </div>

        {/* Content Area */}
        <div className="p-3 p-md-5 text-center">
          <span className="badge bg-danger mb-2 px-3 py-2 rounded-pill">Limited Time Offer</span>
          <h3 className="fw-bold mb-2 mb-md-3 text-primary-custom fs-4 fs-md-3">Celebrate Holi by the Ganga</h3>
          <p className="mb-3 lead fs-6 fs-md-5">
            Book your stay during Holi week and get{" "}
            <strong className="text-danger">flat 20% off</strong> on luxury tents.
            Limited spots only!
          </p>
          <p className="text-muted small mb-4">
            Offer valid for stays between 25 February – 4 March. T&amp;C apply.
          </p>

          <div className="d-flex justify-content-center flex-nowrap gap-2 mt-2 w-100">
            <Link
              href="/gallery"
              className="btn btn-light rounded-pill px-2 px-md-4 fw-medium border shadow-sm flex-fill text-nowrap d-flex align-items-center justify-content-center"
              style={{ fontSize: "0.9rem" }}
              onClick={closePopup}
            >
              Gallery
            </Link>
            <Link
              href="/booking-form"
              className="btn btn-primary-custom text-white rounded-pill px-2 px-md-4 fw-medium shadow flex-fill text-nowrap d-flex align-items-center justify-content-center"
              style={{ fontSize: "0.9rem" }}
              onClick={closePopup}
            >
              Book Holi Offer 🌟
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .holi-banner-img {
          height: 220px;
        }
        @media (max-width: 576px) {
          .holi-banner-img {
            height: 140px;
          }
        }
      `}</style>
    </div>
  );
};

export default HoliOfferPopup;

