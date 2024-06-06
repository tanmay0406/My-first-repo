'use client'; 
import React, { useState, useEffect } from "react";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";
import Link from 'next/link'; // Import Link from Next.js

import { MdDirectionsCar, MdSettingsInputComponent, MdTune, FiChevronLeft, FiChevronRight } from '../assets/icons/vander'

export default function Grid() {
    const [filteredEcycles, setFilteredEcycles] = useState([]);
    const [error, setError] = useState(null);
    const [filterBrand, setFilterBrand] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [filterColor, setFilterColor] = useState("");
    const [filterPrice, setFilterPrice] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchEcycleDetails();
    }, [searchQuery, filterBrand, filterLocation, filterColor, filterPrice]);

    const fetchEcycleDetails = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/vehicles/ecycle");
            if (!response.ok) {
                throw new Error('Failed to fetch e-cycle details');
            }
            const data = await response.json();
            setFilteredEcycles(data);
        } catch (error) {
            setError("Error fetching e-cycle details");
        }
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleBrandChange = (e) => {
        setFilterBrand(e.target.value);
    };

    const handleLocationChange = (e) => {
        setFilterLocation(e.target.value);
    };

    const handleColorChange = (e) => {
        setFilterColor(e.target.value);
    };

    const handlePriceChange = (e) => {
        setFilterPrice(e.target.value);
    };

    // Apply additional filters
    let filtered = filteredEcycles;

    if (filterBrand) {
        filtered = filtered.filter(ecycle => ecycle.brand && ecycle.brand.toLowerCase() === filterBrand.toLowerCase());
    }
    if (filterLocation) {
        filtered = filtered.filter(ecycle => ecycle.location && ecycle.location.toLowerCase() === filterLocation.toLowerCase());
    }
    if (filterColor) {
        filtered = filtered.filter(ecycle => ecycle.color && ecycle.color.toLowerCase() === filterColor.toLowerCase());
    }

    if (filterPrice) {
        filtered = filtered.filter(ecycle => ecycle.price && ecycle.price.value <= parseInt(filterPrice));
    }

   
  
    return(
        <>
          <Navbar navClass="navbar-white"/>
          
          <section
                style={{ backgroundImage: "url('/images/bg/b17.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Find Your Dream eBicycle</h3>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <div className="container relative -mt-16 z-1">
            <div className="flex flex-col lg:flex-row">
           {/* Search Bar */}
           <div className="container mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder="Search..."
                    className="border border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md px-4 py-2 w-full"
                />
            </div>
            {/* End of Search Bar */}

                 {/* Filter Sidebar */}
                 <div className="mb-20"></div>
                 <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap">
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="brand" className="font-semibold mb-1 mr-2">
                                Brand:
                            </label>
                            <select
                                name="brand"
                                id="brand"
                                value={filterBrand}
                                onChange={handleBrandChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                            >
                                <option value="">All</option>
                                <option value="Hero">Hero</option>
                                <option value="Triumph">Triumph</option>
                                <option value="Scott">Scott</option>
                                <option value="Kona">Kona</option>
                            </select>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="location" className="font-semibold mb-1 mr-2">
                                Location:
                            </label>
                            <select
                                name="location"
                                id="location"
                                value={filterLocation}
                                onChange={handleLocationChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                            >
                                <option value="">All</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Pune">Pune</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Bangalore">Bangalore</option>
                            </select>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="color" className="font-semibold mb-1 mr-2">
                                Color:
                            </label>
                            <select
                                name="color"
                                id="color"
                                value={filterColor}
                                onChange={handleColorChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                            >
                                <option value="">All</option>
                                <option value="Green">Green</option>
                                <option value="Silver">Silver</option>
                                <option value="Orange">Orange</option>
                                <option value="White">White</option>
                                <option value="Black">Black</option>
                            </select>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="price" className="font-semibold mb-1 mr-2">
                                Price:
                            </label>
                            <input
                                type="range"
                                id="price"
                                min="0"
                                max="1000000"
                                value={filterPrice}
                                onChange={handlePriceChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                            />
                            <span className="ml-2">${filterPrice}</span>
                        </div>
                    </div>
            {/* End of Filter Sidebar */}





           {/* Searched Car Display */}
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[0px]">
           {filtered.map((ecycle, index) => (
                    <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                       
                        
                    </div>
                ))}
            </div>
            {/* End of Searched Car Display */}
             
                </div>
            </div>
            <section className="relative lg:py-24 py-16">
                <div className="container">
                <div className="lg:col-span-9 md:col-span-10 col-span-11">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {filtered.map((ecycle, index) => (
                         <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                            <div className="group relative rounded-xl bg-white dark:bg-slate-900 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                                <div className="relative">
                                <div className="p-4">
                {/* Display the image */}
                {ecycle.frontImagesBase64 && ecycle.frontImagesBase64.length > 0 && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={`data:image/jpeg;base64,${ecycle.frontImagesBase64[0]}`} // Assuming the first image is the front image
                        alt={ecycle.name}
                        className="h-40 w-auto"
                    />
                )}
                </div>

                                    <div className="absolute top-4 end-4">
                                    <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md bg-white border text-black-300 hover:text-red-500" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
                                    </div>
                                </div>

                                <div className="p-6 group-hover:bg-gray-100 dark:group-hover:bg-slate-800">
                                    <div className="pb-6">
                                    <p className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{ecycle.name}</p>

                                    </div>

                                    <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                        <li className="flex items-center me-4">
                                            <MdDirectionsCar width={20}  className="me-2 text-green-600"/>
                                            <span>{ecycle.brand}</span>
                                        </li>

                                        
                                    </ul>

                                    <ul className="pt-6 flex justify-between items-center list-none">
                                        <li>
                                            <span className="text-slate-400">Price</span>
                                            <p className="text-lg font-medium">${ecycle.price && ecycle.price.value}</p>
                                        </li>

                                        
                                    </ul>
                                </div>
                            </div>
                           </div>
                        ))}
                    </div>
                    </div>
                        
                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                        <div className="md:col-span-12 text-center">
                            <nav>
                                <ul className="inline-flex items-center -space-x-px">
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                            <FiChevronLeft className="text-[20px]"/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" aria-current="page" className="z-10 w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-green-600 shadow-sm dark:shadow-gray-700">1</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">2</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">3</Link>
                                    </li>
                                
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">3</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                            <FiChevronRight className="text-[20px]"/>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    



                </div>
            </section>
            <Footer />
            <Switcher />
        </>
    )
}


