"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";

import { IoMdCloseCircleOutline } from "react-icons/io";

import {
  HiOutlineMenuAlt3,
  HiChevronDown,
  HiChevronRight,
} from "react-icons/hi";

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

  // NAVBAR BACKGROUND ON SCROLL
  const [scrolled, setScrolled] = useState(false);

  // SERVICES DROPDOWN
  const [servicesOpen, setServicesOpen] =
    useState(false);

  // MOBILE SERVICES
  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Gallery", path: "/gallery" },
    { title: "Our Blogs", path: "/blogs" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/casakraftinteriors.ae/",
    },
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/company/110286081/",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      {/* TOP STRIP */}
      <div className="hidden lg:block border-b border-white/10 bg-black backdrop-blur-sm">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex items-center justify-between py-3">

            {/* LEFT */}
            <div className="flex items-center gap-5 text-sm text-white/80">

              <p className="hidden xl:block">
                Plan your Kitchen & Bathroom Renovation
                with us!
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

            {/* NAV LINKS */}
            <div className="flex items-center gap-8">

              {/* HOME */}
              <NavItem
                href="/"
                title="Home"
              />

              {/* ABOUT */}
              <NavItem
                href="/about-us"
                title="About Us"
              />

              {/* SERVICES */}
              <div
                className="relative"
                onMouseEnter={() =>
                  setServicesOpen(true)
                }
                onMouseLeave={() =>
                  setServicesOpen(false)
                }
              >

                <button className="flex items-center gap-1 text-[15px] text-white/90 hover:text-white transition-colors">

                  Services

                  <HiChevronDown className="text-sm mt-[1px]" />

                </button>

                {/* DROPDOWN */}
                <div
                  className={`
                    absolute top-full left-0 mt-3
                    min-w-[220px]
                    bg-black/95 backdrop-blur-md
                    border border-white/10
                    overflow-hidden
                    transition-all duration-300
                    ${
                      servicesOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }
                  `}
                >

                  {/* RENOVATION */}
                  <Link
                    href="/renovation-dubai"
                    className="block px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                  >
                    Renovation
                  </Link>

                  {/* INTERIOR DESIGN */}
                  <Link
                    href="https://casakraftinteriors.ae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 border-t border-white/10 transition"
                  >
                    Interior Design
                  </Link>

                </div>

              </div>

              {/* OTHER LINKS */}
              {navLinks.slice(2).map((l, idx) => (
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

            {/* LOGO */}
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

            {/* MENU BUTTON */}
            <button
              onClick={() =>
                setNavbarOpen((v) => !v)
              }
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

                {/* HOME */}
                <NavItem
                  href="/"
                  title="Home"
                  onClick={() =>
                    setNavbarOpen(false)
                  }
                />

                {/* ABOUT */}
                <NavItem
                  href="/about-us"
                  title="About Us"
                  onClick={() =>
                    setNavbarOpen(false)
                  }
                />

                {/* MOBILE SERVICES */}
                <div>

                  <button
                    onClick={() =>
                      setMobileServicesOpen(
                        !mobileServicesOpen
                      )
                    }
                    className="flex items-center justify-between w-full text-left text-[15px] text-white/90"
                  >

                    Services

                    <HiChevronDown
                      className={`transition-transform duration-300 ${
                        mobileServicesOpen
                          ? "rotate-180"
                          : ""
                      }`}
                    />

                  </button>

                  {mobileServicesOpen && (
                    <div className="mt-4 ml-4 flex flex-col border-l border-white/10">

                      {/* RENOVATION */}
                      <Link
                        href="/renovation-dubai"
                        className="py-3 pl-4 text-sm text-white/70 hover:text-white transition"
                      >
                        Renovation
                      </Link>

                      {/* INTERIOR DESIGN */}
                      <Link
                        href="https://casakraftinteriors.ae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 pl-4 text-sm text-white/70 hover:text-white border-t border-white/10 transition"
                      >
                        Interior Design
                      </Link>

                    </div>
                  )}

                </div>

                {/* OTHER LINKS */}
                {navLinks.slice(2).map((l, idx) => (
                  <NavItem
                    key={idx}
                    href={l.path}
                    title={l.title}
                    onClick={() =>
                      setNavbarOpen(false)
                    }
                  />
                ))}

              </div>

              {/* SOCIAL */}
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