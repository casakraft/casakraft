"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-auto md:h-[500px] lg:h-[550px] overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/villa-design-dubai.png"
        alt="interior design"
        width={1920}
        height={1080}
        priority
        className="object-cover w-full h-full absolute inset-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* MAIN WRAPPER */}
      <div className="relative mt-10 z-20 flex flex-col lg:flex-row items-center justify-between w-full h-full px-4 md:px-10 lg:px-20 py-10 gap-8">

        {/* LEFT SIDE */}
        <div className="text-white/80 max-w-xl">
          

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Kitchen Renovation Dubai
          </h1>

          <p className="text-xs md:text-sm font-play mt-4 mb-6 opacity-90">
           Upgrade your kitchen with modern design, smart storage solutions, and premium finishes.
           Casa Kraft create elegant, functional, and customized kitchen spaces tailored to your lifestyle in Dubai.
          </p>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-[#193c38] text-white/80 px-5 py-3 text-xs md:text-sm font-semibold uppercase rounded-full hover:bg-white hover:text-black transition"
          >
            Request a Call Back →
          </Link>
        </div>

        {/* RIGHT FORM */}
      
<div className="w-full max-w-sm mt-10 bg-white shadow-2xl p-3 md:p-10">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

    {/* First Name */}
    <div>
      <label className="text-[10px] font-medium">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        className="w-full mt-1 p-2 text-xs bg-gray-100 rounded-md outline-none border border-transparent focus:ring-0 focus:border-[#1f4a45]"
      />
    </div>

    {/* Last Name */}
    <div>
      <label className="text-[10px] font-medium">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        className="w-full mt-1 p-2 text-xs bg-gray-100 rounded-md outline-none border border-transparent focus:ring-0 focus:border-[#1f4a45]"
      />
    </div>

    {/* Email */}
    <div>
      <label className="text-[10px] font-medium">Email</label>
      <input
        type="email"
        placeholder="Email"
        className="w-full mt-1 p-2 text-xs bg-gray-100 rounded-md outline-none border border-transparent focus:ring-0 focus:border-[#1f4a45]"
      />
    </div>

    {/* Phone */}
    <div>
      <label className="text-[10px] font-medium">Phone</label>
      <input
        type="text"
        placeholder="Phone"
        className="w-full mt-1 p-2 text-xs bg-gray-100 rounded-md outline-none border border-transparent focus:ring-0 focus:border-[#1f4a45]"
      />
    </div>

  </div>

  {/* Description */}
  <div className="mt-2">
    <label className="text-[10px] font-medium">Description</label>
    <textarea
      rows={2}
      placeholder="Write your message..."
      className="w-full mt-1 p-2 text-xs bg-gray-100 rounded-md outline-none border border-transparent focus:ring-0 focus:border-[#1f4a45]"
    />
  </div>

  {/* Button */}
  <button className="w-full mt-3 bg-[#1f4a45] hover:bg-[#275f58] text-white/80 py-2 rounded-md font-semibold text-xs transition">
    Get Started
  </button>

</div>
      </div>
    </div>
  );
};

export default Hero;