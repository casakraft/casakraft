"use client";

import React from "react";
import Image from "next/image";

const PHeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/pjv-1.png"
        alt="Luxury Interior Design Dubai in palm jumeirah"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center h-full">
        <div className="max-w-6xl px-6 md:px-16 text-white">
          
          

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-4xl font-conthrax leading-tight">
           Interior Design Company in <br />Palm Jumeirah, Dubai
          </h1>

          {/* Subheading */}
          <p className="font-play mt-6  max-w-2xl text-gray-200">
           Interior design company in Palm Jumeirah. We offer bespoke interiors, renovation services across Dubai. Call Now.</p>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-[#b98877] hover:bg-[#b88f83] text-black font-conthrax px-6 py-3 rounded-md transition duration-300">
             <a href="https://casakraftinteriors.ae/gallery">Our Palm Jumeirah Projects</a> 
            </button>
          </div>

        </div>
      </div>

      

    </section>
  );
};

export default PHeroSection;
