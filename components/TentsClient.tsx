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

  // Auto-swipe carousel functionality
  useEffect(() => {
    const carouselElement = document.getElementById("offerCarousel");
    if (!carouselElement) return;

    const carouselItems = carouselElement.querySelectorAll(".carousel-item");
    const indicators = carouselElement.querySelectorAll(
      ".carousel-indicators button"
    );
    let currentIndex = 0;
    let isPaused = false;
    let intervalId: NodeJS.Timeout | null = null;

    const showSlide = (index: number) => {
      // Remove active class from all items and indicators
      carouselItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });

      indicators.forEach((indicator, i) => {
        if (i === index) {
          indicator.classList.add("active");
          indicator.setAttribute("aria-current", "true");
        } else {
          indicator.classList.remove("active");
          indicator.removeAttribute("aria-current");
        }
      });
    };

    const nextSlide = () => {
      if (isPaused) return;
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
    };

    const startAutoSwipe = () => {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(nextSlide, 5000); // 5 seconds
    };

    const stopAutoSwipe = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
      stopAutoSwipe();
    };

    const handleMouseLeave = () => {
      isPaused = false;
      startAutoSwipe();
    };

    // Handle indicator clicks
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentIndex = index;
        showSlide(currentIndex);
        stopAutoSwipe();
        startAutoSwipe(); // Restart timer
      });
    });

    // Add hover listeners
    carouselElement.addEventListener("mouseenter", handleMouseEnter);
    carouselElement.addEventListener("mouseleave", handleMouseLeave);

    // Start auto-swipe
    startAutoSwipe();

    // Cleanup
    return () => {
      stopAutoSwipe();
      carouselElement.removeEventListener("mouseenter", handleMouseEnter);
      carouselElement.removeEventListener("mouseleave", handleMouseLeave);
      indicators.forEach((indicator) => {
        indicator.removeEventListener("click", () => {});
      });
    };
  }, []);

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
    name: "Luxury Camping Tents in Tapovan Rishikesh | Christmas & New Year Special Offers",
    description:
      "Premium glamping experience with luxury tents near Ganga river. Special Christmas & New Year offers available! Choose from AC tents, cooler tents, and budget options. Book now for festive season discounts.",
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
            priceValidUntil: "2025-01-31",
            description:
              "Special Christmas & New Year offers available. Book now for festive season discounts on luxury camping tents in Rishikesh.",
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
    specialAnnouncement: [
      {
        "@type": "SpecialAnnouncement",
        name: "Christmas Special Offer",
        text: "Celebrate Christmas by the Ganga! Special discounts on all tent types. Perfect for families and groups looking for a magical riverside Christmas experience in Rishikesh.",
        datePublished: "2024-12-01",
        expires: "2024-12-31",
        category: "SpecialOffer",
      },
      {
        "@type": "SpecialAnnouncement",
        name: "New Year Special Offer",
        text: "Ring in the New Year with an unforgettable glamping experience! Special New Year packages available on AC tents, cooler tents, and budget options.",
        datePublished: "2024-12-15",
        expires: "2025-01-15",
        category: "SpecialOffer",
      },
    ],
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
      <section className="pt-20 pt-md-30 pt-lg-40 tents-hero bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 py-8 py-md-12 py-lg-16 relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <div className="container relative z-10">
          {showBreadcrumb && (
            <nav aria-label="breadcrumb" className="mb-2 mb-md-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Our Tents
                </li>
              </ol>
            </nav>
          )}

          {/* <section className="offer-slider ">
            <div
              id="offerCarousel"
              className="carousel slide offer-carousel"
              data-bs-ride="carousel"
              data-bs-interval="3000"
              data-bs-pause="hover"
              data-bs-wrap="true"
            >
              <div className="carousel-inner offer-carousel-inner">
                <div className="carousel-item active">
                  <div className="offer-image-wrapper">
                    <Image
                      width={500}
                      height={500}
                      src="/assets/offers/christmas.jpg"
                      className="offer-image"
                      alt="Christmas Offer Tapovan Swiss Camps"
                      loading="lazy"
                    />
                  </div>
                  <div className="offer-content-overlay">
                    <div className="offer-content">
                      <h2 className="offer-headline">
                        🎄 Christmas Special Offer 🎄
                      </h2>
                      <p className="offer-description">
                        Celebrate Christmas by the Ganga! Book your luxury
                        camping tent now and enjoy special discounts on all tent
                        types. Perfect for families and groups looking for a
                        magical riverside Christmas experience in Rishikesh.
                      </p>
                      <Link
                        href="/booking-form"
                        className="btn btn-light offer-cta-btn rounded-pill mt-2 mt-md-3"
                      >
                        Book Now & Save
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="offer-image-wrapper">
                    <Image
                      width={500}
                      height={500}
                      src="/assets/offers/newyear_banner.png"
                      className="offer-image"
                      alt="New Year Offer Tapovan Swiss Camps"
                      loading="lazy"
                    />
                  </div>
                  <div className="offer-content-overlay">
                    <div className="offer-content">
                      <h2 className="offer-headline">
                        🎉 New Year Special Offer 🎉
                      </h2>
                      <p className="offer-description">
                        Ring in the New Year with an unforgettable glamping
                        experience! Special New Year packages available on AC
                        tents, cooler tents, and budget options. Start 2025 with
                        adventure, nature, and luxury by the sacred Ganga river.
                      </p>
                      <Link
                        href="/booking-form"
                        className="btn btn-light offer-cta-btn rounded-pill mt-2 mt-md-3"
                      >
                        Book Your New Year Stay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* <div className="row align-items-center"> */}
          <div className="col-12 col-lg-12">
            <div style={{marginTop: "40px"}} className="hero-content">
              
              <h1 className="tents-hero-title text-center fw-bold text-dark mb-2 mb-md-4">
                Luxury{" "}
                <span className="text-primary-custom">Camping Tent </span>
                <span className="d-md-none"> </span>
                in Tapovan Rishikesh
              </h1>
              <p className="tents-hero-description text-muted mb-3 mb-md-5 mb-lg-6">
                Experience the perfect blend of nature and comfort in our
                premium camping tents. From luxury AC tents to budget-friendly
                options, find your ideal riverside retreat by the sacred Ganga
                river.
              </p>

              <div className="hero-stats d-flex flex-wrap justify-content-center  gap-2 gap-md-4 mb-3 mb-md-5">
                <div className="stat-item text-center">
                  <div className="tents-stat-number text-primary-custom mb-0 mb-md-1">
                    3
                  </div>
                  <small className="tents-stat-label text-muted">
                    Tent Types
                  </small>
                </div>
                <div className="stat-item text-center">
                  <div className="tents-stat-number text-primary-custom mb-0 mb-md-1">
                    ₹999
                  </div>
                  <small className="tents-stat-label text-muted">
                    Starting Price
                  </small>
                </div>
                <div className="stat-item text-center">
                  <div className="tents-stat-number text-primary-custom mb-0 mb-md-1">
                    5★
                  </div>
                  <small className="tents-stat-label text-muted">
                    Guest Rating
                  </small>
                </div>
                <div className="stat-item text-center">
                  <div className="tents-stat-number text-primary-custom mb-0 mb-md-1">
                    24/7
                  </div>
                  <small className="tents-stat-label text-muted">Support</small>
                </div>
              </div>
              {/* <div className="hero-cta d-flex flex-row flex-wrap gap-2 justify-content-center ">
                <Link
                  href="#tents-section"
                  className="btn btn-primary-custom tents-cta-btn text-white rounded-pill"
                >
                  View All Tents
                </Link>
                <Link
                  href="/booking-form"
                  className="btn btn-outline-primary-custom tents-cta-btn border border-2 border-gray rounded-pill"
                >
                  <i className="bx bx-calendar me-1 me-md-2"></i>
                  Book Now
                </Link>
              </div> */}
            </div>
          </div>
          {/* <div className="col-12 col-lg-4 mt-4 mt-lg-0 d-none d-lg-block">
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
            </div> */}
        </div>
        {/* </div> */}
      </section>

      {/* Tents Section */}
      <section id="tents-section" className="tents-section ">
        <div className="container mb-20">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center mb-3 mb-md-5">
                <h2 className="tents-section-title fw-bold text-dark mb-2 mb-md-4">
                  Choose Your Perfect{" "}
                  <span className="text-primary-custom">Tent</span>
                </h2>
                <p className="tents-section-description text-muted mb-0">
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
