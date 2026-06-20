'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote:
        "Our apartment in Downtown Dubai was renovated by Casa Kraft. Our living space looks totally different now with their innovative designs and luxurious renovations. We strongly recommend Casa Kraft for top-class apartment renovation in Dubai.",
      author: "Sarah M., Downtown Dubai",
    },
    {
      quote:
        "Deciding to renovate our apartment using the services of Casa Kraft has turned out to be one of the best decisions we have ever taken.",
      author: " Ahmed R., Dubai Marina",
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

const aptGallery = [
  "/images/aptt1.png",
  "/images/aptt2.png",
  "/images/aptt3.png",
  "/images/aptt4.png",
  "/images/aptt5.png",
  "/images/aptt6.png",
  "/images/aptt7.jpeg",
  "/images/aptt8.jpeg",
  "/images/aptt9.jpeg",
  "/images/aptt10.jpeg",
  "/images/aptt11.jpeg",
  "/images/aptt12.jpeg",
  "/images/aptt13.jpeg",
  "/images/aptt14.jpeg",
  "/images/aptt15.jpeg",
  "/images/aptt16.jpeg",
  "/images/aptt17.jpeg",
  "/images/aptt18.jpeg",
  "/images/aptt19.jpeg",
  "/images/aptt20.jpeg",
  "/images/aptt21.jpeg",
  "/images/aptt22.jpeg",
  "/images/aptt23.jpeg",
  "/images/aptt24.jpeg",
  "/images/aptt25.jpeg",
  "/images/aptt26.jpeg",
  "/images/aptt27.jpeg",
  "/images/aptt28.jpeg",
];

const krSteps = [
  {
    id: '01',
    title: 'Consultation and Site Assessment',
    desc: 'All renovation projects start off by getting acquainted with the needs of the customer. At the stage of the first meeting, our company analyzes your apartment, studies your needs, and highlights areas that require improvements.',
  },
  {
    id: '02',
    title: 'Design Development',
    desc: 'After identifying what needs to be done at the next stage, our specialists develop a concept of design and visualization of 3D images allowing you to understand how your home will look after the renovation process is completed.',
  },
  {
    id: '03',
    title: 'Materials Selection',
    desc: 'We choose high-quality materials for the renovation that will satisfy both the aesthetic needs and be reliable.',
  },
  {
    id: '04',
    title: 'Renovation and fitouts',
    desc: 'Our team of knowledgeable project managers will manage the entire process of renovation to make sure that deadlines, quality standards and budgetary considerations are met during the course of the project.',
  },
  {
    id: '05',
    title: 'Final Styling and Handover',
    desc: 'We finish off with the final touch ups by adding styling elements, arranging furniture and using decorative accessories before completing the project.',
  },
];

const serviceAreas = [
  { title: "Jumeirah Lake Towers " },
  { title: "Business Bay" },
  { title: "City Walk" },
  { title: "Downtown Dubai" },
  { title: "Dubai Hills Estate" },
  { title: "Jumeirah Beach Residence" },
  { title: " Dubai Marina" },
  { title: "Palm Jumeirah" },
];

const faqs = [
  {
    question: 'Do you provide complete apartment renovation services?',
    answer:
      'Yes. At our company, we undertake the provision of complete  service  renovations in Dubai, which involve every step of the remodeling process, including design, planning, building, fit-out and finishing. As part of our full service, we include our unique joinery solutions, project management expertise, material sourcing, and quality assurance.',
  },
  {
    question: 'Will I see the design before renovation begins?',
    answer:
      'Certainly. Prior to the initiation of the renovation works, we will show you 3D renderings, designs and mood boards, so that you get an idea of the expected result and are fully aware of the final appearance of the renovated space.',
  },
  {
    question: 'Can you work with my existing furniture?',
    answer:
      'Of course. In addition to creating entirely new interior designs, our designers can integrate your current furnishings into the new design scheme. If necessary, we can recommend that the items be refurbished or repainted to complement the new style.',
  },
  {
    question: 'Do you handle permits for renovation work?',
    answer:
      'Yes, our company will be responsible for all the renovation permits and authorizations that are required for you to complete your project smoothly. All the necessary permits and authorizations will be arranged for you so that you can begin with your renovations without any problem.',
  },
  {
    question: 'Do you provide custom furniture designs for properties?',
    answer:
      'Yes, we definitely do. Our own joinery workshop allows us to create custom designed furniture or joinery that perfectly matches your renovation idea and fits the measurements of your property in dubai.',
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
         Why Choose Casa Kraft for Apartment Renovation Dubai?
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
           Our team has proven expertise in handling highly successful apartment renovations for some of the most distinguished residential areas of Dubai. We combine innovation with utility when creating bespoke renovation designs that make life more comfortable and increase the value of the property.Our renovations involve the selection of only the best material to achieve longevity and timeless elegance. One of the key benefits of choosing Casa Kraft is our turnkey approach where everything is managed from design approval to renovation and fit out. We ensure that clients are always kept updated and are informed about everything related to their project from beginning to end.


          </p>
           
    
</motion.div>        
</motion.div>
     
      
      {/* Portfolio / Marquee Section */}
      <div className="w-full overflow-hidden">
        <div className="text-center mb-8 sm:mb-12 px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-4">
            Our Apartment Renovation Portfolio
          </h2>
          <p className="max-w-3xl mx-auto text-white/80 text-sm sm:text-base">
            Explore a selection of beautifully designed Apartments showcasing our craftsmanship,
            premium finishes, and attention to detail.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-5 w-max">
            {[...aptGallery, ...aptGallery].map((image, index) => (
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
           Our Turnkey Apartment Renovation Process

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
            Apartment Interior Design & Renovation Company in Dubai
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


           Apartment Renovation Across Dubai

           </motion.h2>
            <p className="text-zinc-400 max-w-4xl mx-auto text-sm sm:text-base">
            We offer our services for apartment renovation projects in Dubai Marina, Downtown Dubai, Palm Jumeirah, Jumeirah Lake Towers (JLT), Business Bay, City Walk, Bluewaters Island, Dubai Hills Estate, Jumeirah Beach Residence (JBR), and many other areas around them. Our experience in this area helps us comprehend the demands of the local community, relevant permissions, and renovation specifics.

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
          Apartment Renovation in Dubai – FAQs
       </motion.h2>
        <p className="text-white/80  text-sm sm:text-base mb-6 text-center">
          Find quick answers to common questions about our Apartment Renovation services in Dubai.
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
       <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">Get Started with Your Apartment Renovation Today
</h2>
<p className="text-zinc-400 max-w-5xl text-center mb-10 mx-auto text-sm sm:text-base">
  Looking for an experienced company to renovate your apartment and make it into a comfortable living place? Then join hands with Casa Kraft Interior Design & Renovation, which is among the best providers of Apartment Renovation Dubai services. With Casa Kraft, you get nothing but great design, top quality workmanship and flawless project management.Arrange an appointment now and find out how we can transform your dream apartment into reality through expertly crafted renovations that match your needs and budget.
 </p>
</motion.section>  );
};

export default DProjects;
