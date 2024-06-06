// cycle


'use client'; 
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BikeDetails } from "../data/data"; 
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";



import { MdDirectionsCar, MdSettingsInputComponent, MdTune, FiChevronLeft, FiChevronRight } from '../assets/icons/vander'


export default function Grid() {
    
    const [filterType, setFilterType] = useState("");
    const [filterBrand, setFilterBrand] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [filterbodytype, setFilterbodytype] = useState("");
    const [filtercolour, setFiltercolour] = useState("");
    const [filterprice, setFilterprice] = useState("");
        const [searchQuery, setSearchQuery] = useState("");
        const [filteredProperties, setFilteredProperties] = useState([]);

        useEffect(() => {
            filterProperties();
        }, [searchQuery, filterType, filterBrand, filterLocation, filterbodytype, filtercolour, filterprice]);

        const handleSearchInputChange = (e) => {
            setSearchQuery(e.target.value);
        };


    const handleTypeChange = (e) => {
        setFilterType(e.target.value);
    }

    const handleBrandChange = (e) => {
        setFilterBrand(e.target.value);
    }
    const handleLocationChange = (e) => {
        setFilterLocation(e.target.value);
    }
    const handlebodytypeChange = (e) => {
        setFilterbodytype(e.target.value);
    }

    const handlecolourChange = (e) => {
        setFiltercolour(e.target.value);
    }

    const handlepriceChange = (e) => {
        setFilterprice(e.target.value);
    }


    const filterProperties = () => {
        const filtered = BikeDetails.filter((property) => {
            // Filter logic based on search query and filter selections
            const matchesSearchQuery =
                property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                property.Type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                property.bodytype.toLowerCase().includes(searchQuery.toLowerCase()) ||
                property.colour.toLowerCase().includes(searchQuery.toLowerCase()) ||
                property.Location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                property.price.toString().includes(searchQuery);
            const matchesFilters =
                (!filterType || property.Type.toLowerCase() === filterType.toLowerCase()) &&
                (!filterBrand || property.name.toLowerCase() === filterBrand.toLowerCase())&&
                (!filterLocation || property.Location.toLowerCase() === filterLocation.toLowerCase())&&
                (!filterbodytype || property.bodytype.toLowerCase() === filterbodytype.toLowerCase())&&
                (!filtercolour|| property.colour.toLowerCase() === filtercolour.toLowerCase())&&
                (!filterprice || property.price <= parseInt(filterprice));
            // Add more filter conditions as needed

            return matchesSearchQuery && matchesFilters;
        });
        setFilteredProperties(filtered);
    };
    
   
  
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
                {/* Type Filter */}
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                    <label htmlFor="type" className="font-semibold mb-1 mr-2">
                        Type:
                    </label>
                    <select
                        name="type"
                        id="type"
                        value={filterType}
                        onChange={handleTypeChange}
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
                                    <option value="Hero">Hero</option>
                                    <option value="Triumph">Triumph</option>
                                    <option value="Scott">Scott</option>
                                    <option value="Kona">Kona</option>
                               
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
                    
                {/* bodytype */}
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                    <label htmlFor="bodytype" className="font-semibold mb-1 mr-2">
                        Body Type:
                    </label>
                    <select
                        name="bodytype"
                        id="bodytype"
                        value={filterbodytype}
                        onChange={handlebodytypeChange}
                        className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                    >
                        <option value="">All</option>
                        <option value="Mountain">Mountain</option>
                        <option value="Folding">Folding</option>
                        <option value="Sports">Sports</option>
                        {/* Add more options */}
                    </select>
                </div>
                {/* colour */}
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                    <label htmlFor="colour" className="font-semibold mb-1 mr-2">
                        Colour:
                    </label>
                    <select
                        name="colour"
                        id="colour"
                        value={filtercolour}
                        onChange={handlecolourChange}
                        className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                    >
                        <option value="">All</option>
                        <option value="Green">Green</option>
                        <option value="Silver">Silver</option>
                       <option value="Orange">Orange</option>
                       <option value="White">White</option>
                       <option value="Black">Black</option>
                        {/* Add more options */}
                    </select>
                </div>
                
                {/* price */}
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                    <label htmlFor="price" className="font-semibold mb-1 mr-2">
                        Price:
                    </label>
                    <input
        type="range"
        id="price"
        min="0"
        max="1000000" // Adjust the max value according to your maximum price
        value={filterprice} // Make sure you have a state variable named filterPrice
        onChange={handlepriceChange} // Make sure you have a corresponding handlePriceChange function
        className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
    />
    <span className="ml-2">${filterprice}</span>

                    </div>
            </div>
            {/* End of Filter Sidebar */}





           {/* Searched Car Display */}
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[0px]">
                {filteredProperties.map((item, index) => (
                    <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                        {/* Render each property item here */}
                         {/* <div className="p-4">
        <Image
            src={item.image}
            alt=""
            width={400}
            height={200}
            className="object-cover"
        />
        <h3 className="text-xl font-semibold mt-2">{item.name}</h3>
        <p className="text-gray-600">Model: {item.Model}</p>
        <p className="text-gray-600">Type: {item.Type}</p>
        <p className="text-gray-600">Range: {item.Range}</p>
        <p className="text-gray-600">Price: ${item.price}</p>
        {/* Add more details as needed */}
    {/* </div> */}
                        
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
                    {filteredProperties.map((item, index) => (
                         <Link href={`/property-detail/${item.id}`} key={index}>
                            <div className="group relative rounded-xl bg-white dark:bg-slate-900 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                                <div className="relative">
                                <Image src={item.image}alt=""width={0}  height={0} sizes="100vw" style={{ width: '400px', height: '200px', objectFit: 'cover' }}priority/>

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
                                    <p className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</p>

                                    </div>

                                    <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                        <li className="flex items-center me-4">
                                            <MdDirectionsCar width={20}  className="me-2 text-green-600"/>
                                            <span>{item.Model}</span>
                                        </li>

                                        <li className="flex items-center me-4">
                                            <MdSettingsInputComponent width={20}  className="me-2 text-green-600"/>
                                            <span>{item.Type}</span>
                                        </li>

                                        <li className="flex items-center">
                                            <MdTune width={20}  className="me-2 text-green-600"/>
                                            <span>{item.Range}</span>
                                        </li>
                                    </ul>

                                    <ul className="pt-6 flex justify-between items-center list-none">
                                        <li>
                                            <span className="text-slate-400">Price</span>
                                            <p className="text-lg font-medium">${item.price}</p>
                                        </li>

                                        
                                    </ul>
                                </div>
                            </div>
                            </Link>
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