"use client";


import axios from 'axios'; // Using Axios for HTTP request
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from 'react';


    export default function Signup() {
        const router = useRouter();
        const[userData, setUserData] = useState ({
            name: '',
            email: '',
            password: ''
        });
    
    
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setUserData(prevState =>({
                ...prevState,
                [name]: value
            }));
        };
    
        const handleSignup = async (e) => {
            console.log ('handle sign up');
            e.preventDefault();
    
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if the email matches the pattern
    if (!emailPattern.test(userData.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    
            try {
                const response = await axios.post('http://localhost:5000/api/register', userData);  // The API connection endpoint to store the user data. 
                console.log(response.data); //Handle the response accordingly (e.g., redirect user, show success message)
                router.push('/auth-login');
                } catch (error) {
                    console.error('Error Signing up:', error);
                }
        };
    
    return (
        <>
            <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
                <div
                    style={{ backgroundImage: "url('/images/bg/b17.jpg')" }}
                    className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover">
                </div>
                <div  className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"></div>
                <div className="container z-3">
                        <div className="flex justify-center">
                            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
                                <Link href="/"><Image src="/images/logo.png" className="mx-auto" alt="" width={64} height={64} /></Link>
                                <h5 className="my-6 text-xl font-semibold">Signup</h5>
                                <form className="text-start"onSubmit={handleSignup}>
                                    <div className="grid grid-cols-1">
                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="RegisterName">Your Name:</label>
                                            <input id="RegisterName" type="text" className="form-input mt-3" placeholder="Harry"name="name" value={userData.name} onChange={handleInputChange} />
                                        </div>

                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                                            <input id="LoginEmail" type="email" className="form-input mt-3" placeholder="name@example.com" name="email" value={userData.email} onChange={handleInputChange}/>
                                        </div>

                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                                            <input id="LoginPassword" type="password" className="form-input mt-3" placeholder="Password:"name="password" value={userData.password} onChange={handleInputChange}  />
                                        </div>

                                        <div className="mb-4">
                                            <div className="flex items-center w-full mb-0">
                                                <input className="form-checkbox text-green-600 rounded w-4 h-4 me-2 border border-inherit" type="checkbox" value="" id="AcceptT&C" />
                                                <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">I Accept <Link href="#" className="text-green-600">Terms And Condition</Link></label>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                        
                                        <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Register</button>
                                        
                                        </div>

                                        <div className="text-center">
                                            <span className="text-slate-400 me-2">Already have an account? </span> <Link href="/auth-login" className="text-black dark:text-white font-bold">Sign in</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                 </div>
            </section>
        </>
    );
    
}
