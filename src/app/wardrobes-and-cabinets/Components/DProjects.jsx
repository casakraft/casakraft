'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote:
        "Our requirement was a wardrobe that could be integrated into our Business Bay apartment and Casa Kraft Interior Design & Renovation did not disappoint. Their design made use of even the tiniest of spaces available and the workmanship is simply impeccable.Highly recommended.",
      author: "iqra Khalid, Dubai",
    },
    {
      quote:
        "Everything about this project was done in a professional manner, from the initial site visit to the completion of the installation. Our walk-in wardrobe is just fantastic and the soft close drawers were an excellent choice.",
      author: " Mohammed Rashid, Dubai",
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
  "/images/wc2.png",
  "/images/wc3.png",
  "/images/wc4.png",
  "/images/wc5.png",
  "/images/wc6.png",
  "/images/wc7.png",
];

const krSteps = [
  {
    id: '01',
    title: 'Site measurement and consultation',
    desc: 'gaining an insight into your space, storage requirements, and designs',
  },
  {
    id: '02',
    title: '3D design and material selection',
    desc: 'creating a vision of how the end product will look like before manufacturing starts',
  },
  {
    id: '03',
    title: 'Workshop construction',
    desc: 'made from quality materials and finishes in a controlled environment',
  },
  {
    id: '04',
    title: 'Installation on site',
    desc: 'done by our skilled carpentry crew in an efficient way',
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
    question: 'What is the difference between a built-in and a walk-in wardrobe?',
    answer:
      ' A built-in wardrobe will be designed to fit into the space available along a wall or into a niche, making it perfect for apartments and smaller rooms. Walk-in wardrobes will be designed as special rooms for getting ready, requiring more space than built-in wardrobes, usually used in villas and master rooms.',
  },
  {
    question: 'Are there any customization services for wardrobes and cabinets?',
    answer:
      ' Yes. We provide highly customized wardrobe cabinet Dubai service including all details such as materials, finishes, layouts, and fittings that we design specifically for you.',
  },
  {
    question: ' What is the duration of wardrobe installation in Dubai?',
    answer:
      'The usual installation time for the wardrobe ranges from 7 to 14 days from the date of design confirmation depending on the dimensions and customization.',
  },
  {
    question: ' Are you able to design wardrobes for apartments and villas?',
    answer:
      'Yes. We design storage solutions for all kinds of properties.',
  },
  {
    question: 'Which materials do you use for your wardrobe and cabinet?',
    answer:
      ' We manufacture a large variety of high-end material, such as laminates, wooden veneers, and lacquer coating, along with sturdy hardware for superior performance and maintenance.',
  },
  {
    question: 'Do you offer kitchen cabinets and bathroom vanities also?',
    answer:
      'Yes. In addition to wardrobes, we also manufacture high-end kitchen cabinets, wardrobes, bathrooms vanities & entire house solutions, making your home design consistent.',
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
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="text-white/80 bg-black overflow-x-hidden"
    >
     {/* Integrated Section with H2 Heading and Clean Text Rows */}
     <div className="max-w-4xl mx-auto px-6 py-10 text-left flex flex-col space-y-4">
  {/* Main H2 Title */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center md:text-left pb-4">
    Best Wardrobe and Cabinet Design Services in Dubai
  </h2>
  
  {/* Intro Paragraph */}
  <p className="text-sm sm:text-base text-white/80 leading-relaxed md:text-left ">
    Our company <b className="text-[#4eb5a9]"><a href="/renovation-dubai">Casa Kraft Interior Design & Renovation</a></b> has earned its position as one of the best interior fit out companies in Dubai and the proof of it comes from our cabinetry division. We collaborate with property owners, property developers and interior designers for providing storage solutions, which are not only stylish but practical as well. From initial designing till the time of installation we ensure that our clients get high quality products, which can close properly and are positioned exactly at the required places.
  </p>

  {/* Custom Wardrobe Design */}
  <h3 className="text-xl sm:text-2xl font-semibold text-white">
    Custom Wardrobe Design services in Dubai
  </h3>
  <p className="text-sm sm:text-base text-white/70 leading-relaxed text-justify">
    The wardrobe must blend into the design of your room rather than clash with it. Our professional designers have extensive expertise in providing <b className="text-[#4eb5a9]"><a href="https://www.google.com/search?sa=X&sca_esv=100be553d7950a9c&cs=0&biw=1536&bih=695&sxsrf=APpeQntVguqBuxSejPLvfLmpqHdvk32mMw:1782208723294&kgmid=/g/11yql27kgy&q=Casa+Kraft+Interiors&shem=epsd1,ltac&shndl=30&source=sh/x/loc/uni/m1/1&kgs=030419ba86c8e919&utm_source=epsd1,ltac,sh/x/loc/uni/m1/1">custom wardrobes in Dubai</a></b> that will merge with your interior, regardless of whether you have a minimalist interior or an elegant and contemporary one. Our wardrobes feature a modular design, which enables us to fit your wardrobe in even the most cramped corners of your apartment or villa. The advantage of modular construction is that it allows for easy future modification of shelves, drawers and hangers.
  </p>

  {/* Kitchen Cabinets */}
  <h3 className="text-xl sm:text-2xl font-semibold text-white">
    Kitchen Cabinets
  </h3>
  <p className="text-sm sm:text-base text-white/70 leading-relaxed text-justify">
    Custom kitchen cabinets from Casa kraft offer you smart storage along with elegant design. We offer <b className="text-[#4eb5a9]"><a href="/kitchen-renovation">modern kitchen designs</a></b> which offer better use of space along with increased functionality and beauty.
  </p>

  {/* Bathroom Vanity Cabinets */}
  <h3 className="text-xl sm:text-2xl font-semibold text-white">
    Bathroom Vanity Cabinets
  </h3>
  <p className="text-sm sm:text-base text-white/70 leading-relaxed text-justify">
    Casa kraft designs your bathroom cabinets with elegance along with functionality in mind. We offer custom-designed vanity cabinets and storage cabinets, and other storage solutions for your <b className="text-[#4eb5a9]"><a href="/bathroom-renovation">bathroom renovation</a></b>.
  </p>

  {/* Complete House Storage Solutions */}
  <h3 className="text-xl sm:text-2xl font-semibold text-white">
    Complete House Storage Solutions
  </h3>
  <p className="text-sm sm:text-base text-white/70 leading-relaxed text-justify">
    Whether it be living room cabinets or TV units, utility storage or home office storage, Casa kraft can offer complete house storage solutions.
  </p>
</div>

      {/* Brand Specific Material & Modern Designs Block */}
      <div className="max-w-5xl mx-auto px-6 py-10 text-center space-y-8">
        <div className="border border-zinc-800 bg-zinc-950/50 p-6 sm:p-10 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Get Our Best Wardrobe Cabinet Dubai Solutions</h2>
          <p className="text-left text-sm sm:text-base text-white/80 leading-relaxed max-w-4xl mx-auto">
            In addition to bedrooms, we have a cabinet manufacturing line that caters to the needs of storage solutions for the entire house. Our premium kitchen cabinets, wardrobes, bathroom cabinets and whole-house storage options are just some of the products that we provide, so that our customers can create the same design theme in all parts of the house. Custom wardrobes from our company combine beautiful wood grain patterns with modern appeal. In terms of materials, we offer a variety of types to suit any taste: matte lacquer, high gloss lacquer or even natural wood veneers.
          </p>
        </div>

        <div className="border border-zinc-800 bg-zinc-950/50 p-6 sm:p-10 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Modern Designs That Match Your Interiors</h2>
          <p className="text-left text-sm sm:text-base text-white/80 leading-relaxed max-w-4xl mx-auto">
            In trends in interior design change fast but your wardrobe should be timeless enough to fit into your life for many years to come. Our experts make sure to create a modern design that will reflect the latest style trends while not going out of date. Modern wardrobes and cabinets designed to fit your interior, with different types of doors sliding and hinged, mirrored and matte surfaces, handleless push system and classic handles, everything is made to blend in with your existing interior style.
          </p>
        </div>
      </div>

      {/* Portfolio / Marquee Section */}
      <div className="w-full overflow-hidden">
        <div className="text-center mb-8 sm:mb-12 px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-4">
            Our Bespoke Wardrobe & Cabinet Portfolio
          </h2>
          <p className="max-w-3xl mx-auto text-white/80 text-sm sm:text-base">
            Explore a selection of beautifully designed walk-in closets and custom cabinetry showcasing our premium wood finishes, seamless integration, and expert craftsmanship across Dubai.
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
                  className="w-[280px] sm:w-[340px] h-[210px] sm:h-[255px] object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white/80 text-lg font-medium">View Design</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     {/* Converted Process Section - Now 4 Boxes Adjusted in a Row Layout */}
<div className="bg-black text-white/80 py-14 px-6">
  <div className="max-w-7xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-4 "
    >
      Custom Wardrobe Cabinet Design and Installation Services in Dubai
    </motion.h2>
    <p className="text-center text-sm md:text-base text-white/80 mb-10 max-w-4xl mx-auto">
      Creating an aesthetically pleasing wardrobe requires more than mere designing, as the precision in the installation phase is essential in ensuring it works perfectly. Casa Kraft Interior Design & Renovation offers professional custom wardrobe cabinet design and installation in Dubai that we do completely within our company.
      Our process includes:
    </p>

    {/* Changed to flex layout to center the last remaining item automatically like the screenshot */}
<div className="flex flex-wrap justify-center gap-6 w-full">
  {krSteps.map((step) => (
    <div
      key={step.id}
      className="bg-white/5 hover:bg-white/10 transition rounded-xl p-6 border border-white/10 flex flex-col justify-between w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-h-[180px]"
    >
      <div>
        <div className="text-[#4eb5a9] font-bold text-sm mb-2">{step.id}</div>
        <h3 className="text-sm md:text-base text-white mb-3 tracking-wide">
          {step.title}
        </h3>
        <p className="text-xs md:text-sm text-white/70 leading-relaxed">{step.desc}</p>
      </div>
    </div>
  ))}
</div>
  </div>
</div>

      {/* Secondary Dynamic Info Block (Why Choose Us) */}
      <motion.div
        variants={fadeUp}
        viewport={{ once: true }}
        whileInView="visible"
        initial="hidden"
        className="max-w-6xl text-white mx-auto bg-black px-6 sm:px-10 py-6 text-center space-y-6"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-4"
        >
          Why Choose Casa Kraft Interior Design & Renovation?
        </motion.h2>
        <div className="text-left space-y-4 text-white/80 text-sm sm:text-base text-center max-w-5xl mx-auto ">
          <p>
            Casa Kraft Interior Design & Renovation, for instance, is among the <b className="text-[#4eb5a9]"
        ><a href="https://casakraftinteriors.ae/">leading interior fit-out providers in Dubai</a></b> by virtue of its emphasis on quality craftsmanship, efficient project management and superior customer service. In contrast with most companies that depend on third party contractors, our company boasts a highly skilled carpentry staff that takes care of all aspects of the process, including design, manufacturing and installation allowing us to exercise total quality control over the services we provide. The main areas of our specialization include production of custom wardrobes and cabinets in Dubai using high quality materials, innovative designs, and installation practices suitable for residential properties including homes, apartments, villas and even luxurious properties. Every project that we carry out involves transparent pricing that includes absolutely no hidden charges, professional assistance of a dedicated design consultant, warranty for our materials and hardware, and a high level of punctuality.
          </p>
        </div>
      </motion.div>

      {/* CTA SECTION */}
      <div className="bg-[#111111] py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white uppercase mb-2">
            Get In Touch With Casa Kraft
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-8">
            Bespoke Wardrobes & Luxury Cabinetry Manufacturing in Dubai
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
              Bespoke Wardrobes & Cabinets Across Dubai
            </motion.h2>
          </div>

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
          Frequently Asked Questions (FAQs)
        </motion.h2>

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

      {/* Bottom Conclusion & Free Consultation Block */}
      <div className="max-w-5xl mx-auto px-6 pb-16 pt-12 border-t border-zinc-900">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-4 uppercase tracking-wide">
          Get Your Free Wardrobe and Cabinet Consultation
        </h2>
        <h3 className="text-[#4eb5a9] font-medium text-lg sm:text-xl mb-6 max-w-3xl mx-auto text-center">
          Get Unique Wardrobes & Cabinets That Are Built to Fit Your Lifestyle
        </h3>
        <div className="text-left space-y-6 text-zinc-400 max-w-4xl mx-auto text-sm sm:text-base leading-relaxed text-center">
          <p>
            Elevate the look and functionality of your house with unique and exquisite storage options made according to your needs. At Casa Kraft Interior Design & Renovation, we manufacture premium wardrobes, closets and cabinets with unique designs that provide both functionality and elegance. Whether it is modern built-in wardrobes, luxurious walk-in closets or customized kitchen cabinets, we deliver nothing but quality workmanship and installation for all projects.Want to make the most out of the storage solutions you have in your home through unique wardrobes and cabinets? Then get in touch with Casa Kraft Interior Design & Renovation and take advantage of free consultations.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default DProjects;