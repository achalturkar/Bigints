import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative w-full bg-[#0f172a] overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col items-center text-center gap-6">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let’s Build, Grow & Scale
          </h2>

          {/* Sub text */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Software • Digital Marketing • HR Outsourcing
          </p>

          {/* CTA */}
          <div className="mt-4">
            <Link className="px-10 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 transition shadow-xl">
              Get Started
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
