import type { Metadata } from "next";
import { FileText, Download, Eye, Shield, Lock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Documents",
  description:
    "Access official documents of Vikas Jyoti Foundation including Trust Deed, registration certificates, and annual reports.",
};

// Resolve Tailwind gradient strings → real CSS
function resolveGradient(color: string): string {
  if (color.includes("green-500"))  return "linear-gradient(135deg,#22c55e,#16a34a)";
  if (color.includes("teal-500"))   return "linear-gradient(135deg,#14b8a6,#0d9488)";
  if (color.includes("emerald-6"))  return "linear-gradient(135deg,#059669,#16a34a)";
  if (color.includes("green-600"))  return "linear-gradient(135deg,#16a34a,#0d9488)";
  return "linear-gradient(135deg,#16a34a,#22c55e)";
}

const documents = [
  {
    title: "Trust Deed",
    description:
      "The founding document outlining the objectives, governance structure, and operating principles of Vikas Jyoti Foundation.",
    type: "PDF",
    size: "1.2 MB",
    icon: FileText,
    color: "green-500 to-emerald-500",
    isPrimary: true,
  },
  {
    title: "Registration Certificate",
    description:
      "Official certificate of registration of the foundation as a non-governmental organization.",
    type: "PDF",
    size: "0.5 MB",
    icon: Shield,
    color: "teal-500 to-green-600",
    isPrimary: false,
  },
  {
    title: "Annual Report 2023-24",
    description:
      "Comprehensive report detailing programs, impact metrics, financial statements, and future plans.",
    type: "PDF",
    size: "3.4 MB",
    icon: FileText,
    color: "emerald-600 to-lime-500",
    isPrimary: false,
  },
  {
    title: "80G Certificate",
    description:
      "Tax exemption certificate allowing donors to claim 80G deduction on donations made to the foundation.",
    type: "PDF",
    size: "0.3 MB",
    icon: FileText,
    color: "green-600 to-teal-500",
    isPrimary: false,
  },
];

const trustBadges = [
  { icon: Lock, label: "Secure Documents" },
  { icon: CheckCircle, label: "Verified NGO" },
  { icon: Shield, label: "80G Eligible" },
];

