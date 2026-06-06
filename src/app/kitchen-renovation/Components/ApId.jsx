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
    title: "→ Full Kitchen Renovation & Remodeling",
    desc: "As a leading kitchen renovation company in Dubai, Casa Kraft Interiors provides full kitchen renovation services such as wall, ceiling, floor, and cabinet renovation. At Casa Kraft Interiors, we work to provide every customer with an exact kitchen renovation service. Whether it is an apartment or a complete luxury kitchen renovation in Palm Jumeirah."
  },
  {
    title: "→ Modular Kitchens & Custom Cabinets",
    desc: "We provide tailored kitchen renovations solutions with bespoke modular kitchens and small kitchen cabinets for efficient and aesthetically pleasing design. Our design solutions are precisely developed for maximizing storage space and are among the best in Dubai kitchens today."
  },
  {
    title: "→ Premium Kitchen Appliances & Fixtures",
    desc: "Our kitchen renovation contractors use modern kitchen appliances in Dubai, alongside high end kitchen fixtures, to provide you with practical, high end kitchen designs. With smart ovens, induction cooktops, sleek sinks, and high end faucets, our Casa Kraft Interiors services ensure that you have a modern kitchen that fits the next generation."
  },
 {
  title: "→ Luxury Kitchens & High End Finishes",
  desc: "For homeowners seeking luxury kitchen renovation in Palm Jumeirah or Emirates Hills, our team provides customized solutions with the best materials, marble top finishes, designer cabinets and contemporary lighting systems. A kitchen renovation job done in Palm Jumeirah or Downtown Dubai carries an essence of elegance, utility as well as modernism with each piece of work done."
},
  {
    title: "→ Smart & Sustainable Kitchen Renovation",
    desc: "The Smart Kitchen Our areas of specialization include expert kitchen renovation services in Dubai, utilizing smart renovation Dubai techniques that include energy efficient sinks, automated lighting and an internet of things kitchen. Sustainability is also an integral part of this process, using ecofriendly materials as well as water saving fixtures."
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
       Luxury Kitchen Renovation Dubai
        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
         Casa Kraft Interiors is known as the <b className="text-[#4eb5a9]"><a href="http://casakraftinteriors.ae/">Best Kitchen Renovation Company in Dubai</a></b> , providing luxurious kitchen renovations as well as tailored kitchen renovation services for contemporary homes. Whether it is a cozy apartment, a luxurious villa, or a commercial space, Casa Kraft Interiors is a professional team providing kitchen renovations & remodeling services that can help create a functional, beautiful, and inspirational kitchen from an ordinary one. <br />
         It may be a luxury kitchen renovation at Palm Jumeirah, an Emirates Hills renovation, or a #1 kitchen renovation at Downtown Dubai, Casa Kraft Interiors is your dependable partner for designing & renovating your dream kitchen.



        </p>
        {/* HEADING */}
         <h2 className="text-3xl md:text-4xl font-semibold text-white text-center ">
         Our Kitchen Renovation Services in Dubai
        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
          Our services for a kitchen renovation in Dubai encompass every aspect of kitchen design in Dubai, making us one of the best kitchen renovation companies in Dubai. Right from planning our services for a kitchen renovation in Dubai till its execution, we manage every aspect of your kitchen renovation in Dubai.


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