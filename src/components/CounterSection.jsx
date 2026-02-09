import CountUp from "react-countup";
import { Briefcase, Users, Layers, Globe } from "lucide-react";

const stats = [
  {
    icon: <Briefcase size={24} />,
    value: 1,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: <Users size={24} />,
    value: 12,
    suffix: "+",
    label: "Clients Served",
  },
  {
    icon: <Layers size={24} />,
    value: 20,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    icon: <Globe size={24} />,
    value: 6,
    suffix: "+",
    label: "Industries Covered",
  },
];

export default function CounterSection() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Driving Growth Through Expertise
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-300 max-w-xl mx-auto">
            Proven results across technology, marketing, and HR solutions.
          </p>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-xl bg-white/5 border border-white/10 px-6 py-7"
            >
              <div className="flex justify-center text-indigo-400 mb-3">
                {item.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                <CountUp end={item.value} duration={2} />
                {item.suffix}
              </h3>

              <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
