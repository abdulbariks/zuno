import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 w-11/12 md:w-8/12 bg-white/50 backdrop-blur-sm inset-shadow-2xs shadow px-6 py-3 rounded-md flex items-center justify-between z-50">
      <div className="text-2xl font-bold text-black">zuno</div>
      <ul className="flex items-center space-x-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-black">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-black">
            About
          </Link>
        </li>
        <li>
          <Link to="/feature" className="hover:text-black">
            Features
          </Link>
        </li>
      </ul>
      <Link
        to="/request-demo"
        className="bg-lime-200 hover:bg-lime-300 text-black font-medium px-4 py-2 rounded-md"
      >
        Request demo
      </Link>
    </nav>
  );
};

export default Navbar;
