// pages/testdrive.js

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function TestDrive() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    vehicleOfInterest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send form data to backend)
    console.log(formData);
  };

  return (
    <>
      <Head>
        <title>Test Drive - ElectrifyEV Marketplace</title>
        <meta name="description" content="Schedule a test drive of electric vehicles at ElectrifyEV Marketplace." />
      </Head>
      <Navbar />
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Schedule a Test Drive</h1>
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-semibold">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 rounded px-4 py-2" />
              </div>
              {/* Other form fields (email, phone, preferredDate, preferredTime, vehicleOfInterest, message) */}
              <div className="mb-4">
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Schedule Test Drive</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
