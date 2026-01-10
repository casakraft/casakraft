"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedin  } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { HiOutlineMenuAlt3, HiChevronRight } from "react-icons/hi";

const NavItem = ({ href, title, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-[15px] text-black/80 hover:text-black transition-colors"
  >
    {title}
  </Link>
);

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Services", path: "/#services" },
    { title: "Gallery", path: "/gallery" },
    { title: "Our Blogs", path: "/blogs" },
    { title: "Client Reviews", path: "/#testimonials" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, href: "https://www.instagram.com/" },
    { icon: <FaFacebookF />, href: "https://www.facebook.com/" },
    { icon: <FaLinkedin />, href: "https://www.facebook.com/" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y <= 0) setIsVisible(true);
      else {
        if (y > lastScrollY.current && !navbarOpen) setIsVisible(false);
        else if (y < lastScrollY.current) setIsVisible(true);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transform transition-transform duration-300
        ${isVisible || navbarOpen ? "translate-y-0" : "-translate-y-full"}
      `}
    >
    {/* =======================
    TOP BLACK STRIP (FIXED LIKE SS)
======================= */}
<div className="bg-black text-white">
  <div className="mx-auto max-w-7xl px-4 md:px-8">
    <div className="flex items-center justify-between py-2 text-[13px]">
      {/* LEFT: text + number together */}
      <div className="flex items-center gap-4">
        <p className="hidden sm:block text-white/90">
          Plan your Kitchen &amp; Bathroom Renovation with us! Get Free Estimate
        </p>

        <p className="font-semibold tracking-wide whitespace-nowrap">
          +971 58 602 3677
        </p>
         <p className="font-semibold tracking-wide whitespace-nowrap">
          +971 4 420 8855
        </p>
      </div>

      {/* RIGHT: social icons */}
      <div className="flex items-center gap-4 text-white/90">
        {socialLinks.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="social"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  </div>
</div>

      {/* =======================
          MAIN WHITE NAVBAR
      ======================= */}
      <nav className="bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Desktop */}
          <div className="hidden md:flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              {/* Replace with your logo image if needed */}
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={140}
                height={44}
                className="h-16 w-auto"
                priority
              />
            </Link>

            {/* Links */}
            <div className="flex items-center gap-8">
              {navLinks.map((l, idx) => (
                <NavItem key={idx} href={l.path} title={l.title} />
              ))}
            </div>

            {/* CTA (arrow + purple button like SS) */}
            <div className="flex items-stretch">
              <button
                type="button"
                className="h-12 w-12 grid place-items-center border border-black/10 bg-white hover:bg-black/5 transition-colors"
                aria-label="Next"
              >
                <HiChevronRight className="text-2xl text-black/70" />
              </button>

              <Link
                href="/contact-us"
                className="h-12 px-7 grid place-items-center bg-[#1f4a45] text-white font-medium hover:brightness-110 transition"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center justify-between py-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={120}
                height={40}
                className="h-16 w-auto"
                priority
              />
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/contact-us"
                className="h-10 px-4 grid place-items-center bg-[#1e4a45] text-white text-sm font-medium"
              >
                Estimate
              </Link>

              <button
                onClick={() => setNavbarOpen((v) => !v)}
                className="h-10 w-10 grid place-items-center border border-black/10"
                aria-label="Toggle menu"
              >
                {!navbarOpen ? (
                  <HiOutlineMenuAlt3 className="text-2xl text-black/70" />
                ) : (
                  <IoMdCloseCircleOutline className="text-3xl text-black/70" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {navbarOpen && (
          <div className="md:hidden border-t border-black/10 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map((l, idx) => (
                  <li key={idx}>
                    <NavItem
                      href={l.path}
                      title={l.title}
                      onClick={() => setNavbarOpen(false)}
                    />
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-5 text-black/70">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors"
                    aria-label="social"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
