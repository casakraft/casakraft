'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: "8+", label: "Years of Flooring Expertise in Dubai" },
  { value: "100+", label: "Skilled Professionals" },
  { value: "200+", label: "Residential Flooring Projects Completed" },
  { value: "50+", label: "Commercial Flooring & Fit-Out Projects" },
];
const services = [
  {
    title: "→ Premium SPC Flooring Dubai",
    desc: "The SPC flooring Dubai has emerged as one of the most popular flooring materials in modern day houses as well as commercial settings due to their strength and durability coupled with being waterproof. The range of our high-end SPC flooring materials includes luxurious wooden and stone patterns along with their improved resistance to moisture, dents, scratches, and wear & tear. The SPC flooring is highly durable and thus suitable for use in apartments, villas, office buildings, retail stores, hotels and hospitality facilities among others.",
    subTitle: " SPC Flooring Performance in Dubai's Climate",
    subDesc: "SPC flooring is highly suitable for Dubai's hot climate because it remains stable despite fluctuations in temperature and humidity. Its waterproof core makes it an excellent choice for kitchens, living rooms, bedrooms, and commercial spaces where durability and moisture resistance are essential."

  },
{
  title: "→ Luxury Vinyl Flooring Dubai",
  desc:"The luxury vinyl flooring Dubai services at Casa Kraft Interiors provide a perfect blend of elegance, functionality and value for money. Vinyl flooring technology has come a long way, providing some highly realistic wood, stone, and tile appearances that will enhance your interior décor ideas.Luxury vinyl flooring is characterized by comfort, low maintenance, water resistance, and durability. It is a favorite among homeowners who desire elegant flooring that does not have the maintenance issues associated with natural flooring. ",
   subTitle:"High Quality Vinyl Flooring",
   subDesc: "Casa Kraft Interiors provides some high quality vinyl flooring products in many finishes, colors, textures and plank sizes.  Luxury vinyl flooring has been highly appreciated for its durability, water resistant properties, and realistic designs.",
},
  {
    title: "→ Elegant Parquet Flooring Dubai",
    desc: " In order to add elegance and refinement to a home or business environment, parquet flooring Dubai is definitely one of the most prestigious choices for flooring. Parquet flooring adds charm, elegance, and luxury to an interior through special design of wood floorings with quality finishes.Our parquet flooring offers you a variety of flooring wood types, color variations, finishes and parquet layouts such as herringbone, chevron and plank designs. Such floors will give your space both elegance and high value.",
    subTitle:"Best Applications for Parquet Flooring ",
    subDesc: "The parquet floor is widely used in luxury villas, penthouses, corporate offices, boutique stores and hotels that require elegance and quality. The elegance and beauty of wood flooring have made parquet flooring one of the most preferred types of flooring in Dubai.",
  },
 {
  title: "→ High-Quality Laminate Flooring Dubai",
  desc:"Laminate flooring in Dubai is a great option for those who look for a cost effective yet stylish way out. The latest innovations in laminate flooring technology make it possible to get the look of wood floor and additional durability at the same time. We offer several finishes of our laminate flooring, which look like expensive hardwood flooring. Our laminate flooring is ideal for bedrooms, living rooms, offices, stores and other learning institutions.",
  subTitle:"Why Laminate Flooring is a Smart Choice",
  subDesc: "The laminate flooring is very economical and represents one of the best options for home and office use. Professional installation by Casa Kraft Interiors will ensure great results for many years.",
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
       Premium Flooring Services by Casa Kraft Interiors       
        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
        The process of creating a residential or commercial property includes various aspects that will affect the interior of your property. The selection of flooring materials is one of the important steps during the renovation or refurbishment of a property. At Casa Kraft Interiors, we supply and install <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/flooring-dubai">premium quality flooring in Dubai</a></b>, providing each property owner with stylish and durable materials for their interior. Regardless whether you plan to renovate your luxury villa or fit out your commercial property, we are here to make your property look perfect. As a <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/">top-notch flooring company in Dubai, Casa Kraft Interiors</a></b> can offer our clients various floor options, including SPC flooring, vinyl flooring, parquet flooring, laminate flooring, and wooden flooring. Our specialists will help each client select the perfect flooring option considering his or her individual needs and preferences, budget, and requirements. Casa Kraft Interiors is a well-known supplier of high-quality interior solutions throughout Dubai and UAE.

        </p>
         <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
           Best Flooring Company in Dubai
                 </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
       Casa Kraft Interiors has made a name for itself as one of the top rated floorers in Dubai because of its commitment to quality and excellence in everything it does. Flooring is something that lasts forever, so we take pride in our craftsmanship, use only the best materials and leave no stone unturned when installing floors. From working with homeowners to property developers and interior designers to corporate clients, Casa Kraft Interiors will work with anyone and any client looking to make the most out of their flooring projects. We offer bespoke flooring solutions for commercial spaces such as retail stores and office buildings and residential properties including modern apartments and villas.Casa Kraft Interiors is known for its professionalism and commitment to delivering flawless installations of all kinds of floors.

        </p>
      
        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
       Types of Floors we Provide in Dubai
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
      {/* H3 */}
      <h3 className="text-[#4eb5a9] font-semibold mb-2 text-sm sm:text-base">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-white/70 text-sm leading-relaxed">
        {item.desc}
      </p>

      {/* H4 + Sub Description */}
      {item.subTitle && (
        <>
          <h4 className="text-white font-medium mt-5 mb-2 text-sm sm:text-[15px] border-l-2 border-[#4eb5a9] pl-3">
            {item.subTitle}
          </h4>

          <p className="text-white/60 text-sm leading-relaxed">
            {item.subDesc}
          </p>
        </>
      )}
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default ApId;