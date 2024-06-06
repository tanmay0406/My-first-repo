// pages/wishlist.js
'use client'
import React, { useState, useEffect } from "react";
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";
import Property from "../componants/property"; // Assuming you have a Property component

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Fetch wishlist items from backend or any source
  useEffect(() => {
    // Example fetch request using useEffect
    const fetchWishlistItems = async () => {
      try {
        // Fetch wishlist items from your backend
        const response = await fetch("/api/wishlist"); // Example API route to fetch wishlist items
        const data = await response.json();
        setWishlistItems(data); // Update wishlist items state
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
      }
    };

    fetchWishlistItems();
  }, []);

  return (
    <>
      <Navbar />
      <section className="container mx-auto mt-16">
        <h1 className="text-3xl font-bold mb-8 text-center">Wishlist</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <Property key={item.id} property={item} />
          ))}
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
