"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Office Interior Design In palm jumeirah",
    bgImage: "/images/office-blinds-in-dubai.png",
    link: "/office-interior-palm-jumeirah",
  },
  {
    title: "Apartment Interior Design In palm jumeirah",
    bgImage: "/images/pja-7.png",
    link: "/apartment-design-palm-jumeirah",
  },
  {
    title: "Penthouse Interior Design palm jumeirah",
    bgImage: "/images/penthouse-design.png",
    link: "/penthouse-interior-palm-jumeirah",
  },
  {
    title: "Villa Interior Design palm jumeirah",
    bgImage: "/images/penthouse-design.png",
    link: "/villa-interior-design-palm-jumeirah",
  },
  {
    title: "Restaurant Interior Design In palm jumeirah",
    bgImage: "/images/restaurant interior design.png",
    link: "/restaurant-interior-palm-jumeirah",
  },


  
];
const palmJumeirahProjects = [
  {
    title: " Palm Jumeirah Apartment",
    image: "/images/pja-6.png",
    link: "/palm-jumeirah-apartment",
  },
  {
    title: "Palm Jumeirah Villa",
    image: "/images/pjv-9.png",
    link: "/palm-jumeirah-vila",
  },
 
];
const faqs = [
  {
  question: 'Why is Casa Kraft considered the best interior design company in Palm Jumeirah?',
  answer:
    'Casa Kraft Interior Design & Renovation brings together the best of <a href="https://casakraftinteriors.ae/interior-design-dubai" className="text-[#4eb5a9] font-semibold">interior design Dubai</a> skills, a dedicated in-house joinery factory, and over 12 years of experience in providing top-notch luxury interior design services in Palm Jumeirah. With Casa Kraft, all aspects of your project are handled from conceptualization and 3D design to fit-outs and handover giving you the very best in terms of bespoke and superior design services. It is our in house process that makes us the only choice when it comes to interior design companies in Palm Jumeirah.',
},
  {
    question: 'Does Casa Kraft do sustainable interior design in Palm Jumeirah?',
    answer:
      'Yes. At Casa Kraft, sustainable interior design practices are implemented in all projects to create a space that is not only luxurious but also sustainable.we do. Using eco-friendly materials, efficient lighting systems and sourcing procedures makes us one of the leading providers of luxury interior design services in Palm Jumeirah.',
  },
  {
    question: 'What kinds of properties does Casa Kraft Interior Design & Renovation design in Palm Jumeirah?',
    answer:
      'Casa Kraft Interior Design & Renovation designs all kinds of properties in Palm Jumeirah, such as penthouses, townhouses, apartments, private residences, offices and restaurants. No matter what kind of property you have in Palm Jumeirah, whether it is an office or a luxury penthouse, we can give you amazing interior designs that fit your needs.',
  },
  {
    question: 'Do you provide custom furniture designs for Palm Jumeirah properties?',
    answer:
      'Yes, we definitely do. Our own joinery workshop allows us to create custom designed furniture or joinery that perfectly matches your bespoke interior design idea and fits the measurements of your property in Palm Jumeirah.',
  },
  {
    question: 'What is the price of luxury interior designing in Palm Jumeirah?',
    answer:
      'The price of luxury interior design in Palm Jumeirah depends on the size of your property, the level of interior design you select, materials you select, and other details that may be included as a part of your project’s fit-out. The prices we offer at Casa Kraft vary between AED 150 per sq ft for basic interior design and AED 1,200+ per sq ft for luxurious interior design.',
  },
];
/* =========================
   TESTIMONIAL CAROUSEL
========================= */
const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote:
        "Casa Kraft Interiors transformed our apartment into a stylish and comfortable home. The attention to detail and quality of the finishes truly exceeded our expectations.",
      author: "Rajesh Patel, Business Bay",
    },
    {
      quote:
        "Our apartment transformation is everything we hoped for. Casa Kraft Interiors designed an elegant, contemporary living space that not only turned out amazing but also made the whole experience enjoyable and hassle-free.",
      author: "Maria Fernandes, Dubai Marina",
    },
    {
      quote:
        "Casa Kraft Interiors transformed our apartment living room into a warm and elegant space. The custom TV unit, lighting, and overall design came together beautifully.",
      author: "Daniel Roberts, Dubai Hills Estate",
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
          

          <div className="w-full  text-center ">    
              <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
           Luxury Interior Design & Renovation in Palm Jumeirah
           </h2>
            <p className="text-justify text-white text-base sm:text  mb-6 leading-relaxed">
              Palm Jumeirah is known for its luxurious lifestyle in Dubai, but Casa Kraft Interior Design & Renovation  set the standards for interior designs in Palm Jumeirah. We worked on over 12 years worth of projects including some of the most prestigious penthouse, villa, townhouses and commercial projects, we have earned ourselves a good reputation among our clients. Whatever be your requirements, from luxurious interiors to fit-out, leave it to us and you won’t be disappointed with what we do for you. Being the <b className="text-[#4eb5a9]"
             ><a href="https://casakraftinteriors.ae/interior-design-palm-ju">leading interior design company in Palm Jumeirah</a></b>, we offer you elegant designs, custom interiors and premium quality finishes that embody your lifestyle .
              <br /><br />
              
            </p>
             
              <section className="bg-[#000000] ">
             
       {/* Services Section */}
        <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
            Our Interior Services in palm jumeirah
          </h2>
        </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
  {services.map((service, idx) => (
    <Link key={idx} href={service.link} className="block group">
      <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
        
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
    </Link>
  ))}
</div>
    
    </section>
            
            <section className="bg-[#000000] py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 gap-10">
       

      

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-semibold text-white  mb-5">
           Our Interior Design Process in Dubai
          </h2>
         <h3 className="text-[#4eb5a9] text-md font-conthrax mb-4 leading-tight"> Consultation & Discovery
         </h3>
          <p className="text-white text-sm sm:text-base  mb-4">
            We start by having an extensive consultation that will help us understand your way of living, tastes and the type of interior design that you have for your Palm Jumeirah property. No good project ever starts without listening to our clients.</p>
        <h3 className="text-[#4eb5a9] text-md font-conthrax mb-4 leading-tight">
               Concept & 3D Design
             </h3>
          <p className="text-white text-sm sm:text-base mb-4 ">
           Our team of designers will create mood boards, spatial plans and photorealistic 3D renderings to ensure that you are satisfied with the design concept before anything is even done.</p>

          <h3 className="text-[#4eb5a9] text-md font-conthrax mb-4 leading-tight"> Material and Finishes</h3>
          <p className="text-white text-sm sm:text-base mb-4 ">The selection of materials and finishes is done after consultation to ensure all your ideas are covered. You get a carefully selected collection of finishes, fabrics, lighting and furnishings which suit both the design idea and the benchmark expected in luxurious interiors in Palm Jumeirah.</p>
          
          <h3 className="text-[#4eb5a9] text-md font-conthrax mb-4 leading-tight">Installation and Execution</h3>
           <p className="text-white text-sm sm:text-base mb-4 ">With our team of craftsmen and specialists, we execute the design with unrivalled accuracy. From civil work to joinery and installation, it will all be done to an extremely high standard  bespoke fitout with high quality finishes and installation.</p>

           <h3 className="text-[#4eb5a9] text-md font-conthrax mb-4 leading-tight"> Handover</h3>
           <p className="text-white text-sm sm:text-base mb-4 ">Quality control guarantees you that every little detail conforms to the high standards of Casa Kraft before it gets into your hands.</p>


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
            src="/images/Our Interior Design Process in Palm Jumeirah Dubai.png"
            alt="Our Interior Design Process in Palm Jumeirah Dubai"
            width={800}
            height={600}
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
      
      <div className="text-center mt-10">
               <h2 className="text-3xl md:text-4xl font-semibold text-white text-center ">
           Why Casa Kraft is the Best Interior Design Company in Palm Jumeirah

          </h2>
          <p className=" text-center max-w-6xl mx-auto mt-0 md:mt-4 text-[12px] sm:text-base text-white py-2 md:py-3 ">
         Palm Jumeirah calls for nothing but perfection. As a part of Casa Kraft Interior Design & Renovation we provide you with the best combination of custom made craftsmanship and outstanding workmanship to design interiors that are both functional and stunning. With more than 12 years of experience in this line, our expert designers and fit out professionals have successfully delivered some of the best luxury interior designs in Palm Jumeirah. 
         Whether it is the joinery factory that produces bespoke interiors or the project managers who assure the safe delivery of the project by professionals, everything is done with perfection, professionalism and dedication to ensure that you get the premium finishes. We also integrate sustainable interior design practices into every project ensuring that luxury and responsibility always go hand in hand.
            </p>
        </div>
    </section>
          </div>
        </div>
         
       

             
        {/* ================= palm jumeirah PROJECTS SECTION ================= */}
<section className="bg-[#000000]">
  <div className="container mx-auto px-4 sm:px-8 lg:px-16">

    {/* Section Heading */}
    <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
        Our Projects in palm jumeirah
      </h2>
      <p className="text-gray-300 max-w-3xl mx-auto ">
        Discover our completed interior design and fit-out projects in palm jumeirah, including luxury palm jumeirah apartment designs, restaurants, and turnkey solutions.
      </p>
    </div>

    {/* Projects Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
  {palmJumeirahProjects.map((project, index) => (
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
       Penthouse Interior Design
      </h3>

     <p className="text-sm text-white/70">
        The penthouse on Palm Jumeirah is considered the ultimate manifestation of luxury living and our designers ensure that these interiors meet the expectations of such an esteemed property by designing interiors. Featuring high ceilings, stunning views and bespoke interiors, our designs embody elegance and functionality in equal measure.
      </p>

      <h3 className="text-[#4eb5a9] text-2xl font-conthrax mb-2 leading-tight">
      Townhouse Interior Design
      </h3>
 <p className="text-sm text-white/70">
        Our design team brings the same level of refinement and sophistication to the process of designing interiors for townhouses in Palm Jumeirah. Our services include crafting personalized interiors that combine sophisticated elements with a contemporary design approach utilizing every aspect of your townhouse through innovative design and high quality materials.
      </p>

 <h3 className="text-[#4eb5a9] text-2xl font-conthrax mb-2 leading-tight">Apartment Interior Design</h3>
  <p className="text-sm text-white/70">Whether you are looking for studio apartments or luxurious waterfront properties, we offer <b className="text-[#4eb5a9]"
><a href="https://casakraftinteriors.ae/apartment-interior-design-dubai">apartment interior design services</a></b> for all sizes and styles of apartments in Palm Jumeirah. At Casa Kraft Interior Design & Renovation, our emphasis is on creating spacious, sophisticated and totally modern interior spaces in Palm Jumeirah.</p>
    </div>

    {/* ================= RIGHT SIDE (SERVICES LIST) ================= */}
    <div className="space-y-6">

    <h3 className="text-[#4eb5a9] text-2xl font-conthrax mb-2 leading-tight">
       Home Interior Design
      </h3>
       <p className="text-sm text-white/70">Your house is your haven and this is how we treat each home interior design project in Palm Jumeirah. We spend time understanding who you are and what you want from us before creating a unique design for your house interior. Casa kraft interior design ensures that our interior and architectural designs in Palm Jumeirah give you an experience that feels just like a dream home.</p>
      <div className="space-y-4 text-white ">

        <div>
          <h3 className="text-[#4eb5a9] text-2xl font-conthrax mb-2 leading-tight">Office Interior Design</h3>
          <p className="text-sm text-white/70">
          A perfect workplace creates motivation, creativity and inspiration. We at Casa Kraft Interior Design & Renovation provide <b className="text-[#4eb5a9]"
          ><a href="https://casakraftinteriors.ae/office-interior-design-dubai">Office interior design solutions in Palm Jumeirah</a></b> for both office spaces and commercial buildings ensuring that our designs not only look modern but are also sophisticated and embody your brand. For boutique offices to corporate offices, we will make sure that our interior design reflects your brand.
          </p>
        </div>

        <div>
        <h3 className="text-[#4eb5a9] text-2xl font-conthrax mb-4 leading-tight">Restaurant Interior Design</h3>
          <p className="text-sm text-white/70">
           <b className="text-[#4eb5a9]"
><a href="https://casakraftinteriors.ae/restaurant-interior-design-dubai">Restaurant interiors</a></b>  have to be given as much importance as the dishes they serve. At Casa Kraft, we specialize in creating restaurant interiors at Palm Jumeirah that will help in creating an atmosphere, telling a story and leaving an indelible impression on every guest who steps into our designed restaurants. 

          </p>
        </div>

       
       

      </div>
    </div>

  </div>

  {/* TESTIMONIAL BELOW BOTH COLUMNS */}
  <div className="mt-12">
    <TestimonialCarousel />
  </div>

</div>
        
         {/* FAQ Section */}
      <div className=" text-white/80 max-w-4xl mx-auto bg-black rounded-lg text-white/80  shadow p-6 sm:p-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
         Apartment Interior Design in Dubai – FAQs
        </h2>
        <p className="text-white/80 font-play text-sm sm:text-base text-white/80 mb-6 text-center">
          Find quick answers to common questions about our Apartment Interior Design services in Dubai.
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
       Create Your Dream Apartment with Casa Kraft

        </h2>
        <div className="space-y-4 text-white/80 text-sm sm:text-base font-play text-left">
        <p>
      Finding yourself wondering where to hire a luxury interior designer in Palm Jumeirah? The best option available in Palm Jumeirah for you would be Casa Kraft Interior Design & Renovation which provides interior design services in Palm Jumeirah by creating interiors that reflect sophistication and elegance through its unique contemporary approach.

       </p>
  
        </div>

        </div>
    </section>
  );
};

export default AboutSection;
