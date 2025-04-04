"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const TestimonialSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonials = [
    {
      image: "/assets/img/testimonial/testimonial-1.png",
      name: "Andrew Smith",
      role: "Motivational Speaker",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      image: "/assets/img/testimonial/testimonial-2.png",
      name: "Jane Ronan",
      role: "Insurance Expert",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      image: "/assets/img/testimonial/testimonial-3.png",
      name: "Jenin Pamela",
      role: "Social Influencer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      image: "/assets/img/testimonial/testimonial-4.png",
      name: "Daisy Lucy",
      role: "Graphics Designer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      image: "/assets/img/testimonial/testimonial-5.png",
      name: "Taylor Sopia",
      role: "Digital Marketer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      image: "/assets/img/testimonial/testimonial-6.png",
      name: "John Doe",
      role: "Banker",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="testimonial-area ptb-60">
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h2>Our Clients Feedback</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="single-testimonial-box px-2"
                data-aos="fade-up"
                data-aos-duration={1200 + index * 400}
              >
                <div className="content-bg">
                  <ul>
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <i className="bx bxs-star"></i>
                      </li>
                    ))}
                    <li>
                      <span>(5.0)</span>
                    </li>
                  </ul>
                  <p>{testimonial.text}</p>
                </div>
                <div className="client-info">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
