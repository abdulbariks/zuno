import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <div className="relative z-40">
        <Navbar />
      </div>

      {/* Page content */}
      <div className="flex-1 bg-base-100 w-full dark:bg-gray-800 mb-[80vh] rounded-b-4xl relative z-30">
        <Outlet />
      </div>

      {/* Footer */}
      <div className="relative z-20">
        <Footer />
      </div>

      {/* Floating Offer Button */}
      <button className="fixed bottom-6 right-6 bg-white dark:bg-gray-700 dark:text-white z-50 px-4 py-2 rounded-md font-semibold shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition">
        Get 50% OFF
      </button>
    </div>
  );
};

export default MainLayout;
