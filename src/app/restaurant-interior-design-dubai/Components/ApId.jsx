'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { value: "8+", label: "Trusted Years" },
  { value: "100+", label: "Team Members" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Commercial Fit-Outs" },
];

const services = [
  {
    title: "→ Fine Dining Restaurant Interior Design",
    desc: "A fine-dining interior has to feel considered in every detail. We design refined, intimate spaces where lighting, materials, and seating work together to elevate the guest experience and justify a premium menu. From statement entrances and feature walls to well-spaced tables, soft acoustics, and warm layered lighting, we create restaurants that feel exclusive without feeling stiff  the kind of room guests dress up for and remember."
  },
  {
    title: "→ Casual & Bistro Restaurant Design",
    desc: "Casual doesn't mean careless. We design relaxed, welcoming restaurants and bistros that balance comfort with efficient turnover, helping you seat more guests without making the room feel crowded. Durable, easy-to-clean finishes, flexible seating, and a friendly on-brand atmosphere keep both your guests and your service running smoothly through every shift."
  },
  {
    title: "→ Café & Coffee Shop Interior Design",
    desc: "Cafés live and die by atmosphere and flow. We design coffee shops that pull people in from the street, invite them to stay (or grab and go), and look great on camera. From the counter and display layout to cozy seating zones, power points, and photogenic corners, we shape spaces that build loyal regulars and a strong social presence."
  },
  {
    title: "→ Bar & Lounge Interior Design",
    desc: "A great bar is the centerpiece of the room. We design bars and lounges with atmosphere, mood lighting, and a layout that keeps both guests and bartenders moving. From the back-bar display and seating mix to acoustics that hold energy without drowning conversation, we create spaces built for long, profitable evenings."
  },
  {
    title: "→ Restaurant Fit-Out Services",
    desc: "Casa Kraft delivers complete, turnkey restaurant fit-outs  from bare shell to opening night. As one of Dubai's experienced fit-out specialists, we handle joinery, MEP, flooring, ceilings, lighting, and finishes while managing Dubai Municipality, Civil Defence, and other approvals, so your project stays on schedule and on budget."
  },
  {
    title: "→ Commercial Kitchen Design & Fit-Out",
    desc: "The kitchen is the engine of your restaurant. We plan efficient, compliant commercial kitchens with the right workflow, ventilation, and equipment layout to keep your team fast and your food consistent. We design front-of-house and back-of-house to work together, meeting Dubai's food-safety and hygiene requirements without wasting valuable dining space."
  },
  {
    title: "→ Restaurant Renovation & Remodeling",
    desc: "Is your restaurant feeling tired or off-brand? We refresh and remodel existing venues  updating the look, improving guest flow, and modernizing the kitchen or bar  with minimal disruption to trading. We assess what's working, fix what isn't, and give your space a new identity that brings guests back."
  },
  {
    title: "→ Themed & Concept Restaurant Design",
    desc: "Your concept is your edge. We translate a brand story  a cuisine, a culture, or an experience  into a cohesive interior that guests instantly understand and want to share. From materials and color to lighting, signage, and the signature details, we build immersive spaces that stand out in a crowded Dubai market."
  },
];

const ApId = () => {
  return (
    <section className="bg-black text-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans">
      <div className="mx-auto flex flex-col gap-10">

        {/* TRUST BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center border border-white/10 bg-[#111] py-4 px-3 rounded-md hover:border-[#4eb5a9]/40 transition"
            >
              <p className="text-3xl font-semibold text-[#4eb5a9]">
                {item.value}
              </p>

              <p className="text-xs text-white/60 mt-1 uppercase tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          Restaurant Interior Design in Dubai <br /> Turn Every Visit Into an Experience
        </h2>

        {/* INTRO */}
        <p className="text-sm sm:text-base leading-7 text-white/80">
          A restaurant is judged the moment someone walks in  long before the first dish arrives. Lighting, seating, the flow from door to table, and the sound of the room all shape how long guests stay, how much they order, and whether they come back. At Casa Kraft Interior Design &amp; Renovation, we design restaurant interiors that do more than look good: they set the right mood, make service effortless, and turn your concept into an atmosphere guests want to share. From intimate fine-dining rooms to high-energy casual venues, Casa Kraft is one of Dubai&rsquo;s trusted restaurant interior design and fit-out specialists  known for spaces that work as hard for your team as they do for your guests. Whether you&rsquo;re opening your first restaurant or refreshing an established venue, our team brings the design expertise, commercial-kitchen know-how, and local approvals experience to deliver it right. Explore our{" "}
          <Link href="/gallery" className="text-[#4eb5a9] font-semibold">
            portfolio of completed restaurant interiors
          </Link>{" "}
          to see how we bring concepts to life.
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          Our Restaurant Interior Design Services in Dubai
        </h2>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/10 p-5 rounded-md hover:border-[#4eb5a9]/40 transition"
            >
              <h3 className="text-[#4eb5a9] font-semibold mb-2 text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ApId;