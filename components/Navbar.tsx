"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", target: "home" },
  { label: "Services", target: "services" },
  { label: "Booking", target: "services" },
  { label: "Contact", target: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (target: string) => {
    setMenuOpen(false);
    if (target === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between h-[70px] sm:h-[85px] md:h-[100px]"
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-3 focus-visible:outline-none"
          aria-label="Angel Cool — go to top"
        >
          <Image
            src="/logo.png"
            alt="Angel Cool logo"
            width={52}
            height={52}
            className="rounded-full object-contain"
            priority
          />
          <span
            className={`font-[var(--font-outfit)] text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-slate-900" : "text-white drop-shadow"
            }`}
          >
            Angel Cool
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, target }) => (
            <button
              key={label}
              onClick={() => scrollTo(target)}
              className={`font-[var(--font-inter)] text-sm font-medium transition-colors hover:text-sky-500 focus-visible:outline-none ${
                scrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {label}
            </button>
          ))}
          <a
            href="tel:+919495783297"
            className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-medium font-[var(--font-inter)] hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            <Phone size={14} aria-hidden />
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-1 transition-colors focus-visible:outline-none ${
            scrolled ? "text-slate-700" : "text-white"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-slate-100">
          <div className="flex flex-col px-6 py-5 gap-4">
            {navLinks.map(({ label, target }) => (
              <button
                key={label}
                onClick={() => scrollTo(target)}
                className="text-left font-[var(--font-inter)] text-slate-700 font-medium hover:text-sky-500 transition-colors py-1 focus-visible:outline-none"
              >
                {label}
              </button>
            ))}
            <a
              href="tel:+919495783297"
              className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-5 py-2.5 rounded-full text-sm font-medium w-fit"
            >
              <Phone size={14} aria-hidden />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
