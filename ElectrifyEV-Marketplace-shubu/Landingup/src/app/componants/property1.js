'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdDirectionsCar, MdSettingsInputComponent, MdTune, MdPhotoCamera, MdBatteryFull, MdFlight } from '../assets/icons/vander'

export default function Property() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchFeaturedVehicles = async () => {
            try {
                const response = await fetch('http://51.79.225.217:5001/api/vehicles/featured');
                if (!response.ok) {
                    throw new Error('Failed to fetch featured vehicles');
                }
                const data = await response.json();
                console.log('Fetched featured vehicles:', data);
                setVehicles(data);
            } catch (error) {
                console.error('Error fetching featured vehicles:', error);
            }
        };
    
        fetchFeaturedVehicles();
    }, []);

    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white-900 dark:text-white">Featured vehicles</h3>

                    
                </div>
                <div className="lg:col-span-9 md:col-span-10 col-span-11">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {vehicles.map((vehicle, index) => (
                        <Link href={`/vehicle-detail/${vehicle.id}`} key={index}>
                        <div className="group relative rounded-xl text-black dark:text-white overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                            <div className="relative">
                            <img 
                                    src={`data:image/jpeg;base64,${vehicle.frontImagesBase64[0]}`} 
                                    alt="" 
                                    className="object-cover w-full h-full"
                                />
                              <div className="absolute top-4 end-4">
                              <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md bg-white border dark:bg-black border text-gray-200 dark:text-black-200 hover:text-red-500 dark:hover:text-red-500" type="button" aria-label="Like">
  <svg width="20" height="20" fill="currentColor" aria-hidden="true">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
  </svg>
</button>
                                </div>
                            </div>

                            <div className="p-6 group-hover:bg-black-100 dark:group-hover:bg-black-100">
                                <div className="pb-6">
                                    <p className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{vehicle.name}</p>
                                </div>

                                <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">

                                {index !== 5 && (
                                        <>
                                    <li className="flex items-center me-4">
                                        <MdDirectionsCar className="me-2 text-green-600"/>
                                        <span>{vehicle.vehicleModel}</span>
                                    </li>
                                    

                                    <li className="flex items-center me-4">
                                        <MdSettingsInputComponent className="me-2 text-green-600"/>
                                        <span>{vehicle.Type} </span>
                                    </li>

                                    <li className="flex items-center">
                                        <MdTune className="me-2 text-green-600"/>
                                        <span>{vehicle.kilometresDriven} </span>
                                    </li>
                                    </>
                                     )}

                                    {index === 5 && (
                        <>
                        <li className="flex items-center me-4">
                                            <MdFlight width={20}  className="me-2 text-green-600"/>
                                            <span>{vehicle.Model}</span>
                                        </li>
                            <li className="flex items-center me-4">
                                <MdPhotoCamera width={20} className="me-2 text-green-600" />
                                <span>{vehicle.Camera}</span>
                            </li>
                            <li className="flex items-center">
                                <MdBatteryFull width={20} className="me-2 text-green-600" />
                                <span>{vehicle.Battery}</span>
                            </li>
                        </>
                        )}
                                </ul>

                                <ul className="pt-6 flex justify-between items-center list-none">
                                <li className="flex items-center">
                                    <MdTune className="me-2 text-green-600" />
                                    <span>{vehicle.price.currency} {vehicle.price.value}</span>
                                </li>
                                 

                                </ul>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
            </div>
        
            
        </>
    );

}