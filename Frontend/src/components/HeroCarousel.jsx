import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * HeroCarousel.jsx
 * React + Tailwind CSS hero carousel with 3 slides, accessible controls, auto-play and smooth animations.
 * - Uses Tailwind utility classes (assumes Tailwind is installed)
 * - Uses framer-motion for smooth entrance/exit animations
 * - Responsive, keyboard accessible, pauses on hover
 *
 * Usage: import HeroCarousel from './HeroCarousel'; then <HeroCarousel />
 */

const DEFAULT_SLIDES = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=1e3f5d3b3a1d1b3f7f6a4b6e6a2c8d7f",
    alt: "Corporate office skyline with modern glass buildings",
    eyebrow: "Enterprise Solutions",
    title: "Scale your business with data-driven digital transformation",
    description:
      "We design scalable systems, streamline operations, and accelerate revenue through modern engineering and marketing.",
    cta: { label: "Get Started", href: "#contact" },
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c5c8a8c2f2d4b6c7e8a9a1b2c3d4e5f",
    alt: "Team meeting with strategy discussion and laptop",
    eyebrow: "Strategic IT",
    title: "Secure, reliable infrastructure for modern teams",
    description:
      "Deploy resilient cloud architectures, automate deployments, and protect your business with enterprise-grade security.",
    cta: { label: "Learn More", href: "#services" },
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1542228262-1f9b8d5a0f3b?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=4a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d",
    alt: "Modern analytics dashboard on a large screen",
    eyebrow: "Growth Marketing",
    title: "Turn insight into measurable growth",
    description:
      "From conversion optimization to targeted campaigns — we turn data into customers and customers into advocates.",
    cta: { label: "Talk to Sales", href: "#contact" },
  },
];

export default function HeroCarousel({ slides = DEFAULT_SLIDES, interval = 6000 }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slidesCount = slides.length;
  const timerRef = useRef(null);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isPaused]);

  const startTimer = () => {
    if (isPaused) return;
    stopTimer();
    timerRef.current = setTimeout(() => goNext(), interval);
  };
  const stopTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const goPrev = () => setIndex((i) => (i - 1 + slidesCount) % slidesCount);
  const goNext = () => setIndex((i) => (i + 1) % slidesCount);
  const goTo = (i) => setIndex(i);

  // keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="relative w-full bg-gray-900 text-white overflow-hidden"
      aria-label="Hero carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* slides */}
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[78vh]">
        <AnimatePresence initial={false} mode="wait">
          {slides.map((slide, i) =>
            i === index ? (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* image */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.55]"
                  draggable={false}
                />

                {/* content */}
                <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
                  <div className="max-w-2xl">
                    <span className="inline-block bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm mb-4">
                      {slide.eyebrow}
                    </span>

                    <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                      {slide.title}
                    </h1>

                    <p className="mt-4 text-sm md:text-base text-white/90">{slide.description}</p>

                    <div className="mt-6 flex gap-3">
                      <a
                        href={slide.cta.href}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-lg hover:scale-[1.01] transform transition"
                      >
                        {slide.cta.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>

                      <a href="#services" className="inline-flex items-center px-4 py-3 rounded-2xl bg-white/10 text-white/90 hover:bg-white/20 transition">
                        Our Services
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* navigation arrows */}
        <button
          aria-label="Previous slide"
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 hover:bg-black/60 p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          aria-label="Next slide"
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 hover:bg-black/60 p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"} focus:outline-none focus:ring-2 focus:ring-white/60`}
            />
          ))}
        </div>
      </div>

      {/* visually hidden live region for screen readers to announce slide changes */}
      <div aria-live="polite" className="sr-only">
        {`Slide ${index + 1} of ${slidesCount}: ${slides[index].title}`}
      </div>

      {/* small gradient bottom decoration */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  );
}
