"use client";
import React, { useState } from 'react';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

const CarWashServices = () => {
  const [showBasicWashPopup, setShowBasicWashPopup] = useState(false);
  const [showStandardWashPopup, setShowStandardWashPopup] = useState(false);
  const [showComprehensiveWashPopup, setShowComprehensiveWashPopup] = useState(false);
  const [basicWashLocation, setBasicWashLocation] = useState('');
  const [basicWashMobileNumber, setBasicWashMobileNumber] = useState('');
  const [standardWashLocation, setStandardWashLocation] = useState('');
  const [standardWashMobileNumber, setStandardWashMobileNumber] = useState('');
  const [comprehensiveWashLocation, setComprehensiveWashLocation] = useState('');
  const [comprehensiveWashMobileNumber, setComprehensiveWashMobileNumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleToggleBasicWashPopup = () => {
    setShowBasicWashPopup(!showBasicWashPopup);
  };

  const handleToggleStandardWashPopup = () => {
    setShowStandardWashPopup(!showStandardWashPopup);
  };

  const handleToggleComprehensiveWashPopup = () => {
    setShowComprehensiveWashPopup(!showComprehensiveWashPopup);
  };

  const handleBasicWashLocationChange = (e) => {
    setBasicWashLocation(e.target.value);
  };

  const handleBasicWashMobileNumberChange = (e) => {
    setBasicWashMobileNumber(e.target.value);
  };

  const handleStandardWashLocationChange = (e) => {
    setStandardWashLocation(e.target.value);
  };

  const handleStandardWashMobileNumberChange = (e) => {
    setStandardWashMobileNumber(e.target.value);
  };

  const handleComprehensiveWashLocationChange = (e) => {
    setComprehensiveWashLocation(e.target.value);
  };

  const handleComprehensiveWashMobileNumberChange = (e) => {
    setComprehensiveWashMobileNumber(e.target.value);
  };

  const handleClosePopup = () => {
    setShowBasicWashPopup(false);
    setShowStandardWashPopup(false);
    setShowComprehensiveWashPopup(false);
    setShowPopup(false);
  };

  const handleFormSubmit = () => {
    setShowPopup(true);
  };




  
  return (
    <>
      <Navbar />

      <section className="relative mt-20">
        <div className="container-fluid md:mx-4 mx-2">
          <div style={{ backgroundImage: `url('/images/popup/carwash.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '20vh' }} className="relative pt-20 pb-40 table w-full rounded-xl shadow-md overflow-hidden bg-no-repeat" id="home">
            <div className="container mx-auto pt-20 pb-12">
              <h1 className="text-8xl font-semibold mb-8 text-center text-slate-200">Electrify Wash</h1>
              <div className="grid grid-cols-1 text-center mt-10">
                <h3 className="md:text-6xl text-3xl md:leading-normal leading-normal font-medium text-slate-200">Wash Packages</h3>
              </div>

              <div className="flex justify-center space-x-4 mt-4">
                <div className="group relative rounded-xl bg-slate-200 dark:bg-slate-900 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2 text-gray-950 dark:text-white">Basic Wash</h4>
                    <p className="text-gray-600">Basic cleaning service</p>
                    <p className="text-green-600 font-semibold">$10</p>
                    
                    <button onClick={handleToggleBasicWashPopup} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                      Book Now
                    </button>
                    </div>
                    </div>
                    {showBasicWashPopup && (
                      <div className="absolute top-0 center-0 p-4 bg-white border rounded shadow-md">
                        <form>
                        <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
                          <label htmlFor="basicWashLocation" className="block text-sm font-medium text-gray-700">Location</label>
                          <input type="text" id="basicWashLocation" name="basicWashLocation" value={basicWashLocation} onChange={handleBasicWashLocationChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
                          <label htmlFor="basicWashMobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                          <input type="text" id="basicWashMobileNumber" name="basicWashMobileNumber" value={basicWashMobileNumber} onChange={handleBasicWashMobileNumberChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
                          <button type="submit" onClick={handleFormSubmit} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Submit</button>
                        </form>

                      </div>
                    )}

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
            <h2 className="text-lg font-bold mb-4">Contacting our management team , we will reachout to you</h2>
           
          </div>
        </div>
      )}
                  
                

                {/* Similar structure for Standard Wash */}
                <div className="group relative rounded-xl bg-slate-200 dark:bg-slate-900 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2 text-gray-950 dark:text-white">Standard Wash</h4>
                    <p className="text-gray-600">Standard cleaning service</p>
                    <p className="text-green-600 font-semibold">$20</p>
                    <button onClick={handleToggleStandardWashPopup} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                      Book Now
                    </button>
                    </div>
                </div>

                    {showStandardWashPopup && (
                      <div className="absolute top-0 center-0 p-4 bg-white border rounded shadow-md">
                        <form onSubmit={handleToggleStandardWashPopup}>
                        <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
                          <label htmlFor="standardWashLocation" className="block text-sm font-medium text-gray-700">Location</label>
                          <input type="text" id="standardWashLocation" name="standardWashLocation" value={standardWashLocation} onChange={handleStandardWashLocationChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
                          <label htmlFor="standardWashMobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                          <input type="text" id="standardWashMobileNumber" name="standardWashMobileNumber" value={standardWashMobileNumber} onChange={handleStandardWashMobileNumberChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
                          <button type="submit"  onClick={handleFormSubmit} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Submit</button>
                        </form>
                      </div>
                    )}
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
            <h2 className="text-lg font-bold mb-4 text-black dark:text-black">Contacting our management team , we will reachout to you</h2>
           
          </div>
        </div>
      )}

                  
                {/* Similar structure for Comprehensive Wash */}
                <div className="group relative rounded-xl bg-slate-200 dark:bg-slate-900 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2 text-gray-950 dark:text-white">Comprehensive Wash</h4>
                    <p className="text-gray-600">Comprehensive cleaning service</p>
                    <p className="text-green-600 font-semibold">$30</p>
                    <button onClick={handleToggleComprehensiveWashPopup} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                      Book Now
                    </button>

                    </div>
                </div>
                    {showComprehensiveWashPopup && (
                      <div className="absolute top-0 center-0 p-4 bg-white border rounded shadow-md">
                        <form onSubmit={handleToggleComprehensiveWashPopup}>
                        <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
                          <label htmlFor="comprehensiveWashLocation" className="block text-sm font-medium text-gray-700">Location</label>
                          <input type="text" id="comprehensiveWashLocation" name="comprehensiveWashLocation" value={comprehensiveWashLocation} onChange={handleComprehensiveWashLocationChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
                          <label htmlFor="comprehensiveWashMobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                          <input type="text" id="comprehensiveWashMobileNumber" name="comprehensiveWashMobileNumber" value={comprehensiveWashMobileNumber} onChange={handleComprehensiveWashMobileNumberChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
                          <button type="submit"  onClick={handleFormSubmit} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Submit</button>
                        </form>
                      </div>
                    )}

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
            <h2 className="text-lg font-bold mb-4">Contacting our management team , we will reachout to you</h2>
           
          </div>
        </div>
      )}
                 
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  );
}

export default CarWashServices;
