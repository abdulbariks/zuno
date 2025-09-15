import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="relative z-40">
        <Navbar />
      </div>
      <div className="flex-1 bg-base-100 mb-[80vh] rounded-b-4xl relative z-30">
        <Outlet />
      </div>
      <div className="relative z-20">
        <Footer />
      </div>
      <button className="fixed bottom-6 right-6 bg-white z-50 px-4 py-2 rounded-md font-semibold shadow">
        Get 50% OFF
      </button>
    </div>
  );
};

export default MainLayout;
