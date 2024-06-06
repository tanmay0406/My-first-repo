// pages/payment.js
// Getting the File uploads/
'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowRight, MdDirectionsCar, MdSettingsInputComponent } from '../assets/icons/vander';
import Footer from "../componants/footer";
import GetInTuch from "../componants/get-in-touch";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";

export default function IndexThree() {
    const [showPopup, setShowPopup] = useState(false);
    const [filterBodyType, setFilterBodyType] = useState(""); 
    const [filterBrand, setFilterBrand] = useState("");
    const [filterprice, setFilterprice] = useState("");
    const [filteredRentals, setFilteredRentals] = useState([]);
    const [rentals, setRentals] = useState([]); 

    const handleBodyTypeChange = (e) => {
        setFilterBodyType(e.target.value);
    };

    const handleBrandChange = (e) => {
        setFilterBrand(e.target.value);
    };

    const handlepriceChange = (e) => {
        setFilterprice(e.target.value);
    }

    const filterRentals = () => {
        const filtered = rentals.filter((rental) => {
            const matchesFilters =
                (!filterBodyType || rental.bodyType.toLowerCase() === filterBodyType.toLowerCase()) &&
                (!filterprice || rental.price <= parseInt(filterprice)) &&
                (!filterBrand || rental.brand.toLowerCase() === filterBrand.toLowerCase());
            return matchesFilters;
        });
        setFilteredRentals(filtered);
    };

    useEffect(() => {
        filterRentals();
    }, [filterBodyType, filterBrand, filterprice, rentals]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch('http://51.79.225.217:5000/api/view/rentev');
            const data = await res.json();
            setRentals(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <Navbar />
            <section className="container-fluid relative mt-20">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                        <iframe title="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: "0" }} className="w-full h-[500px]" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
            <div className="mb-8"></div> {/* Add this empty div for space */}
            {/* Filter Sidebar */}
            <div className="flex justify-center">
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap">
                    {/* bodytype */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                        <label htmlFor="bodyType" className="font-semibold mb-1 mr-2">
                            Body Type:
                        </label>
                        <select
                            name="bodyType"
                            id="bodyType"
                            value={filterBodyType}
                            onChange={handleBodyTypeChange}
                            className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                        >
                            <option value="">All</option>
                            <option value="SUV">SUV</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Sedan">Sedan</option>
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
                            max="300" // Adjust the max value according to your maximum price
                            value={filterprice} // Make sure you have a state variable named filterPrice
                            onChange={handlepriceChange} // Make sure you have a corresponding handlePriceChange function
                            className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                        />
                        <span className="ml-2">${filterprice}</span>
                    </div>
                    {/* Brand */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                        <label htmlFor="brand" className="font-semibold mb-1 mr-2">
                            Brand:
                        </label>
                        <input
                            type="text"
                            id="brand"
                            value={filterBrand}
                            onChange={handleBrandChange}
                            placeholder="Enter brand"
                            className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                        />
                    </div>
                </div>
            </div>
            <section className="container relative -mt-[25px]">
                <div className="grid grid-cols-1">
                </div>
            </section>
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
                        {filteredRentals.map((item, index) => (
                            <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 w-full mx-auto lg:max-w-2xl">
                                <div className="md:flex">
                                    <div className="p-6">
                                        <div className="pb-6">
                                            <div className="cursor-pointer" onClick={() => setShowPopup(true)}>
                                                <p className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.brand} - {item.model}</p>
                                            </div>
                                        </div>
                                        <ul className="md:py-4 py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                            <li className="flex items-center me-4">
                                                <MdDirectionsCar width={20} className=" me-2 text-green-600" />
                                                <span>{item.model}</span>
                                            </li>
                                            <li className="flex items-center me-4">
                                                <MdSettingsInputComponent width={20} className=" me-2 text-green-600" />
                                                <span>{item.vehicleType}</span>
                                            </li>
                                        </ul>
                                        <ul>
                                            <img src={`https://localhost:5000/${item.image}`} alt={`Vehicle Image ${index}`} />
                                        </ul>
                                        <ul className="md:pt-4 pt-6 flex justify-between items-center list-none">
                                            <li>
                                                <span className="text-slate-400">Owner Name</span>
                                                <p className="text-lg font-medium">{item.ownerName}</p>
                                            </li>
                                        </ul>
                                        <ul className="md:pt-4 pt-6 flex justify-between items-center list-none">
                                            <li>
                                                <span className="text-slate-400">Vehical No.</span>
                                                <p className="text-lg font-medium">{item.plateNo}</p>
                                            </li>
                                        </ul>
                                        <ul className="md:pt-4 pt-6 flex justify-between items-center list-none">
                                            <li>
                                                <span className="text-slate-400">Price/hr</span>
                                                <p className="text-lg font-medium">${item.price}</p>
                                            </li>
                                        </ul>
                                        {/* Popup/modal */}
                                        {showPopup && (
                                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                                                <div className="bg-white p-6 rounded-lg relative">
                                                    <button
                                                        className="absolute top-0 end-0 text-red-500 hover:text-red-700 p-2"
                                                        onClick={() => setShowPopup(false)}
                                                    >
                                                        X
                                                    </button>
                                                    <h2 className="text-xl font-semibold mb-4">Review your trip</h2>
                                                    {/* Add popup content here */}

                                                    <p><strong>Pickup Location: Pune</strong></p>
                                                    <p><strong>Dropoff Location: Pune</strong> </p>
                                                    <p><strong>Date: 12-04-2024</strong></p>
                                                    <p><strong>Total Fare:120 X 10 = 1200</strong></p>
                                                    <p>Taxes: 100</p>
                                                    <p>Promo Code</p>

                                                    <button className="block w-full bg-green-500 text-white py-3 rounded hover:bg-green-600">
                                                        <Link href="/payment">Confirm</Link>
                                                    </button>


                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="md:flex justify-center text-center mt-6">
                        <div className="md:w-full">
                            <Link href="/" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">View More eVs <FiArrowRight width={18} className="ms-1" /></Link>
                            {/* Confirm button */}
                            <button className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">
                                <Link href="/payment">Confirm</Link></button>
                        </div>
                    </div>
                </div>
                <GetInTuch />
            </section>
            <Footer />
            <Switcher />
        </>
    )
}
