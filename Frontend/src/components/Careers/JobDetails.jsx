// JobDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import jobsData from "./jobsData";
import ApplyForm from "./ApplyForm";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const found = jobsData.find(j => j.id === id);
    setJob(found || null);
  }, [id]);

  if (!job) {
    return (
      <main className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-semibold">Job not found</h2>
        <p className="mt-3"><Link to="/careers" className="text-royal">Back to Careers</Link></p>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow" data-aos="fade-up">
        <div className="md:flex md:justify-between md:items-center">
          <div>
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <div className="text-sm text-gray-500 mt-1">{job.dept} • {job.type} • {job.location}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">{job.salary}</div>
            <div className="text-sm text-gray-400">Posted: {job.postedAt}</div>
          </div>
        </div>

        <section className="mt-6 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Job Description</h3>
            <p className="text-gray-700 mt-2">{job.description}</p>

            <h4 className="mt-4 font-semibold">Responsibilities</h4>
            <ul className="list-disc pl-5 text-gray-600 mt-2">
              {job.responsibilities?.map((r, i) => <li key={i}>{r}</li>)}
            </ul>

            <h4 className="mt-4 font-semibold">Required Skills</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {job.skills.map(s => <span key={s} className="text-sm px-3 py-1 border rounded-full bg-gray-50">{s}</span>)}
            </div>
          </div>

          <aside>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold">Eligibility</h4>
              <div className="text-sm text-gray-600 mt-2">Experience: {job.experience}</div>
              <div className="text-sm text-gray-600">Location: {job.location}</div>
              <div className="text-sm text-gray-600 mt-2">Perks: {job.perks?.join(", ")}</div>
            </div>

            <div className="mt-4 p-4 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Apply Now</h4>
              <p className="text-sm text-gray-500 mt-2">Fill the form below to apply for this role.</p>
              <ApplyForm jobId={job.id} jobTitle={job.title} />
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
