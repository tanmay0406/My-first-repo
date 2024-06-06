/* eslint-disable @next/next/no-img-element */
import React from "react";


const BuyPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBuyOption = (option) => {
    switch (option) {
      case 'ecar':
        window.location.href = '/grid';
        break;
      case 'ecycle':
        window.location.href = '/bike';
        break;
      case 'ebike':
        window.location.href = '/scooter';
        break;
      case 'eauto':
        window.location.href = '/auto';
        break;
      case 'edrone':
        window.location.href = '/drone';
        break;
      case 'etractor':
        window.location.href = '/tractor';
        break;
      default:
        break;
    }
  };

  const calculateHeight = () => {
    const numVehicles = 7; // Number of vehicles
    const numRows = Math.ceil(numVehicles / 3); // Calculate number of rows needed
    const minHeight = 'h-3/4'; // Minimum height for the popup
    
    // Determine the height class based on the number of rows
    switch (numRows) {
      case 1:
        return minHeight; // Minimum height if there's only one row
      case 2:
        return 'h-4/5'; // Adjust height for two rows
      default:
        return 'h-full'; // Full height for more than two rows
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className={`bg-white p-10 border border-green-400 rounded-lg shadow-md w-4/5 ${calculateHeight()} relative z-10`}>
            <button
              className="absolute top-2 right-2 px-3 py-1 text-xl font-bold text-gray-600 hover:text-gray-800 btn-blue"
              onClick={onClose}
            >
              X
            </button>
            <h2 className="font-bold text-xl">Buy on Electrify EVM</h2>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <button
                className="flex flex-col items-center m-2 p-0 border border-black-500 square-full overflow-hidden"
                onClick={() => handleBuyOption('Car')}
              >
                <img
                  src="/images/popup/s1.jpeg"
                  alt="Buy Car"
                  className="w-full h-32 object-cover"
                />
                <span className="mt-2">Buy eCar</span>
              </button>
              <button
                className="flex flex-col items-center m-2 p-0 border border-black-500 square-full overflow-hidden"
                onClick={() => handleBuyOption('Bike')}
              >
                <img
                  src="/images/popup/b1.jpeg"
                  alt="Buy Bike"
                  className="w-full h-32 object-cover"
                />
                <span className="mt-2">Buy eBike</span>
              </button>
              <button
                className="flex flex-col items-center m-2 p-0 border border-black-500 square-full overflow-hidden"
                onClick={() => handleBuyOption('Scooter')}
              >
                <img
                  src="/images/popup/s3.jpg"
                  alt="Buy Scooter"
                  className="w-full h-32 object-cover"
                />
                <span className="mt-2">Buy eScooter</span>
              </button>
              <button
                className="flex flex-col items-center m-2 p-0 border border-black-500 square-full overflow-hidden"
                onClick={() => handleBuyOption('Auto')}
              >
                <img
                  src="/images/popup/tr3.jpg"
                  alt="Buy Scooter"
                  className="w-32 h-32 object-cover"
                />
                <span className="mt-2"> Buy eAuto</span>
              </button>
              <button
                className="flex flex-col items-center m-2 p-0 border border-black-500 square-full overflow-hidden"
                onClick={() => handleBuyOption('Tractor')}
              >
                <img
                  src="/images/popup/tr1.jpg"
                  alt="Buy Tactor"
                  className="w-32 h-32 object-cover"
                />
                <span className="mt-2">Buy eTractor</span>
              </button>
              <button
                className="flex flex-col items-center m-2 p-0 border border-black-500 square-full overflow-hidden"
                onClick={() => handleBuyOption('Drone')}
              >
                <img
                  src="/images/popup/tr4.jpg"
                  alt="Buy Drone"
                  className="w-32 h-32 object-cover"
                />
                <span className="mt-2">Buy eDrone</span>
              </button>
              
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default BuyPopup;
