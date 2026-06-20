'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote:
        "It was really amazing to work with Casa Kraft Interiors. They knew what we wanted and made our villa look like a luxury and comfortable house. The whole process went well, and we got results that exceeded our expectations.",
      author: "H. Tehreem , Damac hills",
    },
    {
      quote:
        "We love our interiors and the functionality of the designs created by Casa Kraft Interiors. I would definitely recommend them for any villa renovation project in Dubai.",
      author: "Ayesha Khan, Palm jumeirah",
    },
  ];

  const [idx, setIdx] = React.useState(0);
  const [animate, setAnimate] = React.useState(true);

  const change = (i) => {
    setAnimate(false);
    setTimeout(() => {
      setIdx((i + testimonials.length) % testimonials.length);
      setAnimate(true);
    }, 250);
  };

  React.useEffect(() => {
    const t = setInterval(() => change(idx + 1), 6000);
    return () => clearInterval(t);
  }, [idx]);

  return (
    <div className="relative max-w-4xl mx-auto my-16 px-4 sm:px-6">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4eb5a9]/20 via-transparent to-[#4eb5a9]/20 blur-3xl rounded-3xl"></div>

      {/* Main card */}
      <div className="relative bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 p-6 sm:p-8 md:p-10 shadow-2xl">
        {/* Title */}
       <motion.h2
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-6 sm:mb-10"
>
          WHAT OUR CLIENTS SAY
        </motion.h2>
        {/* Quote */}
        <div
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0px)" : "translateY(10px)",
            transition: "all 0.3s ease",
            minHeight: "140px",
          }}
          className="text-center"
        >
          <p className="text-white/80 text-sm md:text-lg leading-relaxed italic ">
            "{testimonials[idx].quote}"
          </p>

          <div className="mt-6 text-[#4eb5a9] font-semibold text-sm md:text-base">
            — {testimonials[idx].author}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={() => change(idx - 1)}
            className="w-10 h-10 rounded-full border border-[#4eb5a9] text-[#4eb5a9] hover:bg-[#4eb5a9] hover:text-black transition"
          >
            ‹
          </button>

          {/* dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => change(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === idx ? "w-6 h-2 bg-[#4eb5a9]" : "w-2 h-2 bg-zinc-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => change(idx + 1)}
            className="w-10 h-10 rounded-full border border-[#4eb5a9] text-[#4eb5a9] hover:bg-[#4eb5a9] hover:text-black transition"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

const kitchenGallery = [
  "/images/vr1.png",
  "/images/vr2.png",
  "/images/vr3.png",
  "/images/vr4.png",
  "/images/vr5.png",
  "/images/vr6.png",
  "/images/vr7.png",
  "/images/vr8.png",
  "/images/vr9.png",
  "/images/vr10.jpeg",
  "/images/vr11.jpeg",
  "/images/vr12.jpeg",
  "/images/vr13.jpeg",
  "/images/vr14.jpeg",
  "/images/vr15.jpeg",
  "/images/vr16.jpeg",
  "/images/vr17.jpeg",
  "/images/vr18.jpeg",
  "/images/vr19.jpeg",
  "/images/vr20.jpeg",
  "/images/vr21.jpeg",
];

const krSteps = [
  {
    id: '01',
    title: 'Consultation & Site Assessment',
    desc: 'Each process starts with a thorough consultation and assessment of your site to know your needs, requirements, and budget.',
  },
  {
    id: '02',
    title: 'Design Development',
    desc: 'Our designers design unique concepts, floor plans, mood boards, and material choices to create a vision for your renovation.',
  },
  {
    id: '03',
    title: 'Planning and Approval',
    desc: 'We provide you with technical drawings, approvals and project planning to give you a seamless experience.',
  },
  {
    id: '04',
    title: 'Renovation Process',
    desc: 'Our professional teams will execute all renovation services under strict quality control and project management.',
  },
  {
    id: '05',
    title: 'Handover and Inspection',
    desc: 'Once renovations are complete, we will inspect and style your new look before handing you a renovated villa.',
  },
];

const serviceAreas = [
  { title: "Arabian Ranches" },
  { title: "Dubai Hills Estate" },
  { title: "Jumeirah Golf Estates" },
  { title: "Nad Al Sheba" },
  { title: "Jumeirah Village Circle" },
  { title: "Jumeirah Village Triangle" },
  { title: "Emirates Hills" },
  { title: "Palm Jumeirah" },
];

const faqs = [
  {
    question: 'Will I see the design before work begins?',
    answer:
      'Yes. Before any renovations or fit-outs take place, we give you 3D design visualizations and mood boards that will enable you to have a full understanding of the design concept. Through these, you will be able to view the layout, material selection, color scheme, furniture choices, and all the other aspects of the design concept before starting any construction.',
  },
  {
    question: 'Can you work with furniture I already own?',
    answer:
      'Yes. Your old furniture is easily integrated into the new design. This way, your old favorites will not be thrown away but instead be included in the design. The designer will evaluate your furniture and design the interior in such a way that your old furniture matches your new design. We may also suggest some improvements on your old furniture so that they match the new design concept.',
  },
  {
    question: 'Do you handle permits for renovation work?',
    answer:
      'Yes, our company will be responsible for all the renovation permits and authorizations that are required for you to complete your project smoothly. All the necessary permits and authorizations will be arranged for you so that you can begin with your renovations without any problem. Thus, if you live in Jumeirah or any other nearby community, you can rely on us to complete your renovation project effectively and efficiently.',
  },
  {
    question: 'Do you do both modern and traditional designs?',
    answer:
      'Yes, indeed. We excel in all kinds of interior design concepts, ranging from modern designs to contemporary ones, and even classical interior design as well as interior designs based on traditional Arabic aesthetics. In designing your home according to your requirements, our expert designers will work with you to get an understanding of your needs and preferences and then come up with a concept that suits your taste.',
  },
  {
    question: 'Do you have turnkey villa renovation services?',
    answer:
      'Yes. We provide full-service turnkey villa renovation services that oversee the entire process of your renovation from beginning to end. These involve interior design, architectural design, renovations, high-end finishes, project management, joinery, landscaping, and styling. With all processes handled under one roof, we guarantee an efficient and seamless process that results in the stunning transformation of your home into a beautiful and finished villa',
  },
];
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const DProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    // FIX 1: Removed px-6 from section — each child now manages its own horizontal spacing.
    // This prevents the full-bleed CTA from ever needing the w-screen hack.
   <motion.section
  initial="hidden"
  animate="visible"
  variants={staggerContainer}
  className="text-white/80 bg-black overflow-x-hidden"
>

      {/* Top Content Block */}
