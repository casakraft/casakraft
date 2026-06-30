'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "80+", label: "Professional Painters" },
  { value: "150+", label: "Painting Projects Completed" },
  { value: "30+", label: "Commercial Painting Projects" },
];
const services = [
  
 
 
{
  title: "→ Villa Painting Services in Dubai",
  desc: (
    <>
      <a
        href="https://casakraftinteriors.ae/revitalize-your-space-expert-home-and-villa-painting-services-in-dubai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#4eb5a9] hover:underline"
      >
        Villa Painting in Dubai
      </a>{" "}
      is among our most demanded services. The villa is a valuable property, and the paint used on it will have great significance. Our villa painting services include painting of all parts of villas: interior rooms, bedrooms, kitchens, bathrooms, staircases, as well as exteriors.
    </>
  )
},

  {
    title: "→ Apartment Painting Services Dubai",
    desc: "We also offer apartment painting services in Dubai. We recognize that most of our clients using apartment painting services are either about to move into the apartments, preparing the apartments for rent, or redecorating the apartments as they are occupying them. "
  },
  {
    title: "→ Home Painting Services in Dubai",
    desc: "The home painting services in Dubai provided by us extend far beyond simply painting the walls. We conduct an assessment of the whole house, choose the correct colors and finishes for every room, and do all the necessary prep work, which involves filling, sanding, sealing, and priming before we apply the top coat. "
  },
 
];
const commercialServices = [
  {
    title: "→ Office Painting Services in Dubai",
    desc: "If your business requires a renewal of its look, then you should hire a painting contracting company in Dubai. Our commercial branch does office painting along with other commercial projects involving offices, retail shops, showrooms, warehouses, hotels, clinics, schools and many others within Dubai. Our Professional painters in Dubai work with maximum efficiency and cleanliness."
  },
  {
    title: "→ Restaurant Painting Services Dubai",
    desc: "The ambiance of any restaurant matters just as much as its menu, which makes the right paint essential. At Casa Kraft, we provide painting services in Dubai for restaurants, cafes, food courts, and hospitality facilities across the UAE. Our professional painters in Dubai are available for overnight shifts, early mornings, or phased work sessions to avoid disrupting your operations."
  },
  {
    title: "→ Gym Painting Services in Dubai",
    desc: "Make your gym an energetic place that inspires members from the moment they walk in. We are painting contractors in Dubai providing commercial painting services for gyms, fitness clubs, and sports centers. Our expert painters and interior decorators in Dubai help select colors and finishes that reflect your brand identity and create an engaging workout environment."
  }
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
              <h2 className="text-3xl md:text-3xl font-semibold text-white text-center ">
 Residential And Commercial Painting Services in Dubai        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
       Transform your space with the precision, quality, and craftsmanship that only the <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/">best painting company in Dubai</a></b>  can deliver. At Casa Kraft, we are experts in offering complete interior and exterior painting services for all kinds of villas, apartments, and offices in Dubai. We are equipped with expertise and dedication to offer complete paint and coatings solutions for your home or office in Dubai. Our painters in Dubai have all the necessary equipment needed for an excellent paint job. Being one of the trusted painting companies in Dubai, we have completed many projects for individual homeowners, tenants, and companies who do not accept any compromise when it comes to their home painting needs. Whether it is about detailed interior painting or exterior walls painting and protection services, our painters in Dubai have got you covered, on time and at an affordable price.
        </p>

        {/* HEADING */}
         <h2 className="text-3xl md:text-4xl font-semibold text-white text-center ">
        Residential Painting Services in Dubai 
        </h2>

        {/* SERVICES GRID */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">

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

     {/* COMMERCIAL PAINTING SECTION */}
<h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
  Commercial Painting Services in Dubai
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 items-stretch">
  {commercialServices.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className="bg-[#111] border border-white/10 p-5 rounded-md hover:border-[#4eb5a9]/40 transition h-full flex flex-col"
    >
      <h3 className="text-[#4eb5a9] font-semibold mb-2 text-sm sm:text-base">
        {item.title}
      </h3>

      <p className="text-white/70 text-sm leading-relaxed flex-grow">
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