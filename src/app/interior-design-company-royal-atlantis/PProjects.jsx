"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Apartment Interior Design Atlantis The Royal",
    bgImage: "/images/atr-2.png",
  },
  {
    title: "Penthouse Interior Design Atlantis The Royal",
    bgImage: "/images/penthouse living room Atlantis The Royal Dubai.png",
  },
  {
    title: "Custom Furniture & Joinery Atlantis The Royal",
    bgImage: "/images/Custom Furniture & Joinery Atlantis The Royal.png",
  },
  {
    title: " Kitchen Design Atlantis The Royal",
    bgImage: "/images/kitchen inside Atlantis The Royal Residences Dubai.png",
  },
  {
    title: "Bathroom Interior Design Atlantis The Royal",
    bgImage: "/images/Bathroom Interior Design Atlantis The Royal.png",
  },


  
];
const ATRProjects = [
  {
    title: " Royal Atlantis Apartment",
    image: "/images/atr-4.png",
    link: "/royal-atlantis-apartment",
  },
  
 
];
const faqs = [
  {
  question: 'What is the average time required to design interiors for luxury residences?',
  answer:
    'The timeline typically ranges from 8 to 20 weeks, depending on the villa size, design complexity and scope of work. Larger or highly customized projects may require additional time.',
},
  {
    question: 'Do you offer furniture supplies?',
    answer:
      'Yes, our team provides a full range of furniture supply services for all villas in Dubai. The products that come under this category consist of joinery, custom furniture, wardrobes, TV cabinets and top brand furniture lines.',
  },
  {
    question: 'Which styles do you design in?',
    answer:
      'Our interior designers create villas in various styles, such as ultra luxury, modern, contemporary, Arabic, transitional, classic and minimalist designs. The designs of our villas are customized based on your preference, lifestyle and architecture of your villa.',
  },
  {
    question: 'Do you offer full renovation services?',
    answer:
      'Certainly. We offer premium renovation services that include floors, ceilings, kitchens, bathrooms, bespoke joinery, and lighting, among other aspects.',
  },
  {
    question: 'Can I visit your office?',
    answer:
      'Of course, you can visit us at our showroom located at Sheikh Zayed Road, Dubai. In our showroom, you will be able to see samples of materials and finishes we use for designing villa interiors, furniture, and more.',
  },
];
/* =========================
   TESTIMONIAL CAROUSEL
========================= */
const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote:
        "The work of Casa Kraft helped turn our Atlantis Royal house into a marvelous place for us to live in. They were able to understand our vision from the first day they worked on it and made sure to design an interior that combines luxury with practicality",
      author: "Alexander Reed , Atlantis The Royal Dubai",
    },
    {
      quote:
        "They really outdid themselves in terms of professionalism, creativity and exceptional  service provided. From initial design to execution and final styling all aspects were taken care of by Casa Kraft.",
      author: "Daniel Mitchel, One at Palm Jumeirah",
    },
    {
      quote:
        "Working with Casa Kraft Interiors on our apartment at Atlantis The Royal Residences was a wonderful experience. From the initial design discussions to the final execution, the team demonstrated exceptional attention to detail and a clear understanding of luxury living.",
      author: "Faisal Al Nuaimi, Serenia Residences",
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
          <p className="text-white/80 text-sm md:text-lg leading-relaxed italic ">
            “{testimonials[idx].quote}”
          </p>

          <div className="mt-6 text-[#4eb5a9] font-semibold text-sm md:text-base">
            — {testimonials[idx].author}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={() => change(idx - 1)}
            className="w-10 h-10 rounded-full border border-[#4eb5a9] text-[#4eb5a9] hover:bg-[#4eb5a9] hover:text-black transition"
          >
            ‹
          </button>

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


const AboutSection = () => {
  return (
    <section className="bg-[#000000] py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">

        {/* Image + Content Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          

          <div className="w-full ">    
              <h2 className="text-3xl md:text-4xl font-semibold text-white  mb-10">
           Transform Your Atlantis The Royal Residence With Casa Kraft</h2>
            <p className="text-justify text-white text-base sm:text  mb-6 leading-relaxed">
             Living in Atlantis The Royal calls for interiors befitting both the status of the building and the sophistication of the occupant. At Casa Kraft Interior Design & Renovation, we pride ourselves on offering ultra-luxury interior designs, premium renovations and high end fit-outs to discerning clients in search of exclusivity and elegance. As one of the <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/">best interior design firms at Atlantis The Royal Dubai</a></b>, we ensure the creation of interiors which blend architecture, aesthetics and practicality. Our expertise in the field has helped us position ourselves among the Top luxury interior design companies in Dubai by creating customized interiors based on individual demands.

            </p>
               <h3 className="text-3xl md:text-2xl font-semibold text-white  mb-5">What Is Luxury Interior Design in Atlantis The Royal Dubai?</h3>

               
            <p className="text-justify text-white text-base sm:text  mb-6 leading-relaxed">
            The design of interiors in Atlantis The Royal includes developing interiors that will correspond to one of the most expensive residential complexes in Dubai. Attention to detail is one of the main priorities here and all aspects from spatial layout to furnishings and lighting will be meticulously designed to bring you maximum convenience and luxury. As Casa Kraft Interior Design & Renovation, we control the entire process starting from conception and 3D rendering and finishing with the implementation of the project and delivery of results.
                  </p>
              <section className="bg-[#000000] ">
             
       {/* Services Section */}
        <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
            Our Interior Services in Atlantis The Royal
          </h2>
        </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
  {services.map((service, idx) => (
  <div
    key={idx}
    className="group relative h-[250px] rounded-2xl overflow-hidden shadow-lg"
  >
    <Image
      src={service.bgImage}
      alt={service.title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

    <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white">
      <h3 className="text-md font-conthrax mb-2">
        {service.title}
      </h3>

      <p className="text-sm text-gray-200 leading-relaxed">
        {service.description}
      </p>
    </div>
  </div>
))}
</div>
    
    </section>
            
            <section className="bg-[#000000] py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-10">
       

      

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-semibold text-white  mb-5">
           Our Interior Design Process in ATR, Dubai
          </h2>
         <h3 className="text-[#4eb5a9] text-md font-conthrax mb-4 leading-tight">  Inquiry & Understanding
         </h3>
          <p className="text-white text-sm sm:text-base  mb-4">
             We receive your query through phone calls, WhatsApp or even the contact form on our website. You tell us your needs, vision and timelines.</p>
        <h3 className="text-[#4eb5a9] text-md font-conthrax mb-4 leading-tight">
               Site Visit
             </h3>
          <p className="text-white text-sm sm:text-base mb-4 ">
          The design team visits your property to analyze your interiors in detail, take accurate measurements and identify any architectural features that will affect the design.
           </p>

          <h3 className="text-[#4eb5a9] text-md font-conthrax mb-4 leading-tight"> Design Development & Visualization</h3>
          <p className="text-white text-sm sm:text-base mb-4 ">The creation of custom interior designs and visualization is done at this stage to help you visualize how your interiors will look before construction starts.</p>
          
          <h3 className="text-[#4eb5a9] text-md font-conthrax mb-4 leading-tight">Proposal and Quote</h3>
           <p className="text-white text-sm sm:text-base mb-4 ">You are presented with a transparent proposal that outlines the cost and other aspects of executing your design.</p>

           <h3 className="text-[#4eb5a9] text-md font-conthrax mb-4 leading-tight"> Finalization of Materials and Design Details</h3>
           <p className="text-white text-sm sm:text-base mb-4 ">This involves selecting the finishing materials, furnishing your space, lighting fixtures, and all necessary planning to prepare for execution.</p>
          
           <h3 className="text-[#4eb5a9] text-md font-conthrax mb-4 leading-tight">Execution & Handover</h3>
           <p className="text-white text-sm sm:text-base mb-4 ">Our project management team oversees every aspect of construction, fit-out, installation, and final styling to ensure flawless delivery and a seamless handover.</p>

          {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">

                <a
                  href="/gallery"
                  className="border border-white px-7 text-white py-3 text-sm hover:bg-white hover:text-black transition text-center"
                >
                  See Projects
                </a>

                <a
                  href="/contact-us"
                  className="text-white px-7 py-3 text-sm bg-[#1f4a45] hover:bg-[#275f58] transition text-center"
                >
                  Free Consultation
                </a>

              </div>


        </div>
         {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/Our Interior Design Process in ATR, Dubai.png"
            alt="Our Interior Design Process in ATR, Dubai"
            width={800}
            height={600}
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
      
      <div className="text-center mt-10">
               <h2 className="text-3xl md:text-3xl font-semibold text-white text-center ">
          Why Choose Casa Kraft – Interior Design Company in Royal Atlantis?

          </h2>
          <p className=" text-center max-w-6xl mx-auto mt-0 md:mt-4 text-[12px] sm:text-base text-white py-2 md:py-3 ">
         Choosing the right interior design company is important when you choose to invest in luxurious interiors. Casa Kraft Interior Design & Renovation provides high end design and build service which makes the whole procedure easier while keeping the high levels of quality.
        Our services include complimentary consultations, comprehensive design planning, 3D modeling, high quality materials selection, bespoke joinery, fit-out solutions and project management. The professionals of our company carefully coordinate each step and make sure that all of your requests will be satisfied. One of the leading interior design companies based in Dubai, we work towards meeting and exceeding the expectations of our clients.

            </p>
        </div>
    </section>
          </div>
        </div>
         
       

             
        {/* ================= Atlantis The Royal PROJECTS SECTION ================= */}
<section className="bg-[#000000]">
  <div className="container mx-auto px-4 sm:px-8 lg:px-16">

    {/* Section Heading */}
    <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
        Our Projects in Atlantis The Royal
      </h2>
      <p className="text-gray-300 max-w-3xl mx-auto ">
        Discover our completed interior design and fit-out projects in Atlantis The Royal, including luxury Atlantis The Royal apartment designs, restaurants, and turnkey solutions.
      </p>
    </div>

    {/* Projects Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
  {ATRProjects.map((project, index) => (
    <Link key={index} href={project.link} className="block group">
      <div className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">

        <div className="relative h-[320px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 text-white">
          <h3 className="text-lg font-conthrax mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-300">
            {project.category}
          </p>
        </div>

      </div>
    </Link>
  ))}
</div>
    {/* Bottom CTA */}
    <div className="text-center mt-12">
      <Link href="/gallery">
        <button className="bg-[#4eb5a9] hover:bg-[#a97463] text-black px-8 py-3 rounded-md font-conthrax transition duration-300">
          View All Projects
        </button>
      </Link>
    </div>

  </div>
</section>

{/* ================= RENOVATION + SERVICES SECTION ================= */}
<div className="mt-10 mb-0">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

    {/* ================= LEFT SIDE (TEXT CONTENT) ================= */}
   
<div className="space-y-6">
        <h3 className="text-[#4eb5a9] text-2xl font-conthrax mb-2 leading-tight">
       Full Interior Design & Luxury Fit-Out
      </h3>

     <p className="text-sm text-white/70">
       Our <b className="text-[#4eb5a9]"><a href="https://casakraftinteriors.ae/interior-design-dubai">complete interior design and fit out services </a></b>will help you enhance every area of your home. We design for the living room, dining, bedroom, kitchen, bathroom, walk in wardrobe and entertainment zones using the same design theme. Our turnkey solution guarantees that you will be working with just one firm all through the process.
      </p>

      <h3 className="text-[#4eb5a9] text-2xl font-conthrax mb-2 leading-tight">
      Bespoke Joinery and Custom Furniture

      </h3>
 <p className="text-sm text-white/70">
       Being professionals in bespoke interior design and fit out services, we provide unique furniture items that suit your house. These range from luxurious wardrobes, TV cabinets to unique dining tables and feature walls among others.
      </p>

 <h3 className="text-[#4eb5a9] text-2xl font-conthrax mb-2 leading-tight"> Luxury Living Room Interior Design</h3>
  <p className="text-sm text-white/70">The living room is usually the center of luxury homes. We design luxury living areas with beautiful décor, designer lighting, custom finishes on the walls and ceilings, and a layout of luxury furniture. No matter whether you opt for the contemporary look of luxury or classical elegance, casa kraft helps you to achieve it.</p>
    </div>

    {/* ================= RIGHT SIDE (SERVICES LIST) ================= */}
    <div className="space-y-6">

    <h3 className="text-[#4eb5a9] text-2xl font-conthrax mb-2 leading-tight">
      Master Bedroom & Private Suite Design
      </h3>
       <p className="text-sm text-white/70">We provide <b><a href="https://casakraftinteriors.ae/bedroom-interior-design-trends"></a>luxury bedroom designs</b> , drawing inspiration from top-notch hospitality experiences around the globe. From custom bedheads and walk in closets to custom lighting and furniture, each design offers maximum luxury with consistency in its design elements.</p>
      <div className="space-y-4 text-white ">

        <div>
          <h3 className="text-[#4eb5a9] text-2xl font-conthrax mb-2 leading-tight">Luxury Kitchens & Bathrooms</h3>
          <p className="text-sm text-white/70">
        We offer <b className="text-[#4eb5a9]"
><a href="https://casakraftinteriors.ae/kitchen-interior-design-in-dubai">kitchens interior designs in Atlantis The Royal</a></b> which include quality cabinetry, stone countertops, ample storage, and luxurious finishing. As far as bathrooms are concerned, our luxury bathrooms will take you to the level of a spa where you can enjoy quality designer vanity, freestanding bathtub, lighting fixtures, and quality materials.

          </p>
        </div>

        <div>
        <h3 className="text-[#4eb5a9] text-2xl font-conthrax mb-4 leading-tight">Outdoor Entertainment Areas </h3>
          <p className="text-sm text-white/70">
    In addition to luxurious interiors, Atlantis The Royal has magnificent outdoor areas. Therefore, we provide luxury terraces, lounge areas, outdoor dining areas, entertainment areas, and relaxation areas.


          </p>
        </div>

       
       

      </div>
    </div>

  </div>
{/* ================= INTERIOR THEMES SECTION ================= */}
<section className="bg-black py-5 mt-5">
  <div className="container mx-auto px-4 sm:px-8 lg:px-16">

    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
        Three Different Interior Design Themes for Atlantis The Royal Residences
      </h2>

      <p className="max-w-4xl mx-auto text-white/70 text-sm md:text-base leading-relaxed">
        Every residence at Atlantis The Royal deserves interiors that reflect
        the owner's personality and lifestyle. Casa Kraft Interior Design &
        Renovation offers bespoke concepts tailored to modern luxury living.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Theme 1 */}
      <div className="bg-zinc-950 border border-zinc-800 overflow-hidden rounded-2xl group">
        <div className="relative h-[320px]">
          <Image
            src="/images/modern apartment living room inside Atlantis The Royal Residences Dubai.png"
            alt="luxury apartment living room inside Atlantis The Royal Residences Dubai."
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="p-7">
          <h3 className="text-2xl text-[#4eb5a9] font-semibold mb-4">
          Modern Luxury Interiors
          </h3>

          <p className="text-white/70 text-sm leading-relaxed">
           In today’s interiors, there is an emphasis on streamlined architecture, premium finishes, elegance and luxury materials to create beautiful, bright, spacious and contemporary spaces without any excesses.

          </p>
        </div>
      </div>

      {/* Theme 2 */}
      <div className="bg-zinc-950 border border-zinc-800 overflow-hidden rounded-2xl group">
        <div className="relative h-[320px]">
          <Image
            src="/images/contemporary minimalist penthouse interior Atlantis The Royal Dubai.png"
            alt="Modern Minimalist Interior Design"
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="p-7">
          <h3 className="text-2xl text-[#4eb5a9] font-semibold mb-4">
          Contemporary Sophisticated Interiors
           </h3>

          <p className="text-white/70 text-sm leading-relaxed">
           Modern luxury encompasses the use of modern design elements combined with comfort and practicality. Using layering in textures, high quality furniture, lighting and accessories, we design interiors that are luxurious but also comfortable.

          </p>
        </div>
      </div>

      {/* Theme 3 */}
      <div className="bg-zinc-950 border border-zinc-800 overflow-hidden rounded-2xl group">
        <div className="relative h-[320px]">
          <Image
            src="/images/classic luxury living room inside Atlantis The Royal Residences Dubai.png"
            alt="Classic Elegant Interior Design"
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="p-7">
          <h3 className="text-2xl text-[#4eb5a9] font-semibold mb-4">
          Timeless Classic Luxury Interiors
          </h3>

          <p className="text-white/70 text-sm leading-relaxed">
           Classic elegance is a great choice for those customers who prefer timelessness and elegant interiors. Bespoke elements, high-quality materials, custom work and elegant finishes add to timeless looks.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
  {/* TESTIMONIAL BELOW BOTH COLUMNS */}
  <div className="mt-12">
    <TestimonialCarousel />
  </div>

</div>
        
         {/* FAQ Section */}
      <div className=" text-white/80 max-w-4xl mx-auto bg-black rounded-lg text-white/80  shadow p-6 sm:p-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
        Royal Atlantis Interior Design in Dubai – FAQs
        </h2>
        <p className="text-white/80 font-play text-sm sm:text-base text-white/80 mb-6 text-center">
          Find quick answers to common questions about our Interior Design services in ATR, Dubai.
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

      </div>
        {/* Top Content Block */}
      <div className="lg:max-w-[80%] text-white mx-auto bg-black p-6 sm:p-5 mb-5 rounded shadow text-center space-y-6">
             <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
      Ready to Transform Your Atlantis The Royal Residence?


        </h2>
        <div className="space-y-4 text-white/80 text-sm sm:text-base font-play text-left">
        <p>
     Casa Kraft turns your home into a masterpiece from the initial concept all the way through to completion. It doesn’t matter whether it is an overall fit out, interior renovation or complete re-design. We bring you the most luxurious interior designs Dubai has to offer. Contact Casa Kraft today for a complimentary consultation after all, extraordinary living starts with a conversation! Contact us today for a free consultation and discover why we are among the best luxury interior design companies in Dubai.


       </p>
  
        </div>

        </div>
    </section>
  );
};

export default AboutSection;
