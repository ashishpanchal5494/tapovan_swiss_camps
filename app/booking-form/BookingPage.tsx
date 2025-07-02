"use client";

import React, { useState } from "react";

function BookingPage() {
  const [activeTab, setActiveTab] = useState<"camping" | "rafting">("camping");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    date: "",
    days: "1",
    adults: "1",
    children: "1",
    amount: "1000",
    tentType: "",
    ratingType: "",
  });

  const calculateTentPrice = (
    basePrice: number,
    beds: number,
    mainBasePrice: number,
    totalPersons: number,
    totalDays: number
  ) => {
    let perHeadPrice = basePrice;
    let perHeadMainPrice = mainBasePrice;
    const personsPerTent = totalPersons; // assuming 1 tent per booking form

    if (beds === 5) {
      if (personsPerTent === 2) {
        perHeadPrice = Math.round(basePrice * 1.6);
        perHeadMainPrice = Math.round(mainBasePrice * 1.6);
      } else if (personsPerTent === 3) {
        perHeadPrice = Math.round(basePrice * 1.3);
        perHeadMainPrice = Math.round(mainBasePrice * 1.3);
      } else if (personsPerTent === 4) {
        perHeadPrice = Math.round(basePrice * 1.1);
        perHeadMainPrice = Math.round(mainBasePrice * 1.1);
      }
    }

    const totalPrice = perHeadPrice * personsPerTent * totalDays;
    const totalMainPrice = perHeadMainPrice * personsPerTent * totalDays;

    return { perHeadPrice, totalPrice, perHeadMainPrice, totalMainPrice };
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const totalPersons = parseInt(formData.adults || "1");
    const totalDays = parseInt(formData.days || "1");

    const tentData = {
      "Luxury (AC) Tent": { price: 1499, mainPrice: 1999, beds: 5 },
      "Luxury (Cooler) Tent": { price: 1199, mainPrice: 1499, beds: 5 },
      "Ordinary Tent": { price: 999, mainPrice: 1199, beds: 3 },
    }[formData.tentType];

    let message = `${
      activeTab === "camping"
        ? `Camping Booking Details:`
        : `Rafting Booking Details:`
    }\nName: ${formData.name}\nAddress: ${formData.address}\nEmail: ${
      formData.email
    }\nPhone: ${formData.phone}`;

    if (formData.date) {
      message += `\nDate: ${formData.date}`;
    }

    if (activeTab === "camping") {
      message += `\nDays: ${formData.days}`;
    }

    message += `\nAdults: ${formData.adults}`;

    if (activeTab === "camping" && formData.children) {
      message += `\nChildren: ${formData.children}`;
    }

    if (activeTab === "camping" && formData.tentType) {
      message += `\nTent Type: ${formData.tentType}`;
    }

    if (activeTab === "rafting" && formData.ratingType) {
      message += `\nRafting Type: ${formData.ratingType}`;
    }

    if (tentData) {
      const { perHeadPrice, totalPrice } = calculateTentPrice(
        tentData.price,
        tentData.beds,
        tentData.mainPrice,
        totalPersons,
        totalDays
      );

      message += `\nPer head price Amount: ₹${perHeadPrice}`;
      message += `\nTotal price Amount: ₹${totalPrice}`;
    }

    message += `\nBooking Amount: ${formData.amount}`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://api.whatsapp.com/send?phone=+917906924003&text=${encodedMessage}`,
      "_blank"
    );

    // Reset form data
    setFormData({
      name: "",
      address: "",
      email: "",
      phone: "",
      date: "",
      days: "1",
      adults: "1",
      children: "1",
      amount: "1000",
      tentType: "",
      ratingType: "",
    });
  };

  return (
    <>
      {/* Add FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the best season for camping in Rishikesh?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The ideal season for camping in Rishikesh is from October to June, when the weather is pleasant and all adventure activities are operational.",
              },
            },
            {
              "@type": "Question",
              name: "Is rafting in Rishikesh safe for beginners?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide certified guides, safety gear, and beginner-friendly routes like the 16km Shivpuri to Rishikesh stretch.",
              },
            },
          ],
        })}
      </script>

      <section className="booking-area ptb-60">
        <div className="container">
          {/* SEO Content Section */}
          <div className="seo-content-section mb-5">
            <h1 className="text-center mb-3">
              {activeTab === "camping"
                ? "Best Camping in Rishikesh | Book Luxury Swiss Tents Near Ganga"
                : "White Water Rafting in Rishikesh | Best Ganga River Adventure"}
            </h1>
            <p className="text-center">
              {activeTab === "camping"
                ? "Experience the best riverside camping in Rishikesh with Swiss tents, bonfire, and adventure activities. Secure your dates now!"
                : "Enjoy thrilling rafting on the Ganges with certified guides. Choose from 12km, 16km or 22km rafting stretches. Instant confirmation!"}
            </p>
          </div>

          <nav className="booking-tabs-button ptb-40">
            <div className="nav nav-tabs">
              <button
                className={`nav-link ${
                  activeTab === "camping" ? "active" : ""
                }`}
                onClick={() => setActiveTab("camping")}
              >
                Camping
              </button>
              <button
                className={`nav-link ${
                  activeTab === "rafting" ? "active" : ""
                }`}
                onClick={() => setActiveTab("rafting")}
              >
                Rafting
              </button>
            </div>
          </nav>

          <div className="product-tabs-content">
            <div className="tab-content">
              <div className="col-12 contact-form book-form">
                <h2>
                  {activeTab === "camping"
                    ? "Book Our Camp"
                    : "Book Rafting Adventure"}
                </h2>
                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="row">
                    <InputField
                      label="Your Name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      required
                      onChange={handleChange}
                    />
                    <InputField
                      label="Address"
                      name="address"
                      type="text"
                      placeholder="Enter your address"
                      value={formData.address}
                      required
                      onChange={handleChange}
                    />
                    <InputField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      required
                      onChange={handleChange}
                    />
                    <InputField
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      required
                      onChange={handleChange}
                    />
                    <InputField
                      label="Date"
                      name="date"
                      type="date"
                      value={formData.date}
                      required
                      onChange={handleChange}
                    />
                    {activeTab === "camping" && (
                      <InputField
                        label="Days"
                        name="days"
                        type="number"
                        value={formData.days}
                        required
                        onChange={handleChange}
                      />
                    )}

                    <InputField
                      label="Adults"
                      name="adults"
                      type="number"
                      value={formData.adults}
                      required
                      onChange={handleChange}
                    />
                    {activeTab === "camping" && (
                      <InputField
                        label="Childrens"
                        name="children"
                        type="number"
                        value={formData.children}
                        required
                        onChange={handleChange}
                      />
                    )}
                    {activeTab === "camping" && (
                      <SelectField
                        label="Tent Type"
                        name="tentType"
                        value={formData.tentType}
                        options={[
                          "Luxury (AC) Tent",
                          "Luxury (Cooler) Tent",
                          "Ordinary Tent",
                        ]}
                        onChange={handleChange}
                      />
                    )}
                    {activeTab === "rafting" && (
                      <SelectField
                        label="Rafting Type"
                        name="ratingType"
                        value={formData.ratingType}
                        options={[
                          "Marine Drive(22km)",
                          "Shivpuri(16km)",
                          "Brahmpuri(12km)",
                        ]}
                        onChange={handleChange}
                      />
                    )}
                    <SelectField
                      label="Booking Amount"
                      name="amount"
                      value={formData.amount}
                      options={["1000 IND", "1500 IND", "2000 IND"]}
                      onChange={handleChange}
                    />
                    <div className="col-12">
                      <button
                        style={{ borderRadius: "0px" }}
                        className="btn mt-4 style3 icon"
                        type="submit"
                      >
                        <i className="bx bx-plus-circle"></i> Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const InputField: React.FC<{
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, name, type, value, placeholder, required, onChange }) => (
  <div className="mt-4 col-md-6">
    <label className="form-label">{label}</label>
    <input
      type={type}
      name={name}
      className="form-control"
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  </div>
);

const SelectField: React.FC<{
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ label, name, value, options, onChange }) => (
  <div className="mt-4 col-md-12">
    <label className="form-label">{label}</label>
    <select
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value="">Select {label}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default BookingPage;
