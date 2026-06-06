"use client";

import React, { useState } from "react";
import Image from "next/image";


const styles = [
  {
    title: "Modern / Contemporary",
    shortDesc: "Minimalist layouts with clean lines and smart storage.",
    image: "/images/c modern contemporary kitchen interior.png",
    description:
      "Modern kitchens focus on simplicity, functionality, and elegance. Featuring sleek cabinetry, integrated appliances, and clutter-free layouts, this style is perfect for homeowners seeking a contemporary look that complements Dubai's modern lifestyle.",
  },
  {
    title: "Traditional / Classic",
    shortDesc: "Premium finishes, marble surfaces, and bespoke cabinetry.",
    image: "/images/classic luxury kitchen interior in Dubai villa.png",
    description:
      "Luxury kitchens combine sophisticated materials, custom cabinetry, marble countertops, and high-end appliances to create an exceptional cooking and entertaining experience. Ideal for villas and premium residences across Dubai.",
  },
  {
    title: "Outdoor Kitchens",
    shortDesc: "Timeless elegance inspired by traditional craftsmanship.",
    image: "/images/luxury outdoor kitchen in a premium Dubai villa.png",
    description:
      "Classic kitchen designs feature decorative cabinetry, rich textures, elegant detailing, and warm finishes. This timeless style adds character and charm while maintaining practicality for everyday use.",
  },
  {
    title: "Industrial Kitchen",
    shortDesc: "Integrated living and dining spaces for modern lifestyles.",
    image: "/images/luxury commercial industrial kitchen in Dubai.png",
    description:
      "Open-concept kitchens create a seamless connection between cooking, dining, and living areas. This layout maximizes space, improves natural light flow, and encourages family interaction and entertaining.",
  },
  {
    title: "Open-Plan Kitchens",
    shortDesc: "Space-efficient designs that maximize every square foot.",
    image: "/images/open plan luxury apartment kitchen in Dubai.png",
    description:
      "Small kitchen renovations focus on smart storage, efficient layouts, and custom solutions that make the most of limited space. Perfect for apartments and compact homes without sacrificing style or functionality.",
  },
];

const DesignV = () => {
  const [activeStyle, setActiveStyle] = useState(styles[0]);

  return (
    <section className="bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          Kitchen Renovation Styles We Provide In Dubai
        </h2>

        <p className="text-center text-white max-w-3xl mx-auto mb-14">
          From modern minimalist kitchens to luxurious custom-made spaces, Casa
          Kraft designs kitchens that reflect your lifestyle while maximizing
          functionality and aesthetics.
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
      Kitchen Interior design & Renovation Company in Dubai
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