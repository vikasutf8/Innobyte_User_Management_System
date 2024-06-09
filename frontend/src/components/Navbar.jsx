import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between">
      <Link to="/" className="text-white text-lg font-semibold">User Management System</Link>
      <div>
        <Link to="/signup" className="text-white px-4">Signup</Link>
        <Link to="/login" className="text-white px-4">Login</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
