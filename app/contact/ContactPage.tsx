"use client";

import Loading from "@/components/Loading";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

function ContactPage() {
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
    setSuccessMessage("Thanks for reaching out! We'll be in touch very soon.");
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  if (!isClient) return <Loading />;

  return (
    <>
      {/* Schema.org ContactPage markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Tapovan Swiss Camps",
          description:
            "Contact page for adventure camping and rafting bookings in Rishikesh",
          url: "https://tapovanswisscampsofficial.com/contact",
          potentialAction: {
            "@type": "ContactAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://tapovanswisscampsofficial.com/contact",
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform",
              ],
            },
            "query-input":
              "required name=name email=email phone=phone_number subject=msg_subject message=message",
          },
        })}
      </script>

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
            streetAddress: "Tapovan",
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

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://tapovanswisscampsofficial.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact",
              item: "https://tapovanswisscampsofficial.com/contact",
            },
          ],
        })}
      </script>
      <section
        className={`contact-form-area ${isMobile ? "ptb-200" : "ptb-60"}`}
      >
        <div className="container">
          <div className="section-title text-center">
            <h1>Get In Touch With Our Adventure Team</h1>
            <p className="lead">
              Have questions about our <strong>luxury camping packages</strong>{" "}
              or <strong>Ganga river rafting</strong> adventures? Our
              Rishikesh-based experts are ready to help you plan your perfect
              getaway.
            </p>
          </div>

          <div className="row align-items-end">
            {/* Form */}
            <div className="col-lg-6">
              <form
                className="contact__form contact-form"
                onSubmit={handleSubmit}
              >
                <h3>We&lsquo;re Just One Message Away</h3>
                <p className="form-intro">
                  Fill this form for fastest response regarding:
                </p>
                <ul className="benefit-list">
                  <li>✓ Camping & rafting bookings</li>
                  <li>✓ Group discount inquiries</li>
                  <li>✓ Custom adventure packages</li>
                  <li>✓ Partnership opportunities</li>
                </ul>
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
                      placeholder: "+91 333 673 2945",
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
    </>
  );
}

export default ContactPage;
