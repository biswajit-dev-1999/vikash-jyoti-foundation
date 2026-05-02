import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import { impactStats } from "@/data";
import {
  TrendingUp, Heart, Users, MapPin, Star, GraduationCap, Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Discover the real-world impact Vikas Jyoti Foundation has made through healthcare camps, disability support, rural development, and education programs.",
};

// Resolve icon names from data strings
const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Users,
  Heart,
  HandHeart: Heart,
  MapPin,
  Star,
  GraduationCap,
};

// Resolve Tailwind color strings → actual gradient CSS
function resolveStoryGradient(color: string): string {
  if (color.includes("red"))    return "linear-gradient(135deg,#f87171,#f43f5e)";
  if (color.includes("purple")) return "linear-gradient(135deg,#c084fc,#8b5cf6)";
  if (color.includes("blue"))   return "linear-gradient(135deg,#60a5fa,#6366f1)";
  if (color.includes("green"))  return "linear-gradient(135deg,#4ade80,#16a34a)";
  return "linear-gradient(135deg,#4ade80,#16a34a)";
}

const stories = [
  {
    quote: "The health camp organized by Vikas Jyoti Foundation identified my diabetes at an early stage. I got free medicine and regular check-ups. It saved my life.",
    name: "Ramesh Pradhan",
    location: "Kendrapara, Odisha",
    program: "Healthcare Camp",
    gradient: "linear-gradient(135deg,#f87171,#f43f5e)",
    accentColor: "#ef4444",
  },
  {
    quote: "I received a wheelchair and vocational training through their disability support program. Today I run a small tailoring business and support my family.",
    name: "Sunita Behera",
    location: "Cuttack, Odisha",
    program: "Disability Support",
    gradient: "linear-gradient(135deg,#c084fc,#8b5cf6)",
    accentColor: "#8b5cf6",
  },
  {
    quote: "The scholarship helped me continue my studies. I am now preparing for competitive exams and my family believes in my future for the first time.",
    name: "Anita Nayak",
    location: "Bhubaneswar, Odisha",
    program: "Education Support",
    gradient: "linear-gradient(135deg,#60a5fa,#6366f1)",
    accentColor: "#3b82f6",
  },
];

const sdgGoals = [
  { num: "SDG 1", title: "No Poverty" },
  { num: "SDG 3", title: "Good Health" },
  { num: "SDG 4", title: "Quality Education" },
  { num: "SDG 5", title: "Gender Equality" },
  { num: "SDG 10", title: "Reduced Inequalities" },
  { num: "SDG 11", title: "Sustainable Communities" },
];

