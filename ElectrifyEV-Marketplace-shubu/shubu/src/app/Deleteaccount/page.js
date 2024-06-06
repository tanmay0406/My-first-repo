// pages/delete-account.js
'use client'
import { useState } from "react";
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";

export default function DeleteAccount() {
  const [showModal, setShowModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    // Simulate deletion process (replace with actual deletion logic)
    setTimeout(() => {
      setIsDeleting(false);
      setShowModal(false);
      window.location.href = "/account-deleted"; // Redirect using window.location
    }, 2000); // Simulating 2 seconds delay
  };

  return (
    <>
      <Navbar />
      <section className="container mx-auto mt-16">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-8 text-center">Delete Account</h1>
          <button
            onClick={() => setShowModal(true)}
            className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out w-full"
          >
            Delete Account
          </button>
          {showModal && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white p-8 rounded-md shadow-md max-w-md">
                <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
                <p className="mb-4">Are you sure you want to delete your account?</p>
                <div className="flex justify-between">
                  <button
                    onClick={handleDeleteAccount}
                    className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
                    disabled={isDeleting}
                  >
                    {isDeleting ? "Deleting..." : "Confirm"}
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="inline-block bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
