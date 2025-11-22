import React from "react";

export default function Testimonial({ by, content }) {
  return (
    <div className="card p-6" data-aos="fade-up">
      <p className="text-gray-700">“{content}”</p>
      <div className="mt-4 text-sm text-gray-500">{by}</div>
    </div>
  );
}

