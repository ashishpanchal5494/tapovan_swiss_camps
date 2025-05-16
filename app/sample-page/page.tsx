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
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to Tapovan Swiss Camps
          </h1>
          <p className="text-lg text-gray-700">
            Experience nature, comfort, and peace at our luxury Swiss tent stay
            in the heart of Rishikesh.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>🛏️ Swiss tents with private bathrooms</li>
            <li>🌄 Surrounded by nature and Himalayan views</li>
            <li>🔥 Bonfire nights & live music (on request)</li>
            <li>🧘 Yoga sessions and meditation space</li>
            <li>🌊 Close to the Ganga & rafting start points</li>
          </ul>
        </section>

        {/* Things to Do */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Activities You Can Enjoy
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>🚣 River rafting on the Ganges</li>
            <li>🏞️ Hiking & nature walks</li>
            <li>🧘 Sunrise yoga sessions</li>
            <li>🔥 Campfire evenings under the stars</li>
            <li>🕌 Visit nearby temples & the Beatles Ashram</li>
          </ul>
        </section>

        {/* Testimonials */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What Our Guests Say</h2>
          <div className="text-gray-700 space-y-4">
            <blockquote className="italic border-l-4 border-primary pl-4">
              “A peaceful escape from the city — the tents were clean, food was
              great, and the team was super welcoming!” – Neha M.
            </blockquote>
            <blockquote className="italic border-l-4 border-primary pl-4">
              “Loved the bonfire evenings and yoga mornings. Would definitely
              come back!” – Ankit R.
            </blockquote>
          </div>
        </section>

        {/* Location */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">How to Reach Us</h2>
          <p className="text-gray-700">
            📍 We’re located in Tapovan, just 1.5 km from Laxman Jhula and 20 km
            from Dehradun Airport. Easy road access from Haridwar and Rishikesh.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4 ">Book Your Stay Today!</h2>
          <p className="text-gray-700 ">
            Tap into nature and unwind at Tapovan Swiss Camps.
          </p>
          <Link
            style={{ borderRadius: "0px", paddingBlock: "15px" }}
            className="btn style5 mt-5 w-auto"
            href="/booking-form"
          >
            Book Now
          </Link>
        </section>
      </div>
    </div>
  );
}

export default SamplePage;
