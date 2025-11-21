"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";


const projects = [
  {
    src: "/images/acacia-4.png",
    title: "Accacia 3 Bedroom Apartment",
    link: "/acacia-3-bedroom-apartment",
  },
  
  {
    src: "/images/bluewaters-2.png",
    title: "Bluewaters 3 Bedroom Design",
  },
  {
    src: "/images/boulevard-5.png",
    title: "Boulevard Point Penthouse",
  },
  {
    src: "/images/bulgari-9.png",
    title: "Bulgari 2 Bedroom Apartment",
  },
  {
    src: "/images/citywalk-7.png",
    title: "City Walk 3 Bedroom Apartment",
  },
  {
    src: "/images/damac-9.png",
    title: "Villa Damac Hills 5 Bedroom",
  },
];

const Portfolio = () => {
  return (
    <section className="bg-[#f5f5f5] py-10 md:py-16">
      {/* === Title === */}
      <h2 className="text-[#c9964a] text-center py-10 text-2xl sm:text-3xl md:text-5xl font-conthrax mb-10">
        CASAKRAFT DESIGN PORTFOLIO
      </h2>


      {/* === Portfolio Grid === */}
      <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Project Image */}
            <Image
              src={project.src}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-white text-lg font-play text-center px-2">
              {project.title}
            </div>
          </div>
        ))}
         <div className="mt-14 flex justify-center ">
          <Link href="/gallery">
            <button className="flex items-center  gap-2 bg-[#b6935b] hover:bg-[#a2814f]  text-white font-conthrax py-3 px-8 rounded-md w-full sm:w-auto transition duration-300">
            BROWSE OUR PORTFOLIO    
            </button>
          </Link>
        </div> 
      </div>
    </section>
  );
};


export default Portfolio;
