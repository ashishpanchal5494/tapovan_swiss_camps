"use client";

import Script from "next/script";

/**
 * New Year Offer SEO Component
 * Provides structured data and SEO-optimized content for New Year camping offers
 */
export default function NewYearOfferSEO() {
  const newYearOfferSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "New Year 2026 Special Camping Offer - Tapovan Swiss Camps Rishikesh",
    description:
      "Celebrate New Year 2026 at Tapovan Swiss Camps! Exclusive discounts on luxury AC tents, cooler tents with Ganga river views. Special New Year packages include bonfire, delicious food, adventure activities, and unforgettable memories. Limited time offer - Book now!",
    category: "Travel & Tourism",
    seller: {
      "@type": "LodgingBusiness",
      name: "Tapovan Swiss Camps",
      url: "https://www.tapovanswisscampsofficial.com",
      telephone: "+91-7906924003",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rishikesh",
        addressRegion: "Uttarakhand",
        addressCountry: "IN",
      },
    },
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "INR",
      price: "999",
      priceType: "https://schema.org/MinimumPrice",
      referenceQuantity: {
        "@type": "QuantitativeValue",
        value: 1,
        unitCode: "DAY",
      },
    },
    availability: "https://schema.org/InStock",
    validFrom: "2025-12-01",
    validThrough: "2026-01-31",
    url: "https://www.tapovanswisscampsofficial.com",
    image: [
      "https://www.tapovanswisscampsofficial.com/assets/offers/new_year_offer.png",
      "https://www.tapovanswisscampsofficial.com/assets/img/room/gardenPhoto.webp",
      "https://www.tapovanswisscampsofficial.com/assets/img/room/ACTent1.webp",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
      bestRating: "5",
    },
    includesObject: [
      {
        "@type": "Service",
        name: "Luxury AC Tent Stay",
        description: "Premium air-conditioned tent accommodation",
      },
      {
        "@type": "Service",
        name: "Meals",
        description: "Delicious breakfast, lunch, and dinner",
      },
      {
        "@type": "Service",
        name: "Bonfire",
        description: "Evening bonfire with music and entertainment",
      },
      {
        "@type": "Service",
        name: "Adventure Activities",
        description: "Rafting, swimming, and adventure sports",
      },
    ],
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "New Year 2026 Celebration at Tapovan Swiss Camps",
    description:
      "Join us for an unforgettable New Year celebration in Rishikesh! Experience luxury camping with AC tents, enjoy Ganga river views, bonfire, delicious food, adventure activities, and create lasting memories. Special New Year packages available.",
    startDate: "2025-12-31T18:00:00+05:30",
    endDate: "2026-01-02T11:00:00+05:30",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Tapovan Swiss Camps",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Deecon Valley Road, Vill. Dholshoot Tapovan",
        addressLocality: "Rishikesh",
        addressRegion: "Uttarakhand",
        postalCode: "249137",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "30.1394296",
        longitude: "78.315361",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Tapovan Swiss Camps",
      url: "https://www.tapovanswisscampsofficial.com",
      telephone: "+91-7906924003",
    },
    offers: {
      "@type": "Offer",
      price: "999",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://www.tapovanswisscampsofficial.com",
      validFrom: "2025-12-01",
      validThrough: "2026-01-31",
    },
    image: [
      "https://www.tapovanswisscampsofficial.com/assets/offers/new_year_offer.png",
    ],
  };

  return (
    <>
      {/* New Year Offer Structured Data */}
      <Script
        id="new-year-offer-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(newYearOfferSchema)}
      </Script>

      {/* New Year Event Structured Data */}
      <Script
        id="new-year-event-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(eventSchema)}
      </Script>

      {/* SEO-Optimized Content Section (Hidden but crawlable) */}
      <div className="seo-content-section" style={{ display: "none" }}>
        <h1>
          New Year 2026 Special Offer - Luxury Camping in Rishikesh | Tapovan
          Swiss Camps
        </h1>
        <h2>Celebrate New Year 2026 at Best Camping Resort in Rishikesh</h2>
        <p>
          Welcome the New Year 2026 with an extraordinary camping experience at
          Tapovan Swiss Camps, Rishikesh&apos;s premier luxury camping destination.
          Our exclusive New Year offer brings you the best of adventure,
          comfort, and celebration by the holy Ganges River. Book your New Year
          getaway now and avail special discounts on premium AC tents and cooler
          tents with breathtaking Ganga river views.
        </p>

        <h2>Why Choose Tapovan Swiss Camps for New Year 2026?</h2>
        <ul>
          <li>
            <strong>Luxury AC Tents:</strong> Experience premium comfort with
            fully air-conditioned Swiss tents featuring modern amenities and
            stunning Ganga river views. Perfect for couples and families
            seeking a luxurious camping experience in Rishikesh.
          </li>
          <li>
            <strong>Cooler Tents:</strong> Budget-friendly cooler tents with
            natural ventilation, ideal for adventure enthusiasts and groups
            looking for an authentic camping experience near the Ganges.
          </li>
          <li>
            <strong>New Year Bonfire:</strong> Celebrate under the stars with
            our special New Year bonfire, music, and entertainment. Create
            unforgettable memories with your loved ones.
          </li>
          <li>
            <strong>Delicious Food:</strong> Enjoy mouth-watering vegetarian
            and non-vegetarian meals prepared with fresh, local ingredients.
            Our New Year special menu includes traditional and continental
            dishes.
          </li>
          <li>
            <strong>Adventure Activities:</strong> Make your New Year exciting
            with river rafting, swimming, yoga sessions, and various adventure
            sports. Perfect for thrill-seekers and adventure lovers.
          </li>
          <li>
            <strong>Ganga River Views:</strong> Wake up to mesmerizing views of
            the holy Ganges River. Our riverside camping location offers
            tranquility and spiritual vibes.
          </li>
        </ul>

        <h2>New Year 2026 Camping Packages & Prices</h2>
        <p>
          Our New Year special offer includes discounted rates on all camping
          packages. Starting from just ₹999 per person, you can enjoy a
          complete camping experience with accommodation, meals, bonfire, and
          access to all facilities. Special group discounts available for
          families and friends traveling together.
        </p>

        <h2>Best New Year Camping Experience in Rishikesh</h2>
        <p>
          Tapovan Swiss Camps is the best choice for New Year celebrations in
          Rishikesh. Located in the serene Tapovan area, we offer the perfect
          blend of luxury and adventure. Whether you&apos;re planning a romantic
          getaway, family vacation, or friends&apos; trip, our New Year packages are
          designed to make your celebration memorable.
        </p>

        <h2>Book Your New Year 2026 Camping Now</h2>
        <p>
          Don&apos;t miss out on this limited-time New Year offer! Book your stay at
          Tapovan Swiss Camps today and secure the best rates for New Year 2026.
          Our special packages are valid until January 31, 2026. Call us at
          +91-7906924003 or book online to avail exclusive New Year discounts.
        </p>

        <h2>New Year Camping in Rishikesh - Frequently Asked Questions</h2>
        <h3>What is included in the New Year camping package?</h3>
        <p>
          Our New Year package includes luxury tent accommodation (AC or cooler
          tents), all meals (breakfast, lunch, dinner), evening bonfire,
          access to swimming pool, and basic adventure activities. Special New
          Year celebrations with music and entertainment are also included.
        </p>

        <h3>What are the New Year camping prices in Rishikesh?</h3>
        <p>
          New Year camping prices start from ₹999 per person per night for
          cooler tents and ₹1799 for luxury AC tents. Special group discounts
          and family packages are available. Contact us for customized New
          Year packages.
        </p>

        <h3>Is New Year camping in Rishikesh safe?</h3>
        <p>
          Yes, Tapovan Swiss Camps ensures complete safety with 24/7 security,
          trained staff, and all necessary safety measures. Our campsite is
          well-maintained and follows all safety protocols for a secure and
          enjoyable New Year celebration.
        </p>

        <h3>What activities are available during New Year camping?</h3>
        <p>
          New Year camping at Tapovan Swiss Camps includes river rafting,
          swimming, yoga sessions, bonfire, music, adventure sports, and
          exploration of nearby attractions. Special New Year events and
          celebrations are organized.
        </p>

        <h2>Keywords: New Year Camping Rishikesh, New Year 2026 Offer, Luxury Camping Rishikesh, New Year Packages Rishikesh, Best Camping in Rishikesh for New Year, New Year Celebration Rishikesh, AC Tents Rishikesh New Year, Ganga River Camping New Year, Rishikesh New Year Special Offer, Tapovan Swiss Camps New Year</h2>
      </div>
    </>
  );
}

