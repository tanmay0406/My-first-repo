import React, { useState } from "react";
import Image from "next/image";
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'; // Import heart icons from MDI

export default function PropertyImage({ images }) {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isWishlist, setIsWishlist] = useState(false); // State to manage wishlist

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

    const toggleWishlist = () => {
        setIsWishlist(!isWishlist);
    };

    return (
        <div>
            <div className="relative overflow-hidden" onClick={() => openLightbox(0)}>
                {/* Display first image */}
                <Image
                    src={images[0]}
                    alt=""
                    width={826}
                    height={800}
                    priority
                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                />
                {/* Wishlist icon */}
                <div className="absolute top-4 right-16 z-10 ">
                <div className="rounded-full bg-gray-300 w-10 h-10 flex items-center justify-center">
                    {isWishlist ? (
                        <MdFavorite className="text-red-500  text-2xl cursor-pointer  hover:text-red-500 " onClick={(e) => { e.stopPropagation(); toggleWishlist(); }} />
                    ) : (
                        <MdFavoriteBorder className="text-gray-500   text-2xl cursor-pointer" onClick={(e) => { e.stopPropagation(); toggleWishlist(); }} />
                    )}
                    </div>
                    
                </div>
                


            </div>
            {/* Rest of the images */}
            <div className="flex items-center justify-left mt-2">
                {images.slice(1, 5).map((imageUrl, index) => (
                    <div key={index} className="relative overflow-hidden mx-1" onClick={() => openLightbox(index + 1)}>
                        <Image
                            src={imageUrl}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '200px', height: '150px', objectFit: 'cover', cursor: 'pointer' }}
                            priority
                        />
                        <div className="absolute inset-0 bg-slate-900/70 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                        {index === 3 && images.length > 4 && (
                            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center" onClick={() => openLightbox(4)}>
                                    <span className="text-4xl">+</span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {/* Lightbox */}
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