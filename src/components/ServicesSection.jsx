import React from "react";

const services = [
    {
        title: "Software Development",
        description:
            "Custom web applications, APIs, and enterprise software built for performance and scalability.",
        image: "/services/SD.jpg",
        gradient: "from-blue-600 to-indigo-600",
    },
    {
        title: "Digital Marketing",
        description:
            "SEO, paid ads, and growth marketing strategies that drive traffic, leads, and revenue.",
        image: "/services/DM2.jpg",
        gradient: "from-pink-600 to-rose-500",
    },
    {
        title: "HR Outsourcing",
        description:
            "Recruitment, payroll, and workforce management solutions for fast-growing businesses.",
        image: "/services/hr.jpg",
        gradient: "from-emerald-600 to-green-500",
    },
];

const ServicesSection = () => {
    return (
        <section className="relative py-16 bg-gradient-to-b from-slate-50 to-slate-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block text-xs font-semibold tracking-[0.3em] text-blue-600 uppercase">
                        What We Do
                    </span>

                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
                        Our Services
                    </h2>

                    {/* Decorative line */}
                    <div className="mx-auto mt-2 mb-3 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>

                    <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                        Technology, marketing, and HR solutions built for scalable business growth.
                    </p>
                </div>


                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                            {/* Gradient strip */}
                            <div
                                className={`h-2 w-full bg-gradient-to-r ${service.gradient}`}
                            />

                            {/* Image */}
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-blue-600 font-semibold">
                                        Explore Service
                                    </span>

                                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white transition">
                                        →
                                    </span>
                                </div>
                            </div>

                            {/* Hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} blur-2xl opacity-20`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
