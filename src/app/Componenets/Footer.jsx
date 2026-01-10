"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#193c38] text-white text-sm font-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">

        {/* TOP GRID */}
        <div
          className="
            grid grid-cols-2
            sm:grid-cols-3
            lg:[grid-template-columns:repeat(4,max-content)]
            lg:justify-between
            gap-y-10
            gap-x-20
            mb-12
          "
        >
          {/* LINKS */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">LINKS</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                { label: "About Us", href: "/" },
                { label: "Our Process", href: "/" },
                { label: "Projects", href: "/" },
                { label: "Media", href: "/" },
                { label: "Why Casa Kraft", href: "/" },
                { label: "Contact Us", href: "/" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-white transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">SERVICES</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                { label: "Interior Design", href: "/" },
                { label: "Fit Out", href: "/" },
                { label: "Renovation Dubai", href: "/" },
                { label: "Custom Joinery", href: "/" },
                { label: "Modular Kitchen & Wardrobes", href: "/" },
                { label: "Landscaping & Swimming Pools", href: "/" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-white transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* EXPERTISE */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">EXPERTISE</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                { label: "Residential Projects", href: "/" },
                { label: "Commercial Projects", href: "/" },
                { label: "Villas & Apartments", href: "/" },
                { label: "Offices & Retail", href: "/" },
                { label: "Turnkey Solutions", href: "/" },
                { label: "Outdoor Design", href: "/" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-white transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">CONTACT US</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Dubai, UAE</li>

              <li>
                <a href="tel:+971586023677" className="hover:text-white transition">
                  +971 58 602 3677
                </a>
              </li>
               <li>
                <a href="tel:+971586023677" className="hover:text-white transition">
                  +971 4 420 8855
                </a>
              </li>

              <li>
                <a href="mailto:info@casakraft.ae" className="hover:text-white transition">
                  info@casakraft.ae
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/971586023677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-600 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <Image src="/images/logo.svg" alt="CasaKraft Logo" width={55} height={60} />

          <p className="text-gray-400 text-sm max-w-md">
            The Curve Building, Showroom G11, Sheikh Zayed Service Road, Dubai, UAE
          </p>

          <p className="text-gray-400 text-sm">
            © 2002–{new Date().getFullYear()} Casa Kraft Interiors
          </p>

          <div className="flex gap-4 text-lg text-gray-400">
            <a className="hover:text-white transition"><FaInstagram /></a>
            <a className="hover:text-white transition"><FaLinkedin /></a>
            <a className="hover:text-white transition"><FaPinterest /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
