
'use client'; 
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdDirectionsCar, MdSettingsInputComponent, MdBatteryFull, MdFlight, FaBicycle } from '../assets/icons/vander';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import VehicleImage from '../componants/vehicleImage';

export default function Property() {
    const [vehicles, setVehicles] = useState([]);
    const [buttonColor, setButtonColor] = useState('');
   

    
    useEffect(() => {
        const fetchFeaturedVehicles = async () => {
            try {
                const response = await fetch('http://51.79.225.217:5001/api/vehicles/featured');
                if (!response.ok) {
                    throw new Error('Failed to fetch featured vehicles');
                }
                const data = await response.json();
                console.log('Fetched featured vehicles:', data);
                setVehicles(data);
            } catch (error) {
                console.error('Error fetching featured vehicles:', error);
            }
        };
    
        fetchFeaturedVehicles();
    }, []);

    const handleAddToWishlist = async (vehicle) => {
        try {
            // Fetch userId using the provided name
            const fetchUserId = async () => {
                try {
                    const response = await fetch(`http://51.79.225.217:5000/user?name=${session.user.name}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch user details');
                    }
                    const userData = await response.json();
                    return userData._id;
                } catch (error) {
                    console.error('Error fetching user ID:', error);
                    throw new Error('Please Login');
                }
            };

            const userId = await fetchUserId();
            
            // Set user ID in the cookie
            const setUserIdInCookie = async () => {
                try {
                    Cookies.set('userId', userId, { sameSite: 'None', secure: true });
                } catch (error) {
                    console.error('Error setting user ID in cookie:', error);
                }
            };

            // Call setUserIdInCookie when needed, such as during session initialization or login
            setUserIdInCookie();

            // Determine vehicle type
            let vehicleType;
            if (vehicle.type === 'ecar') {
                vehicleType = 'Car';
            } else if (vehicle.type === 'ebike') {
                vehicleType = 'Bike';
            } else if (vehicle.type === 'ecycle') {
                vehicleType = 'Cycle';
            } else if (vehicle.type === 'edrone') {
                vehicleType = 'Drone';
            } else if (vehicle.type === 'eauto') {
                vehicleType = 'Auto';
            } else if (vehicle.type === 'etractor') {
                vehicleType = 'Tractor';
            }

            // Use the obtained userId
            const wishlistResponse = await fetch('http://51.79.225.217:5000/wishlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, vehicleType, ...vehicle, vehicleId: vehicle._id }),
            });

            if (wishlistResponse.ok) {
                toast.success('Vehicle added to wishlist successfully!');
            } else {
                const errorData = await wishlistResponse.json();
                if (wishlistResponse.status === 400 && errorData.error === "Duplicate car information for the user") {
                    throw new Error('Duplicate car information for the user');
                } else {
                    throw new Error('Failed to add vehicle to wishlist!');
                }
            }
        } catch (error) {
            console.error('Error adding vehicle to wishlist:', error);
            if (error.message === 'Duplicate car information for the user') {
                toast.error('Duplicate car information for the user');
            } else {
                toast.error(error.message || 'Failed to add vehicle to wishlist!');
            }
        }
    };

    
    return (
        <div className="container lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured vehicles</h3>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {vehicles.map((vehicle, index) => (
                    <div className="group relative rounded-xl text-black dark:text-white overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl" key={index}>
                        <Link href={`/vehicle-detail?id=${vehicle._id}`}>
                            <div className="relative">
                                {vehicle.frontImagesBase64 && vehicle.frontImagesBase64[0] ? (
                                    <img
                                        src={`data:image/jpeg;base64,${vehicle.frontImagesBase64[0]}`}
                                        alt=""
                                        className="object-cover w-full h-56 md:h-64"
                                    />
                                ) : (
                                    <div className="w-full h-56 md:h-64 flex items-center justify-center bg-gray-200 text-gray-500">Image not available</div>
                                )}
                                    <div className="absolute top-4 end-4">
                                        <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md bg-white border text-black-300 hover:text-red-500" type="button" aria-label="Like">
                                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="absolute top-4 end-4">
                                    <button
                                        onClick={() => handleAddToWishlist(vehicle)}
                                        className="flex-none flex items-center justify-center w-9 h-9 rounded-md bg-white border dark:bg-black border text-gray-200 dark:text-black-200 hover:text-red-500 dark:hover:text-red-500"
                                        type="button"
                                        aria-label="Like"
                                    >
                                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                        </svg>
                                    </button>
                                    </div>
                            </div>
                        </Link>
                        <div className="absolute top-4 end-4">
                                    <button
                                        onClick={() => handleAddToWishlist(vehicle)}
                                        className="flex-none flex items-center justify-center w-9 h-9 rounded-md bg-white border dark:bg-black border text-gray-200 dark:text-black-200 hover:text-red-500 dark:hover:text-red-500"
                                        type="button"
                                        aria-label="Like"
                                    >
                                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                        </svg>
                                    </button>
                                </div>
                        <div className="p-6">
                            <div className="pb-6">
                                <Link href={`/vehicle-detail?id=${vehicle._id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{vehicle.brand}</Link>
                            </div>
                            <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                            {index !== 5 && index !== 1 && (
                                        <>
                                <li className="flex items-center me-4">
                                    <MdDirectionsCar className="me-2 text-green-600" />
                                    <span>{vehicle.brand}</span>
                                </li>

                                <li className="flex items-center me-4">
                                    <MdSettingsInputComponent className="me-2 text-green-600" />
                                    <span>{vehicle.model}</span>
                                </li>

                                <li className="flex items-center me-4">
                                    <MdBatteryFull className="me-2 text-green-600" />
                                    <span>{vehicle.batteryPower} Ah</span>
                                    
                                </li>
                                </>
                                     )}
                                     {index === 5 && (
                        <> <li className="flex items-center me-4">
                        <MdFlight width={20}  className="me-2 text-green-600"/>
                        <span>{vehicle.brand}</span>
                    </li>
        <li className="flex items-center me-4">
        <MdSettingsInputComponent className="me-2 text-green-600" />
                                    <span>{vehicle.model}</span>
        </li>
        <li className="flex items-center">
            <MdBatteryFull width={20} className="me-2 text-green-600" />
            <span>{vehicle.batteryPower} Ah</span>
        </li></>)}

        {index === 1 && (
                        <>
                  <li className="flex items-center me-4">
    <FaBicycle width={20} className="me-2 text-green-600"/>
    <span>{vehicle.brand}</span>
</li>
        <li className="flex items-center me-4">
        <MdSettingsInputComponent className="me-2 text-green-600" />
                                    <span>{vehicle.model}</span>
        </li>
        <li className="flex items-center">
            <MdBatteryFull width={20} className="me-2 text-green-600" />
            <span>{vehicle.batteryPower} Ah</span>
        </li>      

</>)}
                        

</ul>
                            <ul className="pt-6 flex justify-between items-center list-none">
                                <li>
                                    <span className="text-slate-400">Price</span>
                                    <p className="text-lg font-medium">
                                        ${vehicle.price && vehicle.price.value.toLocaleString()}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
}