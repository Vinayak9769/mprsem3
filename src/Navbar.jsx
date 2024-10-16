import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-md flex">
      <div className="text-3xl justify-around pt-3 font-extrabold text-white">
        STATISCRIC
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-evenly">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="hidden sm:-my-px sm:flex mt-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 px-3 py-4 text-md font-medium'
                    : 'text-gray-300 hover:text-blue-400 px-3 py-4 text-md font-medium'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/find-matches"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 px-3 py-4 text-md font-medium'
                    : 'text-gray-300 hover:text-blue-400 px-3 py-4 text-md font-medium'
                }
              >
                Find Matches
              </NavLink>
              <NavLink
                to="/compare-players"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 px-3 py-4 text-md font-medium'
                    : 'text-gray-300 hover:text-blue-400 px-3 py-4 text-md font-medium'
                }
              >
                Compare Players
              </NavLink>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 px-3 py-4 text-md font-medium'
                    : 'text-gray-300 hover:text-blue-400 px-3 py-4 text-md font-medium'
                }
              >
                News
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400 px-3 py-4 text-md font-medium'
                    : 'text-gray-300 hover:text-blue-400 px-3 py-4 text-md font-medium'
                }
              >
                About
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
