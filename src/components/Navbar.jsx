import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 w-11/12 md:w-8/12 mx-auto backdrop-blur-sm inset-shadow-2xs shadow px-6 py-3 rounded-md flex items-center justify-between bg-white/70 dark:bg-gray-900/70">
      <div className="text-2xl font-bold text-black dark:text-white">zuno</div>
      <ul className="flex items-center space-x-6 text-gray-700 dark:text-gray-300 font-medium">
        <li>
          <Link to="/" className="hover:text-black dark:hover:text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-black dark:hover:text-white">
            About
          </Link>
        </li>
        <li>
          <Link
            to="/feature"
            className="hover:text-black dark:hover:text-white"
          >
            Features
          </Link>
        </li>
      </ul>
      <Link
        to="/request-demo"
        className="bg-lime-200 hover:bg-lime-300 text-black dark:bg-lime-400 dark:hover:bg-lime-500 dark:text-gray-900 font-medium px-4 py-2 rounded-md"
      >
        Request demo
      </Link>
    </nav>
  );
};

export default Navbar;
