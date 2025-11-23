import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ offset }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`bg-white fixed w-full z-40 shadow-sm transition-all duration-300 
  ${offset ? "mt-[36px] top-0" : "mt-0 top-0"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2 md:p-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/bigints.png"
            alt="Bigints Logo"
            className="w-32 md:w-40 object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 items-center text-[15px] font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-[#1F3EFF]" : "text-gray-600"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#1F3EFF]" : "text-gray-600"}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "text-[#1F3EFF]" : "text-gray-600"}>Services</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? "text-[#1F3EFF]" : "text-gray-600"}>Blog</NavLink>
          <NavLink to="/careers" className={({ isActive }) => isActive ? "text-[#1F3EFF]" : "text-gray-600"}>Careers</NavLink>

          <NavLink
            to="/contact"
            className="bg-[#1F3EFF] text-white px-4 py-2 rounded-md hover:bg-[#1020A0] transition"
          >
            Get Consultation
          </NavLink>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 rounded-md active:scale-95"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <FiMenu size={26} className="text-gray-700" />
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-screen w-[65%] sm:w-[50%] bg-white shadow-lg transition-transform duration-300 z-[60]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ visibility: open ? "visible" : "hidden" }}
      >
        {/* Top row with logo + cross */}
        <div className="flex justify-between items-center p-4 border-b">
          <img src="/bigints.png" alt="Logo" className="w-28 object-contain" />

          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-[#1F3EFF]"
          >
            <FiX size={30} />
          </button>
        </div>

        {/* MOBILE NAV LINKS */}
        <nav className="flex flex-col p-6 gap-6 text-lg ">
          <NavLink to="/" onClick={() => setOpen(false)} className="text-gray-700 hover:text-[#1F3EFF]">Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className="text-gray-700 hover:text-[#1F3EFF]">About</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)} className="text-gray-700 hover:text-[#1F3EFF]">Services</NavLink>
          <NavLink to="/blog" onClick={() => setOpen(false)} className="text-gray-700 hover:text-[#1F3EFF]">Blog</NavLink>
          <NavLink to="/careers" onClick={() => setOpen(false)} className="text-gray-700 hover:text-[#1F3EFF]">Careers</NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-[#1F3EFF] text-white px-4 py-3 text-center rounded-md mt-2"
          >
            Get Consultation
          </NavLink>
        </nav>
      </div>

      {/* DARK OVERLAY (click to close) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[55]"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
