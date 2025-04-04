"use client";

import React, { useEffect, useState } from "react";

import AOS from "aos";
import $ from "jquery"; // Import jQuery
import "aos/dist/aos.css";
import Slider from "react-slick";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Loading from "@/components/Loading";

const testimonials = [
  {
    img: "/assets/img/testimonial/testimonial-1.png",
    name: "Andrew Smith",
    role: "Motivational Speaker",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali.",
  },
  {
    img: "/assets/img/testimonial/testimonial-2.png",
    name: "Jane Ronan",
    role: "Insurance Expert",
    rating: 5,
    feedback:
      "Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    img: "/assets/img/testimonial/testimonial-3.png",
    name: "Jenin Pamela",
    role: "Social Influencer",
    rating: 5,
    feedback:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    img: "/assets/img/testimonial/testimonial-4.png",
    name: "Daisy Lucy",
    role: "Graphics Designer",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali.",
  },
  {
    img: "/assets/img/testimonial/testimonial-5.png",
    name: "Taylor Sopia",
    role: "Digital Marketer",
    rating: 5,
    feedback:
      "Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    img: "/assets/img/testimonial/testimonial-6.png",
    name: "John Doe",
    role: "Banker",
    rating: 5,
    feedback:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Testimonial: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

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
  return (
    <>
      <div className="testimonial-area ptb-60">
        <div className="container">
          <div
            className="section-title "
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h2>Our Clients Feedback</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row align-items-center testimonial-grid">
            {" "}
            {/* Adds left and right padding */}
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="single-testimonial-box">
                    <div className="content-bg p-4 shadow-sm">
                      <ul className="list-inline">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <li key={i} className="list-inline-item text-warning">
                            <i className="bx bxs-star"></i>
                          </li>
                        ))}
                        <li className="list-inline-item">
                          <span>({testimonial.rating}.0)</span>
                        </li>
                      </ul>
                      <p>{testimonial.feedback}</p>
                    </div>
                    <div className="client-info text-center mt-3">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="rounded-circle"
                        width="80"
                        height="80"
                      />
                      <h3 className="mt-2">{testimonial.name}</h3>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
