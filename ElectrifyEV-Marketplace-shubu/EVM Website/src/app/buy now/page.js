// pages/buynow.js

import React from "react";
import Link from "next/link";
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";

export default function BuyNow() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto mt-16">
        <h1 className="text-3xl font-bold mb-8">Buy Now</h1>
        <p className="mb-4">Fill out the form below to purchase the electric vehicle:</p>
        <form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
            >
              Buy Now
            </button>
          </div>
        </form>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
