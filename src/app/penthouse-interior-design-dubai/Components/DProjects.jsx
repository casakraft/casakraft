'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote:
        "Casa Kraft Interiors transformed our Palm Jumeirah penthouse into a masterpiece. Every detail was carefully considered — from the custom joinery to the lighting design. The result is breathtaking and exactly what we envisioned.",
      author: "Ahmed Al Mansouri, Palm Jumeirah",
    },
    {
      quote:
        "We trusted Casa Kraft with our Downtown Dubai penthouse renovation and they exceeded every expectation. The team's attention to detail, premium materials, and seamless execution made the entire process effortless.",
      author: "Priya Sharma, Downtown Dubai",
    },
    {
      quote:
        "Our penthouse at Dubai Marina feels like a five-star residence now. Casa Kraft's designers truly understood our lifestyle and created a space that is both luxurious and incredibly comfortable.",
      author: "Michael Thompson, Dubai Marina",
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#4eb5a9]/20 via-transparent to-[#4eb5a9]/20 blur-3xl rounded-3xl"></div>
      <div className="relative bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 p-8 md:p-5 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
          WHAT OUR CLIENTS SAY
        </h2>
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
            "{testimonials[idx].quote}"
          </p>
          <div className="mt-6 text-[#4eb5a9] font-semibold text-sm md:text-base">
            — {testimonials[idx].author}
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
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

const penthouseGallery = [
  {
    image: "/images/boulevard-5.png",
    link: "/boulevard-point-penthouse",
  },
  {
    image: "/images/marina-7.png",
    link: "/marina-gate-penthouse",
  },
  {
    image: "/images/mg-1.png",
    link: "marina-gate-penthouse-2",
  },
  {
    image: "/images/dmp-5.png",
    link: "dubai-marina-penthouse",
  },
  
];

const krSteps = [
  {
    id: '01',
    title: 'Discovery & Lifestyle Consultation',
    desc: 'Every exceptional penthouse interior begins with understanding you — your lifestyle, aesthetic preferences, and how you envision living in your space. We conduct a thorough on-site assessment and consultation to align our design direction with your personal vision and budget.',
  },
  {
    id: '02',
    title: 'Concept Design & 3D Visualization',
    desc: 'Our designers create bespoke mood boards, detailed space plans, and stunning 3D visualizations tailored to your penthouse. You can explore every room, material, and finish before a single element is installed — ensuring complete confidence in the final design.',
  },
  {
    id: '03',
    title: 'Premium Material Selection',
    desc: 'We guide you through an exclusive selection of premium materials — Italian marble, natural stone, custom veneers, designer lighting, and luxury hardware — all sourced from trusted international and regional suppliers to achieve the finest finish.',
  },
  {
    id: '04',
    title: 'Precision Execution & Fit-Out',
    desc: 'Our experienced team of designers, craftsmen, and project managers handles every aspect of the fit-out — from structural works and MEP installations to custom joinery, flooring, and luxury finishes — all delivered with precision and care.',
  },
  {
    id: '05',
    title: 'Quality Inspection & Handover',
    desc: 'Before handover, we conduct a thorough quality inspection across every space to ensure flawless finishes and perfect functionality. We walk you through your new penthouse and provide comprehensive aftercare support for your complete peace of mind.',
  },
];

const serviceAreas = [
  { title: "Palm Jumeirah" },
  { title: "Downtown Dubai" },
  { title: "Dubai Marina" },
  { title: "Bluewaters Island" },
  { title: "DIFC" },
  { title: "Business Bay" },
  { title: "Dubai Creek Harbour" },
  { title: "Emirates Hills" },
];

const faqs = [
  {
    question: 'Why is Casa Kraft one of the best penthouse interior design companies in Dubai?',
    answer:
      'Casa Kraft brings together a team of expert designers, architects, and craftsmen with deep experience in luxury residential interiors. We specialize in bespoke penthouse design that reflects the unique lifestyle and personality of each client, delivering exceptional quality across every project.',
  },
  {
    question: 'Do you handle both interior design and fit-out for penthouses?',
    answer:
      'Yes. Casa Kraft is a full-service studio offering complete penthouse interior design and fit-out under one roof. From concept development and 3D visualization to material selection, construction, custom joinery, and final handover — we manage every stage seamlessly.',
  },
  {
    question: 'Can you renovate or upgrade an existing penthouse?',
    answer:
      'Absolutely. We specialize in partial and full penthouse renovations. Our team carefully studies the existing space, identifies improvement opportunities, and delivers a comprehensive transformation with minimal disruption to your daily life.',
  },
  {
    question: 'How long does a penthouse interior design project take in Dubai?',
    answer:
      'Timelines vary depending on the size and complexity of the project. A typical penthouse interior design and fit-out takes between 8 to 20 weeks. We provide a detailed project schedule before commencing work to ensure full transparency and timely delivery.',
  },
  {
    question: 'What interior design styles do you specialize in for penthouses?',
    answer:
      'We design across a wide range of styles including contemporary luxury, modern minimalist, classic elegance, Art Deco, and bespoke fusion aesthetics. Every penthouse interior is uniquely crafted to reflect the homeowner\'s personality, lifestyle, and the character of the space.',
  },
];

const DProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="px-6 text-white/80 bg-black">

      {/* Why Choose Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
              Why Dubai's Most Discerning Homeowners Choose Casa Kraft
            </h2>
            <p className="text-white/80 text-sm md:text-base font-play leading-relaxed">
              A penthouse in Dubai is more than a home — it is a statement of achievement, taste, and lifestyle. At Casa Kraft Interior Design & Renovation, we understand the unique demands of luxury penthouse living and deliver interiors that match the grandeur of the space. As one of the{" "}
              <b className="text-[#4eb5a9]">
                <a href="https://casakraftinteriors.ae/">best interior designers in Dubai</a>
              </b>
              , we bring together a team of expert architects, designers, and master craftsmen to create penthouse interiors that are as functional as they are breathtaking. From sky-high living rooms with panoramic views to bespoke master suites, custom kitchens, and private terraces — every element is thoughtfully designed and meticulously executed to reflect your vision of luxury living.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/mg-1.png"
              alt="Penthouse Interior Design Dubai"
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
            Our Penthouse Interior Design Portfolio
          </h2>
          <p className="max-w-3xl mx-auto text-white/80">
            Explore a curated selection of our luxury penthouse interior design projects across Dubai — showcasing bespoke craftsmanship, premium finishes, and refined living spaces designed to impress.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-5 w-max">
            {[...penthouseGallery, ...penthouseGallery].map((project, index) => (
  <Link
    key={index}
    href={project.link}
    className="group relative flex-shrink-0 overflow-hidden cursor-pointer block"
  >
    <Image
      src={project.image}
      alt={`Penthouse Project ${index + 1}`}
      width={600}
      height={450}
      className="w-[320px] sm:w-[380px] md:w-[350px] h-[240px] sm:h-[280px] md:h-[250px] object-cover transition duration-500 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
      <span className="text-white text-lg font-medium">
        View Project
      </span>
    </div>
  </Link>
))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-black text-white/80 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10 mt-10">
            Our Penthouse Interior Design Process in Dubai
          </h2>
          <p className="text-center text-sm md:text-base text-white/80 mb-10 font-play">
            At Casa Kraft Interior Design & Renovation, our process is structured to deliver exceptional results at every stage — from the first consultation to final handover. With experience across 200+ residential projects in Dubai and the UAE, we follow a proven workflow that ensures your penthouse is delivered on time, within budget, and to the highest standard of luxury.
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

      {/* CTA Section */}
      <div className="w-screen ml-[calc(50%-50vw)] bg-[#111111] mt-10 py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white uppercase mb-2">
            Get In Touch With Casa Kraft
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-8">
            Penthouse Interior Design & Renovation Company in Dubai
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/gallery" className="bg-[#1f5a53] hover:bg-[#276d64] text-white px-6 py-3 text-base transition min-w-[220px]">
              See Our Projects
            </a>
            <a href="https://wa.me/971586023677" target="_blank" rel="noopener noreferrer" className="border border-[#4eb5a9] text-white hover:bg-[#4eb5a9] hover:text-black px-6 py-3 text-base transition min-w-[220px]">
              WhatsApp Us
            </a>
            <a href="/contact-us" className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-base transition min-w-[220px]">
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
              Casa Kraft Interior Design & Renovation delivers premium penthouse interior design services across Dubai's most prestigious residential addresses. Whether your penthouse overlooks the Palm, the Downtown skyline, or the Dubai Marina waterfront, our team brings unmatched design expertise to your doorstep. We proudly serve clients across{" "}
              <b className="text-[#4eb5a9]">Palm Jumeirah, Downtown Dubai, Dubai Marina, Bluewaters Island, DIFC, Business Bay, Dubai Creek Harbour,</b>{" "}
              and <b className="text-[#4eb5a9]">Emirates Hills.</b>
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {serviceAreas.map((area, i) => (
              <div key={i} className="border border-white/10 rounded-lg p-4 text-center text-white/80 hover:border-[#4eb5a9] transition">
                {area.title}
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
              Key Factors That Affect Penthouse Interior Design Cost
            </h2>
            <ul className="list-disc space-y-3 pl-4">
              <li><b className="text-[#4eb5a9]">Penthouse size —</b> Larger spaces require more materials, design time, and installation effort, though larger projects can benefit from economies of scale.</li>
              <li><b className="text-[#4eb5a9]">Design complexity —</b> Bespoke features such as curved ceilings, feature walls, custom joinery, and intricate lighting designs increase both time and cost.</li>
              <li><b className="text-[#4eb5a9]">Material selection —</b> Premium choices such as Italian marble, natural stone, solid timber, and imported hardware significantly influence the final budget.</li>
              <li><b className="text-[#4eb5a9]">MEP works —</b> The scope of electrical, plumbing, and air conditioning upgrades depends on the existing condition of the space and desired outcome.</li>
              <li><b className="text-[#4eb5a9]">Smart home integration —</b> Automation systems for lighting, climate control, security, and AV require specialist installation but add lasting value to luxury penthouses.</li>
              <li><b className="text-[#4eb5a9]">Custom furniture & joinery —</b> Bespoke wardrobes, kitchen cabinetry, entertainment walls, and statement pieces vary in cost based on material and complexity.</li>
              <li><b className="text-[#4eb5a9]">Project timeline —</b> Accelerated delivery schedules may require additional resources. Standard penthouse projects typically take between 8 to 20 weeks.</li>
            </ul>
            <p className="mt-6 text-white/80">
              Get a free, no-obligation quote. Every penthouse is unique — let Casa Kraft Interiors provide you with a tailored quotation designed specifically for your space, style, and requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto my-12">
        <TestimonialCarousel />
      </div>

      {/* FAQ Section */}
      <div className="text-white/80 max-w-4xl mx-auto bg-black rounded-lg shadow p-6 sm:p-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-white/80 font-play text-sm sm:text-base mb-6 text-center">
          Find quick answers to common questions about our Penthouse Interior Design services in Dubai.
        </p>
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <details key={index} className="group border-b border-gray-200 py-3">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-play font-semibold text-sm sm:text-base text-white/80 text-left">
                  {item.question}
                </span>
                <span className="ml-3 text-white/80 text-xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm sm:text-base font-play text-white/80">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="lg:max-w-[80%] text-white mx-auto bg-black p-6 sm:p-5 mb-5 rounded shadow text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
          Transform Your Penthouse Today — The Casa Kraft Way
        </h2>
        <div className="space-y-4 text-white/80 text-sm sm:text-base font-play text-left">
          <p>
            A penthouse interior is more than aesthetics — it is the ultimate expression of luxury living, personal style, and architectural vision. At Casa Kraft Interior Design & Renovation, we don't simply design penthouse interiors; we create residences that inspire, impress, and stand the test of time. Whether you require a complete penthouse transformation, a refined renovation, or bespoke furniture and joinery solutions, our team delivers excellence at every stage. Contact Casa Kraft today and let us bring your dream penthouse to life —{" "}
            <b className="text-[#4eb5a9]">
              <a href="https://casakraftinteriors.ae/interior-design-dubai">explore our full range of interior design services.</a>
            </b>
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <button
            className="fixed top-6 right-6 z-[100] bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <div className="relative max-w-5xl w-full p-4" onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage} alt="Preview" width={1200} height={800} className="w-full h-auto object-contain rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
};

export default DProjects;