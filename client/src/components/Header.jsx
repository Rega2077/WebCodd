import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaUserCircle } from 'react-icons/fa';

// Simulated auth status (replace with real auth logic later)
const isAuthenticated = false;

const Header = () => {
  return (
    <header className="bg-white shadow-lg w-full fixed top-0 z-50 border-b border-gray-200">
      <nav className="max-w-[1300px] mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaBookOpen className="text-purple-700 text-4xl" />
          <span className="text-3xl font-bold text-gray-800 tracking-wide">WebCodd</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-12 text-lg font-medium text-gray-700">
          {['Home', 'Problems', 'Challenges', 'About Us'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/\s/g, '')}`}
              className="relative group transition-all duration-300"
            >
              <span className="group-hover:text-purple-700">{item}</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
          ))}
        </div>

        {/* Auth Section */}
        <div className="flex items-center space-x-4 text-base font-semibold">
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-5 py-2.5 rounded-full shadow-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
              >
                <span className="text-[#4B3209] font-semibold">Login</span>
              </Link>
              <Link
                to="/signup"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-5 py-2.5 rounded-full shadow-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
              >
                <span className="text-[#4B3209] font-semibold">Signup</span>
              </Link>
            </>
          ) : (
            <>
              <button className="text-purple-700 hover:text-indigo-700 transition">Logout</button>
              <Link to="/profile">
                <FaUserCircle className="text-3xl text-purple-700 hover:text-indigo-700 transition" />
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
