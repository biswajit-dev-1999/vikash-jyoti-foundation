"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  
  { href: "/about", label: "About" },
  { href: "/trustees", label: "Trustees" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/documents", label: "Documents" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          box-shadow: 0 2px 20px rgba(22,163,74,0.08);
        }
        .navbar:not(.scrolled) {
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(22,163,74,0.08);
        }
        .navbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }
        @media (min-width: 640px) { .navbar-inner { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .navbar-inner { padding: 0 2rem; height: 76px; } }

        /* Logo - Fixed */
        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        
        .nav-logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .nav-logo-image {
          height: 40px;
          width: auto;
          object-fit: contain;
        }
        
        @media (min-width: 1024px) {
          .nav-logo-image {
            height: 65px;
          }
        }

        /* Desktop nav */
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 0.25rem;
        }
        @media (min-width: 1024px) { .desktop-nav { display: flex; } }

        .nav-item {
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          border-radius: 0.5rem;
          transition: color 0.2s, background 0.2s;
          position: relative;
          white-space: nowrap;
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 0.75rem; right: 0.75rem;
          height: 2px;
          background: #16a34a;
          border-radius: 1px;
          transform: scaleX(0);
          transition: transform 0.25s ease;
        }
        .nav-item:hover { color: #15803d; background: #f0fdf4; }
        .nav-item:hover::after { transform: scaleX(1); }

        .nav-donate {
          margin-left: 0.75rem;
          padding: 0.6rem 1.4rem;
          font-size: 0.875rem;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #16a34a, #22c55e);
          border-radius: 0.75rem;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
        }
        .nav-donate:hover { transform: scale(1.05); box-shadow: 0 8px 20px rgba(22,163,74,0.3); }

        /* Mobile toggle */
        .mobile-toggle {
          display: flex;
          padding: 0.5rem;
          border-radius: 0.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #374151;
          transition: background 0.2s;
        }
        .mobile-toggle:hover { background: #f0fdf4; color: #15803d; }
        @media (min-width: 1024px) { .mobile-toggle { display: none; } }

        /* Mobile drawer */
        .mobile-drawer {
          background: #fff;
          border-top: 1px solid #f0fdf4;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          overflow: hidden;
        }
        .mobile-drawer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 1.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .mobile-nav-item {
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          border-radius: 0.625rem;
          transition: background 0.2s, color 0.2s;
        }
        .mobile-nav-item:hover { background: #f0fdf4; color: #15803d; }
        .mobile-donate {
          margin-top: 0.5rem;
          padding: 0.875rem 1rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #16a34a, #22c55e);
          border-radius: 0.875rem;
          text-decoration: none;
          text-align: center;
          transition: opacity 0.2s;
        }
        .mobile-donate:hover { opacity: 0.92; }
      `}</style>

      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          {/* Logo - Fixed */}
          <Link href="/" className="nav-logo">
            <div className="nav-logo-container">
              <Image
                src="/LOGO.jpeg"
                alt="Vikas Jyoti Foundation Logo"
                width={160}
                height={40}
                className="nav-logo-image"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-item">
                {link.label}
              </Link>
            ))}
            <Link href="/donate" className="nav-donate">
              Donate Now
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
            >
              <div className="mobile-drawer-inner">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="mobile-nav-item"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/donate"
                  className="mobile-donate"
                  onClick={() => setIsOpen(false)}
                >
                  Donate Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}