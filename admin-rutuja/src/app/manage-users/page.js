"use client";
import { useEffect, useState } from 'react';
import Wrapper from "../components/wrapper";

const Table = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetching data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://51.79.225.217:5000/api/users`);
        const jsonData = await response.json();

        // Update the status for each user in the fetched data
        const updatedData = jsonData.map(user => ({
          ...user,
          status: user.account_status === 'active' ? 'Active' : 'Inactive'
        }));

        setData(updatedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    // Perform deletion logic here
    alert(`Item with ID ${id} deleted`);
  };

  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (val) =>
        typeof val === 'string' && val.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = currentPage * entriesPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

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
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
              Add New
            </button> */}
          </div>
        </div>
      </div>


      <div className="container mx-auto mt-4 overflow-x-auto">
        <div className="relative">
          <table className="table w-full shadow-md rounded-lg overflow-hidden ">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-3 py-2 text-left text-sm font-medium">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Email</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Address</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Mobile No</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Account</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
                <th className="px-4 py-2 text-left text-sm font-medium">Delete</th>
              </tr>
            </thead>
            <tbody>
            {paginatedData.map((user) => (
  <tr key={user._id} className="hover:bg-gray-100 border-b border-gray-200">
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.customer_address}</td>
    <td>{user.mobile_no}</td>
    <td>{user.account_type}</td>
    <td>
      <div
        id={`statusToggle_${user._id}`}
        className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 ${user.status === "Active" ? "bg-green-600" : "bg-red-600"}`}
      ></div>
    </td>
    <td>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mr-1 rounded" onClick={() => handleDelete(user._id)}>
        <span className="mdi mdi-delete"></span>
      </button>
    </td>
  </tr>
))}

            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default Table;
 