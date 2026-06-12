"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

import gsap from "gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer fade up
      gsap.from(".footer-animate", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Links animation
      gsap.from(".footer-link", {
        opacity: 0,
        x: -20,
        duration: 0.8,
        stagger: 0.05,
        delay: 0.3,
        ease: "power2.out",
      });

      // Social icons floating
      gsap.to(".social-icon", {
        y: -4,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "sine.inOut",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#193c38] text-white text-sm font-light overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        
        {/* TOP GRID */}
        {/* TOP GRID */}
<div
  className="
    grid grid-cols-2
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-y-12
    gap-x-10
    mb-14
  "
>
  {/* ABOUT US (NOW LEFT MOST) */}
  <div className="footer-animate">
    <h3 className="font-semibold mb-5 text-lg tracking-wide">
      About Us
    </h3>

    <p className="text-gray-300 leading-6 max-w-md">
      Casa Kraft Interiors is a luxury interior design and renovation company in Dubai, delivering premium villa, apartment, office, and commercial transformations. We specialize in bespoke interior design, turnkey fit-out solutions, and high-end renovations across the UAE.
    </p>
  </div>

  {/* LINKS */}
  <div className="footer-animate">
    <h3 className="font-semibold mb-5 text-lg tracking-wide">
      LINKS
    </h3>

    <ul className="space-y-3 text-gray-300">
      {[
        { label: "About Us", href: "/about-us" },
        { label: "Gallery", href: "/gallery" },
        { label: "Contact Us", href: "/contact-us" },
        { label: "Our Blogs", href: "/blogs" },
      ].map((item, i) => (
        <li key={i} className="footer-link">
          <Link
            href={item.href}
            className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* SERVICES */}
  <div className="footer-animate">
    <h3 className="font-semibold mb-5 text-lg tracking-wide">
      SERVICES
    </h3>

    <ul className="space-y-3 text-gray-300">
      {[
        { label: "Renovation Dubai", href: "/renovation-dubai" },
        { label: "Windows & Doors", href: "/windows-and-doors" },
        { label: "Wardrobes & Cabnets", href: "/wardrobes-and-cabinets" },
        { label: "Landscaping & Swimming Pools", href: "/landscape-dubai" },
        { label: "Villa Renovation Dubai", href: "/villa-renovation" },
        { label: "Apartment Renovation Dubai", href: "/apartment-renovation" },
        { label: "Kitchen Renovation Dubai", href: "/kitchen-renovation" },

      ].map((item, i) => (
        <li key={i} className="footer-link">
          <Link
            href={item.href}
            className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* CONTACT */}
  <div className="footer-animate">
    <h3 className="font-semibold mb-5 text-lg tracking-wide">
      CONTACT US
    </h3>

    <ul className="space-y-3 text-gray-300">
      <li className="footer-link">Dubai, UAE</li>

      <li className="footer-link">
        <a href="tel:+971586023677" className="hover:text-white transition-all duration-300">
          +971 58 602 3677
        </a>
      </li>

      <li className="footer-link">
        <a href="tel:+97144208855" className="hover:text-white transition-all duration-300">
          +971 4 420 8855
        </a>
      </li>

      <li className="footer-link">
        <a href="mailto:info@casakraft.ae" className="hover:text-white transition-all duration-300">
          info@casakraft.ae
        </a>
      </li>

      <li className="footer-link">
        <a href="https://wa.me/971586023677" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </li>

      <li className="footer-link">
        <a href="https://www.instagram.com/casakraftinteriors.ae/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </li>

      <li className="footer-link">
        <a href="https://www.linkedin.com/company/110286081/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </li>
    </ul>
  </div>
</div>

        {/* BOTTOM BAR */}
        <div className="footer-animate border-t border-white/15 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          
          {/* LOGO */}
          <Link href="/" className="hover:opacity-80 transition">
            <Image
              src="/images/logo.svg"
              alt="CasaKraft Logo"
              width={58}
              height={62}
            />
          </Link>

          {/* ADDRESS */}
          <p className="text-gray-400 text-sm max-w-md leading-relaxed">
            The Curve Building, Showroom G11, Sheikh Zayed Service Road,
            Dubai, UAE
          </p>

          {/* COPYRIGHT */}
          <p className="text-gray-400 text-sm">
            © 2002–{new Date().getFullYear()} Casa Kraft Interiors
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-lg text-gray-400">
            <a
              href="https://www.instagram.com/casakraftinteriors.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:text-white transition duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/110286081/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:text-white transition duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.pinterest.com/casakraftinteriors/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:text-white transition duration-300 hover:scale-110"
            >
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;