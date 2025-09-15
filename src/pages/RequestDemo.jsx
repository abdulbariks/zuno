import React from "react";

const RequestDemo = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-10 py-10">
      <div className="flex flex-col items-center justify-center mt-10">
        <button className="bg-gray-300 py-1 px-5 rounded-3xl">
          Get Started with Zuno
        </button>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center py-5">
          Request Demo
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-10 p">
        <div className="flex-1 relative rounded-xl overflow-hidden shadow-lg bg-black text-white">
          <img
            src="https://i.ibb.co.com/212DsD5g/68066b078c4706728146b49d-bg-cloud-85-p-1600.webp"
            alt="Testimonial"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-opacity-50 p-8 flex flex-col justify-end">
            <div className="mb-6">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.05 9.4c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-semibold">Exactly what I needed</p>
              <p className="mt-2 text-xs">
                Zuno helped me break the cycle of stress and burnout. I've tried
                countless wellness apps, but this one actually listens. The AI
                check-in feel personal and the sleep support made a real
                difference.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold">Annandac</p>
                <p className="text-xs text-gray-300">
                  UX Designer, San Francisco
                </p>
              </div>
            </div>
          </div>
        </div>
        <form className="flex-1 bg-white rounded-xl p-8 shadow-lg space-y-5">
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                className="block text-xs font-medium mb-1"
                htmlFor="firstName"
              >
                First name*
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-xs font-medium mb-1"
                htmlFor="lastName"
              >
                Last name*
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label
                className="block text-xs font-medium mb-1"
                htmlFor="companyName"
              >
                Company name
              </label>
              <input
                id="companyName"
                type="text"
                placeholder=""
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-xs font-medium mb-1"
                htmlFor="jobTitle"
              >
                Job title
              </label>
              <input
                id="jobTitle"
                type="text"
                placeholder=""
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-xs font-medium mb-1"
              htmlFor="workEmail"
            >
              Work email*
            </label>
            <input
              id="workEmail"
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label
              className="block text-xs font-medium mb-1"
              htmlFor="phoneNumber"
            >
              Phone number*
            </label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="(555) 5555"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label
              className="block text-xs font-medium mb-1"
              htmlFor="industry"
            >
              How did you hear about us?*
            </label>
            <select
              id="industry"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select industry
              </option>
              <option>Tech</option>
              <option>Health</option>
              <option>Finance</option>
              <option>Education</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Example Text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-300 rounded-md py-2 font-semibold hover:bg-green-400 transition"
          >
            Let's talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestDemo;
