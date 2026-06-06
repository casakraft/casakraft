"use client";

import React, { useState } from "react";
import Image from "next/image";


const styles = [
  {
    title: "Modern Bathrooms",
    shortDesc: "Clean lines, floating vanities, and minimalist luxury.",
    image: "/images/luxury modern bathroom renovation in Dubai.png",
    description:
      "Modern bathroom renovations focus on sleek aesthetics, floating vanities, frameless glass showers, concealed storage, and premium finishes. Ideal for apartments and contemporary villas across Dubai."
  },

  {
    title: "Luxury Spa Bathrooms",
    shortDesc: "Hotel-inspired spaces with premium materials.",
    image: "/images/Luxury spa bathroom renovation dubai.png",
    description:
      "Transform your bathroom into a private spa retreat with marble finishes, freestanding bathtubs, rain showers, ambient lighting, and bespoke vanity designs. Perfect for luxury villas and penthouses."
  },

  {
    title: "Contemporary Bathrooms",
    shortDesc: "Elegant designs balancing comfort and functionality.",
    image: "/images/Contemporary bathroom in Dubai.png",
    description:
      "Contemporary bathrooms combine modern materials, sophisticated layouts, and timeless design elements. They offer a refined look while maximizing practicality and everyday comfort."
  },

  {
    title: "Classic Bathrooms",
    shortDesc: "Timeless elegance with traditional detailing.",
    image: "/images/luxury classic bathroom interior in a Dubai.png",
    description:
      "Classic bathroom designs feature decorative mirrors, premium stone surfaces, traditional cabinetry, and elegant fixtures that create a luxurious and timeless atmosphere."
  },

  {
    title: "Small Bathroom Renovations",
    shortDesc: "Smart layouts designed to maximize compact spaces.",
    image: "/images/small bathroom renovation dubai apartment.png",
    description:
      "Perfect for apartments and guest bathrooms, these renovations focus on clever storage solutions, space-saving fixtures, bright finishes, and efficient layouts without compromising style."
  }
];
const DesignV = () => {
  const [activeStyle, setActiveStyle] = useState(styles[0]);

  return (
    <section className="bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          Bathroom Renovation Styles We Provide In Dubai
        </h2>

       <p className="text-center text-white/80 max-w-3xl mx-auto mb-14">
  From luxury spa-inspired bathrooms to modern minimalist spaces, Casa Kraft
  creates bathroom renovations that combine elegance, comfort, and functionality
  for villas, apartments, and penthouses across Dubai.
</p>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Side */}
          <div className="lg:col-span-4">
            <div className="border border-neutral-800">
              {styles.map((style, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStyle(style)}
                  className={`w-full text-left px-6 py-5 transition-all duration-300 border-b border-neutral-800 last:border-b-0 ${
                    activeStyle.title === style.title
                      ? "bg-[#1f4a45] text-white"
                      : "hover:bg-neutral-900 text-white"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">{style.title}</h3>
                    <span className="text-xl">→</span>
                  </div>

                  <p className="text-sm text-white mt-2 leading-relaxed">
                    {style.shortDesc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden">
              <Image
                src={activeStyle.image}
                alt={activeStyle.title}
                width={1200}
                height={800}
                className="w-full h-[300px] md:h-[500px] object-cover"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                {activeStyle.title}
              </h3>

              <p className="text-white leading-relaxed text-base md:text-sm">
                {activeStyle.description}
              </p>
            </div>
          </div>
        </div>
      </div>

     {/* CTA SECTION */}
<div className="w-screen ml-[calc(50%-50vw)] bg-black/80 py-10" >
  <div className="max-w-4xl mx-auto px-4 text-center">

    <h2 className="text-2xl md:text-3xl font-semibold text-white uppercase mb-2">
      Get In Touch With Casa Kraft
    </h2>

    <p className="text-white/80 text-sm md:text-base mb-8">
      Bathroom Interior design & Renovation Company in Dubai
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">

      <a
        href="/gallery"
        className="bg-[#1f5a53] hover:bg-[#276d64] text-white px-6 py-3 text-base transition min-w-[220px]"
      >
        See Our Projects
      </a>

      <a
        href="https://wa.me/971586023677"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[#4eb5a9] text-white hover:bg-[#4eb5a9] hover:text-black px-6 py-3 text-base transition min-w-[220px]"
      >
        WhatsApp Us
      </a>

      <a
        href="/contact-us"
        className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-base transition min-w-[220px]"
      >
        Request Quote
      </a>

    </div>

  </div>
</div>
    </section>
  );
};

export default DesignV;