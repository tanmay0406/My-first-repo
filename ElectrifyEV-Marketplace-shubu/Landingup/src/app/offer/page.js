'use client'
import React, { useState } from "react";
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";

export default function Offer() {
  const [offerAmount, setOfferAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Offer amount:", offerAmount);
    console.log("Message:", message);
  };

  return (
    <>
      <Navbar />
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/images/bg/b15.jpg")' }}>
        <div className="container mx-auto flex justify-center items-center h-full">
          <div className="max-w-lg bg-white p-8 rounded-md shadow-md">
            <h1 className="text-3xl font-bold mb-8 text-center">Make an Offer</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                  Offer Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={offerAmount}
                  onChange={(e) => setOfferAmount(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
                >
                  Submit Offer
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
