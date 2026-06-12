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
        " Casa Kraft Interiors successfully made our office space a contemporary, practical, and inspiring work environment. The entire project was executed efficiently. I recommend Casa Kraft Interiors for your office interior designs & renovation services in Dubai.",
      author: "Sarah Williams, Business Bay",
    },
    {
      quote:
        "The office redesign completed by Casa Kraft Interiors was truly exceptional from start to finish. Our workplace is now the perfect reflection of our brand personality while still offering us a functional space in which we can thrive.",
      author: "James Carter, Downtown, Dubai",
    },
    {
      quote:
        "Working with Casa Kraft Interiors was a great experience. They understood exactly what we wanted and transformed our office into a modern and comfortable space. The team was professional, easy to work with, and delivered everything on time.",
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
    title: 'Discovery & Consultation',
    desc: 'All stunning office renovations begin with an important discussion. Throughout the discovery and consultation stage we learn about your company and the image you wish to portray. In addition, the project goals, timeline and budget are determined upfront thus ensuring clear direction moving forward.',
    img: '/images/our-mission.png',
  },
  {
    id: '02',
    title: 'Concept & Design Development',
    desc: 'We develop a concept by using mood boards, space planning and stunning 3D visualizations to illustrate the final result. The design process becomes collaborative with you making changes that will influence each step of the way until we know for sure that you love what we have designed.',
    img: '/images/material high quality.png',
  },
  {
    id: '03',
    title: ' Material Selection & Approval',
    desc: 'We assist you in the carefully selected choice of materials, whether it be for floors, walls, ceilings, partitions, furniture and joinery, or lighting, all provided by our trusted sources. We spend time explaining each choice to ensure that you are informed about your decisions..',
    img: '/images/best-customized-services.png',
  },
  {
    id: '04',
    title: 'Project Execution & Fit-Out ',
    desc: 'All this is taken care of by our experienced team of Casa Kraft Interior Design & Renovation that will be responsible for the complete execution of the project including civil works, partitions, ceilings, floors, electrical installation, air conditioning system, joinery work, and furnishings. Dedicated project managers will keep updating you during the process to make sure everything goes according to plan.',
    img: '/images/our-mission.png',
  },
  {
    id: '05',
    title: 'Handover and Aftercare Services',
    desc: 'The final inspection to check all systems installed will be carried out to make sure that everything is working perfectly and all finishes have been done properly. We will give you a guided tour to show you around your new workplace. In addition, we offer exclusive aftercare services to keep your office operating effectively even after its completion.',
    img: '/images/material high quality.png',
  },

   {
    id: '06',
    title: 'Handover and Aftercare Services',
    desc: 'The final inspection to check all systems installed will be carried out to make sure that everything is working perfectly and all finishes have been done properly. We will give you a guided tour to show you around your new workplace. In addition, we offer exclusive aftercare services to keep your office operating effectively even after its completion.',
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
    question: 'Why is Casa Kraft regarded as one of the best office interior design companies in Dubai?',
    answer:
      ' Casa Kraft is a combination of creativity and professionalism. Our team comprises highly skilled and professional designers, project managers, and fit-out professionals well versed with commercial environment of Dubai. This is why we are considered as one of the best office interior design companies in Dubai.',
  },
  {
    question: 'Is it your practice to offer office interior design and fit out services at the same time?',
    answer:
      ' Yes. Casa Kraft is a full-service studio where we offer comprehensive office interior services including office design and fit-out.',
  },
  {
    question: 'Do you have the capability to refurbish our current office space?',
    answer:
      'We specialize in refurbs of existing office spaces either partial or full scale. We study the space, determine how to improve on it and deliver a whole new look for your office in the most minimally disruptive way possible.',
  },
  {
    question: 'How long does an Interior design project take in Dubai?',
    answer:
      'The amount of time taken to complete a project will depend on the scale and complexity of the job at hand. A basic office fitout will generally take between 6 to 12 weeks. We will always give you a detailed plan right from the start.',
  },
  {
    question: 'Which styles of office interior design is Casa Kraft known for?',
    answer:
      'Our office interior design company offers a variety of styles including modern office interior design, luxurious office interior design, classic and contemporary. Every project we undertake is carefully crafted to suit the personality of your business.',
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
      Dubai is a place where international standards are set  and your office interior design should match the trend. Being one of the <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/">best interior designers in Dubai</a></b>, we at Casa kraft know very well what it takes to meet such high standards and expectations. It is our pleasure to be known among the most successful interior design firms in Dubai. We design and build commercial spaces such as corporate offices, executive suites, co-working environments and more throughout the UAE. Our team of expert architects, designers and artisans work together in order to create luxury office interior designs that will help you take your work to new levels. Our company ranks as one of the top interior office designs in Dubai not out of luck but because of dedication. </p>
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
      Our Office Interior Design Portfolio
    </h2>

    <p className="max-w-3xl mx-auto text-white/80">
       Explore a selection of thoughtfully designed office spaces showcasing our expertise in creating functional, modern, and inspiring workplaces with premium finishes and meticulous attention to detail.

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
     Our Office Interior Design Process: Where Vision Meets Execution

    </h2>

    <p className="text-center text-sm md:text-base text-white/80 mb-10 font-play">
    Our approach at Casa Kraft Interior Design & Renovation is highly systematic, which ensures all our projects are completed on time, within budget, and to your satisfaction. The tried and tested approach we use for designing office interiors is based on experience gained from over 100 successful projects carried out in Dubai and UAE.</p>

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
      Office Interior design & Renovation Company in Dubai
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
       With Casa Kraft Interior Design & Renovation, we offer the <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/office-renovation-dubai">best office interior design and renovation services</a></b> in all of Dubai's best business districts and commercial areas. Whether you are looking for a modern corporate office, an executive office, or full renovation of your current office space, we can help! We proudly work for businesses located in Business Bay, DIFC, Downtown Dubai, Dubai Marina, JLT, Dubai Internet City, Dubai Media City, Dubai Silicon Oasis, and offices on Sheikh Zayed Road. With years of experience designing office spaces in all of these top commercial spots, we are experts at delivering the right design for your business.
      </p>
    </div>

<div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
        Key Factors That Affect Office Design Cost </h2>

      <ul  class="list-disc"> <li > <b className="text-[#4eb5a9]">Office size -</b> More materials and labour are required for bigger offices, although economies of scale might lower the per-square-foot cost. </li>

      <li > <b className="text-[#4eb5a9]"> Design complexity - </b>Unique designs such as curved walls, feature ceilings, special joinery work, and detailed lighting solutions drive up the cost of the design.</li>
      
      <li ><b className="text-[#4eb5a9]">Material - </b>Cost will be higher if you opt for imported marble, natural timber, and European furniture than locally made products. </li>

      <li ><b className="text-[#4eb5a9]">MEP works  -</b> Cost depends on the present state of the space and the extent of the project’s fit out. </li>

      <li ><b className="text-[#4eb5a9]">Smart office technology - </b>While expensive at first, technology installations like automation systems, AV integration, intelligent lighting, and access control are more efficient in the long run. </li>

      <li ><b className="text-[#4eb5a9]">Furniture and fittings -</b> Ergonomic furniture could range from affordable to very unique, depending on brands and specifications.
 </li>

 <li ><b className="text-[#4eb5a9]">Project duration - </b>Projects that need fast turnarounds can cost extra. Average projects taking between four and 16 weeks are usually budget friendly.
 </li>
      </ul>

      <p>Get a free and no-obligation quote. Every office is different. Let Casa Kraft Interiors provide you with a personalized quote for your unique project.</p>
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
          Find quick answers to common questions about our Office Interior Design services in Dubai.
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
         Transform Your Office Today in Dubai - The Casa Kraft Way

        </h2>
        <div className="space-y-4 text-white/80 text-sm sm:text-base font-play text-left">
        <p>
      Office interior design is about more than just being aesthetically pleasing; it increases productivity, portrays your brand, and creates an environment that makes you proud to be in it. As a top-rated office interior design company in Dubai, we do not just create office spaces; we create the future of your business. Whether you require modern office interior designs, luxury <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/">office interior design services</a></b>, or an entire office interior fit out in Dubai, we are the team that you have been searching for.

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
