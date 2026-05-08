"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, CheckCircle, Building2, Shield, Info, ArrowRight } from "lucide-react";

const donationAmounts = [500, 1000, 2000, 5000, 10000];

const impactMap: Record<number, string> = {
  500: "Provides one month of nutritious meals for a child",
  1000: "Funds a medical consultation for 5 people",
  2000: "Supports a student's monthly educational needs",
  5000: "Contributes to one assistive device for a differently-abled person",
  10000: "Funds a full mobile health camp for a village",
};

export default function DonatePage() {
  const [selected, setSelected] = useState<number>(2000);
  const [custom, setCustom] = useState("");
  const finalAmount = custom ? parseInt(custom) || 0 : selected;

  return (
    <>
      <style>{`
        .donate-page { background: #f9fafb; min-height: 100vh; }

        /* Hero */
        .donate-hero {
          padding: 5rem 0 4rem;
          background: linear-gradient(135deg,#f0fdf4,#dcfce7,#fefce8);
          text-align: center;
        }
        .donate-hero-inner { max-width: 1280px; margin: 0 auto; padding: 0 1.25rem; }
        .donate-hero-h1 {
          font-size: clamp(2.5rem,6vw,4rem);
          font-weight: 800; color: #111827; line-height: 1.1; margin-bottom: 1rem;
        }
        .donate-hero-sub {
          font-size: 1.1rem; color: #4b5563; line-height: 1.7; max-width: 700px; margin: 0 auto;
        }

        /* Main Grid */
        .donate-main {
          max-width: 1280px; margin: 0 auto;
          padding: 4rem 1.25rem;
          display: grid; gap: 3rem;
        }
        @media (min-width: 1024px) { 
            .donate-main { grid-template-columns: 1.1fr 0.9fr; align-items: start; } 
        }

        /* Column 1: Bank Card Styles */
        .bank-card {
          background: linear-gradient(145deg, #0f172a, #1e293b);
          border-radius: 1.5rem;
          padding: 2.5rem;
          color: #fff;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
        }
        .bank-card::after {
          content: ""; position: absolute; top: -50%; right: -50%; width: 100%; height: 100%;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .bank-title {
          display: flex; align-items: center; gap: 0.75rem;
          font-weight: 800; color: #4ade80; margin-bottom: 2rem;
          font-size: 1.1rem; letter-spacing: 0.05em; text-transform: uppercase;
        }
        .bank-info-grid { display: flex; flex-direction: column; gap: 1.5rem; }
        .bank-row {
          display: flex; flex-direction: column; gap: 0.35rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 1rem;
        }
        .bank-row:last-child { border-bottom: none; }
        .bank-label { color: #94a3b8; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
        .bank-value { font-weight: 600; color: #f8fafc; font-size: 1.1rem; font-family: monospace; }
        .bank-footer {
          margin-top: 2rem; padding-top: 1.25rem; border-top: 1px dashed rgba(255, 255, 255, 0.2);
          display: flex; align-items: center; gap: 0.6rem; font-size: 0.85rem; color: #94a3b8;
        }

        /* Column 2: Info & Why Panels */
        .donate-info { display: flex; flex-direction: column; gap: 1.25rem; }
        .donate-info-title { font-size: 1.75rem; font-weight: 800; color: #111827; margin-bottom: 0.5rem; }
        .donate-info-sub { font-size: 1rem; color: #6b7280; line-height: 1.6; margin-bottom: 1rem; }
        
        .why-card {
          display: flex; gap: 1.25rem;
          padding: 1.5rem;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 1.25rem;
          transition: all 0.3s ease;
        }
        .why-card:hover { border-color: #22c55e; transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); }
        .why-icon {
          width: 48px; height: 48px;
          border-radius: 1rem;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .why-title { font-size: 1rem; font-weight: 700; color: #111827; margin-bottom: 0.25rem; }
        .why-desc { font-size: 0.9rem; color: #6b7280; line-height: 1.5; }

        .page-tag {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.4rem 1rem;
          background: #dcfce7; color: #15803d;
          font-size: 0.85rem; font-weight: 700;
          border-radius: 9999px; border: 1px solid #bbf7d0;
          margin-bottom: 1.5rem;
        }
      `}</style>

      <div className="donate-page">
        {/* Hero */}
        <section className="donate-hero">
          <div className="donate-hero-inner">
            <div className="page-tag">
              <Heart size={16} fill="currentColor" />
              Make a Difference
            </div>
            <h1 className="donate-hero-h1">
              Donate to <span style={{ color: "#15803d" }}>Vikas Jyoti</span>
            </h1>
            <p className="donate-hero-sub">
              Your contribution directly funds healthcare, education, and rural development programs across Odisha.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="donate-main">
          
          {/* Column 1: Payment Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bank-card">
              <div className="bank-title">
                <Building2 size={22} />
                Direct Bank Transfer
              </div>
              
              <div className="bank-info-grid">
                {[
                  { label: "Account Name", val: "Vikas Jyoti Foundation" },
                  { label: "Account Number", val: "50200072903644" },
                  { label: "IFSC Code", val: "HDFC0004724" },
                  { label: "Bank & Branch", val: "HDFC Bank, Bhubaneswar" },
                ].map((row) => (
                  <div key={row.label} className="bank-row">
                    <span className="bank-label">{row.label}</span>
                    <span className="bank-value">{row.val}</span>
                  </div>
                ))}
              </div>

              <div className="bank-footer">
                <Shield size={16} />
                Secure & Verified NGO Account
              </div>
            </div>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#fefce8', border: '1px solid #fef08a', borderRadius: '1rem', color: '#854d0e', fontSize: '0.9rem', display: 'flex', gap: '0.75rem' }}>
                <Info size={20} />
                <p>After making a bank transfer, please share the receipt with us at <b>contact@vikasjyoti.org</b> to receive your 80G tax certificate.</p>
            </div>
          </motion.div>

          {/* Column 2: Impact & Why */}
          <motion.div
            className="donate-info"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <div className="donate-info-title">Why Trust Us?</div>
              <p className="donate-info-sub">
                We ensure that every rupee you donate reaches the people who need it most, with full transparency and 80G tax benefits.
              </p>
            </div>

            {[
              { title: "80G Tax Exemption", desc: "All donations are eligible for tax deduction under Section 80G.", bg: "linear-gradient(135deg,#16a34a,#22c55e)" },
              { title: "Transparent Usage", desc: "Track your impact with quarterly reports and audited financial statements.", bg: "linear-gradient(135deg,#0d9488,#16a34a)" },
              { title: "Direct Community Impact", desc: "We work directly on the ground in Odisha, ensuring no middleman overhead.", bg: "linear-gradient(135deg,#059669,#10b981)" },
            ].map((item) => (
              <div key={item.title} className="why-card">
                <div className="why-icon" style={{ background: item.bg }}>
                  <CheckCircle size={24} color="white" />
                </div>
                <div>
                  <div className="why-title">{item.title}</div>
                  <p className="why-desc">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* <button style={{ 
                marginTop: '1rem',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '0.5rem', 
                background: '#16a34a', 
                color: '#fff', 
                padding: '1rem', 
                borderRadius: '1rem', 
                border: 'none', 
                fontWeight: '700',
                cursor: 'pointer'
            }}>
                Download Annual Report <ArrowRight size={18} />
            </button> */}
          </motion.div>

        </div>
      </div>
    </>
  );
}