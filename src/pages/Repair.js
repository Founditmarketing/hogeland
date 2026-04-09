import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Wrench, Phone, Shield, Clock, ArrowRight,
  CheckCircle2, Gauge, DollarSign
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import heroImg from '../assets/hero-repair.png';
import './ServicePage.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  })
};

const repairServices = [
  'Engine Diagnostics & Repair',
  'Brake Service & Replacement',
  'Transmission Repair',
  'Electrical Systems',
  'Suspension & Steering',
  'Exhaust Systems',
  'Heating & Cooling',
  'Routine Maintenance',
  'Oil Changes & Fluid Service',
  'Parts Installation',
];

export default function Repair() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${heroImg})` }}>
          <div className="page-hero-gradient page-hero-gradient--gold" />
          <div className="page-hero-grid" />
        </div>
        <div className="page-hero-inner">
          <motion.div initial="hidden" animate="visible">
            <motion.div className="page-hero-icon page-hero-icon--gold" variants={fadeUp}>
              <Wrench size={40} />
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp} custom={1}>
              Expert Auto Repair
            </motion.h1>
            <motion.p className="page-hero-subtitle" variants={fadeUp} custom={2}>
              Fast, friendly quality service with accurate estimates.
              We install all the parts we sell and stand behind our work.
            </motion.p>
            <motion.div className="page-hero-actions" variants={fadeUp} custom={3}>
              <a href="tel:6417520027" className="btn btn-primary btn-lg">
                <Phone size={18} />
                Schedule Service
              </a>
              <Link to="/parts" className="btn btn-outline btn-lg">
                Browse Parts <ArrowRight size={18} />
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
              { icon: <DollarSign size={24} />, title: 'Accurate Estimates', desc: 'No surprise bills. We tell you exactly what it costs before we start.' },
              { icon: <Gauge size={24} />, title: 'Fast Turnaround', desc: 'We know you need your car. We get it done right and get it done fast.' },
              { icon: <Shield size={24} />, title: 'Quality Guaranteed', desc: 'We stand behind every repair and every part we install.' },
              { icon: <Clock size={24} />, title: 'Drop-Off Available', desc: 'Leave your car with us — we\'ll call when it\'s ready.' },
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
                <div className="sp-feature-icon sp-feature-icon--gold">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="sp-section sp-section--alt">
        <div className="sp-inner">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-tag">What We Fix</span>
            <h2 className="section-title">Repair Services</h2>
          </motion.div>
          <div className="sp-list-grid">
            {repairServices.map((item, i) => (
              <motion.div
                key={item}
                className="sp-list-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <CheckCircle2 size={18} className="sp-list-check sp-list-check--gold" />
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
            <h2>Ready to Get Back on the Road?</h2>
            <p>Call us for a free estimate. We'll get you fixed up fast.</p>
            <div className="sp-cta-actions">
              <a href="tel:6417520027" className="btn btn-primary btn-lg">
                <Phone size={18} /> Call 641-752-0027
              </a>
              <Link to="/contact" className="btn btn-white btn-lg">
                Request Quote <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
