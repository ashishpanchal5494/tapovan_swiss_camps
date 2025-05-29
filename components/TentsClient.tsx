"use client";

import React, { useEffect, useMemo, useState } from "react";
import TentCard from "../components/TentCard";
import Loading from "@/components/Loading";
import { useSearchParams } from "next/navigation";
import Head from "next/head";

interface Tent {
  id: number;
  title: string;
  seoTitle: string;
  metaDescription: string;
  mainPrice: number;
  price: number;
  image: string;
  altText: string;
  beds: number;
  baths: number | string;
  description: string;
  linkBooking: string;
}

const tentRooms: Tent[] = [
  {
    id: 1,
    title: "Luxury AC Tent",
    seoTitle:
      "Luxury AC Camping Tent in Rishikesh | Premium Glamping Experience",
    metaDescription:
      "Book our luxury AC tents in Rishikesh with 5 beds, private bath & climate control. Perfect for family glamping with modern amenities amidst nature.",
    altText: "Luxury AC Glamping Tent in Rishikesh with mountain views",
    mainPrice: 2499,
    price: 1799,
    image: "assets/img/room/actent-1.webp",
    beds: 5,
    baths: 1,
    description:
      "Experience unparalleled comfort in our Luxury AC Tents, designed for those who seek a perfect blend of nature and modern amenities. These spacious 5-bed tents feature climate control to ensure your comfort in all seasons, along with attached bathrooms for privacy. Enjoy premium bedding, tasteful decor, and ample space to relax after a day of adventure. <br/> <i>Please note</i>: To maintain a healthy environment for all guests, smoking and consumption of alcohol are strictly prohibited in all tents. We kindly request all guests to help us keep the tents clean and in excellent condition for everyone's enjoyment. <br/> Located amidst lush greenery, our AC tents offer a serene retreat while keeping you connected with essential conveniences. Perfect for families or groups looking for a luxurious camping experience without compromising on comfort.",
    linkBooking: "/booking-form",
  },
  {
    id: 2,
    title: "Luxury Cooler Tent",
    seoTitle: "Luxury Cooler Tent in Rishikesh | Nature Retreat with Comfort",
    metaDescription:
      "Experience natural cooling in our premium tents near Ganga. Perfect for couples and families seeking comfortable camping in Rishikesh.",
    altText: "Luxury Cooler Tent with natural ventilation in Rishikesh",
    mainPrice: 1999,
    price: 1499,
    image: "assets/img/room/coolertent-1.webp",
    beds: 5,
    baths: 1,
    description:
      "Stay cool and comfortable in our Luxury Cooler Tents, designed to provide natural ventilation and temperature regulation. These well-appointed tents feature 5 comfortable beds and attached bathrooms, offering a perfect balance between outdoor living and essential comforts. <br/> <i>Important rules</i>: For the safety and comfort of all guests, smoking and drinking alcohol inside the tents is not permitted. We appreciate your cooperation in maintaining cleanliness and taking care of the tent facilities during your stay. <br/> The evaporative cooling system ensures a pleasant environment even during warmer days. Enjoy the sounds of nature from your private tent, surrounded by our beautifully landscaped property. Ideal for those who want a comfortable camping experience with a touch of traditional cooling methods.",
    linkBooking: "/booking-form",
  },
  {
    id: 3,
    title: "Ordinary Tent",
    seoTitle: "Budget Camping Tent in Rishikesh | Authentic Outdoor Experience",
    metaDescription:
      "Affordable camping tents in Rishikesh for backpackers and adventure seekers. Experience real camping with basic amenities near the Ganges.",
    altText: "Traditional camping tent in Rishikesh for budget travelers",
    mainPrice: 1199,
    price: 999,
    image: "assets/img/room/ordinarytent-1.webp",
    beds: 3,
    baths: "Common",
    description:
      "For the authentic camping enthusiasts, our Ordinary Tents offer a genuine outdoor experience with basic comforts. These 3-bed tents provide shared bathroom facilities and simple, clean accommodations. <br/> <i>Guest policies </i>: We maintain a strict no-smoking and no-alcohol policy in all tents to ensure a pleasant environment for all visitors. Guests are expected to keep their tents tidy and report any issues to our staff immediately. <br/> Perfect for budget-conscious travelers and backpackers who want to immerse themselves in nature without distractions. Located in our scenic property, these tents allow you to enjoy starry nights and fresh mountain air while still having access to our common amenities like dining areas and recreational spaces.",
    linkBooking: "/booking-form",
  },
];

