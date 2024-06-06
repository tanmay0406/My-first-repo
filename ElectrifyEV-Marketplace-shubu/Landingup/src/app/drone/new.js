'use client'; 
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {droneDetails} from "../data/data";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

import { MdBatteryFull, MdPhotoCamera, MdFlight, FiChevronLeft, FiChevronRight } from '../assets/icons/vander';

export default function Grid() {
    const [filterBattery, setFilterBattery] = useState("");
    const [filterBrand, setFilterBrand] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [filterColor, setFilterColor] = useState("");
    const [filterPrice, setFilterPrice] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredDrones, setFilteredDrones] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dronesPerPage] = useState(6);

    useEffect(() => {
        filterDrones();
    }, [searchQuery, filterBattery, filterBrand, filterLocation, filterColor, filterPrice]);

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleBatteryChange = (e) => {
        setFilterBattery(e.target.value);
    }

    const handleBrandChange = (e) => {
        setFilterBrand(e.target.value);
    }

    const handleLocationChange = (e) => {
        setFilterLocation(e.target.value);
    }

    const handleColorChange = (e) => {
        setFilterColor(e.target.value);
    }

    const handlePriceChange = (e) => {
        setFilterPrice(e.target.value);
    }

    const filterDrones = () => {
        const filtered = droneDetails.filter((edrone) => {
            const matchesSearchQuery =
                edrone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                edrone.Battery.toLowerCase().includes(searchQuery.toLowerCase()) ||
                edrone.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
                edrone.Location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                edrone.price.toString().includes(searchQuery);
            const matchesFilters =
                (!filterBattery || edrone.Battery.toLowerCase() === filterBattery.toLowerCase()) &&
                (!filterBrand || edrone.name.toLowerCase() === filterBrand.toLowerCase()) &&
                (!filterLocation || edrone.Location.toLowerCase() === filterLocation.toLowerCase()) &&
                (!filterColor || edrone.color.toLowerCase() === filterColor.toLowerCase()) &&
                (!filterPrice || edrone.price <= parseInt(filterPrice));
            return matchesSearchQuery && matchesFilters;
        });
        setFilteredDrones(filtered);
    };

    const indexOfLastDrone = currentPage * dronesPerPage;
    const indexOfFirstDrone = indexOfLastDrone - dronesPerPage;
    const currentDrones = filteredDrones.slice(indexOfFirstDrone, indexOfLastDrone);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <>
            <Navbar navClass="navbar-white"/>

            <section style={{ backgroundImage: "url('/images/bg/riyal.jpeg')" }} className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Find Your Dream Drone</h3>
                        <Link href="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-500 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600">
                            <i className="mdi mdi-heart mdi-18px text-gray-700 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600" style={{fontSize: '24px'}}></i>
                        </Link>
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
                    <div className="container mb-4">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            placeholder="Search..."
                            className="border border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md px-4 py-2 w-full"
                        />
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap">
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="Battery" className="font-semibold mb-1 mr-2">
                                Battery:
                            </label>
                            <input
                                type="range"
                                id="Battery"
                                min="0"
                                max="500"
                                value={filterBattery}
                                onChange={handleBatteryChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                            />
                            <span className="ml-2">{filterBattery}mAh</span>
                        </div>

                        {/* Add more filter options here */}
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="Brand" className="font-semibold mb-1 mr-2">
                                Brand:
                            </label>
                            <select
                                name="Brand"
                                id="Brand"
                                value={filterBrand}
                                onChange={handleBrandChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                            >
                                <option value="">All</option>
                                <option value="Brand1">Brand1</option>
                                <option value="Brand2">Brand2</option>
                                {/* Add more options */}
                            </select>
                        </div>

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
                                <option value="Location1">Location1</option>
                                <option value="Location2">Location2</option>
                                {/* Add more options */}
                            </select>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="Color" className="font-semibold mb-1 mr-2">
                                Color:
                            </label>
                            <select
                                name="Color"
                                id="Color"
                                value={filterColor}
                                onChange={handleColorChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                            >
                                <option value="">All</option>
                                <option value="Color1">Color1</option>
                                <option value="Color2">Color2</option>
                                {/* Add more options */}
                            </select>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="Price" className="font-semibold mb-1 mr-2">
                                Price:
                            </label>
                            <input
                                type="range"
                                id="Price"
                                min="0"
                                max="1000000"
                                value={filterPrice}
                                onChange={handlePriceChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                            />
                            <span className="ml-2">${filterPrice}</span>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        {currentDrones.map((edrone, index) => (
                            <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                                {/* Render each e-drone item here */}
                                <div className="p-4">
                                    <Image
                                        src={edrone.image}
                                        alt=""
                                        width={400}
                                        height={200}
                                        className="object-cover"
                                    />
                                    <h3 className="text-xl font-semibold mt-2">{edrone.name}</h3>
                                    <p className="text-gray-600">Model: {edrone.Model}</p>
                                    <p className="text-gray-600">Type: {edrone.Type}</p>
                                    <p className="text-gray-600">Range: {edrone.Range}</p>
                                    <p className="text-gray-600">Price: ${edrone.price}</p>
                                    {/* Add more details as needed */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="lg:col-span-9 md:col-span-10 col-span-11">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                            {/* Pagination section */}
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
                                            <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                                <FiChevronRight className="text-[20px]"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <Switcher />
        </>
    )
}
