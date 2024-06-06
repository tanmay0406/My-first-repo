/* eslint-disable @next/next/no-img-element */
// BatterySwapPage.js
import Link from "next/link";
import React from "react";
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";
import BatterySwapDetails from '../componants/BatterySwapDetails';

const BatterySwapPage = () => {
  // Dummy data for demonstration
  const batterySwapStations = [
    {
      id: 'station1',
      name: 'Battery Swap Station 1',
      openingHours: 'Mon-Sat: 9am-6pm',
      contact: '+1234567890',
      image: '/images/bg/bs.jpg',   
      batteryPower: 50 // Battery power percentage (dummy data)
    },
    {
      id: 'station2',
      name: 'Battery Swap Station 2',
      openingHours: 'Mon-Sat: 9am-6pm',
      contact: '+0987654321',
      image: '/images/bg/bs.jpg',
      batteryPower: 75 // Battery power percentage (dummy data)
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-20 pb-12">
        <h1 className="text-4xl font-semibold mb-8 text-center text-green-600">Battery Swap Stations for Electric Vehicles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {batterySwapStations.map((station, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300">
              <div className="flex">
                {/* Image */}
                <div className="w-1/3">
                  <img
                    src={station.image}
                    alt={`Battery Swap Station ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md"
                    style={{maxHeight: "300px"}}
                  />
                </div>
                {/* Details */}
                <div className="w-2/3 px-6 py-4">
                  <BatterySwapDetails data={station} />
                  {/* Button */}
                  <div className="mt-4">
                    <Link href={`/station1`}>
                      <button className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out">
                        Do you like to swap the battery?
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Battery animation */}
              <div
                id={`battery-animation-${station.id}`}
                className="absolute top-0 left-0 bg-green-500 w-4 h-full animate-battery-charging"
                style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <Switcher />
    </>
  );
};

export default BatterySwapPage;
