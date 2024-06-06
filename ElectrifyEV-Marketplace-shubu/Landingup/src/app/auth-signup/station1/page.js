// pages/confirm-swap.js
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import { useRouter } from 'next/router';

const ConfirmSwapPage = () => {
  // Dummy data for demonstration
  const router = useRouter();
  const { id } = router.query;

  // Get station name based on ID
  let stationName;
  if (id === 'station1') {
    stationName = 'Battery Swap Station 1';
  } else if (id === 'station2') {
    stationName = 'Battery Swap Station 2';
  } else {
    stationName = 'Unknown Station';
  }

  // Function to handle the swap action
  const handleSwap = () => {
    // Add your logic here to handle the swap action
    alert(`Swapping battery at ${stationName}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-20 pb-12">
      <h1 className="text-4xl font-semibold mb-8 text-center text-green-600">Do you like to swap the battery?</h1>
        <div className="flex justify-center items-center">
          <p className="text-lg mb-4">Selected Station: {stationName}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full mb-4 transition duration-300 ease-in-out"
            onClick={handleSwap}
          >
            At Your Doorstep
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full mb-4 transition duration-300 ease-in-out"
            onClick={handleSwap}
          >
            Store
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full mb-4 transition duration-300 ease-in-out"
            onClick={handleSwap}
          >
            Buy Battery
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out"
            onClick={handleSwap}
          >
            Replacement
          </button>
        </div>
      </div>
      <Footer />
      <Switcher />
    </>
  );
};

export default ConfirmSwapPage;
