"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export default function CTASection({
  title = "Support Our Mission",
  subtitle = "Your contribution can transform lives. Join us in building a more equitable Odisha.",
  primaryLabel = "Donate Now",
  primaryHref = "/donate",
  secondaryLabel = "Volunteer",
  secondaryHref = "/contact",
  dark = true,
}: CTASectionProps) {
  return (
    <>
      <style>{`
        .cta-section {
          position: relative;
          padding: 5rem 0;
          overflow: hidden;
        }
        .cta-dark {
          background: linear-gradient(135deg, #15803d 0%, #16a34a 50%, #22c55e 100%);
        }
        .cta-light { background: #f0fdf4; }

        .cta-blob-1 {
          position: absolute; top: -100px; right: -100px;
          width: 400px; height: 400px; border-radius: 50%;
          background: rgba(255,255,255,0.06); pointer-events: none;
        }
        .cta-blob-2 {
          position: absolute; bottom: -80px; left: -80px;
          width: 320px; height: 320px; border-radius: 50%;
          background: rgba(255,255,255,0.05); pointer-events: none;
        }
        .cta-inner {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1.25rem;
          text-align: center;
        }
        @media (min-width: 640px) { .cta-inner { padding: 0 1.5rem; } }

        .cta-icon-wrap {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1.25rem;
        }
        .cta-icon-wrap-light {
          background: #dcfce7;
        }
        .cta-title-dark {
          font-size: clamp(1.75rem, 4vw, 2.75rem);
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .cta-title-light {
          font-size: clamp(1.75rem, 4vw, 2.75rem);
          font-weight: 700;
          color: #111827;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .cta-sub-dark { font-size: 1.05rem; color: rgba(255,255,255,0.85); margin-bottom: 2.5rem; line-height: 1.7; }
        .cta-sub-light { font-size: 1.05rem; color: #4b5563; margin-bottom: 2.5rem; line-height: 1.7; }

        .cta-btns {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
        .cta-btn-primary-dark {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.875rem 2rem;
          background: #fff; color: #15803d;
          font-weight: 700; font-size: 0.95rem;
          border-radius: 0.875rem;
          text-decoration: none;
          border: none;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .cta-btn-primary-dark:hover { transform: scale(1.05); background: #f0fdf4; }

        .cta-btn-secondary-dark {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.875rem 2rem;
          background: rgba(255,255,255,0.12);
          color: #fff;
          font-weight: 700; font-size: 0.95rem;
          border-radius: 0.875rem;
          text-decoration: none;
          border: 2px solid rgba(255,255,255,0.3);
          transition: background 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .cta-btn-secondary-dark:hover { background: rgba(255,255,255,0.2); transform: scale(1.04); }

        .cta-btn-primary-light {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.875rem 2rem;
          background: linear-gradient(135deg,#16a34a,#22c55e);
          color: #fff;
          font-weight: 700; font-size: 0.95rem;
          border-radius: 0.875rem;
          text-decoration: none;
          border: none;
          box-shadow: 0 4px 16px rgba(22,163,74,0.28);
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .cta-btn-primary-light:hover { transform: scale(1.05); box-shadow: 0 8px 24px rgba(22,163,74,0.35); }

        .cta-btn-secondary-light {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.875rem 2rem;
          background: #fff;
          color: #15803d;
          font-weight: 700; font-size: 0.95rem;
          border-radius: 0.875rem;
          text-decoration: none;
          border: 2px solid #bbf7d0;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .cta-btn-secondary-light:hover { border-color: #22c55e; background: #f0fdf4; transform: scale(1.04); }
      `}</style>

      <section className={`cta-section ${dark ? "cta-dark" : "cta-light"}`}>
        {dark && (
          <>
            <div className="cta-blob-1" />
            <div className="cta-blob-2" />
          </>
        )}

        <motion.div
          className="cta-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={`cta-icon-wrap ${!dark ? "cta-icon-wrap-light" : ""}`}>
            <Heart size={30} color={dark ? "white" : "#16a34a"} fill={dark ? "white" : "#16a34a"} />
          </div>

          {dark
            ? <h2 className="cta-title-dark">{title}</h2>
            : <h2 className="cta-title-light">{title}</h2>
          }
          {dark
            ? <p className="cta-sub-dark">{subtitle}</p>
            : <p className="cta-sub-light">{subtitle}</p>
          }

          <div className="cta-btns">
            {dark ? (
              <>
                <Link href={primaryHref!} className="cta-btn-primary-dark">
                  <Heart size={18} color="#15803d" fill="#15803d" />
                  {primaryLabel}
                </Link>
                <Link href={secondaryHref!} className="cta-btn-secondary-dark">
                  {secondaryLabel}
                  <ArrowRight size={18} />
                </Link>
              </>
            ) : (
              <>
                <Link href={primaryHref!} className="cta-btn-primary-light">
                  <Heart size={18} color="white" fill="white" />
                  {primaryLabel}
                </Link>
                <Link href={secondaryHref!} className="cta-btn-secondary-light">
                  {secondaryLabel}
                  <ArrowRight size={18} />
                </Link>
              </>
            )}
          </div>
        </motion.div>
      </section>
    </>
  );
}
