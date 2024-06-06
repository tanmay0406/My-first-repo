import React from "react";

import FormTwo from "../componants/formTwo";
import Navbar from "../componants/navbar";
import About from "../componants/about";
import Feature from "../componants/feature";
import PropertyTwo from "../componants/property-two";
import ClientTwo from "../componants/client-two";
import GetInTuch from "../componants/get-in-touch";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";

export default function IndexTwo(){
    return(
        <>
        <Navbar navClass="navbar-white" />
        <section className="relative table w-full py-36 lg:py-44 overflow-hidden zoom-image">
        <div
            style={{ backgroundImage: "url(/images/bg/04.jpg)"}}
            className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover"></div>
        <div className="absolute inset-0 bg-black/70 z-2"></div>
        <div className="container z-3">
            <FormTwo/>
        </div>
        </section>
        <section className="relative md:pb-24 pb-16">
            <About />

            <Feature />

            <PropertyTwo />

            <ClientTwo />

           <GetInTuch/>
        </section>
        <Footer />
        <Switcher />
        </>
    )
}