'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const textImage = {
  src: '/images/damac-9.png',
  link: '/villa-damac-hills-5-bedroom',
  title: 'Damac Hills Villa'
};
const TestimonialCarousel = () => {
  
const testimonials = [
  {
    quote:
      "Casa Kraft Interiors exceeded our expectations with their custom furniture and joinery services. Every piece was beautifully crafted and perfectly tailored to our home. The attention to detail and quality of workmanship were truly outstanding.",
    author: "Sarah Williams, Palm Jumeirah",
  },
  {
    quote:
      "From concept to installation, the team at Casa Kraft Interiors delivered exceptional bespoke furniture solutions. Our wardrobes and entertainment unit were designed exactly the way we envisioned, and the final result added elegance and functionality to our interiors.",
    author: "James Carter, Dubai Hills Estate",
  },
  {
    quote:
      "Working with Casa Kraft Interiors was a seamless experience. Their skilled craftsmen created custom cabinetry and joinery that transformed our space. The team was professional, responsive, and completed everything on schedule.",
    author: "Rachel Bennett, Emirates Hills",
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

const officeGallery = [
  {
    image: "/images/office-racks.png",
  },
  {
    image: "/images/CEO-office-interior-renovations.png",
  },
  {
    image: "/images/office-interior-in-dubai.jpg",
  },
  {
    image: "/images/Interior design company twin tower dubai.png",
  },
  {
    image: "/images/office-interiors-and-renovations.png",
   },
  {
    image: "/images/office-sitting-area-for-clients.png",
  },
  
];
  
const krSteps = [
  {
    id: '01',
    title: 'Consultation & Requirement Analysis',
    desc: 'Every custom furniture project begins with understanding your lifestyle, space requirements, and design preferences. During this stage, we discuss your ideas, functionality needs, budget, and timeline to ensure a smooth and successful project.',
    img: '/images/our-mission.png',
  },

  {
    id: '02',
    title: 'Concept Design & 3D Visualization',
    desc: 'Our designers create detailed concepts, mood boards, and 3D visualizations to help you visualize the final furniture pieces. We collaborate closely with you and refine the designs until every detail meets your expectations.',
    img: '/images/material high quality.png',
  },

  {
    id: '03',
    title: 'Material Selection & Approval',
    desc: 'We help you choose the ideal materials, finishes, laminates, veneers, hardware, and accessories from trusted suppliers. Every selection is carefully made to ensure durability, beauty, and long-lasting quality.',
    img: '/images/best-customized-services.png',
  },

  {
    id: '04',
    title: 'Precision Manufacturing',
    desc: 'Once the designs are approved, our skilled craftsmen begin manufacturing each piece with exceptional attention to detail. Using premium materials and advanced techniques, we ensure every element meets the highest standards of quality and craftsmanship.',
    img: '/images/our-mission.png',
  },

  {
    id: '05',
    title: 'Installation & Finishing',
    desc: 'Our experienced installation team carefully delivers and installs your custom furniture and joinery. Every component is fitted with precision, ensuring flawless finishes and perfect functionality throughout the space.',
    img: '/images/material high quality.png',
  },

  {
    id: '06',
    title: 'Final Inspection & Aftercare',
    desc: 'Before handover, we conduct a detailed quality inspection to ensure every piece is completed to perfection. We also provide aftercare support and maintenance guidance, ensuring your bespoke furniture remains beautiful and functional for years to come.',
    img: '/images/material high quality.png',
  },
];


const serviceAreas = [
  {
    title: "Arabian Ranches",
  },
  {
    title: "Dubai Hills Estate",
  },
  {
    title: "Jumeirah Golf Estate",
  },
  {
    title: "Nad Al Sheba",
  },
  {
    title: "Jumeirah Village Circle",
  },
  {
    title: "Jumeirah Village Triangle",
  },
  {
    title: "Emirates Hills",
  },
  {
    title: "Palm Jumeirah",
  },
];

const faqs = [
  {
    question: 'Why is Casa Kraft considered one of the best custom furniture and joinery companies in Dubai?',
    answer:
      'Casa Kraft combines exceptional craftsmanship with innovative design. Our experienced designers, craftsmen, and project managers create bespoke furniture and joinery solutions tailored to each client’s lifestyle and space requirements, making us one of the trusted names in Dubai.',
  },

  {
    question: 'Do you provide both furniture design and manufacturing services?',
    answer:
      'Yes. Casa Kraft offers complete custom furniture and joinery services, including concept development, 3D visualization, material selection, manufacturing, installation, and aftercare support.',
  },

  {
    question: 'Can you customize furniture according to my space and preferences?',
    answer:
      'Absolutely. Every furniture piece we create is made to measure. Whether you need wardrobes, kitchen cabinets, TV units, office furniture, or decorative joinery, we tailor each design to suit your style, dimensions, and functional requirements.',
  },

  {
    question: 'How long does a custom furniture project take in Dubai?',
    answer:
      'The timeline depends on the size and complexity of the project. Most custom furniture and joinery projects are completed within 4 to 10 weeks. We provide a detailed schedule before commencing work to ensure complete transparency.',
  },

  {
    question: 'What types of custom furniture and joinery styles does Casa Kraft specialize in?',
    answer:
      'Our team specializes in a wide range of styles including modern, contemporary, minimalist, luxury, classic, and Scandinavian designs. Every piece is thoughtfully crafted to complement your interior and reflect your personal taste.',
  },

  {
    question: 'Do you use premium materials for custom furniture manufacturing?',
    answer:
      'Yes. We use high-quality wood, veneers, laminates, hardware, and finishes sourced from trusted suppliers to ensure durability, functionality, and long-lasting beauty in every piece we manufacture.',
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
        Why Dubai's Leading Businesses Choose Casa Kraft
      </h2>

     <p className="text-white/80 text-sm md:text-base font-play leading-relaxed">
  Dubai is a city where design excellence and luxury craftsmanship set global benchmarks, and your interiors deserve nothing less. As one of the 
  <b className="text-[#4eb5a9]">
    <a href="https://casakraftinteriors.ae/">best interior designers in Dubai</a>
  </b>, Casa Kraft specializes in delivering bespoke custom furniture and premium joinery solutions that elevate every space. 

  From tailor-made wardrobes, kitchen cabinetry, and wall paneling to fully customized furniture pieces, we design and craft solutions that perfectly fit your space, style, and functionality needs. Our expert designers, skilled carpenters, and artisans work together to ensure precision, durability, and luxury in every detail. 

  Whether it is residential villas, luxury apartments, or commercial spaces across the UAE, our custom furniture and joinery services are designed to transform interiors into timeless, functional, and elegant environments that reflect your vision and lifestyle.
</p>
    </div>

    {/* Right Side - Image */}
    <div className="relative overflow-hidden rounded-xl">
      <Image
        src="/images/CEO-office-interior-renovations.png"
        alt="CEO OFFice Interior Design Dubai"
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
    Our Custom Furniture & Joinery Portfolio
  </h2>

  <p className="max-w-3xl mx-auto text-white/80">
    Explore a curated selection of our custom furniture and joinery projects,
    showcasing precision craftsmanship, premium materials, and tailor-made
    solutions designed to perfectly fit each space. From bespoke wardrobes and
    kitchens to elegant wall paneling and furniture pieces, each project
    reflects our commitment to detail, functionality, and timeless design.
  </p>
</div>

  <div className="relative overflow-hidden">
    <div className="flex animate-marquee gap-5 w-max">

     {[...officeGallery, ...officeGallery].map((project, index) => (
 <div
  key={index}
  onClick={() => setSelectedImage(project.image)}
  className="group relative flex-shrink-0 overflow-hidden cursor-pointer"
>
  <Image
    src={project.image}
    alt={`Villa Project ${index + 1}`}
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

     
    
      {/* Process Section (REDESIGNED - Compact Timeline) */}
<div className="bg-black text-white/80py-14">
  <div className="max-w-6xl mx-auto px-4">

         <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10 mt-10">
  Our Custom Furniture & Joinery Process: Where Ideas Become Crafted Reality
</h2>

<p className="text-center text-sm md:text-base text-white/80 mb-10 font-play">
  At Casa Kraft Interior Design & Renovation, our custom furniture and joinery process is highly structured and detail-driven, ensuring every piece is delivered on time, within budget, and to your complete satisfaction. With experience from over 100 successful projects across Dubai and the UAE, we follow a proven workflow that transforms ideas into precision-crafted furniture and bespoke joinery solutions tailored to each space.
</p>
    {/* First 6 steps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {krSteps.slice(0, 5).map((step) => (
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
     Custom Furniture & Joinery Services in Dubai
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
        Areas We Serve Across Dubai      </h2>

      <p className="text-zinc-400 mx-auto">
     With Casa Kraft Interior Design & Renovation, we offer the best custom furniture and joinery services in all of Dubai’s premium residential, commercial, and hospitality spaces. Whether you are looking for bespoke furniture pieces, tailor-made wardrobes, modular kitchens, elegant wall paneling, or full joinery solutions for your property, we can help.

We proudly serve clients across Business Bay, DIFC, Downtown Dubai, Dubai Marina, JLT, Dubai Internet City, Dubai Media City, Dubai Silicon Oasis, and Sheikh Zayed Road. With years of experience delivering precision-crafted joinery and custom furniture solutions across these top locations, we are experts at transforming spaces with functionality, durability, and timeless design.
      </p>
    </div>

<div className="mb-12">
   <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
  Key Factors That Affect Custom Furniture & Joinery Cost
</h2>

<ul className="list-disc text-white/80 text-sm md:text-base font-play leading-relaxed space-y-3">
  <li>
    <b className="text-[#4eb5a9]">Furniture size -</b> Larger bespoke furniture pieces and full joinery installations require more materials, craftsmanship, and production time, which directly impacts the overall cost.
  </li>

  <li>
    <b className="text-[#4eb5a9]">Design complexity -</b> Intricate detailing such as curved forms, hidden storage, CNC detailing, premium finishes, and custom-built features increase fabrication time and cost.
  </li>

  <li>
    <b className="text-[#4eb5a9]">Material selection -</b> Costs vary depending on whether you choose engineered wood, solid timber, natural veneer, marble accents, or imported premium materials.
  </li>

  <li>
    <b className="text-[#4eb5a9]">Joinery scope -</b> Full fit-out joinery works such as wardrobes, kitchens, wall cladding, and built-in units require more extensive detailing and installation effort.
  </li>

  <li>
    <b className="text-[#4eb5a9]">Finishes & hardware -</b> Premium paints, laminates, lacquer finishes, and high-end hardware fittings significantly influence the final pricing.
  </li>

  <li>
    <b className="text-[#4eb5a9]">Customization level -</b> Highly personalized solutions tailored to unique spaces or client-specific requirements generally require more design and production resources.
  </li>

  <li>
    <b className="text-[#4eb5a9]">Project timeline -</b> Faster delivery schedules may increase costs due to prioritization of labor, production, and installation resources.
  </li>
</ul>

     <p className="text-white/80 text-sm md:text-base font-play leading-relaxed text-center">
 <br /> Get a free, no-obligation quote for your custom furniture and joinery needs. Every project is unique, and at Casa Kraft Interior Design & Renovation we create tailored solutions based on your space, style, and requirements. Let us provide you with a personalized quotation designed specifically for your project.
</p>
    </div>

  </div>
</div>
<div className="max-w-4xl mx-auto my-12">
  <TestimonialCarousel />
</div>
      

      {/* FAQ Section */}
      <div className=" text-white/80 max-w-4xl mx-auto bg-black rounded-lg text-white/80  shadow p-6 sm:p-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
        Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-white/80 font-play text-sm sm:text-base text-white/80 mb-6 text-center">
          Find quick answers to common questions about our Custom Furniture & Joinery services in Dubai.
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

       {/* Top Content Block */}
      <div className="lg:max-w-[80%] text-white mx-auto bg-black p-6 sm:p-5 mb-5 rounded shadow text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
  Transform Your Space Today in Dubai - The Casa Kraft Way
</h2>

<div className="space-y-4 text-white/80 text-sm sm:text-base font-play text-left">
  <p>
    Custom furniture and joinery is more than just functional woodwork; it defines the character of your space, enhances usability, and reflects your personal style. As a leading provider of bespoke interiors in Dubai, we don’t just build furniture — we craft tailored solutions that elevate entire environments. Whether you need modern custom furniture, luxury joinery solutions, or complete interior fit-outs, Casa Kraft Interior Design & Renovation is the team you can trust.
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
        alt="Preview"
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
