// pages/testdrive.js

import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

export default function TestDrive() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Submit form logic here
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <>
      <Navbar />
      <section className="relative bg-cover bg-center bg-gray-200 overflow-hidden" style={{ backgroundImage: 'url("/images/bg/b15.jpg")' }}>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-3xl font-bold mb-8 text-center"><b>Book a Test Drive</b></h1>
            <p className="mb-4 text-gray-600 text-sm">Please fill out the form below to book a test drive:</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 p-2 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-green-500`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 p-2 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-green-500`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                <b>Phone Number</b>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-1 p-2 block w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-green-500`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                <b>Additional Message</b> (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
