// JobSearch.jsx
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function JobSearch({ query, setQuery }) {
  return (
    <div className="flex items-center gap-3" data-aos="fade-right">
      <div className="flex-1">
        <label className="sr-only">Search jobs</label>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search roles, skills, keywords (e.g., React, Java, Marketing)"
            className="w-full border rounded-lg p-3 pl-12 focus:outline-none focus:ring-2 focus:ring-[#1F3EFF]"
          />
          <div className="absolute left-4 top-3.5 text-gray-400"><FaSearch /></div>
        </div>
      </div>

      <div className="hidden md:block">
        <button
          onClick={() => setQuery("")}
          className="px-4 py-2 rounded-lg border text-sm"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
