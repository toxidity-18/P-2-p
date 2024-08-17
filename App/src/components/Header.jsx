import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ShoppingBagIcon, ChatBubbleLeftEllipsisIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';

const Header = () => {
  const handleSignOut = () => {
    signOut(auth).then(() => {
      window.location.href = '/'; 
    });
  };

  return (
    <header className="bg-cover bg-center rounded-xl shadow-lg text-slate-950 p-6" style={{ backgroundImage: `url('https://i.pinimg.com/564x/c6/ba/3a/c6ba3a49410885c6dd450535e53ceb66.jpg')` }}>
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0 text-blue-900">
        <h1 className="text-2xl font-bold">G.A.S <span className='text-red-700'>0.D</span></h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="flex items-center hover:text-gray-300 transition-colors duration-200"><HomeIcon className="w-5 h-5 mr-1"/>Home</Link></li>
          
          {/* Dropdown Menu for Catalog */}
          <li className="relative group">
            <Link to="/catalog" className="flex items-center hover:text-gray-300 transition-colors duration-200">
              <ShoppingBagIcon className="w-5 h-5 mr-1"/>Catalog
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-black p-3 rounded-lg shadow-lg mt-1 transition-all duration-300">
              <li><Link to="/catalog/brakes" className="block px-4 py-2 hover:bg-gray-200 rounded">Brakes</Link></li>
              <li><Link to="/catalog/filters" className="block px-4 py-2 hover:bg-gray-200 rounded">Filters</Link></li>
              <li><Link to="/catalog/plugs" className="block px-4 py-2 hover:bg-gray-200 rounded">Spark Plugs</Link></li>
            </ul>
          </li>

          {/* Dropdown Menu for Feedback */}
          <li className="relative group">
            <Link to="/feedback" className="flex items-center hover:text-gray-300 transition-colors duration-200">
              <ChatBubbleLeftEllipsisIcon className="w-5 h-5 mr-1"/>Feedback
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-black p-3 rounded-lg shadow-lg mt-1 transition-all duration-300">
              <li><Link to="/feedback/submit" className="block px-4 py-2 hover:bg-gray-200 rounded">Submit Feedback</Link></li>
              <li><Link to="/feedback/view" className="block px-4 py-2 hover:bg-gray-200 rounded">View Feedback</Link></li>
            </ul>
          </li>

          {/* Dropdown Menu for Profile */}
          <li className="relative group">
            <Link to="/profile" className="flex items-center hover:text-gray-300 transition-colors duration-200">
              <UserCircleIcon className="w-5 h-5 mr-1"/>Profile
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-black p-3 rounded-lg shadow-lg mt-1 transition-all duration-300">
              <li><Link to="/profile" className="block px-4 py-2 hover:bg-gray-200 rounded">View Profile</Link></li>
              <li><button onClick={handleSignOut} className="block px-4 py-2 hover:bg-gray-200 rounded w-full text-left">Sign Out</button></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
