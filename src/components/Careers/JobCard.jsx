// JobCard.jsx
import React from "react";

export default function JobCard({ job, onView }) {
  return (
    <article className="p-5 bg-white rounded-lg shadow hover:shadow-lg transition" data-aos="fade-up">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <div className="text-sm text-gray-500 mt-1">{job.dept} • {job.type} • {job.location}</div>
          <p className="text-sm text-gray-600 mt-3 line-clamp-3">{job.description}</p>
        </div>

        <div className="text-right">
          <div className="text-sm text-gray-500">{job.salary}</div>
          <div className="mt-4 flex flex-col items-end gap-2">
            <button onClick={onView} className="text-royal font-medium">View Details</button>
            <a href={`mailto:contact@bigints.com?subject=Application%20for%20${encodeURIComponent(job.title)}`} className="text-sm text-gray-400">Apply via mail</a>
          </div>
        </div>
      </div>
    </article>
  );
}
