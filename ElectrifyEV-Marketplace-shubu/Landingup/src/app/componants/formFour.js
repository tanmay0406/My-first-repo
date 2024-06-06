'use client'
import React from "react"

import { FaMapMarkerAlt, MdDirectionsCar, LuCircleDollarSign } from '../assets/icons/vander'

export default function FormFour() {
    return (
        <form action="#">
            <div className="registration-form text-dark text-start">
                <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                    <div>
                        <label className="form-label text-slate-900 dark:text-white font-medium">Location:<span className="text-red-600">*</span></label>
                        <div className="filter-search-form relative filter-border mt-2">
                            <FaMapMarkerAlt className="icons" />
                            <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">eVehicle Category:<span className="text-red-600">*</span></label>
                        <div className="filter-search-form relative filter-border mt-2">
                            <MdDirectionsCar className=" icons" />
                            <input className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Min Price:<span className="text-red-600">*</span></label>
                        <div className="filter-search-form relative filter-border mt-2">
                            <LuCircleDollarSign className="icons" />
                            <input type="text" id="buy-min-price" name="buy-min-price" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Enter Min Price" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">Max Price:<span className="text-red-600">*</span></label>
                        <div className="filter-search-form relative mt-2">
                            <LuCircleDollarSign className="icons" />
                            <input type="text" id="buy-max-price" name="buy-max-price" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Enter Max Price" />
                        </div>
                    </div>

                    <div className="lg:mt-6">
                        <input type="submit" id="search-buy" name="search" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-[60px] lg:rounded-none rounded mt-2" value="Search" />
                    </div>
                </div>
            </div>
        </form>
    )
}
