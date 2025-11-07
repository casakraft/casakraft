"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const VHeroSection = () => {
  return (
    <section className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/trd-1.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Overlay Box */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className=" p-8 text-center max-w-3xl w-[90%]">
          
        </div>
      </div>
    </section>
  );
};

export default VHeroSection;
