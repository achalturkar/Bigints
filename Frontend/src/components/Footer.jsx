import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative gradient shapes */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 opacity-20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-4 tracking-wide">BigInt Tech</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Cutting-edge technology solutions in AI, Web Development, Cloud, and Digital Transformation.
          </p>
          <div className="flex space-x-4 mt-2">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Our Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-500 transition-colors cursor-pointer">AI & Machine Learning</li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer">Web & Mobile Development</li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer">Cloud Solutions</li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer">Cybersecurity</li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer">Digital Transformation</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-500 transition-colors cursor-pointer">Home</li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer">About</li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer">Careers</li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer">Contact</li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">Contact Us</h3>
          <p className="text-gray-400 mb-2">123 Tech Park, Silicon Street, Mumbai, India</p>
          <p className="text-gray-400 mb-2">Email: info@biginttech.com</p>
          <p className="text-gray-400 mb-4">Phone: +91 98765 43210</p>
          <a href="https://maps.google.com?q=123+Tech+Park+Mumbai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            View on Google Maps
          </a>

          <div className="mt-6">
            <h4 className="text-white font-semibold mb-2">Subscribe to Newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-md text-gray-900 w-full sm:flex-1 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
              <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white px-4 py-2 rounded-md transition-all hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-12 py-6 text-center text-gray-500 text-sm relative z-10">
        &copy; {new Date().getFullYear()} BigInt Tech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
