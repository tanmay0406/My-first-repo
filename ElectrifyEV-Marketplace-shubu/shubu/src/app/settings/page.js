'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from "react";
import { FiEdit, FiHome, FiMail, FiPhone, FiUser } from 'react-icons/fi'; // Import FiEdit icon
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../componants/footer";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";


export default function Profile() {
    const { data: session } = useSession();
    const [userDetails, setUserDetails] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [editedUserId, setEditedUserId] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                if (session) {
                    const response = await fetch(`https://localhost:5000/user?name=${session.user.name}`);
                    if (response.ok) {
                        const userData = await response.json();
                        setName(userData.name || '');
                        setEmail(userData.email || '');
                        setAddress(userData.address || '');
                        setMobile(userData.mobile || '');
                        setEditedUserId(userData._id); // Assuming user ID is stored in "_id" field
                    } else {
                        throw new Error('Failed to fetch user details');
                    }
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, [session]);

    // Function to handle saving edited user data
    const handleSaveEdit = async () => {
        try {
            // Check if editedUserId is defined
            if (editedUserId !== null) {
                const response = await fetch(`https://localhost:5000/api/user/${editedUserId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        address,
                        mobile,
                    }),
                });
    
                if (response.ok) {
                    // Handle success (e.g., show a success message to the user)
                    toast.success('Details updated successfully!');
                } else {
                    throw new Error('Failed to update details');
                    
                }
            } else {
                throw new Error('editedUserId is null');
            }
        } catch (error) {
            console.error('Error updating user details:', error);
            // Handle error (e.g., display an error message to the user)
            toast.error(error.message || 'Failed to update details. Please try again.');
        }
    };

    return (
        <>
            <Navbar /> {/* Assuming you have a Navbar component */}
            <div className="container mx-auto px-10 py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Personal Details */}
                    <div className="md:col-span-12 shadow mt-8">
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            Personal Details
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start relative">
                                <FiUser className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="text-slate-400 pl-10 pr-8 py-2 border rounded-md w-full" />
                                <FiEdit className="absolute top-1/2 right-2 transform -translate-y-1/2 w-6 h-6 text-gray-400 cursor-pointer" />
                            </div>
                            <div className="flex items-start relative">
                                <FiMail className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-slate-400 pl-10 pr-8 py-2 border rounded-md w-full" />
                                <FiEdit className="absolute top-1/2 right-2 transform -translate-y-1/2 w-6 h-6 text-gray-400 cursor-pointer" />
                            </div>
                            <div className="flex items-start relative">
                                <FiHome className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="text-slate-400 pl-10 pr-8 py-2 border rounded-md w-full" />
                                <FiEdit className="absolute top-1/2 right-2 transform -translate-y-1/2 w-6 h-6 text-gray-400 cursor-pointer" />
                            </div>
                            <div className="flex items-start relative">
                                <FiPhone className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                                <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} className="text-slate-400 pl-10 pr-8 py-2 border rounded-md w-full" />
                                <FiEdit className="absolute top-1/2 right-2 transform -translate-y-1/2 w-6 h-6 text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                        <div className='pt-10'>
                            <button onClick={handleSaveEdit} className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Save Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer /> {/* Assuming you have a Footer component */}
            <Switcher /> {/* Assuming you have a Switcher component */}
            <ToastContainer />
        </>
    );
}