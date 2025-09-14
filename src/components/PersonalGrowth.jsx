import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
];

const PersonalGrowth = () => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll detector
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 300;
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-10 transition-all duration-500">
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
            className="relative w-[500px] h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            {images.map((src, i) => {
              const angle = (360 / images.length) * i;
              const radius = 220;
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
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <h1 className="text-2xl font-semibold max-w-[200px]">
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
