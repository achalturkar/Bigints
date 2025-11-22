// ServiceDetail.jsx
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import servicesData from "../components/Service/servicesData";
import RequestQuoteModal from "../components/Service/RequestQuoteModal";

/**
 * ServiceDetail.jsx
 * Shows detail for a single service based on URL slug.
 * Slug is taken from :slug route param.
 */

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  // find the service in categories
  let found = null;
  let foundCategory = null;

  for (const cat of servicesData.categories) {
    const svc = cat.services.find((s) => s.slug === slug);
    if (svc) {
      found = svc;
      foundCategory = cat;
      break;
    }
  }

  if (!found) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-28 text-center">
        <h1 className="text-2xl font-semibold">Service not found</h1>
        <p className="text-gray-500 mt-2">We could not find the requested service. Please check the URL or return to <Link to="/services" className="text-royal">Services</Link>.</p>
      </main>
    );
  }

  // helpers
  const techChips = (arr = []) =>
    arr.map((t) => (
      <span key={t} className="text-sm px-3 py-1 border rounded-full text-navy mr-2 mb-2 inline-block bg-white/90">
        {t}
      </span>
    ));

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="md:flex md:items-start md:justify-between gap-8" data-aos="fade-up">
        <div className="md:flex-1">
          <p className="text-sm text-gray-500">{foundCategory.title}</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{found.title}</h1>
          <p className="text-gray-600 mt-4">{found.overview}</p>

          <div className="mt-6 flex gap-3">
            <button className="btn-accent px-4 py-2 rounded" onClick={() => setModalOpen(true)}>
              Request Quote
            </button>
            <button className="px-4 py-2 rounded border" onClick={() => navigate("/contact")}>
              Contact Sales
            </button>
          </div>
        </div>

        <aside className="mt-6 md:mt-0 md:w-72">
          <div className="card p-4">
            <h4 className="font-semibold">Quick Details</h4>
            <ul className="text-sm text-gray-600 mt-3 space-y-1">
              <li><strong>Category:</strong> {foundCategory.title}</li>
              <li><strong>Delivery:</strong> Custom (depends on scope)</li>
              <li><strong>Engagement:</strong> Fixed-price or retainer</li>
            </ul>
            <div className="mt-3">
              <h5 className="text-sm font-medium">Technologies</h5>
              <div className="mt-2">{techChips(found.tech)}</div>
            </div>
          </div>
        </aside>
      </div>

      {/* Features and Benefits */}
      <section className="grid md:grid-cols-2 gap-8 mt-10" data-aos="fade-up">
        <div className="card p-6">
          <h3 className="text-xl font-semibold">Features</h3>
          <ul className="mt-3 list-disc pl-5 text-gray-600">
            {found.features?.map((f, idx) => <li key={idx} className="mb-1">{f}</li>)}
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-semibold">Benefits (ROI-focused)</h3>
          <ul className="mt-3 list-disc pl-5 text-gray-600">
            {found.benefits?.map((b, idx) => <li key={idx} className="mb-1">{b}</li>)}
          </ul>
        </div>
      </section>

      {/* Process Flow */}
      <section className="mt-10" data-aos="fade-up">
        <h3 className="text-xl font-semibold">Process Flow</h3>
        <div className="mt-4 flex flex-col md:flex-row gap-3">
          {[
            "Discovery",
            "Design",
            "Build",
            "Deploy",
            "Optimize"
          ].map((step, idx) => (
            <div key={step} className="flex-1 card p-4 text-center">
              <div className="text-sm text-gray-400">Step {idx + 1}</div>
              <div className="mt-2 font-semibold">{step}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose Bigints */}
      <section className="mt-10" data-aos="fade-up">
        <h3 className="text-xl font-semibold">Why choose Bigints?</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-4">
            <h4 className="font-semibold">Domain Experts</h4>
            <p className="text-sm text-gray-600 mt-2">Cross-functional teams with deep industry experience.</p>
          </div>
          <div className="card p-4">
            <h4 className="font-semibold">Proven Delivery</h4>
            <p className="text-sm text-gray-600 mt-2">Enterprise-grade processes and transparent communication.</p>
          </div>
          <div className="card p-4">
            <h4 className="font-semibold">Security & Compliance</h4>
            <p className="text-sm text-gray-600 mt-2">Secure development practices and compliance support.</p>
          </div>
        </div>
      </section>

      {/* Case Study / Quick CTA */}
      {found.caseStudy && (
        <section className="mt-10 card p-6" data-aos="fade-up">
          <h4 className="font-semibold">Related Case Study</h4>
          <p className="text-gray-600 mt-2">{found.caseStudy}</p>
          <Link to="/blog" className="mt-3 inline-block text-royal">Read full case study →</Link>
        </section>
      )}

      {/* Request Quote modal */}
      <RequestQuoteModal
        service={found.title}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
}
