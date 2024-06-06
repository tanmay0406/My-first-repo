'use client'
import { getSession, useSession } from "next-auth/react"; // Using new methods for session managment
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { User } from 'react-feather';
import { FiBell, FiShoppingCart } from 'react-icons/fi';
import BuyPopup from '/src/app/buy/page.js';

export default function Navbar(props) {
    let { navClass, topnavClass } = props;

    let [topNavbar, setTopNavBar] = useState(false);
    let [manu, setManu] = useState('');
    let [subManu, setSubManu] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState(false);
    const { data: session, status } = useSession(); // useSession hook to access session

    let current = usePathname();

    useEffect(() => {
        // Define an asynchronous function inside useEffect
        async function fetchData() {
            setManu(current);
            setSubManu(current);

            function windowScroll() {
                setTopNavBar(window.scrollY >= 50)
            }

            window.addEventListener('scroll', windowScroll);
            window.scrollTo(0, 0);

            // Call the asynchronous function inside useEffect
            await checkSession();
        }

        // Call the asynchronous function immediately
        fetchData();

        //        return () => {
        //            window.removeEventListener('scroll', windowScroll)
        //        };



        const closeNotification = () => {
            setNotifications(false);
        };



    }, [current]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
        anchorArray.forEach(element => {
            element.addEventListener('click', (elem) => {
                const target = elem.target.getAttribute("href");
                if (target !== "") {
                    if (elem.target.nextElementSibling) {
                        var submenu = elem.target.nextElementSibling.nextElementSibling;
                        submenu.classList.toggle('open');
                    }
                }
            });
        });
    };

    async function checkSession() {
        const session = await getSession(); // Fetch session data from the server
    }


    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };


    const handleOutsideClick = useCallback((e) => {
        if (!document.getElementById('notificationDropdown').contains(e.target)) {
            closeNotification();
        }
    }, []);

    useEffect(() => {
        if (notifications) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [notifications, handleOutsideClick]);

    return (
        <React.Fragment>
            <nav id="topnav" className={`${topNavbar ? 'nav-sticky' : ''} ${topnavClass ? topnavClass : ''} defaultscroll is-sticky`} >
                <div className={`${topnavClass !== '' && topnavClass !== undefined ? 'container-fluid md:px-8 px-3' : 'container'}`}>
                    {navClass === '' || navClass === undefined ?
                        <Link className="logo" href="">
                            <Image src="/images/logo.png" className="inline-block dark:hidden" alt="" width={98} height={24} />
                            <Image src="/images/logo.png" className="hidden dark:inline-block" alt="" width={98} height={24} />
                            <span className="font-bold">Electrify eV</span>
                        </Link> :
                        <Link className="logo" href="/">
                            <span className="inline-block dark:hidden">
                                <Image src="/images/logo.png" className="l-dark" alt="" width={98} height={24} />
                                <Image src="/images/logo.png" className="l-light" alt="" width={98} height={24} />
                            </span>
                            <Image src="/images/logo.png" className="hidden dark:inline-block" alt="" width={98} height={24} />
                        </Link>
                    }
                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link href="#" className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <ul className="buy-button list-none mb-0 space-x-4">
                        {session ? (
                            <>

                                <li className="inline mb-0">
                                    <Link href="/profile" className="btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"><User className="h-4 w-4 stroke-[3]"></User></Link>
                                </li>
                            </>
                        ) : (
                            <li className="inline mb-0">
                                <Link href="/auth-login" className="btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"><User className="h-4 w-4 stroke-[3]"></User></Link>
                            </li>
                        )}
                        <li className="dropdown inline-block relative" id="notificationDropdown">
                            <button className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" type="button" onClick={() => setNotifications(true)}>
                                <FiBell className="h-4 w-4"></FiBell>
                                <span className="absolute top-0 end-0 flex items-center justify-center bg-red-600 text-white text-[10px] font-bold rounded-md w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-red-600 after:top-0 after:end-0 after:rounded-md after:animate-ping"></span>
                            </button>
                            <div className={`${notifications ? 'show' : 'hidden'} dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700`}>
                                <span className="px-4 py-4 flex justify-between">
                                    <span className="font-semibold">Notifications</span>
                                    <span className="flex items-center justify-center bg-red-600/20 text-red-600 text-[10px] font-bold rounded-md w-5 max-h-5 ms-1">3</span>
                                </span>
                                <ul className="py-2 text-start h-64 border-t border-gray-100 dark:border-gray-800">
                                    <li>
                                        <Link href="#!" className="block font-medium py-1.5 px-4">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 rounded-md shadow shadow-green-600/10 dark:shadow-gray-700 bg-green-600/10 dark:bg-slate-800 text-green-600 dark:text-white flex items-center justify-center">
                                                    <FiShoppingCart className="h-4 w-4" />
                                                </div>
                                                <div className="ms-2">
                                                    <span className="text-[15px] font-medium block">Order Complete</span>
                                                    <small className="text-slate-400">15 min ago</small>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" className="block font-medium py-1.5 px-4">
                                            <div className="flex items-center">
                                                <Image src='/images/client/04.jpg' width={40} height={40} className="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt="" />
                                                <div className="ms-2">
                                                    <span className="text-[15px] font-medium block"><span className="font-semibold">Message</span> from Luis</span>
                                                    <small className="text-slate-400">1 hour ago</small>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <ul className="buy-button list-none mb-0">
                        {session ? (
                            <>
                                <Link href="/api/auth/signout?callbackUrl=/" className="space-x-4">Logout</Link>
                            </>
                        ) : null}
                    </ul>


                    <div id="navigation" className={`${isOpen === true ? 'hidden' : 'block'}`} >
                        <ul className={`navigation-menu  ${navClass === '' || navClass === undefined ? '' : 'nav-light'}   ${topnavClass !== '' && topnavClass !== undefined ? 'justify-center' : 'justify-end'}`}>
                            <li className={manu === "../" ? 'active' : ''}><Link href="../" className="sub-menu-item">Home</Link></li>
                            <li><Link href="" onClick={openPopup}>Buy</Link></li>
                            <BuyPopup isOpen={isOpen} onClose={closePopup} />
                            <li className={manu === "/sell" ? 'active' : ''}><Link href="/sell" className="sub-menu-item">Sell</Link></li>
                            <li className={`has-submenu parent-parent-menu-item ${["/grid", "/grid-sidebar", "/grid-map", "/list", "/list-sidebar", "/list-map", "/property-detail/1"].includes(manu) ? 'active' : ''}`}>
                                <Link href="#" onClick={() => { setSubManu(subManu === "/list-item" ? "" : "/list-item") }}>Services</Link><span className="menu-arrow"></span>
                                <ul className={`submenu ${["/grid", "/grid-sidebar", "/grid-map", "/list", "/list-sidebar", "/list-map", "/property-detail/1", "/list-item", "/grid-item", "/list-view-item", "/property-item"].includes(subManu) ? 'open' : ''}`}>
                                    <li className="has-submenu parent-menu-item"><Link href="grid-map"> Rentals </Link></li>
                                    <li className={`has-submenu parent-menu-item ${["/list", "/list-sidebar", "/list-map"].includes(manu) ? 'active' : ''}`}><Link href="/list" onClick={() => { setSubManu(subManu === "/list-view-item" ? "" : "/list-view-item") }}> Rent Your eV </Link></li>
                                    <li className={`has-submenu parent-menu-item ${["/batteryswap"].includes(manu) ? 'active' : ''}`}><Link href="#" onClick={() => { setSubManu(subManu === "/property-item" ? "" : "/property-item") }}> eVServices </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${["/batteryswap", "/property-item", "/carwash", "/BatteryCharge", "/Emergencyassistance", "/Repair"].includes(subManu) ? 'open' : ''}`}>
                                            <li className={manu === "/batteryswap" ? 'active' : ''}><Link href="/batteryswap" className="sub-menu-item">Battery Swap</Link></li>
                                            <li className={manu === "/BatteryCharge" ? 'active' : ''}><Link href="/BatteryCharge" className="sub-menu-item">Battery Charge</Link></li>
                                            <li className={manu === "/Emergencyassistance" ? 'active' : ''}><Link href="/Emergencyassistance" className="sub-menu-item">Emergency Assistence</Link></li>
                                            <li className={manu === "/carwash" ? 'active' : ''}><Link href="/carwash" className="sub-menu-item">Vehicle Wash</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={`has-submenu parent-parent-menu-item ${["/aboutus", "/features", "/pricing", "/faqs", "/auth-login", "/auth-signup", "/auth-reset-password", "/terms", "/privacy", "/blogs", "/blog-sidebar", "/blog-detail", "/comingsoon", "/maintenance", "/404"].includes(manu) ? 'active' : ''}`}>
                                <Link href="#" onClick={() => { setSubManu(subManu === "/page-item" ? '' : "/page-item") }}>Pages</Link><span className="menu-arrow"></span>
                                <ul className={`submenu ${["/aboutus", "/features", "/pricing", "/faqs", "/auth-login", "/auth-signup", "/auth-reset-password", "/terms", "/privacy", "/blogs", "/blog-sidebar", "/blog-detail", "/comingsoon", "/maintenance", "/404", "/page-item", "/auth-item", "/term-item", "/blog-item", "/special-item"].includes(subManu) ? 'open' : ''}`}>
                                    <li className={manu === "/aboutus" ? "active" : ''}><Link href="/aboutus" className="sub-menu-item">About Us</Link></li>
                                    <li className={`has-submenu parent-menu-item ${["/auth-login", "/auth-signup", "/auth-reset-password"].includes(manu) ? 'active' : ''}`}><Link href="#" onClick={() => { setSubManu(subManu === "/auth-item" ? '' : "/auth-item") }}> Auth Pages </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${["/auth-reset-password", "/auth-item"].includes(subManu) ? 'open' : ''}`}>
                                            <li className={manu === "/auth-reset-password" ? "active" : ''}><Link href="/auth-reset-password" className="sub-menu-item">Reset Password</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`has-submenu parent-menu-item ${["/terms", "/privacy"].includes(manu) ? 'active' : ''}`}><Link href="#" onClick={() => { setSubManu(subManu === "/term-item" ? '' : "/term-item") }}> Utility </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${["/terms", "/privacy", "/term-item"].includes(subManu) ? 'open' : ''}`}>
                                            <li className={manu === "/terms" ? "active" : ''}><Link href="/terms" className="sub-menu-item">Terms of Services</Link></li>
                                            <li className={manu === "/privacy" ? "active" : ''}><Link href="/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                        </ul>
                                    </li>
                                </ul>

                            </li>
                            <li className={manu === "/contact" ? "active" : ''}><Link href="/contact" className="sub-menu-item">Contact</Link></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
