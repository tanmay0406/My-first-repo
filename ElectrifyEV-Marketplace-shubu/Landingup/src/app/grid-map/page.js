import React from "react";
import Link from "next/link";
import Navbar from '../componants/navbar'; 
import Footer from '../componants/footer'; 
import Switcher from "../componants/switcher"; 
import GetInTuch from "../componants/get-in-touch"; 

export default function Rent(){
    return(
        <>
          <Navbar navClass="navbar-white" />
          <section
                style={{ backgroundImage: "url('/images/bg/b17.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">ElectrifyEV Rentals, Drive where you want</h3>
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
            <section className="relative md:pb-24 pb-16">
                <div className="container lg:mt-24 mt-16 flex flex-col items-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold  text-green-600">How it works?</h3>
                    <div className="flex justify-center">
                        {/* Cards for disclaimer */}
                        <div className="bg-white dark:bg-slate-900 border border-black rounded-lg p-4 mx-2">
                            <p>Just click on rent now..</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 border border-black rounded-lg p-4 mx-2">
                            <p>Enter your desired date and number of hours..</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 border border-black rounded-lg p-4 mx-2">
                            <p>Select your favorite vehicle and enjoy your ride..</p>
                        </div>
                    </div>
                </div>
                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold  text-green-600">Hire an eV today!</h3>
                        <div className="flex justify-center">
                            {/* Cards for disclaimer */}
                            <div className="bg-white dark:bg-slate-900 border border-black rounded-lg p-4 mx-2">
                                <p>Keep a car and drive upto 24hrs...</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 border border-black rounded-lg p-4 mx-2">
                                <p>Ideal for meetings, tourist travels and short trips..</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 border border-black rounded-lg p-4 mx-2">
                                <p>Book for now reserve for later..</p>
                            </div>
                        </div>
                        <div className="flex justify-center" style={{ marginTop: '60px' }}>
                            <Link href="/rentals" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Rent</Link>
                        </div>
                    </div>
                </div>
                <GetInTuch/>
            </section>
            <Footer />
            <Switcher />
        </>
    )
}
