import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function SocialBar({ show }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-gray-900 text-white z-50 transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex justify-center items-center gap-6 py-2 text-lg">
        <a href="https://www.linkedin.com" target="_blank"><FaLinkedin size={22}/></a>
        <a href="https://wa.me/9529972011" target="_blank"><FaWhatsapp size={22}/></a>
        <a href="https://instagram.com" target="_blank"><FaInstagram size={22}/></a>
        <a href="mailto:contact@bigints.com"><MdEmail size={22}/></a>
        <a href="tel:+919529972011"><MdPhone size={22}/></a>
      </div>
    </div>
  );
}
