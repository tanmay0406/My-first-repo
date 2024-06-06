'use client'; 
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../componants/navbar"; 
import Switcher from "../componants/switcher"; 
import Footer from "../componants/footer"; 



import { MdDirectionsCar, FiChevronLeft, FiChevronRight } from '../assets/icons/vander'


export default function Grid() {
    const [filteredAutos, setFilteredAutos] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterTransmissionType, setFilterTransmissionType] = useState("");
    const [filterBrand, setFilterBrand] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [filterBatteryPower, setFilterBatteryPower] = useState("");
    const [filterColor, setFilterColor] = useState("");
    const [filterKilometresDriven, setFilterKilometresDriven] = useState("");
    const [filterPrice, setFilterPrice] = useState("");
    
    useEffect(() => {
        fetchfilterAutos().catch(error => console.error('Error fetching eauto vehicles:', error));
    }, []);


    useEffect(() => {
        applyFilters();
    }, [searchQuery, filterTransmissionType, filterBrand, filterLocation, filterBatteryPower, filterColor, filterKilometresDriven, filterPrice]);

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleTransmissionTypeChange = (e) => {
        setFilterTransmissionType(e.target.value);
    };

    const handleBrandChange = (e) => {
        setFilterBrand(e.target.value);
    };

    const handleLocationChange = (e) => {
        setFilterLocation(e.target.value);
    };

    const handleBatteryPowerChange = (e) => {
        setFilterBatteryPower(e.target.value);
    };

    const handleColorChange = (e) => {
        setFilterColor(e.target.value);
    };

    const handleKilometresDrivenChange = (e) => {
        setFilterKilometresDriven(e.target.value);
    };

    const handlePriceChange = (e) => {
        setFilterPrice(e.target.value);
    };

    const fetchfilterAutos = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/vehicles/eauto');
            const data = await response.json();
            setFilteredAutos(data);
            
        } catch (error) {
            console.error('Error fetching eautos:', error);
        }
    };

    const applyFilters = () => {
        const filtered = filteredAutos.filter((auto) => {
            const matchesSearchQuery =
                auto.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                auto.transmissionType.toLowerCase().includes(searchQuery.toLowerCase()) ||
                auto.kilometresDriven.toString().includes(searchQuery) ||
                auto.batteryPower.toLowerCase().includes(searchQuery.toLowerCase()) ||
                auto.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
                auto.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                auto.price.value.toString().includes(searchQuery);

            const matchesFilters =
                (!filterTransmissionType || auto.transmissionType.toLowerCase() === filterTransmissionType.toLowerCase()) &&
                (!filterBrand || auto.brand.toLowerCase() === filterBrand.toLowerCase()) &&
                (!filterLocation || auto.location.toLowerCase() === filterLocation.toLowerCase()) &&
                (!filterBatteryPower || auto.batteryPower.toLowerCase() === filterBatteryPower.toLowerCase()) &&
                (!filterColor || auto.color.toLowerCase() === filterColor.toLowerCase()) &&
                (!filterKilometresDriven || auto.kilometresDriven <= parseInt(filterKilometresDriven)) &&
                (!filterPrice || auto.price.value <= parseInt(filterPrice));

            return matchesSearchQuery && matchesFilters;
        });

        setFilteredAutos(filtered);
    };
   
  
    return(
        <>
          <Navbar navClass="navbar-white"/>
          
          <section
                style={{ backgroundImage: "url('/images/bg/alt green.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Find Your Dream eAuto</h3>
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
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap">
                {/* Transmission Type Filter */}
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="transmissionType" className="font-semibold mb-1 mr-2">
                                Transmission Type:
                            </label>
                            <select
                                name="transmissionType"
                                id="transmissionType"
                                value={filterTransmissionType}
                                onChange={handleTransmissionTypeChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                            >
                                <option value="">All</option>
                                <option value="Automatic">Automatic</option>
                                <option value="Manual">Manual</option>
                                {/* Add more options */}
                            </select>
                        </div>

                        {/* Brand Filter */}
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
                                <option value="Piaggio">Piaggio</option>
                        <option value="Azul">Azul</option>
                        <option value="Greaves">Greaves</option>
                        <option value="Kinetic Green">Kinetic Green</option>
                        <option value="Altigreen">Altigreen</option>
                                {/* Add more options */}
                            </select>
                        </div>

                        {/* Location */}
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="Location" className="font-semibold mb-1 mr-2">
                                Location:
                            </label>
                            <select
                                name="Location"
                                id="Location"
                                value={filterLocation}
                                onChange={handleLocationChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                            >
                                <option value="">All</option>
                                <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bangalore">Bangalore</option>
                                {/* Add more options */}
                            </select>
                        </div>

                        {/* Color */}
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
                                <option value="Red">Red</option>
                        <option value="Grey">Grey</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="White">White</option>
                                {/* Add more options */}
                            </select>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="Battery" className="font-semibold mb-1 mr-2">
                                Battery:
                            </label>
                            <input
                                type="range"
                                id="Battery"
                                min="0"
                                max="500"
                                value={filterBatteryPower}
                                onChange={handleBatteryPowerChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                            />
                        </div>

                        {/* Kilometres Driven */}
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="kilometersDriven" className="font-semibold mb-1 mr-2">
                                Kilometres Driven:
                            </label>
                            <input
                                type="range"
                                id="kilometersDriven"
                                min="0"
                                max="100000"
                                value={filterKilometresDriven}
                                onChange={handleKilometresDrivenChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                            />
                            <span className="ml-2">{filterKilometresDriven} km</span>
                        </div>

                        {/* Price */}
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
                </div>
            </div>




            <section className="relative lg:py-24 py-16">
    <div className="container">
        <div className="lg:col-span-9 md:col-span-10 col-span-11">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            {filteredAutos.map((auto, index) => (
                            <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                        <div className="group relative rounded-xl bg-white dark:bg-slate-900 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                            <div className="relative">
                            <div className="flex justify-center py-2">
                                    {/* Display only the first image */}
                                    {auto.frontImagesBase64.length > 0 && (
                                        <img src={`data:image/jpeg;base64,${auto.frontImagesBase64[0]}`} alt="Front View" className="h-40 w-auto" />
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
                                    <p className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{auto.name}</p>
                                </div>
                                <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                    <li className="flex items-center me-4">
                                        <MdDirectionsCar width={20} className="me-2 text-green-600" />
                                        <span>{auto.model}</span>
                                    </li>
                                </ul>
                                <ul className="pt-6 flex justify-between items-center list-none">
                                    <li>
                                        <span className="text-slate-400">Price</span>
                                        <p className="text-lg font-medium">${auto.price.value}</p>
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