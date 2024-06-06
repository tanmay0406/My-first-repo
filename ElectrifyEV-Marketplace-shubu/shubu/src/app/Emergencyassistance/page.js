'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

const vehicles = [
  {
    id: 1,
    name: 'Car',
    page: '/car-service' 
  },
  {
    id: 2,
    name: 'Scooter',
    page: '/scooter-service'
  },
  {
    id: 3,
    name: 'Drone',
    page: '/drone-service'
  },
  {
    id: 4,
    name: 'Tractor',
    page: '/tractor-service'
  },
  {
    id: 5,
    name: 'Auto',
    page: '/auto-service'
  },
];

const EmergencyPage = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  const handleVehicleTypeChange = (e) => {
    setVehicleType(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleBookService = () => {
    const selectedVehicle = vehicles.find(vehicle => vehicle.name === vehicleType);
    if (selectedVehicle) {
      window.location.href = selectedVehicle.page; // Redirect to the selected vehicle's page
    }
  };

  const handleProceed = () => {
    setShowPopup(false);
    setShowOTP(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowOTP(false);
  };

  const handleVerifyOTP = () => {
    
    console.log('OTP verified');
    
    setShowOTP(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Emergency Assistance Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{backgroundImage: "url('/images/bg/b17.jpg')"}}>
        <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-white mb-6">Emergency Assistance Services</h1>
          <p className="text-lg text-white mb-4">Emergency assistance services are available for:</p>
          <select value={vehicleType} onChange={handleVehicleTypeChange} className="border border-gray-400 rounded px-3 py-2 mb-4 text-white bg-gray-800">
            <option value="">Select Vehicle Type</option>
            {vehicles.map(vehicle => (
              <option key={vehicle.id} value={vehicle.name}>{vehicle.name}</option>
            ))}
          </select>
          <p className="text-white">Our expert technicians are available to help you anytime, anywhere.</p>
          <button onClick={handleBookService} className="bg-blue-500 text-white px-4 py-2 mt-8 rounded">
            Book a Service
          </button>
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
            <h2 className="text-lg font-bold mb-4">Help Us</h2>
            <input
              type="text"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              className="border border-gray-400 rounded px-3 py-2 mb-4"
            />
            <button onClick={handleProceed} className="bg-blue-500 text-white px-4 py-2 rounded">
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
            <h2 className="text-lg font-bold mb-4">Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              className="border border-gray-400 rounded px-3 py-2 mb-4"
            />
            <button onClick={handleVerifyOTP} className="bg-blue-500 text-white px-4 py-2 rounded">
              Verify OTP
            </button>
          </div>
        </div>
      )}

      <Footer />
      <Switcher />
    </div>
  );
};

export default EmergencyPage;
