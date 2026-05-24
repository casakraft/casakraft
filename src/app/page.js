import Navbar from "./Componenets/Navbar";
import WhatsAppButton from "./Componenets/WhatsAppButton";
import CallButton from "./Componenets/CallButton";
import HeroSection from "./Componenets/HeroSection";
import PartnersSwiper from "./Componenets/PartnersSwiper";
import AboutSection from "./Componenets/AboutSection";
import OurProjectsSwiper from "./Componenets/OurProjectsSwiper";
import BodySection from "./Componenets/BodySection";
import OurServices from "./Componenets/WhatWeDo";

// ✅ NEW IMPORT ADDED
import Services from "./Componenets/Services";

import Areas from "./Componenets/Areas";
import GetInTouch from "./Componenets/GetinTouch";
import Blogs from "./Componenets/Blogs";
import OurAuthorities from "./Componenets/OurAuthorities";
import TestimonialsWidget from "./Componenets/Testimonials";
import LocationMap from "./Componenets/LocationMap";
import Footer from "./Componenets/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#f7f7f7] text-white">

      {/* NAV + FLOATING BUTTONS */}
      <Navbar className="absolute top-0 z-10 w-screen" />
      <WhatsAppButton />
      <CallButton />

      {/* HERO */}
      <HeroSection />

      {/* TRUST / BRANDS */}
      <PartnersSwiper />

      {/* ABOUT */}
      <AboutSection />

      {/* PROJECTS */}
      <OurProjectsSwiper />

      {/* BODY SECTION */}
      <BodySection />

      {/* SERVICES (EXISTING) */}
      <OurServices />

      {/* ✅ NEW SERVICES SECTION */}
      <Services />

      {/* AREAS */}
      <Areas />

      {/* CTA */}
      <GetInTouch />

      {/* BLOGS */}
      <Blogs />

      {/* AUTHORITIES */}
      <OurAuthorities />

      {/* TESTIMONIALS */}
      <TestimonialsWidget />

      {/* FOOTER WRAP */}
      <div className="bg-[#f5ede5]">
        <LocationMap />
        <Footer />
      </div>

    </main>
  );
}