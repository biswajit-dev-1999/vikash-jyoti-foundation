"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Heart, ArrowRight, Users, TreePine, GraduationCap,
  MapPin, Star, CheckCircle, Quote
} from "lucide-react";
import ProgramCard from "@/components/cards/ProgramCard";
import LeadershipCard from "@/components/cards/LeadershipCard";
import CTASection from "@/components/sections/CTASection";
import { programs, trustees, impactStats } from "@/data";

export default function HomePage() {
  return (
    <>
      <style>{`
        /* ── HERO ── */
        .hero-section {
          width: 100%;
          min-height: calc(100vh - 68px);
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #f0fdf4 70%, #fefce8 100%);
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 4rem 0;
        }
        .hero-blob-1 {
          position: absolute; top: -80px; right: -80px;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(134,239,172,0.35), transparent);
          pointer-events: none;
        }
        .hero-blob-2 {
          position: absolute; bottom: -60px; left: -60px;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(187,247,208,0.45), transparent);
          pointer-events: none;
        }
        .hero-content {
          position: relative;
          display: grid;
          gap: 3rem;
          align-items: center;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        @media (min-width: 640px) { .hero-content { padding: 0 1.5rem; } }
        @media (min-width: 1024px) {
          .hero-content { grid-template-columns: 1fr 1fr; padding: 0 2rem; }
        }

        /* Hero text */
        .hero-title {
          font-size: clamp(2.4rem, 6vw, 5rem);
          font-weight: 800;
          line-height: 1.08;
          color: #111827;
          margin-bottom: 1.25rem;
        }
        .hero-title .hl { color: #15803d; }
        .hero-title .gl {
          background: linear-gradient(135deg,#15803d,#22c55e,#86efac);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-sub {
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: #4b5563;
          line-height: 1.75;
          margin-bottom: 2.25rem;
          max-width: 520px;
        }
        .hero-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .hero-stat-num { font-size: 1.6rem; font-weight: 800; color: #15803d; line-height: 1; }
        .hero-stat-lbl { font-size: 0.75rem; color: #6b7280; font-weight: 500; margin-top: 2px; }

        /* Hero card */
        .hero-card {
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(22,163,74,0.12);
          border-radius: 1.75rem;
          padding: 1.75rem;
          box-shadow: 0 20px 60px rgba(22,163,74,0.08), 0 4px 16px rgba(0,0,0,0.05);
          position: relative;
        }
        .hero-quote-card {
          background: linear-gradient(135deg, #16a34a, #22c55e);
          border-radius: 1.25rem;
          padding: 1.5rem;
          color: white;
          margin-bottom: 1rem;
        }
        .hero-quote-text { font-size: 1.05rem; font-weight: 600; line-height: 1.5; margin: 0.75rem 0; }
        .hero-quote-attr { font-size: 0.8rem; color: rgba(255,255,255,0.75); }
        .hero-focus-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.625rem;
        }
        .hero-focus-item {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.75rem;
          background: #f9fafb;
          border-radius: 0.875rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #374151;
        }
        .focus-icon {
          width: 36px; height: 36px;
          border-radius: 0.625rem;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .hero-verified-badge {
          position: absolute;
          top: -14px; right: -14px;
          width: 58px; height: 58px;
          border-radius: 50%;
          background: linear-gradient(135deg, #16a34a, #22c55e);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          color: white;
          box-shadow: 0 6px 20px rgba(22,163,74,0.35);
          font-size: 0.6rem;
          font-weight: 800;
          line-height: 1.2;
          text-align: center;
        }

        /* ── ABOUT PREVIEW ── */
        .about-section {
          width: 100%;
          padding: 5rem 0;
          background: #fff;
        }
        .about-grid {
          display: grid;
          gap: 3.5rem;
          align-items: center;
        }
        @media (min-width: 1024px) { .about-grid { grid-template-columns: 1fr 1fr; } }
        .about-mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .about-mini-card {
          border-radius: 1.125rem;
          padding: 1.5rem;
          color: white;
        }
        .about-mini-num { font-size: 1.75rem; font-weight: 800; line-height: 1; }
        .about-mini-lbl { font-size: 0.8rem; color: rgba(255,255,255,0.8); margin-top: 0.25rem; }
        .check-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #374151;
          font-weight: 500;
        }
        .checks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        /* ── PROGRAMS ── */
        .programs-section {
          padding: 5rem 0;
          background: #f9fafb;
        }
        .programs-grid {
          display: grid;
          gap: 1.5rem;
        }
        @media (min-width: 640px)  { .programs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .programs-grid { grid-template-columns: repeat(3, 1fr); } }

        /* ── LEADERSHIP ── */
        .leadership-section {
          padding: 5rem 0;
          background: #fff;
        }
        .leadership-grid {
          display: grid;
          gap: 1.5rem;
        }
        @media (min-width: 640px)  { .leadership-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .leadership-grid { grid-template-columns: repeat(4, 1fr); } }

        /* ── IMPACT ── */
        .impact-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
        }
        .impact-grid {
          display: grid;
          gap: 1.25rem;
        }
        @media (min-width: 640px)  { .impact-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .impact-grid { grid-template-columns: repeat(3, 1fr); } }

        /* shared section heading */
        .section-center { text-align: center; margin-bottom: 3.5rem; }
        .section-h2 {
          font-size: clamp(1.75rem, 3.5vw, 2.75rem);
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.75rem;
        }
        .section-sub {
          font-size: 1rem;
          color: #6b7280;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-blob-1" />
        <div className="hero-blob-2" />
        <div className="hero-content">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="pill" style={{ marginBottom: "1.25rem" }}>
              <Heart size={14} fill="currentColor" />
              Registered NGO • Odisha, India
            </div>

            <h1 className="hero-title" style={{ color: "#111827" }}>
              Illuminating{" "}
              <span className="gl">Lives</span>
              <br />
              Through{" "}
              <span style={{ color: "#15803d" }}>Compassion</span>
            </h1>

            <p className="hero-sub" style={{ color: "#4b5563" }}>
              Vikas Jyoti Foundation works at the grassroots to uplift underserved communities through healthcare, education, rural development, and disability support across Odisha.
            </p>

            <div className="hero-btns">
              <Link href="/donate" className="btn-primary">
                <Heart size={18} fill="white" />
                Donate Now
              </Link>
              <Link href="/about" className="btn-outline">
                Our Story
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="hero-stats">
              {[
                { val: "5,000+", lbl: "Lives Impacted" },
                { val: "120+", lbl: "Health Camps" },
                { val: "15+", lbl: "Villages Covered" },
              ].map((s) => (
                <div key={s.lbl}>
                  <div className="hero-stat-num">{s.val}</div>
                  <div className="hero-stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="hero-card">
              <div className="hero-quote-card">
                <Quote size={28} color="rgba(255,255,255,0.6)" />
                <p className="hero-quote-text">
                  "Every life deserves dignity, care, and opportunity. We exist to make that a reality."
                </p>
                <p className="hero-quote-attr">— Vikas Jyoti Foundation Mission</p>
              </div>

              <div className="hero-focus-grid">
                {[
                  { icon: Heart, label: "Healthcare", bg: "#fef2f2", color: "#ef4444" },
                  { icon: Users, label: "Disability Support", bg: "#f5f3ff", color: "#8b5cf6" },
                  { icon: TreePine, label: "Rural Dev", bg: "#f0fdf4", color: "#16a34a" },
                  { icon: GraduationCap, label: "Education", bg: "#eff6ff", color: "#3b82f6" },
                ].map(({ icon: Icon, label, bg, color }) => (
                  <div className="hero-focus-item" key={label}>
                    <div className="focus-icon" style={{ background: bg }}>
                      <Icon size={18} color={color} />
                    </div>
                    {label}
                  </div>
                ))}
              </div>

              <div className="hero-verified-badge">
                <CheckCircle size={16} />
                <span>NGO</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="section-tag">About Us</div>
              <h2 className="section-h2">Who We Are</h2>
              <p style={{ color: "#4b5563", lineHeight: 1.8, marginBottom: "1rem" }}>
                Vikas Jyoti Foundation is a registered NGO based in Odisha, India. Founded with a vision to create an equitable and inclusive society, we uplift marginalized communities through targeted interventions in healthcare, education, and rural livelihoods.
              </p>
              <p style={{ color: "#4b5563", lineHeight: 1.8, marginBottom: "1.75rem" }}>
                Our diverse team of trustees — disability advocates, government officers, social workers, and rural specialists — brings a multidisciplinary approach to community development.
              </p>

              <div className="checks-grid">
                {["Registered Non-Profit", "Grassroots Approach", "Transparent Governance", "Community-First"].map((item) => (
                  <div className="check-row" key={item}>
                    <CheckCircle size={16} color="#16a34a" />
                    {item}
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-primary" style={{ width: "fit-content" }}>
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="about-mini-grid">
                {[
                  { num: "5,000+", lbl: "Beneficiaries Reached", bg: "linear-gradient(135deg,#16a34a,#22c55e)" },
                  { num: "10+", lbl: "Years of Service", bg: "linear-gradient(135deg,#0d9488,#16a34a)" },
                  { num: "120+", lbl: "Health Camps Organized", bg: "linear-gradient(135deg,#0f766e,#0d9488)" },
                  { num: "800+", lbl: "Assistive Devices Given", bg: "linear-gradient(135deg,#15803d,#16a34a)" },
                ].map((card) => (
                  <div key={card.lbl} className="about-mini-card" style={{ background: card.bg }}>
                    <div className="about-mini-num">{card.num}</div>
                    <div className="about-mini-lbl">{card.lbl}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="programs-section">
        <div className="container">
          <div className="section-center">
            <div className="section-tag">Our Programs</div>
            <h2 className="section-h2">Focus Areas</h2>
            <p className="section-sub">
              From healthcare camps to disability support, our programs are designed to create lasting impact at the community level.
            </p>
          </div>

          <div className="programs-grid">
            {programs.slice(0, 3).map((program, index) => (
              <ProgramCard key={program.id} {...program} index={index} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/programs" className="btn-outline">
              View All Programs <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="leadership-section">
        <div className="container">
          <div className="section-center">
            <div className="section-tag">Leadership</div>
            <h2 className="section-h2">Our Board of Trustees</h2>
            <p className="section-sub">
              A dedicated team of changemakers committed to inclusive development and social justice.
            </p>
          </div>

          <div className="leadership-grid">
            {trustees.map((trustee, index) => (
              <LeadershipCard key={trustee.id} {...trustee} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS ── */}
      <section className="impact-section">
        <div className="container">
          <div className="section-center">
            <div className="section-tag">Our Impact</div>
            <h2 className="section-h2">Numbers That Matter</h2>
            <p className="section-sub">
              Every number here is a life touched, a family supported, and a community empowered.
            </p>
          </div>

          <div className="impact-grid">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
              >
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#15803d", marginBottom: "0.4rem" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#111827", marginBottom: "0.25rem" }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#6b7280" }}>{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Ready to Make a Difference?"
        subtitle="Every rupee donated goes directly to supporting communities in need. Be the change you wish to see in the world."
        primaryLabel="Donate Today"
        secondaryLabel="Become a Volunteer"
      />
    </>
  );
}
