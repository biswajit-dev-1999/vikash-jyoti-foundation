"use client";

import Link from "next/link";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Share2,
  MessageCircle,
  Camera,
  PlayCircle,
} from "lucide-react";
import Image from "next/image";

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
          margin-top: auto;
        }

        .footer-main {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 1.25rem;
          display: grid;
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 1024px) {
          .footer-main {
            grid-template-columns: 1.6fr 1fr 1fr 1.3fr;
            padding: 4rem 2rem;
          }
        }

        /* Logo */
        .footer-brand-logo {
          margin-bottom: 1rem;
        }

        .footer-logo-img {
          height: 45px;
          width: auto;
          object-fit: contain;
          transition: transform 0.2s ease;
        }

        .footer-brand-logo:hover .footer-logo-img {
          transform: scale(1.05);
        }

        @media (min-width: 1024px) {
          .footer-logo-img {
            height: 55px;
          }
        }

        .footer-tagline {
          font-size: 0.875rem;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        /* Socials */
        .footer-socials {
          display: flex;
          gap: 0.6rem;
        }

        .social-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          border: 1px solid #334155;
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          background: #16a34a;
          color: white;
          transform: translateY(-2px);
        }

        /* Links */
        .footer-col-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-link {
          font-size: 0.875rem;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .footer-link:hover {
          color: #4ade80;
          transform: translateX(4px);
        }

        /* Contact */
        .footer-contact-item {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
        }

        .footer-contact-icon {
          color: #4ade80;
        }

        .footer-contact-item a {
          color: #94a3b8;
          text-decoration: none;
        }

        .footer-contact-item a:hover {
          color: #4ade80;
        }

        .footer-reg-box {
          margin-top: 1rem;
          padding: 0.75rem;
          border-radius: 0.75rem;
          background: rgba(22,163,74,0.1);
          border: 1px solid rgba(22,163,74,0.3);
        }

        /* Bottom */
        .footer-bottom {
          border-top: 1px solid #1e293b;
        }

        .footer-bottom-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        @media (min-width: 640px) {
          .footer-bottom-inner {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .footer-copy,
        .footer-made {
          font-size: 0.78rem;
          color: #64748b;
        }
      `}</style>

      <footer className="footer">
        <div className="footer-main">

          {/* Brand */}
          <div>
            <div className="footer-brand-logo">
              <Image
                src="/LOGO.jpeg"
                alt="Vikas Jyoti Foundation Logo"
                width={150}
                height={50}
                className="footer-logo-img"
                priority
              />
            </div>

            <p className="footer-tagline">
              Illuminating lives through compassion, community, and committed action.
              Working for a brighter, more equitable Odisha.
            </p>

            <div className="footer-socials">
              <a href="#" className="social-btn"><Share2 size={16} /></a>
              <a href="#" className="social-btn"><MessageCircle size={16} /></a>
              <a href="#" className="social-btn"><Camera size={16} /></a>
              <a href="#" className="social-btn"><PlayCircle size={16} /></a>
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
              Nayapalli,Bhubaneswar,Odisha, India
            </div>

            <div className="footer-contact-item">
              <Phone size={16} className="footer-contact-icon" />
              <a href="tel:+919999999999">+91 94370 20683</a>
            </div>

            <div className="footer-contact-item">
              <Mail size={16} className="footer-contact-icon" />
              <a href="mailto:info@vikasjyoti.org">info@vikasjyoti.org</a>
            </div>

            <div className="footer-reg-box">
              <div>Registered NGO</div>
              <div>Reg. No: 1082210362</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-copy">
              © {new Date().getFullYear()} Vikas Jyoti Foundation. All rights reserved.
            </p>

            <p className="footer-made">
              Developed By{" "}
              {/* <Heart size={12} color="#f87171" fill="#f87171" />{" "} */}
              {/* for a better Odisha by{" "} */}
              <a
                href="https://www.trackepay.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4ade80", textDecoration: "none", fontWeight: "600" }}
              >
                Trackepay
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}