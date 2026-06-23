'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: "8+",   label: "Trusted Years" },
  { value: "100+", label: "Employees" },
  { value: "200+", label: "Residential Projects" },
  { value: "50+",  label: "Commercial Fit-Outs" },
];

const ApId = () => {
  return (
    <section className="bg-black text-white py-12 font-sans px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

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
              <p className="text-2xl sm:text-3xl font-semibold text-[#4eb5a9]">
                {item.value}
              </p>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* MAIN HEADING & INTRO */}
        <div className="flex flex-col gap-4 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Wardrobes and Cabinet Designs Dubai – Casa Kraft Interior Design & Renovation
          </h2>
          <p className="text-sm sm:text-base leading-7 text-white/80">
            Storage is one of the key components of any good home, but there is nothing that enhances day-to-day comfort like a wardrobe or cabinet that truly caters to your needs. At Casa Kraft Interior Design & Renovation, we offer professional <b className="text-[#4eb5a9]"
        ><a href="/wardrobes-and-cabinets">wardrobe and cabinet designs</a></b> for Dubai residents, no matter whether you need closet space in your studio apartment or a spacious walk-in dressing room in your villa.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PARALLEL TWO-COLUMN LAYOUT: WARDROBES VS WALK-IN CLOSETS                 */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">
          
          {/* COLUMN 1: Built-In Wardrobe Design Dubai */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#111] border border-white/10 p-6 sm:p-8 rounded-lg flex flex-col justify-between hover:border-[#4eb5a9]/30 transition"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#4eb5a9] mb-4 pb-2 border-b border-white/5">
                1. Built-In Wardrobe Design Dubai
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-7 mb-6 text-justify">
                In Dubai, built-in wardrobes have emerged as one of the favorite picks because of their spacious and seamless integration within the interiors of the home. We manufacture our own bespoke built-in wardrobes to fit into any bedroom, guest room, dressing room, and apartment. If you are looking for floor-to-ceiling wardrobe storage units with sliding door wardrobe, mirrored wardrobe, or contemporary wardrobe panels, then we have just the thing that you are looking for.
              </p>
            </div>

            {/* Features Sub-Grid inside Column 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
              <div className="bg-black/40 border border-white/5 p-4 rounded-md">
                <h4 className="text-[#4eb5a9] font-medium text-sm sm:text-base mb-1">
                  → Space Efficiency
                </h4>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Our designs provide maximum storage space with minimum clutter. We design built-in wardrobes to use up all the wasted space in the room effectively and efficiently.                </p>
              </div>
              <div className="bg-black/40 border border-white/5 p-4 rounded-md">
                <h4 className="text-[#4eb5a9] font-medium text-sm sm:text-base mb-1">
                  → Seamless Interiors
                </h4>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Each wardrobe is designed with great attention to detail so that it blends well with the interior design of your room. We select colors, finishes, handles, and material of our wardrobes in such a way that they decor of your room.                </p>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: Walk-In Closet Design Dubai */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#111] border border-white/10 p-6 sm:p-8 rounded-lg flex flex-col justify-between hover:border-[#4eb5a9]/30 transition"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#4eb5a9] mb-4 pb-2 border-b border-white/5">
                2. Walk-In Closet Design Dubai
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-7 mb-6 text-justify">
                For individuals looking for luxury storage, our services for designing walk-in closets in Dubai offer an ideal blend of elegance and functionality. The walk-in closet gives you exclusive storage space for clothing, footwear, accessories, jewelry and personal items and creates an elegant dressing area. Our team of designers creates large and very organized walk-in closets that include custom shelves, display cabinets, drawers, island storage, lighting features and high quality finishes. Everything is designed to make life more convenient.
              </p>
            </div>

            {/* Features Sub-Grid inside Column 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
              <div className="bg-black/40 border border-white/5 p-4 rounded-md">
                <h4 className="text-[#4eb5a9] font-medium text-sm sm:text-base mb-1">
                  → Walk in Wardrobes
                </h4>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  The wardrobe should do more than simply give you extra room for storing clothes. It is supposed to arrange your daily life. Our walk-in wardrobes & closets for bed rooms are specially designed with smart internal arrangements.                </p>
              </div>
              <div className="bg-black/40 border border-white/5 p-4 rounded-md">
                <h4 className="text-[#4eb5a9] font-medium text-sm sm:text-base mb-1">
                  → Spacious Designing
                </h4>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  A great deal of care has been taken in the designs that ensure maximum space utilization by means of floor to ceiling units, sliding doors and corner optimized designs.                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ApId;