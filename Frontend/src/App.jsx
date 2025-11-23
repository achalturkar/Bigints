import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/Aboute";
import Careers from "./pages/Careers";
import JobDetails from "./components/Careers/JobDetails";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/Common/ScrollToTop";
import TopUp from "./components/Common/TopUp";
import WhatsAppButton from "./components/Common/WhatsAppButton";
// import SocialBar from "./components/Common/SocialBar";
import Layout from "./components/Common/Layout";


export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {/* <SocialBar/>
      <Navbar /> */}
      <Layout>
        <main className="flex-grow mt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:id" element={<JobDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </main>
        <Footer />
      </Layout>
      <TopUp />
      <WhatsAppButton />
    </div>
  );
}
