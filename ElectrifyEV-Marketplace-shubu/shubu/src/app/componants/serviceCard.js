/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';


const ServiceCard = ({ title, description, onHelpUsClick,imageUrl }) => {
  const [showHelpUsPopup, setShowHelpUsPopup] = useState(false);
  const [showOTPPopup, setShowOTPPopup] = useState(false);

  const handleBookServiceClick = () => {
    setShowHelpUsPopup(true);
    if (onHelpUsClick) {
      onHelpUsClick();
    }
  };

  const handleProceedClick = () => {
    setShowHelpUsPopup(false);
    setShowOTPPopup(true);
  };

  const handleClosePopup = () => {
    setShowHelpUsPopup(false);
    setShowOTPPopup(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 relative">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleBookServiceClick}>
        Book a Service
      </button>

      {/* Help Us Popup */}
      {showHelpUsPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 max-w-md rounded-lg relative">
            <button className="absolute top-0 right-0 p-2" onClick={handleClosePopup}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-bold mb-4">Help Us</h3>
            <p className="mb-4">With your Mobile Number</p>
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleProceedClick}>
              Proceed
            </button>
          </div>
        </div>
      )}

      {/* OTP Popup */}
      {showOTPPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 max-w-md rounded-lg relative">
            <button className="absolute top-0 right-0 p-2" onClick={handleClosePopup}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-bold mb-4">OTP</h3>
            <p className="mb-4">Enter OTP sent to your mobile</p>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleClosePopup}>
              Verify OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
