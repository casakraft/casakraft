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
            Landscape Design Dubai | Luxury Outdoor Spaces by Casa Kraft Interior Design & Renovation
          </h2>
          <p className="text-sm sm:text-base leading-7 text-white/80 text-left">
            Building an amazing outdoor space is not just about adding plants, pathways, and embellishments but is all about making sure the entire process is thought out and executed professionally and creatively, resulting in creating impressive living spaces from ordinary outdoor spaces. At Casa Kraft Interior Design & Renovation, we offer <b className="text-[#4eb5a9]"
        ><a href="/landscape-dubai">exceptional Landscape Design Dubai services</a></b> that make your outdoor spaces luxurious, functional, and sustainable.
                     <br/>
           Being one of the best Landscape Design Companies Dubai, we offer customized landscaping services to luxury villas, private residences, corporate buildings and hospitality establishments in the UAE. Our professional team of designers, architects and project managers work hard on making sure each outdoor space we create adds value to the property, makes it more usable and corresponds to the individual tastes of the client.If you need a luxurious garden space or a fully transformed outdoor space, our Landscaping Services in Dubai will be perfect for you.
                      </p>
        </div>

       
      </div>
    </section>
  );
};

export default ApId;