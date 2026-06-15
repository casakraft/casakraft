'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { value: "8+", label: "Trusted Years" },
  { value: "100+", label: "Employees" },
  { value: "150+", label: "Cafe Projects" },
  { value: "50+", label: "Commercial Fit-Outs" },
];

const services = [
  {
    title: "→ Luxury Cafe Interior Design",
    desc: "At Casa Kraft Interior Design & Renovation, we create luxury cafe interiors that combine elegance, comfort, and functionality. Every detail, from lighting and seating arrangements to finishes and décor, is carefully designed to deliver an unforgettable experience for your customers."
  },

  {
    title: "→ Modern Cafe Interior Design in Dubai",
    desc: "Casa Kraft Interiors specializes in modern cafe interior design in Dubai. Our team creates stylish and functional spaces featuring contemporary layouts, premium materials, and smart lighting solutions that enhance customer experience and strengthen your brand identity."
  },

  {
    title: "→ Coffee Shop Interior Design",
    desc: "Whether you are opening a boutique coffee shop or a large café, we design inviting interiors that encourage customers to relax and stay longer. From cozy seating areas to custom counters and display units, we create environments that leave a lasting impression."
  },

  {
    title: "→ Cafe Interior Fit-Out Services",
    desc: "We provide complete cafe fit-out services in Dubai, handling everything from construction and ceiling work to flooring, lighting, furniture installation, and finishing. Our team ensures each project is completed on time while maintaining the highest standards of quality."
  },

  {
    title: "→ Contemporary Cafe Interior Design",
    desc: "Our contemporary cafe interiors combine creativity and practicality. Using modern materials, textures, and finishes, we create stylish spaces that help cafés stand out in Dubai's competitive hospitality industry."
  },

  {
    title: "→ Restaurant & Cafe Interior Design",
    desc: "Casa Kraft Interiors offers complete restaurant and cafe interior design services that balance aesthetics with operational efficiency. We carefully plan seating layouts, lighting, and circulation to create memorable dining experiences for your guests."
  },

  {
    title: "→ Cafe Renovation & Remodeling",
    desc: "If your existing café needs a fresh look, our renovation and remodeling services can transform outdated spaces into modern destinations. We upgrade layouts, materials, lighting, and furniture while minimizing disruption to your business."
  },

  {
    title: "→ Bespoke Cafe Furniture & Joinery",
    desc: "We provide custom furniture and joinery solutions tailored to your café concept. From counters and display shelves to seating booths and decorative features, our bespoke craftsmanship helps create a unique and memorable atmosphere."
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
          Cafe Interior Design Dubai – Create Memorable Spaces That Keep Customers Coming Back
        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
          A great café is more than just coffee and food—it is an experience. At Casa Kraft Interior Design & Renovation, we create stunning and functional cafe interiors that reflect your brand identity while providing customers with a welcoming atmosphere. From cozy coffee shops to luxury cafés and trendy dining spaces, we design interiors that enhance customer satisfaction and maximize space efficiency.

          Casa Kraft is one of the leading providers of{" "}
          <b className="text-[#4eb5a9]">
            <a
              href="https://casakraftinteriors.ae/cafe-interior-design-dubai"
              target="_blank"
              rel="noopener noreferrer"
            >
              cafe interior design services in Dubai
            </a>
          </b>
          , known for delivering elegant and practical hospitality spaces. Whether you are launching a new café or renovating an existing one, our expert designers and fit-out specialists are ready to bring your vision to life.
        </p>

        {/* SERVICES HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          Our Cafe Interior Design Services in Dubai
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