export default function DocumentsPage() {
  return (
    <>
      <style>{`
        /* ── Hero ── */
        .docs-hero {
          padding: 4.5rem 0 3.5rem;
          background: linear-gradient(135deg,#f0fdf4 0%,#dcfce7 50%,#fefce8 100%);
          text-align: center;
        }
        .docs-hero-inner {
          max-width: 1000px; margin: 0 auto; padding: 0 1.25rem;
        }
        @media (min-width: 640px)  { .docs-hero-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .docs-hero-inner { padding: 0 2rem; } }

        .docs-tag {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.35rem 1rem; border-radius: 9999px;
          background: #dcfce7; border: 1px solid #bbf7d0;
          color: #15803d; font-size: 0.78rem; font-weight: 700;
          margin-bottom: 1.25rem;
        }
        .docs-h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800; color: #111827; line-height: 1.1; margin-bottom: 1rem;
        }
        .docs-h1 .gl {
          background: linear-gradient(135deg,#15803d,#22c55e,#86efac);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .docs-hero-sub {
          font-size: clamp(0.9rem, 2vw, 1.05rem);
          color: #4b5563; line-height: 1.75; max-width: 620px; margin: 0 auto 1.75rem;
        }

        /* Trust badges row */
        .trust-badges {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem;
        }
        .trust-badge {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.4rem 1rem;
          background: #fff;
          border: 1px solid #bbf7d0;
          border-radius: 9999px;
          font-size: 0.8rem; font-weight: 600; color: #15803d;
          box-shadow: 0 2px 6px rgba(22,163,74,0.08);
        }

        /* ── Documents List ── */
        .docs-list-section {
          padding: 4.5rem 0;
          background: #fff;
        }
        .docs-list-inner {
          max-width: 900px; margin: 0 auto; padding: 0 1.25rem;
        }
        @media (min-width: 640px)  { .docs-list-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .docs-list-inner { padding: 0 2rem; } }

        .docs-list-hd {
          text-align: center; margin-bottom: 2.5rem;
        }
        .docs-list-hd h2 {
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 700; color: #111827; margin-bottom: 0.4rem;
        }
        .docs-list-hd p {
          font-size: 0.9rem; color: #6b7280; line-height: 1.65;
        }

        .doc-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background: #fff;
          border-radius: 1.25rem;
          border: 1px solid #f3f4f6;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          margin-bottom: 1rem;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        @media (min-width: 640px) {
          .doc-card { flex-direction: row; align-items: center; }
        }
        .doc-card:hover {
          border-color: #bbf7d0;
          box-shadow: 0 12px 30px rgba(22,163,74,0.08);
          transform: translateY(-2px);
        }
        .doc-icon {
          width: 56px; height: 56px;
          border-radius: 0.875rem;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.25s;
        }
        .doc-card:hover .doc-icon { transform: scale(1.07); }
        .doc-body { flex: 1; min-width: 0; }
        .doc-title-row { display: flex; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.35rem; }
        .doc-title { font-size: 1rem; font-weight: 700; color: #111827; }
        .doc-primary-badge {
          padding: 0.15rem 0.6rem;
          background: #dcfce7;
          color: #15803d;
          font-size: 0.7rem;
          font-weight: 700;
          border-radius: 9999px;
          border: 1px solid #bbf7d0;
        }
        .doc-desc { font-size: 0.84rem; color: #6b7280; line-height: 1.6; margin-bottom: 0.5rem; }
        .doc-meta { display: flex; align-items: center; gap: 0.625rem; }
        .doc-type-chip {
          padding: 0.2rem 0.6rem;
          background: #f3f4f6;
          border-radius: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #374151;
        }
        .doc-size { font-size: 0.75rem; color: #9ca3af; }
        .doc-actions { display: flex; gap: 0.625rem; flex-shrink: 0; }
        .doc-btn-view {
          display: inline-flex; align-items: center; gap: 0.375rem;
          padding: 0.5rem 0.875rem;
          font-size: 0.82rem; font-weight: 700;
          color: #15803d;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 0.625rem;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .doc-btn-view:hover { background: #dcfce7; border-color: #4ade80; }
        .doc-btn-download {
          display: inline-flex; align-items: center; gap: 0.375rem;
          padding: 0.5rem 0.875rem;
          font-size: 0.82rem; font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg,#16a34a,#22c55e);
          border: none;
          border-radius: 0.625rem;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .doc-btn-download:hover { transform: scale(1.04); box-shadow: 0 4px 14px rgba(22,163,74,0.3); }

        /* ── PDF Viewer ── */
        .pdf-section {
          padding: 3rem 0 4.5rem;
          background: #f9fafb;
        }
        .pdf-inner {
          max-width: 900px; margin: 0 auto; padding: 0 1.25rem;
        }
        @media (min-width: 640px)  { .pdf-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .pdf-inner { padding: 0 2rem; } }
        .pdf-hd {
          text-align: center; margin-bottom: 1.5rem;
        }
        .pdf-hd h2 { font-size: 1.4rem; font-weight: 700; color: #111827; margin-bottom: 0.3rem; }
        .pdf-hd p { font-size: 0.875rem; color: #9ca3af; }

        .pdf-viewer-shell {
          background: #fff;
          border-radius: 1.5rem;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          overflow: hidden;
        }
        .pdf-viewer-toolbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0.875rem 1.25rem;
          background: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
          flex-wrap: wrap; gap: 0.5rem;
        }
        .pdf-toolbar-title {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: 0.875rem; font-weight: 600; color: #374151;
        }
        .pdf-toolbar-actions { display: flex; gap: 0.5rem; }
        .pdf-tool-btn {
          display: inline-flex; align-items: center; gap: 0.3rem;
          padding: 0.4rem 0.75rem;
          font-size: 0.78rem; font-weight: 600;
          border-radius: 0.5rem; border: none; cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .pdf-tool-btn-outline {
          background: #fff; color: #374151; border: 1px solid #e5e7eb;
        }
        .pdf-tool-btn-outline:hover { background: #f3f4f6; }
        .pdf-tool-btn-primary {
          background: linear-gradient(135deg,#16a34a,#22c55e); color: #fff;
        }
        .pdf-tool-btn-primary:hover { opacity: 0.9; }

        .pdf-placeholder {
          height: 540px;
          background: linear-gradient(135deg,#f9fafb,#f0fdf4);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 2rem; text-align: center;
        }
        .pdf-placeholder-icon {
          width: 80px; height: 80px;
          border-radius: 1.25rem;
          background: linear-gradient(135deg,#16a34a,#22c55e);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 24px rgba(22,163,74,0.25);
        }
        .pdf-placeholder-title {
          font-size: 1.2rem; font-weight: 700; color: #111827; margin-bottom: 0.5rem;
        }
        .pdf-placeholder-sub {
          font-size: 0.85rem; color: #6b7280; max-width: 380px;
          line-height: 1.65; margin-bottom: 1.75rem;
        }
        .pdf-download-btn {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.75rem 1.75rem;
          background: linear-gradient(135deg,#16a34a,#22c55e);
          color: #fff; font-size: 0.9rem; font-weight: 700;
          border: none; border-radius: 0.875rem;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(22,163,74,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .pdf-download-btn:hover { transform: scale(1.04); box-shadow: 0 8px 24px rgba(22,163,74,0.4); }

        .pdf-note {
          text-align: center; font-size: 0.75rem; color: #9ca3af; margin-top: 1rem;
        }
        .pdf-note code {
          background: #f3f4f6; padding: 0.15rem 0.4rem;
          border-radius: 0.375rem; font-size: 0.72rem; color: #374151;
        }

        /* ── Transparency notice ── */
        .transparency-bar {
          background: linear-gradient(135deg,#15803d,#16a34a);
          padding: 1.5rem;
          text-align: center;
        }
        .transparency-bar p {
          font-size: 0.875rem; color: rgba(255,255,255,0.9);
          max-width: 700px; margin: 0 auto; line-height: 1.65;
        }
        .transparency-bar strong { color: #fff; font-weight: 700; }
      `}</style>

      {/* Hero */}
      <section className="docs-hero">
        <div className="docs-hero-inner">
          <div className="docs-tag">
            <FileText size={13} />
            Transparency
          </div>
          <h1 className="docs-h1">
            Official <span className="gl">Documents</span>
          </h1>
          <p className="docs-hero-sub">
            We believe in full transparency. Access our founding documents, registration certificates, and annual reports below.
          </p>
          <div className="trust-badges">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="trust-badge">
                <Icon size={14} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency bar */}
      <div className="transparency-bar">
        <p>
          <strong>Our Commitment to Transparency:</strong> All our legal documents, financial reports, and certificates are made publicly available. We believe accountability is the foundation of trust.
        </p>
      </div>

      {/* Documents List */}
      <section className="docs-list-section">
        <div className="docs-list-inner">
          <div className="docs-list-hd">
            <h2>Available Documents</h2>
            <p>Click to view or download any document below. All files are in PDF format.</p>
          </div>

          {documents.map((doc, i) => (
            <div key={i} className="doc-card">
              {/* Icon */}
              <div className="doc-icon" style={{ background: resolveGradient(doc.color) }}>
                <doc.icon size={26} color="white" />
              </div>

              {/* Info */}
              <div className="doc-body">
                <div className="doc-title-row">
                  <span className="doc-title">{doc.title}</span>
                  {doc.isPrimary && <span className="doc-primary-badge">Primary</span>}
                </div>
                <p className="doc-desc">{doc.description}</p>
                <div className="doc-meta">
                  <span className="doc-type-chip">{doc.type}</span>
                  <span className="doc-size">{doc.size}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="doc-actions">
                <button className="doc-btn-view">
                  <Eye size={14} />
                  View
                </button>
                <button className="doc-btn-download">
                  <Download size={14} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="pdf-section">
        <div className="pdf-inner">
          <div className="pdf-hd">
            <h2>Trust Deed Preview</h2>
            <p>Preview our founding document here. Download for the full version.</p>
          </div>

          <div className="pdf-viewer-shell">
            {/* Toolbar */}
            <div className="pdf-viewer-toolbar">
              <div className="pdf-toolbar-title">
                <FileText size={16} color="#16a34a" />
                Trust Deed – Vikas Jyoti Foundation.pdf
              </div>
              <div className="pdf-toolbar-actions">
                <button className="pdf-tool-btn pdf-tool-btn-outline">
                  <Eye size={13} />
                  Preview
                </button>
                <button className="pdf-tool-btn pdf-tool-btn-primary">
                  <Download size={13} />
                  Download
                </button>
              </div>
            </div>

            {/* Placeholder viewer area */}
            <div className="pdf-placeholder">
              <div className="pdf-placeholder-icon">
                <FileText size={40} color="white" />
              </div>
              <div className="pdf-placeholder-title">Trust Deed – Vikas Jyoti Foundation</div>
              <p className="pdf-placeholder-sub">
                Place your Trust Deed PDF at{" "}
                <code>/public/documents/trust-deed.pdf</code>{" "}
                to enable the inline preview. The viewer will render it automatically.
              </p>
              <button className="pdf-download-btn">
                <Download size={18} />
                Download Trust Deed
              </button>
            </div>
          </div>

          <p className="pdf-note">
            File path: <code>/public/documents/trust-deed.pdf</code> — update the{" "}
            <code>src</code> attribute in the{" "}
            <code>&lt;iframe&gt;</code> tag to enable inline PDF rendering.
          </p>
        </div>
      </section>
    </>
  );
}
