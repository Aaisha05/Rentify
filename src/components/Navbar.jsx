import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  const [userData, setUserData] = useState(null);
  const [showUserData, setShowUserData] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (showUserData) {
      fetchUserData();
    }
  }, [showUserData]);

  const fetchUserData = async () => {
    try {
      const email = localStorage.getItem('user');
      if (!email) {
        console.error('No user email found in localStorage');
        return;
      }

      console.log('Fetching user data for email:', email);

      const response = await axios.post('https://rentify-server-rf0d.onrender.com/userdetails', {
        email: email
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.data;
      console.log('User data received:', data);
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const toggleUserData = () => {
    setShowUserData(!showUserData);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f8f7f4] z-50 flex justify-between items-center p-4">
      <div className="flex items-center font-medium">
        <p className="caption text-xl">Rentify</p>
      </div>
      <div className="hidden lg:flex items-center font-medium">
        <Link
          to="/"
          className="text-black text-sm mr-8 ml-auto hover:border-b-2 hover:border-black p-2 transition-all duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-black text-sm mr-8 hover:border-b-2 hover:border-black p-2 transition-all duration-200"
        >
          About
        </Link>
        <Link
          to="/admindash"
          className="text-black text-sm mr-8 hover:border-b-2 hover:border-black p-2 transition-all duration-200"
        >
          Dashboard
        </Link>
        <Link
          to="/contact"
          className="text-black text-sm mr-2 hover:border-b-2 hover:border-black p-2 transition-all duration-200"
        >
          Contact
        </Link>
      </div>
      <div className="hidden z-80 lg:flex items-center relative">
        <FaUserCircle className="text-2xl cursor-pointer" onClick={toggleUserData} />
        {showUserData && userData && (
          <div className="absolute top-12 right-0 text-center bg-white p-4 sm:p-10 px-8 sm:px-20 rounded shadow-md z-80" style={{ zIndex: 1000 }}>
            <div className="flex justify-center mb-2">
              <FaUserCircle className="text-4xl" />
            </div>
            <p className="text-gray-800 mb-2 sm:mb-4">{userData.email}</p>
            <Link to="/" >Log Out</Link>
          </div>
        )}
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-30 z-50 lg:hidden">
          <div className="fixed top-0 left-0 w-56 h-full bg-[rgba(248,247,244,0.9)] shadow-lg p-4">
            <button onClick={toggleSidebar} className="text-black text-2xl mb-4">
              &times;
            </button>
            <nav className="flex flex-col">
              <Link to="/" className="text-black text-sm mt-4 pl-4 mb-2 hover:bg-[rgba(248,247,244,0.9)] rounded-md p-2" onClick={toggleSidebar}>Home</Link>
              <Link to="/admindash" className="text-black pl-4 text-sm mb-2 hover:bg-[rgba(248,247,244,0.9)] rounded-md p-2" onClick={toggleSidebar}>Dashboard</Link>
              <Link to="/about" className="text-black pl-4 text-sm mb-2 hover:bg-[rgba(248,247,244,0.9)] rounded-md p-2" onClick={toggleSidebar}>About</Link>
              <Link to="/contact" className="text-black pl-4 text-sm mb-2 hover:bg-[rgba(248,247,244,0.9)] rounded-md p-2" onClick={toggleSidebar}>Contact Us</Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

