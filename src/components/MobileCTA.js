import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import './MobileCTA.css';

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`mobile-cta-bar ${visible ? 'mobile-cta-bar--visible' : ''}`}>
      <a href="tel:6417520027" className="mobile-cta-bar-btn mobile-cta-bar-btn--primary">
        <Phone size={18} />
        <span>Call Now</span>
      </a>
      <Link to="/contact" className="mobile-cta-bar-btn mobile-cta-bar-btn--secondary">
        <MessageSquare size={18} />
        <span>Get Quote</span>
      </Link>
    </div>
  );
}
