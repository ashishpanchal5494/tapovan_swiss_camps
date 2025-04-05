"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
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

  // Efficient Mobile Resize Listener with debounce
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    let resizeTimer: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        checkMobile();
      }, 150);
    };

    checkMobile();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // AOS Init & Client Check
  useEffect(() => {
    setIsClient(true);
    AOS.init({ duration: 1200 });
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with actual API call
    setSuccessMessage("Your message was sent successfully.");
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  if (!isClient) return <Loading />;

  return (
    <section className={`contact-form-area ${isMobile ? "ptb-200" : "ptb-60"}`}>
      <div className="container">
        <div className="section-title text-center">
          <h2>Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolore magna aliqua.
          </p>
        </div>

        <div className="row align-items-end">
          {/* Form */}
          <div className="col-lg-6">
            <form
              className="contact__form contact-form"
              onSubmit={handleSubmit}
            >
              <h3>Drop Us A Message</h3>
              <div className="row">
                {[
                  {
                    label: "Name",
                    name: "name",
                    type: "text",
                    placeholder: "Name",
                  },
                  {
                    label: "Email",
                    name: "email",
                    type: "email",
                    placeholder: "example@gmail.com",
                  },
                  {
                    label: "Phone",
                    name: "phone_number",
                    type: "text",
                    placeholder: "+1 (414) 312-4433",
                  },
                  {
                    label: "Subject",
                    name: "msg_subject",
                    type: "text",
                    placeholder: "Subject",
                  },
                ].map(({ name, type, placeholder }) => (
                  <div key={name} className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type={type}
                        name={name}
                        className="form-control"
                        placeholder={placeholder}
                        required
                        value={formData[name as keyof typeof formData]}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                ))}

                {/* Message */}
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

          {/* Image */}
          <div className="col-lg-6">
            <div className="contact-img">
              <Image
                src="/assets/img/contact-img.png"
                alt="Contact"
                width={300}
                height={200}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
