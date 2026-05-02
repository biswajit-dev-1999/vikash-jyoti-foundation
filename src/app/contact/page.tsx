"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        .contact-page { background: #f9fafb; }

        .contact-hero {
          padding: 4rem 0 3rem;
          background: linear-gradient(135deg,#f0fdf4,#dcfce7,#fefce8);
          text-align: center;
        }
        .contact-hero-inner { max-width: 1280px; margin: 0 auto; padding: 0 1.25rem; }
        @media (min-width: 640px) { .contact-hero-inner { padding: 0 1.5rem; } }
        .contact-hero-h1 {
          font-size: clamp(2rem,5vw,3.5rem);
          font-weight: 800; color: #111827; line-height: 1.1; margin-bottom: 1rem;
        }
        .contact-hero-sub {
          font-size: clamp(0.9rem,2vw,1.05rem);
          color: #4b5563; line-height: 1.7; max-width: 580px; margin: 0 auto;
        }

        .contact-main {
          max-width: 1280px; margin: 0 auto;
          padding: 3rem 1.25rem;
          display: grid; gap: 2.5rem;
        }
        @media (min-width: 640px) { .contact-main { padding: 3rem 1.5rem; } }
        @media (min-width: 1024px) { .contact-main { grid-template-columns: 1fr 1fr; padding: 4rem 2rem; } }

        /* Form */
        .contact-form-card {
          background: #fff; border-radius: 1.5rem;
          border: 1px solid #f3f4f6;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          padding: 2rem;
        }
        .contact-form-title { font-size: 1.3rem; font-weight: 700; color: #111827; margin-bottom: 1.5rem; }
        .field-group { margin-bottom: 1rem; }
        .form-row { display: grid; gap: 0.75rem; }
        @media (min-width: 480px) { .form-row { grid-template-columns: 1fr 1fr; } }
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          font-size: 0.9rem; color: #111827;
          background: #fff; outline: none;
          transition: border-color 0.2s;
          font-family: inherit;
        }
        .form-input:focus { border-color: #16a34a; }
        textarea.form-input { resize: vertical; min-height: 120px; }
        .submit-btn {
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
        .submit-btn:hover { transform: scale(1.02); box-shadow: 0 8px 24px rgba(22,163,74,0.4); }

        .success-box {
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; text-align: center; padding: 3rem 1rem;
        }
        .success-icon {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: #f0fdf4;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.5rem;
          border: 2px solid #bbf7d0;
        }
        .success-title { font-size: 1.5rem; font-weight: 700; color: #111827; margin-bottom: 0.5rem; }
        .success-sub { font-size: 0.9rem; color: #6b7280; }

        /* Info */
        .contact-info { display: flex; flex-direction: column; gap: 1rem; }
        .info-title { font-size: 1.3rem; font-weight: 700; color: #111827; margin-bottom: 0.25rem; }
        .info-sub { font-size: 0.875rem; color: #6b7280; line-height: 1.7; margin-bottom: 0.5rem; }
        .info-card {
          display: flex; gap: 0.875rem;
          padding: 1rem 1.125rem;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 1rem;
        }
        .info-icon {
          width: 44px; height: 44px;
          border-radius: 0.75rem;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .info-card-title { font-size: 0.8rem; font-weight: 700; color: #111827; margin-bottom: 0.2rem; }
        .info-card-val { font-size: 0.875rem; font-weight: 600; color: #15803d; }
        .info-card-sub { font-size: 0.75rem; color: #9ca3af; margin-top: 1px; }

        .volunteer-card {
          background: #0f172a;
          border-radius: 1.25rem; padding: 1.5rem; color: #fff;
        }
        .volunteer-title { font-weight: 700; color: #4ade80; font-size: 1rem; margin-bottom: 0.5rem; }
        .volunteer-desc { font-size: 0.85rem; color: #94a3b8; line-height: 1.65; margin-bottom: 1rem; }
        .tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .tag {
          padding: 0.25rem 0.7rem;
          background: rgba(22,163,74,0.12);
          border: 1px solid rgba(22,163,74,0.25);
          border-radius: 9999px;
          font-size: 0.75rem; color: #4ade80; font-weight: 600;
        }

        .page-tag {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.3rem 0.9rem;
          background: #dcfce7; color: #15803d;
          font-size: 0.78rem; font-weight: 700;
          border-radius: 9999px; border: 1px solid #bbf7d0;
          margin-bottom: 1rem;
        }
      `}</style>

      <div className="contact-page">
        {/* Hero */}
        <section className="contact-hero">
          <div className="contact-hero-inner">
            <div className="page-tag">
              <Mail size={14} />
              Get In Touch
            </div>
            <h1 className="contact-hero-h1">
              Contact{" "}
              <span style={{
                background: "linear-gradient(135deg,#15803d,#22c55e,#86efac)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Us</span>
            </h1>
            <p className="contact-hero-sub">
              Have questions, want to volunteer, or interested in partnering? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Main Grid */}
        <div className="contact-main">
          {/* Form */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="success-box">
                <div className="success-icon">
                  <CheckCircle size={40} color="#16a34a" />
                </div>
                <div className="success-title">Message Sent!</div>
                <p className="success-sub">We'll get back to you within 24-48 hours. Thank you for reaching out.</p>
              </div>
            ) : (
              <>
                <div className="contact-form-title">Send Us a Message</div>
                <form onSubmit={handleSubmit}>
                  <div className="field-group">
                    <div className="form-row">
                      <input required type="text" placeholder="Your Name *" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="form-input" />
                      <input required type="email" placeholder="Email Address *" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="form-input" />
                    </div>
                  </div>
                  <div className="field-group">
                    <input type="tel" placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="form-input" />
                  </div>
                  <div className="field-group">
                    <select value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="form-input" style={{ color: form.subject ? "#111827" : "#9ca3af" }}>
                      <option value="">Select Subject</option>
                      <option>General Inquiry</option>
                      <option>Volunteer</option>
                      <option>Donation</option>
                      <option>Partnership</option>
                      <option>Media / Press</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="field-group">
                    <textarea required placeholder="Your Message *" value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="form-input" rows={5} />
                  </div>
                  <button type="submit" className="submit-btn">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <div className="info-title">Get In Touch</div>
              <p className="info-sub">Whether you want to volunteer, donate, or simply learn more about our work — we're here to help.</p>
            </div>

            {[
              { icon: MapPin, title: "Our Location", val: "Odisha, India", sub: "Serving communities across multiple districts", bg: "linear-gradient(135deg,#16a34a,#22c55e)" },
              { icon: Phone, title: "Call Us", val: "+91 99999 99999", sub: "Mon–Sat, 9:00 AM – 6:00 PM IST", bg: "linear-gradient(135deg,#0d9488,#16a34a)" },
              { icon: Mail, title: "Email Us", val: "info@vikasjyoti.org", sub: "We reply within 24-48 hours", bg: "linear-gradient(135deg,#059669,#10b981)" },
              { icon: Clock, title: "Office Hours", val: "Mon – Saturday", sub: "9:00 AM – 6:00 PM IST", bg: "linear-gradient(135deg,#15803d,#0d9488)" },
            ].map((item) => (
              <div key={item.title} className="info-card">
                <div className="info-icon" style={{ background: item.bg }}>
                  <item.icon size={20} color="white" />
                </div>
                <div>
                  <div className="info-card-title">{item.title}</div>
                  <div className="info-card-val">{item.val}</div>
                  <div className="info-card-sub">{item.sub}</div>
                </div>
              </div>
            ))}

            <div className="volunteer-card">
              <div className="volunteer-title">Become a Volunteer</div>
              <p className="volunteer-desc">We welcome volunteers from all backgrounds — medical professionals, educators, tech experts, and community workers.</p>
              <div className="tags">
                {["Medical", "Education", "Technology", "Community Outreach", "Fundraising"].map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
