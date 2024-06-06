"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import Link from "next/link";

import Wrapper from "../components/wrapper";

const Table = () => {
  const [data, setData] = useState([]); // State to store fetched data
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState('Pending'); // Initialize status state
  const [searchQuery, setSearchQuery] = useState(''); // Initialize searchQuery state
  const [loading, setLoading] = useState(true); // Initialize loading state

  // Fetch data from API when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.patch(`http://51.79.225.217:5001/api/vehicles/${id}/status`, { status: newStatus });
      // Refresh the data after updating the status
      fetchData();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };
  
  const fetchData = async () => {
    try {
      // Make GET request to your API endpoint
      const response = await axios.get('http://51.79.225.217:5001/api/vehicles/etractor');
      // Set fetched data to state
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Make an API call to delete the item with the given ID
      await axios.delete(`http://51.79.225.217:5001/api/vehicles/${id}`);
      
      // Optionally, update the component state to remove the deleted item
      // For example, you can filter out the deleted item from the data array
      setData(data.filter(item => item._id !== id));
      
      // Show a success message or perform any other actions as needed
      alert(`Item with ID ${id} deleted successfully`);
    } catch (error) {
      console.error('Error deleting item:', error);
      // Show an error message or handle the error in another way
      alert('An error occurred while deleting the item');
    }
  };
  


  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset current page when changing entries per page
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleStatusChange = (e, id) => {
    const newStatus = e.target.value;
    // Update the status of the specific vehicle in the database
    updateStatus(id, newStatus);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const totalPages = Math.ceil(data.length / entriesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = currentPage * entriesPerPage;

  // Filter data based on search query
  const filteredData = data.filter(item => {
    return (
      (item.brand && item.brand.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.model && item.model.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.variant && item.variant.toLowerCase().includes(searchQuery.toLowerCase())) ||
     
      (item.status && item.status.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }).slice(startIndex, endIndex);

  const handleEVCategoryChange = (e, id) => {
    const newCategory = e.target.value;
    updateEVCategory(id, newCategory);
  };

  const updateEVCategory = async (id, newCategory) => {
    try {
      await axios.patch(`http://51.79.225.217:5001/api/vehicles/${id}/evCategory`, { evCategory: newCategory });
      // Refetch data after updating EV category
      fetchData();
    } catch (error) {
      console.error('Error updating EV category:', error);
    }
  };


  return (
    <Wrapper>
      <div className="container mx-auto mt-32">
        <div className="flex justify-between mb-6">
          <div>
            <select value={entriesPerPage} onChange={handleEntriesPerPageChange} className="bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md py-1 px-3">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            &nbsp;
          </div>
          <div className="flex items-center">
            <div className="mr-2">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                className="bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md py-1 px-3"
                placeholder="Search..."
              />
            </div>
            <Link href={`/add-EVs/`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
              Add New
            </button>
            </Link>
           
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <div className="relative">
          <table className="table w-full shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-3 py-2 text-left text-sm font-medium">ID</th>
                <th className="px-3 py-2 text-left text-sm font-medium">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Model</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Range</th>
                <th className="px-4 py-2 text-left text-sm font-medium">EV Category</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Request</th>

                <th className="px-4 py-2 text-left text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 border-b border-gray-200">
                  <td className="px-3 py-2 text-left text-sm">{startIndex + index + 1}</td>
                  <td className="px-3 py-2 text-left text-sm">{item.brand}</td>
                  <td className="px-4 py-2 text-left text-sm">{item.model}</td>
                  <td className="px-4 py-2 text-left text-sm">{item.kilometresDriven}</td>
                  <td className="px-4 py-2 text-left text-sm">
                    <div className="relative inline-block w-full">
                    <select
                value={item.status} // Use item.status instead of status
                onChange={(e) => handleStatusChange(e, item._id)} // Pass item._id as the second argument
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                >
                <option value="Approved">Approved</option>
                <option value="Disapproved">Disapproved</option>
                <option value="Pending">Pending</option>
                </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-8-8 1.5-1.5L10 9l7.5-7.5L18 4z"/></svg>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-2 text-left text-sm relative">
  <div className="relative inline-block w-full">
    <select
      value={item.evCategory}
      onChange={(e) => handleEVCategoryChange(e, item._id)}
      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
    >
      <option value="Top EVs">Top EVs</option>
      <option value="New Arrivals">New Arrivals</option>
      <option value="Featured EVs">Featured EVs</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-8-8 1.5-1.5L10 9l7.5-7.5L18 4z"/></svg>
    </div>
  </div>
</td>
                  <td className="px-4 py-2 text-left text-sm">
                    <Link href={`/tractor-detail/${item._id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-1 rounded">
                        <span className="mdi mdi-eye"></span> 
                      </button>
                    </Link>
                
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mr-1 rounded" onClick={() => handleDelete(item.id)}>
                      <span className="mdi mdi-delete"></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <div className="container mx-auto mt-4 flex justify-end">
        <div className="flex justify-end">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-1 px-2 rounded mr-2"
          >
            Prev
          </button>
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`${
                pageNumber === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
              } font-bold py-1 px-2 rounded mx-1`}
            >
              {pageNumber}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-1 px-2 rounded ml-2"
          >
            Next
          </button>
        </div>
      </div>

    </Wrapper>
  );
};

export default Table;