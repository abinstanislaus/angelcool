"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, BadgeDollarSign, TrendingDown, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Experienced Technicians",
    description: "Certified professionals with years of expertise",
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "Same-day service available for urgent repairs",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Prices",
    description: "Transparent pricing with no hidden charges",
  },
  {
    icon: TrendingDown,
    title: "Best Rates",
    description: "Best rates in the market",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description: "100% satisfaction guaranteed",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Decorative radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-[var(--font-outfit)] text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Why Choose Us
          </motion.h2>
          <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-sky-500 to-cyan-500" />
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10 hover:border-sky-500/40 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-sky-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <Icon size={26} className="text-sky-400" aria-hidden />
                </div>
                <h3 className="font-[var(--font-outfit)] text-base font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="font-[var(--font-inter)] text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
