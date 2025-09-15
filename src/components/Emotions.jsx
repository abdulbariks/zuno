import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://i.ibb.co.com/1GDfMrXL/67f89444d1d997a80bbd9c44-bg-cloud-61-p-1600.webp",
  "https://i.ibb.co.com/Mkc1G1tb/67ee1b85995266773abd081b-img-01.jpg",
  "https://i.ibb.co.com/DXGzd7R/67f7e0d700996d64eb9d235c-bg-cloud-51.jpg",
  "https://i.ibb.co.com/7tXD1nDQ/67f7ee6f6bc08ecfebcddf85-bg-cloud-55.jpg",
  "https://i.ibb.co.com/xSSX46qd/67eb1a0a4bd9bc20eac17b0e-Chat-GPT-Image-31-de-mar-de-2025-19-20-50.jpg",
  "https://i.ibb.co.com/Y7Ck83V2/67eb2202ed6a24da2fa19fda-Chat-GPT-Image-31-de-mar-de-2025-20-12-59.jpg",
  "https://i.ibb.co.com/1GDfMrXL/67f89444d1d997a80bbd9c44-bg-cloud-61-p-1600.webp",
  "https://i.ibb.co.com/Mkc1G1tb/67ee1b85995266773abd081b-img-01.jpg",
  "https://i.ibb.co.com/DXGzd7R/67f7e0d700996d64eb9d235c-bg-cloud-51.jpg",
  "https://i.ibb.co.com/7tXD1nDQ/67f7ee6f6bc08ecfebcddf85-bg-cloud-55.jpg",
];

const Emotions = () => {
  const refs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      refs.current.forEach((ref, i) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;
          if (scrollY > offsetTop && scrollY < offsetTop + rect.height) {
            setActiveIndex(i);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 px-4 space-y-4">
      {images.map((img, i) => (
        <motion.div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className="relative w-full overflow-hidden rounded-xl"
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: activeIndex === i ? 1.05 : 1,
            zIndex: activeIndex === i ? 10 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={img}
            alt={`image-${i}`}
            className={`w-full h-[300px] transition-all duration-500 rounded-xl shadow-lg ${
              activeIndex === i
                ? "fixed inset-0 w-screen h-screen object-cover z-50"
                : ""
            }`}
          />

          {/* Optional text overlay */}
          {activeIndex === i && (
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <h2 className="text-white text-4xl font-bold">
                AI that understands you
              </h2>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Emotions;
