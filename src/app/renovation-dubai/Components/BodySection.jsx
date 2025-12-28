"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FiUser,
  FiCalendar,
  FiShield,
  FiDollarSign,
  FiGift,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

// Helpers
const Section = ({ className = "", children }) => (
  <section className={`w-full ${className}`}>{children}</section>
);

const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-7xl px-4 md:px-8 ${className}`}>{children}</div>
);

const PrimaryBtn = ({ href = "#", children, className = "" }) => (
  <Link
    href={href}
    className={`inline-flex items-center justify-center rounded-sm bg-[#6b3f7a] px-6 py-3 text-sm font-medium text-white hover:brightness-110 transition ${className}`}
  >
    {children}
  </Link>
);

const DarkBtn = ({ href = "#", children, className = "" }) => (
  <Link
    href={href}
    className={`inline-flex items-center justify-center rounded-sm bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90 transition ${className}`}
  >
    {children}
  </Link>
);

const GhostBtn = ({ href = "#", children, className = "" }) => (
  <Link
    href={href}
    className={`inline-flex items-center justify-center rounded-sm border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black hover:bg-black/5 transition ${className}`}
  >
    {children}
  </Link>
);

// =====================================
// Body Section (matches PDF)
// =====================================
export default function BodySection() {
  const promiseItems = useMemo(
    () => [
      {
        icon: <FiUser className="text-2xl" />,
        title: "Experienced Planners",
        desc:
          "Our team of professional designers for  home renovation, office renovation  and renovation management experts ensures that your villa, apartments and office renovation in Dubai will be taken care of.",
      },
      {
        icon: <FiCalendar className="text-2xl" />,
        title: "Planned Installation",
        desc:
          "Every stage is planned in advance to allow hassle-free execution of renovation work in Dubai. This could be related to kitchen renovations in Dubai, bathroom renovations in Dubai, and overall interior renovations projects.",
      },
      {
        icon: <FiShield className="text-2xl" />,
        title: "Warranty",
        desc:
          " Our home renovation services in Dubai are confidently supported by a comprehensive warranty, ensuring you achieve the desired quality for the long term of your investement.",
      },
      {
        icon: <FiDollarSign className="text-2xl" />,
        title: "Best Price Guarantee",
        desc:
          " Get best quality villa renovation work in Dubai, apartment renovation work, and turnkey home renovation services at highly competitive rates, assured without compromises.",
      },
      {
        icon: <FiGift className="text-2xl" />,
        title: "Free Design Services",
        desc:
          " Take advantage of our complimentary design consultation for smart renovations in Dubai for benefitting from an understanding of what you want before embarking on building.",
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { value: "8+", label: "Trusted Years" },
      { value: "200+", label: "Employees" },
      { value: "600+", label: "Residential Projects" },
      { value: "50+", label: "Commercial Fit-Outs" },
    ],
    []
  );

  // Renovations grid (PDF shows image tiles with bottom black label)
  const renovationTiles = useMemo(
    () => [
      { title: "Villa Renovation", img: "/images/cvd-5.png", href: "/" },
      { title: "Apartment Renovation", img: "/images/ca-6.png", href: "/" },
      { title: "Office Renovation", img: "/images/bulgari-2.png", href: "/" },
      { title: "Kitchens", img: "/images/marina-8.png", href: "/" },
      { title: "Bathrooms", img: "/images/bluewaters-5.png", href: "/" },
      { title: "Flooring", img: "/images/trd-9.png", href: "/flooring" },
      { title: "Wardrobes & Cabinets", img: "/images/ca-6.png", href: "/" },
      { title: "Villa Extension", img: "/images/vl-7.png", href: "/" },
      { title: "Landscape", img: "/images/landscape-design.png", href: "/" },
      { title: "Painting", img: "/images/boulevard-5.png", href: "/" },
      { title: "Windows & Doors", img: "/images/damac-5.png", href: "/" },
    ],
    []
  );

  // ✅ UPDATED: projectMosaic now holds per-card overlay content (edit later easily)
  const projectMosaic = useMemo(
    () => [
      {
        img: "/images/projects/p1.jpg",
        title: "PROJECT ONE",
        type: "RESTAURANT",
        locationLine1: "Financial District, Toronto,",
        locationLine2: "Downtown, Oakville, Canada",
        year: "2023",
        service: "FULL CONCEPT CREATION",
      },
      {
        img: "/images/projects/p2.jpg",
        title: "PROJECT TWO",
        type: "CAFE",
        locationLine1: "Jumeirah, Dubai,",
        locationLine2: "United Arab Emirates",
        year: "2024",
        service: "INTERIOR DESIGN + FIT-OUT",
      },
      {
        img: "/images/projects/p3.jpg",
        title: "PROJECT THREE",
        type: "OFFICE",
        locationLine1: "Business Bay, Dubai,",
        locationLine2: "United Arab Emirates",
        year: "2024",
        service: "DESIGN + EXECUTION",
      },
      {
        img: "/images/projects/p4.jpg",
        title: "PROJECT FOUR",
        type: "RETAIL",
        locationLine1: "Downtown, Dubai,",
        locationLine2: "United Arab Emirates",
        year: "2025",
        service: "TURNKEY FIT-OUT",
      },
    ],
    []
  );

  const trustCards = useMemo(
    () => [
      {
        title: "STANDARD PRICING",
        desc:
          "Transparent quotations with detailed scope—no surprises at handover.",
        img: "/images/trust/t1.jpg",
      },
      {
        title: "NOC'S & AUTHORITY APPROVALS",
        desc:
          "In-house coordination support for approvals and required paperwork.",
        img: "/images/trust/t2.jpg",
      },
      {
        title: "FREE DESIGNS",
        desc:
          "Use in-house designers for basic 2D & 3D designs (premium designs available).",
        img: "/images/trust/t3.jpg",
      },
      {
        title: "MATERIAL SELECTION",
        desc:
          "Visit experience center to explore tiles, sanitaryware, flooring & more to finalize designs.",
        img: "/images/trust/t4.jpg",
      },
      {
        title: "BUILD WITH THE BEST",
        desc:
          "Licensed, skilled team with strong engineering supervision and regular updates.",
        img: "/images/trust/t5.jpg",
      },
      {
        title: "WARRANTY",
        desc:
          "Up to 10 years warranty on kitchens/wardrobes/cabinets and workmanship warranty on all works.",
        img: "/images/trust/t6.jpg",
      },
    ],
    []
  );

  const partners = useMemo(
    () => [
      "/images/partners/p1.png",
      "/images/partners/p2.png",
      "/images/partners/p3.png",
    ],
    []
  );

  const [activeReview, setActiveReview] = useState(0);

  return (
    <main className="w-full">
      {/* =========================
          OUR PROMISE (purple band)
      ========================== */}
      <Section className="bg-[#f6f1eb]">
        <Container className="py-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-black/80">
            Renovation Dubai & Our Promise
          </h2><br></br>
          <p>At Casa Kraft Interiors, we specialize in offering expert renovation solutions in Dubai with precision and a planned approach. When you hire us for your renovation needs in Dubai, here is what you can expect from us:</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {promiseItems.map((it, idx) => (
              <div key={idx} className="text-black/80">
                <div className="mb-3">{it.icon}</div>
                <h3 className="font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/70">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================
          STATS ROW
      ========================== */}
      <Section className="bg-white">
        <Container className="py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-semibold text-[#6b3f7a]">{s.value}</p>
                <p className="mt-1 text-sm text-black/60">{s.label}</p>
                <div className="mx-auto mt-4 h-[2px] w-16 bg-black/20" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================
          OUR RENOVATIONS (image tile grid)
      ========================== */}
      <Section className="bg-[#f6f1eb]">
        <Container className="py-14">
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-black/70">
            Our Renovations
          </h2>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {renovationTiles.map((t, idx) => (
              <Link
                key={idx}
                href={t.href}
                className="group relative overflow-hidden bg-white"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={t.img}
                    alt={t.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-black/85 px-3 py-2 flex items-center justify-between">
                  <span className="text-xs md:text-[13px] text-white tracking-wide uppercase">
                    {t.title}
                  </span>
                  <FiArrowRight className="text-white/90" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================
          BOOK ONLINE (text left, image right)
      ========================== */}
      <Section className="bg-white">
        <Container className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-[#6b3f7a]">
                Dubai’s Trusted Renovators
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-black/80 leading-snug">
                Our Renovation Process
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-black/70">
                <p>
                  At Casa Kraft Interiors, our renovation services in Dubai follow a structured process to ensure high-quality results for every home renovation, villa renovation, apartment renovation, and office renovation project.
                </p>

                <h3 className="text-lg font-semibold">
                 1. Consultation & Design
                </h3>
                <p>
                  Our professionals execute requirements in an average timeline of 8–10 weeks
                  without charging extra fees for developer NOC, basic design and drawings.
                </p>

                <h3 className="text-lg font-semibold">
                 2. Material Selection & Planning
                </h3>
                <p> 
                We help you choose the finest materials, finishes, and fixtures for your kitchen renovation company projects, bathroom renovation, or full interior renovation in Dubai. Every detail is planned to ensure durability, style, and functionality.
                </p>

                <h3 className="text-lg font-semibold">
                 3. Project Execution & Supervision
                </h3>
                <p>
                  Our skilled team executes all renovation work in Dubai with precision. Professional supervision ensures timely completion and exceptional craftsmanship for villa renovation contractors in Dubai, apartment renovation companies, office renovation contractors, or any home renovation project.
                </p>

                <h3 className="text-lg font-semibold">
                 4. Handover & Warranty
                </h3>
                <p>
                   We hand over your fully renovated space, backed by our warranty. Casa Kraft, as a leading home renovation company in Dubai, guarantees lasting quality, attention to detail, and complete customer satisfaction.
                </p>

              </div>

              <div className="mt-8">
                <PrimaryBtn href="/contact-us">Contact Us</PrimaryBtn>
              </div>
            </div>

            <div className="relative w-full overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/renovation-process.png"
                  alt="Book Online"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================
          FULL HOME RENOVATION (image left, text right)
      ========================== */}
      <Section className="bg-white">
        <Container className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/choose-us.jpeg"
                  alt="Full Home Renovation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#6b3f7a]">
                Renovation &amp; Design
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-black/80 leading-snug">
                Why Choose Casa Kraft for Renovation?
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-black/70">
                <p>
                  Choose Casa Kraft Interiors for your renovation services in Dubai and experience a seamless blend of expertise, luxury, and smart solutions. As a top interior fit-out & renovation company in Dubai and best home contractor.
                 
                </p>
                <p>
                   We specialize in villa renovation, apartment renovation, office renovation, kitchen renovation, bathroom renovations, and full interior renovation projects. 
                </p>
                <p>
                  From meticulous planning and premium material selection to professional execution and reliable warranty, we ensure every renovation work in Dubai reflects elegance, functionality, and lasting value.
                </p>
                <p>
                    We also offer turnkey villa renovations in Dubai, luxury villa renovation services, and apartment renovation services, making us one of the leading renovation companies in Dubai.
                </p>
              </div>

              <div className="mt-8">
                <PrimaryBtn href="/contact-us">Contact Us</PrimaryBtn>
                {/* you can also use DarkBtn / GhostBtn elsewhere */}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================
          OUR PROJECTS (mosaic with per-card overlay text)
      ========================== */}
      <Section className="bg-[#f4f4f4]">
        <Container className="py-14">
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-black/70">
            Our Projects
          </h2>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {projectMosaic.map((p, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-sm bg-white"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={p.img}
                    alt={p.title || `Project ${idx + 1}`}
                    fill
                    className="object-cover"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition" />

                  {/* Center text overlay */}
                  <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                    <div className="text-white">
                      <h3 className="tracking-[0.35em] text-lg md:text-xl font-semibold">
                        {p.title}
                      </h3>

                      <p className="mt-4 tracking-[0.35em] text-xs md:text-sm opacity-90">
                        {p.type}
                      </p>

                      <p className="mt-4 text-[11px] md:text-xs leading-relaxed opacity-85">
                        {p.locationLine1}
                        <br />
                        {p.locationLine2}
                      </p>

                      <p className="mt-4 tracking-[0.35em] text-xs md:text-sm opacity-90">
                        {p.year}
                      </p>

                      <p className="mt-5 tracking-[0.35em] text-[11px] md:text-xs opacity-90">
                        {p.service}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================
          COMPARISON TABLE (Yalla vs Typical)
      ========================== */}
      <Section className="bg-white">
        <Container className="py-16">
          <div className="overflow-x-auto border border-black/10 rounded-sm">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-3 bg-[#f2f2f2]">
                <div className="p-4 font-semibold text-black/60"> </div>
                <div className="p-4 font-semibold text-black/70">
                  Renovation Experience
                </div>
                <div className="p-4 font-semibold text-black/70">
                  Typical Experience
                </div>
              </div>

              {[
                {
                  key: "PRICE",
                  left: ["No hidden costs", "Competitive pricing"],
                  right: ["20–40% hike between first quote & final cost", "Higher prices for branded product"],
                },
                {
                  key: "CONVENIENCE",
                  left: ["One stop shop for all renovation needs"],
                  right: ["Approx 15–20 market trips to find everything"],
                },
                {
                  key: "DESIGN",
                  left: ["Free design consultation", "Personalised designs with 3D visuals"],
                  right: ["No design or cookie-cutter designs", "3D designs at extra cost"],
                },
                {
                  key: "TIMELINES",
                  left: ["45 days installation for kitchens/wardrobes/cabinets", "Regular updates with project tracking"],
                  right: ["Unreliable timelines", "No communication / update delays"],
                },
                {
                  key: "QUALITY",
                  left: ["Material procured directly from manufacturers", "Quality checks"],
                  right: ["Inferior material used to cut costs", "No quality check", "Outsourced to small contractors"],
                },
                {
                  key: "WARRANTY",
                  left: ["Up to 10 years warranty on select works", "Workmanship warranty for large projects"],
                  right: ["No warranty offered for products or services"],
                },
              ].map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-3 border-t border-black/10"
                >
                  <div className="p-4 font-semibold text-black/60 bg-[#fafafa]">
                    {row.key}
                  </div>

                  <div className="p-4">
                    <ul className="space-y-2 text-sm text-black/70">
                      {row.left.map((t, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FiCheck className="mt-[3px] text-[#6b3f7a]" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-[#fcfcfc]">
                    <ul className="space-y-2 text-sm text-black/70">
                      {row.right.map((t, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-[7px] h-2 w-2 rounded-full bg-black/30" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
