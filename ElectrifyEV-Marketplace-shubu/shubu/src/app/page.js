"use client"
import React from "react";
import TextAnimation from "./componants/textAnimation";
import Navbar from "./componants/navbar";
import Switcher from "./componants/switcher";
import Footer from "./componants/footer";
import About from "./componants/about";
import Feature from "./componants/feature";
import Property from "./componants/property";
import Client from "./componants/client";
import GetInTuch from "./componants/get-in-touch";
import FormThree from "./componants/formThree";


export default function Home() {
  return (
     <>
     <Navbar/>
        {/* Hero Start  */}
        <section className="relative mt-20">
            <div className="container-fluid md:mx-4 mx-2">
                <div style={{ backgroundImage: `url('/images/bg/b15.jpg')` }} className="relative pt-40 pb-52 table w-full rounded-2xl shadow-md overflow-hidden  bg-no-repeat bg-center bg-cover" id="home">
                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="container">
                        <div className="grid grid-cols-1">
                            <div className="md:text-start text-center">
                            <TextAnimation/>
                                
                                <p className="text-white/70 text-xl max-w-xl">Drive eV Drive Evolution Drive the Change</p>
                            </div>
                          </div>
                    </div>
                  </div>
              </div>
          </section>
            {/* Hero End */}
            <section className="relative md:pb-24 pb-16">
                <div className="container">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative -mt-32">
                            <FormThree/>
                        </div>
                    </div>
                </div>

                <About />
                <Feature />
                <Property />
                <Client />
                <GetInTuch/>
            </section>
     <Footer/>
     <Switcher/>
     </>
  )
}