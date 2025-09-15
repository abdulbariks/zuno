import React from "react";

const FeelMoreHuman = () => {
  return (
    <div className="relative rounded-xl w-11/12 md:10/12 mx-auto h-[80vh] my-16">
      <img
        src="https://i.ibb.co.com/5gv48drm/Capture5.png"
        alt="Relaxed woman looking up"
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 rounded-xl p-6 max-w-xs shadow-lg">
        <div className="w-10/12 mx-auto">
          <button className="bg-gray-300 py-1 px-5 rounded-3xl">
            Personal Growth
          </button>
          <h2 className="text-2xl font-bold mt-5">Feel more human every day</h2>
        </div>
      </div>
    </div>
  );
};

export default FeelMoreHuman;
