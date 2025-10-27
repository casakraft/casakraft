import Navbar from "../Componenets/Navbar";

import VHeroSection from "./VHeroSection"

import Footer from "../Componenets/Footer";

export default function ProjectsPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#121212]">
      {/* Sticky Top Navbar */}
      <Navbar className="absolute top-0 z-10 w-screen" />

      {/* Hero Image Section */}
      <VHeroSection />

     

     

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
