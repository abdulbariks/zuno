import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="flex-1 bg-base-100 mb-[80vh] rounded-b-4xl relative z-30">
        <Outlet />
      </div>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
