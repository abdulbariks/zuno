import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const images = [
  "https://i.ibb.co.com/6c2bfw3Q/67f89444d1d997a80bbd9c44-bg-cloud-61-1.jpg",
  "https://i.ibb.co.com/Mkc1G1tb/67ee1b85995266773abd081b-img-01.jpg",
  "https://i.ibb.co.com/Xk5460d4/67f9c6586f1024288c4e6ed8-bg-cloud-64.jpg",
  "https://i.ibb.co.com/Y7WMZxPW/67f7f5b376f614a742795320-bg-cloud-59.jpg",
];

const Payments = () => {
  const allImages = [...images, ...images];

  return (
    <div className="w-11/12 md:w-10/12 mx-auto ">
      <div className="grid grid-cols-2 grid-rows-3 gap-4 p-6 bg-white">
        <div className="row-span-3">
          <img
            src="https://i.ibb.co/QFW5QDtv/67fd3b3b64ef722b8bd2b5c4-bg-cloud-77.jpg"
            alt="Main visual"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="row-span-2 overflow-hidden bg-gray-100 rounded-xl shadow-md">
          <div className="w-10/12 mx-auto mt-16">
            <button className="bg-gray-300 py-1 px-5 rounded-3xl">
              Ready to automate?
            </button>
            <h2 className="text-4xl font-bold mt-5">
              Stay on top of your recurring payments with ease
            </h2>
          </div>
        </div>
        <div className="row-span-1 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 10,
              repeat: Infinity,
            }}
          >
            {allImages.map((img, i) => (
              <div
                key={i}
                className="w-[200px] h-[200px] flex-shrink-0 rounded-xl overflow-hidden shadow"
              >
                <img
                  src={img}
                  alt={`image-${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
