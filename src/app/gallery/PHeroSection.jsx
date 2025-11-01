"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const PHeroSection = () => {
  return (
    <section className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/adh (3).webp"
        alt="Our Gallery – Casa Kraft Interiors"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay Box */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black/40 border-4 border-white p-8 text-center max-w-3xl w-[90%]">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Our Gallery – Casa Kraft Interiors
          </h1>
          <Link
            href="/contact-us"
            className="inline-block text-white border border-white px-6 py-3 text-base sm:text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            Send Enquiry Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PHeroSection;
