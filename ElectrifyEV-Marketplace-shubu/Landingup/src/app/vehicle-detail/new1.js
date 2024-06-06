'use client'; 
import React, { useState } from "react";
import { MdFavoriteBorder } from 'react-icons/md'; 
import Link from "next/link";

import {propertiesDetails} from '../../data/data';

import Navbar from '../../componants/navbar'
import Footer from '../../componants/footer'
import Switcher from '../../componants/switcher'
import PropertyImage from '../../componants/propertyImage';


import {MdDirectionsCar, MdTune, MdSettingsInputComponent, FiPhone} from '../../assets/icons/vander'

export default function PropertiesDetail(props) {
    const property = propertiesDetails.find((user) => user?.id === parseInt(props?.params?.id || 0));
    
    const [isTestDrivePopupOpen, setIsTestDrivePopupOpen] = useState(false);
    const [isOfferPopupOpen, setIsOfferPopupOpen] = useState(false);
    const [isBuyNowPopupOpen, setIsBuyNowPopupOpen] = useState(false);
  
    const openTestDrivePopup = () => setIsTestDrivePopupOpen(true);
    const closeTestDrivePopup = () => setIsTestDrivePopupOpen(false);
  
    const openOfferPopup = () => setIsOfferPopupOpen(true);
    const closeOfferPopup = () => setIsOfferPopupOpen(false);
  
    const openBuyNowPopup = () => setIsBuyNowPopupOpen(true);
    const closeBuyNowPopup = () => setIsBuyNowPopupOpen(false);
    



  return(
    <>
       <Navbar/>
       <section className="container{width:100%;} md:pb-24 pb-16 mt-20 ml-0">
    <div className="md:flex justify-start">
        <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
            <PropertyImage images={property.images} />
            
            <div className=" md:p-4 px-3 mt-4 mr-0 text-black">
                <h3 className="text-xl font-medium">Description</h3>
                <p>{property?.description}</p>

            </div>
            <div className="md:p-4 px-3 mt-2">
            <h3 className="text-xl font-medium">Inspection Report</h3>
            <div className="w-126 mt-8 ml-4 mt-2 rounded-lg bg-white p-16 border border-gray-300 shadow-md">
  <h2 className="text-xl font-semibold mb-2 mt-0">Inspection Report</h2>
  <div className="mb-4  bg-gray-100 p-4 rounded-lg">
    <h3 className="text-lg font-semibold mb-2 flex items-center">
      <i className="mdi mdi-alert-circle-outline text-red-500 mr-2"></i>
      <span className="text-black">Imperfections:</span>
    </h3>
    <ul className="list-disc pl-4">
      <li className="mb-1">Minor cosmetic imperfections are not repaired as they do not affect the performance, and reduces the cost of ownership.</li>

    </ul>
  

</div>

<div className="mb-4 bg-gray-100 p-4 rounded-lg">
  <h3 className="text-lg font-semibold mb-2 flex items-center">
    <i className="mdi mdi-wrench-outline text-blue-500 mr-2"></i>
    <span className="text-black">Repainted Parts:</span>
  </h3>
  <ul>
    <li className="mb-1">Some parts have been repainted for better aesthetics. However, we assure the car is non-accidental.</li>
    
  </ul>
</div>

<div className="mb-4 bg-gray-100 p-4 rounded-lg">
  <h3 className="text-lg font-semibold mb-2 flex items-center">
  <i className="mdi mdi-check-circle-outline text-green-500 mr-2"></i>

    <span className="text-black">Perfect Parts:</span>
  </h3>
  <ul>
    <li className="mb-1">Thoroughly tested and ready for the road.</li>
    
  </ul>
</div>

<div className="mb-4 bg-gray-100 p-4 rounded-lg">
  <h3 className="text-lg font-semibold mb-2 flex items-center">
  <i class="mdi mdi-circle-slice-8"></i>

    <span className="text-black">Tyres (Life Remaining):</span>
  </h3>
  <p>Front Left: 70%</p>
  <p>Front Right: 80%</p>
  <p>Rear Left: 60%</p>
  <p>Rear Right: 75%</p>
</div>

</div>
</div>









        </div>

        <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
        <div className="sticky top-24">


        <div className="border border-gray-300 rounded-xl bg-gray-50 p-4">
        

                <h4 className="text-2xl font-medium">{property?.name}</h4>

                 

                <ul className="py-6 flex items-center list-none">
                    <li className="flex items-center lg:me-6 me-4">
                      
                        <MdDirectionsCar className="lg:text-3xl text-2xl me-2 text-green-600" />
                        <span className="lg:text-xl">{property?.Model}</span>
                    </li>
                    <li className="flex items-center lg:me-6 me-4">
                        <MdSettingsInputComponent className="lg:text-3xl text-2xl me-2 text-green-600" />
                        <span className="lg:text-xl">{property?.Type}</span>
                    </li>
                    <li className="flex items-center">
                        <MdTune className="lg:text-3xl text-2xl me-2 text-green-600" />
                        <span className="lg:text-xl">{property?.Range}</span>
                    </li>
                </ul>
                <div className="md:flex mt-4">
                    <div className="lg:w-1/2 md:w-1/2 p-1">
                        <div className="flex flex-wrap justify-start gap-4">
                            <div className="text-black">
                                <p className="text-slate-900">Registration Year:</p>
                                <p className="text-slate-900 mt-4">No. of Owners:</p>
                                <p className="text-slate-900 mt-4">Registration:</p>
                                <p className="text-slate-900 mt-4">Location:</p>
                                <p className="text-slate-900 mt-4">Body Type:</p>
                                <p className="text-slate-900 mt-4">Kilometres Driven:</p>
                                <p className="text-slate-900 mt-4">Colour:</p>
                            </div>
                            <div className="text-black">
                                <p className="text-slate-900">{property?.registrationYear}</p>
                                <p className="text-slate-900 mt-4">{property?.numOfOwners}</p>
                                <p className="text-slate-900 mt-4">{property?.registration}</p>
                                <p className="text-slate-900 mt-4">{property?.Location}</p>
                                <p className="text-slate-900 mt-4">{property?.bodytype}</p>
                                <p className="text-slate-900 mt-4">{property?.kilometersDriven}</p>
                                <p className="text-slate-900 mt-4">{property?.colour}</p>

                                </div>
                                

                                <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
    <div className="p-4 flex justify-between items-center">
        <h5 className="text-2xl font-medium">Price:</h5>
        <div className="flex items-center">
            <span className="text-xl font-medium">${property?.price}</span>
            <div className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6 ml-4">For Sale</div>
        </div>
    </div>
</div>









</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div className="flex justify-center gap-4 mt-0 ">
           
           {/* Book a Test Drive Button */}
           <button
             onClick={openTestDrivePopup}
             className=" px-8 py-8 btn bg-green-600 hover:bg-green-700 text-xl text-white rounded-md"
           >
             Book a Test Drive
           </button>
 
           {/* Make an Offer Button */}
           <button
             onClick={openOfferPopup}
             className=" px-8 py-8 btn bg-green-600 hover:bg-green-700 text-xl text-white rounded-md"
             
           >
             Make an Offer
           </button>
 
           {/* Buy Now Button */}
           <button
             onClick={openBuyNowPopup}
             className=" px-8 py-8 btn bg-green-600 hover:bg-green-700 text-xl text-white rounded-md"
           >
             Buy Now
           </button>
             </div>
 

{isTestDrivePopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-10 border border-green-400 rounded-lg shadow-md w-4/5 relative z-10">
              <button onClick={closeTestDrivePopup} className="absolute top-0 right-0 p-2">X</button>
              <div className="modal">
                <div className="modal-content">
                  <h2>Book a Test Drive</h2>
                  <p className="mb-4 text-gray-600 text-sm">Please fill out the form below to book a test drive:</p>
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Additional Message (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Offer Popup */}
      {isOfferPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-10 border border-green-400 rounded-lg shadow-md w-4/5 relative z-10">
              <button onClick={closeOfferPopup} className="absolute top-0 right-0 p-2">X</button>
              <div className="modal">
                <div className="modal-content">
                  <h2>Make an Offer</h2>
                  <form>
                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                        Offer Amount
                      </label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
                      >
                        Submit Offer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Buy Now Popup */}
      {isBuyNowPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-10 border border-green-400 rounded-lg shadow-md w-4/5 relative z-10">
              <button onClick={closeBuyNowPopup} className="absolute top-0 right-0 p-2">X</button>
              <div className="modal">
                <div className="modal-content">
                  <h2>Buy Now</h2>
                  <form className="max-w-md">
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
                      >
                        Buy Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <Switcher />
    </>
  );
}