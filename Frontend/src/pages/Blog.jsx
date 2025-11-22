// Blog.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import blogs from "../components/Blog/blogData";
import BlogCard from "../components/Blog/BlogCard";

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const filteredBlogs = blogs.filter((b) => {
    const matchesQuery =
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.summary.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || b.category === category;
    return matchesQuery && matchesCategory;
  });

  const uniqueCategories = ["All", ...new Set(blogs.map((b) => b.category))];

  return (
    <>
      <Helmet>
        <title>Bigints Blog – Technology, Marketing & Business Insights</title>
        <meta
          name="description"
          content="Read expert blogs from Bigints on IT development, marketing strategies, HR, payroll, business automation, and industry trends."
        />
        <link rel="canonical" href="https://bigints.com/blog" />
      </Helmet>

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#0A0F2F] to-[#1F3EFF] text-white py-16" data-aos="fade-up">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Bigints Blog</h1>
            <p className="mt-3 text-lg">Insights on Technology, Marketing, Cloud, AI & Business Growth</p>
          </div>
        </section>

        {/* Search + Filters */}
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full md:w-1/2 border p-3 rounded-lg"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              data-aos="fade-right"
            />

            {/* Category Filter */}
            <select
              className="border p-3 rounded-lg"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              data-aos="fade-left"
            >
              {uniqueCategories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Blogs list */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.length === 0 ? (
              <p className="text-gray-500">No blogs found.</p>
            ) : (
              filteredBlogs.map((b) => <BlogCard key={b.id} blog={b} />)
            )}
          </div>
        </div>
      </main>
    </>
  );
}
