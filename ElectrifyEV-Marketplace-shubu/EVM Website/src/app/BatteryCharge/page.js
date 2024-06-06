/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

const vehicles = [
  {
    id: 1,
    name: 'Jump-Start',
    description: 'Jump-Start your vehicle\'s flat battery',
  },
  {
    id: 2,
    name: 'Standard Battery',
    description: 'Affordable batteries with reliable performance',
  },
  {
    id: 3,
    name: 'Premium Battery',
    description: 'Batteries with superior performance and long life',
  },
  {
    id: 4,
    name: 'AGM Battery',
    description: 'High capacity and high performance batteries',
  },
];

const EmergencyPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedBatteryPower, setSelectedBatteryPower] = useState('');

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleBookServiceClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowPopup(true);
  };

  const handleProceed = () => {
    setShowPopup(false);
    setShowOTP(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowOTP(false);
    setShowPaymentSuccess(false);
    setSelectedVehicle(null);
  };

  const handleVerifyOTP = () => {
    setShowOTP(false);
    setShowPaymentSuccess(true);
  };

  const handleBatteryPowerChange = (e) => {
    setSelectedBatteryPower(e.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen" style={{ backgroundImage: `url('/images/bg/bs4.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <Head>
        <title>Car Battery Recharge Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <section className="container mx-auto px-4 py-8 bg-white shadow-md rounded-md mt-20">
        <div className="flex items-center justify-center mb-8">
          <img src="/images/bg/charge.jfif" alt="Car Battery" className="w-64 h-auto mr-4" />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-950 dark:text-gray-950">Battery Recharge Service</h2>
            <p className="text-gray-800 mb-6 leading-relaxed">Our technicians will come to your location, uninstall the battery, take it to our store, and charge it using our advanced charging machines. After charging, we'll observe the battery to ensure it holds the voltage. If everything is fine, we'll reinstall it in your vehicle.</p>
            <ul className="list-disc pl-6 mb-8">
              <li className="text-gray-800 mb-2">Trained Professionals</li>
              <li className="text-gray-800 mb-2">100% Customer Satisfaction</li>
              <li className="text-gray-800 mb-2">Fastest & Professional Service</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-gray-950 dark:text-gray-950">Service Prices</h3>
            <ul className="list-disc pl-6 mb-6">
              <li className="text-gray-800 mb-2">At Doorstep (Within City limits): $40</li>
              <li className="text-gray-800 mb-2">At Service Station: $25</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map(vehicle => (
            <div key={vehicle.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:bg-gray-100">
              <h1 className="text-xl font-bold mb-2 text-gray-950 dark:text-gray-950">{vehicle.name}</h1>
              <p className="text-gray-800 mb-4">{vehicle.description}</p>
              {selectedVehicle === vehicle && (
                <select
                  value={selectedBatteryPower}
                  onChange={handleBatteryPowerChange}
                  className="border border-gray-400 rounded px-3 py-1 mb-2 mr-2"
                >
                  <option value="">Select Battery Power</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              )}
              <button onClick={() => handleBookServiceClick(vehicle)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Book a Service
              </button>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <div className="flex justify-end">
              <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <h2 className="text-lg font-bold mb-4 text-black-900 dark:text-black">Help Us</h2>
            <div>
              <input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={handleLocationChange}
                className="border border-gray-400 rounded px-3 py-2 mb-4"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                className="border border-gray-400 rounded px-3 py-2 mb-4"
              />
            </div>
            <button onClick={handleProceed} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Proceed
            </button>
          </div>
        </div>
      )}

      {showOTP && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <div className="flex justify-end">
              <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <h2 className="text-lg font-bold mb-4 text-black-900 dark:text-black">Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              className="border border-gray-400 rounded px-3 py-2 mb-4"
            />
            <button onClick={handleVerifyOTP} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Verify OTP
            </button>
          </div>
        </div>
      )}

      {showPaymentSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <div className="flex justify-end">
              <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <h2 className="text-lg font-bold mb-4 text-black-900 dark:text-black">Payment Successfull</h2>
            <div className="flex justify-center items-center">
              <div className="bg-green-500 rounded-full h-16 w-16 flex justify-center items-center text-white text-4xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <Switcher />
    </div>
  );
};

export default EmergencyPage;
