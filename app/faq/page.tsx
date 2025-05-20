"use client";

import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const faqData = [
  {
    question: "How can I book a stay in the camp?",
    answer:
      "You can book your stay directly through our website by selecting your dates, tent type, and confirming the payment. It's fast, secure, and you'll get the best rates guaranteed.",
    keywords: [
      "book camping rishikesh",
      "swiss tent booking",
      "how to reserve tapovan camps",
    ],
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made up to 48 hours before check-in are eligible for a full refund. Cancellations after this period may incur charges.",
    keywords: [
      "rishikesh camping cancellation",
      "refund policy tapovan",
      "last minute cancellation",
    ],
  },
  {
    question: "Are pets allowed at the camp area?",
    answer:
      "Yes, we are a pet-friendly camp! Please mention your pet while booking to ensure the availability of pet-friendly areas or tents.",
    keywords: [
      "pet friendly camping rishikesh",
      "dogs allowed in swiss tents",
      "camping with pets ganga",
    ],
  },
  {
    question: "What facilities are available at the camp?",
    answer:
      "Our camp offers a swimming pool, indoor & outdoor games, free Wi-Fi, yoga, spa, cafe, food service, included meals, guided tours, and more to ensure your comfort and enjoyment.",
    keywords: [
      "amenities at tapovan camps",
      "facilities in rishikesh camping",
      "luxury camp features",
    ],
  },
  {
    question: "Do you offer pickup and drop-off services?",
    answer:
      "Yes, we offer convenient transfer services at an additional charge. You can add this option during the booking process or contact our support team.",
    keywords: [
      "transport to tapovan camps",
      "rishikesh camping shuttle",
      "airport pickup for camps",
    ],
  },
  {
    question: "Is early check-in or late checkout available?",
    answer:
      "Early check-in and late checkout are subject to availability. Please contact us in advance to make arrangements.",
    keywords: [
      "early arrival rishikesh camp",
      "late checkout tapovan",
      "camping timing flexibility",
    ],
  },
  {
    question: "Are there any special offers or discounts available?",
    answer:
      "Yes! We regularly offer seasonal discounts and promotional packages. Check our 'Offers' page or follow us on social media to stay updated.",
    keywords: [
      "discounts on swiss tents",
      "rishikesh camping deals",
      "tapovan promo codes",
    ],
  },
  {
    question: "Is it safe to make payments during booking?",
    answer:
      "Absolutely. We use secure payment gateways with end-to-end encryption to protect your transaction details.",
    keywords: [
      "secure camping booking",
      "payment safety tapovan",
      "online reservation security",
    ],
  },
  {
    question: "Can I modify my reservation after booking?",
    answer:
      "Yes, you can modify your reservation dates or guest details by contacting our manager or support team.",
    keywords: [
      "change camping dates",
      "modify tent booking",
      "edit reservation tapovan",
    ],
  },
  {
    question: "Where is the camp located and how do I reach there?",
    answer:
      "We are located in Main Tapovan, Rishikesh, Uttarakhand. The camp is easily accessible by road, train, or air. You can find directions on our Contact page or via Google Maps.",
    keywords: [
      "tapovan camps location",
      "how to reach swiss tents",
      "directions to rishikesh camping",
    ],
  },
];

