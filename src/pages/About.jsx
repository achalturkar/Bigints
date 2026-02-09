import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBullseye, FaEye, FaHeart, FaUsers, FaGlobeAsia, FaCogs } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import HeroAll from "../components/HeroAll";


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>   <Helmet>
      <title>About Us – Bigints</title>
      <meta
        name="description"
        content="Learn more about Bigints, our mission, vision, and the services we provide across IT, marketing, and business automation."
      />
      <link rel="canonical" href="https://bigints.com/about" />
    </Helmet>

      <div className="bg-white text-gray-900">

        <HeroAll
          title="About BigInt Technology"
          subtitle="A trusted technology partner focused on scalable and reliable solutions."
        />


        {/* Hero Section
        <section className="bg-gradient-to-r from-[#0A0F2F] to-[#1F3EFF] py-20 text-center text-white" data-aos="fade-up">
          <h1 className="text-5xl font-bold">About Bigints</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Bigint  — Building Intelligent Solutions for Your Business Growth.
          </p>
        </section> */}

        {/* Company Story */}
        <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-[#0A0F2F] mb-4">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bigints is a multi-service business empowerment company offering
              <strong className="text-[#1F3EFF]"> Marketing, IT, Web, and Payroll solutions</strong>
              designed to accelerate business growth in the digital age.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our mission is to transform companies with high-impact strategies,
              modern technologies, and intelligent operational solutions.
              We partner with startups, enterprises, and global brands to build
              scalable and future-ready systems.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1553881651-2b1b0a52df81?auto=format&fit=crop&w=900"
              alt="Bigints Team"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Mission Vision Values */}
        <section className="bg-gray-100 py-16 px-6">
          <h2 className="text-center text-4xl font-bold text-[#0A0F2F] mb-12" data-aos="fade-up">
            Our Core Principles
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="p-8 bg-white rounded-xl shadow-md text-center" data-aos="zoom-in">
              <FaBullseye className="text-5xl text-[#1F3EFF] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Mission</h3>
              <p className="text-gray-700">
                To empower businesses with modern technology, smart marketing,
                and scalable operational solutions.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md text-center" data-aos="zoom-in" data-aos-delay="200">
              <FaEye className="text-5xl text-[#1F3EFF] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Vision</h3>
              <p className="text-gray-700">
                To be a global leader in providing integrated, intelligent business solutions.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md text-center" data-aos="zoom-in" data-aos-delay="400">
              <FaHeart className="text-5xl text-[#1F3EFF] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Values</h3>
              <p className="text-gray-700">
                Innovation, Integrity, Excellence, Transparency, and Long-term Partnerships.
              </p>
            </div>

          </div>
        </section>

        {/* Business Transformation Approach */}
        <section className="max-w-7xl mx-auto py-20 px-6">
          <h2 className="text-4xl font-bold text-[#0A0F2F] text-center mb-16" data-aos="fade-up">
            Our Business Transformation Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="bg-white shadow-lg p-8 rounded-xl border-t-4 border-[#1F3EFF]" data-aos="fade-up">
              <FaGlobeAsia className="text-4xl text-[#1F3EFF] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Digital Empowerment</h3>
              <p className="text-gray-700">
                We implement modern digital strategies to enhance brand visibility
                and customer engagement.
              </p>
            </div>

            <div className="bg-white shadow-lg p-8 rounded-xl border-t-4 border-[#1F3EFF]" data-aos="fade-up" data-aos-delay="200">
              <FaCogs className="text-4xl text-[#1F3EFF] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Technology Integration</h3>
              <p className="text-gray-700">
                From Software to Cloud — we build scalable IT solutions optimized for performance.
              </p>
            </div>

            <div className="bg-white shadow-lg p-8 rounded-xl border-t-4 border-[#1F3EFF]" data-aos="fade-up" data-aos-delay="400">
              <FaUsers className="text-4xl text-[#1F3EFF] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Operational Excellence</h3>
              <p className="text-gray-700">
                Streamlining business operations through HR, Payroll, and workflow automation.
              </p>
            </div>

          </div>
        </section>

        {/* Leadership Section */}
        {/*  <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-4xl font-bold text-[#0A0F2F] text-center mb-12" data-aos="fade-up">
          Leadership Team
        </h2>

     <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

         ]
          <div className="bg-white shadow-md p-6 text-center rounded-xl" data-aos="zoom-in">
            <img 
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800"
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
              alt="Leader"
            />
            <h3 className="text-xl font-bold mt-4">Achal Turkar</h3>
            <p className="text-[#1F3EFF] font-semibold">Founder & CEO</p>
            <p className="mt-3 text-gray-700">
              Leading Bigints with a vision to build future-ready digital and IT ecosystems.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 text-center rounded-xl" data-aos="zoom-in" data-aos-delay="200">
            <img 
              src="https://images.unsplash.com/photo-1603415526960-f7e0328bdc40?auto=format&fit=crop&w=800"
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
              alt="Leader"
            />
            <h3 className="text-xl font-bold mt-4">Roshan Verma</h3>
            <p className="text-[#1F3EFF] font-semibold">CTO – Technology</p>
            <p className="mt-3 text-gray-700">
              Oversees system architecture, cloud technologies, and application engineering.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 text-center rounded-xl" data-aos="zoom-in" data-aos-delay="400">
            <img 
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800"
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
              alt="Leader"
            />
            <h3 className="text-xl font-bold mt-4">Nikhil Dubey</h3>
            <p className="text-[#1F3EFF] font-semibold">Head – Marketing</p>
            <p className="mt-3 text-gray-700">
              Driving growth-focused digital marketing strategies and brand acceleration.
            </p>
          </div>

        </div>
      </section> */}

      </div>
    </>

  );
};

export default About;
