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
            <h2 className="text-3xl md:text-4xl sm:mt-10 font-semibold mb-6" style={{ color: gold }}>About Us</h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Casa Kraft Interiors is a top-notch company that was established in 2*** by <strong>--</strong> and <strong>--</strong>. The company manufactures and delivers the best interior design products and services at an affordable price throughout the UAE.
              </p>
              <p>
                We have a highly qualified staff available 24/7. Our professionals can transform your normal-looking interior into a modern, aesthetic, and luxurious one with tasteful modifications.
              </p>
              <p>
                We provide commercial, institutional, residential, and other architectural interior solutions.
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
              <a href="#projects" className="block text-center border rounded-xl px-6 py-4 hover:bg-gray-50">
                Our Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16" style={{ background: light }}>
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle title="Our Incredible Interior Design Services" />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "RESIDENTIAL",
                img: "images/residential.png",
              },
              {
                title: "LANDSCAPE",
                img: "images/landscape-services.png",
              },
              {
                title: "FIT OUT",
                img: "images/fit-out.png",
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
                <h3 className="text-2xl font-semibold" style={{ color: gold }}>Premium Quality Products & Services</h3>
                <p>
                  We offer the world’s top-quality interior designer products and services that make your home look amazing and eye-catching.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 space-y-4 text-gray-700">
                <h3 className="text-2xl font-semibold" style={{ color: gold }}>We Are Best At Giving Customized Services</h3>
                <p>
                  We tailor every project to your requirements and guarantee best-in-class results.
                </p>
              </div>
              <img className="order-1 md:order-2 rounded-xl shadow" src="images/best-customized-services.png" alt="TV wall" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img className="rounded-xl shadow" src="images/highly-experienced-team.png" alt="Decor" />
              <div className="space-y-4 text-gray-700">
                <h3 className="text-2xl font-semibold" style={{ color: gold }}>Highly Experienced Staff</h3>
                <p>
                  Our seasoned team brings years of expertise to deliver an elevated, modern aesthetic every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section id="projects" className="py-16" style={{ background: light }}>
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle title="Recent Project" />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "W Residence apartment, Palm Jumeirah", img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1470&auto=format&fit=crop" },
              { title: "Amalfi 3 bedroom townhouse", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1470&auto=format&fit=crop" },
              { title: "Citywalk penthouse", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1470&auto=format&fit=crop" },
              { title: "Address beach resort 4 bedroom apartment", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1470&auto=format&fit=crop" },
              { title: "DubaiHills. 6 bedroom villa", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1470&auto=format&fit=crop" },
              { title: "District one, Contemporary villa", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1470&auto=format&fit=crop" },
            ].map((p, i) => (
              <Card key={i}>
                <div className="border-4" style={{ borderColor: gold }}>
                  <img src={p.img} alt={p.title} className="h-56 w-full object-cover" />
                </div>
                <div className="px-6 py-4 text-center font-medium text-gray-800">{p.title}</div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <a href="#all-projects" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900">
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
              <p>
                Since 2007, we’ve worked tirelessly to make Casa Kraft Interiors popular for its best-quality products and services. Our primary goal is 100% customer satisfaction.
              </p>
              <p>
                Our experienced interior designers transform entire homes into outstanding spaces that attract and inspire.
              </p>
            </div>
            <img className="rounded-xl shadow" src="images/our-mission.png"alt="Delivering best quality services" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start mt-12">
            <img className="rounded-xl shadow hidden md:block" src="images/best-quality-services.png" alt="Sofa" />
            <div className="space-y-4 text-gray-700">
              <h3 className="text-2xl font-semibold" style={{ color: gold }}>Delivering Best Quality Services</h3>
              <p>
                Give us a call, share your requirements, and our professional team will come to your doorstep ASAP to deliver the best service.
              </p>
              <p>
                Choose casakraftinteriors.ae for premium results at a competitive price point you won’t get elsewhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}