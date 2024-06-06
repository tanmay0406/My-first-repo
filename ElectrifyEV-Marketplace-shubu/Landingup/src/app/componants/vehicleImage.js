import React, { useState } from "react";
import Image from "next/image";
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'; 

export default function VehicleImage({ vehicle }) {
  const { interiorImages = [], frontImages = [], sideImages = [], backImages = [] } = vehicle || {};
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setPhotoIndex((photoIndex + getAllImages().length - 1) % getAllImages().length);
  };

  const goToNext = () => {
    setPhotoIndex((photoIndex + 1) % getAllImages().length);
  };

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  const getAllImages = () => [...frontImages, ...interiorImages, ...sideImages, ...backImages];

  // Function to handle image URL formatting
  const formatImagePath = (path) => {
    return path.replace(/\\/g, '/').replace(/\//g, '/');
  };

  // Function to generate the correct image URL
  const getImagePath = (imageName) => {
    // Check if the imageName starts with 'http' or '/api/images/', if so, return it as is
    if (imageName.startsWith('http') || imageName.startsWith('/api/images/')) {
      return imageName;
    }
    // Otherwise, append the base URL and format the image path
    return `http://localhost:5000/${formatImagePath(imageName)}`;
  };

  return (
    <div>
      <div className="relative overflow-hidden" onClick={() => openLightbox(0)}>
        {frontImages[0] && (
          <Image
            src={getImagePath(frontImages[0])}
            alt=""
            width={826}
            height={800}
            priority
            style={{ objectFit: 'cover', cursor: 'pointer' }}
          />
        )}
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
      <div className="flex items-center justify-left mt-2">
      {frontImages.slice(0, 5).map((image, index) => (
  <div key={index} className="relative overflow-hidden mx-1" onClick={() => openLightbox(index)}>
      <Image
          src={getImagePath(image)}
          alt=""
          width={200}
          height={150}
          objectFit="cover"
          priority
          className="cursor-pointer"
/>
            <div className="absolute inset-0 bg-slate-900/70 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
          </div>
        ))}
        {frontImages.length > 4 && (
          <div key={4} className="relative overflow-hidden mx-1" onClick={() => openLightbox(4)}>
            <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-4xl">+</span>
            </div>
          </div>
        )}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={getImagePath(getAllImages()[photoIndex])}
          nextSrc={getImagePath(getAllImages()[(photoIndex + 1) % getAllImages().length])}
          prevSrc={getImagePath(getAllImages()[(photoIndex + getAllImages().length - 1) % getAllImages().length])}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={goToPrevious}
          onMoveNextRequest={goToNext}
        />
      )}
    </div>
  );
}
