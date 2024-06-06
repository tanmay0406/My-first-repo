import React from "react";
import Link from "next/link";
import Navbar from '../componants/navbar'
import Footer from '../componants/footer'
import Switcher from "../componants/switcher";
import Feature from "../componants/feature";
import GetInTuch from "../componants/get-in-touch";



export default function Sell(){
    return(
        <>
          <Navbar navClass="navbar-white" />
          <section
                style={{ backgroundImage: "url('/images/bg/b15.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Sell Faster Save Thousands.</h3>
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
                
                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Thanks for submitting, your vehicle will be approved....</h3>
                        <div className="flex justify-center"> {/* Add this wrapper div */}
                        <li className="sm:inline ps-1 mb-0 hidden">
                        <span className="text-green-600">Approving</span>

</li>

</div>


                        
                    </div>

                    
                </div>
               
            </section>
            <Footer />
            <Switcher />
        </>
    )
}