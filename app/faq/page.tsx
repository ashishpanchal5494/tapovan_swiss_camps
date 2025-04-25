"use client";

import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import AOS from "aos";

const faqData = [
  {
    question: "How can I book a stay in the camp?",
    answer:
      "You can book your stay directly through our website by selecting your dates, tent type, and confirming the payment. It’s fast, secure, and you'll get the best rates guaranteed.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made up to 48 hours before check-in are eligible for a full refund. Cancellations after this period may incur charges.",
  },
  {
    question: "Are pets allowed at the camp area?",
    answer:
      "Yes, we are a pet-friendly camp! Please mention your pet while booking to ensure the availability of pet-friendly areas or tents.",
  },
  {
    question: "What facilities are available at the camp?",
    answer:
      "Our camp offers a swimming pool, indoor & outdoor games, free Wi-Fi, yoga, spa, cafe, food service, included meals, guided tours, and more to ensure your comfort and enjoyment.",
  },
  {
    question: "Do you offer pickup and drop-off services?",
    answer:
      "Yes, we offer convenient transfer services at an additional charge. You can add this option during the booking process or contact our support team.",
  },
  {
    question: "Is early check-in or late checkout available?",
    answer:
      "Early check-in and late checkout are subject to availability. Please contact us in advance to make arrangements.",
  },
  {
    question: "Are there any special offers or discounts available?",
    answer:
      "Yes! We regularly offer seasonal discounts and promotional packages. Check our 'Offers' page or follow us on social media to stay updated.",
  },
  {
    question: "Is it safe to make payments during booking?",
    answer:
      "Absolutely. We use secure payment gateways with end-to-end encryption to protect your transaction details.",
  },
  {
    question: "Can I modify my reservation after booking?",
    answer:
      "Yes, you can modify your reservation dates or guest details by contacting our manager or support team.",
  },
  {
    question: "Where is the camp located and how do I reach there?",
    answer:
      "We are located in Main Tapovan, Rishikesh, Uttarakhand. The camp is easily accessible by road, train, or air. You can find directions on our Contact page or via Google Maps.",
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

    AOS.init({ duration: 1200 });
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section
        className={
          isMobile ? "accordion-area ptb-200" : "accordion-area ptb-60"
        }
      >
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h2>Frequently Asked Questions</h2>
            <p>
              Find answers to the most common questions about our services and
              business approach.
            </p>
          </div>

          <div className="row align-items-center">
            {[0, 1].map((colIndex) => (
              <div key={colIndex} className="col-xl-6 col-lg-12">
                <div
                  className="faq-accordion"
                  data-aos="fade-up"
                  data-aos-duration="1600"
                >
                  <ul className="accordion">
                    {faqData
                      .slice(colIndex * 5, colIndex * 5 + 5)
                      .map((item, index) => {
                        const actualIndex = colIndex * 5 + index;
                        return (
                          <li
                            key={actualIndex}
                            className="accordion-item mtb-40"
                          >
                            <a
                              className={`accordion-title ${
                                activeIndex === actualIndex ? "active" : ""
                              }`}
                              href="javascript:void(0)"
                              onClick={() => toggleAccordion(actualIndex)}
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
                            >
                              <p>{item.answer}</p>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
