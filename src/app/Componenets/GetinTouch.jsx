"use client";

import React from "react";
import { FaCheckCircle, FaEnvelope } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className="bg-[#e6e6e6] py-16 px-4 text-center">
      {/* 🔹 Heading */}
      <h2 className="text-[26px] sm:text-[32px] font-bold mb-2">
        <span className="text-black">GET</span>{" "}
        <span className="text-[#c8a56a]">IN TOUCH WITH US</span>
      </h2>

      {/* 🔹 Subtext */}
      <p className="text-black text-base mb-10">
        WE ARE LOCATED ON SHEIKH ZAYED ROAD
      </p>

      {/* 🔹 Buttons Container */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Button 1 */}
        <button className="flex items-center justify-center gap-2 bg-[#67bb74] hover:bg-[#57a464] text-white font-semibold py-3 px-8 rounded-md w-full sm:w-auto transition duration-300">
          <FaCheckCircle className="text-white text-lg" />
          See Our Projects
        </button>

        {/* Button 2 */}
        <button className="flex items-center justify-center gap-2 bg-[#67bb74] hover:bg-[#57a464] text-white font-semibold py-3 px-8 rounded-md w-full sm:w-auto transition duration-300">
          <FaCheckCircle className="text-white text-lg" />
          Request availability by WhatsApp
        </button>

        {/* Button 3 */}
        <button className="flex items-center justify-center gap-2 bg-[#b6935b] hover:bg-[#a2814f] text-white font-semibold py-3 px-8 rounded-md w-full sm:w-auto transition duration-300">
          <FaEnvelope className="text-white text-lg" />
          Request availability by E-mail
        </button>
      </div>
    </section>
  );
};

export default GetInTouch;
