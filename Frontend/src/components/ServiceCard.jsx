import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({title, desc, icon, link}) {
  return (
    <div className="card p-6 flex flex-col justify-between" data-aos="zoom-in">
      <div>
        <div className="text-4xl">{icon}</div>
        <h4 className="mt-4 font-semibold">{title}</h4>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>
      </div>
      <div className="mt-4">
        <Link to={link} className="text-royal font-medium">Learn more →</Link>
      </div>
    </div>
  );
}

