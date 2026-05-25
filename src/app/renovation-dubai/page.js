import Navbar from "../Componenets/Navbar";
import WhatsAppButton from "../Componenets/WhatsAppButton";
import CallButton from "../Componenets/CallButton";
import VHeroSection from "./Components/VHeroSection";
import BodySection from "./Components/BodySection";
import Footer from "../Componenets/Footer";

export default function ProjectsPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#121212]">

      {/* NAVBAR */}
      <Navbar />

      {/* FLOATING BUTTONS */}
      <WhatsAppButton />
      <CallButton />

      {/* HERO */}
      <VHeroSection />

      {/* BODY */}
      <BodySection />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}