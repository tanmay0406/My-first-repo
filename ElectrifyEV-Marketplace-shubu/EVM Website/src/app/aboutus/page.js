import React from "react";

import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";
import GetInTuch from "../componants/get-in-touch";
import Team from "../componants/team";
import Counter from "../componants/counter";

import { counterData } from "../data/data";

export default function Aboutus(){
  
    return(
        <>
          <Navbar navClass="navbar-white" />
          <section
                style={{ backgroundImage: "url('/images/bg/b15.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">About Us</h3>
                    </div>
                </div>
            </section>

            
            <section className="relative md:pb-24 pb-16">
            
            </section>
            {/* Add the text here */}
            <section className="bg-gray-100 py-12 px-4">
                <div className="container mx-auto">
                    <p className="text-center text-gray-800">{`Our journey began with a simple yet powerful belief: that the future of transportation must be electric. With the pressing need to combat climate change and reduce our dependence on fossil fuels, we recognized the urgency to drive change in the automotive industry. Thus, Trailique Infotech was born, fueled by a passion for sustainability and a drive to make a meaningful impact on the world.`}</p>
                </div>
            </section>
            {/* End of added text */}
            <section
                style={{ backgroundImage: "url('/images/bg/b17.jpg')" }}
                className="relative py-24 bg-no-repeat bg-center bg-fixed bg-cover">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container">
                    <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                        <div className="lg:col-start-2 lg:col-span-10">
                            <div className="grid md:grid-cols-3 grid-cols-1 items-center">
                                {counterData.map((item, index) =>{
                                    return(
                                        <div className="counter-box text-center" key={index}>
                                            <h1 className="text-white dark:text-white lg:text-5xl text-4xl font-semibold mb-2">
                                                <Counter start={0} end={item.target}></Counter>
                                                +</h1>
                                            <h5 className="counter-head text-lg text-white-900 dark:text-white font-medium">{item.title}</h5>
                                        </div> 
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Team/>
            </section>
            <section className="md:pb-24 pb-16">
                
                <GetInTuch/>
            </section>

            <Footer />
            <Switcher />
        </>
    )
}
