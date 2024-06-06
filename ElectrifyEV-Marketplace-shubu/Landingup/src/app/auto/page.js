'use client'; 
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../componants/navbar"; // Corrected import statement
import Switcher from "../componants/switcher"; // Corrected import statement
import Footer from "../componants/footer"; // Corrected import statement
import { MdDirectionsCar, MdSettingsInputComponent, MdTune } from '../assets/icons/vander';

export default function Grid() {
    const [filteredEautos, setFilteredEautos] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterTransmissionType, setFilterTransmissionType] = useState("");
    const [filterBrand, setFilterBrand] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [filterBatteryPower, setFilterBatteryPower] = useState("");
    const [filterColor, setFilterColor] = useState("");
    const [filterKilometresDriven, setFilterKilometresDriven] = useState("");
    const [filterPrice, setFilterPrice] = useState("");


    useEffect(() => {
        applyFilters();
    }, [searchQuery, filterTransmissionType, filterBrand, filterLocation, filterBatteryPower, filterColor, filterKilometresDriven, filterPrice]);


    useEffect(() => {
        const fetchApprovedEautos = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/vehicles/approved/eauto');
                const data = await response.json();
                setFilteredEautos(data);
            } catch (error) {
                console.error('Error fetching approved eAutos:', error);
            }
        };
        fetchApprovedEautos();
    }, []);

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

    // const filterAutos = async () => {
    //     try {
    //         const response = await fetch('http://localhost:5000/api/vehicles/eauto');
    //         const data = await response.json();
    //         setFilteredAutos(data);
    //     } catch (error) {
    //         console.error('Error fetching eautos:', error);
    //     }
    // };

    const applyFilters = () => {
        const filtered = filteredEautos.filter((auto) => {
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

        setFilteredEautos(filtered);
    };

    return (
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

 {/* Searched Car Display */}
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
{filteredEautos.filter(eauto => eauto.status === 'Approved').map((eauto, index) => (
        <Link href={`/vehicle-detail?id=${eauto._id}`} key={eauto._id}>
            <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                {/* Render each auto item here */}
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{eauto.brand} {eauto.model}</h3>
                    <p className="text-gray-600 mb-2">{eauto.vehicleDescription}</p>
                    <p className="text-gray-600">Price: ${eauto.price.value}</p>
                </div>
                <div className="flex justify-center py-2">
                    {/* Display only the first image */}
                    {eauto.frontImagesBase64 && eauto.frontImagesBase64.length > 0 && (
    <img src={`data:image/jpeg;base64,${eauto.frontImagesBase64[0]}`} alt="Front View" className="h-40 w-auto" />
)}

                </div>
            </div>
        </Link>
    ))}
</div>
</div>
                 {/* End of Searched Car Display */}
</div>
       

            <Footer />
            <Switcher />
        </>
    );
}
