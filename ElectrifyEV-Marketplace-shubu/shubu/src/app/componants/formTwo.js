"use client"; // This is a client component 
import React, { useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt, MdDirectionsCar, LuCircleDollarSign } from '../assets/icons/vander'

export default function FormTwo(){

    let [activeTabIndex, setActiveIndex] = useState(0);

    let handleTabClick = (tabIndex) => {
        setActiveIndex(tabIndex);
    };

    return(
        <>
            <div className="grid grid-cols-1 mt-10">
                <div className="text-center">
                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Easy way to find your <br /> Vehicle</h1>
                    <p className="text-white/70 text-xl max-w-xl mx-auto">A great platform to buy, sell and rent your eVehicles</p>
                </div>
                <ul className="inline-block mx-auto sm:w-fit w-full flex-wrap justify-center text-center p-4 mt-10 bg-white dark:bg-slate-900 rounded-t-xl border-b dark:border-gray-800" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                    <li role="presentation" className="inline-block">
                        <button onClick={() => handleTabClick(0)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 0 ? 'text-white bg-green-600' : 'hover:text-green-600'}`} id="buy-home-tab" data-tabs-target="#buy-home" type="button" role="tab" aria-controls="buy-home" aria-selected="true">Buy</button>
                    </li>
                    <li role="presentation" className="inline-block">
                        <button onClick={() => handleTabClick(1)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 1 ? 'text-white bg-green-600' : 'hover:text-green-600'}`} id="sell-home-tab" data-tabs-target="#sell-home" type="button" role="tab" aria-controls="sell-home" aria-selected="false">Sell</button>
                    </li>
                    <li role="presentation" className="inline-block">
                        <button onClick={() => handleTabClick(2)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 2 ? 'text-white bg-green-600' : 'hover:text-green-600'}`} id="rent-home-tab" data-tabs-target="#rent-home" type="button" role="tab" aria-controls="rent-home" aria-selected="false">Rentals</button>
                    </li>
                </ul>

                <div id="StarterContent" className="p-6 bg-white dark:bg-slate-900 md:rounded-xl rounded-none shadow-md dark:shadow-gray-700">
                    {activeTabIndex === 0 && (
                        <div id="buy-home" role="tabpanel" aria-labelledby="buy-home-tab">
                            <form action="#">
                                <div className="registration-form text-dark text-start">
                                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                        <div>
                                            <label className="form-label text-slate-900 dark:text-white font-medium">Location:<span className="text-red-600">*</span></label>
                                            <div className="filter-search-form relative filter-border mt-2">
                                                <FaMapMarkerAlt className="icons" width={18}/>
                                                <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Enter Location" />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">eVehicle Category:</label>                                                        
                                            <div className="filter-search-form relative filter-border mt-2">
                                                <MdDirectionsCar className="icons" width={18}/>
                                                <input className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Enter Vehicle Category" />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Min Price:</label>                                                        
                                            <div className="filter-search-form relative filter-border mt-2">
                                                <LuCircleDollarSign className="icons" width={18}/>
                                                <input className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Enter Min Price" />

                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">Max Price:</label>                                                        
                                            <div className="filter-search-form relative mt-2">
                                                <LuCircleDollarSign className="icons" width={18}/>
                                                <input className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Enter Max Price" />
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
                    {/* Include other tab contents similarly */}
                </div>
            </div>
        </>
    )
}
