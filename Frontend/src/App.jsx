import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/contact";
import About from "./pages/Aboute";
import Careers from "./pages/Careers";
import JobDetails from "./components/Careers/JobDetails";
import Blog from "./pages/Blog";
// import BlogDetails from ""

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers/>} />
  <Route path="/careers/:id" element={<JobDetails/>} />
  <Route path="/blog" element={<Blog/>} />
{/* <Route path="/blog/:id" element={<BlogDetails/>} /> */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
