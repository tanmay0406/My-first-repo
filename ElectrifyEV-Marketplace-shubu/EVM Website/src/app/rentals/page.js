'use client'
import React, { useState , useEffect } from "react";
import Link from "next/link"; 
import {rentals} from "../data/data";
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher"; 


export default function IndexFour() {
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [startTime, setStartTime] = useState({ hour: "09", minute: "00", period: "AM" });
  const [endDate, setEndDate] = useState("");
  const [enableHours, setEnableHours] = useState(false);
  const [hours, setHours] = useState(1);
  const [location, setLocation] = useState("");
  const [moreThanOneDay, setMoreThanOneDay] = useState(false);
  const [filterBodyType, setFilterBodyType] = useState("");

  const handleFindEV = () => {
    // Pass selected location and body type as state to the next page
    return {
      pathname: "/rent-map",
      state: {
        location: location,
        bodyType: filterBodyType,
      },
    };
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    if (moreThanOneDay && endDate < e.target.value) {
      setEndDate(e.target.value);
    }
  };

  const handleStartTimeChange = (e) => {
    const { name, value } = e.target;
    setStartTime({
      ...startTime,
      [name]: value
    });
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const toggleHoursSlider = () => {
    setEnableHours(!enableHours);
  };

  const toggleMoreThanOneDay = () => {
    setMoreThanOneDay(!moreThanOneDay);
    setEndDate(""); // Reset end date when toggling
    setEnableHours(false); // Disable hours when toggling
  };

  const decrementHours = () => {
    if (hours > 1) {
      setHours(hours - 1);
    }
  };

  const incrementHours = () => {
    if (hours < 24) {
      setHours(hours + 1);
    }
  };

  const locationOptions = [
    "Pune",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    // Add more options as needed
  ];

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleBodyTypeChange = (e) => {
    setFilterBodyType(e.target.value);
  };
  

  return (
    <>
      <Navbar />
      <section className=" relative py-20  md:pb-24 pb-16" style={{ backgroundImage: "url('/images/bg/rentals.jpg')" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-950 dark:text-gray-950">Select Pickup Date and Time</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Start Date</label>
              <input 
                type="date" 
                value={startDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={handleStartDateChange}
                className="w-full border border-gray-300 rounded px-4 py-2 mb-2 text-gray-700 dark:text-gray-700"
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">Start Time</label>
              <div className="flex">
                <input 
                  type="number" 
                  name="hour"
                  value={startTime.hour}
                  min="1"
                  max="12"
                  onChange={handleStartTimeChange}
                  className="w-1/4 border border-gray-300 rounded-l px-4 py-2 mb-4 mr-1 text-gray-700 dark:text-gray-700"
                />
                <span className="flex items-center border border-gray-300 rounded-r px-4 mb-4 text-gray-700 dark:text-gray-700">:</span>
                <input 
                  type="number" 
                  name="minute"
                  value={startTime.minute}
                  min="0"
                  max="59"
                  onChange={handleStartTimeChange}
                  className="w-1/4 border border-gray-300 rounded-l px-4 py-2 mb-4 mr-1 text-gray-700 dark:text-gray-700"
                />
                <select
                  name="period"
                  value={startTime.period}
                  onChange={handleStartTimeChange}
                  className="w-1/4 border border-gray-300 rounded-l px-4 py-2 mb-4 text-gray-700 dark:text-gray-700"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="form-checkbox h-5 w-5 text-green-500"
                  checked={moreThanOneDay}
                  onChange={toggleMoreThanOneDay}
                />
                <span className="ml-2 text-gray-700">Do you want a car for more than one day?</span>
              </label>
              {moreThanOneDay && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">End Date</label>
                  <input 
                    type="date" 
                    value={endDate}
                    min={startDate} // Set min date to the start date
                    onChange={handleEndDateChange}
                    className="w-full border border-gray-300 rounded px-4 py-2 mb-4 text-gray-700 dark:text-gray-700"
                  />
                </div>
              )}
            </div>
            {!moreThanOneDay && (
              <div className="mb-4">
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-5 w-5 text-green-500"
                    checked={enableHours}
                    onChange={toggleHoursSlider}
                  />
                  <span className="ml-2 text-gray-700">Select Hours</span>
                </label>
                {enableHours && (
                  <div className="flex items-center mb-4">
                    <button onClick={decrementHours} className="px-2 py-1 bg-gray-200 rounded-full mr-2 text-gray-700 dark:text-gray-700">-</button>
                    <input
                      type="range"
                      min="1"
                      max="24"
                      value={hours}
                      onChange={(e) => setHours(parseInt(e.target.value))}
                      className="w-full appearance-none"
                      style={{
                        background: 'linear-gradient(to right, #68d391 0%, #68d391 ' + ((hours / 24) * 100) + '%, #e2e8f0 ' + ((hours / 24) * 100) + '%, #e2e8f0 100%)'
                      }}
                    />
                    <button onClick={incrementHours} className="px-2 py-1 bg-gray-200 rounded-full ml-2 text-gray-700 dark:text-gray-700">+</button>
                    <div className="w-12 text-center ml-4 text-slate-900 dark:text-slate">{hours} Hours</div>
                  </div>
                )}
              </div>
            )}
            <h2 className="block text-gray-700 text-sm font-bold mb-2 text-slate-900 dark:text-slate">Location</h2>
            <select
              value={location}
              onChange={handleLocationChange}
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4 text-gray-700 dark:text-gray-700"
            >
              <option value="">Select location</option>
              {locationOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

            
                    {/* Add body type selection */}
            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
              <label htmlFor="bodyType" className="font-semibold mb-1 mr-2 text-slate-900 dark:text-slate">
                Body Type:
              </label>
              <select
                name="bodyType"
                id="bodyType"
                value={filterBodyType}
                onChange={handleBodyTypeChange}
                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1 text-gray-700 dark:text-gray-700"
              >
                <option value="">All</option>
                <option value="SUV">SUV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Sedan">Sedan</option>
                {/* Add more options */}
              </select>
            </div>
               



            <Link href={handleFindEV()} passHref>
              <button className="block w-full bg-green-500 text-white py-3 rounded hover:bg-green-600">
                Find EV
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
