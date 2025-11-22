import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto p-8 md:flex md:justify-between">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Bigints</h3>
          <p className="max-w-sm text-sm text-gray-200">Building Intelligent Solutions for Your Business Growth.</p>
          <div className="flex gap-3 mt-2">
            <a aria-label="linkedin" className="p-2 rounded-md bg-white/10"><FaLinkedin /></a>
            <a aria-label="twitter" className="p-2 rounded-md bg-white/10"><FaTwitter /></a>
            <a aria-label="facebook" className="p-2 rounded-md bg-white/10"><FaFacebook /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6 md:mt-0">
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="text-sm mt-2 text-gray-200">
              <li><Link to="/services">Marketing Services</Link></li>
              <li><Link to="/services">IT Services</Link></li>
              <li><Link to="/services">Web Services</Link></li>
              <li><Link to="/services">Payroll</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="text-sm mt-2 text-gray-200">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto p-4 text-sm text-gray-300 flex justify-between">
          <div>© {new Date().getFullYear()} Bigints. All rights reserved.</div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
