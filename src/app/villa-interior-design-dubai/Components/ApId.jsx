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
  title: "→ Full Villa Interior Design & Fit-Out",
  desc: (
    <>
      Signature services offered by our company includes a{" "}
      <a
        href="https://casakraftinteriors.ae/"
        className="text-[#4eb5a9] hover:underline"
      >
        full interior design service
      </a>{" "}
     for an entire modern villa in Dubai. We design every space, such as the living room, kitchen, bedrooms, bathrooms and outside areas with the same design vocabulary. One firm, one contract, no headache.
    </>
  ),
},

  {
    title: "→ Bespoke Joinery & Custom Furniture",
    desc: "Casa Kraft provides bespoke interior design services with custom joinery and furniture made to measure specifications. Kitchen cabinets, wardrobes, custom TV stands and bespoke shelves are some examples of our work in this category."
  },
  {
    title: "→ Villa Living Room Design",
    desc: "Our team of experts will offer you an amazing villa interior design, opulent and inviting with a custom ceiling design, beautiful light, and accessories. Whether you have a classic Arabic living room or stylish and modern interior design ideas, we can make it happen for you."
  },
 {
  title: "→ Master Bedroom & Private Suites",
  desc: (
    <>
      We specialize in making{" "}
      <a
        href="bedroom-interior-design-trends"
        className="text-[#4eb5a9] hover:underline"
      >
        master bedroom designs
      </a>{" "}
      where we customize everything from the headboard to the wardrobe to the lighting. You’ll have luxurious five-star suites at home every day.
    </>
  ),
},
  {
  title: "→ Kitchen & Bathroom Design",
  desc: (
    <>
      Your luxury{" "}
      <Link
        href="/kitchen-interior-design-in-dubai"
        className="text-[#4eb5a9] hover:underline"
      >
        kitchen designs
      </Link>{" "}
      need nothing but the best when it comes to interior design; top cabinets,
      countertops, chef islands, and smart storage. The spa style bathrooms
      include a freestanding bathtub, rain showers and customized vanities all
      the way down to the finishing touches.
    </>
  ),
},

   {
    title: "→  Children’s Room & Guest Bedroom Design",
    desc: "Every room in your Dubai villa & modern house interior deserves equal care. We can give you unique children's rooms, exquisite guest bedrooms as well as breathtaking gardens, swimming pools, patios and stunning outdoor kitchens  that complete the ultra-luxury interior design experience."
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
        Villa Interior Design Dubai | Luxury Villa Interiors
        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
        Your villa should be more than just a beautiful space ,it should reflect your lifestyle, personality and aspirations. Casa Kraft Interior Design & Renovation  provides the premium quality of interior designs of villas which are not only good to see but also to live in. We have successfully designed many villas located in Palm Jumeirah, Emirates Hills, Damac Hills, Arabian Ranches and other parts of Dubai, thus being confident that our firm is one of the <b className="text-[#4eb5a9]"
><a href="https://share.google/ubPa0vp7M2tvje4IS">best villa interior design firms in Dubai</a></b>. From designing a new villa interior from scratch to redesigning an old one, we will provide you with the services of our top villa interior designers in dubai.

        </p>


         <h3 className="text-3xl md:text-3xl font-semibold text-white ">
        What Is Villa Interior Design In Dubai?

        </h3>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
       <b className="text-[#4eb5a9]"><a href="https://www.instagram.com/p/DTxach9jPqJ/">Luxury villa interior design in Dubai</a></b>  is the whole procedure of designing the interior of a luxury villa. From the stage of conception all the way to final delivery, Casa Kraft Interior Design & Renovation will take care of it all in order to make it easy for you.
        </p>
        {/* HEADING */}
         <h2 className="text-3xl md:text-4xl font-semibold text-white text-center ">
         Our Villa Interior Design Services in Dubai
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