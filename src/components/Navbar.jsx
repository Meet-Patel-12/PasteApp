import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-gray-800 w-full py-3">
      <div className="flex flex-row justify-evenly">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg font-medium px-6 py-2 rounded-lg transition-colors duration-200 
            ${isActive ? 'bg-blue-600 text-white' : 'text-white hover:bg-gray-500'}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className={({ isActive }) =>
            `text-lg font-medium px-6 py-2 rounded-lg transition-colors duration-200 
            ${isActive ? 'bg-blue-600 text-white' : 'text-white hover:bg-gray-500'}`
          }
        >
          Pastes
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
