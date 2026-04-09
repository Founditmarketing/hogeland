import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-h">H</span>
              <div>
                <div className="footer-logo-name">HOGELAND</div>
                <div className="footer-logo-sub">AUTO PLAZA</div>
              </div>
            </div>
            <p className="footer-tagline">
              Proudly serving Marshalltown and Central Iowa since 1948.
              Towing, auto repair, and quality parts — all under one roof.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <Link to="/towing" className="footer-link">24/7 Emergency Towing</Link>
            <Link to="/repair" className="footer-link">Auto Repair</Link>
            <Link to="/parts" className="footer-link">Parts &amp; Salvage</Link>
            <Link to="/history" className="footer-link">Our Story</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <a href="tel:6417520027" className="footer-contact-item">
              <Phone size={16} />
              <span>641-752-0027</span>
            </a>
            <a href="tel:8667520027" className="footer-contact-item">
              <Phone size={16} />
              <span>866-752-0027 (Toll Free)</span>
            </a>
            <a href="mailto:info@hogelandautoplaza.com" className="footer-contact-item">
              <Mail size={16} />
              <span>Email Us</span>
            </a>
            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>1408 E. Main St, Marshalltown, IA</span>
            </div>
          </div>

          {/* Hours */}
          <div className="footer-col">
            <h4 className="footer-heading">Hours</h4>
            <div className="footer-contact-item">
              <Clock size={16} />
              <div>
                <div>Mon - Fri: 8AM - 5PM</div>
                <div>Sat: By Appointment</div>
                <div className="footer-emergency">24/7 Emergency Towing</div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hogeland Auto Plaza. All rights reserved.</p>
          <button className="footer-scroll-top" onClick={scrollTop} aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
