import Navbar from "../Componenets/Navbar";
import WhatsAppButton from "../Componenets/WhatsAppButton";
import CallButton from "../Componenets/CallButton";
import VHeroSection from "./Components/VHeroSection";
import BodySection from "./Components/BodySection";
import Footer from "../Componenets/Footer";


export default function ProjectsPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#121212] mt-20 sm:mt-30">
      {/* Sticky Top Navbar */}
      <Navbar className="absolute top-0 z-10 w-screen" />
      <WhatsAppButton />
      <CallButton />
      <VHeroSection />
      <BodySection />


     

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
