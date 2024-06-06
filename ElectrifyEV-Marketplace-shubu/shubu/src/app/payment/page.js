// pages/payment.js
'use client'
import { useState } from 'react';
import { FaCreditCard } from 'react-icons/fa';
import Modal from 'react-modal';

export default function Payment() {
  const [dummyMobileNo, setDummyMobileNo] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setDummyMobileNo(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    console.log('Payment submitted');
    setModalIsOpen(false); // Close the modal after submission
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-cover">
      <button onClick={() => setModalIsOpen(true)} className="text-indigo-500 underline">+ Make Payment</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="max-w-md mx-auto p-8 bg-white bg-opacity-90 shadow-lg rounded-lg"
      >
        <h1 className="text-2xl font-semibold mb-4">Payment Method</h1>
        <div className="mb-4 flex items-center relative">
          <FaCreditCard className="text-purple-600 mr-2" />
          <span className="text-sm text-gray-500">Visa</span>
          <input type="text" id="dummyMobileNo" name="dummyMobileNo" placeholder="Enter mobile number" value={dummyMobileNo} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mt-4">
          <button type="button" onClick={handleSubmit} className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Make Payment</button>
        </div>
        <div className="mt-4">
          <button onClick={() => setModalIsOpen(false)} className="text-indigo-500 underline">Close</button>
        </div>
      </Modal>
    </div>
  );
}
