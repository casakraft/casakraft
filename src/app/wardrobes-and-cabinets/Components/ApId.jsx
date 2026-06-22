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
    title: "→ Complete Office Renovation Services",
    desc: "Being among the top office renovation companies in Dubai, Casa Kraft provides full spectrum solutions for businesses of any size. Fit-out service includes wall partitions, flooring, ceiling, electrical installation, HVAC changes, lighting installations, furniture fitting and other finishing works. All our renovation projects are implemented following all relevant industry standards in terms of high-quality work, durability and functionality. This is why we can be considered one of the  preferred office renovation contractors in Dubai  for commercial renovation projects.",
  },
{
  title: "→ Custom Office Layout Planning",
  desc:"Efficient office layout planning starts with proper space planning. We conduct a thorough analysis of your office’s requirements and provide personalized layout designs that are both efficient and promote effective communication among employees..Regardless of what kind of workspaces you want to have in your office workstations, executive offices, meeting rooms, or a combination of them  we offer customized solutions for your office.Smart space design leads to improved workflow processes, communication between employees, and increased productivity of the entire workplace."
},
  {
    title: "→ Commercial Office Renovation Expertise",
    desc: " The Casa Kraft team has vast experience in undertaking commercial office renovations in Dubai, catering to multiple industries. The list of clients includes corporate offices, startup firms, banks, hospitals, tech companies, retail headquarters and professional service firms.With such experience, our team can easily identify the operational needs of each business and deliver office spaces that are designed in accordance with industry standards. All renovations are completed with the utmost precision which ensures that they are durable and of high quality.",
  },
 {
  title: "→ Cost-effective Commercial Office Renovation Services",
  desc:"Not all good things in life cost a fortune; neither do commercial office renovations. Casa Kraft boasts expert services of cost-effective commercial office renovations in Dubai. We believe in offering quality office renovations in Dubai within your budget limit. We offer excellent renovation plans and manage the whole process professionally in order to provide you with a cost-effective solution."
},
 {
  title: "→ Smart Tech Integration",
  desc: "Offices need smart technologies that will increase productivity, facilitate better communication, and make operations more efficient. Our Smart Tech Integration services are focused on smart lighting, automated climate management, advanced AV conferencing technologies, and structured cabling services that will enhance the effectiveness of the digital office space of our clients. We help integrate all necessary smart technologies to ensure that employees are able to perform their duties efficiently and comfortably in an interconnected environment."
},
  {
    title: "→ Furniture & Ergonomic Solutions",
    desc: "Properly selected office furniture is very important for the well-being and productivity of office employees. Our Furniture & Ergonomic Solutions services will provide you with custom-designed workstations, desks, executive chairs, collaborative and meeting room furniture, and other office equipment that your office may need. All the products selected by our specialists will meet ergonomic standards and will be designed to reduce workplace fatigue of employees and improve their posture..",
  },

  {
    title: "→ Lighting & Electrical Upgrades",
    desc: "Good lighting and quality electrical infrastructure play a significant role in creating a contemporary working environment. The aim of our Lighting & Electrical Upgrades is to provide you with high-quality office spaces featuring improved visibility, increased energy efficiency, and lighting that will facilitate productive and comfortable work. In particular, we use the most innovative LED lighting systems, modernized wiring, and updated infrastructure that will provide for both present and future business needs.",
  },

  {
    title: "→ Branding & Interior Styling",
    desc: "Your workspace needs to represent your business values and corporate style. That is why our Branding & Interior Styling services will provide your office space with all necessary elements of corporate identity through creative interior decoration using branding colors, custom graphics and signage, feature walls, and much more. Thus, our team can assist you in promoting your business in the best possible way..",
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
    Office Renovation Dubai - Interior Design & Fit-out
        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
        Your office space is much more than just your working space; it is an image of your brand, culture, and aspirations. And when your office does not meet these requirements anymore and seems outdated or uncomfortable, then it is high time for some changes. Our firm, Casa Kraft , is widely acknowledged to be one of the <b className="text-[#4eb5a9]"
        ><a href="https://casakraftinteriors.ae/">best office renovation firms in Dubai</a></b>. We have successfully helped many companies renovate their offices into stylish and highly productive ones.

        We specialize in designing the most advanced renovation services in Dubai. As a leadig office renovation company in Dubai, we merge creativity with professionalism to provide the highest quality renovation services. Regardless of whether you are renovating an entire floor or designing a brand-new corporate building for your organization, we will assist you with custom-made office renovation in Dubai that is based on your brand image, budget, and deadline.
        </p>
      
        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
         Office Renovation Services in Dubai

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