import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2 md:p-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/bigints.png"
            alt="Bigints Logo"
            className="w-36 md:w-40 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#1F3EFF] font-semibold" : "text-gray-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#1F3EFF] font-semibold" : "text-gray-600"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-[#1F3EFF] font-semibold" : "text-gray-600"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-[#1F3EFF] font-semibold" : "text-gray-600"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive ? "text-[#1F3EFF] font-semibold" : "text-gray-600"
            }
          >
            Careers
          </NavLink>
          <NavLink
            to="/contact"
            className="bg-[#1F3EFF] text-white px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-[#1F3EFF] hover:to-[#0A0F2F] transition"
          >
            Get Consultation
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            aria-label="menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cross Button inside Sidebar */}
        <div className="flex justify-between items-center p-4 border-b">
          <img
            src="/bigints.png"
            alt="Bigints Logo"
            className="w-32 object-contain"
          />
          <button
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-[#1F3EFF]"
            aria-label="Close menu"
          >
            <FiX size={28} />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-6 mt-2">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-[#1F3EFF] font-semibold" : "text-gray-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-[#1F3EFF] font-semibold" : "text-gray-600"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-[#1F3EFF] font-semibold" : "text-gray-600"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-[#1F3EFF] font-semibold" : "text-gray-600"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/careers"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-[#1F3EFF] font-semibold" : "text-gray-600"
            }
          >
            Careers
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-[#1F3EFF] text-white px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-[#1F3EFF] hover:to-[#0A0F2F] transition"
          >
            Get Consultation
          </NavLink>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </header>
  );
}
