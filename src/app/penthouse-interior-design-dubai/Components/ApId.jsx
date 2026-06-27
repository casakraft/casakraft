
'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: "8+", label: "Trusted Years" },
  { value: "100+", label: "Employees" },
  { value: "200+", label: "Luxury Projects" },
  { value: "50+", label: "Premium Residences" },
];

const services = [
  {
    title: "→ Luxury Penthouse Interior Design",
    desc: "Casa Kraft Interiors creates luxury penthouse interiors that combine elegance, comfort, and exclusivity. From premium finishes and bespoke furniture to statement lighting and designer materials, we transform penthouses into exceptional living spaces that reflect your lifestyle."
  },

  {
    title: "→ Modern Penthouse Interior Design in Dubai",
    desc: "Our modern penthouse interior designs focus on clean lines, open layouts, natural light, and sophisticated aesthetics. We create contemporary spaces that maximize views while maintaining functionality and comfort for everyday living."
  },

  {
    title: "→ Contemporary Penthouse Design",
    desc: "We design contemporary penthouses that balance luxury with practicality. Our designers carefully select textures, materials, and furnishings to create timeless interiors that remain stylish for years to come."
  },

  {
    title: "→ Penthouse Interior Fit-Out Services",
    desc: "Casa Kraft provides complete penthouse fit-out services in Dubai, handling everything from civil works and custom joinery to flooring, ceilings, lighting, and final finishes. Our turnkey solutions ensure a smooth and stress-free experience."
  },

  {
    title: "→ Bespoke Furniture & Joinery",
    desc: "Every penthouse deserves personalized details. We design and manufacture custom furniture, wardrobes, TV units, walk-in closets, kitchens, and decorative joinery pieces that perfectly match your interior theme."
  },

  {
    title: "→ Smart Penthouse Solutions",
    desc: "Enhance your lifestyle with integrated smart home technology. We incorporate intelligent lighting systems, climate control, security solutions, automated curtains, and entertainment systems for modern luxury living."
  },

  {
    title: "→ Penthouse Renovation & Remodeling",
    desc: "Whether you want to refresh outdated interiors or completely transform your penthouse, our renovation experts deliver elegant upgrades that increase both comfort and property value."
  },

  {
    title: "→ Waterfront & Skyline Penthouse Interiors",
    desc: "Dubai penthouses offer some of the world's most spectacular views. Our designers carefully plan layouts and interiors to maximize natural light and highlight stunning skyline and waterfront views."
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

        {/* MAIN HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          Penthouse Interior Design Dubai - Luxury Living Redefined
        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
          A penthouse is more than a residence — it is a statement of success,
          sophistication, and lifestyle. At Casa Kraft Interior Design &
          Renovation, we specialize in creating luxurious penthouse interiors
          that combine comfort, elegance, and functionality.

          As one of Dubai's leading penthouse interior design companies, our
          team delivers bespoke interior solutions tailored to your personal
          preferences and vision. From premium materials and designer finishes
          to custom furniture and smart home integration, we create spaces that
          offer an exceptional living experience.

          Whether you have purchased a new penthouse or wish to renovate an
          existing one, Casa Kraft transforms your property into a luxurious
          sanctuary while maximizing natural light, panoramic views, and modern
          living comfort.
        </p>

        {/* SERVICES HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          Our Penthouse Interior Design Services in Dubai
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

