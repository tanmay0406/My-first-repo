/* eslint-disable @next/next/no-img-element */
import React from "react";

const BuyPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBuyOption = (option) => {
    switch (option) {
      case 'Car':
        window.location.href = '/Car';
        break;
      case 'cycle':
        window.location.href = '/cycle';
        break;
      case 'Scooter':
        window.location.href = '/scooter';
        break;
      case 'Auto':
        window.location.href = '/auto';
        break;
      case 'Drone':
        window.location.href = '/drone';
        break;
      case 'Tractor':
        window.location.href = '/tractor';
        break;
      default:
        break;
    }
  };

  const calculateHeight = () => {
    const numVehicles = 7; 
    const numRows = Math.ceil(numVehicles / 3); 
    const minHeight = 'h-3/4'; 
    
    
    switch (numRows) {
      case 1:
        return minHeight; 
      case 2:
        return 'h-4/5'; 
      default:
        return 'h-full'; 
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div className="wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className={`p-10 border border-green-400 rounded-lg shadow-md w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 ${calculateHeight()} relative z-10`} style={{ backgroundImage: "url('/images/bg/whitebg.jfif')" }}>
            <button
              className="absolute top-2 right-2 px-3 py-1 text-xl font-bold text-gray-600 hover:text-gray-800 btn-blue"
              onClick={onClose}
            >
              X
            </button>
            <h2 className="font-bold text-xl text-black dark:text-black-500">Buy on Electrify EVM</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5"> {/* Adjusted grid for responsiveness */}
              <button
                className="flex flex-col items-center m-2 p-0 border border-black-500 square-full overflow-hidden"
                onClick={() => handleBuyOption('Car')}
              >
                <img
                  src="/images/popup/s1.jpeg"
                  alt="Buy Car"
                  className="w-full h-32 object-cover"
                />
                <span className="mt-2 text-black dark:text-black-500">Buy eCar</span>
              </button>
              <button
                className="flex flex-col items-center m-2 p-0 border border-black-500 square-full overflow-hidden"
                onClick={() => handleBuyOption('cycle')}
              >
                <img
                  src="/images/popup/b1.jpeg"
                  alt="Buy Bike"
                  className="w-full h-32 object-cover"
                />
                <span className="mt-2 text-black dark:text-black-500">Buy eBicycle</span>
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
                <span className="mt-2 text-black dark:text-black-500">Buy eScooter</span>
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
                <span className="mt-2 text-black dark:text-black-500"> Buy eAuto</span>
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
                <span className="mt-2 text-black dark:text-black-500">Buy eTractor</span>
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
                <span className="mt-2 text-black dark:text-black-500">Buy eDrone</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyPopup;
