import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} Gatung'ang'a Auto Spares. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-gray-400 transition-colors duration-200">Home</Link>
          <Link to="/catalog" className="hover:text-gray-400 transition-colors duration-200">Catalog</Link>
          <Link to="/feedback" className="hover:text-gray-400 transition-colors duration-200">Feedback</Link>
          <Link to="/profile" className="hover:text-gray-400 transition-colors duration-200">Profile</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
