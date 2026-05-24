"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
        desc:
          "Tell us about your renovation, interior design, or fit-out requirements in Dubai.",
      },

      {
        year: "02",
        date: "Step",
        icon: <FiCalendar className="text-lg" />,
        title: "Free Site Visit",
        desc:
          "Our experts visit your property for measurements, consultation, and project understanding.",
      },

      {
        year: "03",
        date: "Step",
        icon: <FiShield className="text-lg" />,
        title: "Free 3D Design",
        desc:
          "Receive detailed 3D concepts and space planning tailored to your style and budget.",
      },

      {
        year: "04",
        date: "Step",
        icon: <FiDollarSign className="text-lg" />,
        title: "Quotation",
        desc:
          "Get a transparent quotation with timelines, materials, and project scope breakdown.",
      },

      {
        year: "05",
        date: "Step",
        icon: <FiShield className="text-lg" />,
        title: "NOC & Approvals",
        desc:
          "We manage authority approvals and NOC documentation for smooth project execution.",
      },

      {
        year: "06",
        date: "Step",
        icon: <FiGift className="text-lg" />,
        title: "Execution",
        desc:
          "Our skilled team executes the renovation and interior project with premium craftsmanship and timely delivery.",
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
      <Section className="relative bg-[#0f111c] py-14 overflow-hidden">

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
            <p className="text-[#c89b6d] uppercase tracking-[4px] text-sm mb-3">
              How We Work
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Our Interior Design Process
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto mt-4 text-sm md:text-base">
              From concept to completion, our streamlined renovation process
              ensures quality execution, transparency, and a stress-free
              experience.
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
                  bg-[#171a27]
                  border
                  border-white/5
                  hover:border-[#c89b6d]/40
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#c89b6d]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10 flex gap-5">

                  {/* STEP NUMBER */}
                  <div className="min-w-[60px] text-center"> 
                    <h3 className="text-2xl font-bold text-[#c89b6d]">
                      {item.year}
                    </h3>

                    <div className="w-[1px] h-10 bg-white/20 mx-auto my-2" />

                    <p className="text-[10px] uppercase tracking-[3px] text-white font-medium">
                      {item.date}
                    </p>
                  </div>

                  {/* CONTENT */}
                  <div>
                    <div className="mb-3 text-[#c89b6d]">
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
      <Section className="bg-white">
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
                <div className="absolute inset-0 bg-[#6b3f7a]/5 rounded-2xl scale-0 group-hover:scale-100 transition duration-500" />

                <div className="relative z-10 py-6">
                  <p className="text-4xl font-semibold text-[#6b3f7a]">
                    <CountUp value={s.value} />
                  </p>

                  <p className="text-sm text-black/60 mt-2 uppercase tracking-wide">
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