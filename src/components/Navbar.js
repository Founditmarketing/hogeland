import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import './Navbar.css';

const links = [
  { path: '/', label: 'Home' },
  { path: '/towing', label: '24/7 Towing' },
  { path: '/repair', label: 'Auto Repair' },
  { path: '/parts', label: 'Parts' },
  { path: '/history', label: 'Our Story' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <MapPin size={14} />
            <span>1408 E. Main Street, Marshalltown, IA 50158</span>
          </div>
          <div className="topbar-right">
            <a href="tel:6417520027" className="topbar-phone">
              <Phone size={14} />
              <span>641-752-0027</span>
            </a>
            <span className="topbar-divider">|</span>
            <span className="topbar-since">Serving Iowa Since 1948</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-h">H</span>
            <div className="logo-text">
              <span className="logo-name">HOGELAND</span>
              <span className="logo-sub">AUTO PLAZA</span>
            </div>
          </Link>

          <div className="navbar-links">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'nav-link--active' : ''}`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div className="nav-underline" layoutId="underline" />
                )}
              </Link>
            ))}
          </div>

          <a href="tel:6417520027" className="navbar-cta">
            <Phone size={16} />
            <span>Call Now</span>
          </a>

          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-link ${location.pathname === link.path ? 'mobile-link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:6417520027" className="mobile-cta">
              <Phone size={18} />
              Call 641-752-0027
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
