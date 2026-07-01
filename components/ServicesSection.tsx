"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AirVent, WashingMachine, Refrigerator, CalendarCheck, Phone, ChevronDown } from "lucide-react";

const services = [
  {
    icon: AirVent,
    title: "AC Service and Repair in Thrissur",
    description:
      "Professional air conditioning service and repair, installation, and maintenance for all brands.",
    detail:
      "We service all major AC brands including LG, Samsung, Voltas, Daikin, and more. Fast diagnosis, genuine parts, and same-day AC service and repair in Thrissur.",
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Service and Repair in Thrissur",
    description:
      "Expert washing machine service and repair for top-load and front-load machines.",
    detail:
      "From motor issues to drum problems, our certified technicians handle all washing machine faults with a 90-day service guarantee.",
  },
  {
    icon: Refrigerator,
    title: "Refrigerator Service and Repair in Thrissur",
    description:
      "Reliable refrigerator service and repair for single-door, double-door, and side-by-side models.",
    detail:
      "From cooling issues to compressor and gas problems, our technicians provide fast refrigerator service and repair in Thrissur with genuine parts.",
  },
  {
    icon: CalendarCheck,
    title: "Preventative Maintenance",
    description:
      "Regular maintenance plans to keep your appliances running efficiently year-round.",
    detail:
      "Schedule periodic check-ups to extend appliance life, improve efficiency, and catch problems before they become costly repairs.",
  },
];

export default function ServicesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (i: number) => setExpanded(expanded === i ? null : i);

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-[var(--font-outfit)] text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            Our Services
          </motion.h2>
          <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-sky-500 to-cyan-500" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            const open = expanded === i;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-sky-200 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Card body */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-50 to-cyan-50 flex items-center justify-center mb-5">
                    <Icon size={28} className="text-sky-500" aria-hidden />
                  </div>
                  <h3 className="font-[var(--font-outfit)] text-xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="font-[var(--font-inter)] text-slate-500 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Expanded detail */}
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-slate-100"
                    >
                      <p className="font-[var(--font-inter)] text-slate-600 text-sm leading-relaxed mb-4">
                        {service.detail}
                      </p>
                      <a
                        href="tel:+919495783297"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:shadow-md transition-all duration-200"
                      >
                        <Phone size={14} aria-hidden />
                        Book Now
                      </a>
                    </motion.div>
                  )}
                </div>

                {/* Learn More toggle */}
                <button
                  onClick={() => toggle(i)}
                  className="flex items-center justify-between px-7 py-4 border-t border-slate-100 text-sky-500 hover:text-sky-600 hover:bg-sky-50 transition-colors font-[var(--font-inter)] text-sm font-medium focus-visible:outline-none"
                  aria-expanded={open}
                >
                  <span>{open ? "Show Less" : "Learn More"}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
