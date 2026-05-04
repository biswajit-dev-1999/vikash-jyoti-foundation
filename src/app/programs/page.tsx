"use client";

// Remove this line since metadata can't be used in Client Components
// import type { Metadata } from "next";

import { useState } from "react";
import ProgramCard from "@/components/cards/ProgramCard";
import CTASection from "@/components/sections/CTASection";
import { programs } from "@/data";
import { Sparkles, Target, Heart } from "lucide-react";

// You can still set page title using useEffect or next/head
// Or use a custom hook for SEO

const approachItems = [
  {
    icon: Target,
    title: "Community-Driven",
    desc: "We begin every program with extensive community consultation to understand real needs and co-design solutions with the people we serve.",
    gradientClass: "from-green-600 to-green-400",
  },
  {
    icon: Sparkles,
    title: "Evidence-Based",
    desc: "All our interventions are grounded in research and best practices, with regular monitoring and evaluation to ensure effectiveness.",
    gradientClass: "from-teal-700 to-green-600",
  },
  {
    icon: Heart,
    title: "Holistic Support",
    desc: "We address the interconnected challenges communities face — from health and education to livelihood and social rights.",
    gradientClass: "from-teal-600 to-green-500",
  },
];

// Define categories based on program titles
const CATEGORIES = ["All", "Healthcare", "Disability", "Rural", "Women & Child", "Education"];

