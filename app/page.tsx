"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import Loading from "@/components/Loading";
import { IoClose, IoLocationSharp } from "react-icons/io5";
import AOS from "aos";
import VideoSection from "@/components/VideoSection";
import Link from "next/link";

const Tents = dynamic(() => import("./tents/page"), {
  ssr: false,
  loading: () => <Loading />,
});
const FAQ = dynamic(() => import("./faq/page"), {
  ssr: false,
  loading: () => <Loading />,
});
const Team = dynamic(() => import("./team/page"), {
  ssr: false,
  loading: () => <Loading />,
});
const Blogs = dynamic(() => import("./blogs/page"), {
  ssr: false,
  loading: () => <Loading />,
});
const Testimonial = dynamic(() => import("./testimonial/page"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [isClient, setIsClient] = useState(false);

  const resortLocation = { lat: 30.1072384, lng: 78.3056896 };

  useEffect(() => {
    setIsClient(true);

    const hasPopupShown = sessionStorage.getItem("popupShown");

    if (!hasPopupShown) {
      setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("popupShown", "true");

        let countdownInterval = setInterval(() => {
          setCountdown((prev) => {
            if (prev === 1) {
              setShowPopup(false);
              clearInterval(countdownInterval);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        // ✅ Get precise location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setUserLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            async (error) => {
              console.warn("Geolocation error:", error);

              // ✅ If Geolocation fails, use IP-based location
              try {
                const res = await fetch("https://ipapi.co/json/");
                const data = await res.json();
                if (data.latitude && data.longitude) {
                  setUserLocation({
                    lat: data.latitude,
                    lng: data.longitude,
                  });
                } else {
                  console.error("IP location data unavailable.");
                }
              } catch (err) {
                console.error("Failed to fetch IP location:", err);
              }
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } // High accuracy settings
          );
        }
      }, 2000);
    }

    AOS.init({ duration: 1200 });
  }, []);

  const getGoogleMapsUrl = () => {
    if (userLocation) {
      return `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/Tapovan+Swiss+Camp,+Rishikesh,+Uttarakhand`;
    }
    return `https://www.google.com/maps/dir/?api=1&destination=${resortLocation.lat},${resortLocation.lng}`;
  };

  if (!isClient) return <Loading />;

  return (
    <div className="page-wrapper">
      <HeroSection />
      <Tents />
      <VideoSection />
      <Testimonial />
      <Team />
      <FAQ />
      <Blogs />

      {/* Google Maps Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-header">
              <span className="countdown">{countdown}s</span>
              <IoClose
                className="popup-close-icon"
                onClick={() => setShowPopup(false)}
              />
            </div>

            <h2>Start Navigation</h2>
            <p>Get directions to our resort.</p>

            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.5441739492603!2d78.30568959999998!3d30.107238399999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390917d95828f9b7%3A0x5628ba3506250e88!2sTapovan%20Swiss%20Camp%20in%20Rishikesh%20and%20Rafting%20in%20Rishikesh%20and%20Bike%20rent%20in%20Rishikesh!5e0!3m2!1sen!2sin!4v1740547557035!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-frame"
            ></iframe>

            {/* Open in Google Maps Button */}
            <div style={{ marginBottom: "20px" }} className="popup-buttons">
              <Link
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="popup-button popup-button-primary"
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                Open in Google Maps
                <IoLocationSharp color="red" size={25} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
