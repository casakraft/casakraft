"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

/* -------------------- DATA -------------------- */
const items = [
{
    title: "Acacia 3 Bedroom Apartment",
    img: "/images/gp-1.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/acacia-3-bedroom-apartment",
    type:"Renovation",
  },
    {
    title: "Bluewaters 3 Bedroom Design",
    img: "/images/gp-2.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/bluewaters-3-bedroom-design",
    type:"Interior",
  },
    {
    title: "Boulevard Point Penthouse",
    img: "/images/gp-3.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/boulevard-point-penthouse",
    type: "Renovation",
  },
    {
    title: "Bulgari 2 Bedroom Apartment",
    img: "/images/gp-4.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/bulgari-2-bedroom-apartment",
    type:"Interior",
  },
    {
    title: "City Walk 3 Bedroom Apartment",
    img: "/images/gp-5.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/city-walk-3-bedroom-apartment",
    type:"Renovation",
  },
    {
    title: "Villa Damac Hills 5 Bedroom",
    img: "/images/gp-6.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/villa-damac-hills-5-bedroom",
    type:"Interior",
  },
    {
    title: "JBR 3 Bedroom Apartment",
    img: "/images/gp-7.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/jbr-3-bedroom-apartment",
    type:"Renovation",
  },
    {
    title: "Marina Gate Penthouse",
    img: "/images/gp-8.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/marina-gate-penthouse",
    type:"Interior",
  },
    {
    title: "Marina Gate Penthouse 2",
    img: "/images/gp-9.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/marina-gate-penthouse-2",
    type:"Renovation",
  },
    {
    title: "Dubai Marina Penthouse",
    img: "/images/dmp-5.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/dubai-marina-penthouse",
    type:"Interior",
  },
    {
    title: "Meadows Contemporary Villa",
    img: "/images/mcv-7.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/meadows-contemporary-villa",
    type:"Renovation",
  },
    {
    title: "Nikki Beach 2 Bedroom Apartment",
    img: "/images/nba-3.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/nikki-beach-2-bedroom-apartment",
    type:"Interior",
  },
    {
    title: "Palm Jumeirah Apartment",
    img: "/images/pja-6.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/palm-jumeirah-apartment",
    type:"Renovation",
  },
      {
    title: "Al Wasl Salon Interior Design",
    img: "/images/aws-4.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/al-wasl-salon-interior-design",
    type:"Interior",
  },
    {
    title: "Dubai Creek 2 Bedroom Apartment",
    img: "/images/dca-4.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/dubai-creek-2-bedroom-apartment",
    type:"Renovation",
  },
    {
    title: "Taj Residence 3 Bedroom Dubai",
    img: "/images/trd-9.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/taj-residence-3-bedroom-dubai",
    type:"Interior",
  },
    {
    title: "Classic Villa Interior Design",
    img: "/images/cvd-6.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/classic-villa-interior-design",
    type:"Renovation",
  },
    {
    title: "Jumeirah Salon Interior Design",
    img: "/images/jsd-4.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/jumeirah-salon-interior-design",
    type:"Renovation",
  },
    {
    title: "Contemporary 2 Bedroom Apartment",
    img: "/images/ca-3.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/contemporary-2-bedroom-apartment",
    type:"Interior",
  },
    {
    title: "Damac Hills 3 Bedroom Townhouse",
    img: "/images/dht-3.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/damac-hills-3-bedroom-townhouse",
    type:"Renovation",
  },
    {
    title: "Villa Lantana",
    img: "/images/vl-11.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/villa-lantana",
    type:"Interior",
  },
    {
    title: "Arabella 2 Townhouse",
    img: "/images/at-8.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/arabella-2-townhouse",
    type:"Renovation",
  },
      {
    title: "Mirdif Hills Apartment",
    img: "/images/mha-5.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/mirdif-hills-apartment",
    type:"Interior",
  },
    {
    title: "Dubai Hills Townhouse",
    img: "/images/tdh-2.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/dubai-hills-townhouse",
    type:"Renovation",
  },
    {
    title: "Best Hotel Interior Design Dubai",
    img: "/images/bhd-9.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/best-hotel-interior-design-dubai",
    type:"Interior",
  },
    {
    title: "Studio Apartment In Milan",
    img: "/images/sam-5.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/studio-apartment-in-milan",
    type:"Renovation",

  },
    {
    title: "Bvlgari One Bedroom Apartment",
    img: "/images/ba-2.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/bvlgari-one-bedroom-apartment",
    type:"Interior",
  },
    {
    title: "Townhouse Arabian Ranches 2",
    img: "/images/tar-5.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/townhouse-arabian-ranches-2",
    type:"Renovation",
  },
    {
    title: "Villa Khawaneej",
    img: "/images/vk-1.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/villa-khawaneej",
    type:"Interior",
  },
    {
    title: "Amfali 4 Bedroom Apartment",
    img: "/images/aa-3.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/amfali-4-bedroom-apartment",
    type:"Renovation",
  },
    {
    title: "Barber Shop Dubai",
    img: "/images/bsd-3.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/barber-shop-dubai",
    type:"Interior",
  },
  {
    title: "Emirates Hills Villa",
    img: "/images/ehv-9.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/emirates-hills-villa",
    type:"Renovation",
  },

  {
    title: "MBR City Villa",
    img: "/images/mbr-4.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/mbr-city-villa",
    type:"Interior",
  },

  {
    title: "Royal Atlantis Apartment",
    img: "/images/atr-3.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/royal-atlantis-apartment",
    type:"Renovation",
  },

  {
    title: "Tilal Al Ghaf Villa",
    img: "/images/tag-7.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/tilal-al-ghaf-villa",
    type:"Interior",
  },

  {
    title: "Dubai Silicon Oasis Apartment",
    img: "/images/dso-6.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/dubai-silicon-oasis-apartment",
    type:"Renovation",
  },

  {
    title: "Palm Jumeirah Villa",
    img: "/images/pjv-10.png", 
    alt: "Arabella 2 Bedroom Townhouse",
    href: "/palm-jumeirah-villa",
    type:"Interior",
  },
];

