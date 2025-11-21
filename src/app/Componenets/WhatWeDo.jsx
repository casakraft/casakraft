"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="bg-[#f8f8f8] py-10 sm:py-5">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-10">
        {/* Left Side - Image */}
        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[#c68b4e] text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
           Residential Interior Design Services in Dubai
          </h2>

          <p className="text-gray-700 text-sm sm:text-base mb-4">
           <b> Casa Kraft Interiors and Decoration company</b> offer premium residential interior design, interior fit-out, 
            apartment or villa Renovation and landscape design services across Dubai, delivering complete home 
            transformations with exceptional craftsmanship
          </p>

          <p className="text-gray-700 text-sm sm:text-base mb-4">
            As one of the best interior fit out companies in Dubai and a trusted Dubai interior design company, 
            our services include villa interior design, apartment interior design, home interiors, and outdoor 
            landscape designs. <br /><br />
          
           Whether you need luxury interior decoration, room interior design, or full turnkey execution, CasaKraft
          Interiors provides creative, functional, and high-quality solutions tailored to modern Dubai living. <br/> <br/>
          </p>


          {/* Buttons */}
       <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
    <Link href="/gallery">
    <button className="border border-black px-6 py-3 text-black font-medium hover:bg-[#193c38] hover:text-white transition">
      See Our Projects
    </button>
  </Link>

  <Link href="/contact-us">
    <button className="border border-black px-6 py-3 text-black font-medium hover:bg-[#193c38] hover:text-white transition">
      Free Consultation
    </button>
  </Link>
  
 </div>

        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/jbr-2.png"
            alt="Interior Design Dubai"
            width={800}
            height={600}
            className="w-full h-100 rounded-lg shadow-md"
          />
        </div>
        
      </div>
      
    </section>

    
  );
  
};

export default AboutSection;
