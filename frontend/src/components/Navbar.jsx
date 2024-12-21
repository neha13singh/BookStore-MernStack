import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ token, username, onLogout }) => {
  return (
    <nav className="bg-gradient-to-r from-red-500 to-red-700 shadow-lg fixed w-full py-2 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Home Button */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/" 
            className="text-white text-xl font-semibold hover:text-gray-200 transition-colors"
          >
            Book Show
          </Link>
          <Link 
            to="/" 
            className="text-white text-base font-medium hover:text-gray-200 transition-colors"
          >
            Home
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {token ? (
            <>
              <span className="text-white text-sm font-medium">{username}</span>
              <button 
                onClick={onLogout} 
                className="bg-white text-red-600 px-4 py-1 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="bg-white text-red-600 px-4 py-1 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-white text-red-600 px-4 py-1 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
