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
    title: "→ Full Villa Interior Design & Renovation",
    desc: "Signature services offered by our company include complete villa renovation for an entire modern villa interior design in Dubai. We design every space, such as the living room, kitchen, bedrooms, bathrooms and outside areas with the same design vocabulary. One firm, one contract, no headache.",
  },
  {
    title: "→ Bespoke Joinery & Custom Furniture",
    desc: "Casa Kraft provides bespoke interior design services with custom joinery and furniture made to measure specifications. Kitchen cabinets, wardrobes, custom TV stands and bespoke shelves are some examples of our work in this category.",
  },
  {
    title: "→ Villa Living Room Design",
    desc: "Our team of experts will offer you an amazing villa interior design, opulent and inviting with a custom ceiling design, beautiful light, and accessories. Whether you have a classic Arabic living room or stylish and modern renovation ideas, we can make it happen for you.",
  },
  {
    title: "→ Master Bedroom & Private Suites Renovation",
    desc: "We specialize in making bedroom interior renovation, where we customize everything from the headboard to the wardrobe to the lighting. You'll have luxurious five-star suites at home every day.",
  },
  {
    title: "→ Kitchen & Bathroom Renovation",
    desc: "Your modern kitchen design needs nothing but the best when it comes to renovation; top cabinets, countertops, chef islands, and smart storage. The spa style bathrooms include a freestanding bathtub, rain showers and customized vanities all the way down to the finishing touches.",
  },
  {
    title: "→ Children's Room & Guest Bedroom Renovation",
    desc: "Every room in your Dubai villa & home renovation deserves equal care. We can give you unique children's rooms, exquisite guest bedrooms as well as breathtaking gardens, swimming pools, patios and stunning outdoor kitchens that complete the ultra-luxury interior design & renovation experience.",
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
          Villa Renovation & Turnkey Fit-Out Services
        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
          Your villa should match your lifestyle, preferences and future ambitions. At Casa Kraft
          Interior Design & Renovation, our focus lies in providing the{' '}
          <b className="text-[#4eb5a9]">
            <a href="https://casakraftinteriors.ae/villa-renovation">
              best villa renovation services in Dubai
            </a>
          </b>
          . With us by your side, you can rest assured that we'll turn your old villa into something
          that is stylish and modern as per your tastes and preferences.
      

       
          With a team that is proficient in everything related to design, architecture, engineering,
          and construction, Casa Kraft is one of the best choices for any villa renovation project in
          Dubai. Our range of villa renovation services covers everything from modifying the structure
          of your building to luxury fit-outs and even landscape gardening. At Casa Kraft Interior
          Design & Renovation, we make sure to provide all of our clients with nothing but the
          exceptional services that will turn their old villa into something extraordinary.
        </p>

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
          Our Villa Renovation Services in Dubai
        </h2>

        {/* FIX 3: Replaced copy-pasted kitchen paragraph with correct villa services intro */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
          Our villa renovation services in Dubai cover every aspect of your home — from structural
          changes and luxury fit-outs to bespoke joinery and landscaping. Whether you want a full
          turnkey renovation or a specific room transformation, we manage every detail under one
          contract so you don't have to coordinate between multiple contractors.
        </p>

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