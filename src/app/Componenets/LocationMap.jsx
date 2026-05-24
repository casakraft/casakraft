"use client";

import React, { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide complete interior design, renovation, fit-out, painting, ceiling, flooring, and custom furniture solutions.",
  },
  {
    question: "Do you handle approvals in Dubai?",
    answer:
      "Yes, we assist with municipality approvals and permits across Dubai.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most residential projects are completed within a few weeks to a few months.",
  },
  {
    question: "Do you offer custom design solutions?",
    answer:
      "Yes, every project is tailored to client needs and budget.",
  },
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-black/5 pb-3">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-[14px] md:text-[16px] font-normal text-[#111]">
          {item.question}
        </h3>

        <div className="text-[#0d2f2c]">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-2"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-white text-[12px] md:text-[13px] leading-5 pr-4 p-3 rounded-md bg-[#123c39]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactFaqSection() {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f6f6f6] py-6 md:py-10">

      {/* TOP GRID */}
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* FAQ */}
          <div className="fade-up bg-white p-4 md:p-6 shadow-sm">
            <h2 className="text-[20px] md:text-[26px] font-medium text-[#0d2f2c] mb-5">
              FAQs
            </h2>

            <div className="space-y-3">
              {faqs.map((item, index) => (
                <FAQItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="fade-up bg-[#123c39] p-4 md:p-6 text-white">
            <h2 className="text-[20px] md:text-[28px] font-semibold uppercase">
              Contact Us
            </h2>

            <p className="text-white/70 mt-2 text-[12px] md:text-[14px]">
              Fill the form and we will contact you shortly.
            </p>

            <form className="mt-4 space-y-3">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-[42px] rounded-lg px-3 text-sm bg-white text-black outline-none"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="h-[42px] rounded-lg px-3 text-sm bg-white text-black outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="h-[42px] rounded-lg px-3 text-sm bg-white text-black outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="h-[42px] rounded-lg px-3 text-sm bg-white text-black outline-none"
                />
              </div>

              <select className="w-full h-[42px] rounded-lg px-3 text-sm bg-white text-black outline-none">
                <option>Interior Design</option>
                <option>Renovation</option>
                <option>Fit-Out</option>
                <option>Other</option>
              </select>

              <button
                type="submit"
                className="w-full h-[44px] border border-white rounded-lg text-sm hover:bg-white hover:text-[#123c39] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FULL WIDTH MAP */}
<div className="w-full mt-10 h-[280px] md:h-[350px] lg:h-[420px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.193365041701!2d55.232408974836254!3d25.162947933088116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f694369e42fff%3A0x7d088a84ce75732a!2sInterior%20Design%20Company%20Dubai%20-%20Casa%20Kraft%20Interiors!5e0!3m2!1sen!2s!4v1779581674188!5m2!1sen!2s"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </section>
  );
}