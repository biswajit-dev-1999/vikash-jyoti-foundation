import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import { CheckCircle, Eye, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Vikas Jyoti Foundation — our story, vision, mission, and values as a registered NGO working in Odisha, India.",
};

export default function AboutPage() {
  return (
    <>
      <style>{`
        .page-hero {
          padding: 4rem 0 3rem;
          background: linear-gradient(135deg,#f0fdf4 0%,#dcfce7 50%,#fefce8 100%);
        }
        .page-hero-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 1.25rem;
          text-align: center;
        }
        @media (min-width: 640px) { .page-hero-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .page-hero-inner { padding: 0 2rem; } }

        .page-hero-tag {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.3rem 0.9rem;
          background: #dcfce7; color: #15803d;
          font-size: 0.78rem; font-weight: 700;
          border-radius: 9999px; border: 1px solid #bbf7d0;
          margin-bottom: 1rem;
        }
        .page-hero-h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800; color: #111827;
          line-height: 1.1; margin-bottom: 1rem;
        }
        .page-hero-sub {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: #4b5563; line-height: 1.7;
          max-width: 700px; margin: 0 auto;
        }

        /* Foundation card */
        .foundation-section {
          padding: 4rem 0;
          background: #fff;
        }
        .foundation-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 1.25rem;
          display: grid; gap: 3rem; align-items: start;
        }
        @media (min-width: 640px) { .foundation-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) {
          .foundation-inner { grid-template-columns: 1fr 1fr; padding: 0 2rem; }
        }
        .foundation-card {
          background: #fff;
          border-radius: 1.5rem;
          border: 1px solid #f0fdf4;
          box-shadow: 0 4px 24px rgba(22,163,74,0.06);
          overflow: hidden;
        }
        .foundation-card-header {
          background: linear-gradient(135deg,#15803d,#22c55e);
          padding: 1.5rem;
          color: white;
        }
        .foundation-card-header h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; }
        .foundation-card-header p { font-size: 0.875rem; color: rgba(255,255,255,0.85); line-height: 1.65; }
        .foundation-mini-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          background: #f0fdf4;
        }
        .foundation-mini-item {
          background: #fff; padding: 1.25rem; text-align: center;
        }
        .foundation-mini-num { font-size: 1.6rem; font-weight: 800; color: #15803d; }
        .foundation-mini-lbl { font-size: 0.78rem; color: #6b7280; margin-top: 2px; }

        /* Vision/Mission */
        .vm-section { padding: 4rem 0; background: #f9fafb; }
        .vm-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 1.25rem;
          display: grid; gap: 1.5rem;
        }
        @media (min-width: 640px) { .vm-inner { padding: 0 1.5rem; } }
        @media (min-width: 768px) { .vm-inner { grid-template-columns: 1fr 1fr; padding: 0 2rem; } }
        .vm-card {
          background: linear-gradient(135deg,#f0fdf4,#dcfce7);
          border: 1px solid #bbf7d0;
          border-radius: 1.5rem;
          padding: 2rem;
        }
        .vm-icon {
          width: 52px; height: 52px;
          border-radius: 0.875rem;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.25rem;
          box-shadow: 0 4px 12px rgba(22,163,74,0.2);
        }
        .vm-title { font-size: 1.4rem; font-weight: 700; color: #111827; margin-bottom: 0.75rem; }
        .vm-text { font-size: 0.925rem; color: #4b5563; line-height: 1.75; }

        /* Values */
        .values-section { padding: 4rem 0; background: #fff; }
        .values-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 1.25rem;
        }
        @media (min-width: 640px) { .values-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .values-inner { padding: 0 2rem; } }
        .values-grid {
          display: grid; gap: 1.25rem;
        }
        @media (min-width: 640px) { .values-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .values-grid { grid-template-columns: repeat(3, 1fr); } }
        .value-card {
          background: #fff; border: 1px solid #f3f4f6;
          border-radius: 1.25rem; padding: 1.5rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .value-card:hover { border-color: #bbf7d0; box-shadow: 0 8px 24px rgba(22,163,74,0.08); }
        .value-header { display: flex; align-items: center; gap: 0.625rem; margin-bottom: 0.625rem; }
        .value-title { font-size: 1rem; font-weight: 700; color: #111827; }
        .value-desc { font-size: 0.85rem; color: #6b7280; line-height: 1.65; }

        /* Timeline */
        .timeline-section { padding: 4rem 0; background: #f9fafb; }
        .timeline-inner {
          max-width: 800px; margin: 0 auto;
          padding: 0 1.25rem;
        }
        @media (min-width: 640px) { .timeline-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .timeline-inner { padding: 0 2rem; } }
        .timeline-list { position: relative; }
        .timeline-list::before {
          content: '';
          position: absolute;
          left: 28px; top: 0; bottom: 0;
          width: 2px;
          background: #bbf7d0;
        }
        .timeline-item { display: flex; gap: 1.25rem; padding-bottom: 2rem; }
        .timeline-dot {
          width: 56px; height: 56px; border-radius: 50%;
          background: linear-gradient(135deg,#16a34a,#22c55e);
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 0.65rem; font-weight: 800;
          text-align: center; line-height: 1.2;
          flex-shrink: 0; z-index: 1;
          box-shadow: 0 4px 12px rgba(22,163,74,0.3);
        }
        .timeline-body {
          flex: 1; background: #fff;
          border: 1px solid #f0fdf4;
          border-radius: 1rem; padding: 1.25rem;
          margin-top: 0.5rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }
        .timeline-title { font-size: 1rem; font-weight: 700; color: #111827; margin-bottom: 0.3rem; }
        .timeline-desc { font-size: 0.85rem; color: #6b7280; line-height: 1.65; }

        /* section heading helper */
        .sec-hd { text-align: center; margin-bottom: 2.5rem; }
        .sec-hd h2 { font-size: clamp(1.5rem,3vw,2.25rem); font-weight: 700; color: #111827; margin-bottom: 0.5rem; }
        .sec-hd p { font-size: 0.95rem; color: #6b7280; max-width: 560px; margin: 0 auto; line-height: 1.7; }
      `}</style>

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-tag">About Us</div>
          <h1 className="page-hero-h1">
            Our{" "}
            <span style={{
              background: "linear-gradient(135deg,#15803d,#22c55e,#86efac)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Story</span>
          </h1>
          <p className="page-hero-sub">
            Vikas Jyoti Foundation was established with a single, powerful belief: that every person, regardless of their circumstances, deserves access to healthcare, education, and opportunity.
          </p>
        </div>
      </section>

      {/* Foundation info */}
      <section className="foundation-section">
        <div className="foundation-inner">
          <div>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, color: "#111827", marginBottom: "1rem" }}>
              Who We Are
            </h2>
            <p style={{ color: "#4b5563", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
              Vikas Jyoti Foundation is a registered non-governmental organization based in Odisha, India. Founded with the vision of creating an equitable and inclusive society, we work tirelessly to uplift the marginalized through targeted interventions in healthcare, education, women & children empowerment and disability support.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.8, marginBottom: "1.75rem", fontSize: "0.95rem" }}>
              Our diverse team — including disability advocates, government officers, social workers — brings a multidisciplinary approach to community development.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem", marginBottom: "1.75rem" }}>
              {["Registered Non-Profit","Grassroots Approach","Transparent Governance","Community-First"].map((item) => (
                <div key={item} style={{ display:"flex", alignItems:"center", gap:"0.5rem", fontSize:"0.875rem", color:"#374151", fontWeight:500 }}>
                  <CheckCircle size={16} color="#16a34a" style={{ flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="foundation-card">
            <div className="foundation-card-header">
              <h3>Our Foundation</h3>
              <p>Registered under the laws of India, Vikas Jyoti Foundation operates with full transparency, accountability, and a commitment to the communities we serve across Odisha.</p>
            </div>
            <div className="foundation-mini-grid">
              {[
                { num: "2010+", lbl: "Established" },
                { num: "4+", lbl: "Trustees" },
                { num: "5+", lbl: "Focus Areas" },
                { num: "15+", lbl: "Villages Covered" },
              ].map((item) => (
                <div key={item.lbl} className="foundation-mini-item">
                  <div className="foundation-mini-num">{item.num}</div>
                  <div className="foundation-mini-lbl">{item.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vm-section">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.25rem" }}>
          <div className="sec-hd">
            <h2>Vision & Mission</h2>
            <p>The north star that guides every decision we make.</p>
          </div>
          <div className="vm-inner">
            {[
              {
                icon: Eye, title: "Our Vision",
                text: "A society where every individual, irrespective of caste, gender, disability, or economic status, enjoys equal access to healthcare, education, livelihood, and social dignity.",
                bg: "linear-gradient(135deg,#16a34a,#22c55e)",
              },
              {
                icon: Compass, title: "Our Mission",
                text: "To empower underserved communities in Odisha through targeted, community-driven programs in healthcare, disability support,women&child empowerment, and education — with transparency, compassion, and respect.",
                bg: "linear-gradient(135deg,#0d9488,#16a34a)",
              },
            ].map((item) => (
              <div key={item.title} className="vm-card">
                <div className="vm-icon" style={{ background: item.bg }}>
                  <item.icon size={26} color="white" />
                </div>
                <div className="vm-title">{item.title}</div>
                <p className="vm-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="values-inner">
          <div className="sec-hd">
            <h2>Our Core Values</h2>
            <p>These principles guide every decision we make and every action we take.</p>
          </div>
          <div className="values-grid">
            {[
              { title: "Compassion", desc: "We lead with empathy, treating every beneficiary with dignity and respect." },
              { title: "Transparency", desc: "Open books, honest reporting, and full accountability to our donors and community." },
              { title: "Inclusion", desc: "We serve the most marginalized — the disabled and the underserved." },
              { title: "Empowerment", desc: "We don't give aid — we build capacity and create lasting self-reliance." },
              { title: "Collaboration", desc: "We work with government, civil society, and communities as equal partners." },
              { title: "Excellence", desc: "We hold ourselves to the highest standards in program design, delivery, and impact." },
            ].map((val) => (
              <div key={val.title} className="value-card">
                <div className="value-header">
                  <CheckCircle size={20} color="#16a34a" style={{ flexShrink: 0 }} />
                  <div className="value-title">{val.title}</div>
                </div>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="timeline-inner">
          <div className="sec-hd">
            <h2>Our Journey</h2>
            <p>Milestones that shaped who we are today.</p>
          </div>
          <div className="timeline-list">
            {[
              { year: "Est.", title: "NGO Established", desc: "Vikas Jyoti Foundation registered with a vision to serve Odisha's underserved communities." },
              { year: "Early", title: "First Health Camp", desc: "Launched our first mobile health camp reaching 500+ villagers in  Kendrapara." },
              { year: "Growth", title: "Disability Program Launch", desc: "Began distributing assistive devices and conducting disability certification drives." },
              { year: "Scale", title: "Women Empowerment Drive", desc: "Launched self-help groups and skill development programs for women across 10 villages." },
              { year: "Today", title: "5,000+ Lives Impacted", desc: "Continuing to grow our reach and deepen impact across multiple districts of Odisha." },
            ].map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot">{item.year}</div>
                <div className="timeline-body">
                  <div className="timeline-title">{item.title}</div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Be Part of Our Story"
        subtitle="Join thousands of supporters helping Vikas Jyoti Foundation create a brighter, more equitable Odisha."
      />
    </>
  );
}
