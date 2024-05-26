import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function MainNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f8f7f4] z-50 flex justify-between items-center p-4">
      <div className="flex items-center">
        <p className="caption text-xl">Rentify</p>
      </div>
      <div className="hidden lg:flex items-center font-medium">
        <Link
          to="/"
          className="text-black text-sm mr-8 ml-6 hover:border-b-2 hover:border-black p-2 transition-all duration-200"
        >
          Home
        </Link>
        <Link
          to="/about1"
          className="text-black text-sm mr-8 hover:border-b-2 hover:border-black p-2 transition-all duration-200"
        >
          About
        </Link>
        <Link
          to="/userdash"
          className="text-black text-sm mr-8 hover:border-b-2 hover:border-black p-2 transition-all duration-200"
        >
          Dashboard
        </Link>
        <Link
          to="/contact1"
          className="text-black text-sm mr-2 hover:border-b-2 hover:border-black p-2 transition-all duration-200"
        >
          Contact
        </Link>
      </div>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleSidebar} className="text-black text-2xl mr-2">
          <FaBars />
        </button>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-30 z-50 lg:hidden">
          <div className="fixed top-0 right-0 w-56 h-full bg-[rgba(248,247,244,0.9)] shadow-lg p-4">
            <button onClick={toggleSidebar} className="text-black text-2xl mb-4">
              &times;
            </button>
            <nav className="flex flex-col">
              <Link to="/" className="text-black text-sm mt-4 pl-4 mb-2 hover:bg-[rgba(248,247,244,0.9)] rounded-md p-2" onClick={toggleSidebar}>Home</Link>
              <Link to="/login" className="text-black pl-4 text-sm mb-2 hover:bg-[rgba(248,247,244,0.9)] rounded-md p-2" onClick={toggleSidebar}>Login</Link>
              <Link to="/about" className="text-black pl-4 text-sm mb-2 hover:bg-[rgba(248,247,244,0.9)] rounded-md p-2" onClick={toggleSidebar}>About</Link>
              <Link to="/contact" className="text-black pl-4 text-sm mb-2 hover:bg-[rgba(248,247,244,0.9)] rounded-md p-2" onClick={toggleSidebar}>Contact Us</Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MainNavbar;