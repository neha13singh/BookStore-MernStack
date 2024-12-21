import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ token, username, onLogout }) => {
  return (
    <nav className="bg-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">Book Show</Link>
        <div className="flex items-center">
          {token ? (
            <>
              <span className="text-white mx-2">{username}</span>
              <button onClick={onLogout} className="text-white mx-2">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white mx-2">Login</Link>
              <Link to="/register" className="text-white mx-2">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;