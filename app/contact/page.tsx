"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import $ from "jquery"; // Import jQuery
import Loading from "@/components/Loading";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    msg_subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const [isClient, setIsClient] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission (Replace with actual API call)
    setSuccessMessage("Your message was sent successfully.");
    setTimeout(() => setSuccessMessage(""), 5000); // Hide message after 5s
  };

  return (
    <>
      {/* Contact Section Start */}
      <section
        className={
          isMobile ? "contact-form-area ptb-200" : "contact-form-area ptb-60"
        }
      >
        <div className="container">
          <div className="section-title text-center">
            <h2>Get In Touch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida.
            </p>
          </div>

          <div className="row align-items-end">
            {/* Contact Form */}
            <div className="col-lg-6">
              <form
                className="contact__form contact-form"
                onSubmit={handleSubmit}
              >
                <h3>Drop Us A Message</h3>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="example@gmail.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone_number"
                        className="form-control"
                        placeholder="+1 (414) 312-4433"
                        required
                        value={formData.phone_number}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="msg_subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                        value={formData.msg_subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        cols={30}
                        rows={6}
                        placeholder="Your message here"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="submit-btn">
                      Send Message <i className="bx bx-chevron-right"></i>
                    </button>
                  </div>

                  {/* Success Message */}
                  {successMessage && (
                    <div className="col-12">
                      <div className="alert alert-success contact__msg">
                        {successMessage}
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Image */}
            <div className="col-lg-6">
              <div className="contact-img">
                <Image
                  src="/assets/img/contact-img.png"
                  alt="Contact"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
};

export default Contact;
