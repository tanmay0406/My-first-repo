import React from "react";
import Link from "next/link";
import Image from "next/image";


import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

import {propertiesDetails} from "../data/data";

import { MdDirectionsCar, MdSettingsInputComponent, MdTune, FiChevronLeft, FiChevronRight } from '../assets/icons/vander'


export default function Grid(){
  
    return(
        <>
          <Navbar navClass="navbar-white"/>
          <section
                style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Find Your Dream eCar</h3>
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
              {/* Filter Sidebar */}
              <div className="lg:col-span-3 md:col-span-2 col-span-1 lg:col-start-1">
  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
    <h3 className="text-lg font-semibold mb-2">Filter</h3>
    {/* Add your filter options here */}
    <div className="mb-2">
      <label htmlFor="model" className="block mb-1">Type</label>
      <select name="model" id="model" className="w-full border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1">
        <option value="">All</option>
        <option value="car">Automatic</option>
        <option value="car">Manual</option>
      </select>
    </div>
    <div className="mb-2">
      <label htmlFor="model" className="block mb-1">Brand</label>
      <select name="model" id="model" className="w-full border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1">
        <option value="">All</option>
        <option value="car">Audi</option>
        <option value="car">BMW</option>
        <option value="car">Honda</option>
        <option value="car">Toyota</option>
        <option value="car">Nissan</option>
      </select>
    </div>
    <div className="mb-2">
      <label htmlFor="model" className="block mb-1">Body Type</label>
      <select name="model" id="model" className="w-full border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1">
        <option value="">All</option>
        <option value="car">Sedan</option>
        <option value="car">Hatchback</option>
        <option value="car">SUV</option>
      </select>
    </div>
    {/* Add more filter options as needed */}
  </div>
</div>


          {/* End of Filter Sidebar */}
                </div>
            </div>


            
            <section className="relative lg:py-24 py-16">
                <div className="container">
                <div className="lg:col-span-9 md:col-span-10 col-span-11">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        {propertiesDetails.map((item, index) => (
                            <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                                <div className="relative">
                                <Image src={item.image}alt=""width={0}  height={0} sizes="100vw" style={{ width: '400px', height: '200px', objectFit: 'cover' }}priority/>

                                    <div className="absolute top-4 end-4">
                                        <Link href="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart mdi-18px"></i></Link>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="pb-6">
                                        <Link href={`/property-detail/${item.id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</Link>
                                    </div>

                                    <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                        <li className="flex items-center me-4">
                                            <MdDirectionsCar width={20}  className="me-2 text-green-600"/>
                                            <span>{item.square}Model</span>
                                        </li>

                                        <li className="flex items-center me-4">
                                            <MdSettingsInputComponent width={20}  className="me-2 text-green-600"/>
                                            <span>{item.beds} Type</span>
                                        </li>

                                        <li className="flex items-center">
                                            <MdTune width={20}  className="me-2 text-green-600"/>
                                            <span>{item.baths}Range</span>
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
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">1</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">2</Link>
                                    </li>
                                    <li>
                                        <Link href="#" aria-current="page" className="z-10 w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-green-600 shadow-sm dark:shadow-gray-700">3</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">4</Link>
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