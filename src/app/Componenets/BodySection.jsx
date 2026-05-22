"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
  <div className={`mx-auto max-w-7xl px-4 md:px-8 ${className}`}>
    {children}
  </div>
);

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// 🔥 ONLY ADDITION (COUNT UP COMPONENT)
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

export default function BodySection() {
  const promiseItems = useMemo(
    () => [
      {
        icon: <FiUser className="text-2xl" />,
        title: "Experienced Planners",
        desc:
          "Our team of professional designers ensures that your villa, apartments and office renovation in Dubai will be taken care of.",
      },
      {
        icon: <FiCalendar className="text-2xl" />,
        title: "Planned Installation",
        desc:
          "Every stage is planned in advance to allow hassle-free execution of interior and renovation work in Dubai.",
      },
      {
        icon: <FiShield className="text-2xl" />,
        title: "Warranty",
        desc:
          "Our home renovation services in Dubai are confidently supported by warranty, ensuring you achieve the desired quality.",
      },
      {
        icon: <FiDollarSign className="text-2xl" />,
        title: "Best Price Guarantee",
        desc:
          "Get best quality villa renovation, apartment renovation, and turnkey renovation services at highly competitive rates.",
      },
      {
        icon: <FiGift className="text-2xl" />,
        title: "Free Design Services",
        desc:
          "Take advantage of our free design consultation for renovations in Dubai for understanding of what you want before embarking on building.",
      },
    ],
    []
  );

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
    <main className="w-full ">

      {/* =========================
          OUR PROMISE (ANIMATED ON SCROLL)
      ========================== */}
      <Section className="relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/bhd-4.png"
            alt="Renovation Dubai Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/60" />
        </div>

        <Container className="relative py-14">

          <h2 className="text-3xl md:text-4xl font-semibold text-black/80">
            Renovation Dubai & Our Promise
          </h2>

          <p className="mt-3 text-black/70 max-w-3xl">
            At Casa Kraft Interiors and Renovations, we deliver expert renovation
            services in Dubai with precision, planning, and quality execution.
          </p>

          {/* ANIMATED GRID (UNCHANGED) */}
          <motion.div
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {promiseItems.map((it, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative group bg-white/70 backdrop-blur-md p-5 rounded-xl border border-black/10 shadow-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6b3f7a]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="mb-3 text-[#6b3f7a]">{it.icon}</div>

                <h3 className="font-semibold text-black/80">{it.title}</h3>

                <p className="mt-2 text-sm text-black/70 leading-relaxed">
                  {it.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </Container>
      </Section>

      {/* =========================
          STATS SECTION (ONLY CHANGE HERE)
      ========================== */}
      <Section className="bg-white">
        <Container className="py-10">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-semibold text-[#6b3f7a]">
                  <CountUp value={s.value} />
                </p>

                <p className="text-sm text-black/60 mt-1">
                  {s.label}
                </p>
              </div>
            ))}

          </div>

        </Container>
      </Section>

    </main>
  );
}