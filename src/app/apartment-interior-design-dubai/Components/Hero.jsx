"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/acacia-5.png"
        alt="interior design"
        width={1920}
        height={1080}
        priority
        className="object-cover w-full h-full"
      />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 " />
{/* TEXT BLOCK */}
<div
  className="
    absolute 
    bg-gradient-to-r from-black/70 via-black/50 to-transparent 
    z-20 left-4 md:left-10 top-1/2 -translate-y-1/3 text-white max-w-xl

    /* ⭐ NEW — adds spacing inside the overlay */
    p-4 md:p-6 

    /* ⭐ NEW — adds rounded visual softness */
    rounded-lg

    /* ⭐ NEW — optional shadow for more premium look */
    shadow-lg shadow-black/30
  "
>


  <h1 className="text-xl md:text-3xl lg:text-5xl font-conthrax leading-snug mb-4">
    APARTMENT INTERIOR <br />
    DESIGN <span className="">DUBAI</span> <br />
  </h1>

  <p className="text-xs md:text-sm font-play mb-6 opacity-90">
    Experience the Perfect Blend of <br />
    Creativity and Functionality with Us
  </p>

  <Link
    href="/contact-us"
    className="inline-flex items-center gap-2 bg-[#193c38] text-white px-5 py-3 text-xs md:text-sm font-semibold uppercase rounded-full hover:bg-white transition hover:text-black"
  >
    Request a Call Back →
  </Link>
</div>

    </div>
  );
};

export default Hero;
