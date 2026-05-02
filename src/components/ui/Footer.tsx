import Link from "next/link";
import { Heart, Phone, Mail, MapPin, Share2, MessageCircle, Camera, PlayCircle } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Programs", href: "/programs" },
    { label: "Leadership", href: "/trustees" },
    { label: "Impact", href: "/impact" },
  ],
  "Get Involved": [
    { label: "Donate", href: "/donate" },
    { label: "Volunteer", href: "/contact" },
    { label: "Partner With Us", href: "/contact" },
    { label: "Documents", href: "/documents" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #0f172a;
          color: #cbd5e1;
        }
        .footer-main {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 1.25rem;
          display: grid;
          gap: 3rem;
        }
        @media (min-width: 640px)  { .footer-main { padding: 4rem 1.5rem; } }
        @media (min-width: 768px)  { .footer-main { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .footer-main { grid-template-columns: 1.6fr 1fr 1fr 1.3fr; padding: 4rem 2rem; } }

        /* Brand column */
        .footer-brand-logo {
          display: flex; align-items: center; gap: 0.625rem;
          text-decoration: none; margin-bottom: 1rem;
        }
        .footer-logo-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg,#22c55e,#16a34a);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .footer-logo-primary { font-size: 0.85rem; font-weight: 800; color: #fff; line-height: 1.2; }
        .footer-logo-secondary { font-size: 0.7rem; color: #4ade80; font-weight: 600; }
        .footer-tagline { font-size: 0.875rem; color: #94a3b8; line-height: 1.7; margin-bottom: 1.5rem; }
        .footer-socials { display: flex; gap: 0.625rem; }
        .social-btn {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: #1e293b;
          display: flex; align-items: center; justify-content: center;
          color: #94a3b8;
          transition: background 0.2s, color 0.2s;
          border: 1px solid #334155;
          cursor: pointer;
          text-decoration: none;
        }
        .social-btn:hover { background: #16a34a; color: #fff; border-color: #16a34a; }

        /* Link columns */
        .footer-col-title {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 1rem;
        }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
        .footer-link {
          font-size: 0.875rem;
          color: #94a3b8;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #4ade80; }

        /* Contact column */
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.875rem;
          color: #94a3b8;
          margin-bottom: 0.75rem;
        }
        .footer-contact-item a { color: #94a3b8; text-decoration: none; transition: color 0.2s; }
        .footer-contact-item a:hover { color: #4ade80; }
        .footer-contact-icon { color: #4ade80; flex-shrink: 0; margin-top: 2px; }
        .footer-reg-box {
          margin-top: 1rem;
          padding: 0.75rem;
          background: rgba(22,163,74,0.08);
          border: 1px solid rgba(22,163,74,0.2);
          border-radius: 0.75rem;
        }
        .footer-reg-title { font-size: 0.75rem; color: #4ade80; font-weight: 700; }
        .footer-reg-num { font-size: 0.75rem; color: #64748b; margin-top: 2px; }

        /* Bottom bar */
        .footer-bottom {
          border-top: 1px solid #1e293b;
        }
        .footer-bottom-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1.25rem 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          text-align: center;
        }
        @media (min-width: 640px) {
          .footer-bottom-inner {
            flex-direction: row;
            justify-content: space-between;
            padding: 1.25rem 2rem;
            text-align: left;
          }
        }
        .footer-copy { font-size: 0.78rem; color: #475569; }
        .footer-made { font-size: 0.78rem; color: #475569; display: flex; align-items: center; gap: 0.3rem; }
      `}</style>

      <footer className="footer">
        <div className="footer-main">
          {/* Brand */}
          <div>
            <Link href="/" className="footer-brand-logo">
              <div className="footer-logo-icon">
                <Heart size={18} color="white" fill="white" />
              </div>
              <div>
                <div className="footer-logo-primary">Vikas Jyoti</div>
                <div className="footer-logo-secondary">Foundation</div>
              </div>
            </Link>
            <p className="footer-tagline">
              Illuminating lives through compassion, community, and committed action. Working for a brighter, more equitable Odisha.
            </p>
            <div className="footer-socials">
              {[Share2, MessageCircle, Camera, PlayCircle].map((Icon, i) => (
                <a key={i} href="#" className="social-btn" aria-label="social">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div className="footer-col-title">{title}</div>
              <ul className="footer-links">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-item">
              <MapPin size={16} className="footer-contact-icon" />
              <span>Odisha, India</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} className="footer-contact-icon" />
              <a href="tel:+919999999999">+91 99999 99999</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} className="footer-contact-icon" />
              <a href="mailto:info@vikasjyoti.org">info@vikasjyoti.org</a>
            </div>
            <div className="footer-reg-box">
              <div className="footer-reg-title">Registered NGO</div>
              <div className="footer-reg-num">Reg. No: XXXXXXXXXX</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-copy">
              © {new Date().getFullYear()} Vikas Jyoti Foundation. All rights reserved.
            </p>
            <p className="footer-made">
              Made with <Heart size={12} color="#f87171" fill="#f87171" /> for a better Odisha
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
