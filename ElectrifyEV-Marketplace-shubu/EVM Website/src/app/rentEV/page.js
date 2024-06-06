"use client";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../componants/footer";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";


export default function RentEV() {
    const router = useRouter();
    const [ownerName, setOwnerName] = useState('');
    const [ownerContact, setOwnerContact] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [ownerCity, setOwnerCity] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [plateNo, setPlateNo] = useState('');
    const [batteryPower, setBatteryPower] = useState('');
    const [kilometresDriven, setKilometresDriven] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('ownerName', ownerName);
        formData.append('ownerContact', ownerContact);
        formData.append('ownerEmail', ownerEmail);
        formData.append('ownerCity', ownerCity);
        formData.append('vehicleType', vehicleType);
        formData.append('brand', brand);
        formData.append('model', model);
        formData.append('plateNo', plateNo);
        formData.append('batteryPower', batteryPower);
        formData.append('kilometresDriven', kilometresDriven);
        formData.append('image', image);

        try {
            const response = await fetch('https://localhost:5000/api/rentev', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                console.log('Form submitted successfully!');
                // Handle success, e.g., show a success message or redirect the user
                toast.success('Form submitted successfully!');
                router.push('/ev');
                
                
                
                await fetchData();
            } else {
                console.error('Failed to submit form');
                // Handle failure, e.g., show an error message to the user
                toast.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };


    return (
        <>
            <Navbar navClass="navbar-white" />
            <section className="py-20 bg-gray-950" style={{ backgroundImage: "url('/images/bg/b17.jpg')" }}>
        <div className="container mx-auto px-2">
        <div className="max-w-lg mx-auto bg-slate-200 rounded-lg shadow-lg p-2 mt-4 ">
            
            <div className="pt-16 flex justify-center items-center min-h-screen">
                <div className="w-full sm:max-w-md">
                    <h1 className="text-center text-2xl mb-4 text-gray-700 dark:text-gray-700">Enter Vehicle details you want to Rent</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <fieldset>
                            <legend className="text-gray-700 dark:text-gray-700">Owner Details</legend>
                            <label className="text-green-500">
                                Owner Name:
                                <input type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br /><br />
                            <label className="text-green-500">
                                Owner Contact:
                                <input type="text" value={ownerContact} onChange={(e) => setOwnerContact(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br /><br />
                            <label className="text-green-500">
                                Owner Email:
                                <input type="email" value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br /><br />
                            <label className="text-green-500">
                                Owner City:
                                <input type="text" value={ownerCity} onChange={(e) => setOwnerCity(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br /><br />
                        </fieldset>

                        <fieldset>
                            <legend className="text-gray-700 dark:text-gray-700">Vehicle Details</legend>
                            <label className="text-green-500" >
                                Vehicle Type:
                                <input type="text" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br /><br />
                            <label className="text-green-500">
                                Brand:
                                <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br /><br />
                            <label className="text-green-500">
                                Model:
                                <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br /><br />
                            <label className="text-green-500">
                                Plate Number:
                                <input type="text" value={plateNo} onChange={(e) => setPlateNo(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br /><br />
                            <label className="text-green-500">
                                Battery Power(mAh):
                                <input type="text" value={batteryPower} onChange={(e) => setBatteryPower(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br /><br />
                            <label className="text-green-500">
                                Kilometres Driven:
                                <input type="text" value={kilometresDriven} onChange={(e) => setKilometresDriven(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br /><br />
                            <label className="text-green-500">
                                Upload Image:
                                <input type="file" accept="image/*" onChange={handleImageChange} required className="w-full border rounded-sm py-1 px-2" />
                            </label><br /><br />
                        </fieldset>
                        <div className="flex justify-center">
                                <button type="submit" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            </div>
            </section>
            <Footer />
            <Switcher />
            <ToastContainer />
        </>
    )
}
