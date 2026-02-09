// ApplyForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function ApplyForm({ jobId, jobTitle }) {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const form = new FormData();
      form.append("jobId", jobId);
      form.append("jobTitle", jobTitle);
      form.append("name", data.name);
      form.append("email", data.email);
      form.append("phone", data.phone || "");
      form.append("linkedin", data.linkedin || "");
      form.append("coverLetter", data.coverLetter || "");
      if (data.resume?.[0]) form.append("resume", data.resume[0]);

      // POST to backend endpoint
      await axios.post("/api/careers/apply", form, { headers: { "Content-Type": "multipart/form-data" }});

      setStatus("Application submitted successfully. We'll contact you soon.");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("Submission failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-3">
      <input {...register("name", { required: true })} placeholder="Full name" className="w-full p-3 border rounded" />
      <input {...register("email", { required: true })} placeholder="Email" className="w-full p-3 border rounded" />
      <input {...register("phone")} placeholder="Phone" className="w-full p-3 border rounded" />
      <input {...register("linkedin")} placeholder="LinkedIn profile" className="w-full p-3 border rounded" />
      <textarea {...register("coverLetter")} placeholder="Cover letter (optional)" className="w-full p-3 border rounded" rows={4} />
      <div>
        <label className="block text-sm mb-1">Upload Resume (PDF / DOCX)</label>
        <input type="file" {...register("resume")} accept=".pdf,.doc,.docx" />
      </div>

      <div className="flex gap-2">
        <button type="submit" disabled={loading} className="btn-accent px-4 py-2 rounded">
          {loading ? "Submitting..." : "Submit Application"}
        </button>
        <button type="button" onClick={() => { reset(); setStatus(""); }} className="px-3 py-2 border rounded">Reset</button>
      </div>

      {status && <p className="text-sm mt-2 text-green-600">{status}</p>}
    </form>
  );
}
