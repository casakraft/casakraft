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
  title: "→ Luxury Apartment Interior Design Dubai",
  desc: "We provide you with luxurious interior design of apartment buildings in Dubai, where elegance, comfort, and exclusiveness reign supreme. The floors we use, the lights we install, as well as our furniture and joinery are designed exclusively for you. Luxury interior design of apartments provides you with an elegant look along with functionality.",
},

  {
    title: "→ Modern Apartment Interior Design",
    desc: (
    <>
     Smart design is essential for our modern day lives. We specialize in{" "}
      <a
        href="modern-apartment-interior-design"
        className="text-[#4eb5a9] hover:underline"
      >
         modern apartment interior design
      </a>{" "}
      that have clean lines, bright spaces and maximize the available space. Our designers aim at creating a cozy, yet spacious atmosphere in the homes of our clients through smart interior designing techniques.
    </>
  ),
  },
  {
    title: "→ Bespoke Apartment Interiors",
    desc: "Not all homeowners are alike, nor should they have the same interior design. Our bespoke apartment interior design service is focused on you, your needs and what you want for your apartment. We design everything from your wardrobe and your entertainment system to your accent walls and your kitchen."
  },
 {
  title: "→ Apartment Renovation & Interior Fit-Out",
  desc: (
    <>
      Whether you are renovating your already existing apartment or turning  newly purchased property into your dream place to live, our {" "}
      <a
        href="apartment-renovation"
        className="text-[#4eb5a9] hover:underline"
      >
        complete apartment renovation and fit-out services
      </a>{" "}
      We offer solutions for every stage of the renovation process, including interior design, interior planning, civil works, floorings, ceiling designing, lighting and electrical system installations, plumbing works, furniture installation, and finally styling your place
    </>
  ),
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
      Apartment Interior Design Dubai -   Modern & Luxury Spaces

        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
       Your apartment is not just a living place; it is a reflection of your lifestyle, personality and aspirations. Casa Kraft Interior Design & Renovation provide the best interior designs for your apartment in Dubai. Our specialized interior designers create stylish and comfortable interiors for contemporary living.
        <br /><br />
        As the <b className="text-[#4eb5a9]"
><a href="https://casakraftinteriors.ae/">top-rated apartment interior design firm in Dubai</a></b> , Casa Kraft provides you with full solutions in designing and building apartments with our complete in-house services. Irrespective of whether you possess a studio apartment, a penthouse, a duplex apartment, or even a luxury waterfront apartment, our design experts ensure you get an interior design that suits you.
        Our company boasts more than 12 years of experience in Dubai and provides all its clients with end-to-end solutions right from designing to completing projects.

        </p>


        {/* HEADING */}
         <h2 className="text-3xl md:text-4xl font-semibold text-white text-center ">
        Our Apartment Interior Design Services In Dubai
        </h2>

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