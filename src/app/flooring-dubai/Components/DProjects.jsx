'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote:
        "We have engaged Casa Kraft Interiors for the installation of SPC flooring in our villa in Dubai. The whole procedure was professionally executed from beginning to end. They assisted us in selecting the right flooring design and completed the installation on time. The outcome of their work has made a huge difference in our house. Very highly recommended!",
      author: "George Wilson, Business Bay, Dubai",
    },
    {
      quote:
        "We wanted to get some durable flooring installed in our office premises. Casa Kraft Interiors has done an exemplary job by providing the best quality floor with very efficient installation services. Now our workplace looks very modern and professional.",
      author: " Emily Johnson, Emirates Hills",
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
  "/images/fr1.png",
  "/images/fr2.png",
  "/images/fr3.png",
  "/images/fr4.png",
  "/images/fr5.png",
  "/images/fr6.png",
  "/images/fr7.png",
  "/images/fr8.png",
 
  
];

const krSteps = [
  {
    id: '01',
    title: 'Consultation & Site Assessment',
    desc: 'Improve your area with the best flooring Dubai products recommendations.',
  },
  {
    id: '02',
    title: 'Material Selection & Style Guidance',
    desc: 'Select from premium flooring Dubai choices to align with your vision and budget.',
  },
  {
    id: '03',
    title: 'Subfloor Preparation & Waterproofing',
    desc: 'Ensure high-end and solid installation.',
  },
  {
    id: '04',
    title: 'Installation ',
    desc: 'Installation by Certified Flooring Contractors Dubai – offers expert flooring services Dubai for all kinds of floors.',
  },
  {
    id: '05',
    title: 'Finishing Touches',
    desc: 'Polishing, Sealing & Finishing Touches – High quality finishes for luxury and durability.',
  },
  {
    id: '06',
    title: 'Client Handover',
    desc: 'Customer satisfaction and premium quality assurance.',
  },
];

const serviceAreas = [
  { title: "Jumeirah Lake Towers " },
  { title: "Business Bay" },
  { title: "Dubai Internet City" },
  { title: "Downtown Dubai" },
  { title: "Dubai Hills Estate" },
  { title: "Dubai Silicon Oasis" },
  { title: " Dubai Marina" },
  { title: "DIFC" },
];

