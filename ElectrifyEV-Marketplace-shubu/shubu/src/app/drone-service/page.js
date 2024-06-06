import React from 'react';
import Head from 'next/head';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";
import ServiceCard from "../componants/serviceCard"; // Importing the ServiceCard component

const DroneServicePage = () => {
  return (
    <div>
      <Head>
        <title>Emergency Assistance Services For Drones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="bg-cover bg-center bg-opacity-20 min-h-screen" style={{backgroundImage: "url('/images/bg/b17.jpg')"}}>
        <div className="bg-gray-100 min-h-screen">
          <div className="flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Using CSS grid for layout */}
              {/* Adding Service Cards */}
              <ServiceCard 
                title="Emergency Landing"
                description="We provide emergency landing assistance for your drone in case of technical issues or low battery."
                imageUrl="/images/popup/db3.jfif"
              />
              <ServiceCard 
                title="Battery Replacement"
                description="Need a battery replacement? We offer high-quality drone batteries to keep you flying."
                imageUrl="/images/popup/battery.jfif"
              />
              <ServiceCard 
                title="Drone Repair"
                description="Facing technical issues with your drone? Our skilled technicians will diagnose and repair it for you."
                imageUrl="/images/popup/db2.jfif"
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

export default DroneServicePage;