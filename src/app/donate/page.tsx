"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, CheckCircle, CreditCard, Smartphone, Building2, Shield } from "lucide-react";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pan, setPan] = useState("");
  const [payMethod, setPayMethod] = useState("UPI");

  const finalAmount = custom ? parseInt(custom) || 0 : selected;

  return (
    <>
      <style>{`
        .donate-page { background: #f9fafb; }

        /* Hero */
        .donate-hero {
          padding: 4rem 0 3rem;
          background: linear-gradient(135deg,#f0fdf4,#dcfce7,#fefce8);
          text-align: center;
        }
        .donate-hero-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 1.25rem;
        }
        @media (min-width: 640px) { .donate-hero-inner { padding: 0 1.5rem; } }
        .donate-hero-h1 {
          font-size: clamp(2rem,5vw,3.5rem);
          font-weight: 800; color: #111827; line-height: 1.1; margin-bottom: 1rem;
        }
        .donate-hero-sub {
          font-size: clamp(0.9rem,2vw,1.05rem);
          color: #4b5563; line-height: 1.7; max-width: 600px; margin: 0 auto;
        }

        /* Main */
        .donate-main {
          max-width: 1280px; margin: 0 auto;
          padding: 3rem 1.25rem;
          display: grid; gap: 2.5rem;
        }
        @media (min-width: 640px) { .donate-main { padding: 3rem 1.5rem; } }
        @media (min-width: 1024px) { .donate-main { grid-template-columns: 1fr 1fr; padding: 4rem 2rem; } }

        /* Form card */
        .donate-form-card {
          background: #fff;
          border-radius: 1.5rem;
          border: 1px solid #f3f4f6;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          padding: 2rem;
        }
        .donate-form-title {
          font-size: 1.3rem; font-weight: 700; color: #111827; margin-bottom: 1.5rem;
        }
        .donate-label {
          display: block; font-size: 0.8rem; font-weight: 700;
          color: #374151; margin-bottom: 0.625rem; letter-spacing: 0.02em;
        }
        .amount-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.625rem;
          margin-bottom: 0.625rem;
        }
        .amount-btn {
          padding: 0.75rem 0.5rem;
          border-radius: 0.75rem;
          border: 2px solid #e5e7eb;
          background: #fff;
          color: #374151;
          font-size: 0.875rem; font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .amount-btn:hover { border-color: #22c55e; color: #15803d; }
        .amount-btn.active {
          background: linear-gradient(135deg,#16a34a,#22c55e);
          border-color: transparent; color: #fff;
          box-shadow: 0 4px 12px rgba(22,163,74,0.3);
        }
        .text-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          font-size: 0.9rem;
          transition: border-color 0.2s;
          outline: none;
          background: #fff;
          color: #111827;
        }
        .text-input:focus { border-color: #16a34a; }
        .impact-box {
          padding: 0.875rem 1rem;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 0.875rem;
          font-size: 0.875rem;
          color: #15803d; font-weight: 500;
          margin-bottom: 1.25rem;
        }
        .form-row { display: grid; gap: 0.75rem; margin-bottom: 0.75rem; }
        @media (min-width: 480px) { .form-row { grid-template-columns: 1fr 1fr; } }
        .pay-method-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.625rem;
          margin-bottom: 1.5rem;
        }
        .pay-btn {
          display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
          padding: 0.75rem 0.5rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          background: #fff; cursor: pointer;
          color: #374151; font-size: 0.78rem; font-weight: 700;
          transition: all 0.2s;
        }
        .pay-btn:hover, .pay-btn.active { border-color: #16a34a; color: #15803d; background: #f0fdf4; }
        .donate-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg,#16a34a,#22c55e);
          color: #fff;
          font-size: 1rem; font-weight: 700;
          border: none; border-radius: 1rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          box-shadow: 0 4px 16px rgba(22,163,74,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .donate-btn:hover { transform: scale(1.02); box-shadow: 0 8px 24px rgba(22,163,74,0.4); }
        .secure-note {
          text-align: center; font-size: 0.75rem; color: #9ca3af;
          margin-top: 0.75rem;
          display: flex; align-items: center; justify-content: center; gap: 0.3rem;
        }

        /* Info panel */
        .donate-info { display: flex; flex-direction: column; gap: 1rem; }
        .donate-info-title { font-size: 1.3rem; font-weight: 700; color: #111827; margin-bottom: 0.25rem; }
        .donate-info-sub { font-size: 0.875rem; color: #6b7280; line-height: 1.7; margin-bottom: 1rem; }
        .why-card {
          display: flex; gap: 0.875rem;
          padding: 1rem;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 1rem;
        }
        .why-icon {
          width: 40px; height: 40px;
          border-radius: 0.625rem;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .why-title { font-size: 0.875rem; font-weight: 700; color: #111827; margin-bottom: 0.2rem; }
        .why-desc { font-size: 0.8rem; color: #6b7280; line-height: 1.6; }
        .bank-card {
          background: #0f172a;
          border-radius: 1.25rem;
          padding: 1.5rem;
          color: #fff;
        }
        .bank-title { font-weight: 700; color: #4ade80; margin-bottom: 1rem; font-size: 0.95rem; }
        .bank-row {
          display: flex; justify-content: space-between; align-items: center;
          font-size: 0.825rem; margin-bottom: 0.625rem;
        }
        .bank-label { color: #64748b; }
        .bank-value { font-weight: 600; color: #e2e8f0; }

        .page-tag {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.3rem 0.9rem;
          background: #dcfce7; color: #15803d;
          font-size: 0.78rem; font-weight: 700;
          border-radius: 9999px; border: 1px solid #bbf7d0;
          margin-bottom: 1rem;
        }
        .field-group { margin-bottom: 1.25rem; }
      `}</style>

      <div className="donate-page">
        {/* Hero */}
        <section className="donate-hero">
          <div className="donate-hero-inner">
            <div className="page-tag">
              <Heart size={14} fill="currentColor" />
              Make a Difference
            </div>
            <h1 className="donate-hero-h1">
              Donate to{" "}
              <span style={{
                background: "linear-gradient(135deg,#15803d,#22c55e,#86efac)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Vikas Jyoti</span>
            </h1>
            <p className="donate-hero-sub">
              Your generous contribution directly funds healthcare camps, disability support, education scholarships, and rural development programs across Odisha.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <div className="donate-main">
          {/* Form */}
          <motion.div
            className="donate-form-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="donate-form-title">Choose Your Contribution</div>

            <div className="field-group">
              <label className="donate-label">Select Amount (₹)</label>
              <div className="amount-grid">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => { setSelected(amount); setCustom(""); }}
                    className={`amount-btn ${selected === amount && !custom ? "active" : ""}`}
                  >
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={custom}
                onChange={(e) => { setCustom(e.target.value); setSelected(0); }}
                className="text-input"
                style={{ marginTop: "0.5rem" }}
              />
            </div>

            {finalAmount > 0 && (
              <div className="impact-box">
                ✨ ₹{finalAmount.toLocaleString()} — {impactMap[finalAmount] || "will directly support our community programs"}
              </div>
            )}

            <div className="field-group">
              <div className="form-row">
                <input type="text" placeholder="Your Full Name *" value={name} onChange={e => setName(e.target.value)} className="text-input" />
                <input type="email" placeholder="Email Address *" value={email} onChange={e => setEmail(e.target.value)} className="text-input" />
              </div>
              <input type="text" placeholder="PAN Number (for 80G tax benefit)" value={pan} onChange={e => setPan(e.target.value)} className="text-input" />
            </div>

            <div className="field-group">
              <label className="donate-label">Payment Method</label>
              <div className="pay-method-grid">
                {[
                  { icon: Smartphone, label: "UPI" },
                  { icon: CreditCard, label: "Card" },
                  { icon: Building2, label: "Net Banking" },
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    onClick={() => setPayMethod(label)}
                    className={`pay-btn ${payMethod === label ? "active" : ""}`}
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button className="donate-btn">
              <Heart size={18} fill="white" />
              Donate ₹{finalAmount > 0 ? finalAmount.toLocaleString() : "–"} Now
            </button>
            <div className="secure-note">
              <Shield size={12} />
              Secured & encrypted. 80G tax benefit applicable.
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            className="donate-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <div className="donate-info-title">Why Donate?</div>
              <p className="donate-info-sub">100% of your donation is directed to field programs. We maintain zero administrative overhead on donor contributions.</p>
            </div>

            {[
              { title: "80G Tax Exemption", desc: "All donations are eligible for 80G tax deduction under the Income Tax Act.", bg: "linear-gradient(135deg,#16a34a,#22c55e)" },
              { title: "Impact Report", desc: "Receive quarterly impact reports showing exactly how your money was used.", bg: "linear-gradient(135deg,#0d9488,#16a34a)" },
              { title: "Transparent Usage", desc: "Every rupee is tracked and documented. Full audit reports are publicly available.", bg: "linear-gradient(135deg,#059669,#10b981)" },
              { title: "Direct Community Impact", desc: "Your donation directly reaches the people it's meant for — no middlemen.", bg: "linear-gradient(135deg,#15803d,#0d9488)" },
            ].map((item) => (
              <div key={item.title} className="why-card">
                <div className="why-icon" style={{ background: item.bg }}>
                  <CheckCircle size={20} color="white" />
                </div>
                <div>
                  <div className="why-title">{item.title}</div>
                  <p className="why-desc">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="bank-card">
              <div className="bank-title">Direct Bank Transfer</div>
              {[
                { label: "Account Name", val: "Vikas Jyoti Foundation" },
                { label: "Account No.", val: "XXXX XXXX XXXX" },
                { label: "IFSC Code", val: "SBIN0XXXXXX" },
                { label: "Bank", val: "State Bank of India" },
              ].map((row) => (
                <div key={row.label} className="bank-row">
                  <span className="bank-label">{row.label}</span>
                  <span className="bank-value">{row.val}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