export default function ImpactPage() {
  return (
    <>
      <style>{`
        /* ── Hero ── */
        .impact-hero {
          padding: 4.5rem 0 3.5rem;
          background: linear-gradient(135deg,#f0fdf4 0%,#dcfce7 50%,#fefce8 100%);
          text-align: center;
        }
        .impact-hero-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 1.25rem;
        }
        @media (min-width: 640px)  { .impact-hero-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .impact-hero-inner { padding: 0 2rem; } }

        .impact-tag {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.35rem 1rem; border-radius: 9999px;
          background: #dcfce7; border: 1px solid #bbf7d0;
          color: #15803d; font-size: 0.78rem; font-weight: 700;
          margin-bottom: 1.25rem;
        }
        .impact-h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800; color: #111827; line-height: 1.1; margin-bottom: 1rem;
        }
        .impact-h1 .gl {
          background: linear-gradient(135deg,#15803d,#22c55e,#86efac);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .impact-hero-sub {
          font-size: clamp(0.9rem, 2vw, 1.05rem);
          color: #4b5563; line-height: 1.75; max-width: 680px; margin: 0 auto;
        }

        /* ── Stats Section ── */
        .stats-section {
          padding: 4.5rem 0;
          background: #fff;
        }
        .stats-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 1.25rem;
        }
        @media (min-width: 640px)  { .stats-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .stats-inner { padding: 0 2rem; } }
        .stats-grid {
          display: grid; gap: 1.25rem;
        }
        @media (min-width: 640px)  { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .stats-grid { grid-template-columns: repeat(3, 1fr); } }

        .stat-big-card {
          background: linear-gradient(135deg,#f0fdf4,#dcfce7);
          border: 1px solid #bbf7d0;
          border-radius: 1.5rem;
          padding: 2rem;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
          cursor: default;
        }
        .stat-big-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(22,163,74,0.12);
          border-color: #4ade80;
        }
        .stat-icon-wrap {
          width: 54px; height: 54px;
          border-radius: 0.875rem;
          background: linear-gradient(135deg,#16a34a,#22c55e);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.25rem;
          box-shadow: 0 4px 14px rgba(22,163,74,0.25);
          transition: transform 0.25s;
        }
        .stat-big-card:hover .stat-icon-wrap { transform: scale(1.1); }
        .stat-big-num {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 800; color: #15803d;
          line-height: 1; margin-bottom: 0.4rem;
        }
        .stat-big-label {
          font-size: 1rem; font-weight: 700; color: #111827; margin-bottom: 0.25rem;
        }
        .stat-big-desc { font-size: 0.85rem; color: #6b7280; }

        /* ── Stories ── */
        .stories-section {
          padding: 4.5rem 0;
          background: #f9fafb;
        }
        .stories-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 1.25rem;
        }
        @media (min-width: 640px)  { .stories-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .stories-inner { padding: 0 2rem; } }
        .stories-hd {
          text-align: center; margin-bottom: 3rem;
        }
        .stories-hd h2 {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 700; color: #111827; margin-bottom: 0.5rem;
        }
        .stories-hd p {
          font-size: 0.95rem; color: #6b7280;
          max-width: 540px; margin: 0 auto; line-height: 1.7;
        }
        .stories-grid {
          display: grid; gap: 1.5rem;
        }
        @media (min-width: 640px)  { .stories-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .stories-grid { grid-template-columns: repeat(3, 1fr); } }

        .story-card {
          background: #fff;
          border-radius: 1.5rem;
          border: 1px solid #f3f4f6;
          padding: 1.75rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          display: flex; flex-direction: column;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .story-card:hover {
          border-color: #bbf7d0;
          box-shadow: 0 12px 30px rgba(22,163,74,0.08);
          transform: translateY(-4px);
        }
        .story-quote-icon {
          width: 44px; height: 44px;
          border-radius: 0.75rem;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.25rem;
          flex-shrink: 0;
        }
        .story-quote-text {
          font-size: 0.9rem;
          color: #4b5563;
          line-height: 1.75;
          font-style: italic;
          flex: 1;
          margin-bottom: 1.25rem;
        }
        .story-footer {
          border-top: 1px solid #f3f4f6;
          padding-top: 1rem;
        }
        .story-name { font-size: 0.95rem; font-weight: 700; color: #111827; }
        .story-location {
          display: flex; align-items: center; gap: 0.3rem;
          font-size: 0.8rem; color: #9ca3af; margin-top: 0.25rem;
        }
        .story-badge {
          display: inline-block;
          margin-top: 0.625rem;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #fff;
        }

        /* ── SDG Section ── */
        .sdg-section {
          padding: 4.5rem 0;
          background: #fff;
        }
        .sdg-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 1.25rem; text-align: center;
        }
        @media (min-width: 640px)  { .sdg-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .sdg-inner { padding: 0 2rem; } }
        .sdg-h2 {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 700; color: #111827; margin-bottom: 0.5rem;
        }
        .sdg-sub {
          font-size: 0.95rem; color: #6b7280;
          margin-bottom: 2.5rem; max-width: 540px; margin-left: auto; margin-right: auto;
          line-height: 1.7;
        }
        .sdg-grid {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 0.875rem;
        }
        .sdg-chip {
          padding: 0.75rem 1.25rem;
          background: #f0fdf4;
          border: 2px solid #bbf7d0;
          border-radius: 1rem;
          text-align: center;
          min-width: 120px;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          cursor: default;
        }
        .sdg-chip:hover {
          background: #16a34a; border-color: #16a34a; transform: scale(1.05);
        }
        .sdg-chip:hover .sdg-num { color: #fff; }
        .sdg-chip:hover .sdg-title { color: rgba(255,255,255,0.85); }
        .sdg-num { font-size: 0.875rem; font-weight: 800; color: #15803d; }
        .sdg-title { font-size: 0.75rem; color: #4b5563; margin-top: 0.2rem; font-weight: 500; }

        /* ── Divider banner ── */
        .counter-banner {
          display: grid; gap: 0;
          background: linear-gradient(135deg,#15803d,#16a34a,#22c55e);
        }
        @media (min-width: 640px)  { .counter-banner { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .counter-banner { grid-template-columns: repeat(4, 1fr); } }
        .counter-item {
          padding: 2rem;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.15);
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }
        .counter-num { font-size: 2rem; font-weight: 800; color: #fff; line-height: 1; }
        .counter-lbl { font-size: 0.8rem; color: rgba(255,255,255,0.8); margin-top: 0.3rem; font-weight: 500; }
      `}</style>

      {/* Hero */}
      <section className="impact-hero">
        <div className="impact-hero-inner">
          <div className="impact-tag">
            <TrendingUp size={14} />
            Our Impact
          </div>
          <h1 className="impact-h1">
            Measuring What <span className="gl">Matters</span>
          </h1>
          <p className="impact-hero-sub">
            Behind every number is a story of transformation. Here is a snapshot of the change we have created together with your support.
          </p>
        </div>
      </section>

      {/* Counter Banner */}
      <div className="counter-banner">
        {[
          { num: "5,000+", lbl: "Lives Impacted" },
          { num: "120+", lbl: "Health Camps" },
          { num: "800+", lbl: "Assistive Devices" },
          { num: "15+", lbl: "Villages Covered" },
        ].map((c) => (
          <div key={c.lbl} className="counter-item">
            <div className="counter-num">{c.num}</div>
            <div className="counter-lbl">{c.lbl}</div>
          </div>
        ))}
      </div>

      {/* Stats Cards */}
      <section className="stats-section">
        <div className="stats-inner">
          <div
            style={{
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 1rem",
                borderRadius: "9999px",
                background: "#dcfce7",
                border: "1px solid #bbf7d0",
                color: "#15803d",
                fontSize: "0.78rem",
                fontWeight: 700,
                marginBottom: "0.875rem",
              }}
            >
              <TrendingUp size={13} />
              Program Outcomes
            </div>
            <h2
              style={{
                fontSize: "clamp(1.5rem,3vw,2.25rem)",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "0.5rem",
              }}
            >
              Impact by the Numbers
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#6b7280", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
              Every metric represents a real person whose life has changed because of collective generosity.
            </p>
          </div>

          <div className="stats-grid">
            {impactStats.map((stat) => {
              const Icon = iconMap[stat.icon] || Heart;
              return (
                <div key={stat.label} className="stat-big-card">
                  <div className="stat-icon-wrap">
                    <Icon size={26} color="white" />
                  </div>
                  <div className="stat-big-num">{stat.value}</div>
                  <div className="stat-big-label">{stat.label}</div>
                  <div className="stat-big-desc">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stories of Change */}
      <section className="stories-section">
        <div className="stories-inner">
          <div className="stories-hd">
            <h2>Stories of Change</h2>
            <p>The true measure of our impact is in the voices of those whose lives have been transformed.</p>
          </div>

          <div className="stories-grid">
            {stories.map((story, index) => (
              <div key={index} className="story-card">
                <div className="story-quote-icon" style={{ background: story.gradient }}>
                  <Quote size={20} color="white" />
                </div>
                <p className="story-quote-text">"{story.quote}"</p>
                <div className="story-footer">
                  <div className="story-name">{story.name}</div>
                  <div className="story-location">
                    <MapPin size={12} color="#9ca3af" />
                    {story.location}
                  </div>
                  <span className="story-badge" style={{ background: story.gradient }}>
                    {story.program}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="sdg-section">
        <div className="sdg-inner">
          <h2 className="sdg-h2">Aligned with Global Goals</h2>
          <p className="sdg-sub">
            Our work contributes to multiple United Nations Sustainable Development Goals.
          </p>
          <div className="sdg-grid">
            {sdgGoals.map((sdg) => (
              <div key={sdg.num} className="sdg-chip">
                <div className="sdg-num">{sdg.num}</div>
                <div className="sdg-title">{sdg.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Be Part of Our Impact Story"
        subtitle="Your support makes every statistic possible. Donate today and help us expand our reach to more communities."
      />
    </>
  );
}
