'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { value: "8+", label: "Trusted Years" },
  { value: "100+", label: "Employees" },
  { value: "300+", label: "Custom Furniture Projects" },
  { value: "50+", label: "Commercial Fit-Outs" },
];

const services = [
  {
    title: "→ Custom Furniture Design in Dubai",
    desc: "At Casa Kraft Interior Design & Renovation, we specialize in creating bespoke furniture solutions that reflect your personality and lifestyle. Our team designs and crafts premium-quality furniture tailored to your space, ensuring beauty, comfort, and functionality."
  },

  {
    title: "→ Custom Joinery Services",
    desc: "Our custom joinery services in Dubai provide elegant and practical solutions for residential and commercial spaces. From wall paneling and storage units to decorative woodwork, we deliver exceptional craftsmanship and attention to detail."
  },

  {
    title: "→ Luxury Wardrobes & Walk-In Closets",
    desc: "We design and manufacture luxury wardrobes and walk-in closets that maximize storage while adding sophistication to your interiors. Every piece is custom-built to suit your preferences and lifestyle requirements."
  },

  {
    title: "→ Custom Kitchen Cabinets",
    desc: "Casa Kraft creates bespoke kitchen cabinets that combine modern aesthetics with smart functionality. Using premium materials and expert craftsmanship, we design kitchens that are stylish, durable, and highly efficient."
  },

  {
    title: "→ TV Units & Entertainment Walls",
    desc: "Transform your living space with custom TV units and entertainment walls designed to complement your interior style. Our solutions provide seamless storage while creating an elegant focal point for your home."
  },

  {
    title: "→ Office Furniture & Joinery",
    desc: "We provide custom office furniture and joinery solutions that enhance productivity and professionalism. From executive desks and meeting tables to storage cabinets and reception counters, every piece is tailored to your business requirements."
  },

  {
    title: "→ Retail & Commercial Joinery",
    desc: "Our retail and commercial joinery services help businesses create unique spaces that leave lasting impressions. We design and manufacture display units, counters, shelving systems, and custom woodwork for shops, cafés, restaurants, and commercial interiors."
  },

  {
    title: "→ Bespoke Furniture Manufacturing",
    desc: "From concept to installation, Casa Kraft offers complete bespoke furniture manufacturing services in Dubai. Our skilled craftsmen use premium materials and advanced techniques to create timeless furniture pieces with exceptional quality."
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
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          Custom Furniture & Joinery in Dubai – Crafted to Match Your Style
        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
          Furniture should do more than simply fill a space—it should enhance the
          way you live and reflect your personal style. At Casa Kraft Interior
          Design & Renovation, we provide premium custom furniture and joinery
          services in Dubai, creating beautifully crafted solutions for homes,
          offices, retail spaces, and hospitality projects.

          Casa Kraft is one of the leading providers of{" "}
          <b className="text-[#4eb5a9]">
            <a
              href="https://casakraftinteriors.ae/custom-furniture-joinery-dubai"
              target="_blank"
              rel="noopener noreferrer"
            >
              custom furniture and joinery services in Dubai
            </a>
          </b>
          , recognized for exceptional craftsmanship, premium materials, and
          attention to detail. Whether you require bespoke wardrobes, kitchen
          cabinets, TV units, office furniture, or commercial joinery solutions,
          our experienced team transforms ideas into functional masterpieces.
        </p>

        {/* SERVICES HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          Our Custom Furniture & Joinery Services in Dubai
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

