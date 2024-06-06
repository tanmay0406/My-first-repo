"use client";
import { useEffect, useState } from "react";
import Footer from "../componants/footer";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";

const Ev = ({ location }) => {
    const [formData, setFormData] = useState(null); // Initialize with null

    useEffect(() => {
        // Fetch data from backend API when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Fetch data from backend API
            const response = await fetch('https://localhost:5000/api/view/rentev');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();

            // Set the fetched data to the state
            setFormData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            // You can handle error state here, e.g., setFormData(null) or show an error message to the user
        }
    };

    const handleSubmit = async () => {
        const name = location.state.name; // Assuming name is passed as state

        // Redirect to the review page with name as a query parameter
        window.location.href = `/review?Owner Name:=${name}`;
        
        // After redirection, fetch data again to populate the required fields
        await fetchData();
    };

    return (
        <>
            <Navbar navClass="navbar-white" />
            <div className="pt-16 flex justify-center items-center min-h-screen">
                <div className="w-full sm:max-w-md">
                    <h1 className="text-center text-2xl mb-4">Preview</h1>
                    {formData && (
                        <div className="space-y-4">
                            <fieldset>
                                <legend>Owner Details</legend>
                                <p><strong>Owner Name:</strong> {formData.ownerName}</p>
                                <p><strong>Owner Contact:</strong> {formData.ownerContact}</p>
                                <p><strong>Owner Email:</strong> {formData.ownerEmail}</p>
                                <p><strong>Owner City:</strong> {formData.ownerCity}</p>
                            </fieldset>

                            <fieldset>
                                <legend>Vehicle Details</legend>
                                <p><strong>Vehicle Type:</strong> {formData.vehicleType}</p>
                                <p><strong>Brand:</strong> {formData.brand}</p>
                                <p><strong>Model:</strong> {formData.model}</p>
                                <p><strong>Plate Number:</strong> {formData.plateNo}</p>
                                <p><strong>Battery Power(mAh):</strong> {formData.batteryPower}</p>
                                <p><strong>Kilometres Driven:</strong> {formData.kilometresDriven}</p>
                            </fieldset>
                            
                            <button type="button" onClick={handleSubmit} className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Submit</button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
            <Switcher />
        </>
    );
};

export default Ev;
