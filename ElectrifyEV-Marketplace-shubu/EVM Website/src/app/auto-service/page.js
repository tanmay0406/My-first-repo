import React from 'react';
import Head from 'next/head';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";
import ServiceCard from "../componants/serviceCard"; // Importing the ServiceCard component

const AutoServicePage = () => {
  return (
    <div>
      <Head>
        <title>Emergency Assistance Services For Automobiles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="bg-cover bg-center bg-opacity-20 min-h-screen" style={{backgroundImage: "url('/images/bg/b17.jpg')"}}>
        <div className="bg-gray-100 min-h-screen">
          <div className="flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Using CSS grid for layout */}
              {/* Adding Service Cards */}
              <ServiceCard 
                title="Towing Service"
                description="We provide 24/7 towing service for your vehicle in case of emergencies."
                imageUrl="/images/popup/towing.jfif"
              />
              <ServiceCard 
                title="Mechanical Repairs"
                description="Facing mechanical issues with your vehicle? Our skilled mechanics will diagnose and repair it for you."
                imageUrl="/images/popup/mechanic.jfif"
              />
              <ServiceCard 
                title="Battery Replacement"
                description="Need a battery replacement? We offer high-quality batteries for all types of vehicles."
                imageUrl="/images/popup/replace.jfif"
              />
              {/* Add more ServiceCards here */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Switcher />
    </div>
  );
};

export default AutoServicePage;