<motion.div
  variants={fadeUp}
  viewport={{ once: true }}
  whileInView="visible"
  initial="hidden"
  className="max-w-6xl text-white mx-auto bg-black px-6 sm:px-10 py-10 text-center space-y-6"
>     <motion.h2
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-6 sm:mb-10"
>
          Why Choose Casa Kraft – The Best Villa Renovation Company in Dubai
       </motion.h2>
        <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  }}
  className="space-y-4 text-white/80 text-sm sm:text-base text-center"
>
          <p>
            Choosing the{' '}
            <b className="text-[#4eb5a9]">
              <a href="https://casakraftinteriors.ae/villa-renovation-company-dubai">
                best renovation company for your villa
              </a>
            </b>{' '}
            is probably the most crucial decision you would ever have to make, and Casa Kraft has been
            designed to ensure that you get every possible justification for that decision. At Casa
            Kraft, we ensure that your villa transformation is completely hassle free from beginning to
            end. Each of our projects come with a 10-year warranty, free 3D concept design and a free
            site visit absolutely free of charge. We provide a full design and build package with only
            one agreement throughout, and our team ensures that all authorities such as Dubai
            Municipality, Nakheel, Emaar, Trakhees, and DDA are all approved on your behalf. You can
            always visit our store located at The Curve Building, Sheikh Zayed Service Road, and we
            assure you that we would receive a rating of five stars.
          </p>
           
     <h3 className="text-2xl sm:text-3xl md:text-2xl font-semibold text-white text-center mb-6 sm:mb-5">
        Why Homeowners Trust Casa Kraft for Villa Renovation in Dubai
        </h3>
     
        <p>A villa renovation is an important project that calls for proper planning and execution by highly skilled experts. We offer a comprehensive service for your projects from design to completion, thus ensuring hassle-free villa renovations. Our experts study your lifestyle and needs and create renovation solutions accordingly. Everything from optimizing space to selecting appropriate materials and finishing is done in detail. Casa Kraft is one of the leading <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/"> renovation companies in Dubai</a></b> and can bring together creativity and professionalism to create sophisticated and luxurious interiors for you.</p>
