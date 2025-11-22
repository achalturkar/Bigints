// BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div
      className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
      data-aos="fade-up"
    >
      <img
        src={blog.banner}
        alt=""
        className="w-full h-48 object-cover rounded-lg"
      />

      <div className="mt-3">
        <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          {blog.category}
        </span>

        <h3 className="text-xl font-semibold mt-3">{blog.title}</h3>

        <p className="text-gray-600 mt-2">{blog.summary}</p>

        <div className="mt-3 text-sm text-gray-500">
          {blog.date} • {blog.readTime}
        </div>

        <Link
          to={`/blog/${blog.id}`}
          className="mt-4 inline-block text-[#1F3EFF] font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
