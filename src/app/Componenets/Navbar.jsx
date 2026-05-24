"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { HiOutlineMenuAlt3, HiChevronRight } from "react-icons/hi";

const NavItem = ({ href, title, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-[15px] text-white/90 hover:text-white transition-colors"
  >
    {title}
  </Link>
);

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

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
    { icon: <FaInstagram />, href: "https://www.instagram.com/casakraftinteriors.ae/" },
    { icon: <FaFacebookF />, href: "https://www.facebook.com/" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/110286081/" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 50);

      if (y <= 0) setIsVisible(true);
      else {
        if (y > lastScrollY.current && !navbarOpen) {
          setIsVisible(false);
        } else if (y < lastScrollY.current) {
          setIsVisible(true);
        }
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
        transition-all duration-300
        ${isVisible || navbarOpen ? "translate-y-0" : "-translate-y-full"}
        ${
          scrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      {/* TOP STRIP */}
      <div className="hidden bg-black lg:block border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex items-center justify-between py-3">

            {/* LEFT */}
            <div className="flex items-center gap-5 text-sm text-white/80">

              <p className="hidden xl:block">
                Plan your Kitchen & Bathroom Renovation with us!
              </p>

              <p className="font-medium whitespace-nowrap">
                +971 58 602 3677
              </p>

              <p className="font-medium whitespace-nowrap">
                +971 4 420 8855
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4 text-white/80 text-lg">

              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {s.icon}
                </a>
              ))}

            </div>

          </div>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav>
        <div className="mx-auto max-w-7xl px-6">

          {/* DESKTOP */}
          <div className="hidden md:flex items-center justify-between py-5">

            {/* LOGO */}
            <Link href="/" className="flex items-center">

              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={150}
                height={50}
                className="h-14 w-auto brightness-0 invert"
                priority
              />

            </Link>

            {/* LINKS */}
            <div className="flex items-center gap-8">

              {navLinks.map((l, idx) => (
                <NavItem
                  key={idx}
                  href={l.path}
                  title={l.title}
                />
              ))}

            </div>

            {/* BUTTON */}
            <div className="flex items-stretch">

              <button
                type="button"
                className="h-11 w-11 grid place-items-center border border-white/20 text-white hover:bg-white hover:text-black transition"
              >
                <HiChevronRight className="text-xl" />
              </button>

              <Link
                href="/contact-us"
                className="h-11 px-6 grid place-items-center border border-white/20 text-white hover:bg-white hover:text-black transition"
              >
                Free Estimate
              </Link>

            </div>

          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center justify-between py-4">

            <Link href="/">

              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={120}
                height={40}
                className="h-12 w-auto brightness-0 invert"
                priority
              />

            </Link>

            <button
              onClick={() => setNavbarOpen((v) => !v)}
              className="text-white"
            >
              {!navbarOpen ? (
                <HiOutlineMenuAlt3 className="text-3xl" />
              ) : (
                <IoMdCloseCircleOutline className="text-3xl" />
              )}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {navbarOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">

            <div className="px-6 py-6">

              <div className="flex flex-col gap-5">

                {navLinks.map((l, idx) => (
                  <NavItem
                    key={idx}
                    href={l.path}
                    title={l.title}
                    onClick={() => setNavbarOpen(false)}
                  />
                ))}

              </div>

              <div className="flex items-center gap-5 mt-8 text-white/80 text-lg">

                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
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