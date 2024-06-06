'use client'
import React, { useState } from "react"
import Link from "next/link";
import BuyPopup from '/src/app/buy/page.js';
import { FaMapMarkerAlt, MdDirectionsCar, LuCircleDollarSign } from '../assets/icons/vander'

export default function FormThree() {
    const [isOpen, setIsOpen] = useState(false); // State for managing the visibility of the popup

    // Function to open the popup
    const openPopup = () => {
        setIsOpen(true);
    };

    // Function to close the popup
    const closePopup = () => {
        setIsOpen(false);
    };
    let [activeTabIndex, setActiveTabIndex] = useState(0);

    let handleTabClick = (tabIndex) => {
        setActiveTabIndex(tabIndex);
    };

    return (
        <div className="grid grid-cols-1">
            <ul className="inline-block sm:w-fit w-full flex-wrap justify-center text-center p-4 bg-white dark:bg-slate-900 rounded-t-xl border-b dark:border-gray-800" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                <li  role="presentation" className="inline-block mr-2">
                        <Link href="/sell" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-md">Sell</Link>
                     </li>
                     <li role="presentation" className="inline-block mr-2">
                         <Link href="#" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-md" onClick={openPopup}>Buy</Link>
                     </li>
                    {isOpen && <BuyPopup isOpen={isOpen} onClose={closePopup} />}
                     <li  role="presentation" className="inline-block mr-2">
                        <Link href="/grid-map" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-md">Rentals</Link>
                     </li>
            </ul>

            <div id="StarterContent" className="p-6 bg-white dark:bg-slate-900 rounded-ss-none rounded-se-none md:rounded-se-xl rounded-xl shadow-md dark:shadow-gray-700">
                {activeTabIndex === 0 && (
                    <div id="buy-home" role="tabpanel" aria-labelledby="buy-home-tab">
                        <form action="#">
                            <div className="registration-form text-dark text-start">
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                    <div>
                                        <label className="form-label text-slate-900 dark:text-white font-medium">Location:<span className="text-red-600">*</span></label>
                                        <div className="filter-search-form relative filter-border mt-2 ">
                                            <FaMapMarkerAlt className="icons" width={18}/>
                                            <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">eVehicle Category:<span className="text-red-600">*</span></label>
                                        <div className="filter-search-form relative filter-border mt-2">
                                            <MdDirectionsCar className="icons" width={18}/>
                                            <input className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Min Price:<span className="text-red-600">*</span></label>
                                        <div className="filter-search-form relative filter-border mt-2">
                                            <LuCircleDollarSign  className="icons" width={18}/>
                                            <input type="text" id="buy-min-price" name="buy-min-price" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Enter Min Price" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">Max Price:<span className="text-red-600">*</span></label>
                                        <div className="filter-search-form relative mt-2">
                                            <LuCircleDollarSign  className="icons" width={18}/>
                                            <input type="text" id="buy-max-price" name="buy-max-price" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Enter Max Price" />
                                        </div>
                                    </div>

                                    <div className="lg:mt-6">
                                        <input type="submit" id="search-buy" name="search" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-12 rounded" value="Search" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
                {/* Add similar code blocks for the "Sell" and "Rentals" tabs */}
            </div>
        </div>
    )
}
