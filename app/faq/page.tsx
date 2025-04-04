"use client";

import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import AOS from "aos";
import $ from "jquery"; // Import jQuery

const faqData = [
  {
    question: "What do we mean by business?",
    answer:
      "Business refers to an organization or enterprising entity engaged in commercial, industrial, or professional activities.",
  },
  {
    question: "What are the positive aspects of business?",
    answer:
      "Positive aspects include financial independence, job creation, innovation, and economic growth.",
  },
  {
    question: "What are the negative aspects of business?",
    answer:
      "Challenges include financial risk, competition, long working hours, and economic uncertainty.",
  },
  {
    question: "What is the way to grow a business?",
    answer:
      "Effective growth strategies include marketing, customer retention, innovation, and strategic partnerships.",
  },
  {
    question: "Where should my business be involved?",
    answer:
      "Choosing the right market and industry depends on expertise, demand, and economic trends.",
  },
  {
    question: "How much money can be used to start a business?",
    answer:
      "Startup costs vary based on industry, business model, and operational needs.",
  },
  {
    question: "What are the benefits to business customers?",
    answer:
      "Customers benefit from quality products, services, reliability, and innovation.",
  },
  {
    question: "Ten easy rules to expand your business.",
    answer:
      "1. Understand your market 2. Build a strong brand 3. Leverage digital marketing 4. Focus on customer experience 5. Offer quality services 6. Optimize operations 7. Innovate 8. Expand strategically 9. Network effectively 10. Monitor performance.",
  },
  {
    question: "How do I highlight in the name of the business?",
    answer:
      "Choose a memorable, unique, and relevant name that reflects your brand identity.",
  },
  {
    question: "How do I analyze the promotion of the business?",
    answer:
      "Use data analytics, customer feedback, marketing KPIs, and A/B testing to evaluate promotional effectiveness.",
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
    // Ensure jQuery is loaded before OwlCarousel initializes
    if (typeof window !== "undefined") {
      (window as any).$ = (window as any).jQuery = $;
    }

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
