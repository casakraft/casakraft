"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


import {
  FiUser,
  FiCalendar,
  FiShield,
  FiDollarSign,
  FiGift,
} from "react-icons/fi";

// =========================
// HELPERS
// =========================
const Section = ({ className = "", children }) => (
  <section className={`w-full ${className}`}>{children}</section>
);

const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-7xl px-4 md:px-8 ${className}`}>
    {children}
  </div>
);

// =========================
// ANIMATION VARIANTS
// =========================
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// =========================
// COUNT UP
// =========================
const CountUp = ({ value }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  const number = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500;
    const step = number / (duration / 20);

    const timer = setInterval(() => {
      current += step;

      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [start, number]);

  return (
    <span ref={ref}>
      {count}
      {value.includes("+") ? "+" : ""}
    </span>
  );
};

// =========================
// MAIN COMPONENT
// =========================
export default function BodySection() {

  // =========================
  // 6 STEP PROCESS
  // =========================
  const promiseItems = useMemo(
    () => [
      {
  year: "01",
  date: "Step",
  icon: <FiUser className="text-lg" />,
  title: "Inquiry",
  desc: (
    <>
      Whether you're planning a{" "}
      <Link
        href="https://casakraftinteriors.ae/villa-interior-design-dubai"
        className="text-[#4eb5a9] hover:underline"
      >
        villa interior design
      </Link>{" "}
      or an <Link
        href="https://casakraftinteriors.ae/apartment-interior-design-dubai"
        className="text-[#4eb5a9] hover:underline"
      >
        apartment interior design
      </Link>{" "} in Dubai, just share your vision with us.
      Our team listens and understands the lifestyle, preferences, goals, and
      budget of our clients.
    </>
  ),
},

      {
        year: "02",
        date: "Step",
        icon: <FiCalendar className="text-lg" />,
        title: "Free Site Visit",
        desc:
          "Our interior designers in Dubai visit your property to provide a detailed consultation, take accurate measurements, and assess the best design solutions for your space.",
      },

      {
        year: "03",
        date: "Step",
        icon: <FiShield className="text-lg" />,
        title: "Free 3D Design",
        desc:
          "We bring life to your space before even a single wall is touched. Our team of Designers create 3D model designs of your space according to your taste. We Give you super realistic preview of your future home interior design in Dubai",
      },

      {
        year: "04",
        date: "Step",
        icon: <FiDollarSign className="text-lg" />,
        title: "Quotation",
        desc:
          "You will receive a fully transparent quotation which contains the details of materials, timelines and the scope of the project. No hidden costs, just honest pricing of your luxury interior design services and renovation services in Dubai.",
          
      },

      {
        year: "05",
        date: "Step",
        icon: <FiShield className="text-lg" />,
        title: "NOC & Approvals",
        desc:
          "We also manage all the important approvals and NOC documentation across Dubai, including Municipality, Emaar, Nakheel, and Trakhees. So, our clients don't need to be worried about any paper work.",
      },

      {
        year: "06",
        date: "Step",
        icon: <FiGift className="text-lg" />,
        title: "Execution",
        desc:
          "At the final step, our team works according to your design with precision and attention to details. We always deliver spaces on time and to the highest standards of residential interior design in Dubai.",
      },
    ],
    []
  );

  // =========================
  // STATS
  // =========================
  const stats = useMemo(
    () => [
      { value: "8+", label: "Trusted Years" },
      { value: "100+", label: "Employees" },
      { value: "200+", label: "Residential Projects" },
      { value: "50+", label: "Commercial Fit-Outs" },
    ],
    []
  );

  return (
    <main className="w-full overflow-hidden">

      {/* =========================
          PROCESS SECTION
      ========================== */}
      <Section className="relative bg-black py-14 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/bhd-4.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <Container className="relative z-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#4eb5a9] uppercase tracking-[4px] text-sm mb-3">
              How We Work
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Our Interior Design Process
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto mt-4 text-sm md:text-base">
              At Casa Kraft Interior design & Renovation, we believe that every project begins with a clear and transparent process. We have aligned our work process in such a way that it ends up bringing a perfect, refined and liveable space.

            </p>
          </motion.div>

          {/* PROCESS GRID */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {promiseItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="
                  group
                  relative
                  bg-[#111]
                  border
                  border-white/10
                  hover:border-[#4eb5a9]/40
                  p-5
                  min-h-[170px]
                  flex
                  items-center
                  overflow-hidden
                  transition-all
                  duration-500
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4eb5a9]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10 flex gap-5">

                  {/* STEP NUMBER */}
                  <div className="min-w-[60px] text-center">
                    <h3 className="text-2xl font-bold text-[#4eb5a9]">
                      {item.year}
                    </h3>

                    <div className="w-[1px] h-10 bg-white/20 mx-auto my-2" />

                    <p className="text-[10px] uppercase tracking-[3px] text-white font-medium">
                      {item.date}
                    </p>
                  </div>

                  {/* CONTENT */}
                  <div>
                    <div className="mb-3 text-[#4eb5a9]">
                      {item.icon}
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </Container>
      </Section>

      {/* =========================
          STATS SECTION
      ========================== */}
      <Section className="bg-black py-10">
        <Container>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white/5 rounded-2xl scale-0 group-hover:scale-100 transition duration-500" />

                <div className="relative z-10 py-6 border border-white/10 bg-[#111]">

                  <p className="text-4xl font-semibold text-[#4eb5a9]">
                    <CountUp value={s.value} />
                  </p>

                  <p className="text-sm text-white/60 mt-2 uppercase tracking-wide">
                    {s.label}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </Container>
      </Section>

    </main>
  );
}