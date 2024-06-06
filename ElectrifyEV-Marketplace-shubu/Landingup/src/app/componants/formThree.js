'use client';
import React, { useState } from "react";
import { FaMapMarkerAlt, MdDirectionsCar, MdSettingsInputComponent, MdBatteryFull, MdExpandLess, LuCircleDollarSign, MdExpandMore } from '../assets/icons/vander';
import Link from 'next/link';

export default function FormThree() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [formData, setFormData] = useState({
        location: '',
        vehicleType: '',
        minPrice: '', // Default min price
        maxPrice: '' // Default max price
    });
    const [results, setResults] = useState([]);
    const [isResultsVisible, setIsResultsVisible] = useState(true); // State for results visibility

    const handleTabClick = (tabIndex) => {
        setActiveTabIndex(tabIndex);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/vehicles/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    location: formData.location,
                    vehicleType: formData.vehicleType,
                    minPrice: formData.minPrice,
                    maxPrice: formData.maxPrice
                })
            });
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const toggleResultsVisibility = () => {
        setIsResultsVisible(!isResultsVisible); // Toggle results visibility
    };

    const handleContainerClick = (id) => {
        // Handle click event on result container
        console.log("Clicked on result with ID:", id);
    };

    return (
        <div className="grid grid-cols-1">
            <ul className="inline-block sm:w-fit w-full flex-wrap justify-center text-center p-4 bg-white dark:bg-slate-900 rounded-t-xl border-b dark:border-gray-800" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                <li role="presentation" className="inline-block mr-2">
                    <button onClick={() => handleTabClick(0)} className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-md">Buy</button>
                </li>
            </ul>

            <div id="StarterContent" className="p-6 bg-white dark:bg-slate-900 rounded-ss-none rounded-se-none md:rounded-se-xl rounded-xl shadow-md dark:shadow-gray-700">
                {activeTabIndex === 0 && (
                    <div id="buy-home" role="tabpanel" aria-labelledby="buy-home-tab">
                        <form onSubmit={handleSubmit}>
                            <div className="registration-form text-dark text-start">
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                    <div>
                                        <label className="form-label text-slate-900 dark:text-white font-medium">Location<span className="text-red-600">*</span></label>
                                        <div className="filter-search-form relative filter-border mt-2 ">
                                            <FaMapMarkerAlt className="icons" width={18} />
                                            <input name="location" type="text" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Enter location" value={formData.location} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="relative">
    <label className="form-label text-slate-900 dark:text-white font-medium ml-2 w-20">Vehicle Type<span className="text-red-600">*</span></label>
    <div className="filter-search-form relative filter-border mt-2">
        <MdDirectionsCar className="icons absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" width={18} />
        <select name="vehicleType" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0 appearance-none pl-10 pr-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" value={formData.vehicleType} onChange={handleChange}>
            <option value="">Select type</option>
            <option value="ecar">e-Car</option>
            <option value="ebike">e-Bike</option>
            <option value="eauto">e-Auto</option>
            <option value="ecycle">e-Cycle</option>
            <option value="etractor">e-Tractor</option>
            <option value="edrone">e-Drone</option>
        </select>
    </div>
</div>



                                    <div>
                                        <label htmlFor="minPrice" className="form-label text-slate-900 dark:text-white font-medium">Min Price<span className="text-red-600">*</span></label>
                                        <div className="filter-search-form relative filter-border mt-2">
                                            <LuCircleDollarSign className="icons" width={18} />
                                            <input name="minPrice" type="text" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Enter min price" value={formData.minPrice} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="maxPrice" className="form-label text-slate-900 dark:text-white font-medium">Max Price<span className="text-red-600">*</span></label>
                                        <div className="filter-search-form relative mt-2">
                                            <LuCircleDollarSign className="icons" width={18} />
                                            <input name="maxPrice" type="text" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Enter max price" value={formData.maxPrice} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <button type="submit" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-md">Search</button>
                            </div>
                        </form>

                        {/* Display Results */}
                        {results.length > 0 && (
                            <div className="mt-6">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-medium text-slate-900 dark:text-white">Search Results</h2>
                                    <button onClick={toggleResultsVisibility} className="flex items-center text-blue-500 hover:text-blue-700">
                                        {isResultsVisible ? (
                                            <MdExpandLess className="icons" width={24} />
                                        ) : (
                                            <MdExpandMore className="icons" width={24} />
                                        )}
                                        <span className="ml-2">{isResultsVisible ? "Minimize" : "Expand"}</span>
                                    </button>
                                </div>
                                {isResultsVisible && (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {results.map((result, index) => (
            <div 
                key={index} 
                onClick={() => handleContainerClick(result._id)} 
                className="group relative rounded-xl text-black dark:text-white overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl border-2 border-gray-300"
                style={{
                    boxShadow: "0 4px 8px rgba(105, 105, 105, 0.5), 0 6px 20px rgba(105, 105, 105, 0.4)",
                }}
            >
                <Link href={`/vehicle-detail?id=${result._id}`}>
                    <div className="relative">
                        {result.frontImagesBase64 && result.frontImagesBase64[0] ? (
                            <img
                                src={`data:image/jpeg;base64,${result.frontImagesBase64[0]}`}
                                alt="Front View"
                                className="h-40 w-full"
                            />
                        ) : (
                            <div className="w-full h-40 flex items-center justify-center bg-gray-200 text-gray-500">Image not available</div>
                        )}
                    </div>
                    <div className="p-6 group-hover:bg-black-100 dark:group-hover:bg-black-100">
                        <div className="pb-6">
                            <p className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{result.brand}</p>
                        </div>
                        <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                            <li className="flex items-center me-4">
                                <MdDirectionsCar width={20} className="me-2 text-green-600" />
                                <span>{result.brand}</span>
                            </li>
                            <li className="flex items-center me-4">
                                <MdSettingsInputComponent width={20} className="me-2 text-green-600" />
                                <span>{result.model}</span>
                            </li>
                            <li className="flex items-center me-4">
                                <MdBatteryFull width={20} className="me-2 text-green-600" />
                                <span>{result.batteryPower}Ah</span>
                            </li>
                        </ul>
                        <ul className="pt-6 flex justify-between items-center list-none">
                            <li>
                                <span className="text-slate-400">Price</span>
                                <p className="text-lg font-medium">
                                    ${result.price && result.price.value.toLocaleString()}
                                </p>
                            </li>
                        </ul>
                    </div>
                </Link>
            </div>
        ))}
    </div>
)}

                                                                       </div>
                                                                     )}
                                                               </div>
                                                           )}
                                                         </div>
                                                     </div>
                                                 );
                                             }
                                            
