// RequestQuoteModal.jsx
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

/**
 * Reusable modal for "Request Quote".
 * - Accepts 'service' prop to include in form.
 * - Posts to /api/contact or /api/quote depending on your backend.
 *
 * Use it from ServiceDetail.jsx.
 */

export default function RequestQuoteModal({ service, isOpen, onClose }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // attach the service in payload
      const payload = { ...data, service };
      // send to backend endpoint (adjust to your API)
      await axios.post("/api/quote", payload);
      alert("Request received. We'll contact you shortly.");
      reset();
      onClose();
    } catch (err) {
      console.error(err);
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative bg-white max-w-2xl w-full rounded-2xl p-6 shadow-2xl" data-aos="zoom-in">
        <header className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">Request a Quote</h3>
            <p className="text-sm text-gray-500 mt-1">Service: <strong>{service}</strong></p>
          </div>
          <button className="text-gray-400" onClick={onClose} aria-label="Close">✕</button>
        </header>

        <form className="mt-4 space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input {...register("name", { required: true })} placeholder="Full name" className="p-3 border rounded" />
            <input {...register("email", { required: true })} placeholder="Work email" className="p-3 border rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input {...register("company")} placeholder="Company" className="p-3 border rounded" />
            <input {...register("phone")} placeholder="Phone (optional)" className="p-3 border rounded" />
          </div>

          <textarea {...register("message")} placeholder="Tell us about your project (timeline, budget, goals)" className="p-3 border rounded w-full" rows="4"></textarea>

          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
            <button type="submit" className="btn-accent px-5 py-2 rounded">Request Quote</button>
          </div>
        </form>
      </div>
    </div>
  );
}
