import React from "react";
import CountUp from "react-countup";

export default function Counter({ end, label }) {
  return (
    <div className="card p-6 text-center" data-aos="flip-up">
      <h3 className="text-3xl font-bold">
        <CountUp end={end} duration={2} />
      </h3>
      <p className="text-sm mt-2 text-gray-600">{label}</p>
    </div>
  );
}