const TentsClient: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [totalDays, setTotalDays] = useState<number>(1);

  const searchParams = useSearchParams();
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const adults = parseInt(searchParams.get("adults") || "5", 10);
  const tents = parseInt(searchParams.get("tents") || "1", 10);

  const totalPersons = adults;
  const personsPerTent = Math.ceil(totalPersons / tents);

  useEffect(() => {
    if (checkIn && checkOut) {
      const startDate = new Date(checkIn);
      const endDate = new Date(checkOut);
      const timeDiff = endDate.getTime() - startDate.getTime();
      let days = Math.ceil(timeDiff / (1000 * 3600 * 24));

      if (days < 1) days = 1;
      if (days > 30) days = 30;

      setTotalDays(days);
    } else {
      setTotalDays(1);
    }
  }, [checkIn, checkOut]);

  const calculatePrice = (
    basePrice: number,
    beds: number,
    mainBasePrice: number
  ) => {
    let perHeadPrice = basePrice;
    let perHeadMainPrice = mainBasePrice;

    if (beds === 5) {
      if (personsPerTent === 2) {
        perHeadPrice = Math.round(basePrice * 1.4);
        perHeadMainPrice = Math.round(mainBasePrice * 1.4);
      } else if (personsPerTent === 3) {
        perHeadPrice = Math.round(basePrice * 1.3);
        perHeadMainPrice = Math.round(mainBasePrice * 1.3);
      } else if (personsPerTent === 4) {
        perHeadPrice = Math.round(basePrice * 1.2);
        perHeadMainPrice = Math.round(mainBasePrice * 1.2);
      }
    }

    const totalPrice = perHeadPrice * personsPerTent * totalDays;
    const totalMainPrice = perHeadMainPrice * personsPerTent * totalDays;

    return { perHeadPrice, perHeadMainPrice, totalPrice, totalMainPrice };
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
  }, []);

  const structuredData = useMemo(() => {
    if (!isClient) return null;
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: tentRooms.map((room, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: room.title,
          description: room.description
            .replace(/<[^>]*>/g, "")
            .substring(0, 160),
          image: room.image,
          offers: {
            "@type": "Offer",
            price: room.price,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        },
      })),
    };
  }, [isClient]);

  if (!isClient) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <section className={isMobile ? "room-area ptb-200" : "room-area ptb-60"}>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        <div className="container">
          <header className="section-title">
            <h1>Explore Our Luxury Camping Tents in Rishikesh</h1>
            <p className="lead">
              Find the perfect glamping accommodation for your nature retreat in
              the Himalayan foothills.
            </p>
          </header>
          <div className="seo-content-section mt-4">
            <h2>Premium Camping Experience in Rishikesh</h2>
            <p>
              Our luxury tents in Rishikesh offer the perfect blend of nature
              and comfort. Located just minutes from the Ganges river, we
              provide the best glamping experience with modern amenities amidst
              the Himalayan foothills. Whether you&lsquo;re looking for family
              camping tents, couple retreats, or group accommodations, our AC
              and cooler tents ensure a memorable stay.
            </p>
            <h3>Why Choose Our Tents?</h3>
            <ul>
              <li>Spacious tents with 3-5 beds each</li>
              <li>Private or shared bathroom facilities</li>
              <li>Eco-friendly camping experience</li>
              <li>Stunning views of the Himalayan foothills</li>
              <li>
                Close to popular attractions like Laxman Jhula and Triveni Ghat
              </li>
            </ul>
          </div>
          <div className="row justify-content-center">
            {tentRooms.map((room, index) => {
              const {
                perHeadPrice,
                perHeadMainPrice,
                totalPrice,
                totalMainPrice,
              } = calculatePrice(room.price, room.beds, room.mainPrice);
              return (
                <TentCard
                  key={room.id}
                  id={room.id}
                  title={room.title}
                  image={room.image}
                  altText={room.altText}
                  beds={room.beds}
                  adults={adults}
                  baths={room.baths}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  description={room.description}
                  metaDescription={room.metaDescription}
                  linkBooking={room.linkBooking}
                  mainPrice={totalMainPrice}
                  price={totalPrice}
                  perHeadMainPrice={perHeadMainPrice}
                  perHeadPrice={perHeadPrice}
                  dataAosDuration={1200 + index * 200}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TentsClient;
