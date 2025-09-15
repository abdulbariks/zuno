import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "https://i.ibb.co.com/1tCDLYQ6/67ecae62618ad39b905b8ec9-mh-square.jpg",
  "https://i.ibb.co.com/nqwKxG63/67f1ee4caf6e43269d97b514-bg-cloud-16-p-1600.webp",
  "https://i.ibb.co.com/CKy9w242/67f1f28ebca5528238342ea0-bg-cloud-20.jpg",
  "https://i.ibb.co.com/VYMzrz2X/67f1eff7704d86833488bc4e-bg-cloud-17.jpg",
  "https://i.ibb.co.com/YFwGprv4/67eb223bbf4303942de155e6-Chat-GPT-Image-31-de-mar-de-2025-20-15-50.jpg",
];
const Wellness = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  return (
    <div className="h-[200vh] bg-gray-100">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          ref={scrollRef}
          style={{ x }}
          className="flex gap-4 px-10 items-center"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="w-[300px] h-[400px] flex-shrink-0 rounded-3xl overflow-hidden shadow-md"
            >
              <img
                src={img}
                alt={`wellness-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="w-[500px] h-[400px] flex-shrink-0 flex items-center text-7xl font-bold text-gray-800 leading-tight">
            Your mental wellness journey starts now
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Wellness;
