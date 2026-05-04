import React from "react";
import { Play, Mail, CheckCircle2 } from "lucide-react";

const gold = "#d4a373";
const light = "#f7f7f7";

const DotDivider = ({ className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span className="h-[1px] w-16 bg-gray-300" />
    <div className="flex items-center gap-1">
      <span className="w-2 h-2 rounded-full bg-gray-400" />
      <span className="w-2 h-2 rounded-full bg-gray-400" />
      <span className="w-2 h-2 rounded-full bg-gray-400" />
    </div>
    <span className="h-[1px] w-16 bg-gray-300" />
  </div>
);

const SectionTitle = ({ title, className = "" }) => (
  <div className={`text-center ${className}`}>
    <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: gold }}>{title}</h2>
    <DotDivider className="justify-center mt-3" />
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl bg-white shadow-sm border border-[${gold}]/30 overflow-hidden ${className}`}>{children}</div>
);

const PillButton = ({ children, tone = "primary", className = "", ...rest }) => (
  <button
    className={`px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 border transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      tone === "primary"
        ? "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700"
        : "bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100"
    } ${className}`}
    {...rest}
  >
    {children}
  </button>
);

export default function AbusBsection() {
  return (
    <div className="w-full">
      {/* ABOUT US */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl md:text-4xl sm:mt-10 font-semibold mb-6" style={{ color: gold }}>About Us - Casa Kraft Interiors</h1>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                <b className="text-[#b49a55]"><a href="https://casakraftinteriors.ae/">Casa Kraft Interiors</a></b> is a premier interior design and renovation company established in the Dubai, UAE. We specialize in manufacturing and delivering high-quality interior renovation products and services at competitive prices across the region.
              </p>
              <p>
                With a team of highly qualified professionals available 24/7, we are dedicated to transforming ordinary spaces into luxury experiences according to our client's preferences.
              </p>
              <p>
                Our expertise covers commercial, residential, institutional, and other architectural interior design and <b className="text-[#b49a55]"><a href="https://casakraftinteriors.ae/renovation-dubai">renovations services</a></b>, ensuring excellence, innovation, and attention to detail in every project we undertake in Dubai.
              </p>
            </div>
          </div>

          <div className="relative sm:mt-10">
            <div className="aspect-video rounded-xl border-4" style={{ borderColor: gold }}>
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center rounded-lg" />
            </div>
            <button className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-black/60 text-white grid place-items-center">
              <Play />
            </button>
            <DotDivider className="justify-center mt-6" />
            <div className="mt-4">
              <a href="gallery" className="block text-center border rounded-xl px-6 py-4 hover:bg-gray-50">
                Our Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16" style={{ background: light }}>
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle title="Our Interior Design & Renovation Services" />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "INTERIOR DESIGN",
                img: "images/modern townhouse interior in Al Furjan Dubai.png",
              },
              {
                title: "RENOVATION",
                img: "images/Design, Fit-Out, and Execution Process.png",
              },
              {
                title: "FIT OUT",
                img: "images/wc8.png",
              },
            ].map((c, i) => (
              <Card key={i}>
                <div className="border-4" style={{ borderColor: gold }}>
                  <img src={c.img} alt={c.title} className="h-64 w-full object-cover" />
                </div>
                <div className="px-6 py-5">
                  <h3 className="text-2xl font-semibold text-gray-800 text-center">{c.title}</h3>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
            <PillButton>
              <CheckCircle2 className="h-5 w-5" /> Request availability by WhatsApp
            </PillButton>
            <PillButton tone="secondary">
              <Mail className="h-5 w-5" /> Request availability by E-mail
            </PillButton>
          </div>
        </div>
      </section>

      {/* SPECTACULAR WORKING */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle title="Spectacular Working Of Casa Kraft Interiors" />

          <div className="mt-10 grid gap-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img className="rounded-xl shadow" src="images/premium-quality-products-services.png" alt="Living room" />
              <div className="space-y-4 text-gray-700">
                <h3 className="text-2xl font-semibold" style={{ color: gold }}>Premium Quality Materials</h3>
                <p>
                  
               At <b className="text-[#b49a55]"><a href="https://casakraftinteriors.ae/renovation-dubai">Casa Kraft interiors & renovation</a></b>, we are here to deliver the best results by combining our expertise with premium materials and services. As a trusted interior renovation company in Dubai, we make sure that our every project shows quality and durability with aesthetics.from the beginning to ending of the project, our fit-out services, interior design Dubai, and renovation services in Dubai are executed with deep attention.

                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 space-y-4 text-gray-700">
                <h3 className="text-2xl font-semibold" style={{ color: gold }}>Customized Services</h3>
                <p>
                  Every location or space has its own personality and Casa Kraft is expert in designing any space according to its aesthetics. We provide best customized services in Dubai that perfectly matches with the vision, lifestyle and business needs of our clients. As a client focused <b className="text-[#b49a55]"><a href="https://share.google/dfWrNfpHxqGYPOqDG">interior design and renovation company in Dubai</a></b>, we work with personalized fit-out services that influence our every project.
                </p>
              </div>
              <img className="order-1 md:order-2 rounded-xl shadow" src="images/best-customized-services.png" alt="TV wall" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img className="rounded-xl shadow" src="images/highly-experienced-team.png" alt="Decor" />
              <div className="space-y-4 text-gray-700">
                <h3 className="text-2xl font-semibold" style={{ color: gold }}>Highly Experienced Staff</h3>
                <p>
                  Our strength lies in our highly experienced staff of designers, project managers, and skilled craftsmen who work with their years of experience in this industry and make our every project as premium as they can.  As a professional renovation company in Dubai, we ensure a smooth execution of the project and complete it with outstanding results. With deep knowledge of<b className="text-[#b49a55]"><a href="https://casakraftinteriors.ae/blogs"> interior design Dubai trends</a></b> and technical excellence in fit-out services, our team guarantees quality you can trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

   {/* RECENT PROJECTS */}
<section id="projects" className="py-16" style={{ background: light }}>
  <div className="mx-auto max-w-6xl px-6">
    <SectionTitle title="Recent Interior Design & Renovation Projects" />

    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {[
        {
          title: "Meadows Contemporary Villa Design",
          img: "/images/mcv-7.png",
          link: "meadows-contemporary-villa"
        },
        {
          title: "Bluewaters 3 Bedroom Apartment",
          img: "/images/bluewaters-8.png",
          link: "/bluewaters-3-bedroom-design"
        },
        {
          title: "Palm Jumeriah Apartment",
          img: "/images/pja-3.png",
           link: "/palm-jumeirah-apartment"
        },
       
        {
          title: "Contemporary 2 Bedroom Apartment",
          img: "/images/ca-6.png",
           link: "/contemporary-2-bedroom-apartment"
        },
         {
          title: "Villa Latana Interior",
          img: "/images/vl-2.png",
           link: "/villa-lantana"
        },
        {
          title: "Townhouse Arabian Ranches",
         img: "/images/tar-3.png",
          link: "/townhouse-arabian-ranches-2"
        },
      ].map((p, i) => (
        <a key={i} href={p.link} className="block group">
          <Card className="transition duration-300 hover:shadow-xl">
            <div
              className="border-4 overflow-hidden"
              style={{ borderColor: gold }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="px-6 py-4 text-center font-medium text-gray-800 group-hover:text-[#d4a373] transition">
              {p.title}
            </div>
          </Card>
        </a>
      ))}
    </div>

    <div className="flex justify-center mt-10">
      <a
        href="/gallery"
        className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900"
      >
        <CheckCircle2 className="h-5 w-5" /> See Our Projects
      </a>
    </div>
  </div>
</section>

      {/* OUR MISSION */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle title="Our Mission" />

          <div className="grid md:grid-cols-2 gap-10 items-start mt-10">
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="py-10">
                Casa Kraft Interiors & Renovation Dubai aims at turning <b className="text-[#b49a55]"><a href="https://casakraftinteriors.ae/gallery">residential and commercial spaces</a></b>  into beautiful spaces that combine functionality and modern trends. Through innovative space planning and modern design ideas, we aim at improving the way people live through high-quality design and execution. The purpose is to set new benchmarks in the design industry of Dubai, UAE through timeless interiors and functional designs. Choose casakraftinteriors.ae for premium results at a competitive price point you won’t get elsewhere.

              </p>
            </div>
            <img className="rounded-xl shadow" src="images/our-mission.png"alt="Delivering best quality services" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start mt-12">
            <img className="rounded-xl shadow hidden md:block" src="images/best-quality-services.png" alt="Sofa" />
            <div className="space-y-4 text-gray-700">
              <h3 className="text-2xl font-semibold" style={{ color: gold }}>Delivering Best Quality Services</h3>
              <p>
                We try our best to achieve perfection through accuracy, innovation, and attention to details in all projects we work on. In every stage of a project, from its starting to its completion, we focus on excellence in workmanship, choice of high-quality materials, and efficient project delivery. Each designed space is crafted to reflect durability, elegance, and a refined architectural finish that exceeds client expectations.
              
              </p>
              <p> <b className="text-[#b49a55]"><a href="https://casakraftinteriors.ae/contact-us">Give us a call</a></b>, share your requirements, and our professional team will come to your doorstep ASAP to deliver the best service. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}