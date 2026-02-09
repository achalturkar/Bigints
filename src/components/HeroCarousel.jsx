import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "Software Development",
    title: "Custom software built to scale your business",
    description:
      "Web development, APIs, admin panels and custom systems designed for performance, security and growth.",
    ctaPrimary: { label: "Start Your Project", href: "#contact" },
    ctaSecondary: { label: "View Services", href: "#services" },
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "Digital Marketing",
    title: "Marketing strategies that convert into revenue",
    description:
      "SEO, Google & Meta Ads, social media marketing and branding that brings measurable results.",
    ctaPrimary: { label: "Grow My Business", href: "#contact" },
    ctaSecondary: { label: "Marketing Services", href: "#services" },
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
    eyebrow: "HR Outsourcing",
    title: "Reliable hiring & payroll management solutions",
    description:
      "Recruitment services, bulk hiring, payroll management and contract staffing made simple.",
    ctaPrimary: { label: "Hire Talent", href: "#contact" },
    ctaSecondary: { label: "HR Solutions", href: "#services" },
  },
];

export default function HeroCarousel({ interval = 6000 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      interval
    );
    return () => clearTimeout(timerRef.current);
  }, [index, interval]);

  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div className="relative h-[85vh] lg:h-[85vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={SLIDES[index].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <img
              src={SLIDES[index].image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover brightness-[0.45]"
            />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="max-w-2xl">

                  <span className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1 text-sm tracking-wide">
                    {SLIDES[index].eyebrow}
                  </span>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    {SLIDES[index].title}
                  </h1>

                  <p className="mt-5 text-lg text-white/90">
                    {SLIDES[index].description}
                  </p>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={SLIDES[index].ctaPrimary.href}
                      className="px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 font-semibold shadow-lg hover:opacity-90 transition"
                    >
                      {SLIDES[index].ctaPrimary.label}
                    </a>

                    {/* <a
                      href={SLIDES[index].ctaSecondary.href}
                      className="px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
                    >
                      {SLIDES[index].ctaSecondary.label}
                    </a> */}
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
