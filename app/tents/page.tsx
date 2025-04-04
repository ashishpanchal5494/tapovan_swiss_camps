"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import $ from "jquery";
import TentCard from "../../components/TentCard";
import Loading from "@/components/Loading";
import { useSearchParams } from "next/navigation";

// Define Tent Type
interface Tent {
  id: number;
  title: string;
  price: number;
  image: string;
  beds: number;
  baths: number | string;
  description: string;
  linkBooking: string;
}

// Tent Data
const tentRooms: Tent[] = [
  {
    id: 1,
    title: "Luxury AC Tent",
    price: 1799,
    image: "assets/img/room/actent-1.JPG",
    beds: 5,
    baths: 1,
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    linkBooking: "/booking-form",
  },
  {
    id: 2,
    title: "Luxury Cooler Tent",
    price: 1499,
    image: "assets/img/room/coolertent-1.JPG",
    beds: 5,
    baths: 1,
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    linkBooking: "/booking-form",
  },
  {
    id: 3,
    title: "Ordinary Tent",
    price: 999,
    image: "assets/img/room/ordinarytent-1.jpeg",
    beds: 3,
    baths: "Common",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    linkBooking: "/booking-form",
  },
];

const Tents: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [totalDays, setTotalDays] = useState<number>(1); // Store total days

  const searchParams = useSearchParams();
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const adults = parseInt(searchParams.get("adults") || "5", 10);
  const tents = parseInt(searchParams.get("tents") || "1", 10);

  const totalPersons = adults; // Children stay free
  const personsPerTent = Math.ceil(totalPersons / tents);

  // Function to calculate the number of days
  useEffect(() => {
    if (checkIn && checkOut) {
      const startDate = new Date(checkIn);
      const endDate = new Date(checkOut);
      const timeDiff = endDate.getTime() - startDate.getTime();
      let days = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days

      if (days < 1) days = 1; // Minimum 1 day
      if (days > 30) days = 30; // Max limit 30 days

      setTotalDays(days); // Update the state
    } else {
      setTotalDays(1); // Default to 1 day if no valid dates
    }
  }, [checkIn, checkOut]);

  // Function to calculate price per tent
  const calculatePrice = (basePrice: number, beds: number) => {
    let perHeadPrice = basePrice;

    // Increase price based on occupancy for AC & Cooler tents
    if (beds === 5) {
      if (personsPerTent === 2) {
        perHeadPrice = Math.round(basePrice * 1.4);
      } else if (personsPerTent === 3) {
        perHeadPrice = Math.round(basePrice * 1.3);
      } else if (personsPerTent === 4) {
        perHeadPrice = Math.round(basePrice * 1.2);
      }
    }

    // Total price per tent for selected days
    const totalPrice = perHeadPrice * personsPerTent * totalDays;

    return { perHeadPrice, totalPrice };
  };

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
    if (typeof window !== "undefined") {
      (window as any).$ = (window as any).jQuery = $;
    }
    AOS.init({ duration: 1200 });
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  return (
    <section className={isMobile ? "room-area ptb-200" : "room-area ptb-60"}>
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Explore Our Tents</h2>
          <p>Find the best accommodation for your stay.</p>
        </div>
        <div className="row justify-content-center">
          {tentRooms.map((room, index) => {
            const { perHeadPrice, totalPrice } = calculatePrice(
              room.price,
              room.beds
            );

            return (
              <TentCard
                key={room.id}
                id={room.id}
                title={room.title}
                image={room.image}
                beds={room.beds}
                adults={adults}
                baths={room.baths}
                checkIn={checkIn}
                checkOut={checkOut}
                description={room.description}
                linkBooking={room.linkBooking}
                price={totalPrice} // Show total calculated price
                perHeadPrice={perHeadPrice} // Show per head price
                dataAosDuration={1200 + index * 200}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tents;
