"use client";

import React, { useEffect, useState, useMemo, memo, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Loading from "@/components/Loading";
import {
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaMapMarkerAlt,
  FaThumbsUp,
  FaCalendarCheck,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Memoized testimonial data for better performance
const testimonials = [
  {
    id: 1,
    image: "/assets/img/testimonial/review1.webp",
    name: "Rishav Pandey",
    location: "Delhi",
    rating: 5,
    date: "2024-01-15",
    text: "It is 3KM above tapovan in the mountains. Very quite and full of scenic views. They offer a great 4 time food service. It is a great place to enjoy your morning away from all the rishikesh traffic noise.",
    verified: true,
    platform: "Google Reviews",
  },
  {
    id: 2,
    image: "/assets/img/testimonial/review2.webp",
    name: "Lucky Singh",
    location: "Mumbai",
    rating: 5,
    date: "2024-01-10",
    text: "The best thing is pick up and drop service from main road. Normal driver can't drive easily. Anuji ji very cooperative. Location is good, try crispy corn, come on weekend not week days, zero crowd on week days. Service is slow but overall good experience.",
    verified: true,
    platform: "Google Reviews",
  },
  {
    id: 3,
    image: "/assets/img/testimonial/review3.webp",
    name: "Rachna Choudary",
    location: "Bangalore",
    rating: 5,
    date: "2024-01-08",
    text: "Great place for the price you pay here. Service was amazing, they took care of the food preferences and made sure we are served well! Must visit this place if you are visiting Rishikesh and want to spend sometime in quiet ❤️.",
    verified: true,
    platform: "TripAdvisor",
  },
  {
    id: 4,
    image: "/assets/img/testimonial/review4.webp",
    name: "Aman Kashyap",
    location: "Pune",
    rating: 5,
    date: "2024-01-05",
    text: "Great service provided quality is awesome definitely i will prefer and refer this property if someone is planning camping great thanks for best stay.",
    verified: true,
    platform: "Google Reviews",
  },
  {
    id: 5,
    image: "/assets/img/testimonial/review5.webp",
    name: "Vishal Gupta",
    location: "Kolkata",
    rating: 5,
    date: "2024-01-03",
    text: "One of the best camp in Rishikesh. I really loved this beautiful campsite. Come here and enjoy your stay with the good food and good staff.",
    verified: true,
    platform: "Google Reviews",
  },
  {
    id: 6,
    image: "/assets/img/testimonial/review6.webp",
    name: "Praveen Kumar",
    location: "Chennai",
    rating: 4,
    date: "2023-12-28",
    text: "It is a quiet good place near to Laxman jhula. It is located in mid of hill. It is okay okay properly with small size swimming pool and simple place.",
    verified: true,
    platform: "Google Reviews",
  },
  {
    id: 7,
    image: "/assets/img/testimonial/review7.webp",
    name: "Rajesh Kumar",
    location: "Hyderabad",
    rating: 5,
    date: "2023-12-25",
    text: "Great service food quality is awesome definitely i will prefer and refer this property if someone is planning for Camping and they provide all services like scooty and rafting. Great thanks great stay.",
    verified: true,
    platform: "Google Reviews",
  },
  {
    id: 8,
    image: "/assets/img/testimonial/review8.webp",
    name: "Parveen Pannu",
    location: "Chandigarh",
    rating: 5,
    date: "2023-12-20",
    text: "Beautiful place with the good service and best accommodation with tasty food. Must recommended 👌.",
    verified: true,
    platform: "Google Reviews",
  },
  {
    id: 9,
    image: "/assets/img/testimonial/review9.webp",
    name: "Lovika Chutani",
    location: "Jaipur",
    rating: 5,
    date: "2023-12-18",
    text: "Best budget trip! Fully enjoyed at their camp. Would recommend everyone pls go once over there u would definitely enjoy their hostile environment and friendly behaviour of their staff as well.",
    verified: true,
    platform: "TripAdvisor",
  },
  {
    id: 10,
    image: "/assets/img/testimonial/review10.webp",
    name: "Gourav Kumar",
    location: "Ahmedabad",
    rating: 5,
    date: "2023-12-15",
    text: "This property is very amazing. Camp staff is very humble food like home made. Good service and location is very beautiful my experience was very cool, tent is very good.",
    verified: true,
    platform: "Google Reviews",
  },
  {
    id: 11,
    image: "/assets/img/testimonial/review11.webp",
    name: "Chitransh Gupta",
    location: "Indore",
    rating: 5,
    date: "2023-12-12",
    text: "Beautiful camp. We enjoyed so much here. I heardly recommend this to people who planing their trip in Rishikesh ❤️.",
    verified: true,
    platform: "Google Reviews",
  },
  {
    id: 12,
    image: "/assets/img/testimonial/review12.webp",
    name: "Sumit Kumar",
    location: "Bhopal",
    rating: 5,
    date: "2023-12-10",
    text: "Very good experience. Best place for family visits. The owner's behaviour is very nice.",
    verified: true,
    platform: "Google Reviews",
  },
  {
    id: 13,
    image: "/assets/img/testimonial/review13.webp",
    name: "Ankit Yadav",
    location: "Lucknow",
    rating: 5,
    date: "2023-12-08",
    text: "Best camping 👍👍 place. Best food facility ♥️. Crew faculty awesome everyone's friendly nature and good persons 👍.",
    verified: true,
    platform: "Google Reviews",
  },
  {
    id: 14,
    image: "/assets/img/testimonial/review14.webp",
    name: "Deepika Thapa",
    location: "Dehradun",
    rating: 5,
    date: "2023-12-05",
    text: "It's my first experience i love it ❤️ whenever I came i surely visit there. I recommend my frnds nd family. Service nd rooms are very gud it's a cheapest rooms nd there food is too much gud.",
    verified: true,
    platform: "Google Reviews",
  },
  {
    id: 15,
    image: "/assets/img/testimonial/review15.webp",
    name: "Piyush Maheshwari",
    location: "Kanpur",
    rating: 5,
    date: "2023-12-03",
    text: "Very Nice place with awesome View. Enjoyed with my Family.",
    verified: true,
    platform: "Google Reviews",
  },
];

// Memoized testimonial card component
type Testimonial = {
  id: string | number;
  image: string;
  name: string;
  location?: string;
  rating: number;
  date?: string;
  text: string;
  verified?: boolean;
  platform: string;
};

const TestimonialCard = memo(
  ({ testimonial }: { testimonial: Testimonial }) => {
    return (
      <div className="single-testimonial-box px-2">
        <div className="content-bg">
          <div className="quote-icon">
            <FaQuoteLeft className="quote-left" />
            <FaQuoteRight className="quote-right" />
          </div>

          <div className="rating-stars mb-3">
            {[...Array<number>(testimonial.rating)].map((_, i) => (
              <FaStar key={i} className="star-filled" />
            ))}
            <span className="rating-text">({testimonial.rating}.0)</span>
          </div>

          <p className="testimonial-text">{testimonial.text}</p>

          <div className="testimonial-meta">
            <div className="verified-badge">
              <FaThumbsUp className="verified-icon" />
              <span>Verified {testimonial.platform}</span>
            </div>
            {/* <div className="review-date">
                {testimonial.date
                  ? typeof testimonial.date === "string" &&
                    testimonial.date.includes("-")
                    ? new Date(testimonial.date).toLocaleDateString()
                    : testimonial.date
                  : "Recent"}
              </div> */}
          </div>
        </div>

        <div className="client-info mt-1">
          {/* <div className="client-avatar">
              <Image
                width={80}
                height={80}
                src={
                  testimonial.image === "/assets/img/testimonial/default.webp"
                    ? "/assets/img/testimonial/default-avatar.svg"
                    : testimonial.image
                }
                alt={`Review by ${testimonial.name}`}
                loading="lazy"
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSI0MCIgZmlsbD0iIzRBOTBFMiIvPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLCA0MCkiPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9Ii04IiByPSIxMiIgZmlsbD0id2hpdGUiLz4KICAgIDxwYXRoIGQ9Ik0tMjAsMjAgQy0yMCw4IC04LDAgMCwwIEM4LDAgMjAsOCAyMCwyMCBMMjAsNDAgTC0yMCw0MCBaIiBmaWxsPSJ3aGl0ZSIvPgogIDwvZz4KPC9zdmc+"
                className="rounded-circle"
              />
              {testimonial.verified && (
                <div className="verified-check">
                  <FaHeart className="heart-icon" />
                </div>
              )}
            </div> */}
          <div className="client-details">
            <h3 className="client-name">{testimonial.name}</h3>
            <div className="client-location">
              <FaMapMarkerAlt className="location-icon" />
              <span>{testimonial.location || "India"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

TestimonialCard.displayName = "TestimonialCard";

const TestimonialPage: React.FC = memo(() => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  // Memoized resize handler
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    setIsClient(true);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Use static testimonials
  const allTestimonials = useMemo(() => {
    return testimonials;
  }, []);

  // Memoized structured data
  const reviewStructuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Tapovan Swiss Camps",
      image: "https://www.tapovanswisscampsofficial.com/assets/img/logo.png",
      description:
        "Premium camping and glamping experience in Rishikesh with luxury tents, adventure activities, and scenic mountain views",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Deecon Valley Road, Vill. Dholshoot Tapovan",
        addressLocality: "Rishikesh",
        addressRegion: "Uttarakhand",
        postalCode: "249192",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "30.1394342",
        longitude: "78.3127861",
      },
      telephone: "+917906924003",
      url: "https://www.tapovanswisscampsofficial.com",
      priceRange: "₹₹",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "50+",
        bestRating: "5",
        worstRating: "1",
      },
      review: allTestimonials.slice(0, 10).map((testimonial) => ({
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: testimonial.rating.toString(),
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: testimonial.name,
        },
        datePublished: testimonial.date,
        reviewBody: testimonial.text,
        publisher: {
          "@type": "Organization",
          name: testimonial.platform,
        },
      })),
    }),
    [allTestimonials]
  );

  // Memoized FAQ structured data
  const faqStructuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What do guests say about Tapovan Swiss Camps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Guests consistently rate Tapovan Swiss Camps 5/5 stars, praising our scenic mountain location, excellent food service, friendly staff, and peaceful atmosphere away from city noise.",
          },
        },
        {
          "@type": "Question",
          name: "Is Tapovan Swiss Camps good for families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Our reviews show that families love our campsite for its safe environment, good food, and family-friendly activities. Many guests specifically mention bringing their families.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Tapovan Swiss Camps special?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our guests highlight our scenic mountain location 3KM above Tapovan, excellent 4-time food service, peaceful atmosphere, and comprehensive services including pick-up/drop and adventure activities.",
          },
        },
      ],
    }),
    []
  );

  const showBreadcrumb = pathname === "/testimonial";

  if (!isClient) {
    return <Loading />;
  }

  return (
    <>
      {/* High-Quality CSS Styles */}
      <style jsx>{`
        .testimonial-area {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          overflow: hidden;
        }

        .testimonial-area::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("/assets/img/gallery/gardenPhoto.webp") center/cover;
          opacity: 0.05;
          z-index: 0;
        }

        .testimonial-area > * {
          position: relative;
          z-index: 1;
        }

        .section-title h2 {
          background: linear-gradient(135deg, #007bff, #0056b3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .rating-badge {
          background: linear-gradient(135deg, #28a745, #20c997);
          color: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(40, 167, 69, 0.3);
          display: inline-block;
          margin: 2rem 0;
        }

        .rating {
          font-size: 3rem;
          font-weight: 700;
          display: block;
        }

        .stars {
          margin: 1rem 0;
        }

        .stars i {
          font-size: 1.5rem;
          margin: 0 2px;
          color: #ffc107;
          text-shadow: 0 2px 4px rgba(255, 193, 7, 0.3);
        }

        .single-testimonial-box {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .single-testimonial-box::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #007bff, #28a745, #ffc107);
        }

        .single-testimonial-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .content-bg {
          margin-bottom: 2rem;
          position: relative;
        }

        .quote-icon {
          position: absolute;
          top: -10px;
          right: 0;
          opacity: 0.1;
        }

        .quote-left,
        .quote-right {
          font-size: 3rem;
          color: #007bff;
        }

        .rating-stars {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .star-filled {
          color: #ffc107;
          font-size: 1.2rem;
          text-shadow: 0 2px 4px rgba(255, 193, 7, 0.3);
        }

        .rating-text {
          color: #6c757d;
          font-weight: 600;
          margin-left: 0.5rem;
        }

        .testimonial-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #495057;
          margin: 1.5rem 0;
          font-style: italic;
        }

        .testimonial-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e9ecef;
        }

        .verified-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #28a745;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .verified-icon {
          font-size: 1rem;
        }

        .review-date {
          color: #6c757d;
          font-size: 0.9rem;
        }

        .client-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .client-avatar {
          position: relative;
        }

        .client-avatar img {
          border: 3px solid #007bff;
          transition: all 0.3s ease;
        }

        .single-testimonial-box:hover .client-avatar img {
          border-color: #28a745;
          transform: scale(1.05);
        }

        .verified-check {
          position: absolute;
          bottom: -5px;
          right: -5px;
          background: #28a745;
          color: white;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          border: 2px solid white;
        }

        .client-details h3 {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 600;
          color: #212529;
        }

        .client-location {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: #6c757d;
          font-size: 0.9rem;
          margin-top: 0.3rem;
        }

        .location-icon {
          font-size: 0.8rem;
        }


        .fa-spin {
          animation: fa-spin 1s infinite linear;
        }

        @keyframes fa-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .swiper {
          padding: 2rem 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .stat-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #007bff;
          display: block;
        }

        .stat-label {
          color: #6c757d;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        .cta-section {
         background: linear-gradient(135deg, rgb(80, 118, 80) 0%, rgb(107, 155, 107) 50%, rgb(139, 176, 139) 100%);
          );
          border-radius: 0;
          padding: 3rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-icon {
          margin-bottom: 1.5rem;
        }

        .cta-icon i,
        .cta-icon svg {
          font-size: 4rem;
          color: white;
          opacity: 0.9;
        }

        .cta-section h2,
        .cta-section h3 {
          color: white;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .cta-section h2 .text-warning,
        .cta-section h3 .text-warning {
          color: #ffc107 !important;
        }

        .cta-section p {
          color: rgba(255, 255, 255, 0.95);
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          position: relative;
          z-index: 1;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          color: #007bff;
          padding: 0.875rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          border: 2px solid transparent;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          background: #f8f9fa;
          color: #0056b3;
        }

        .cta-button-outline {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-button-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border-color: white;
        }

        .cta-button-icon {
          font-size: 1.1rem;
        }

        .cta-features {
          margin-top: 2.5rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.95);
          font-size: 0.9rem;
        }

        .feature-item i,
        .feature-item svg {
          color: #ffc107;
          font-size: 1.1rem;
          margin-right: 0.5rem;
        }

        @media (max-width: 768px) {
          .section-title h2 {
            font-size: 2rem;
          }

          .single-testimonial-box {
            padding: 1.5rem;
          }

          .rating-badge {
            padding: 1.5rem;
          }

          .rating {
            font-size: 2.5rem;
          }

          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 0.5rem;
            margin: 2rem 0;
          }

          .stat-card {
            padding: 1rem 0.5rem;
          }

          .stat-number {
            font-size: 1.2rem;
          }

          .stat-label {
            font-size: 0.7rem;
            margin-top: 0.25rem;
          }

          .cta-section {
            padding: 2.5rem 1.5rem;
          }

          .cta-icon i,
          .cta-icon svg {
            font-size: 3rem;
          }

          .cta-section h2,
          .cta-section h3 {
            font-size: 1.75rem;
            margin-bottom: 1rem;
          }

          .cta-section p {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .cta-button {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
            width: 100%;
            justify-content: center;
          }

          .feature-item {
            font-size: 0.85rem;
          }
        }
      `}</style>

      {/* Structured Data */}
      {isClient && (
        <>
          <script type="application/ld+json">
            {JSON.stringify(reviewStructuredData)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(faqStructuredData)}
          </script>
        </>
      )}

      <div className={`testimonial-area ${isMobile ? "ptb-200" : "ptb-60"}`}>
        <div className="container">
          {showBreadcrumb && (
            <nav aria-label="breadcrumb" className=" mb-2 mb-md-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Testimonials
                </li>
              </ol>
            </nav>
          )}
          {/* Hero Section */}
          <div className="section-title text-center">
            <h2>
              What Our Guests Say – Verified 5-Star Camping Reviews in Rishikesh
            </h2>
            <p className="lead">
              Discover real experiences from travelers who have stayed at our
              premium campsite in the serene hills of Tapovan, Rishikesh. Our
              guests consistently praise our hospitality, scenic mountain views,
              delicious food, and peaceful atmosphere. Whether you&apos;re
              looking for an adventure-packed weekend or a quiet getaway, see
              why our guests recommend us as the{" "}
              <strong>best budget camping site near Tapovan, Rishikesh</strong>.
            </p>
          </div>

          {/* Rating Badge */}
          <div className="review-stats mb-5 text-center">
            <div className="rating-badge">
              <span className="rating">4.9</span>/5
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="star-filled" />
                ))}
              </div>
              <p className="mt-2 mb-0">
                Based on <strong>50+ verified reviews</strong> from Google
                Reviews, TripAdvisor, and our guests
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">50+</span>
              <div className="stat-label">Verified Reviews</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">4.9</span>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">95%</span>
              <div className="stat-label">Guest Satisfaction</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <div className="stat-label">Would Recommend</div>
            </div>
          </div>

          {/* Testimonials Slider */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={15}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            className="pb-4"
          >
            {allTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Call to Action */}
      <section className="cta-section py-5 py-md-6 py-lg-7 text-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="cta-content">
                <div className="cta-icon mb-4">
                  <FaCalendarCheck className="display-1 text-white" />
                </div>
                <h2 className="display-5 display-md-4 display-lg-3 fw-bold mb-4">
                  Ready to <span className="text-warning">Book Your Stay?</span>
                </h2>
                <p className="lead mb-5 mb-md-6">
                  Join hundreds of satisfied guests who have made unforgettable
                  memories at Tapovan Swiss Camps. Contact us today to book your
                  perfect camping experience in the serene hills of Rishikesh.
                </p>
                <div className="cta-buttons">
                  <a
                    href="/booking-form"
                    className="cta-button cta-button-outline"
                    aria-label="Book your stay at Tapovan Swiss Camps"
                  >
                    <FaCalendarCheck className="cta-button-icon" />
                    Book Your Stay Now
                  </a>

                  <a
                    href="https://api.whatsapp.com/send?phone=+917906924003&text=Hello, I'm interested in booking a stay at Tapovan Swiss Camps!"
                    className="cta-button cta-button-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                  >
                    <FaWhatsapp className="cta-button-icon" />
                    WhatsApp Us
                  </a>
                </div>
                <div className="cta-features mt-5">
                  <div className="row g-3">
                    <div className="col-6 col-md-3">
                      <div className="feature-item">
                        <FaCheckCircle />
                        <small>Instant Booking</small>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="feature-item">
                        <FaCheckCircle />
                        <small>Best Rates</small>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="feature-item">
                        <FaCheckCircle />
                        <small>24/7 Support</small>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="feature-item">
                        <FaCheckCircle />
                        <small>Flexible Cancellation</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

TestimonialPage.displayName = "TestimonialPage";

export default TestimonialPage;
