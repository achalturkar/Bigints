import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fb] text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* 1️⃣ LOGO & DETAILS */}
          <div>
            <img
              src="/Logo.png"
              alt="BigInt Technology"
              className="h-16 mb-4"
            />

            <p className="text-gray-600 leading-relaxed">
              Building scalable technology, digital growth, and workforce
              solutions for modern businesses.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                <FaFacebookF />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-sky-50 text-sky-500 hover:bg-sky-500 hover:text-white transition">
                <FaTwitter />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white transition">
                <FaLinkedinIn />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-50 text-pink-500 hover:bg-pink-500 hover:text-white transition">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* 2️⃣ QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-blue-600">Home</a></li>
              <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-600">Services</a></li>
              <li><a href="/careers" className="hover:text-blue-600">Careers</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>

          {/* 3️⃣ SERVICES */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-5">
              Services
            </h4>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-gray-800 mb-2">
                  Software Development
                </p>
                {/* <ul className="space-y-1 text-gray-600">
                  <li>Web Development</li>
                  <li>Custom Software</li>
                  <li>API Development</li>
                  <li>Admin Panels</li>
                </ul> */}
              </div>

              <div>
                <p className="font-medium text-gray-800 mb-2">
                  Digital Marketing
                </p>
                {/* <ul className="space-y-1 text-gray-600">
                  <li>SEO Services</li>
                  <li>Google & Meta Ads</li>
                  <li>Social Media Marketing</li>
                  <li>Branding & Creatives</li>
                  <li>Content Marketing</li>
                </ul> */}
              </div>

              <div>
                <p className="font-medium text-gray-800 mb-2">
                  HR Outsourcing
                </p>
                {/* <ul className="space-y-1 text-gray-600">
                  <li>Recruitment Services</li>
                  <li>Bulk Hiring</li>
                  <li>Payroll Management</li>
                  <li>Contract Staffing</li>
                </ul> */}
              </div>
            </div>
          </div>

          {/* 4️⃣ CONTACT */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-5">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-600 mt-1" />
                <span>
                  131, Dronacharya Nagar, Trmurti Nagar, Nagpur – 440022
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                contact@bigints.com
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600" />
                +91 95299 72011
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 pt-6 border-t text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BigInt Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
