"use client";
import React, { useEffect, useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import Wrapper from "../../components/wrapper";
import Link from 'next/link';

const CarDetail = ({ params, onStatusChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentImageType, setCurrentImageType] = useState(null);
  const [status, setStatus] = useState('Approve');
  const [evCategory, setEvCategory] = useState('Top EVs');
  const [carData, setCarData] = useState(null);
  


  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch(`http://51.79.225.217:5001/api/vehicles/${params?.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch car details');
        }
        const jsonData = await response.json();
        setCarData(jsonData);
      } catch (error) {
        console.error('Error fetching car details:', error);
        // Handle error, maybe display an error message to the user
      }
    };
    

    if (params?.id) {
      fetchCarData();
    }
  }, [params?.id]);

  

  if (!carData) {
    return <div>Loading...</div>;
  }

  const handleImageClick = (index, imageType) => {
    setPhotoIndex(index);
    setCurrentImageType(imageType);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    const images = carData[currentImageType + 'Images'];
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  const goToNext = () => {
    const images = carData[currentImageType + 'Images'];
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  // Function to handle status change
  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    onStatusChange(carData);
    alert(`Status updated to: ${newStatus}`);
  };
  
  const fetchFeaturedVehicles = async (selectedCategory) => {
    try {
      const response = await fetch(`/api/featured-vehicles?category=${selectedCategory}`);
      if (!response.ok) {
        throw new Error('Failed to fetch featured vehicles');
      }
      const featuredVehicles = await response.json();
      setCarData(featuredVehicles);
    } catch (error) {
      console.error('Error fetching featured vehicles:', error);
    }
  };

  const handleEvCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setEvCategory(selectedCategory);
    fetchFeaturedVehicles(selectedCategory);
  };

  // Function to render images based on type
  const renderImages = (type) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">{`${type.charAt(0).toUpperCase() + type.slice(1)} Images`}</label>
        <div className="flex space-x-2">
          {carData[type + 'Images'].map((image, index) => (
            <div key={index} onClick={() => handleImageClick(index, type)}>
              <img src={image} width={200} height={150} alt={`${type.charAt(0).toUpperCase() + type.slice(1)} Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Wrapper>
      <section className="relative md:pb-24 pb-16 mt-20 px-4">
        <div className="max-w-screen-xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Car Details</h1>
          <div className="grid grid-cols-1 gap-4">
            {['interior', 'front', 'side', 'back'].map((type) => renderImages(type))}
          </div>
        </div>




        <div className="grid grid-cols-2 gap-5">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Brand</label>
            <input
              type="text"
              value={carData.brand}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              readOnly
            />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Model</label>
    <input
      type="text"
      value={carData.model}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Type</label>
    <input
      type="text"
      value={carData.bodyType}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Variant</label>
    <input
      type="text"
      value={carData.variant}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Location</label>
    <input
      type="text"
      value={carData.location}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">RTO code</label>
    <input
      type="text"
      value={carData.rtoCode}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Battery Power</label>
    <input
      type="text"
      value={carData.batteryPower}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">kilometers Driven</label>
    <input
      type="text"
      value={carData.kilometresDriven}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Color</label>
    <input
      type="text"
      value={carData.color}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">BodyType</label>
    <input
      type="text"
      value={carData.bodyType}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Registration Year</label>
    <input
      type="text"
      value={carData.registrationYear}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Transmission Type</label>
    <input
      type="text"
      value={carData.transmissionType}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Name</label>
    <input
      type="text"
      value={carData.ownerName}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Contact</label>
    <input
      type="text"
      value={carData.ownerContact}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner Email</label>
    <input
      type="text"
      value={carData.ownerEmail}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Owner City</label>
    <input
      type="text"
      value={carData.ownerCity}
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      readOnly
    />
  </div>
  </div>
<div class>
  <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Price</label>
          <input
            type="text"
            value={`${carData.price.value} ${carData.price.currency}`}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            readOnly
          />
        </div>


</div>
<div className="mb-4 relative">
  <label className="block text-gray-700 font-bold mb-2">EV Category</label>
  <div className="relative">
  <select
  value={evCategory}
  onChange={handleEvCategoryChange}
  className="appearance-none bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
>
  <option value="Top EVs">Top EVs</option>
  <option value="Featured EVs">Featured EVs</option>
  <option value="New Arrivals">New Arrivals</option>
</select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M5 7l5 5 5-5z" />
      </svg>
    </div>
  </div>
</div>


                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Vehicle Description</label>
                <textarea
                  value={carData.vehicleDescription}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  readOnly
                  rows="4"
                 />
                </div>
                
                <div className="mb-4 relative">
          <label className="block text-gray-700 font-bold mb-2">Request</label>
          <div className="relative">
            <select
              value={status}
              onChange={handleStatusChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 pr-8"
            ><CarDetail onStatusChange={handleStatusChange} />

              <option value="Approve">Approve</option>
              <option value="Disapprove">Disapprove</option>
              <option value="Pending">Pending</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5 7l5 5 5-5z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <Lightbox
          mainSrc={
            currentImageType === 'interior' ? carData.interiorImages[photoIndex] :
            currentImageType === 'front' ? carData.frontImages[photoIndex] :
            currentImageType === 'side' ? carData.sideImages[photoIndex] :
            carData.backImages[photoIndex]
          }
          nextSrc={
            currentImageType === 'interior' ? carData.interiorImages[(photoIndex + 1) % carData.interiorImages.length] :
            currentImageType === 'front' ? carData.frontImages[(photoIndex + 1) % carData.frontImages.length] :
            currentImageType === 'side' ? carData.sideImages[(photoIndex + 1) % carData.sideImages.length] :
            carData.backImages[(photoIndex + 1) % carData.backImages.length]
          }
          prevSrc={
            currentImageType === 'interior' ? carData.interiorImages[(photoIndex + carData.interiorImages.length - 1) % carData.interiorImages.length] :
            currentImageType === 'front' ? carData.frontImages[(photoIndex + carData.frontImages.length - 1) % carData.frontImages.length] :
            currentImageType === 'side' ? carData.sideImages[(photoIndex + carData.sideImages.length - 1) % carData.sideImages.length] :
            carData.backImages[(photoIndex + carData.backImages.length - 1) % carData.backImages.length]
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={goToPrevious}
          onMoveNextRequest={goToNext}
        />
      )}
    </Wrapper>
  );
}

export default CarDetail;