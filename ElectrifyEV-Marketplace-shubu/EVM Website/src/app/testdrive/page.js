// pages/testdrive.js

import React from "react";
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";

export default function TestDrive() {
  return (
    <>
      <Navbar />
      <section className="relative bg-cover bg-center bg-gray-200 overflow-hidden" style={{backgroundImage: 'url("/images/bg/b15.jpg")'}}>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-3xl font-bold mb-8 text-center">Book a Test Drive</h1>
            <p className="mb-4 text-gray-600 text-sm">Please fill out the form below to book a test drive:</p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
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
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
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
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Additional Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
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
