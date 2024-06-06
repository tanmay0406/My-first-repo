'use client'
import axios from 'axios'; //
import { useSession } from 'next-auth/react';
import { useEffect, useState } from "react";
import Footer from "../componants/footer";
import Navbar from "../componants/navbar";

export default function IndexFour() {
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [startTime, setStartTime] = useState({hour: "09", minute: "00", period: "AM"});
  const [endDate, setEndDate] = useState("");
  const [enableHours, setEnableHours] = useState(false);
  const [hours, setHours] = useState(1);
  const [location, setLocation] = useState("");
  const [moreThanOneDay, setMoreThanOneDay] = useState(false);
  const session = useSession();

  useEffect(() => {
    if (session) {
      // User is logged in, fetch the user ID
      //fetchUserId(); // Need to find diffrent way to implement this steps.
    }
  }, [session]);

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

  
  const handleFormSubmit = async () => {

    if (!session) {
      // User is not logged in, redirect to login page
      window.location.href = '/auth-login'; // You can replace this with your login page URL
      return;
    }

    try {
    // Format the startTime field as a string
    const formattedStartTime = `${startTime.hour}:${startTime.minute} ${startTime.period}`;

    // Prepare the data object to send in the request body
    const formData = {
      startDate,
      startTime: formattedStartTime, // Use the formatted startTime
      endDate,
      enableHours,
      hours,
      location,
      moreThanOneDay
      // Add other relevant form data fields here
    };

      // Make a POST request to the /api/rentals endpoint with the form data
      const response = await axios.post('http://51.79.225.217:5000/api/rentals', formData);

      // Handle the response if needed
      console.log(response.data); // Log the response data

      // Optionally, you can redirect the user to another page after successful submission
      window.location.href = ('/rent-map'); // Assuming you're using Next.js router
    } catch (error) {
      // Handle errors if the request fails
      console.error('Error submitting form:', error);
    }
  };


  return (
    <>
      <Navbar />
      <section className="py-20 bg-gray-100" style={{ backgroundImage: "url('/images/bg/rentals.jpg')" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Select Pickup Date and Time</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Start Date</label>
              <input 
                type="date" 
                value={startDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={handleStartDateChange}
                className="w-full border border-gray-300 rounded px-4 py-2 mb-2"
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
                  className="w-1/4 border border-gray-300 rounded-l px-4 py-2 mb-4 mr-1"
                />
                <span className="flex items-center border border-gray-300 rounded-r px-4 mb-4">:</span>
                <input 
                  type="number" 
                  name="minute"
                  value={startTime.minute}
                  min="0"
                  max="59"
                  onChange={handleStartTimeChange}
                  className="w-1/4 border border-gray-300 rounded-l px-4 py-2 mb-4 mr-1"
                />
                <select
                  name="period"
                  value={startTime.period}
                  onChange={handleStartTimeChange}
                  className="w-1/4 border border-gray-300 rounded-l px-4 py-2 mb-4"
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
                    className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
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
                    <button onClick={decrementHours} className="px-2 py-1 bg-gray-200 rounded-full mr-2">-</button>
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
                    <button onClick={incrementHours} className="px-2 py-1 bg-gray-200 rounded-full ml-2">+</button>
                    <div className="w-12 text-center ml-4">{hours} Hours</div>
                  </div>
                )}
              </div>
            )}
            <h2 className="block text-gray-700 text-sm font-bold mb-2">Location</h2>
            <select
              value={location}
              onChange={handleLocationChange}
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            >
              <option value="">Select location</option>
              {locationOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button className="block w-full bg-green-500 text-white py-3 rounded hover:bg-green-600" onClick={handleFormSubmit}>
              Submit Form
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
