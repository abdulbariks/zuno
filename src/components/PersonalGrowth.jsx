import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://i.ibb.co.com/W4tWJVf0/67f75435261184f880702d40-bg-cloud-43.jpg",
  "https://i.ibb.co.com/1fshHB84/67f896ecf9932c23507a4961-bg-cloud-62.jpg",
  "https://i.ibb.co.com/RTvmsTJg/67f9d38f41d04e272a8d2926-bg-cloud-66.jpg",
  "https://i.ibb.co.com/k23bCVV5/67fd38497b98d7e4fade0fe9-bg-cloud-78.jpg",
  "https://i.ibb.co.com/Y7WMZxPW/67f7f5b376f614a742795320-bg-cloud-59.jpg",
  "https://i.ibb.co.com/1GDfMrXL/67f89444d1d997a80bbd9c44-bg-cloud-61-p-1600.webp",
  "https://i.ibb.co.com/Mkc1G1tb/67ee1b85995266773abd081b-img-01.jpg",
  "https://i.ibb.co.com/DXGzd7R/67f7e0d700996d64eb9d235c-bg-cloud-51.jpg",
  "https://i.ibb.co.com/7tXD1nDQ/67f7ee6f6bc08ecfebcddf85-bg-cloud-55.jpg",
  "https://i.ibb.co.com/xSSX46qd/67eb1a0a4bd9bc20eac17b0e-Chat-GPT-Image-31-de-mar-de-2025-19-20-50.jpg",
  "https://i.ibb.co.com/Y7Ck83V2/67eb2202ed6a24da2fa19fda-Chat-GPT-Image-31-de-mar-de-2025-20-12-59.jpg",
  "https://i.ibb.co.com/8Dd9vGv7/67f9d1918a5e58f63b70f875-8cf9752d885baa80e26ad73cbe4f0344.jpg",
  "https://i.ibb.co.com/27RsdR5Q/67f7e0a2f0f48f88d3a1176f-close-up-nerves-yellow-leaf-p-1600.webp",
  "https://i.ibb.co.com/svgqnBTd/67f7dd03f980a473e4e9ff40-bg-cloud-49-p-1600.jpg",
];

const PersonalGrowth = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 300;
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex items-center justify-center py-32 transition-all duration-500">
      <AnimatePresence>
        {!scrolled ? (
          <motion.div
            key="row"
            className="flex gap-6 overflow-x-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Image ${i}`}
                className="w-40 h-40 rounded-xl object-cover flex-shrink-0"
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="circle"
            className="relative hidden md:block w-[500px] h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            {images.map((src, i) => {
              const angle = (360 / images.length) * i;
              const radius = 300;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <motion.img
                  key={i}
                  src={src}
                  alt={`Circle Image ${i}`}
                  className="absolute w-24 h-24 rounded-xl object-cover"
                  style={{
                    top: `calc(50% + ${y}px - 48px)`,
                    left: `calc(50% + ${x}px - 48px)`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                />
              );
            })}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <button className="bg-gray-300 dark:bg-gray-700 dark:text-white py-1 px-5 rounded-3xl my-10">
                Personal Growth
              </button>
              <h1 className="text-3xl font-bold w-8/12 mx-auto ">
                A gentle space to understand yourself
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PersonalGrowth;
