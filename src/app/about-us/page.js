import Navbar from "../Componenets/Navbar";
import AbusBsection from "./Components/AbusBsection";
import Footer from "../Componenets/Footer";


export default function ProjectsPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#121212]">
      {/* Sticky Top Navbar */}
      <Navbar className="absolute top-0 z-10 w-screen" />

      {/* Hero Image Section */}
      <AbusBsection />

      {/* Floating Action Buttons 
      <CallButton />
      <WhatsAppButton />

    <div className="bg-[#f5ede5]">
      <ContactForm />
      <LocationMap />
    </div>*/}

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
