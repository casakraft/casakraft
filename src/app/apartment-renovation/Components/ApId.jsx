'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: "8+",   label: "Trusted Years" },
  { value: "100+", label: "Employees" },
  { value: "200+", label: "Residential Projects" },
  { value: "50+",  label: "Commercial Fit-Outs" },
];

const services = [
  {
    title: "→ Complete Apartment Remodeling",
    desc: "Our range of services for apartment renovations in Dubai involves complete transformation of interiors through redesigns, upgrades, replacement of old fittings and installation of contemporary design features. Our apartment remodeling is planned in such a way that each project is executed taking into consideration the most effective use of available spaces.",
  },
{
  title: "→ Apartment Interior Renovation",
  desc: (
    <>
      Luxury apartments demand nothing less than a luxurious renovation. For this purpose, we offer you{" "}
      <a
        href="https://casakraftinteriors.ae/apartment-interior-design-dubai"
        className="text-[#4eb5a9] hover:underline"
      >
        luxury apartment renovation services in Dubai
      </a>{" "}
      to provide you with an exquisite interior finish.
    </>
  ),
},
  {
    title: "→ Bedrooms Renovation",
    desc: " The bedroom in an apartment should ideally be an area designed for maximum relaxation while also meeting all practical needs. In Casa Kraft Interior Design & Renovation, our services of renovating bedrooms in apartments focus on converting normal rooms to luxurious and calming spaces as per your individual preferences.",
  },
 {
  title: "→ Kitchen Renovation",
  desc: (
    <>
      A well designed kitchen is essential for a good apartment. We offer a comprehensive{" "}
      <a
        href="https://casakraftinteriors.ae/kitchen-renovation"
        className="text-[#4eb5a9] hover:underline"
      >
        kitchen renovation service
      </a>{" "}
      which includes cabinets replacement, countertops installation, custom storage solution, appliances installation, lighting installation and high end finishes among others. Our kitchens are both functional and stylish incorporating contemporary design elements to make cooking more enjoyable.
    </>
  ),
},
 {
  title: "→ Bathroom Renovation",
  desc: (
    <>
      Our{" "}
      <a
        href="https://casakraftinteriors.ae/bathroom-renovation"
        className="text-[#4eb5a9] hover:underline"
      >
        bathroom renovation services
      </a>{" "}
      turn your average bathroom into a luxurious oasis. Whether you're updating tiles, fixtures, vanity units, lights, showers, and storage options, we do all that, along with making sure everything looks modern and elegant.
    </>
  ),
},
  {
    title: "→ Joinery and Custom Made Furniture",
    desc: "In the course of the apartment remodeling process, we also create joinery and make customized furniture for your home. We offer custom made wardrobes, TV units, shelving, kitchens and other storage solutions.",
  },
];

const ApId = () => {
  return (
    // FIX 1: Replaced heavy asymmetric px ladder (up to px-40) with a centered max-width container.
    // px-40 on xl was crushing content to ~540px on a 1280px screen.
    // Now: full-width section with consistent px-4 sm:px-6, content capped at max-w-6xl.
    <section className="bg-black text-white py-10 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-10">

        {/* TRUST BAR */}
        {/* FIX 2: Added grid-cols-1 for very small screens, 2 for sm, 4 for md */}
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
              <p className="text-2xl sm:text-3xl font-semibold text-[#4eb5a9]">
                {item.value}
              </p>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
         Apartment Renovation Dubai - Remodeling & Renovation
        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
        Experience a change in your living environment by engaging our professional apartment renovation services provided by <b className="text-[#4eb5a9]"
        ><a href="https://casakraftinteriors.ae/">Casa Kraft Interior Design & Renovation in Dubai</a></b> . Our company specializes in designing exquisite and contemporary apartments through apartment remodeling, renovation, fit out and full turnkey projects. Regardless of whether you have a luxurious apartment located at Dubai Marina, Downtown Dubai, JLT, Business Bay or Palm Jumeirah or any other community in the city, we guarantee to meet your expectations and exceed your dreams. 
        With years of experience offering our <b className="text-[#4eb5a9]" ><a href="https://casakraftinteriors.ae/apartment-renovation">apartment renovation services in Dubai</a></b>, we know each apartment is different. That is why we apply innovative design ideas together with quality materials for construction in order to provide customers with exquisite spaces, which are comfortable, luxurious, and affordable at the same time. With us, apartment renovation becomes an easy task without much trouble
        </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">Why Invest in Apartment Renovation in Dubai</h2>
      <p>With a professional apartment makeover service in Dubai, you can definitely add beauty, functionality, and even value to your home. The modern generation is inclined towards opting for renovations rather than moving to new places as it enables people to  personalized in their current place of living as per their requirements.Whatever you want for your home, an open floor plan, high quality finishes, bathrooms made with luxury materials, a <b className="text-[#4eb5a9]"
><a href="https://casakraftinteriors.ae/kitchen-interior-design-in-dubai">modern kitchen</a></b>  or better storage space , our renovation experts will make sure to give you the home you dream of.
</p>
        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
         Comprehensive Apartment Renovation Services in Dubai

        </h2>

       

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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