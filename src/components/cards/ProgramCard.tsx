"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ProgramCardProps {
  title: string;
  shortDesc: string;
  highlights: string[];
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  index?: number;
  imageUrl?: string; // Optional image URL
  imageAlt?: string; // Optional image alt text
}

// Map Tailwind color class strings to actual hex values
function resolveGradient(color: string): string {
  if (color.includes("red-400"))    return "linear-gradient(135deg,#f87171,#f43f5e)";
  if (color.includes("purple-400")) return "linear-gradient(135deg,#c084fc,#8b5cf6)";
  if (color.includes("green-400"))  return "linear-gradient(135deg,#4ade80,#10b981)";
  if (color.includes("pink-400"))   return "linear-gradient(135deg,#f472b6,#f43f5e)";
  if (color.includes("blue-400"))   return "linear-gradient(135deg,#60a5fa,#6366f1)";
  return "linear-gradient(135deg,#4ade80,#16a34a)";
}

function resolveBg(bgColor: string): string {
  if (bgColor.includes("red"))    return "#fff1f2";
  if (bgColor.includes("purple")) return "#faf5ff";
  if (bgColor.includes("green"))  return "#f0fdf4";
  if (bgColor.includes("pink"))   return "#fdf2f8";
  if (bgColor.includes("blue"))   return "#eff6ff";
  return "#f0fdf4";
}

function resolveText(textColor: string): string {
  if (textColor.includes("red-700"))    return "#b91c1c";
  if (textColor.includes("purple-700")) return "#7e22ce";
  if (textColor.includes("green-700"))  return "#15803d";
  if (textColor.includes("pink-700"))   return "#be185d";
  if (textColor.includes("blue-700"))   return "#1d4ed8";
  return "#15803d";
}

export default function ProgramCard({
  title, shortDesc, highlights,
  color, bgColor, textColor, index = 0,
  imageUrl, imageAlt = title,
}: ProgramCardProps) {
  // const Icon = iconMap[icon] || Heart;
  const gradient = resolveGradient(color);
  const bg = resolveBg(bgColor);
  const text = resolveText(textColor);

  return (
    <>
      <style>{`
        .pcard {
          background: #fff;
          border-radius: 1.5rem;
          border: 1px solid #f3f4f6;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .pcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(22,163,74,0.1);
          border-color: #bbf7d0;
        }
        .pcard-image-container {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: #f3f4f6;
        }
        .pcard-image {
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .pcard:hover .pcard-image {
          transform: scale(1.05);
        }
        .pcard-stripe { height: 4px; }
        .pcard-body { padding: 1.75rem; flex: 1; }
        .pcard-icon {
          width: 54px; height: 54px;
          border-radius: 0.875rem;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.25rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.3s;
        }
        .pcard:hover .pcard-icon { transform: scale(1.1); }
        .pcard-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.5rem;
          transition: color 0.2s;
        }
        .pcard:hover .pcard-title { color: #15803d; }
        .pcard-desc { font-size: 0.875rem; color: #6b7280; line-height: 1.65; margin-bottom: 1.25rem; }
        .pcard-list { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
        .pcard-list-item { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.85rem; color: #4b5563; }
        .pcard-footer { padding: 1rem 1.75rem; border-top: 1px solid #f3f4f6; }
        .pcard-link {
          font-size: 0.875rem;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: gap 0.2s;
        }
        .pcard-link:hover { gap: 0.5rem; }
      `}</style>

      <motion.div
        className="pcard"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="pcard-stripe" style={{ background: gradient }} />

        {/* Optional Image Section */}
        {imageUrl && (
          <div className="pcard-image-container">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="pcard-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="pcard-body">
          {/* <div className="pcard-icon" style={{ background: gradient }}>
            <Icon size={26} color="white" />
          </div> */}

          <div className="pcard-title">{title}</div>
          <p className="pcard-desc">{shortDesc}</p>

          {/* <ul className="pcard-list">
            {highlights.map((h, i) => (
              <li key={i} className="pcard-list-item">
                <CheckCircle size={15} style={{ color: text, flexShrink: 0, marginTop: "1px" }} />
                {h}
              </li>
            ))}
          </ul> */}
        </div>

        <div className="pcard-footer" style={{ background: bg }}>
          <Link href="/programs" className="pcard-link" style={{ color: text }}>
            Learn more →
          </Link>
        </div>
      </motion.div>
    </>
  );
}