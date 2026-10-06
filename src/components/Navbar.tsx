"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ["home", "about", "services", "contact"];
      const scrollPos = window.scrollY + 140;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-neutral-200/80 shadow-xs py-3"
          : "bg-[#fcfbf9]/95 sm:bg-[#fcfbf9]/90 backdrop-blur-md py-4 sm:py-5"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between md:grid md:grid-cols-3">
        
        {/* ── BRAND LOGO (BOTANICAL BRANCH + MASEWA / MASWAB) ── */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex flex-col items-center group select-none text-decoration-none"
        >
          {/* Botanical Branch Icon */}
          <div className="text-[#0a443a] group-hover:scale-105 transition-transform duration-200 mb-0.5">
            <svg
              viewBox="0 0 42 16"
              className="w-8 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 2 13 C 12 11, 24 7, 40 3" />
              <path d="M 12 11 C 9 7, 12 4, 15 5 C 17 6, 15 9, 12 11" fill="currentColor" fillOpacity="0.2" />
              <path d="M 19 8 C 17 4, 21 2, 24 4 C 25 5, 23 8, 19 8" fill="currentColor" fillOpacity="0.2" />
              <path d="M 27 6 C 26 2, 31 1, 33 3 C 34 4, 32 6, 27 6" fill="currentColor" fillOpacity="0.2" />
              <path d="M 21 9 C 24 12, 28 11, 28 8 C 26 7, 22 8, 21 9" fill="currentColor" fillOpacity="0.2" />
            </svg>
          </div>

          {/* Brand Wordmark */}
          <span
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            className="text-[20px] sm:text-[22px] font-bold tracking-[0.22em] text-[#0a443a] leading-none"
          >
            MASEWA
          </span>
          <span className="text-[7.5px] font-mono tracking-[0.38em] uppercase text-[#0a443a]/75 font-semibold mt-0.5">
            EVENT DECOR.
          </span>
        </a>

        {/* ── DESKTOP CENTER NAVIGATION LINKS ── */}
        <ul className="hidden md:flex items-center justify-center gap-7 lg:gap-10">
          {navLinks.map((link) => {
            const isCurrent =
              (link.href === "#home" && activeSection === "home") ||
              (link.href === "#about" && activeSection === "about") ||
              (link.href === "#services" && activeSection === "services") ||
              (link.href === "#contact" && activeSection === "contact");

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-xs sm:text-[13px] font-mono tracking-wider transition-colors duration-200 capitalize relative py-1 ${
                    isCurrent
                      ? "text-[#0a443a] font-bold"
                      : "text-neutral-600 hover:text-[#0a443a] font-normal"
                  }`}
                >
                  {link.label}
                  {isCurrent && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#0a443a] rounded-full"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ── RIGHT ACTION: CIRCULAR HAMBURGER BUTTON (MOBILE ONLY) ── */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 hover:border-[#0a443a] bg-white flex items-center justify-center text-[#0a443a] transition-all shadow-2xs hover:bg-[#0a443a]/5 active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* ── SLIDE-OUT MOBILE / COMPACT DRAWER ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="bg-white border-b border-neutral-200 px-6 py-6 shadow-xl overflow-hidden"
          >
            <div className="max-w-md mx-auto flex flex-col gap-3 font-mono text-xs tracking-widest uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="py-2 border-b border-neutral-100 text-neutral-800 hover:text-[#0a443a] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} className="text-neutral-400" />
                </a>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full py-3 rounded-full bg-[#0a443a] text-white text-xs font-mono font-semibold uppercase tracking-widest shadow-md text-center"
                >
                  Book Event
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
