import React from "react";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/logo.svg";
const Footer = () => {
  return (
    <section className="bg-[#173431] h-[100vh] fixed bottom-0">
      <div className="w-11/12 mx-auto">
        <img className="w-10/12 mx-auto" src={logo} alt="" />
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
          <div className="flex flex-col items-start text-white">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-2xl font-bold">Zuno</h2>
            </div>
          </div>
          <div className="grid grid-cols-3 ">
            {" "}
            <div className="text-white">
              <h4 className="text-green-200 font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>About Zuno</li>
                <li>Learn</li>
              </ul>
            </div>
            <div className="text-white">
              <h4 className="text-green-200 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="text-white">
              <h4 className=" text-green-200 font-semibold mb-4">Follow us</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Instagram</li>
                <li>TikTok</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>

          <div className=" text-gray-300 rounded-lg max-w-sm">
            <h2 className="text-lg font-medium text-green-200 mb-4">
              Newsletter
            </h2>

            <div className="flex items-center border border-blue-400 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-3 py-4 text-sm text-gray-200 bg-transparent focus:outline-none"
              />
              <button className="px-4 text-gray-200 hover:text-blue-300">
                <FaArrowRight />
              </button>
            </div>

            <p className="text-sm text-gray-400 mt-3">
              We only share your information in accordance with our privacy
              policy.
            </p>
          </div>
        </div>
        <div className="border-t border-green-200 text-sm text-gray-300">
          <p className="py-8">
            Nullam quis risus eget urna mollis ornare vel eu leo. Integer
            posuere erat a ante venenatis dapibus posuere velit aliquet. Duis
            mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra
            augue.. © Zuno 2025. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
