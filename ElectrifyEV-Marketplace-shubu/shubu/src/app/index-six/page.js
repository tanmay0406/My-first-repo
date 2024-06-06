import React from "react";
import Link from "next/link";

import Navbar from "../componants/navbar";
import TextAnimation from "../componants/textAnimation";
import AboutTwo from "../componants/about-two";
import PropertyTwo from "../componants/property-two";
import Client from "../componants/client";
import GetInTuch from "../componants/get-in-touch";
import FormFour from "../componants/formFour";
import Categories from "../componants/categories";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";


export default function IndexSix(){
    return(
        <>
        <Navbar navClass="navbar-white"/>
        <section className="relative table w-full py-36 md:py-44 lg:py-56 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url('/images/bg/b15.jpg')` }}>
            <div className="absolute inset-0 bg-black/50"></div>
                <div className="container z-3">
                    <div className="grid md:grid-cols-12 mt-10">
                        <div className="lg:col-span-8 md:col-span-6">
                            <TextAnimation/>
                            <p className="text-white/70 text-xl max-w-xl">A great platform to buy, sell and rent your properties without any agent or commisions.</p>

                            <div className="mt-4">
                                <Link href="" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-3">Learn More </Link>
                            </div>
                        </div>
                </div>
            </div>
        </section>

        <section className="relative md:pb-24 pb-16">
            <div className="container">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative -mt-32">
                        <div className="grid grid-cols-1">
                            <div id="StarterContent" className="p-6 bg-white dark:bg-slate-900  md:rounded-se-xl rounded-xl shadow-md dark:shadow-gray-700">
                                <div id="buy-home" role="tabpanel" aria-labelledby="buy-home-tab">
                                    <FormFour/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutTwo/>
            <PropertyTwo/>
            <div className="relative md:pt-24 pt-16">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Listing Categories</h3>

                        <p className="text-slate-400 max-w-xl">A great platform to buy, sell and rent your properties without any agent or commisions.</p>
                    </div>

                    <Categories/>
                </div>
            </div>
            <Client />
            <GetInTuch/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}