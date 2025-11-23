import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import ServiceCard from "../components/ServiceCard";
import Testimonial from "../components/Testimonial";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


export default function Home() {
  return (

    <>
      <Helmet>
        <title>Bigints – IT, Marketing, Web & Payroll Services for Business Growth</title>
        <meta
          name="description"
          content="Bigints empowers businesses with IT services, digital marketing, web development, and payroll solutions to accelerate growth and innovation."
        />
        <link rel="canonical" href="https://bigints.com/" />
      </Helmet>
      <div>
        <HeroCarousel />

        {/* Services overview */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center" data-aos="fade-up">
            Services that power business growth
          </h2>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Comprehensive marketing, IT, web and payroll services tailored to enterprise and SME needs.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <ServiceCard title="Marketing Services" desc="Digital growth, branding, and lead generation." icon="📈" link="/services#marketing" />
            <ServiceCard title="IT Services" desc="Software engineering, Cloud & infrastructure." icon="💻" link="/services#it" />
            <ServiceCard title="Web Services" desc="Web sites, e-commerce and performance." icon="🌐" link="/services#web" />
            <ServiceCard title="Payroll Services" desc="Payroll, compliance and HRMS." icon="🧾" link="/services#payroll" />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6" data-aos="fade-right">
              <h3 className="text-xl font-semibold">Our Approach</h3>
              <ul className="mt-4 text-sm text-gray-600 list-disc pl-5">
                <li>Discovery & Strategy</li>
                <li>Design & Prototyping</li>
                <li>Implementation & Testing</li>
                <li>Continuous Improvement</li>
              </ul>
            </div>
            <div className="card p-6" data-aos="flip-up">
              <h3 className="text-xl font-semibold">Why Bigints</h3>
              <p className="mt-3 text-sm text-gray-600">Integrated teams, enterprise-grade processes, transparent delivery and measurable ROI.</p>
              <Link to="/services" className="mt-4 inline-block btn-accent px-4 py-2 rounded-md">Explore Services</Link>
            </div>
            <div className="card p-6" data-aos="fade-up">
              <h3 className="text-xl font-semibold">Trusted By</h3>
              <div className="mt-4 flex gap-3 items-center">
                <img src="https://via.placeholder.com/80x40?text=ClientA" alt="client" />
                <img src="https://via.placeholder.com/80x40?text=ClientB" alt="client" />
                <img src="https://via.placeholder.com/80x40?text=ClientC" alt="client" />
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Counter end={12} label="Projects" />
            <Counter end={8} label="Clients" />
            <Counter end={1} label="Years" />
            <Counter end={100} label="Satisfaction %" />
          </div>

        </section>

        {/* Testimonials */}
        <section className="bg-gradient-to-r from-royal/10 to-navy/6 py-14">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-2xl font-semibold text-center" data-aos="fade-up">Client Testimonials</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Testimonial by="Rahul P, CEO" content="Bigints transformed our digital pipeline, increasing leads by 160%." />
              <Testimonial by="Neha S, HR Head" content="Payroll accuracy and support improved our payroll compliance and cut manual time by 70%." />
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

