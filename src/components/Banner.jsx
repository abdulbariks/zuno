import React from "react";
const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 z-50">
      <div className="flex flex-col items-center justify-center mt-10">
        <button className="bg-gray-300 py-1 px-5 rounded-3xl">
          Personal Growth
        </button>
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center py-10">
          Feel more <br /> human every day
        </h2>
      </div>
      <button className="bg-lime-200 hover:bg-lime-300 font-bold text-2xl py-4 px-6 rounded-full">
        Request demo
      </button>
    </div>
  );
};

export default Banner;
