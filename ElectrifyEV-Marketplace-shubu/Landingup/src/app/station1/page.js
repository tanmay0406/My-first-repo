/* eslint-disable @next/next/no-img-element */
// Station1Page.js
import React from "react";
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";
import Image  from "next/image";
import Link from "next/link";

const Station1Page = () => {
  return (
    <>
<Navbar />
<Navbar />

<div className="container mx-auto pt-20 pb-12">
  
  <h1 className="text-4xl font-semibold mb-8 text-center text-green-600">Do you like to swap the battery?</h1>
  <div className="flex justify-center space-x-4">
    <Link href="/at-your-doorstep">
      <div className="bg-gray-100 border border-gray-200 rounded-lg p-0 text-center transition duration-300 ease-in-out hover:bg-gray-200  h-80 w-80 ">
        <img src="/images/bg/bs1.jpeg" alt="At Your Doorstep Image" className="mx-auto mb-4 h-56 w-100" />
        <h2 className="text-xl font-semibold mb-4">At your door step</h2>
        <p className="text-gray-600">Get the battery swapped at your doorstep.</p>
      </div>
    </Link>

          
          <Link href="/store">
         
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-0 text-center transition duration-300 ease-in-out hover:bg-gray-200 h-80 w-80">
            <img src="/images/bg/bs2.jpeg" alt="At Your Doorstep Image" className="mx-auto mb-4 h-56 w-100" /> 
            <h2 className="text-xl font-semibold mb-4">Store</h2>
              <p className="text-gray-600">Visit our store to swap the battery.</p>
            </div>
          </Link>


          <Link href="/buy-battery">

            <div className="bg-gray-100 border border-gray-200 rounded-lg p-0 text-center transition duration-300 ease-in-out hover:bg-gray-200 h-80 w-80">
            <img src="/images/bg/bs3.jpeg" alt="At Your Doorstep Image" className="mx-auto mb-4 h-56 w-100" />
              <h2 className="text-xl font-semibold mb-4">Buy Battery</h2>
              <p className="text-gray-600">Purchase a new battery.</p>
            </div>
          </Link>


          <Link href="/replacement">

            <div className="bg-gray-100 border border-gray-200 rounded-lg p-0 text-center transition duration-300 ease-in-out hover:bg-gray-200 h-80 w-80">
            <img src="/images/bg/bs4.jpeg" alt="At Your Doorstep Image" className="mx-auto mb-4 h-56 w-300" />
              <h2 className="text-xl font-semibold mb-4">Replacement</h2>
              <p className="text-gray-600">Get the battery replaced.</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
      <Switcher />
    </>
  );
};

export default Station1Page;