</motion.div>        
</motion.div>
     
      
      {/* Portfolio / Marquee Section */}
      <div className="w-full overflow-hidden">
        <div className="text-center mb-8 sm:mb-12 px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-4">
            Our Villa  Renovation Portfolio
          </h2>
          <p className="max-w-3xl mx-auto text-white/80 text-sm sm:text-base">
            Explore a selection of beautifully designed Villas showcasing our craftsmanship,
            premium finishes, and attention to detail.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-5 w-max">
            {[...kitchenGallery, ...kitchenGallery].map((image, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`Kitchen Project ${index + 1}`}
                  width={600}
                  height={450}
                  // FIX 3: Simplified image sizes — was causing layout inconsistency on sm breakpoint
                  className="w-[280px] sm:w-[340px] h-[210px] sm:h-[255px] object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  {/* FIX 4: Was "text-white/80text-lg" (missing space) → split into two classes */}
                  <span className="text-white/80 text-lg font-medium">View Design</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-black text-white/80 py-14 px-6">
        <div className="max-w-6xl mx-auto">
         <motion.h2
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-6 sm:mb-10"
>
            {/* FIX 6: Capitalised "Dubai" properly */}
            Our Villa Renovation Process in Dubai
        </motion.h2>
          <p className="text-center text-sm md:text-base text-white/80 mb-10 ">
            A structured journey from consultation to handover & inspection.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {krSteps.map((step) => (
              <div
                key={step.id}
                className="bg-white/5 hover:bg-white/10 transition rounded-xl p-6 border border-white/10"
              >
                <div className="text-[#4eb5a9] font-bold text-sm mb-2">{step.id}</div>
                <h3 className="font-conthrax text-sm md:text-base mb-3">{step.title}</h3>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      {/* FIX 7: Replaced w-screen + ml-[calc(50%-50vw)] with full-width block.
               Since section no longer has px-6, this naturally spans edge-to-edge. */}
      <div className="bg-[#111111] py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white uppercase mb-2">
            Get In Touch With Casa Kraft
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-8">
            Villa Interior Design & Renovation Company in Dubai
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/gallery"
              className="bg-[#1f5a53] hover:bg-[#276d64] text-white px-6 py-3 text-base transition text-center"
            >
              See Our Projects
            </a>
            <a
              href="https://wa.me/971586023677"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#4eb5a9] text-white hover:bg-[#4eb5a9] hover:text-black px-6 py-3 text-base transition text-center"
            >
              WhatsApp Us
            </a>
            <a
              href="/contact-us"
              className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-base transition text-center"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>

      {/* Areas We Serve */}
      <div className="bg-black py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
          <motion.h2
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-6 sm:mb-10"
>


              Areas & Communities We Serve
           </motion.h2>
            <p className="text-zinc-400 max-w-4xl mx-auto text-sm sm:text-base">
              Casa Kraft Interior Design & Renovation is one of the{' '}
              <b className="text-[#4eb5a9]">
                <a href="https://casakraftinteriors.ae/">top interior design companies in the UAE</a>
              </b>{' '}
              that offers exceptional villa interior design services in the best neighborhoods of
              Dubai. Whether you have a luxurious villa by the seaside in Palm Jumeirah, a bespoke
              residence in Emirates Hills or a contemporary villa in Damac Hills and Damac Lagoons,
              our designers create an interior that reflects your lifestyle and personality. Our
              portfolio also includes beautiful and elegant designs for family houses in Arabian
              Ranches, luxury villa interiors in Dubai Hills Estate and modern villa makeovers in
              Jumeirah Golf Estates, Nad Al Sheba, JVC and JVT. We work on projects outside Dubai
              too such as in Abu Dhabi, Sharjah and other parts of the UAE.
            </p>
          </div>

          {/* FIX 8: Added xs-friendly grid — 1 col on very small screens, 2 on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-zinc-900 border border-zinc-800 p-4 hover:border-[#4eb5a9] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#4eb5a9]/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#4eb5a9]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white/80">
                  {area.title}
                </h3>
                {/* FIX 9: Removed {area.desc} — field doesn't exist in data, was rendering "undefined" */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <TestimonialCarousel />

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto bg-black px-6 sm:px-10 py-10">
      <motion.h2
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-6 sm:mb-10"
>
          Villa Renovation in Dubai – FAQs
       </motion.h2>
        <p className="text-white/80  text-sm sm:text-base mb-6 text-center">
          Find quick answers to common questions about our Villa Renovation services in Dubai.
        </p>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <details key={index} className="group border-b border-zinc-700 py-3">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className=" font-semibold text-sm sm:text-base text-white/80 text-left pr-4">
                  {item.question}
                </span>
                <span className="ml-3 text-white/80 text-xl transition-transform group-open:rotate-45 flex-shrink-0">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm sm:text-base  text-white/70 leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute -top-10 right-0 text-white/80 text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Preview"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg"
            />
             
          </div>
           
        </div>
           
      )}
       <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">Are You Ready To Get Started With Your Villa Renovation?
</h2>
<p className="text-zinc-400 max-w-5xl text-center mb-10 mx-auto text-sm sm:text-base">
  With the help of Casa Kraft Interior Design & Renovation, you can make sure that the <b className="text-[#4eb5a9]"
><a href="https://casakraftinteriors.ae/transform-your-dream-home-expert-villa-renovation-services-in-dubai">villa renovation</a></b>  dream comes true.  If you are considering renovating, upgrading the interiors of your villa, remodeling the kitchen of your villa, or doing a total fit out for your villa, our experts are here to help you achieve it. Get in touch with Casa kraft interior design & renovation now to book an appointment and find out more about us </p>
</motion.section>  );
};

export default DProjects;
