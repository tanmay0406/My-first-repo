import React  from "react";
import Link from "next/link";

import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";
import FaqAccordian from "../componants/faqAccordian";

import { FiPhone } from "../assets/icons/vander"

export default function Faq() {
    return (
        <>
            <Navbar navClass="navbar-white" />
            {/* <!-- Start Hero --> */}
            <section
                style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Pricing Plans</h3>
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
            {/* <!-- End Hero --> */}
            {/* <!-- Start Section--> */}
            <section className="relative lg:py-24 py-16">
                <FaqAccordian/>

                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Have Question? Get in touch!</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">A great platform to buy, sell and rent your eVs.</p>

                        <div className="mt-6">
                            <Link href="/contact" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"><FiPhone className="align-middle me-2"></FiPhone> Contact us</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher />
        </>
    );

}