// Map program titles to categories
const getProgramCategory = (title: string): string => {
  if (title.includes("Healthcare")) return "Healthcare";
  if (title.includes("Disability")) return "Disability";
  if (title.includes("Rural")) return "Rural";
  if (title.includes("Women")) return "Women & Child";
  if (title.includes("Education")) return "Education";
  return "Other";
};

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const filteredPrograms = activeCategory === "All"
    ? programs
    : programs.filter(p => getProgramCategory(p.title) === activeCategory);

  return (
    <>
      <style>{`
        /* ── Page Hero ── */
        .prog-hero {
          padding: 4.5rem 0 3.5rem;
          background: linear-gradient(135deg,#f0fdf4 0%,#dcfce7 50%,#fefce8 100%);
          text-align: center;
        }
        .prog-hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        @media (min-width: 640px)  { .prog-hero-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .prog-hero-inner { padding: 0 2rem; } }

        .prog-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 1rem;
          border-radius: 9999px;
          background: #dcfce7;
          border: 1px solid #bbf7d0;
          color: #15803d;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          margin-bottom: 1.25rem;
        }
        .prog-h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #111827;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .prog-h1 .gl {
          background: linear-gradient(135deg,#15803d,#22c55e,#86efac);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .prog-hero-sub {
          font-size: clamp(0.9rem, 2vw, 1.05rem);
          color: #4b5563;
          line-height: 1.75;
          max-width: 720px;
          margin: 0 auto;
        }

        /* ── Category Filter ── */
        .filter-section {
          padding: 1.5rem 0 0;
          background: #fff;
        }
        .filter-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        @media (min-width: 640px)  { .filter-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .filter-inner { padding: 0 2rem; } }
        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 0;
        }
        .filter-btn {
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid #e2e8f0;
          background: #fff;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .filter-btn:hover {
          border-color: #22c55e;
          background: #f0fdf4;
          color: #15803d;
        }
        .filter-btn-active {
          background: #16a34a;
          border-color: #16a34a;
          color: #fff;
        }
        .filter-btn-active:hover {
          background: #15803d;
          border-color: #15803d;
          color: #fff;
        }

        /* ── Programs Grid ── */
        .prog-grid-section {
          padding: 2.5rem 0 4.5rem;
          background: #fff;
        }
        .prog-grid-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        @media (min-width: 640px)  { .prog-grid-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .prog-grid-inner { padding: 0 2rem; } }
        .prog-grid {
          display: grid;
          gap: 1.5rem;
        }
        @media (min-width: 640px)  { .prog-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .prog-grid { grid-template-columns: repeat(3, 1fr); } }
        
        .no-results {
          text-align: center;
          padding: 3rem;
          color: #6b7280;
          font-size: 1rem;
        }

        /* ── Approach ── */
        .approach-section {
          padding: 4.5rem 0;
          background: #f9fafb;
        }
        .approach-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        @media (min-width: 640px)  { .approach-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .approach-inner { padding: 0 2rem; } }
        .approach-hd {
          text-align: center;
          margin-bottom: 3rem;
        }
        .approach-hd h2 {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.5rem;
        }
        .approach-hd p {
          font-size: 0.95rem;
          color: #6b7280;
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .approach-grid {
          display: grid;
          gap: 1.5rem;
        }
        @media (min-width: 640px)  { .approach-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .approach-grid { grid-template-columns: repeat(3, 1fr); } }
        .approach-card {
          background: #fff;
          border-radius: 1.5rem;
          border: 1px solid #f3f4f6;
          padding: 2rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .approach-card:hover {
          border-color: #bbf7d0;
          box-shadow: 0 12px 32px rgba(22,163,74,0.1);
          transform: translateY(-4px);
        }
        .approach-icon {
          width: 54px;
          height: 54px;
          border-radius: 0.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          box-shadow: 0 4px 14px rgba(0,0,0,0.1);
          transition: transform 0.25s;
        }
        .approach-card:hover .approach-icon { transform: scale(1.1); }
        .approach-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.625rem;
          transition: color 0.2s;
        }
        .approach-card:hover .approach-title { color: #15803d; }
        .approach-desc {
          font-size: 0.875rem;
          color: #6b7280;
          line-height: 1.7;
        }

        /* ── Focus badges banner ── */
        .focus-banner {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          padding: 2rem 1.25rem;
          background: #f0fdf4;
          border-top: 1px solid #bbf7d0;
          border-bottom: 1px solid #bbf7d0;
        }
        .focus-badge {
          padding: 0.4rem 1.1rem;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid #bbf7d0;
          background: #fff;
          color: #15803d;
          white-space: nowrap;
          transition: background 0.2s, color 0.2s;
        }
        .focus-badge:hover { background: #16a34a; color: #fff; border-color: #16a34a; }
      `}</style>

      {/* Hero */}
      <section className="prog-hero">
        <div className="prog-hero-inner">
          <div className="prog-tag">
            <Sparkles size={14} />
            What We Do
          </div>
          <h1 className="prog-h1">
            Our <span className="gl">Programs</span>
          </h1>
          <p className="prog-hero-sub">
            Each of our programs is designed with deep community engagement and evidence-based approaches to create lasting, meaningful change in the lives of those we serve.
          </p>
        </div>
      </section>

      {/* Category Filter Buttons */}
      <section className="filter-section">
        <div className="filter-inner">
          <div className="filter-buttons">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? "filter-btn-active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Area quick badges */}
      {/* <div className="focus-banner">
        {["Healthcare & Awareness", "Disability Support", "Rural Development", "Women & Child Welfare", "Education & Upliftment"].map((f) => (
          <div key={f} className="focus-badge">{f}</div>
        ))}
      </div> */}

      {/* Programs Grid */}
      <section className="prog-grid-section">
        <div className="prog-grid-inner">
          {filteredPrograms.length === 0 ? (
            <div className="no-results">
              No programs found in this category. Please try another category.
            </div>
          ) : (
            <div className="prog-grid">
              {filteredPrograms.map((program, index) => (
                <ProgramCard key={program.id} {...program} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Approach */}
      <section className="approach-section">
        <div className="approach-inner">
          <div className="approach-hd">
            <h2>Our Approach</h2>
            <p>How we design and deliver programs that create genuine, sustained impact.</p>
          </div>

          <div className="approach-grid">
            {approachItems.map((item, i) => (
              <div key={i} className="approach-card">
                <div className={`approach-icon bg-gradient-to-br ${item.gradientClass}`}>
                  <item.icon size={26} color="white" />
                </div>
                <div className="approach-title">{item.title}</div>
                <p className="approach-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Together for a Better Tomorrow"
        subtitle="Corporations, institutions, and individuals can partner with us to co-create and fund programs that align with your CSR or philanthropic goals."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="Read Impact Report"
        secondaryHref="/impact"
      />
    </>
  );
}