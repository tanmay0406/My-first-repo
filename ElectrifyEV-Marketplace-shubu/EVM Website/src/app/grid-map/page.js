import React from "react";
import Link from "next/link";
import Navbar from '../componants/navbar'; 
import Footer from '../componants/footer'; 
import Switcher from "../componants/switcher"; 
import GetInTouch from "../componants/get-in-touch"; 

export default function Rent() {
  return (
    <>
      <Navbar navClass="navbar-white" />
      <section style={{ backgroundImage: "url('/images/bg/b17.jpg')" }} className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">ElectrifyEV Rentals, Drive where you want!</h3>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white  dark:text-white ">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <section className="relative md:pb-24 pb-16 pt-0 ">
        
        <div className="container lg:mt-24 mt-16 flex flex-col items-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-green-600">How it works?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cards for disclaimer */}
            <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center">
              <p className="text-center text-slate-900 dark:text-slate-900">Just click on rent now..</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center">
              <p className="text-center text-slate-900 dark:text-slate-900">Enter your desired date and number of hours..</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center">
              <p className="text-center text-slate-900 dark:text-slate-900">Select your favorite vehicle and enjoy your ride..</p>
            </div>
          </div>
        </div>
        <div className="container lg:mt-24 mt-16">
          <div className="text-center mb-8">
            <h3 className="md:text-3xl text-2xl leading-normal font-semibold text-green-600">Hire an EV today!</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center">
              <p className="text-center text-slate-900 dark:text-slate-900">Keep a car and drive up to 24hrs...</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center">
              <p className="text-center text-slate-900 dark:text-slate-900">Ideal for meetings, tourist travels and short trips..</p>
            </div>
            <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center">
              <p className="text-center text-slate-900 dark:text-slate-900">Book for now reserve for later..</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/rentals">
              <button className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full py-3 px-6 transition duration-300 ease-in-out">Rent Now</button>
            </Link>
          </div>
        </div>
        <GetInTouch/>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
