'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { value: "8+", label: "Trusted Years" },
  { value: "100+", label: "Employees" },
  { value: "200+", label: "Residential Projects" },
  { value: "50+", label: "Commercial Fit-Outs" },
];

const services = [
  
 
  {
    title: "→ Full Bathroom Renovation & Remodeling",
    desc: "Being one of the best bathroom renovation companies in Dubai, at Casa Kraft Interiors, we provide our clients with a full bathroom renovation service in Dubai, including villa bathroom renovations and bathroom renovations for apartments. Whether you require bathroom remodel in Dubai or require a luxury bathroom renovation company in Dubai, our company is committed to providing a level of excellence. We manage every detail, from plumbing upgrades and tiling to installing bathroom fitout contractors Dubai solutions for cabinets, vanities, and shower enclosures."
  },
  {
    title: "→ Partial Bathroom Renovation & Upgrades",
    desc: "As a service for our customers, we offer a bathroom renovation in Dubai solution which includes the installation, renovation, and upgrade of bathroom fixtures, tiles, as well as bathroom vanity renovation in Dubai. Our bathroom remodeling companies in Dubai are experts in transforming old bathrooms into functional, modern, and trendy bathrooms, regardless of whether it is in a small apartment or villa bathroom."
  },
  {
    title: "→  Luxury Bathroom Renovation",
    desc: "At Casa Kraft Interiors, we are known as one of the best bathroom design Dubai service providers for our customers who require a design that exudes elegance, functionality and class. The provision of our luxury bathroom renovation Dubai service for villas and apartments located at Palm Jumeirah, Emirates Hills, Dubai Marina and Jumeirah ensures that our customers receive expert bathroom design and installations Casa Kraft Interiors is one of the best bathroom design Dubai companies for those seeking elegance, functionality and style."
  },
 
];

const ApId = () => {
  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans">
      <div className="mx-auto flex flex-col gap-10">

        {/* TRUST BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center border border-white/10 bg-[#111] py-4 px-3 rounded-md hover:border-[#4eb5a9]/40 transition"
            >
              <p className="text-3xl font-semibold text-[#4eb5a9]">
                {item.value}
              </p>

              <p className="text-xs text-white/60 mt-1 uppercase tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
 {/* HEADING */}
              <h2 className="text-3xl md:text-4xl font-semibold text-white text-center ">
       Luxury Bathroom Renovation Dubai
        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
        Casa Kraft Interiors is one of the most reliable bathroom renovation contractors Dubai, and we provide the best bathroom renovations and bathroom remodeling Dubai. Whether it be a bathroom remodeling Dubai or bathroom renovation Dubai, we provide the best bathroom facilities that include a modern bathroom design and bathroom fittings that are best suitable to the bathroom design. If you are looking to get a luxury bathroom renovation Palm Jumeirah, bathroom renovation Downtown Dubai , or bathroom renovation Dubai, then just contact us and get the best bathroom remodeling.
        </p>

        {/* HEADING */}
         <h2 className="text-3xl md:text-4xl font-semibold text-white text-center ">
         Our Bathroom Renovation Services in Dubai
        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
         The bathroom renovation Dubai solutions we provide at Casa Kraft Interior cover all aspects of a bathroom redesign and make us one of the best providers of bathroom renovation Dubai services. Beginning from designing to execution and comprising all activities such as flooring, tiling, fixtures, cabinets, and lights of a bathroom renovation and fit-out process, Casa Kraft Interior is known to be a bathroom renovation company offering a perfect mix of design and functionality to every bathroom makeover project.
        </p>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/10 p-5 rounded-md hover:border-[#4eb5a9]/40 transition"
            >
              <h3 className="text-[#4eb5a9] font-semibold mb-2 text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

     

      </div>
    </section>
  );
};

export default ApId;