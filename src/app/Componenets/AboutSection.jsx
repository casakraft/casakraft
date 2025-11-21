"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="bg-[#f8f8f8] py-10 sm:py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-10">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/Top_Interior_Design_Firm_For_Apartments_And_Villas_In_Dubai.png"
            alt="Interior Design Dubai"
            width={800}
            height={600}
            className="w-full h-100 rounded-lg shadow-md"
          />
        </div>

      

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[#c68b4e] text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
            Top Interior Design Firm for Apartments & Villas in Dubai
          </h2>

          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Casa Kraft Interiors and Decoration is a <b className="text-[#c68b4e]"><a href="https://www.casakraftinteriors.ae/#services">leading residential interior design company in Dubai</a></b> which specializes 
            in luxury apartment and villa design, home interior design, landscape design Dubai, and turnkey interior fit-out 
            services in Dubai. 
          </p>



          <p className="text-gray-700 text-sm sm:text-base mb-4">
            As one of the most trusted interior companies in Dubai, Casa Kraft interiors 
            create elegant, functional, and personalized spaces that reflect the modern
             living style of Dubai. <br /> <br />
             Our team of expert designers and fit-out specialists deliver high-quality results from concept to completion, making us a best choice for homeowners seeking interior design Dubai, luxury residential interiors, and professional interior fit-out Dubai services.

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
      </div>
    </section>
  );
};

export default AboutSection;
