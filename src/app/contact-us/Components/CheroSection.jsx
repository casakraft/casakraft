"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CheroSection = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
      {/* 🔹 Background Image */}
      <Image
        src="/images/contact-us.png" // ✅ Replace with your desired image path
        alt="Luxury Interior Design Dubai"
        fill
        className="object-cover"
        priority
      />

      {/* 🔹 Soft overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* 🔹 Centered Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-20">
        <h1 className="text-lg sm:text-xl md:text-4xl lg:text-5xl font-penrise -tracking-normal">
          CONTACT US
        </h1>
     
      </div>

      {/* 🔹 "Our Projects" Button (bottom-left corner) */}
      <div className="absolute bottom-10 left-10 z-20">
        <Link
          href="/projects"
          className="bg-white/90 text-black text-sm md:text-base px-4 md:px-8 py-3 rounded-md shadow-md hover:bg-[#193c38] hover:text-white transition-all duration-300"
        >
          Our Projects
        </Link>
      </div>
    </div>
  );
};

export default CheroSection;
