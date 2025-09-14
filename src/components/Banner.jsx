import React from "react";
const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <p className="">Personal Growth</p>
      <h2 className="text-8xl font-bold text-center py-10">
        Feel more <br /> human every day
      </h2>
      <button className="bg-lime-200 hover:bg-lime-300 font-bold text-2xl py-4 px-6 rounded-full">
        Request demo
      </button>
    </div>
  );
};

export default Banner;
