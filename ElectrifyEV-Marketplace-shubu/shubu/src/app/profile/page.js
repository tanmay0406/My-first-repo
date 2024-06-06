'use client';
import { useSession } from 'next-auth/react';
import Link from "next/link";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../componants/footer";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";

import { FiHome, FiMail, FiPhone, FiUser } from '../assets/icons/vander';



export default function Profile() {


    const { data: session, status } = useSession();
    const [wishlistItems, setWishlistItems] = useState([]);
    const [uniqueWishlistItems, setUniqueWishlistItems] = useState([]);
    const [userDetails, setUserDetails] = useState(null);


    const fetchUserDetails = async () => {
        try {
            // Check if session data is available
            if (session) {
                // Fetch additional user details from your server
                const response = await fetch(`http://51.79.225.217:5000/user?name=${session.user.name}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user details');
                }
                const userData = await response.json();
                setUserDetails(userData); // Set the fetched user details in the state
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
            // Handle error (e.g., display an error message to the user)
        }
    };

    const fetchWishlist = async () => {
        try {
            // Check if session data is available
            if (session) {
                // Make a GET request to the server endpoint with user name or email as query parameter
                const response = await fetch(`http://51.79.225.217:5000/wishlist?name=${session.user.name}&email=${session.user.email}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch wishlist');
                }
                const wishlistData = await response.json();
                // Filter out duplicates based on a unique identifier (e.g., productId)
                const uniqueItems = filterUniqueItems(wishlistData, 'productId');
                // Set the filtered wishlist items in the state
                setUniqueWishlistItems(uniqueItems);
            }
        } catch (error) {
            console.error('Error fetching wishlist:', error);
            // Handle error (e.g., display an error message to the user)
        }
    };

    // Function to filter out duplicate items based on a unique identifier
    const filterUniqueItems = (items, uniqueIdentifier) => {
        const uniqueSet = new Set();
        return items.filter(item => {
            if (!uniqueSet.has(item[uniqueIdentifier])) {
                uniqueSet.add(item[uniqueIdentifier]);
                return true;
            }
            return false;
        });
    };

    useEffect(() => {
        // Call fetchWishlist function when the component mounts or when needed
        fetchUserDetails();
        fetchWishlist();
    }, [session]);


    // If session status is loading, display loading indicator
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    // If user is not logged in, redirect to login page
    if (!session) {
        return <div>Please log in to view this page</div>;
    }



    const renderPersonalDetails = () => {
        return (
            <div className="space-y-4">
                <div className="flex items-start">
                    <FiUser className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                    <div>
                        <h6 className="text-green-600 dark:text-white font-medium">Name :</h6>
                        <p className="text-slate-400">{userDetails.name}</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <FiMail className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                    <div>
                        <h6 className="text-green-600 dark:text-white font-medium">Email :</h6>
                        <p className="text-slate-400">{userDetails.email}</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <FiHome className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                    <div>
                        <h6 className="text-green-600 dark:text-white font-medium">Address :</h6>
                        {userDetails.address ? (
                            <p className="text-slate-400">{userDetails.address}</p>
                        ) : (
                            <p className="text-red-500">Please add address</p>
                        )}
                    </div>
                </div>
                <div className="flex items-start">
                    <FiPhone className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                    <div>
                        <h6 className="text-green-600 dark:text-white font-medium">Mobile Number</h6>
                        {userDetails.mobile ? (
                            <p className="text-slate-400">{userDetails.mobile}</p>
                        ) : (
                            <p className="text-red-500">Please add mobile number</p>
                        )}
                    </div>
                </div>
                <div>
                    <div className="flex items-start">
                        {session ? (
                            <>
                                <Link href="/api/auth/signout?callbackUrl=/" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Logout</Link>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <Navbar />


            <div className="container mx-auto px-10 py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Personal Details */}
                    <div className="md:col-span-3 shadow mt-8">
                        {userDetails && (
                            <div className="md:col-span-3 shadow mt-8">
                                <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
                                {renderPersonalDetails()}
                            </div>
                        )}
                    </div>


                    <div className="md:col-span-9 ">
                        <div className="p-10 mt-20 rounded-md shadow bg-white dark:bg-slate-900 shadow-md">
                            <h5 className="text-xl font-semibold">Wishlist</h5>
                            <ul className="mt-4 space-y-2 shadow-md">
                                {uniqueWishlistItems.map((item, index) => (
                                    <li key={index} className="bg-white rounded-md shadow-md p-4 mb-4">
                                        <span className="text-slate-400 block">{item.brand} - {item.model} - {item.variant}</span>
                                    </li>
                                ))}
                            </ul>



                        </div>
                    </div>



                </div>
            </div>


            <Footer />
            <Switcher />

        </>
    )
}






