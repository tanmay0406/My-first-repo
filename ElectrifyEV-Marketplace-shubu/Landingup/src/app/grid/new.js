'use client';
import { useSession } from 'next-auth/react';
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../componants/footer";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";

import Cookies from 'js-cookie';



import { FiChevronLeft, FiChevronRight, MdDirectionsCar, MdSettingsInputComponent, MdTune } from '../assets/icons/vander';


export default function Grid() {
    const [ecars, setEcars] = useState([]);
    const [filteredEcars, setFilteredEcars] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterBrand, setFilterBrand] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [filterTransmissionType, setFilterTransmissionType] = useState("");
    const [filterColor, setFilterColor] = useState("");
    const [filterKilometresDriven, setFilterKilometresDriven] = useState("");
    const [filterPrice, setFilterPrice] = useState("");
    const [filterBodyType, setFilterBodyType] = useState(""); // Add this state
    const [userDetails, setUserDetails] = useState(null);
    const [buttonColor, setButtonColor] = useState('');
    const { data: session, status } = useSession();
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        filterEcars();
    }, [searchQuery, filterBrand, filterLocation, filterTransmissionType, filterColor, filterKilometresDriven, filterPrice, filterBodyType, ecars]);






    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleBrandChange = (e) => {
        setFilterBrand(e.target.value);
    };

    const handleLocationChange = (e) => {
        setFilterLocation(e.target.value);
    };

    const handleTransmissionTypeChange = (e) => {
        setFilterTransmissionType(e.target.value);
    };

    const handleColorChange = (e) => {
        setFilterColor(e.target.value);
    };

    const handleKilometresDrivenChange = (e) => {
        setFilterKilometresDriven(e.target.value);
    };

    const handlePriceChange = (e) => {
        setFilterPrice(e.target.value);
    };

    const handleBodyTypeChange = (e) => {
        setFilterBodyType(e.target.value);
    };


    // Declare filterEcars function here
    const filterEcars = () => {
        const filtered = ecars.filter((ecar) => {
            const matchesSearchQuery = ecar.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                ecar.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                ecar.variant.toLowerCase().includes(searchQuery.toLowerCase()) ||
                ecar.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                ecar.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
                ecar.kilometresDriven.toString().includes(searchQuery);

            const matchesFilters = (!filterBrand || ecar.brand.toLowerCase() === filterBrand.toLowerCase()) &&
                (!filterLocation || ecar.location.toLowerCase() === filterLocation.toLowerCase()) &&
                (!filterTransmissionType || (ecar.transmissionType && ecar.transmissionType.toLowerCase() === filterTransmissionType.toLowerCase())) &&
                (!filterColor || ecar.color.toLowerCase() === filterColor.toLowerCase()) &&
                (!filterKilometresDriven || ecar.kilometresDriven <= parseInt(filterKilometresDriven)) &&
                (!filterPrice || ecar.price.value <= parseInt(filterPrice)); // Access the value property of price

            return matchesSearchQuery && matchesFilters;
        });
        setFilteredEcars(filtered);
    };


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
                    throw new Error('Failed to fetch user ID');
                }
            };

            const userId = await fetchUserId();
            // Set user ID in the cookie
            // Set user ID in the cookie
            const setUserIdInCookie = async () => {
                try {
                    const userId = await fetchUserId();
                    //Cookies.set('userId', userId);
                    Cookies.set('userId', userId, { sameSite: 'None', secure: true });
                } catch (error) {
                    console.error('Error setting user ID in cookie:', error);
                }
            };

            // Call setUserIdInCookie when needed, such as during session initialization or login
            setUserIdInCookie();


            // Use the obtained userId

            const wishlistResponse = await fetch('http://51.79.225.217:5000/wishlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, ...vehicle, vehicleId: vehicle._id }), // Assuming vehicle contains a _id property
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

    const isCarInWishlist = async (userId, vehicleId) => {
        try {
            const response = await fetch(`http://51.79.225.217:5000/wishlist/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch wishlist items');
            }
            const wishlistItems = await response.json();

            // Check if the vehicleId exists in the wishlist items
            const isInWishlist = wishlistItems.some(item => item.vehicleId === vehicleId);
            return isInWishlist;
        } catch (error) {
            console.error('Error checking if car is in wishlist:', error);
            throw new Error('Failed to check if car is in wishlist');
        }
    };




// Define getButtonColor function first
const getButtonColor = async (userId, vehicleId) => {
    try {
        const isInWishlist = await isCarInWishlist(userId, vehicleId);
        const color = isInWishlist ? 'text-red-500 dark:text-red-500' : '';
        console.log('Button Color:', color); // Log the button color
        return color;
    } catch (error) {
        console.error('Error getting button color:', error);
        return ''; // Return a default value or handle the error as needed
    }
};

// Now define fetchButtonColor function
useEffect(() => {
    const fetchButtonColor = async () => {
        try {
            const userId = Cookies.get('userId');
            if (!userId) {
                throw new Error('User ID not found in cookies');
            }
            // Fetch wishlist items
            const response = await fetch(`http://51.79.225.217:5000/wishlist/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch wishlist items');
            }
            const wishlistItems = await response.json();

            if (wishlistItems.length === 0) {
                // No items in wishlist, button color should not be red
                setButtonColor('');
                return;
            }

            // Assuming you want to check the first vehicleId from the list
            const vehicleId = wishlistItems[0].vehicleId;

            const color = await getButtonColor(userId, vehicleId);
            setButtonColor(color);
        } catch (error) {
            console.error('Error fetching button color:', error);
            // Handle error as needed
        }
    };

    fetchButtonColor();
}, []);

    const fetchApprovedEcars = async () => {
        try {
            const response = await fetch('http://51.79.225.217:5001/api/vehicles/approved/ecar');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setEcars(data);
            setFilteredEcars(data);
        } catch (error) {
            console.error('Error fetching approved vehicles:', error);
        }
    };

    useEffect(() => {
        fetchApprovedEcars();
    }, []);


    return (
        <>
            <Navbar navClass="navbar-white" />

            <section
                style={{ backgroundImage: "url('/images/bg/b17.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Find Your Dream eCar</h3>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <div className="container relative -mt-16 z-1">
                <div className="flex flex-col lg:flex-row">
                    {/* Search Bar */}
                    <div className="container mb-4">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            placeholder="Search..."
                            className="border border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md px-4 py-2 w-full"
                        />
                    </div>
                    {/* End of Search Bar */}

                    {/* Filter Sidebar */}
                    <div className="mb-20"></div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap">
                        {/* Type Filter */}
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="brand" className="font-semibold mb-1 mr-2 text-black">
                                Brand:
                            </label>
                            <select
                                name="brand"
                                id="brand"
                                value={filterBrand}
                                onChange={handleBrandChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1 text-black"
                            >
                                <option value="" className="text-black">All</option>
                                <option value="Audi" className="text-black">Audi</option>
                                <option value="BMW" className="text-black">BMW</option>
                                <option value="Honda" className="text-black">Honda</option>
                                <option value="Toyota" className="text-black">Toyota</option>
                                <option value="Nissan" className="text-black">Nissan</option>
                            </select>
                        </div>


                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="Location" className="font-semibold mb-1 mr-2 text-black">
                                Location:
                            </label>
                            <select
                                name="Location"
                                id="Location"
                                value={filterLocation}
                                onChange={handleLocationChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1 text-black"
                            >
                                <option value="" className="text-black">All</option>
                                <option value="Mumbai" className="text-black">Mumbai</option>
                                <option value="Pune" className="text-black">Pune</option>
                                <option value="Delhi" className="text-black">Delhi</option>
                                <option value="Banglore" className="text-black">Banglore</option>
                            </select>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="transmissionType" className="font-semibold mb-1 mr-2 text-black">
                                Transmission Type:
                            </label>
                            <select
                                name="transmissionType"
                                id="transmissionType"
                                value={filterTransmissionType}
                                onChange={handleTransmissionTypeChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1 text-black"
                            >
                                <option value="" className="text-black">All</option>
                                <option value="Automatic" className="text-black">Automatic</option>
                                <option value="Manual" className="text-black">Manual</option>
                            </select>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="colour" className="font-semibold mb-1 mr-2 text-black">
                                Colour:
                            </label>
                            <select
                                name="colour"
                                id="colour"
                                value={filterColor}
                                onChange={handleColorChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1 text-black"
                            >
                                <option value="" className="text-black">All</option>
                                <option value="Red" className="text-black">Red</option>
                                <option value="Silver" className="text-black">Silver</option>
                               
                                <option value="Blue" className="text-black">Blue</option>
                                <option value="Black" className="text-black">Black</option>
                            </select>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="bodytype" className="font-semibold mb-1 mr-2 text-black">
                                Body Type:
                            </label>
                            <select
                                name="bodytype"
                                id="bodytype"
                                value={filterBodyType}
                                onChange={handleBodyTypeChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1 text-black"
                            >
                                <option value="" className="text-black">All</option>
                                <option value="SUV" className="text-black">SUV</option>
                                <option value="Hatchback" className="text-black">Hatchback</option>
                                <option value="Sedan" className="text-black">Sedan</option>
                                <option value="Coupe" className="text-black">Coupe</option>
                                <option value="MUV " className="text-black">MUV</option>
                            </select>
                        </div>


                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="kilometresDriven" className="font-semibold mb-1 mr-2 text-black">
                                Kilometres Driven:
                            </label>
                            <input
                                type="range"
                                id="kilometers"
                                min="0"
                                max="100000"
                                value={filterKilometresDriven}
                                onChange={handleKilometresDrivenChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1 text-black" />
                            <span className="ml-2 text-black">{filterKilometresDriven} km</span>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                            <label htmlFor="price" className="font-semibold mb-1 mr-2 text-black">
                                Price:
                            </label>
                            <input
                                type="range"
                                id="price"
                                min="0"
                                max="1000000"
                                value={filterPrice}
                                onChange={handlePriceChange}
                                className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1 text-black" />
                            <span className="ml-2 text-black">${filterPrice}</span>
                        </div>




                    </div>
                </div>
                {/* End of Filter Sidebar */}

            </div>

            {/* Searched Car Display */}

            {/* End of Searched Car Display */}



            <section className="relative lg:py-24 py-16">
                <div className="container">

                    <div className="lg:col-span-9 md:col-span-10 col-span-11">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">


                            {filteredEcars.filter(ecar => ecar.status === 'Approved').map((ecar, index) => (
                                <div className="group relative rounded-xl text-black dark:text-white overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl" key={ecar._id}>
                                    <Link href={`/vehicle-detail?id=${ecar._id}`} key={ecar._id}>

                                        <div className="relative">
                                            {ecar.frontImagesBase64 && ecar.frontImagesBase64.length > 0 && (
                                                <img src={`data:image/jpeg;base64,${ecar.frontImagesBase64[0]}`} alt="Front View" className="h-40 w-full" />
                                            )}
                                        </div>


                                        <div className="p-6 group-hover:bg-black-100 dark:group-hover:bg-black-100">
                                            <div className="pb-6">
                                                <p className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{ecar.brand}</p>
                                            </div>
                                            <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                                <li className="flex items-center me-4">
                                                    <MdDirectionsCar width={20} className="me-2 text-green-600" />
                                                    <span>{ecar.model}</span>
                                                </li>
                                                <li className="flex items-center me-4">
                                                    <MdSettingsInputComponent width={20} className="me-2 text-green-600" />
                                                    <span>{ecar.transmissionType}</span>
                                                </li>
                                                <li className="flex items-center me-4">
                                                    <MdTune width={20} className="me-2 text-green-600" />
                                                    <span>{ecar.kilometresDriven}</span>
                                                </li>
                                            </ul>
                                            <ul className="pt-6 flex justify-between items-center list-none">
                                                <li>
                                                    <span className="text-slate-400">Price</span>
                                                    {/* Add price separators using toLocaleString() */}
                                                    <p className="text-lg font-medium">
                                                        ${ecar.price && ecar.price.value.toLocaleString()}
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </Link>
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
                                            className={`flex-none flex items-center justify-center w-9 h-9 rounded-md bg-white border dark:bg-black border text-gray-200 dark:text-black-200 hover:text-red-500 dark:hover:text-red-500 ${buttonColor}`}
                                            type="button"
                                            aria-label="Like"
                                        >
                                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                            </svg>
                                        </button>

                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>


                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                        <div className="md:col-span-12 text-center">
                            <nav>
                                <ul className="inline-flex items-center -space-x-px">
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                            <FiChevronLeft className="text-[20px]" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" aria-current="page" className="z-10 w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-green-600 shadow-sm dark:shadow-gray-700">1</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">2</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">3</Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">4</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                            <FiChevronRight className="text-[20px]" />
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <Switcher />
            <ToastContainer />
        </>
    )
}