"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll progress across the pinned duration of the hero (200vh container, 100vh sticky viewport)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Foreground content zooms toward the camera and dissolves while the
  // gradient background behind it stays static (pinned via `sticky`).
  const scale = useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 1.18]);
  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const blurPx = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 6]);
  const filter = useTransform(blurPx, (v) => `blur(${v}px)`);

  return (
    <section id="home" ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-400 overflow-hidden">
        {/* Static background radial glow — stays fixed, no scroll transform */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl" />
        </div>

        <motion.div
          style={{ scale, y, opacity, filter }}
          className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-32 md:py-0 w-full will-change-transform"
        >
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-16">
            {/* Text column */}
            <div className="flex-1 text-center md:text-left">
              <motion.p
                {...fadeUp(0.1)}
                className="inline-block font-[var(--font-inter)] text-sm font-semibold text-white/80 bg-white/15 px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase"
              >
                AC &amp; Appliance Services
              </motion.p>

              <motion.h1
                {...fadeUp(0.2)}
                className="font-[var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              >
                Expert Care for Your{" "}
                <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                  Home Appliances
                </span>
              </motion.h1>

              <motion.p
                {...fadeUp(0.35)}
                className="font-[var(--font-inter)] text-lg sm:text-xl text-white/85 font-medium mb-10 max-w-lg mx-auto md:mx-0"
              >
                AC, Washing Machine &amp; Refrigerator Service and Repair in Thrissur
              </motion.p>

              <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:+919495783297"
                  className="inline-flex items-center justify-center gap-2.5 bg-white text-sky-600 px-7 py-3.5 rounded-full text-base font-semibold font-[var(--font-inter)] hover:bg-sky-50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Phone size={18} aria-hidden />
                  Book a Service Now
                </a>
              </motion.div>

              <motion.p
                {...fadeUp(0.65)}
                className="mt-8 font-[var(--font-inter)] text-sm text-white/70"
              >
                📍 Mala Church Complex, Thrissur &nbsp;·&nbsp; 6000+ Trusted Customers
              </motion.p>
            </div>

            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="flex-1 flex justify-center md:justify-end"
            >
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[460px] lg:h-[460px]">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl scale-95" />
                <Image
                  src="/hero_image.jpg"
                  alt="Professional appliance service technician at work"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 460px"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Wave transition to next section — part of the static background, not the zooming content */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-16 sm:h-20"
            aria-hidden
          >
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
