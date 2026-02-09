import React, { useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import HeroAll from "../components/HeroAll";

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <Helmet>
                <title>Contact Bigint Technology – Get in Touch for IT & Business Services</title>
                <meta
                    name="description"
                    content="Contact Bigints for IT services, marketing solutions, payroll outsourcing, or web development."
                />
                <link rel="canonical" href="https://bigints.com/contact" />
            </Helmet>

            <HeroAll
                title="Contact Us"
                subtitle="Let’s discuss how we can support your business goals."
            />


            <div className="bg-gray-50 text-gray-900">


                {/* CONTENT */}
                <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-14">

                    {/* LEFT – FORM */}
                    <div
                        className="bg-white rounded-2xl shadow-xl p-8"
                        data-aos="fade-right"
                    >
                        <h2 className="text-3xl font-semibold text-[#0A0F2F] mb-6">
                            Send Us a Message
                        </h2>
                        <ContactForm />
                    </div>

                    {/* RIGHT – INFO */}
                    <div className="space-y-10" data-aos="fade-right">
                        <h2 className="text-3xl font-semibold text-[#1F3EFF]">
                            Office Information
                        </h2>

                        {/* Phone */}
                        <div className="flex items-start gap-5 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <FaPhoneAlt className="text-[#1F3EFF] text-2xl mt-1" />
                            <div>
                                <p className="font-semibold">Phone</p>
                                <p className="text-gray-600">+91 95299 72011</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-5 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <FaEnvelope className="text-[#1F3EFF] text-2xl mt-1" />
                            <div>
                                <p className="font-semibold">Email</p>
                                <p className="text-gray-600">contact@bigints.com</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-5 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <FaMapMarkerAlt className="text-[#1F3EFF] text-3xl mt-1" />
                            <div>
                                <p className="font-semibold">Address</p>
                                <p className="text-gray-600">
                                    131, Dronacharya Nagar, Parsodi, Trimurti Nagar, Nagpur, Maharashtra 440022
                                </p>
                            </div>
                        </div>

                        {/* MAP */}
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <div className="relative w-full h-[350px]">
                                <iframe
                                    title="Bigints Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.8861670216065!2d79.040435!3d21.117104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfdca1148299%3A0xb273d0904a731903!2sBigint%20Technology!5e0!3m2!1sen!2sin!4v1770621337822"
                                    className="absolute inset-0 w-full h-full"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
