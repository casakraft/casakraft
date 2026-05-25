import Navbar from "../Componenets/Navbar";
import WhatsAppButton from "../Componenets/WhatsAppButton";
import CallButton from "../Componenets/CallButton";
import LocationMap from "../Componenets/LocationMap";
import Footer from "../Componenets/Footer";

export default function ProjectsPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#121212] pt-20">

      {/* NAVBAR */}
      <Navbar />

      {/* FLOATING BUTTONS */}
      <WhatsAppButton />
      <CallButton />

      {/* HERO */}
      <section className="relative h-[350px] md:h-[450px] w-full overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/damac-11.png')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT (LEFT SIDE ON IMAGE) */}
        <div className="relative z-10 flex h-full items-center">

          <div className="ml-[8%] lg:ml-[10%] max-w-xl text-left">

            <h1 className="text-4xl md:text-6xl font-semibold text-white">
              Contact Us
            </h1>

            <p className="mt-4 text-white/80 text-sm md:text-base leading-6">
             We are ready to help you transform your space with luxury interior design
              and renovation solutions tailored to your needs.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex gap-4 flex-wrap">

              <a
                href="/projects"
                className="bg-[#1f4a45] hover:bg-[#275f58] transition px-6 py-3 text-sm text-white"
              >
                Our Projects
              </a>

              <a
                href="/gallery"
                className="border border-white hover:bg-white hover:text-black transition px-6 py-3 text-sm text-white"
              >
                View Gallery
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* MAP */}
      <LocationMap />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}