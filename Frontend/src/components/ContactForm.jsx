import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/contact", form);

      setSuccess("Thank you! We will contact you shortly.");
      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
        service: "",
      });
    } catch (error) {
      setSuccess("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={submitForm}
      className="space-y-5 bg-gray-50 p-6 rounded-xl shadow-md"
      data-aos="zoom-in"
    >
      {/* Name */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1F3EFF]"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1F3EFF]"
        />
      </div>

      {/* Company */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Company</label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1F3EFF]"
        />
      </div>

      {/* Services Interested */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">
          Service Interested
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1F3EFF]"
        >
          <option value="">Select Service</option>
          <option>Marketing Services</option>
          <option>IT Services</option>
          <option>Web Services</option>
          <option>Payroll & HR Outsourcing</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          required
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1F3EFF]"
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#1F3EFF] to-[#0A0F2F] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Send Message
      </button>

      {success && (
        <p className="text-green-600 text-center font-medium">{success}</p>
      )}
    </form>
  );
};

export default ContactForm;
