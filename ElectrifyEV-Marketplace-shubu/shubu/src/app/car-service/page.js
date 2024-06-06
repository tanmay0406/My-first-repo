import React from 'react';
import Head from 'next/head';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";
import ServiceCard from "../componants/serviceCard"; // Importing the ServiceCard component

const CarServicePage = () => {
  return (
    <>
    <div>
      <Head>
        <title>Emergency Assistance Services For Car</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="bg-white dark:bg-gray-950 bg-center bg-opacity-20 min-h-screen">
        <div className="bg-gray-100  dark:bg-gray-950 min-h-screen">
          <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-950">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Using CSS grid for layout */}
              {/* Adding Service Cards */}
              <ServiceCard 
                title="Towing Service"
                description="We provide 24/7 towing service for your car in case of emergencies."
                imageUrl="/images/popup/db6.jfif"
              />
              <ServiceCard 
                title="Battery Replacement"
                description="Need a battery replacement? We offer quick and reliable service to get you back on the road."
                imageUrl="/images/popup/db5.jfif"
              />
              <ServiceCard 
                title="Emergency Repairs"
                description="Facing a breakdown? Our team of mechanics will provide on-the-spot repairs to get you going."
                imageUrl="/images/popup/db4.jfif"
              />
              {/* Add more ServiceCards here */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Switcher />
    </div>
    </>
  );
};

export default CarServicePage;