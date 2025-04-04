"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";

const BookingArea: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"camping" | "rafting">("camping");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    date: "",
    days: 1,
    adults: 1,
    children: 1,
    amount: 1000,
    tentType: "",
    ratingType: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `${
      activeTab === "camping"
        ? `Camping Booking Details:`
        : `Rafting Booking Details:`
    }\nName: ${formData.name}\nAddress: ${formData.address}\nEmail: ${
      formData.email
    }\nPhone: ${formData.phone}`;

    // Add Date for both Camping and Rafting
    if (formData.date) {
      message += `\nDate: ${formData.date}`;
    }

    // Add Days only for Camping
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

    message += `\nBooking Amount: ${formData.amount}`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://api.whatsapp.com/send?phone=+917906924003&text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section className="booking-area ptb-60">
      <div className="container">
        <div className="booking-form-title" data-aos="fade-up">
          <h2>Book Your Adventure Today!</h2>
        </div>

        {/* Tabs */}
        <nav className="booking-tabs-button ptb-40">
          <div className="nav nav-tabs">
            <button
              className={`nav-link ${activeTab === "camping" ? "active" : ""}`}
              onClick={() => setActiveTab("camping")}
            >
              Camping
            </button>
            <button
              className={`nav-link ${activeTab === "rafting" ? "active" : ""}`}
              onClick={() => setActiveTab("rafting")}
            >
              Rafting
            </button>
          </div>
        </nav>

        {/* Booking Form */}
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
                    required
                    onChange={handleChange}
                  />
                  <InputField
                    label="Address"
                    name="address"
                    type="text"
                    placeholder="Enter your address"
                    required
                    onChange={handleChange}
                  />
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={handleChange}
                  />
                  <InputField
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    onChange={handleChange}
                  />
                  <InputField
                    label="Date"
                    name="date"
                    type="date"
                    required
                    onChange={handleChange}
                  />
                  {activeTab === "camping" && (
                    <InputField
                      label="Days"
                      name="days"
                      type="number"
                      defaultValue={1}
                      required
                      onChange={handleChange}
                    />
                  )}

                  <InputField
                    label="Adults"
                    name="adults"
                    type="number"
                    defaultValue={1}
                    required
                    onChange={handleChange}
                  />
                  {activeTab === "camping" && (
                    <InputField
                      label="Childrens"
                      name="children"
                      type="number"
                      defaultValue={1}
                      required
                      onChange={handleChange}
                    />
                  )}
                  {activeTab === "camping" && (
                    <SelectField
                      label="Tent Type"
                      name="tentType"
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
                      options={["Shivpuri", "Brahmpuri"]}
                      onChange={handleChange}
                    />
                  )}
                  <SelectField
                    label="Booking Amount"
                    name="amount"
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
  );
};

// Reusable Input Component
const InputField: React.FC<{
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, name, type, placeholder, required, defaultValue, onChange }) => (
  <div className="mt-4 col-md-6">
    <label className="form-label">{label}</label>
    <input
      type={type}
      name={name}
      className="form-control"
      placeholder={placeholder}
      required={required}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  </div>
);

// Reusable Select Component
const SelectField: React.FC<{
  label: string;
  name: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ label, name, options, onChange }) => (
  <div className="mt-4 col-md-12">
    <label className="form-label">{label}</label>
    <select className="form-control" name={name} onChange={onChange}>
      <option>Select {label}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default BookingArea;
