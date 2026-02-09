// Careers.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBriefcase, FaGraduationCap } from "react-icons/fa";

import JobCard from "../components/Careers/JobCard";
import jobsData from "../components/Careers/jobsData";
import JobFilters from "../components/Careers/JobFilters";
import JobSearch from "../components/Careers/JobSearch";
import { Helmet } from "react-helmet-async";



export default function Careers() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const [jobs, setJobs] = useState(jobsData);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    type: "All",
    dept: "All",
    experience: "All",
    location: "All",
    internshipOnly: false
  });

  const navigate = useNavigate();

  // search + filter logic (client-side). Replace with API calls for large datasets.
  const filtered = jobs.filter((j) => {
    // internship filter
    if (filters.internshipOnly && !j.internship) return false;
    if (filters.type !== "All" && j.type !== filters.type) return false;
    if (filters.dept !== "All" && j.dept !== filters.dept) return false;
    if (filters.experience !== "All" && j.experience !== filters.experience) return false;
    if (filters.location !== "All" && filters.location !== "Remote" && j.location !== filters.location) return false;
    if (query) {
      const q = query.toLowerCase();
      const hay = `${j.title} ${j.description} ${j.skills.join(" ")} ${j.dept}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  return (
    <>
      <Helmet>
        <title>Careers at Bigints – Internship & Full-Time Opportunities</title>
        <meta
          name="description"
          content="Build your career with Bigints. Explore internship and full-time job opportunities in IT, marketing, web development, HR & operations."
        />
        <link rel="canonical" href="https://bigints.com/careers" />
      </Helmet>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#0A0F2F] to-[#1F3EFF] text-white py-16" data-aos="fade-up">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Build Your Future With Bigints</h1>
            <p className="mt-3 text-lg max-w-2xl mx-auto">Join our team — internships, full-time and remote roles available.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link to="#opportunities" className="bg-white text-[#0A0F2F] px-5 py-3 rounded-md font-semibold shadow">View Open Positions</Link>
              <a href="#internships" className="border border-white/30 px-5 py-3 rounded-md">Apply for Internship</a>
            </div>
          </div>
        </section>

        {/* Search & Filters */}
        <section id="opportunities" className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 space-y-4">
              <JobSearch query={query} setQuery={setQuery} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.length === 0 ? (
                  <div className="p-10 bg-gray-50 rounded-lg text-center">No jobs found. Try adjusting filters or search keywords.</div>
                ) : (
                  filtered.map((job) => <JobCard key={job.id} job={job} onView={() => navigate(`/careers/${job.id}`)} />)
                )}
              </div>
            </div>

            <aside className="space-y-4">
              <JobFilters filters={filters} setFilters={setFilters} jobs={jobsData} />
              <div className="p-4 bg-white rounded-lg shadow" data-aos="fade-right">
                <h4 className="font-semibold text-[#0A0F2F]">Quick Links</h4>
                <ul className="mt-3 text-sm text-gray-600 space-y-2">
                  <li><a href="#internships" className="text-royal">Internships</a></li>
                  <li><a href="/careers?type=Full-time">Full-Time Jobs</a></li>
                  <li><a href="/careers?type=Remote">Remote Roles</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Internships Highlight */}
        <section id="internships" className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold" data-aos="fade-up"><FaGraduationCap className="inline mr-2 text-[#1F3EFF]" /> Internships</h2>
              <p className="text-sm text-gray-600">Live projects, mentorship and potential PPO.</p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pull internships from data */}
              {jobsData.filter(j => j.internship).map(j => (
                <div key={j.id} className="p-4 bg-white rounded-lg shadow" data-aos="zoom-in">
                  <h4 className="font-semibold">{j.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{j.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm text-gray-500">{j.location}</div>
                    <button onClick={() => navigate(`/careers/${j.id}`)} className="text-royal font-medium">Apply →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why work with us */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-2xl font-semibold" data-aos="fade-up">Why Work at Bigints?</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow" data-aos="fade-up">Mentorship & learning</div>
            <div className="p-6 bg-white rounded-lg shadow" data-aos="fade-up" data-aos-delay="100">Career growth & PPO</div>
            <div className="p-6 bg-white rounded-lg shadow" data-aos="fade-up" data-aos-delay="200">Flexible work & benefits</div>
          </div>
        </section>
      </main>
    </>
  );
}
