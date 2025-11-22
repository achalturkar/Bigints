// JobFilters.jsx
import React, { useMemo } from "react";

export default function JobFilters({ filters, setFilters, jobs }) {
  // derive options from jobs list
  const depts = useMemo(() => ["All", ...Array.from(new Set(jobs.map(j => j.dept)))], [jobs]);
  const types = useMemo(() => ["All", ...Array.from(new Set(jobs.map(j => j.type)))], [jobs]);
  const experiences = useMemo(() => ["All", ...Array.from(new Set(jobs.map(j => j.experience)))], [jobs]);
  const locations = useMemo(() => ["All", "Remote", ...Array.from(new Set(jobs.map(j => j.location)))], [jobs]);

  return (
    <div className="p-4 bg-white rounded-lg shadow" data-aos="fade-left">
      <h4 className="font-semibold text-[#0A0F2F]">Filters</h4>

      <div className="mt-3 space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Job Type</label>
          <select value={filters.type} onChange={(e) => setFilters(prev => ({...prev, type: e.target.value}))} className="w-full border rounded p-2">
            {types.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Department</label>
          <select value={filters.dept} onChange={(e) => setFilters(prev => ({...prev, dept: e.target.value}))} className="w-full border rounded p-2">
            {depts.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Experience</label>
          <select value={filters.experience} onChange={(e) => setFilters(prev => ({...prev, experience: e.target.value}))} className="w-full border rounded p-2">
            {experiences.map(x => <option key={x} value={x}>{x}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <select value={filters.location} onChange={(e) => setFilters(prev => ({...prev, location: e.target.value}))} className="w-full border rounded p-2">
            {locations.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="intern" checked={filters.internshipOnly} onChange={() => setFilters(prev => ({...prev, internshipOnly: !prev.internshipOnly}))} />
          <label htmlFor="intern" className="text-sm">Show internships only</label>
        </div>
      </div>
    </div>
  );
}
