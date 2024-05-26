import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="basecolor py-6 text-center mt-40">
      <div className="mb-4 mt-4">
        <h2 className="text-xl caption mb-2">Rentify</h2>
        <p>&copy; {new Date().getFullYear()} Rentify. All rights reserved.</p>
      </div>
      <div className="mb-6">
        <a href="/" className="mx-3 text-gray-700 hover:text-gray-900">Home</a>
        <a href="/about" className="mx-3 text-gray-700 hover:text-gray-900">About us</a>
        <a href="/contact" className="mx-3 text-gray-700 hover:text-gray-900">Contact</a>
        <a href="/terms" className="mx-3 text-gray-700 hover:text-gray-900">Terms of Service</a>
      </div>
      <div className="flex justify-center space-x-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-125">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-125">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-125">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;