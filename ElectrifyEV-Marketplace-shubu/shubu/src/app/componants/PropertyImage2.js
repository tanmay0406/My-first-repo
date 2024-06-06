'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {FiCamera} from '../assets/icons/vander'

import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

export default function PropertyImage2(){
    let [isOpen, setIsOpen] = useState(false);

    let [photoIndex, setActiveIndex] = useState(2);

    const images = [
        '/images/property/single/t.jpg',
        '/images/property/single/t.jpg',
        '/images/property/single/t.jpg',
        '/images/property/single/t.jpg',
        '/images/property/single/t.jpg'
      ];
      let handleCLick = (index) => {
        setActiveIndex(index)
        setIsOpen(true);
    }
    return(
        <div className="md:flex mt-4">
            <div className="lg:w-1/2 md:w-1/2 p-1">
                <div className="group relative overflow-hidden">
                    <Image src="/images/property/single/t.jpg" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} priority />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                        <Link href="#" onClick={() => handleCLick(0)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><FiCamera width={18}/></Link>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 md:w-1/2">
                <div className="flex">
                    <div className="w-1/2 p-1">
                        <div className="group relative overflow-hidden">
                            <Image src="/images/property/single/t.jpg" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"100"}} priority />
                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                <Link href="#" onClick={() => handleCLick(1)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><FiCamera width={18}/></Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 p-1">
                        <div className="group relative overflow-hidden">
                            <Image src="/images/property/single/t.jpg" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} priority />
                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                <Link href="#" onClick={() => handleCLick(2)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><FiCamera width={18}/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-1/2 p-1">
                        <div className="group relative overflow-hidden">
                            <Image src="/images/property/single/t.jpg" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} priority />
                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                <Link href="#" onClick={() => handleCLick(3)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><FiCamera width={18}/></Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 p-1">
                        <div className="group relative overflow-hidden">
                            <Image src="/images/property/single/t.jpg" alt="" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} priority />
                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                <Link href="#" onClick={() => handleCLick(4)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><FiCamera width={18}/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() =>setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setActiveIndex((photoIndex + images.length - 1) % images.length,
                        )
                    }
                    onMoveNextRequest={() =>
                        setActiveIndex((photoIndex + 1) % images.length,
                        )
                    }
                />
            )}
        </div>
    )
}