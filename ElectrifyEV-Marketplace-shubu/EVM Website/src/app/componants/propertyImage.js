'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiCamera } from '../assets/icons/vander';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

export default function PropertyImage({ images }) {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const goToPrevious = () => {
        setPhotoIndex((photoIndex + images.length - 1) % images.length);
    };

    const goToNext = () => {
        setPhotoIndex((photoIndex + 1) % images.length);
    };

    return (
        <div className="md:flex mt-4">
            {images.map((imageUrl, index) => (
                <div key={index} className="lg:w-1/2 md:w-1/2 p-1">
                    <div className="group relative overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "400px", height: "200px" }}
                            priority
                            onClick={() => openLightbox(index)}
                        />
                        <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                            <Link
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    openLightbox(index);
                                }}
                                className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"
                            >
                                <FiCamera width={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={closeLightbox}
                    onMovePrevRequest={goToPrevious}
                    onMoveNextRequest={goToNext}
                />
            )}
        </div>
    );
}
