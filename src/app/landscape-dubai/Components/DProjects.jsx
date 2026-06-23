'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote:
        "Thanks to Casa Kraft, we were able to turn our villa garden into an oasis. The design team at Casa Kraft captured the essence of what we wanted and gave us a gorgeous garden space complete with planting, seating, and lighting. Great job!",
      author: "Leo , Dubai",
    },
    {
      quote:
        "We were seeking a luxury outdoor area that could add to the beauty of our villa and create an ideal place where we can entertain our friends and family. The professional staff at Casa Kraft has been able to deliver beyond our expectations through their innovative ideas and expertise. The process from 3D landscape design to the installation of the project has been perfect in every way. The result of the landscape has not only added to the beauty of our home but also made its appearance totally different.",
      author: "Ella ,. Dubai",
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
  "/images/ls2.png",
  "/images/ls3.png",
  "/images/ls4.png",
  "/images/ls5.png",
  "/images/ls6.png",
  "/images/ls7.png",
];

const krSteps = [
  {
    id: '01',
    title: 'Discovery Consultation',
    desc: 'Every project starts with a comprehensive consultation where we will learn about your vision, needs, lifestyle, budget, and your objectives regarding the outdoors.',
  },
  {
    id: '02',
    title: 'Site Assessment and Analysis',
    desc: 'Our experts will make a thorough assessment of the site and evaluate its size, topology, soil properties, drainage, sun exposure, vegetation, and architecture in order to reveal both possibilities and difficulties.',
  },
  {
    id: '03',
    title: 'Concept Design',
    desc: 'Taking into account the information obtained during the site analysis and your needs, we will design a custom landscape concept that includes hard- and softscaping elements, outdoor living spaces, and other useful aspects.',
  },
  {
    id: '04',
    title: '3D Landscape Visualization',
    desc: 'We will make use of modern technologies and provide you with 3D visualizations of the suggested landscape project.',
  },
  {
    id: '05',
    title: 'Materials & Plant Selection',
    desc: 'We choose high-quality materials, pavement solutions, natural stones, decorative items, plants, trees, and shrubs that suit your design and thrive well in Dubai’s weather conditions.',
  },
  {
    id: '06',
    title: 'Irrigation & Outdoor Lighting Design',
    desc: 'We design your garden’s irrigation and outdoor lighting schemes to ensure proper growth of plants, save water and light up your space at night.',
  },
  {
    id: '07',
    title: 'Comprehensive Technical Planning',
    desc: 'We create technical drawings for your construction, planting, grading, irrigation, materials and all other documents that you need for hassle-free project execution.',
  },
  {
    id: '08',
    title: 'Budget Clearance & Project Timetable',
    desc: 'After designing, we will give you a detailed project proposal and schedule of work to assure full transparency prior to starting the work.',
  },
  {
    id: '09',
    title: 'Landscape construction & Installation',
    desc: 'Our skilled landscape experts handle each phase of the project including landscaping, hardscaping, planting, irrigation, water bodies, pergolas, paths and outdoor construction.',
  },
  {
    id: '10',
    title: 'Quality Inspection & Finish Work',
    desc: 'Every piece is inspected to meet our high quality standards. The final touches and plant improvements are made to give a perfect finish to the project.',
  },
  {
    id: '11',
    title: 'Final Inspection & Project Delivery',
    desc: 'A final inspection is done with the client to make sure everything has been completed to their satisfaction. The finished project is then delivered to them.',
  },
  {
    id: '12',
    title: 'Landscape Maintenance',
    desc: 'We can provide maintenance services such as lawn maintenance, pruning, checking for proper irrigation, planting and more.',
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
    question: 'How much does landscape design cost in Dubai?',
    answer:
      'The prices for landscape design differ based on the scale and complexity of the project as well as other factors such as materials used.',
  },
  {
    question: 'Do you offer 3D visualization of landscape?',
    answer:
      'Yes, we offer our 3D Landscape Visualization services during the process of Landscape Design Dubai. Before any work is started on your project, we create realistic 3D visualization that gives you an idea about the design of your future landscape. These visualizations show planting, hardscaping, outdoor living spaces, water feature design, lighting concepts, etc.',
  },
  {
    question: 'Is it possible for you to design and construct the landscape?',
    answer:
      'Yes, Casa Kraft Interior Design & Renovation does offer you Landscape Design Dubai services along with the construction works under one umbrella. Our comprehensive approach will include all phases of the projects such as consultations, concept design, detailed planning, construction, and installations of landscapes.',
  },
  {
    question: 'Do you design the irrigation system?',
    answer:
      'Yes, we offer professional Irrigation System Design services for Dubai. We design and install irrigation systems that are not only effective in water distribution but also guarantee healthy and beautiful landscaping. Every irrigation system designed by our company is created based on the specific requirements of the property and plants planted there.',
  },
  {
    question: 'Which property types do you work with?',
    answer:
      'We work with villas, townhouses, gardens, commercial facilities, hospitality projects, communities, and any public area.',
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
      transition: {
        staggerChildren: 0.2,
      },
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
      <div className="max-w-4xl mx-auto px-6 py-10 text-left">
        {/* Main H2 Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6 text-center md:text-left">
          Premier Landscape Design Company Dubai
        </h2>
        
        {/* Intro Paragraph */}
        <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-10 text-center md:text-left">
          Casa Kraft Interior Design & Renovation is one of the <b className="text-[#4eb5a9]"
        ><a href="https://casakraftinteriors.ae/"> leading companies for Landscaping Dubai services</a></b>. We feel that like the interior of a house, the outdoor area of a house needs to be designed with the same creativity and imagination. Our process is based on innovative design ideas, premium materials and technical skills. Before creating our unique strategy for Outdoor Landscape Design Dubai, we study the architectural design of the property, its environment and the client's needs. We aim at making outdoor areas that will look beautiful and functional all year round. Our solutions are tailor-made for any type of garden and courtyard from small to big.
        </p>

        {/* Dynamic Text Rows (No Boxes) */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 text-center">Luxury Landscape Design Dubai Services</h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 mt-6">Villa Landscape Design Dubai</h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Our services for villa landscape designs in Dubai consist of designing lavish outdoor settings which will go well with the luxury villa properties. Our designers will work on elegant gardens, elaborate outdoor sitting areas, shaded sitting areas, decorated walkways, and pool side areas. The design of every villa will be designed in such a way as to make both the appearance and the functionality of the place more enjoyable. We design outdoor spaces for people to relax and have fun. We design relaxing, entertaining, and socializing outdoor spaces using our expertise in Luxury Garden Design Dubai.
            </p>
          </div>

          <div className="border-t border-zinc-900 pt-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">Garden Landscape Design</h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              The professionally designed Garden Landscape Design will definitely add to the aesthetics of the property. We have an expert design team that creates unique designs of gardens that include lots of greenery and plants, decorations, and landscape designs for sustainability.Each garden is designed specifically to grow well in Dubai’s climate and to be beautiful throughout the year.
            </p>
          </div>

          <div className="border-t border-zinc-900 pt-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">Hardscape and Outdoor Landscape Design Dubai</h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Hardscapes are the basic structure of all well-designed landscapes. In our Outdoor Landscape Design Dubai services, we incorporate premium paving, natural stone paths, decorative walls, outdoor patios, pergolas, and entertaining areas to add function and style to your landscape.
            </p>
          </div>

          <div className="border-t border-zinc-900 pt-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">Irrigation System Design Dubai</h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              A professional Irrigation System Design Dubai will allow you to have not only an eco-friendly but a flourishing garden. We design efficient watering systems in order to water your lawn or garden properly and reduce unnecessary expenses. Using the latest irrigation technologies in our Landscape Design Dubai projects, we make sure that the plants stay healthy and the system itself operates effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Brand Specific Material & Modern Designs Block */}
      <div className="max-w-5xl mx-auto px-6 py-10 text-center space-y-8">
        <div className="border border-zinc-800 bg-zinc-950/50 p-6 sm:p-10 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Benefits of Professional Landscape Design</h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-4xl mx-auto">
            Landscape Designing is beneficial to investors who own properties since it gives many advantages to those property owners. For instance, landscape design improves the curb appeal of the property, adds value to the property, and makes outdoor living spaces that make the owner of the property enjoy the outdoor space. Professional landscaping also assists in maximizing the use of space by making the space look bigger.
          </p>
        </div>
      </div>

      {/* Portfolio / Marquee Section */}
      <div className="w-full overflow-hidden">
        <div className="text-center mb-8 sm:mb-12 px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-4">
            Our Luxury Landscaping Portfolio
          </h2>
          <p className="max-w-3xl mx-auto text-white/80 text-sm sm:text-base">
            Explore a selection of beautifully designed gardens, luxury villas outdoor layouts, custom structures showcasing our premium stone finishes, seamless custom designs, and expert technical landscaping execution across Dubai.
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
                  alt={`Landscape Project ${index + 1}`}
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

      {/* Converted Process Section - Now 12 Boxes Adjusted in a Grid Layout */}
      <div className="bg-black text-white/80 py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-6 sm:mb-10"
          >
            Our Landscape Design Process
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {krSteps.map((step) => (
              <div
                key={step.id}
                className="bg-white/5 hover:bg-white/10 transition rounded-xl p-6 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#4eb5a9] font-bold text-sm mb-2">{step.id}</div>
                  <h3 className="font-bold text-sm md:text-base text-white mb-3 tracking-wide uppercase">
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
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-2"
        >
          Why Choose Casa Kraft for Landscape Design Dubai
        </motion.h2>
        <div className="space-y-4 text-white/80 text-sm sm:text-base text-center max-w-5xl mx-auto">
          <p>
            As a trusted Landscape Contractors Dubai, Casa Kraft Interior Design & Renovation brings an entirely turnkey solution to you, which entails all aspects of landscape construction. From design creation and 3D visualizations through construction to installation and finally styling, our highly skilled professionals are involved with the project in all its aspects. We have a reputation for superior craftsmanship, innovative design ideas, and satisfaction of our clients. Every property is special in its own way, and therefore, we offer a fully customized solution of Landscape Design Dubai. With our creativity and high quality of work, we can ensure that you will be pleased with the results of our services.
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
            Bespoke Landscaping & Luxury Outdoor Spaces in Dubai
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
              Luxury Landscape Architecture Across Dubai
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
              <summary className="flex items-center justify-between cursor-pointer list-none text-white font-medium text-sm sm:text-base py-2">
                <span>{item.question}</span>
                <span className="transition group-open:rotate-180 text-[#4eb5a9]">
                  <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed transition-all duration-300">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
      {/* Bottom Conclusion & Free Consultation Block */}
            <div className="max-w-5xl mx-auto px-6 pb-16 pt-12 border-t border-zinc-900">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-4 uppercase tracking-wide">
                Contact Us for Premium Landscape Design Dubai
              </h2>
              
              <div className="space-y-6 text-zinc-400 max-w-4xl mx-auto text-sm sm:text-base leading-relaxed text-center">
                <p>
                  Casa Kraft Interior Design & Renovation is the place to be if you are searching for professional Landscape Design Dubai services. We offer luxury landscape design services including Luxury Landscaping Dubai, Garden Landscape Design, Landscape Architecture Dubai, and full Outdoor Landscape Design Dubai. Get in touch with us now to schedule a consultation session and see what our premier landscaping service can do for you.                </p>
              </div>
            </div>
          
    </motion.section>
  );
};

export default DProjects;