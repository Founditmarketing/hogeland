import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Settings, Phone, ArrowRight, CheckCircle2,
  Search, Recycle, Warehouse
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import heroImg from '../assets/hero-parts.png';
import './ServicePage.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  })
};

const partTypes = [
  'Tires', 'Batteries', 'Wheels', 'Handles',
  'Engines', 'Transmissions', 'Rear Ends', 'Auto Glass',
  'Body Panels', 'Mirrors', 'Headlights', 'Starters',
];

export default function Parts() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${heroImg})` }}>
          <div className="page-hero-gradient page-hero-gradient--blue" />
          <div className="page-hero-grid" />
        </div>
        <div className="page-hero-inner">
          <motion.div initial="hidden" animate="visible">
            <motion.div className="page-hero-icon page-hero-icon--blue" variants={fadeUp}>
              <Settings size={40} />
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp} custom={1}>
              Parts &amp; Salvage
            </motion.h1>
            <motion.p className="page-hero-subtitle" variants={fadeUp} custom={2}>
              New, used, and antique auto parts. Two massive yards stretching over
              8 acres with hundreds of current model vehicles recycled and ready.
            </motion.p>
            <motion.div className="page-hero-actions" variants={fadeUp} custom={3}>
              <a href="tel:6417520027" className="btn btn-primary btn-lg">
                <Phone size={18} />
                Call for Parts
              </a>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Request a Part <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="sp-section">
        <div className="sp-inner">
          <div className="sp-feature-grid">
            {[
              { icon: <Warehouse size={24} />, title: '8+ Acres of Inventory', desc: 'Two huge car yards filled with parts for hundreds of vehicles.' },
              { icon: <Search size={24} />, title: 'Easy Part Search', desc: 'Call us with your year, make, and model — we\'ll find what you need.' },
              { icon: <Recycle size={24} />, title: 'Eco-Friendly Recycling', desc: 'We responsibly recycle hundreds of current model cars every year.' },
              { icon: <Settings size={24} />, title: 'Installation Available', desc: 'We install all parts we sell. Full service under one roof.' },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                className="sp-feature-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="sp-feature-icon sp-feature-icon--blue">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Low Cost Parts */}
      <section className="sp-section sp-section--alt">
        <div className="sp-inner">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-tag">Inventory</span>
            <h2 className="section-title">Low Cost Parts</h2>
            <p className="section-desc">
              Quality parts at prices that won't break the bank. Call to check availability.
            </p>
          </motion.div>
          <div className="sp-list-grid sp-list-grid--3col">
            {partTypes.map((item, i) => (
              <motion.div
                key={item}
                className="sp-list-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <CheckCircle2 size={18} className="sp-list-check sp-list-check--blue" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta">
        <div className="sp-inner">
          <motion.div
            className="sp-cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>Looking for a Specific Part?</h2>
            <p>Give us a call with your year, make, model, and the part you need. We'll check our yards and get back to you fast.</p>
            <div className="sp-cta-actions">
              <a href="tel:6417520027" className="btn btn-primary btn-lg">
                <Phone size={18} /> Call 641-752-0027
              </a>
              <Link to="/contact" className="btn btn-white btn-lg">
                Request a Part <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
