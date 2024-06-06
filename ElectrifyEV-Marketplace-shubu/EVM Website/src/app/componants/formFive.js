"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import Select from 'react-select';
import { FaMapMarkerAlt, MdDirectionsCar, LuCircleDollarSign  } from '../assets/icons/vander'

export default function FormFive(){

    let [activeTabIndex, setActiveIndex] = useState(0);

    let handleTabClick = (tabIndex) => {
        setActiveIndex(tabIndex);
    };
    let Vehicles = [
        { value: 'AF', label: 'eCar' },
        { value: 'AZ', label: ' eBike' },
        { value: 'BS', label: 'eBicycle' },
    ]
    return(
        <>
            <div className="grid grid-cols-1">
                
                <ul className="inline-block mx-auto sm:w-fit w-full flex-wrap justify-center text-center p-4 mt-10 bg-white dark:bg-slate-900 rounded-t-xl border-b dark:border-gray-800" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                    <li role="presentation" className="inline-block">
                        <button onClick={() => handleTabClick(0)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 0 ? 'text-white bg-green-600' : 'hover:text-green-600'}`} id="buy-home-tab" data-tabs-target="#buy-home" type="button" role="tab" aria-controls="buy-home" aria-selected="true">Buy</button>
                    </li>
                    <li role="presentation" className="inline-block">
                        <button onClick={() => handleTabClick(1)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 1 ? 'text-white bg-green-600' : 'hover:text-green-600'}`} id="sell-home-tab" data-tabs-target="#sell-home" type="button" role="tab" aria-controls="sell-home" aria-selected="false">sell</button>
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
                                            <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">eVehicle Category:</label>                                                        
                                        <div className="filter-search-form relative filter-border mt-2">
                                            <MdDirectionsCar className="icons" width={18}/>
                                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={Vehicles} />

                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Min Price:</label>                                                        
                                        <div className="filter-search-form relative filter-border mt-2">
                                            <LuCircleDollarSign className="icons" width={18}/>
                                            <input type="text" id="buy-min-price" name="buy-min-price" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" />
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
                {/* Other tab contents */}
                </div>
            </div>
        </>
    )
}
