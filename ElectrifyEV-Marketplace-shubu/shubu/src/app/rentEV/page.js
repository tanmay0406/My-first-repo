"use client";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../componants/footer";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import '../globals.css';


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
    const [bodyType, setBodyType] = useState('');
    const [price, setprice] = useState('');
    const [previewData, setPreviewData] = useState(null);
    const [showPreview, setShowPreview] = useState(false);

    const handlePreview = (event) => {
        event.preventDefault();
        const previewData = {
            ownerName,
            ownerContact,
            ownerEmail,
            ownerCity,
            vehicleType,
            brand,
            model,
            plateNo,
            batteryPower,
            kilometresDriven,
            image,
            bodyType,
            price,
        };
        console.log("Preview Data:", previewData);
        setPreviewData(previewData);
        setShowPreview(true);
    };

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
        formData.append('bodyType', bodyType);
        formData.append('price', price)

        try {
            const response = await fetch('http://51.79.225.217:5000/api/rentev', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                console.log('Form submitted successfully!');
                // Handle success, e.g., show a success message or redirect the user
                toast.success('Form submitted successfully!');
                router.push('/');
                // Redirect to the review page with name as a query parameter

                // After redirection, fetch data again to populate the required fields
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


    // onSubmit={previewData ? handleSubmit : handlePreview}


    // console.log("Preview Data:", previewData);

    return (
        <>
            <Navbar navClass="navbar-white" />
            <div className="pt-16 flex justify-center items-center min-h-screen">
                <div className="w-full sm:max-w-md">
                    <h1 className="text-center text-2xl mb-4">Enter Vehicle details you want to Rent</h1>
                    <form onSubmit={previewData ? handleSubmit : handlePreview} className="space-y-4">
                        <fieldset>
                            <legend>Owner Details</legend>
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
                            <legend>Vehicle Details</legend>

                            <label className="text-green-500">
                                Body Type:
                                <select value={bodyType} onChange={(e) => setBodyType(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2">
                                    <option value="">Select Body Type</option>
                                    <option value="sedan">Sedan</option>
                                    <option value="SUV">SUV</option>
                                    <option value="hatchback">Hatchback</option>
                                </select>
                            </label><br /><br />

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
                                Price:
                                <input type="text" value={price} onChange={(e) => setprice(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br /><br />
                            <label className="text-green-500">
                                Upload Image:
                                <input type="file" accept="image/*" onChange={handleImageChange} required className="w-full border rounded-sm py-1 px-2" />
                            </label><br /><br />
                        </fieldset>
                        <div className="flex justify-center">
                            <button type="button" onClick={handlePreview} className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Preview</button>
                            <button type="submit" onClick={handleSubmit} className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Preview Popup */}
            {showPreview && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg preview-container">
                        <h2 className="text-xl font-semibold mb-4">Preview</h2>
                        {/* Render the preview data here */}
                        <pre className="preview-code">{JSON.stringify(previewData, null, 2)}</pre>
                        <button onClick={() => setShowPreview(false)} className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Close</button>
                    </div>
                </div>
            )}
            <Footer />
            <Switcher />
            <ToastContainer />
        </>
    )
}
