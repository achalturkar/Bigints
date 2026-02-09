import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohit M",
    role: "Director – HR & Operations",
    company: "NoVaE Solutions",
    image: "/clients/client1.jpg",
    rating: 5,
    feedback:
      "BigInt Technology helped us streamline hiring and payroll operations. Their team understands business needs and delivers with precision.",
    bg: "from-indigo-500 to-blue-500",
  },
  {
    name: "Ananya V",
    role: "Managing Director",
    company: " Digital Pvt. Ltd.",
    image: "/clients/client2.jpg",
    rating: 5,
    feedback:
      "From software development to digital marketing, their solutions were scalable, reliable, and delivered on time. Highly recommended.",
    bg: "from-pink-500 to-rose-500",
  },
  {
    name: "Suresh M",
    role: "Director – Strategy",
    company: "Apex Group",
    image: "/clients/client3.jpg",
    rating: 5,
    feedback:
      "Their HR outsourcing model reduced our operational overhead significantly. A trustworthy partner for long-term growth.",
    bg: "from-emerald-500 to-teal-500",
  },
];


export default function TestimonialSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
        >
          <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
            Trusted by Business Leaders
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            What Clients say about working with BigInt Technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className={`relative rounded-2xl p-[1px] bg-gradient-to-r ${item.bg}`}
            >
              <div className="h-full rounded-2xl bg-white p-8 flex flex-col">
                
                {/* Stars */}
                <div className="flex mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-slate-700 text-sm leading-relaxed flex-grow">
                  “{item.feedback}”
                </p>

                {/* Client */}
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
