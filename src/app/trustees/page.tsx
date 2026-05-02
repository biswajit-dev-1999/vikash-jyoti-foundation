import type { Metadata } from "next";
import LeadershipCard from "@/components/cards/LeadershipCard";
import CTASection from "@/components/sections/CTASection";
import { trustees } from "@/data";
import { CheckCircle, Award, Users, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Trustees",
  description:
    "Meet the dedicated board of trustees leading Vikas Jyoti Foundation's mission of inclusive community development in Odisha.",
};

export default function TrusteesPage() {
  return (
    <>
      <style>{`
        .trustees-hero {
          padding: 4rem 0 3rem;
          background: linear-gradient(135deg,#f0fdf4,#dcfce7,#fefce8);
          text-align: center;
        }
        .trustees-hero-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 1.25rem;
        }
        @media (min-width: 640px) { .trustees-hero-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .trustees-hero-inner { padding: 0 2rem; } }
        .trustees-h1 {
          font-size: clamp(2rem,5vw,3.5rem);
          font-weight: 800; color: #111827; line-height: 1.1; margin-bottom: 1rem;
        }
        .trustees-sub {
          font-size: clamp(0.9rem,2vw,1.05rem);
          color: #4b5563; line-height: 1.7; max-width: 700px; margin: 0 auto;
        }
        .trustees-grid-section {
          padding: 4rem 0;
          background: #fff;
        }
        .trustees-grid-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 1.25rem;
          display: grid; gap: 1.5rem;
        }
        @media (min-width: 640px) { .trustees-grid-inner { padding: 0 1.5rem; grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .trustees-grid-inner { padding: 0 2rem; grid-template-columns: repeat(4, 1fr); } }

        .governance-section { padding: 4rem 0; background: #f9fafb; }
        .governance-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 1.25rem;
        }
        @media (min-width: 640px) { .governance-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .governance-inner { padding: 0 2rem; } }
        .governance-grid {
          display: grid; gap: 1.25rem;
        }
        @media (min-width: 640px) { .governance-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .governance-grid { grid-template-columns: repeat(4, 1fr); } }
        .gov-card {
          background: #fff; border-radius: 1.25rem;
          border: 1px solid #f3f4f6; padding: 1.75rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .gov-card:hover { border-color: #bbf7d0; box-shadow: 0 8px 24px rgba(22,163,74,0.08); }
        .gov-icon {
          width: 48px; height: 48px; border-radius: 0.875rem;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .gov-title { font-size: 1rem; font-weight: 700; color: #111827; margin-bottom: 0.5rem; }
        .gov-desc { font-size: 0.85rem; color: #6b7280; line-height: 1.65; }

        .sec-hd { text-align: center; margin-bottom: 2.5rem; }
        .sec-hd h2 { font-size: clamp(1.4rem,3vw,2.25rem); font-weight: 700; color: #111827; margin-bottom: 0.5rem; }
        .sec-hd p { font-size: 0.95rem; color: #6b7280; max-width: 560px; margin: 0 auto; line-height: 1.7; }
        .page-tag {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.3rem 0.9rem;
          background: #dcfce7; color: #15803d;
          font-size: 0.78rem; font-weight: 700;
          border-radius: 9999px; border: 1px solid #bbf7d0;
          margin-bottom: 1rem;
        }
      `}</style>

      {/* Hero */}
      <section className="trustees-hero">
        <div className="trustees-hero-inner">
          <div className="page-tag">
            <Users size={14} />
            Leadership
          </div>
          <h1 className="trustees-h1">
            Board of{" "}
            <span style={{
              background: "linear-gradient(135deg,#15803d,#22c55e,#86efac)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Trustees</span>
          </h1>
          <p className="trustees-sub">
            Our foundation is led by a dedicated and diverse board — each bringing unique expertise and a shared commitment to community development, social justice, and inclusive growth.
          </p>
        </div>
      </section>

      {/* Trustees Grid */}
      <section className="trustees-grid-section">
        <div className="trustees-grid-inner">
          {trustees.map((trustee, index) => (
            <LeadershipCard key={trustee.id} {...trustee} index={index} />
          ))}
        </div>
      </section>

      {/* Governance */}
      <section className="governance-section">
        <div className="governance-inner">
          <div className="sec-hd">
            <h2>Our Governance Principles</h2>
            <p>We uphold the highest standards of transparency, accountability, and ethical conduct.</p>
          </div>
          <div className="governance-grid">
            {[
              { icon: CheckCircle, title: "Transparency", desc: "All financial records and impact reports are publicly accessible and regularly audited.", bg: "linear-gradient(135deg,#16a34a,#22c55e)" },
              { icon: Award, title: "Accountability", desc: "We hold ourselves accountable to our beneficiaries, donors, and the broader community.", bg: "linear-gradient(135deg,#0d9488,#16a34a)" },
              { icon: Users, title: "Inclusion", desc: "Our programs are designed to reach the most marginalized and underserved populations.", bg: "linear-gradient(135deg,#059669,#10b981)" },
              { icon: Briefcase, title: "Professionalism", desc: "We maintain the highest standards of professionalism in program design and delivery.", bg: "linear-gradient(135deg,#15803d,#0d9488)" },
            ].map((item) => (
              <div key={item.title} className="gov-card">
                <div className="gov-icon" style={{ background: item.bg }}>
                  <item.icon size={24} color="white" />
                </div>
                <div className="gov-title">{item.title}</div>
                <p className="gov-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Leadership Network"
        subtitle="Interested in contributing your expertise to our mission? We welcome partnerships and advisory support."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Learn More"
        secondaryHref="/about"
      />
    </>
  );
}
