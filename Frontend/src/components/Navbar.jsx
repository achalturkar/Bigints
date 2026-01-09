import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";

const HOVER_COLOR = "text-[#1F3EFF]";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [level, setLevel] = useState("main");
  const [activeService, setActiveService] = useState("");
  const [desktopOpen, setDesktopOpen] = useState(false);
  const closeTimer = useRef(null);

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setDesktopOpen(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => {
      setDesktopOpen(false);
    }, 150);
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white border-b z-[999]">
        <div className="max-w-7xl mx-auto px-6 h-[78px] flex items-center justify-between">

          {/* LOGO */}
          <Link to="/">
            <img src="/Logo.png" alt="Bigint Technology" className="w-52" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-semibold text-gray-800">
            <NavLink to="/" className={({isActive}) => isActive ? HOVER_COLOR : "hover:text-[#1F3EFF]"}>Home</NavLink>
            <NavLink to="/about" className="hover:text-[#1F3EFF]">About Us</NavLink>
            <NavLink to="/blog" className="hover:text-[#1F3EFF]">Blog</NavLink>
            <NavLink to="/portfolio" className="hover:text-[#1F3EFF]">Portfolio</NavLink>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >
              <span className="cursor-pointer hover:text-[#1F3EFF]">
                Services
              </span>

              <div className="absolute left-0 top-full h-6 w-full" />

              {desktopOpen && (
                <div
                  className="fixed left-0 top-[78px] w-full bg-white shadow-xl z-[998]"
                  onMouseEnter={openMenu}
                  onMouseLeave={closeMenu}
                >
                  <div className="max-w-7xl mx-auto px-12 py-12 grid grid-cols-3 gap-16">

                    <ServiceColumn
                      title="Software Development"
                      base="/services/software-development"
                      items={[
                        { label: "Web Development", hash: "#web" },
                        { label: "Custom Software", hash: "#custom" },
                        { label: "API Development", hash: "#api" },
                        { label: "Admin Panels", hash: "#admin" },
                      ]}
                    />

                    <ServiceColumn
                      title="Digital Marketing"
                      base="/services/digital-marketing"
                      items={[
                        { label: "SEO Services", hash: "#seo" },
                        { label: "Google & Meta Ads", hash: "#ads" },
                        { label: "Social Media Marketing", hash: "#smm" },
                        { label: "Branding & Creatives", hash: "#branding" },
                        { label: "Content Marketing", hash: "#content" },
                      ]}
                    />

                    <ServiceColumn
                      title="HR Outsourcing"
                      base="/services/hr-outsourcing"
                      items={[
                        { label: "Recruitment Services", hash: "#recruitment" },
                        { label: "Bulk Hiring", hash: "#bulk" },
                        { label: "Payroll Management", hash: "#payroll" },
                        { label: "Contract Staffing", hash: "#contract" },
                      ]}
                    />
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/careers" className="hover:text-[#1F3EFF]">Careers</NavLink>
            <NavLink to="/contact" className="hover:text-[#1F3EFF]">Contact</NavLink>
          </nav>

          {/* MOBILE */}
          <button className="md:hidden" onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-[1000]">
          <div className="flex items-center gap-4 px-6 h-[70px] border-b">
            {level !== "main" && (
              <button
                onClick={() =>
                  level === "sub" ? setLevel("services") : setLevel("main")
                }
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <span className="font-semibold text-lg">
              {level === "main" && "Menu"}
              {level === "services" && "Services"}
              {level === "sub" && activeService}
            </span>

            <button
              className="ml-auto"
              onClick={() => {
                setMobileOpen(false);
                setLevel("main");
              }}
            >
              <X size={26} />
            </button>
          </div>

          <div className="px-6 py-8 space-y-6 text-[17px] font-medium">
            {level === "main" && (
              <>
                <MobileLink label="Home" />
                <MobileLink label="About Us" />
                <MobileLink label="Blog" />
                <MobileLink label="Portfolio" />

                <button
                  className="flex justify-between w-full py-3 border-b"
                  onClick={() => setLevel("services")}
                >
                  Services <ChevronRight size={18} />
                </button>

                <MobileLink label="Careers" />
                <MobileLink label="Contact" />
              </>
            )}

            {level === "services" && (
              <>
                <ServiceRow title="Software Development" setActive={setActiveService} setLevel={setLevel} />
                <ServiceRow title="Digital Marketing" setActive={setActiveService} setLevel={setLevel} />
                <ServiceRow title="HR Outsourcing" setActive={setActiveService} setLevel={setLevel} />
              </>
            )}

            {level === "sub" && (
              <div className="space-y-4">
                {getSubServices(activeService).map((item) => (
                  <Link
                    key={item.label}
                    to={item.url}
                    className="flex items-center justify-between py-3 border-b hover:text-[#1F3EFF]"
                  >
                    {item.label}
                    <ArrowRight size={18} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

/* ---------------- HELPERS ---------------- */

function ServiceColumn({ title, items, base }) {
  return (
    <div>
      <h4 className="font-semibold mb-4 text-gray-900">{title}</h4>
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <Link
            key={item.label}
            to={`${base}${item.hash}`}
            className="flex items-center gap-2 text-gray-600 hover:text-[#1F3EFF] transition"
          >
            <ArrowRight size={14} />
            {item.label}
          </Link>
        ))}
      </ul>
    </div>
  );
}

function MobileLink({ label }) {
  return (
    <NavLink
      to={`/${label.toLowerCase().replace(/\s/g, "")}`}
      className="block py-3 border-b"
    >
      {label}
    </NavLink>
  );
}

function ServiceRow({ title, setActive, setLevel }) {
  return (
    <button
      className="flex justify-between w-full py-3 border-b"
      onClick={() => {
        setActive(title);
        setLevel("sub");
      }}
    >
      {title}
      <ChevronRight size={18} />
    </button>
  );
}

function getSubServices(service) {
  const map = {
    "Software Development": [
      { label: "Web Development", url: "/services/software-development/#web" },
      { label: "Custom Software", url: "/services/software-development/#custom" },
      { label: "API Development", url: "/services/software-development/#api" },
      { label: "Admin Panels", url: "/services/software-development/#admin" },
    ],
    "Digital Marketing": [
      { label: "SEO Services", url: "/services/digital-marketing/#seo" },
      { label: "Google & Meta Ads", url: "/services/digital-marketing/#ads" },
      { label: "Social Media Marketing", url: "/services/digital-marketing/#smm" },
      { label: "Branding & Creatives", url: "/services/digital-marketing/#branding" },
      { label: "Content Marketing", url: "/services/digital-marketing/#content" },
    ],
    "HR Outsourcing": [
      { label: "Recruitment Services", url: "/services/hr-outsourcing/#recruitment" },
      { label: "Bulk Hiring", url: "/services/hr-outsourcing/#bulk" },
      { label: "Payroll Management", url: "/services/hr-outsourcing/#payroll" },
      { label: "Contract Staffing", url: "/services/hr-outsourcing/#contract" },
    ],
  };

  return map[service] || [];
}
