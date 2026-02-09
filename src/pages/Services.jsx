// Services.jsx
import React from "react";
import servicesData from "../components/Service/servicesData";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeroAll from "../components/HeroAll";


/**
 * Services main page: lists categories and services
 * Uses AOS animation attributes
 */

export default function Services() {
  return (
    <>   <Helmet>
      <title>Services – Bigint Technology  Software, Web, Marketing, Payroll Solutions</title>
      <meta
        name="description"
        content="Explore Bigints' services including digital marketing, IT solutions, web development, and payroll outsourcing to support your business growth."
      />
      <link rel="canonical" href="https://bigints.com/services" />
    </Helmet>
    
     <HeroAll
          title="Our Services"
          subtitle="End-to-end software, marketing, and HR services tailored to your business."
        />
    
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* <section className="text-center my-12 " data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Comprehensive marketing, technology, web and payroll solutions designed to accelerate growth and streamline operations.
          </p>
        </section> */}

       


        {servicesData.categories.map((category) => (
          <section
            id={category.id}
            key={category.id}
            className="mb-10"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold">{category.title}</h2>
                <p className="text-gray-500 mt-1">{category.short}</p>
              </div>
              <Link to={`/services#${category.id}`} className="text-royal hidden md:inline">
                Explore {category.title} →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((svc) => (
                <article
                  key={svc.slug}
                  className="card p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
                  data-aos="zoom-in"
                  data-aos-delay="80"
                >
                  <header>
                    <h3 className="text-xl font-semibold">{svc.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {svc.overview}
                    </p>
                  </header>

                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      to={`/services/${svc.slug}`}
                      className="text-royal font-medium"
                      aria-label={`Learn more about ${svc.title}`}
                    >
                      Learn more
                    </Link>

                    <div className="text-sm text-gray-500">{svc.tech?.slice(0, 2)?.join(", ")}</div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-12 text-center" data-aos="fade-up">
          <p className="text-gray-600">Want a targeted solution? <Link to="/contact" className="text-royal font-semibold">Contact our team</Link> for a consultation.</p>
        </section>
      </main>

    </>

  );
}
