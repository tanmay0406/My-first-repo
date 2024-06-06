import React from 'react';
import Head from 'next/head';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";
import ServiceCard from "../componants/serviceCard"; // Importing the ServiceCard component

const TractorServicePage = () => {
  return (
    <div>
      <Head>
        <title>Emergency Assistance Services For Tractors</title>
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
                description="We provide 24/7 towing service for your tractor in case of emergencies."
                imageUrl="/images/popup/towing.jfif"
              />
              <ServiceCard 
                title="Engine Repair"
                description="Having issues with your tractor engine? Our experienced mechanics will diagnose and repair it for you."
                imageUrl="/images/popup/mechanic.jfif"
              />
              <ServiceCard 
                title="Tire Replacement"
                description="Need to replace a flat tire on your tractor? We offer quick and efficient tire replacement services."
                imageUrl="/images/popup/tyre.jfif"
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

export default TractorServicePage;