const FAQ = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
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

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!isClient) {
    return <Loading />;
  }

  // Generate FAQ schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  // Generate list of all keywords for meta tags
  const allKeywords = faqData.flatMap((item) => item.keywords).join(", ");

  return (
    <>
      <Head>
        <title>
          FAQs About Tapovan Swiss Camps - Rishikesh Camping & Rafting
        </title>
        <meta
          name="description"
          content="Find answers to all your questions about luxury camping and rafting in Rishikesh. Booking, cancellations, facilities, and more about Tapovan Swiss Camps."
        />
        <meta name="keywords" content={allKeywords} />
        <link
          rel="canonical"
          href="https://tapovanswisscampsofficial.com/faq"
        />

        {/* Open Graph / Social Media Meta Tags */}
        <meta
          property="og:title"
          content="FAQs | Tapovan Swiss Camps - Rishikesh Adventure Experts"
        />
        <meta
          property="og:description"
          content="Get all your questions answered about luxury camping and rafting experiences in Rishikesh with Tapovan Swiss Camps."
        />
        <meta
          property="og:url"
          content="https://tapovanswisscampsofficial.com/faq"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://tapovanswisscampsofficial.com/assets/img/room/group.webp"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FAQs About Tapovan Swiss Camps | Rishikesh"
        />
        <meta
          name="twitter:description"
          content="Everything you need to know before booking your luxury camping or rafting adventure in Rishikesh."
        />
        <meta
          name="twitter:image"
          content="https://tapovanswisscampsofficial.com/assets/img/room/group.webp"
        />

        {/* FAQ Schema Markup */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "Tapovan Swiss Camps",
            image: "https://tapovanswisscampsofficial.com/assets/img/logo.png",
            "@id": "https://tapovanswisscampsofficial.com",
            url: "https://tapovanswisscampsofficial.com",
            telephone: "+917906924003",
            priceRange: "₹999-₹1799",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Near Tapovan",
              addressLocality: "Rishikesh",
              postalCode: "249201",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 30.129,
              longitude: 78.3153,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            sameAs: [
              "https://www.facebook.com/61574061994310",
              "https://www.instagram.com/tapovanswisscampsofficial",
            ],
          })}
        </script>
      </Head>

      <section
        className={
          isMobile ? "accordion-area ptb-200" : "accordion-area ptb-60"
        }
      >
        <div className="container">
          <div className="section-title">
            <h1>Frequently Asked Questions About Tapovan Swiss Camps</h1>
            <p className="lead">
              Everything you need to know before booking your{" "}
              <strong>luxury camping</strong> or{" "}
              <strong>rafting adventure</strong> in Rishikesh. Can't find your
              answer? <Link href="/contact">Contact our team</Link> for
              personalized assistance.
            </p>
          </div>

          <div className="row align-items-center">
            {[0, 1].map((colIndex) => (
              <div key={colIndex} className="col-xl-6 col-lg-12">
                <div className="faq-accordion">
                  <ul className="accordion">
                    {faqData
                      .slice(colIndex * 5, colIndex * 5 + 5)
                      .map((item, index) => {
                        const actualIndex = colIndex * 5 + index;
                        return (
                          <li
                            key={actualIndex}
                            className="accordion-item mtb-40"
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                          >
                            <a
                              className={`accordion-title ${
                                activeIndex === actualIndex ? "active" : ""
                              }`}
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                toggleAccordion(actualIndex);
                              }}
                              itemProp="name"
                              aria-expanded={activeIndex === actualIndex}
                              aria-controls={`faq-${actualIndex}`}
                            >
                              <i
                                className={`bx ${
                                  activeIndex === actualIndex
                                    ? "bx-minus"
                                    : "bx-plus"
                                }`}
                              ></i>
                              {`${actualIndex + 1}. ${item.question}`}
                            </a>

                            <div
                              className={`accordion-content ${
                                activeIndex === actualIndex ? "show" : ""
                              }`}
                              style={{
                                height:
                                  activeIndex === actualIndex ? "auto" : "0",
                              }}
                              id={`faq-${actualIndex}`}
                              itemScope
                              itemProp="acceptedAnswer"
                              itemType="https://schema.org/Answer"
                            >
                              <div className="accordion-content-inner">
                                <p itemProp="text">{item.answer}</p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Additional CTA Section */}
          <div className="faq-cta mt-5">
            <div className="cta-box bg-primary text-white p-5 rounded">
              <h3>Still Have Questions?</h3>
              <p className="mb-4">
                Our adventure specialists are available 24/7 to help you plan
                your perfect Rishikesh getaway.
              </p>
              <a
                href="/contact"
                className="btn btn-light"
                aria-label="Contact our support team"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
