import React from "react";

const AboutSection = () => {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block text-xs font-semibold tracking-[0.3em] text-blue-600 uppercase">
            About Us
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Building Digital Solutions That Move Businesses Forward
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>

          <p className="mt-6 text-base text-slate-600 leading-relaxed">
            BigInt Technology is a technology-driven company delivering reliable
            software, digital marketing, and HR outsourcing solutions to growing
            businesses.
          </p>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            We focus on scalable systems, measurable outcomes, and long-term
            partnerships that help organizations operate smarter and grow faster.
          </p>

          {/* New paragraph (trust-focused) */}
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Our approach combines technical expertise, business understanding,
            and execution excellence—ensuring every solution aligns with real
            business goals and delivers long-term value.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-2xl font-extrabold text-slate-900">6+</h4>
              <p className="text-sm text-slate-500">Industries Served</p>
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-slate-900">100%</h4>
              <p className="text-sm text-slate-500">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center">
          <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-10 blur-2xl"></div>
          <img
            src="/bt1.jpg"
            alt="About BigInt Technology"
            className="relative w-full max-w-lg h-[480px] object-cover rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
