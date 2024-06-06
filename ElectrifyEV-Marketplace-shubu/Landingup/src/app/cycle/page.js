'use client'; 
import React, { useState, useEffect } from "react";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";
import Link from 'next/link'; // Import Link from Next.js

export default function Grid() {
    const [filteredEcycles, setFilteredEcycles] = useState([]);
    const [ecycles, setEcycles] = useState([]);
    const [error, setError] = useState(null);
    const [filterBrand, setFilterBrand] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [filterColor, setFilterColor] = useState("");
    const [filterPrice, setFilterPrice] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    

    useEffect(() => {
        filterEcycles();
    }, [searchQuery, filteredEcycles, filterBrand, filterLocation, filterColor,  filterPrice]);
    

    useEffect(() => {
        const fetchApprovedEcycles = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/vehicles/approved/ecycle');
                const data = await response.json();
                setFilteredEcycles(data);
                setEcycles(data); // Set ecycles state
            } catch (error) {
                console.error('Error fetching approved ecycles:', error);
                setError("Error fetching e-cycle details");
            }
        };
        fetchApprovedEcycles();
    }, []);



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
    const filterEcycles = () => {
        let filtered = ecycles.filter((ecycle) => {
            // Filter logic based on search query
            const matchesSearchQuery =
                (ecycle.brand && ecycle.brand.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (ecycle.model && ecycle.model.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (ecycle.location && ecycle.location.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (ecycle.color && ebike.color.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesSearchQuery;
        });



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
    setFilteredEcycles(filtered);
    };
    
    return (
        <>
            {/* Error handling */}
            {error && <p>{error}</p>}

            <Navbar navClass="navbar-white" />

            <section
                style={{ backgroundImage: "url('/images/bg/b17.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover"
            >
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
                            Find Your Dream eBicycle
                        </h3>
                    </div>
                </div>
            </section>

            <div className="relative">
                <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                            fill="currentColor"
                        ></path>
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

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[0px]">
                    {filteredEcycles.filter(ecycle => ecycle.status === 'Approved').map((ecycle, index) => (
        <Link href={`/vehicle-detail?id=${ecycle._id}`} key={ecycle._id}>
            <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
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
                    {/* Display other details */}
                    <h3 className="text-xl font-semibold mt-2">{ecycle.name}</h3>
                    <p className="text-gray-600">Brand: {ecycle.brand}</p>
                    <p className="text-gray-600">Location: {ecycle.location}</p>
                    <p className="text-gray-600">Color: {ecycle.color}</p>
                    {ecycle.price ? (
                        <p className="text-gray-600">
                            Price: ${ecycle.price.value} {ecycle.price.currency}
                        </p>
                    ) : (
                        <p className="text-gray-600">Price: N/A</p>
                    )}
                </div>
            </div>
        </Link>
    ))}
</div>


                </div>
            </div>

            <Footer />
            <Switcher />
        </>
    );
}
