import React from "react";
import Link from "next/link";
import Navbar from "../componants/navbar";
import { FiMail, FiGift,  FiPhone,  FiUser, FiHome} from '../assets/icons/vander';
import Switcher from "../componants/switcher";
export default function Profile() {
  return (
    <>
      <Navbar navClass="navbar-white" />
      <div className="container mx-auto px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Personal Details */}
          <div className="md:col-span-3">
            <div className="p-7 mt-20 rounded-md shadow bg-white dark:bg-slate-900">
              <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
              <div className="space-y-4">
              <div className="flex items-start">
                  < FiUser className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                  <div>
                    <h6 className="text-green-600 dark:text-white font-medium">Name :</h6>
                    <Link href="" className="text-slate-400">Shubham</Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMail className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                  <div>
                    <h6 className="text-green-600 dark:text-white font-medium">Email :</h6>
                    <Link href="" className="text-slate-400">shubham@hotmail.com</Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiHome className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                  <div>
                    <h6 className="text-green-600 dark:text-white font-medium">Address :</h6>
                    <p className="text-slate-400">Nowrosjee Wadia college hostel,Pune</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiPhone className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                  <div>
                    <h6 className="text-green-600 dark:text-white font-medium">Mobile Number</h6>
                    <p className="text-slate-400">9867452387</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-9">
            <div className="p-10 mt-20 rounded-md shadow bg-white dark:bg-slate-900">
              <h2 className="text-xl font-semibold mb-4">My EVs Wishlist</h2>
              <p className="text-slate-400"></p>
            </div>
    
            </div>
          </div>
        </div>
        <Switcher />
    </>
  );
}