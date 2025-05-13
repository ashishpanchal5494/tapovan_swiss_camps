"use client";

import Image from "next/image";
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
      image: "/assets/img/testimonial/review1.webp",
      name: "Rishav Pandey",

      text: "It is 3KM above tapovan in the mountains. Very quite and full of scenic views. They offer a great 4 time food service. It is a great place to enjoy your morning away from all the rishikesh traffic noise.",
    },
    {
      image: "/assets/img/testimonial/review2.webp",
      name: "lucky singh",

      text: `The best thing is pick up and drop service from main road. Normal driver can't drive easily.Anuji ji very cooperative.
1. Location is good
2. Try crispy corn
3. Come on weekend not week days, zero crowd on week days
4. Service is slow
5. All overall good experience.`,
    },
    {
      image: "/assets/img/testimonial/review3.webp",
      name: "Rachna Choudary",

      text: `Great place for the price you pay here. Service was amazing,they took care of the food preferences and made sure are served well!
Must visit this place if you are visiting Rishikesh and want to spend sometime in quiet ❤️.`,
    },
    {
      image: "/assets/img/testimonial/review4.webp",
      name: "AMAN KASHYAP",

      text: "Great service provided quality is awesome definitely i will prefer and refer this property if someone is planning camping great thanks for best stay.",
    },
    {
      image: "/assets/img/testimonial/review5.webp",
      name: "Vishal Gupta",

      text: "One of the best camp in Rishikesh. I really loved this beautiful campsite. Come here and enjoy your stay with the good food and good staff.",
    },
    {
      image: "/assets/img/testimonial/review6.webp",
      name: "Praveen Kumar",

      text: "It is a quiet good place near to Laxman jhula ..it is located in mid of hill..it is okay okay properly with small size swimming pool and simple place.",
    },
    {
      image: "/assets/img/testimonial/review7.webp",
      name: "Rajesh Kumar",

      text: "Great service food quality is awesome definitely i will prefer and refer this property if someone is planning for Camping and they provide all services like scooty and rafting.. great thanks great stay.",
    },
    {
      image: "/assets/img/testimonial/review8.webp",
      name: "Parveen Pannu",

      text: "Beautiful place with the good service and best accommodation with tasty food. Must recommended 👌.",
    },
    {
      image: "/assets/img/testimonial/review9.webp",
      name: "Lovika Chutani",

      text: `Best budget trip!
Fully enjoyed at their camp.
Would recommend everyone pls go once over there u would definitely enjoy their hostile environment and friendly behaviour of their staff as well..`,
    },
    {
      image: "/assets/img/testimonial/review10.webp",
      name: "Gourav Kumar",

      text: `This property is very amazing. Camp staff is very humble food like home made
Good service and location is very beautiful my experience was very cool ,tent is very good .`,
    },
    {
      image: "/assets/img/testimonial/review11.webp",
      name: "Chitransh Gupta",

      text: `Beautiful camp. We enjoyed so much here. I heardly recommend this to people who planing their trip in Rishikesh ❤️.`,
    },
    {
      image: "/assets/img/testimonial/review12.webp",
      name: "Sumit Kumar",

      text: `Very good experience.. best place for family visits.. The owner's behaviour is very nice.`,
    },
    {
      image: "/assets/img/testimonial/review13.webp",
      name: "Ankit Yadav",

      text: `Best camping 👍👍place
Best food facility♥️
Crew faculty awesome everyone’s friendly nature and good persons👍.`,
    },
    {
      image: "/assets/img/testimonial/review14.webp",
      name: "Deepika Thapa",

      text: `It's my first experience i love it ❤️ whenever I came i surely visit there.... I recommend my frnds nd family. Service nd rooms are very gud it's a cheapest rooms nd there food is too much gud.`,
    },
    {
      image: "/assets/img/testimonial/review15.webp",
      name: "Piyush Maheshwari",

      text: `Very Nice place with awesome View.. enjoyed with my Family..`,
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
          <h2>What Our Guests Say – Verified Camping Reviews in Rishikesh</h2>
          <p>
            Discover real experiences from travelers who have stayed at our
            campsite in the serene hills of Tapovan, Rishikesh. Our guests
            consistently praise our hospitality, scenic mountain views,
            delicious food, and peaceful atmosphere. Whether you&lsquo;re
            looking for an adventure-packed weekend or a quiet getaway, see why
            our guests recommend us as the{" "}
            <strong>best budget camping site near Tapovan, Rishikesh</strong>.
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
                  <Image
                    width={200}
                    height={200}
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <h3>{testimonial.name}</h3>
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
