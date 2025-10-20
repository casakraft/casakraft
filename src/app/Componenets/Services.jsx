"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Villa Design Dubai", image: "/images/villa-design.png" },
  { title: "Apartment Design", image: "/images/apartment-design.png" },
  { title: "Penthouse Interior", image: "/images/penthouse-design.png" },
  { title: "Kitchen Design", image: "/images/kitchen-design.png" },
  { title: "Beach Front Design", image: "/images/beach-front-design.png" },
  { title: "Landscape Design", image: "/images/landscape-design.png" },
  { title: "Villa Renovation", image: "/images/villa-renovation.png" },
  { title: "Apartment Renovation", image: "/images/apartment-renovation.png" },
  
];

const Services = () => {
  return (
    <section className="bg-[#f6f6f6] py-16">
      {/* Title */}
      <h2 className="text-center text-[#c79d63] font-semibold text-2xl sm:text-3xl md:text-4xl mb-10">
        Our Most Demanding Services In Dubai
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%] sm:w-[85%] mx-auto">
        {services.map((service, index) => (
          <Link
            href="#"
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="relative w-full h-48 md:h-56 lg:h-60">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-black font-semibold text-sm md:text-base">
                {service.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
