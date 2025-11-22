import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2 md:p-6">
        <Link to="/" className="flex items-center gap-3">
          <img src="/bigints.png" width="140px" to="/" />

        </Link>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-royal font-semibold' : 'text-gray-600'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-royal font-semibold' : 'text-gray-600'}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'text-royal font-semibold' : 'text-gray-600'}>Services</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-royal font-semibold' : 'text-gray-600'}>Blog</NavLink>
          <NavLink to="/careers" className={({ isActive }) => isActive ? 'text-royal font-semibold' : 'text-gray-600'}>Careers</NavLink>
          <NavLink to="/contact" className="btn-accent px-4 py-2 rounded-md">Get Consultation</NavLink>
        </nav>

        <div className="md:hidden">
          <button aria-label="menu" className="p-2 rounded-md"><FiMenu size={22} /></button>
        </div>
      </div>
    </header>
  );
}
