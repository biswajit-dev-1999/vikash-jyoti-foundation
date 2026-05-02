"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface LeadershipCardProps {
  name: string;
  role: string;
  description: string;
  initials: string;
  color: string;
  index?: number;
}

export default function LeadershipCard({
  name, role, description, initials, color, index = 0,
}: LeadershipCardProps) {
  return (
    <>
      <style>{`
        .lcard {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 1.5rem;
          background: #fff;
          border-radius: 1.5rem;
          border: 1px solid #f3f4f6;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .lcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(22,163,74,0.12);
          border-color: #bbf7d0;
        }
        .lcard-avatar-wrap { position: relative; margin-bottom: 1.25rem; }
        .lcard-avatar {
          width: 110px; height: 110px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: white;
          font-size: 2rem;
          font-weight: 800;
          transition: transform 0.3s ease;
        }
        .lcard:hover .lcard-avatar { transform: scale(1.06); }
        .lcard-badge {
          position: absolute;
          bottom: -4px; right: -4px;
          width: 30px; height: 30px;
          border-radius: 50%;
          background: #16a34a;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 8px rgba(22,163,74,0.4);
        }
        .lcard-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.4rem;
          transition: color 0.2s;
        }
        .lcard:hover .lcard-name { color: #15803d; }
        .lcard-role {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: #f0fdf4;
          color: #15803d;
          font-size: 0.72rem;
          font-weight: 700;
          border-radius: 9999px;
          border: 1px solid #bbf7d0;
          margin-bottom: 1rem;
        }
        .lcard-desc {
          font-size: 0.85rem;
          color: #6b7280;
          line-height: 1.65;
        }
      `}</style>

      <motion.div
        className="lcard"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="lcard-avatar-wrap">
          <div
            className="lcard-avatar"
            style={{ background: `linear-gradient(135deg, var(--from), var(--to))` }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: color.includes("green-500")
                  ? "linear-gradient(135deg,#22c55e,#16a34a)"
                  : color.includes("teal-500")
                  ? "linear-gradient(135deg,#14b8a6,#0d9488)"
                  : color.includes("emerald-600")
                  ? "linear-gradient(135deg,#059669,#10b981)"
                  : "linear-gradient(135deg,#16a34a,#0d9488)",
                fontSize: "2rem",
                fontWeight: 800,
                color: "white",
              }}
            >
              {initials}
            </div>
          </div>
          <div className="lcard-badge">
            <CheckCircle size={14} color="white" />
          </div>
        </div>

        <div className="lcard-name">{name}</div>
        <span className="lcard-role">{role}</span>
        <p className="lcard-desc">{description}</p>
      </motion.div>
    </>
  );
}
