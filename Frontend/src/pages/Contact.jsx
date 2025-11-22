import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0A0F2F] to-[#1F3EFF] py-20 text-center text-white" data-aos="fade-up">
        <h1 className="text-4xl font-bold">Contact Bigints</h1>
        <p className="mt-3 text-lg">We're here to empower your business growth.</p>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left: Form */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-semibold mb-5 text-[#0A0F2F]">Send Us a Message</h2>
          <ContactForm />
        </div>
        
        {/* Right: Details */}
        <div className="space-y-8" data-aos="fade-left">
          <h2 className="text-3xl font-semibold text-[#1F3EFF]">Office Information</h2>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-[#1F3EFF] text-2xl" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-700">+91 95299 72011</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-[#1F3EFF] text-2xl" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-700">contact@bigints.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-[#1F3EFF] text-3xl" />
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-gray-700">
                Pratap Nagar, Nagpur, Maharashtra, India
              </p>
            </div>
          </div>

          {/* Map Embed */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Bigints Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.175!2d79.0882!3d21.1122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA2JzQ0LjAiTiA3OcKwMDUnMTcuNSJF!5e0!3m2!1sen!2sin!4v000000000"
              className="w-full h-64 border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