/* -------------------- COMPONENT -------------------- */

const PProjects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Renovation", "Interior"];

  const filteredItems = useMemo(() => {
    if (activeTab === "All") return items;
    return items.filter((i) => i.type === activeTab);
  }, [activeTab]);

  return (
    <section className="w-full bg-black py-11 sm:py-10 lg:py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* HEADING */}
        <h2 className="uppercase tracking-wide text-3xl sm:text-2xl lg:text-3xl font-semibold text-white">
          Casa Kraft Interior Design Projects
        </h2>

        {/* DECORATION */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <span className="hidden sm:block h-[2px] w-40 bg-white" />
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-white" />
            <span className="w-4 h-4 rounded-full bg-white" />
            <span className="w-4 h-4 rounded-full bg-white" />
          </div>
          <span className="hidden sm:block h-[2px] w-40 bg-white" />
        </div>

        {/* ---------------- FILTER TABS ---------------- */}
        <div className="flex justify-center mt-10 mb-12">
          <div className="flex gap-10 uppercase tracking-[3px] text-xs sm:text-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative text-white/60 hover:text-white transition pb-2"
              >
                {tab}

                {activeTab === tab && (
                  <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ---------------- CARDS ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative block overflow-hidden shadow-md"
            >

              {/* IMAGE */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              </div>

              {/* TEXT OVER IMAGE */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-left">

                {/* TYPE BADGE */}
                <span className="w-fit mb-2 bg-white/20 backdrop-blur text-white text-[10px] uppercase tracking-widest px-3 py-1">
                  {item.type}
                </span>

                {/* TITLE */}
                <h3 className="text-white text-base sm:text-lg font-medium leading-snug">
                  {item.title}
                </h3>

              

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PProjects;

