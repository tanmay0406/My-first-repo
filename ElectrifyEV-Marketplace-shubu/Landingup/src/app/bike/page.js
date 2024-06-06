'use client';
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Navbar from "../componants/navbar"; // corrected typo in component import
import Switcher from "../componants/switcher"; // corrected typo in component import
import Footer from "../componants/footer"; // corrected typo in component import
import Image from 'next/image';

export default function Grid() {
    const [ebikes, setEbikes] = useState([]);
    const [filteredEbikes, setFilteredEbikes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterTransmissionType, setFilterTransmissionType] = useState("");
    const [filterBrand, setFilterBrand] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [filterColour, setFilterColour] = useState("");
    const [filterKilometresDriven, setFilterKilometresDriven] = useState("");
    const [filterPrice, setFilterPrice] = useState("");
    


    useEffect(() => {
        filterEbikes();
    }, [searchQuery, ebikes, filterTransmissionType, filterBrand, filterLocation, filterColour, filterKilometresDriven, filterPrice]);

    
    useEffect(() => {
        const fetchApprovedEbikes = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/vehicles/approved/ebike');
                const data = await response.json();
                setEbikes(data);
                setFilteredEbikes(data);
            } catch (error) {
                console.error('Error fetching approved eBikes:', error);
            }
        };
        fetchApprovedEbikes();
    }, []);

    
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filterEbikes = () => {
        let filtered = ebikes.filter((ebike) => {
            // Filter logic based on search query
            const matchesSearchQuery =
                (ebike.transmissionType && ebike.transmissionType.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (ebike.brand && ebike.brand.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (ebike.model && ebike.model.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (ebike.location && ebike.location.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (ebike.color && ebike.color.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesSearchQuery;
        });

        // Apply additional filters
        if (filterTransmissionType) {
            filtered = filtered.filter(ebike => ebike.transmissionType && ebike.transmissionType.toLowerCase() === filterTransmissionType.toLowerCase());
        }
        if (filterBrand) {
            filtered = filtered.filter(ebike => ebike.brand && ebike.brand.toLowerCase() === filterBrand.toLowerCase());
        }
        if (filterLocation) {
            filtered = filtered.filter(ebike => ebike.location && ebike.location.toLowerCase() === filterLocation.toLowerCase());
        }
        if (filterColour) {
            filtered = filtered.filter(ebike => ebike.color && ebike.color.toLowerCase() === filterColour.toLowerCase());
        }
        if (filterKilometresDriven) {
            filtered = filtered.filter(ebike => ebike.kilometresDriven <= parseInt(filterKilometresDriven));
        }
        if (filterPrice) {
            filtered = filtered.filter(ebike => ebike.price && ebike.price.value <= parseInt(filterPrice));
        }

        setFilteredEbikes(filtered);
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

    const handleColourChange = (e) => {
        setFilterColour(e.target.value);
    };

    const handleKilometresDrivenChange = (e) => {
        setFilterKilometresDriven(e.target.value);
    };

    const handlePriceChange = (e) => {
        setFilterPrice(e.target.value);
    };

    return (
        <>
            <Navbar navClass="navbar-white"/>

            <section
                style={{ backgroundImage: "url('/images/bg/b17.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Find Your Dream eScooter</h3>
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

                    {/* Filter Sidebar */}
                    <div className="mb-20"></div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap">
                        {/* Type Filter */}
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="type" className="font-semibold mb-1 mr-2">
                                Transmission Type:
                            </label>
                            <select
                                name="type"
                                id="type"
                                value={filterTransmissionType}
                                onChange={handleTransmissionTypeChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                            >
                                <option value="">All</option>
                                <option value="Manual">Manual</option>
                                <option value="Automatic">Automatic</option>
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
                                    <option value="Ola">Ola</option>
                                    <option value="Scooter">Scooter</option>
                                    <option value="Honda">Honda</option>
                                    <option value="li05-moped">li05-moped</option>
                                {/* Dynamically populate options based on fetched data */}
                                {ebikes.map(ebike => (
                                    <option key={ebike._id} value={ebike.brand}>{ebike.brand}</option>
                                ))}
                            </select>
                        </div>


                       {/* Location Filter */}
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
                                {/* Dynamically populate options based on fetched data */}
                                {ebikes.map(ebike => (
                                    <option key={ebike._id} value={ebike.location}>{ebike.location}</option>
                                ))}
                            </select>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="kilometresDriven" className="font-semibold mb-1 mr-2">
                                Kilometres Driven:
                            </label>
                            <input
                                type="range"
                                id="kilometers"
                                min="0"
                                max="100000"
                                value={filterKilometresDriven}
                                onChange={handleKilometresDrivenChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1" />
                            <span className="ml-2">{filterKilometresDriven} km</span>
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
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1" />
                            <span className="ml-2">${filterPrice}</span>
                        </div>
                        {/* Colour Filter */}
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="colour" className="font-semibold mb-1 mr-2">
                                Colour:
                            </label>
                            <select
                                name="colour"
                                id="colour"
                                value={filterColour}
                                onChange={handleColourChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                            >
                                <option value="">All</option>
                                <option value="Red">Red</option>
                                <option value="Silver">Silver</option>
                                <option value="Grey">Grey</option>
                                <option value="Black">Black</option>
                                {/* Dynamically populate options based on fetched data */}
                                {ebikes.map(ebike => (
                                    <option key={ebike._id} value={ebike.color}>{ebike.color}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/* End of Filter Sidebar */}

                    {/* Searched Car Display */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[0px]">
    {filteredEbikes.filter(ebike => ebike.status === 'Approved').map((ebike, index) => (
            <Link href={`/vehicle-detail?id=${ebike._id}`} key={ebike._id}>
                <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                <div className="p-4">
                        {ebike.frontImagesBase64 && ebike.frontImagesBase64.length > 0 && (
                            <img
                                src={`data:image/jpeg;base64,${ebike.frontImagesBase64[0]}`} // Decode Base64 here
                                alt="Front View"
                                className="h-40 w-auto"
                            />
                        )}

                        <h3 className="text-xl font-semibold mt-2">{ebike.brand} {ebike.model}</h3>
                        <p className="text-gray-600">Location: {ebike.location}</p>
                        <p className="text-gray-600">Color: {ebike.color}</p>
                        <p className="text-gray-600">Kilometers Driven: {ebike.kilometresDriven}</p>
                        {ebike.price ? (<p className="text-gray-600">Price: {ebike.price.value} {ebike.price.currency}</p>
                        ) : (
                            <p className="text-gray-600">Price: N/A</p>
                        )}
                    </div>
                </div>
            </Link>
        ))}
</div>


                    </div>
                    {/* End of Searched Car Display */}
                
            </div>

            <Footer /> {/* Added Footer component */}
            <Switcher /> {/* Added Switcher component */}
        </>
    );
}
