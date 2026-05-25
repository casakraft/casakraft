"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PHeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/penthouse-interior-design.png"
        alt="Our Gallery – Casa Kraft Interiors"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-20 w-full h-full flex items-center">

        <div className="max-w-xl ml-[8%] lg:ml-[10%] px-6 space-y-2">

          {/* LABEL */}
          <span className="uppercase tracking-[5px] text-xs text-[#4eb5a9]">
            Our Work
          </span>

          {/* TITLE */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight whitespace-nowrap">
  Our Gallery – Casa Kraft  <br />
  Interior & Renovation Works
</h1>
          {/* SUB TEXT (optional but matches luxury feel) */}
          <p className="text-white/70 text-sm sm:text-base max-w-md">
            Explore our premium interior design and renovation projects across Dubai.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap">

            <a
              href="/projects"
              className="bg-[#1f4a45] hover:bg-[#275f58] text-white font-medium px-6 py-3 text-sm transition-all duration-300 inline-block"
            >
              Our Projects
            </a>

            <a
              href="/contact-us"
              className="border border-white hover:bg-white hover:text-black text-white font-medium px-6 py-3 text-sm transition-all duration-300 inline-block"
            >
              Send Enquiry
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PHeroSection;