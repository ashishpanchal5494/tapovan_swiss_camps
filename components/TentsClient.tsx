"use client";

import React, { useEffect, useState } from "react";
import TentCard from "@/components/TentCard";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { tentRooms } from "../app/tents/tentData";

const TentsClient: React.FC = () => {
  const [totalDays, setTotalDays] = useState<number>(1);

  const pathname = usePathname();
  const showBreadcrumb = pathname === "/tents";

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
        perHeadPrice = Math.round(basePrice * 1.6);
        perHeadMainPrice = Math.round(mainBasePrice * 1.6);
      } else if (personsPerTent === 3) {
        perHeadPrice = Math.round(basePrice * 1.3);
        perHeadMainPrice = Math.round(mainBasePrice * 1.3);
      } else if (personsPerTent === 4) {
        perHeadPrice = Math.round(basePrice * 1.1);
        perHeadMainPrice = Math.round(mainBasePrice * 1.1);
      }
    }

    const totalPrice = perHeadPrice * personsPerTent * totalDays;
    const totalMainPrice = perHeadMainPrice * personsPerTent * totalDays;

    return { perHeadPrice, perHeadMainPrice, totalPrice, totalMainPrice };
  };

  // Enhanced structured data for tents page
  const tentsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Luxury Camping Tents in Tapovan Rishikesh",
    description:
      "Premium glamping experience with luxury tents near Ganga river. Choose from AC tents, cooler tents, and budget options.",
    url: "https://tapovanswisscampsofficial.com/tents",
    image: "https://tapovanswisscampsofficial.com/assets/img/room/ACTent1.webp",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: tentRooms.length,
      itemListElement: tentRooms.map((tent, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: tent.title,
          description: tent.metaDescription,
          image: `https://tapovanswisscampsofficial.com/${tent.image}`,
          offers: {
            "@type": "Offer",
            price: tent.price,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        },
      })),
    },
    publisher: {
      "@type": "Organization",
      name: "Tapovan Swiss Camps",
      logo: {
        "@type": "ImageObject",
        url: "https://tapovanswisscampsofficial.com/assets/img/logo.png",
      },
    },
  };

  return (
    <>
      <Script
        id="tents-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(tentsStructuredData)}
      </Script>

      {/* Hero Section */}
      <section className=" pt-40 tents-hero bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 py-16 py-md-20 py-lg-24 relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <div className="container relative z-10">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8">
              <div className="hero-content">
                {showBreadcrumb && (
                  <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/" className="text-decoration-none">
                          Home
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Our Tents
                      </li>
                    </ol>
                  </nav>
                )}
                <div className="hero-icon mb-4">
                  <i className="bx bx-tent display-1 text-primary-custom"></i>
                </div>
                <h1 className="display-4 display-md-3 display-lg-2 fw-bold text-dark mb-4">
                  Luxury{" "}
                  <span className="text-primary-custom">Camping Tent</span>
                  <br />
                  in Tapovan Rishikesh
                </h1>
                <p className="lead text-muted mb-5 mb-md-6">
                  Experience the perfect blend of nature and comfort in our
                  premium camping tents. From luxury AC tents to budget-friendly
                  options, find your ideal riverside retreat by the sacred Ganga
                  river.
                </p>

                <div className="hero-stats d-flex flex-row flex-lg-row gap-4 mb-5">
                  <div className="stat-item text-center">
                    <div className="h3 text-primary-custom mb-1">3</div>
                    <small className="text-muted">Tent Types</small>
                  </div>
                  <div className="stat-item text-center">
                    <div className="h3 text-primary-custom mb-1">₹999</div>
                    <small className="text-muted">Starting Price</small>
                  </div>
                  <div className="stat-item text-center">
                    <div className="h3 text-primary-custom mb-1">5★</div>
                    <small className="text-muted">Guest Rating</small>
                  </div>
                  <div className="stat-item text-center">
                    <div className="h3 text-primary-custom mb-1">24/7</div>
                    <small className="text-muted">Support</small>
                  </div>
                </div>
                <div className="hero-cta">
                  <Link
                    href="#tents-section"
                    className="btn btn-primary-custom btn-lg text-white px-5 py-3 rounded-pill me-3 mb-3"
                  >
                    View All Tents
                  </Link>
                  <Link
                    href="/booking-form"
                    className="btn btn-outline-primary-custom btn-lg border border-2 border-gray px-5 py-3 rounded-pill mb-3"
                  >
                    <i className="bx bx-calendar me-2"></i>
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="hero-image text-center">
                <Image
                  src="/assets/img/room/coolerTent1.webp"
                  alt="Luxury Camping Tents at Tapovan Swiss Camps"
                  width={500}
                  height={600}
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tents Section */}
      <section
        id="tents-section"
        className="tents-section py-5 py-md-6 py-lg-7"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center mb-5">
                <h2 className="display-5 display-md-4 display-lg-3 fw-bold text-dark mb-4">
                  Choose Your Perfect{" "}
                  <span className="text-primary-custom">Tent</span>
                </h2>
                <p className="lead text-muted mb-0">
                  From luxury AC tents to budget-friendly options, we have the
                  perfect accommodation for every traveler
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {tentRooms.map((room, index) => {
              const { perHeadPrice, perHeadMainPrice } = calculatePrice(
                room.price,
                room.beds,
                room.mainPrice
              );
              return (
                <TentCard
                  key={room.id}
                  slug={room.slug}
                  title={room.title}
                  image={room.image}
                  altText={room.altText}
                  beds={room.beds}
                  adults={adults}
                  baths={room.baths}
                  description={room.description}
                  linkBooking={room.linkBooking}
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
