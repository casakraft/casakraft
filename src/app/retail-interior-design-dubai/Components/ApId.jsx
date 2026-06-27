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
  title: "→ Corporate Retail Interior Design",
  desc: "Your corporate retail speaks before you do. The concept of our corporate retail interior design services relies on the idea of knowing your story, your processes, and how you would like your clients and employees to feel. From executive conference rooms or flexible workstations, we design environments that symbolize power, innovation and professionalism. We take care of everything  from space planning and materials selection to acoustics and finishing."
},

  {
    title: "→ Commercial Retail Interior Design in Dubai",
    desc: "In Dubai, Casa Kraft Interiors is known for providing highly creative commercial retail interior designing services in Dubai. Our designers have created many modern retails that improve performance and help build a strong image of our client's business among its customers. If you need to develop a modern corporate retail, luxurious commercial retail interior design, or any other kind of retail interior space, our expert interior designing team will do the job in no time."
  },
  {
    title: "→ Modern Retail Interior Design",
    desc: "Straight lines. Plenty of room. Good layouts. In our approach to modern retail interior design, we follow modern design concepts of utilizing natural light, encouraging teamwork, and embedding technology within the setting. Our retail interior designs are infused with some of the latest concepts in retail interior designs to make your work environment future-friendly."
  },
 {
  title: "→ Retail Interior Fit-Out Services",
  desc: "Casa kraft provides full-service retail interior fit-out services covering all aspects of the process, right up until completion. Being one of the premier interior fit-out services in Dubai, we take care of all the construction, sourcing, installation, and finishing of your project while adhering to schedules and budget considerations."
},
  {
  title: "→ Industrial Retail Interior Design",
  desc:"The industrial retail interior is one retail interior design type that will make your work environment feel authentic, full of energy, and very unique. Inspired by old factories, warehouses, and creative studio work environments, industrial interior design takes the elements of your building structure and turns them into design highlights that give you an incredible interior that stands out on its own. At Casa Kraft Interior Design & Renovation, we know how to create amazing industrial retail interiors in Dubai."
},

   {
    title: "→  Executive Retail Interior Design in Dubai ",
    desc: "Casa Kraft Interiors prides itself on designing exquisite executive retail interiors that convey the sophistication, professionalism and success of those working in such spaces. Our executive retail interior design services involve everything from space planning to customized furniture design, high end material selection, lighting design, acoustic design, smart retail design and custom joinery design. "
  },

   {
    title: "→  Retail Renovation & Remodeling",
    desc: "Is your retail out of date? Do you need to change your number of employees? Rebranding? With our retail interior design services, we help make your existing space modern without having to do a complete relocation. We examine your present arrangement and redesign your working space effectively."
  },

  {
    title: "→  Smart Retail interior design",
    desc: "Casa Kraft Interiors offers the most sophisticated solutions for designing smart retail interiors that incorporate technology in an elegant way. We can offer you our expertise in creating the perfect solution for designing your smart retail interior that comprises automation systems such as light and air conditioning, smart meeting rooms, access controls and other workplace technologies that boost productivity and efficiency. Our skilled professionals will be glad to help you create a unique and sophisticated workplace."
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
       Retail Interior Design Dubai -Transform Your Workspace Into a Statement of Success

        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
       The retail is not only your working ground, the retail is the environment where you can impress and make those important deals as well as shape your legacy. At Casa Kraft Interior Design & Renovation, our team offers luxury interior designs that not only decorate the retail but are also designed in such a way to increase efficiency and productivity, reflecting the company’s vision and mission statement.
       Casa Kraft is one of the leading providers of retail interior designing services in Dubai, recognized for its luxurious yet functional retail interiors. If you are starting out with an retail for the first time or planning to give a new look to an already existing retail premises, our team at Casa Kraft is well equipped with the right expertise and knowledge.</p>


        
        {/* HEADING */}
         <h2 className="text-3xl md:text-4xl font-semibold text-white text-center ">
        Our Retail Interior Design Services in Dubai
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