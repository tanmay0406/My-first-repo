'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function Sidebar(){
    const [manu, setManu] = useState('');
    const [submanu, setSubManu] = useState('');

    const current = usePathname();

    useEffect(() => {
        setSubManu(current);
        setManu(current);
    }, [current]);

    return (
        <nav id="sidebar" className="sidebar-wrapper sidebar-dark">
            <div className="sidebar-content">
                <div className="sidebar-brand">
                    <Link href="/"><Image src='/images/logo.png' width={75} height={13} alt=""/></Link>
                </div>
                <SimpleBar style={{height: "calc(100% - 70px)"}}>
                    <ul className="sidebar-menu border-t border-white/10">
                        <li className={`${manu === "/" || ""? 'active' : ''} ms-0`}>
                            <Link href="/"><i className="mdi mdi-chart-bell-curve-cumulative me-2"></i>Dashboard</Link>
                        </li>

                        <li className={`${manu === "/add-EVs" ? 'active' : ''} ms-0`}>
                            <Link href="/add-EVs"><i className="mdi mdi-car-hatchback me-2"></i>Add EV</Link>
                        </li>

                        <li className={`${manu === "/manage-users" ? 'active' : ''} ms-0`}>
                            <Link href="/manage-users"><i className="mdi mdi-account-edit me-2"></i>Manage Users</Link>   
                        </li>

                        <li className={`sidebar-dropdown ms-0 ${["/e-Car", "/e-Bike","/e-Ecycle","/e-Auto","/e-Tractor","/e-Drone", '/Ev-item'].includes(manu) ? 'active' : ''}`}>
                            <Link href="" onClick={()=>{setSubManu(submanu === '/Ev-item' ? '' : '/Ev-item')}}><i className="mdi mdi-taxi me-2"></i>Manage-Evs</Link>
                            <div className={`sidebar-submenu ${["/e-Car", "/e-Bike","/e-Ecycle","/e-Auto","/e-Tractor","/e-Drone", '/Ev-item'].includes(submanu) ? 'block' : ''}`}>
                                <ul>
                                    <li className={`${manu === "/e-Car" ? 'active' : ''} ms-0`}><Link href="/e-Car">e-Car</Link></li>
                                    <li className={`${manu === "/e-Bike" ? 'active' : ''} ms-0`}><Link href="/e-Bike">e-Bike</Link></li>
                                    <li className={`${manu === "/e-Cycle" ? 'active' : ''} ms-0`}><Link href="/e-Cycle">e-Ecycle</Link></li>
                                    <li className={`${manu === "/e-Auto" ? 'active' : ''} ms-0`}><Link href="/e-Auto">e-Auto</Link></li>
                                    <li className={`${manu === "/e-Tractor" ? 'active' : ''} ms-0`}><Link href="/e-Tractor">e-Tractor</Link></li>
                                    <li className={`${manu === "/e-Drone" ? 'active' : ''} ms-0`}><Link href="/e-Drone">e-Drone</Link></li>
                                </ul>
                            </div>  
                        </li>

                        <li className={`sidebar-dropdown ms-0 ${["/evforrent", "/Rentals",'/Rental-item'].includes(manu) ? 'active' : ''}`}>
                            <Link href="" onClick={()=>{setSubManu(submanu === '/Rental-item' ? '' : '/Rental-item')}}><i className="mdi mdi-taxi me-2"></i>Manage-Rentals</Link>
                            <div className={`sidebar-submenu ${["/evforrent", "/Rentals", '/Rental-item'].includes(submanu) ? 'block' : ''}`}>
                                <ul>
                                    <li className={`${manu === "/evforrent" ? 'active' : ''} ms-0`}><Link href="/evforrent">EVs for Rent</Link></li>
                                    <li className={`${manu === "/Rentals" ? 'active' : ''} ms-0`}><Link href="/Rentals">Rentals</Link></li>
                                </ul>
                            </div>  
                        </li>

                        <li className={`${manu === "/add-property" ? 'active' : ''} ms-0`}>
                            <Link href="/add-property"><i className="mdi mdi-taxi me-2"></i>Manage Services</Link>   
                        </li>

                        <li className={`${manu === "/transactions" ? 'active' : ''} ms-0`}>
                            <Link href="/transactions"><i className="mdi mdi-taxi me-2"></i>Manage Transactions</Link>   
                        </li>

                        <li className={`${manu === "/profile" ? 'active' : ''} ms-0`}>
                            <Link href="/profile"><i className="mdi mdi-account-edit me-2"></i>Profile</Link>   
                        </li>

                    </ul>
                </SimpleBar>
            </div>
        </nav>
    )
}
