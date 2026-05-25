"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CheroSection = () => {
  return (
    <div className="w-full">

      {/* CONTACT HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/damac-11.png"
          alt="Contact Hero"
          fill
          priority
          className="object-cover scale-105"
        />

        {/* OVERLAY (FIXED VISIBILITY) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="relative z-20 w-full h-full flex items-center">

          <div className="max-w-xl ml-[8%] lg:ml-[10%] px-6 space-y-2">

            {/* LABEL */}
            <span className="uppercase tracking-[5px] text-xs text-[#4eb5a9]">
              Get In Touch
            </span>

           
            {/* BUTTONS */}
            <div className="mt-8 flex gap-4 flex-wrap">

              <a
                href="/projects"
                className="bg-[#1f4a45] hover:bg-[#275f58] text-white font-medium px-6 py-3 text-sm transition-all duration-300 inline-block"
              >
                Our Projects
              </a>

              <a
                href="/gallery"
                className="border border-white hover:bg-white hover:text-black text-white font-medium px-6 py-3 text-sm transition-all duration-300 inline-block"
              >
                View Gallery
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default CheroSection;