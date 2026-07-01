import Image from "next/image";
import { Phone, MapPin, Users } from "lucide-react";

export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="bg-slate-950 border-t border-white/10 pt-14 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Angel Cool logo"
                width={52}
                height={52}
                className="rounded-full object-contain"
              />
              <div>
                <p className="font-[var(--font-outfit)] text-lg font-bold text-white leading-tight">
                  Angel Cool
                </p>
                <p className="font-[var(--font-inter)] text-xs text-slate-400">
                  AC &amp; Appliance Services
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Users size={15} className="text-sky-400 shrink-0" aria-hidden />
              <span className="font-[var(--font-inter)] text-sm font-medium">
                6000+ Trusted Customers
              </span>
            </div>
          </div>

          {/* Contact */}
          <address className="not-italic flex flex-col items-center md:items-start gap-3">
            <p className="font-[var(--font-outfit)] text-sm font-semibold text-white uppercase tracking-wide mb-1">
              Contact Us
            </p>
            <a
              href="tel:+919495783297"
              className="flex items-center gap-2 font-[var(--font-inter)] text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Phone size={15} className="text-sky-400 shrink-0" aria-hidden />
              +91 9495783297
            </a>
            <div className="flex items-start gap-2 font-[var(--font-inter)] text-slate-300">
              <MapPin size={15} className="text-sky-400 shrink-0 mt-0.5" aria-hidden />
              <span className="text-sm leading-relaxed">
                Mala Church Complex<br />
                PIN: 680732, Thrissur
              </span>
            </div>
            <a
              href="https://www.angelcool.in"
              className="font-[var(--font-inter)] text-sm text-slate-400 hover:text-sky-400 transition-colors"
            >
              www.angelcool.in
            </a>
          </address>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Copyright */}
        <p className="font-[var(--font-inter)] text-xs text-slate-500 text-center">
          © 2026 Angel Cool. All rights reserved.{" "}
          <span className="text-slate-600">|</span> Your Reliable Neighborhood Expert
        </p>
      </div>
    </footer>
  );
}
