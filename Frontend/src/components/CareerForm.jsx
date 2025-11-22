import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function CareerForm({ jobTitle, onSuccess }) {
  const { register, handleSubmit, reset } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
      if (data.resume && data.resume[0]) {
        formData.append("resume", data.resume[0]);
      }
      formData.append("jobTitle", jobTitle);

      await axios.post("/api/careers/apply", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      reset();
      onSuccess?.();
      alert("Application submitted. We'll contact you shortly.");
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("name", { required: true })} placeholder="Full name" className="w-full p-3 border rounded" />
      <input {...register("email", { required: true })} placeholder="Email" className="w-full p-3 border rounded" />
      <input {...register("phone")} placeholder="Phone" className="w-full p-3 border rounded" />
      <input {...register("linkedin")} placeholder="LinkedIn profile" className="w-full p-3 border rounded" />
      <textarea {...register("coverLetter")} placeholder="Cover letter" className="w-full p-3 border rounded" rows="4"></textarea>
      <div>
        <label className="block text-sm mb-1">Upload Resume (PDF/DOCX)</label>
        <input {...register("resume")} type="file" accept=".pdf,.doc,.docx" />
      </div>
      <button type="submit" disabled={submitting} className="btn-accent px-4 py-2 rounded-md">
        {submitting ? "Submitting..." : "Apply Now"}
      </button>
    </form>
  );
}