const faqs = [
  {
    question: 'What is the best flooring option for homes in Dubai?',
    answer:
      'There are several types of floorings available that suit different styles and needs. SPC and luxury vinyl floors are some of the most sought after floor types due to their durability and waterproof nature.',
  },
  {
    question: 'Is SPC flooring better than laminate flooring?',
    answer:
      'Yes. SPC flooring is more durable and resistant to water as opposed to conventional laminate flooring.',
  },
  {
    question: 'How many days will it take for flooring installation?',
    answer:
      'Flooring installation takes a couple of days depending on the project scale and flooring type.',
  },
  {
    question: 'Do you provide flooring for commercial properties?',
    answer:
      'Yes. Casa Kraft Interiors provides flooring services for office spaces, retail spaces, food establishments, and other commercial locations around Dubai and the UAE.',
  },
  {
    question: 'Can you assist me in choosing the right flooring material?',
    answer:
      'Yes. We will gladly assist you in picking the right flooring material.',
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
     Why Choose Casa Kraft Interiors for Flooring Dubai?
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
    Casa Kraft Interiors is known as a reliable supplier of high-end interior solutions in Dubai and the UAE. Our specializations in flooring installation, renovations, fit-outs, and interior designs enable us to provide complete flooring solutions that are functional, aesthetic, and durable. We provide a wide selection of premium flooring solutions, consultation services, installation services, affordable pricing, and top-notch customer support. Each project we do is handled with care, and our clients get more than what they expect from their flooring solutions. For those looking for SPC flooring Dubai, vinyl flooring Dubai, parquet flooring Dubai, laminate flooring Dubai, and a total flooring installation service, Casa Kraft Interiors will give you everything you need.Contact Casa Kraft Interiors now to get the best high-end flooring solutions. <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/contact-us"></a>Contact Casa Kraft Interiors</b> now to get the best high-end flooring solutions.


          </p>
           
    
</motion.div>        
</motion.div>
     
      
      {/* Portfolio / Marquee Section */}
      <div className="w-full overflow-hidden">
        <div className="text-center mb-8 sm:mb-12 px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-4">
            Our Flooring Dubai Portfolio
          </h2>
          <p className="max-w-3xl mx-auto text-white/80 text-sm sm:text-base">
Explore a selection of beautifully designed flooring projects across Dubai, showcasing our craftsmanship, premium finishes, and attention to detail.          </p>
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
           Our Flooring Process In Dubai

        </motion.h2>
          <p className="text-center text-sm md:text-base text-white/80 mb-10 ">
           We follow a structured, transparent process so you always know what's happening with your project:
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
           Floor Fixing & Installation Company in Dubai
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
       <div className="text-center mb-5 sm:mb-12">
          <motion.h2
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="text-2xl sm:text-3xl md:text-4xl mt-5 font-semibold text-white text-center  sm:mb-5"
>
       Professional Flooring Installation Services in Dubai
           </motion.h2>
           <p className="mx-auto text-center text-white/80 max-w-4xl text-sm md:text-base">          
           Selection of premium flooring products is just the first step to successfully installing your floor. Proper flooring installation is equally vital to ensure optimum performance, durability, and appearance of your floor. We at Casa Kraft Interiors offer professional flooring installation service in Dubai that involves highly experienced and skilled experts. Our floor installation procedure starts with a thorough inspection and preparation of the floor, including moisture inspection, leveling, and inspection of the substrate of the floor. After preparation of the floor, we install the floor using top quality techniques to assure proper fitting and high performance. If you need SPC floor installation, vinyl floor installation, parquet floor installation, laminate floor installation, and wooden floor installation, we strictly follow quality measures from the start till the end of the process.

          </p>
          </div>
       <div className="max-w-7xl mx-auto px-6 ">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

    {/* Residential Flooring */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-[#4eb5a9] transition">
      <h3 className="text-2xl font-semibold text-white mb-6">
        Flooring Solutions for Residential Properties
      </h3>

     <p className="text-xs md:text-sm text-white/80 leading-relaxed">
        Casa Kraft Interiors designs special floorings for apartments, villas,
        penthouses, and luxury houses in Dubai. As each house is different and
        requires special considerations, we help our clients choose appropriate
        floor coverings for their houses based on their lifestyles and
        preferences. For family houses, the most commonly used types of
        floorings include SPC and luxury vinyl floorings owing to their
        moisture and scratch resistance and durability. <br /> <br /> For luxury homes, the
        most preferred floorings include parquet and high quality wooden
        floorings due to their beauty and elegance. Residential floorings will
        make your living spaces more comfortable and attractive.
      </p>
    </div>

    {/* Commercial Flooring */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-[#4eb5a9] transition">
      <h3 className="text-2xl font-semibold text-white mb-6">
        Commercial Flooring Services Dubai
      </h3>

     <p className="text-xs md:text-sm text-white/80 leading-relaxed">
        Spaces intended for commercial purposes need flooring that can bear
        high traffic without compromising its professional look. Casa Kraft
        Interiors offers robust flooring systems for various commercial spaces
        such as offices, retail establishments, restaurants, hotels, clinics,
        schools, and more.
        <br />
        <br />
        Casa Kraft Interiors offers commercial floorings that are robust, easy
        to maintain, and visually appealing to help the business function well
        and make a good impression on clients and customers alike. We
        coordinate closely with the owners and managers of businesses to ensure
        prompt installation of floors without any disruptions. No matter what
        kind of commercial space you have or what your needs may be, we offer
        suitable flooring solutions.
      </p>
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
         Flooring Services in Dubai – FAQs
       </motion.h2>
        <p className="text-white/80  text-sm sm:text-base mb-6 text-center">
          Find quick answers to common questions about our Flooring services in Dubai.
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
       <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">Transform Your Space with Premium Flooring Dubai
</h2>
<p className="text-zinc-400 max-w-5xl text-center mb-10 mx-auto text-sm sm:text-base">
 The floors form one of the most significant aspects of your property’s interior design. From luxury homes to modern apartments and commercial properties, the right floor choices will help increase not only functionality but also the overall appearance of the building. Casa Kraft Interiors is where you get access to high-quality SPC flooring, vinyl flooring, parquet flooring, laminate flooring, and wooden flooring, all customized according to your needs. We strive to offer the best quality services to our clients through our dedicated and professional team. Are you looking for the best flooring for your property? Visit us at Casa Kraft Interiors for more information and become part of why we are among the best flooring companies in Dubai.



 </p>
</motion.section>  );
};

export default DProjects;
