'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote:
        "Casa Kraft transformed our space into a café guests genuinely love spending time in — the lighting, the seating, the whole atmosphere just works. The project was delivered on time and exactly as promised. I'd recommend them to anyone opening or refreshing a café in Dubai.",
      author: "Sarah Williams, Business Bay",
    },
    {
      quote:
        "The redesign Casa Kraft completed for us was exceptional from start to finish. Our café now perfectly reflects our brand, and the layout keeps service smooth even at our busiest hours. Customers notice the difference the moment they walk in.",
      author: "James Carter, Downtown Dubai",
    },
    {
      quote:
        "Working with Casa Kraft was a great experience. They understood our concept immediately and turned our café into a warm, modern space our customers keep coming back to. The team was professional, easy to work with, and finished on schedule.",
      author: "Rachel Bennett, DIFC",
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
    <div className="relative max-w-4xl mx-auto my-16 px-6">

      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4eb5a9]/20 via-transparent to-[#4eb5a9]/20 blur-3xl rounded-3xl"></div>

      {/* Main card */}
      <div className="relative bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 p-8 md:p-5 shadow-2xl">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
          WHAT OUR CLIENTS SAY
        </h2>

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
          <p className="text-white/80 text-sm md:text-lg leading-relaxed italic font-play">
            “{testimonials[idx].quote}”
          </p>

          <div className="mt-6 text-[#4eb5a9] font-semibold text-sm md:text-base">
            — {testimonials[idx].author}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">

          {/* dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => change(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === idx
                    ? "w-6 h-2 bg-[#4eb5a9]"
                    : "w-2 h-2 bg-zinc-600"
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

const cafeGallery = [
  {
    image: "/images/cafe interior design services in Dubai.png",
    alt: "Cafe shelving and display design in Dubai",
  },
  {
    image: "/images/Coffee Shop Interior Design.png",
    alt: "Modern cafe interior renovation in Dubai",
  },
  {
    image: "/images/Restaurant & Cafe Interior Design.png",
    alt: "Contemporary cafe interior design in Dubai",
  },
  {
    image: "/images/Cafe Renovation & Remodeling.png",
    alt: "Cafe interior fit-out in Dubai",
  },
 
];

const krSteps = [
  {
    id: '01',
    title: 'Discovery & Consultation',
    desc: 'Every great café starts with the right conversation. During discovery and consultation, we get to know your concept, your menu, and the experience you want customers to have. Goals, timeline, and budget are agreed upfront so the project has clear direction from day one.',
    img: '/images/our-mission.png',
  },
  {
    id: '02',
    title: 'Concept & Design Development',
    desc: 'We develop your concept through mood boards, space planning, and detailed 3D visualizations so you can see the result before we build. The process is collaborative — you shape every step until the design feels exactly right.',
    img: '/images/material high quality.png',
  },
  {
    id: '03',
    title: 'Material Selection & Approval',
    desc: 'We guide you through selecting materials for floors, walls, ceilings, seating, joinery, and lighting — all durable, easy to maintain, and sourced from trusted suppliers. We take the time to explain each option so you are confident in every decision.',
    img: '/images/best-customized-services.png',
  },
  {
    id: '04',
    title: 'Project Execution & Fit-Out',
    desc: 'Our experienced team handles the full build: civil works, partitions, ceilings, flooring, electrical, HVAC, counter and kitchen installation, joinery, and furnishing. Dedicated project managers keep you updated throughout to make sure everything stays on track.',
    img: '/images/our-mission.png',
  },
  {
    id: '05',
    title: 'Handover & Aftercare Services',
    desc: 'We carry out a final inspection to confirm every system and finish is perfect, then walk you through your completed café. Our aftercare service keeps your space operating smoothly long after opening day.',
    img: '/images/material high quality.png',
  },
];

const faqs = [
  {
    question: 'Why is Casa Kraft regarded as one of the best cafe interior design companies in Dubai?',
    answer:
      'Casa Kraft is a combination of creativity and professionalism. Our team comprises highly skilled designers, project managers, and fit-out professionals well versed with the commercial environment of Dubai. This is why we are considered one of the best cafe interior design companies in Dubai.',
  },
  {
    question: 'Do you offer cafe interior design and fit-out services at the same time?',
    answer:
      'Yes. Casa Kraft is a full-service studio where we offer comprehensive cafe interior services including cafe design and fit-out under one roof.',
  },
  {
    question: 'Can you refurbish our current cafe space?',
    answer:
      'We specialize in refurbishments of existing cafe spaces, either partial or full scale. We study the space, determine how to improve it, and deliver a whole new look for your cafe in the most minimally disruptive way possible.',
  },
  {
    question: 'How long does a cafe interior design project take in Dubai?',
    answer:
      'The time taken depends on the scale and complexity of the project. A basic cafe fit-out generally takes between 6 to 12 weeks. We always provide a detailed plan right from the start.',
  },
  {
    question: 'Which styles of cafe interior design is Casa Kraft known for?',
    answer:
      'Our cafe interior design company offers a variety of styles including modern, luxurious, classic, and contemporary. Every project is carefully crafted to suit the personality of your business.',
  },
];

const DProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section className="px-6 text-white/80 bg-black">

      {/* Top Content Block */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
              Why Dubai's Cafés Choose Casa Kraft
            </h2>

            <p className="text-white/80 text-sm md:text-base font-play leading-relaxed">
              Dubai sets the standard for hospitality, and your café's interior needs to live up to it. As one of the city's <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/interior-design-dubai">trusted café interior designers</a></b>, we understand what it takes to meet those expectations — and to stand out in one of the world's most competitive coffee and dining scenes. We design and build cafés of every kind, from cozy coffee shops and specialty roasteries to luxury cafés and dessert lounges across the UAE. Our team of architects, designers, and skilled craftsmen work together to create interiors that look stunning, run efficiently, and keep customers coming back. We're recognized as one of Dubai's leading café design firms not by chance, but through consistent dedication to every project we deliver.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/cafe interior design services in Dubai.png"
              alt="Cafe interior design and renovation in Dubai by Casa Kraft"
              width={700}
              height={500}
              className="w-full h-[400px] object-cover"
            />
          </div>

        </div>

      </div>


      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto overflow-hidden">

        <div className="text-center mb-12">
          <h2 className="text-3xl text-white md:text-4xl font-semibold mb-4">
            Our Cafe Interior Design Portfolio
          </h2>

          <p className="max-w-3xl mx-auto text-white/80">
            Explore a selection of café spaces we've designed — functional, modern, and full of atmosphere, finished with premium materials and meticulous attention to detail.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-5 w-max">

            {[...cafeGallery, ...cafeGallery].map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(project.image)}
                className="group relative flex-shrink-0 overflow-hidden cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={450}
                  className="w-[320px] sm:w-[380px] md:w-[350px] h-[240px] sm:h-[280px] md:h-[250px] object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">
                    View Project
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>


      {/* Process Section (Compact Timeline) */}
      <div className="bg-black text-white/80 py-14">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10 mt-10">
            Our Cafe Interior Design Process: Where Vision Meets Execution
          </h2>

          <p className="text-center text-sm md:text-base text-white/80 mb-10 font-play">
            Our approach at Casa Kraft Interior Design &amp; Renovation is highly systematic, ensuring every project is completed on time, within budget, and to your satisfaction. The tried-and-tested process we use for café interiors is built on experience gained from over 100 successful projects across Dubai and the UAE.
          </p>

          {/* Process steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {krSteps.map((step) => (
              <div
                key={step.id}
                className="bg-white/5 hover:bg-white/10 transition rounded-xl p-6 border border-white/10"
              >

                {/* Step number */}
                <div className="text-[#4eb5a9] font-bold text-sm mb-2">
                  {step.id}
                </div>

                {/* Title */}
                <h3 className="font-conthrax text-sm md:text-base mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>


      {/* CTA SECTION */}
      <div className="w-screen ml-[calc(50%-50vw)] bg-[#111111] mt-10 py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <h2 className="text-2xl md:text-3xl font-semibold text-white uppercase mb-2">
            Get In Touch With Casa Kraft
          </h2>

          <p className="text-white/80 text-sm md:text-base mb-8">
            Cafe Interior Design &amp; Renovation Company in Dubai
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="/gallery"
              className="bg-[#1f5a53] hover:bg-[#276d64] text-white px-6 py-3 text-base transition min-w-[220px]"
            >
              See Our Projects
            </a>

            <a
              href="https://wa.me/971586023677"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#4eb5a9] text-white hover:bg-[#4eb5a9] hover:text-black px-6 py-3 text-base transition min-w-[220px]"
            >
              WhatsApp Us
            </a>

            <a
              href="/contact-us"
              className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-base transition min-w-[220px]"
            >
              Request Quote
            </a>

          </div>

        </div>
      </div>

      {/* Areas We Serve */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
              Areas We Serve Across Dubai
            </h2>

            <p className="text-zinc-400 mx-auto">
              Casa Kraft delivers café interior design and renovation services across Dubai's busiest dining and commercial districts. Whether you're opening a specialty coffee shop, a luxury café, a dessert lounge, or planning a full café renovation, we can help. We work with cafés and F&amp;B businesses in Business Bay, DIFC, Downtown Dubai, Dubai Marina, JLT, Dubai Internet City, Dubai Media City, Dubai Silicon Oasis, and along Sheikh Zayed Road. With years of experience designing café spaces across these high-traffic locations, we know how to deliver interiors that fit your concept and your market.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
              Key Factors That Affect Cafe Design Cost
            </h2>

            <ul className="list-disc pl-5 space-y-3 text-white/80">
              <li><b className="text-[#4eb5a9]">Cafe size –</b> Bigger cafés need more materials and labour, though economies of scale can lower the cost per square foot.</li>

              <li><b className="text-[#4eb5a9]">Design complexity –</b> Custom features like curved walls, feature ceilings, bespoke joinery, and detailed lighting schemes increase design cost.</li>

              <li><b className="text-[#4eb5a9]">Materials –</b> Imported marble, natural timber, and European furniture cost more than locally sourced equivalents.</li>

              <li><b className="text-[#4eb5a9]">MEP &amp; equipment works –</b> Cost depends on the existing condition of the space and the scale of your counter, kitchen, ventilation, and services fit-out.</li>

              <li><b className="text-[#4eb5a9]">Smart technology –</b> POS integration, scene lighting, sound systems, and climate automation cost more upfront but improve efficiency over time.</li>

              <li><b className="text-[#4eb5a9]">Furniture &amp; fittings –</b> Seating, tables, counters, and fixtures range from budget to bespoke depending on brand, durability, and specification.</li>

              <li><b className="text-[#4eb5a9]">Project duration –</b> Fast-track projects can cost more. Typical fit-outs of four to sixteen weeks are usually the most budget-friendly.</li>
            </ul>

            <p className="mt-6 text-white/80">Get a free, no-obligation quote. Every café is different — let Casa Kraft Interiors prepare a personalized quote for your unique project.</p>
          </div>

        </div>
      </div>
      <div className="max-w-4xl mx-auto my-12">
        <TestimonialCarousel />
      </div>


      {/* FAQ Section */}
      <div className="text-white/80 max-w-4xl mx-auto bg-black rounded-lg shadow p-6 sm:p-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-white/80 font-play text-sm sm:text-base mb-6 text-center">
          Find quick answers to common questions about our café interior design services in Dubai.
        </p>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="group border-b border-gray-200 py-3"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-play font-semibold text-sm sm:text-base text-white/80 text-left">
                  {item.question}
                </span>
                <span className="ml-3 text-white/80 text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-2 text-sm sm:text-base font-play text-white/80">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* Closing Content Block */}
      <div className="lg:max-w-[80%] text-white mx-auto bg-black p-6 sm:p-5 mb-5 rounded shadow text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
          Transform Your Cafe Today in Dubai - The Casa Kraft Way
        </h2>
        <div className="space-y-4 text-white/80 text-sm sm:text-base font-play text-left">
          <p>
            Café interior design is about far more than looking good — it shapes the customer experience, expresses your brand, and creates a space people want to return to again and again. As a top-rated café interior design company in Dubai, we don't just build cafés; we help build the future of your business. Whether you need a modern café interior, a luxury <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/">coffee shop fit-out</a></b>, or a complete café transformation in Dubai, we're the team you've been looking for.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="fixed top-6 right-6 z-[100] bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <div
            className="relative max-w-5xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Cafe interior design project preview"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default DProjects;