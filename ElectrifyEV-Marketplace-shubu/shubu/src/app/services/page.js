'use client'
import React, { useState } from 'react';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

const vehicles = [
  {
    id: 1,
    name: 'e-Car',
    image: '/images/property/buysearch4.jpeg',      
    description: 'We provide towing service, battery replacement, key lockout and emergency repairs',
    page: '/car-service' 
  },
  {
    id: 2,
    name: 'e-Scooter',
    image: '/images/property/s4.jpeg', 
    description: 'We provide towing service, battery replacement and emergency repairs',
    page: '/scooter-service'
  },
  {
    id: 3,
    name: 'e-Drone',
    image: '/images/property/ideaforge.jpg', 
    description: 'We provide emergency landing , battery replacement and drone repair',
    page: '/drone-service'
  },
  {
    id: 4,
    name: 'e-Tractor',
    image: '/images/property/sonalika.jpeg', 
    description: 'We provide towing service , engine power and tyre replacement',
    page: '/tractor-service'
  },
  {
    id: 5,
    name: 'e-Auto',
    image: '/images/property/Azul lite.jpeg', 
    description: 'We provide towing service , mechanical repairs and battery replacement',
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

  const handleBookService = (vehicleName) => {
    const selectedVehicle = vehicles.find(vehicle => vehicle.name === vehicleName);
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

  const handleFormSubmit = () => {
    setShowPopup(true);
  };

  return (
    <>
      <Navbar />
      <section className="relative mt-20">
        <div className="container-fluid md:mx-4 mx-2">
          <div style={{ backgroundImage: `url('/images/popup/services.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '20vh' }} className="relative pt-20 pb-40 table w-full rounded-xl shadow-md overflow-hidden bg-no-repeat" id="home">
            <div className="container mx-auto pt-20 pb-12 grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <div className="md:text-start text-center">
                  <p className="text-6xl font-semibold mb-8 text-white dark:text-white pt-20">Most trusted solution for roadside emergency</p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="max-w-md mx-auto bg-gray-200 rounded-lg shadow-lg pt-10 px-8 pb-8">
                  <p className="text-xl font-semibold mb-8 text-gray-950 dark:text-gray-950 ">For emergency</p>
                  <form className="grid gap-4">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                      <input type="text" id="location" name="location" className="w-full h-8 border rounded-sm py-1 px-2" />
                    </div>
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                      <input type="text" id="mobile" name="mobile" className="w-full h-8 border rounded-sm py-1 px-2" />
                    </div>
                    <div>
                      <label htmlFor="registration" className="block text-sm font-medium text-gray-700">Vehicle Registration Number</label>
                      <input type="text" id="registration" name="registration" className="w-full h-8 border rounded-sm py-1 px-2" />
                    </div>
                    <div className="flex justify-end">
                      <button type="submit" onClick={handleFormSubmit} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div>
        <h1 className="text-4xl font-semibold mb-8 text-green-600 pt-20 text-center">Emergency services available for</h1>
        <div className="flex flex-wrap justify-center">
          {vehicles.map(vehicle => (
            <div key={vehicle.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <div className="bg-gray-200 dark:bg-zinc-500 bg-opacity-50 p-8 h-full">
                <h1 className="text-3xl font-bold text-black dark:text-white mb-6">{vehicle.name}</h1>
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-40 object-cover" />
                <p className="text-lg text-black dark:text-white mb-4 mt-4">{vehicle.description}</p>
                <div className="flex justify-center">
                  <button onClick={() => handleBookService(vehicle.name)} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                    Book a Service
                  </button>
                </div>
              </div>
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
            <h2 className="text-lg font-bold mb-4">Contacting our management team , we will reachout to you</h2>
          </div>
        </div>
      )}
      
      <Footer />
      <Switcher />
    </>
  );
};

export default EmergencyPage;
