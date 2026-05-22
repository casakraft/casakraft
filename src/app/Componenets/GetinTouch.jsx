"use client";

import React from "react";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className="bg-white border-t border-b border-gray-200">

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between">

        {/* LOCATION */}
        <div className="flex items-center gap-4 py-6 px-6 lg:px-10 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-1/3">
          <FaMapMarkerAlt className="text-[#b6935b] text-2xl" />
          <div>
            <h4 className="font-semibold text-black">Dubai, UAE</h4>
            <p className="text-sm text-gray-500">
              Building The Curve - Showroom G11, Al Quoz
            </p>
          </div>
        </div>

        {/* PHONE */}
        <div className="flex items-center gap-4 py-6 px-6 lg:px-10 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-1/3">
          <FaPhoneAlt className="text-[#b6935b] text-2xl" />
          <div>
            <h4 className="font-semibold text-black">+971 58 602 3677</h4>
            <p className="text-sm text-gray-500">Mon - Friday: 9:00 to 18:00</p>
          </div>
        </div>

        {/* EMAIL + SOCIAL */}
        <div className="flex items-center justify-between gap-4 py-6 px-6 lg:px-10 w-full lg:w-1/3">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#b6935b] text-2xl" />
            <div>
              <h4 className="font-semibold text-black">
                info@casakraftinteriors.ae
              </h4>
              <p className="text-sm text-gray-500">Get a Free Quote</p>
            </div>
          </div>

          {/* SOCIAL ICONS (simple placeholders) */}
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#b6935b] hover:text-white transition"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#b6935b] hover:text-white transition"
            >
              ig
            </a>
            <a
              href="https://linkedin.com"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#b6935b] hover:text-white transition"
            >
              in
            </a>
          </div>

        </div>

      </div>

      {/* CTA SECTION */}
      <div className="bg-[#e6e6e6] py-14 px-4 text-center">

        <h2 className="text-[26px] sm:text-[32px] font-bold mb-2">
          <span className="text-[#c8a56a]">GET IN TOUCH WITH CASA KRAFT</span>
        </h2>

        <p className="text-black text-base mb-10">
          Luxury Interior Design & Renovation Company in Dubai
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

          <Link
            href="/gallery"
            className="bg-[#67bb74] hover:bg-[#57a464] text-white font-semibold py-3 px-10 rounded-md transition"
          >
            See Our Projects
          </Link>

          <a
            href="https://wa.me/971586023677"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#67bb74] hover:bg-[#57a464] text-white font-semibold py-3 px-10 rounded-md transition"
          >
            WhatsApp Us
          </a>

          <a
            href="mailto:info@casakraftinteriors.ae"
            className="bg-[#b6935b] hover:bg-[#a2814f] text-white font-semibold py-3 px-10 rounded-md transition"
          >
            Request Quote
          </a>

        </div>

      </div>

    </section>
  );
};

export default GetInTouch;