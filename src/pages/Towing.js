import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Truck, Phone, Shield, Clock, MapPin, ArrowRight,
  AlertTriangle, CheckCircle2
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import heroImg from '../assets/hero-towing.png';
import './ServicePage.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  })
};

const equipment = [
  '2006 IHC Car Hauler',
  'Swivel Bed for Recovery',
  'Recovery Winch',
  'Spade for Recovery',
  'Emergency Lighting',
  '2004 IHC Medium & Heavy Duty Tow Truck',
  '3 Statewide Delivery Pickups',
  '2002 IHC Car Hauler',
];

const impoundSteps = [
  'Ensure all police holds are taken care of with the police department.',
  'Bring in your valid driver\'s license or current state issued ID.',
  'Towing fees will need to be paid before the car can be released.',
];

export default function Towing() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${heroImg})` }}>
          <div className="page-hero-gradient page-hero-gradient--red" />
          <div className="page-hero-grid" />
        </div>
        <div className="page-hero-inner">
          <motion.div initial="hidden" animate="visible">
            <motion.div className="page-hero-icon" variants={fadeUp}>
              <Truck size={40} />
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp} custom={1}>
              24/7 Emergency Towing
            </motion.h1>
            <motion.p className="page-hero-subtitle" variants={fadeUp} custom={2}>
              Day or night, rain or shine — we'll get you and your vehicle to safety.
              Serving a 200-mile radius around Marshalltown.
            </motion.p>
            <motion.div className="page-hero-actions" variants={fadeUp} custom={3}>
              <a href="tel:6417520027" className="btn btn-primary btn-lg">
                <Phone size={18} />
                Call Now: 641-752-0027
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="sp-section">
        <div className="sp-inner">
          <div className="sp-feature-grid">
            {[
              { icon: <Clock size={24} />, title: '24/7 Availability', desc: 'Round-the-clock emergency service. We never close.' },
              { icon: <MapPin size={24} />, title: '200-Mile Radius', desc: 'Covering Marshalltown and all of Central Iowa.' },
              { icon: <Shield size={24} />, title: 'Damage-Free Transport', desc: 'Flatbed hauling ensures your vehicle arrives unharmed.' },
              { icon: <Truck size={24} />, title: 'Light to Heavy Duty', desc: 'From compact cars to commercial vehicles.' },
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
                <div className="sp-feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="sp-section sp-section--alt">
        <div className="sp-inner">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-tag">Our Fleet</span>
            <h2 className="section-title">Towing Equipment</h2>
            <p className="section-desc">
              A large variety of tow vehicles ready for any job, from light roadside assists to major recoveries.
            </p>
          </motion.div>
          <div className="sp-list-grid">
            {equipment.map((item, i) => (
              <motion.div
                key={item}
                className="sp-list-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <CheckCircle2 size={18} className="sp-list-check" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impounds */}
      <section className="sp-section">
        <div className="sp-inner">
          <motion.div
            className="sp-impound-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="sp-impound-header">
              <AlertTriangle size={24} />
              <h3>Police Impounds</h3>
            </div>
            <p className="sp-impound-question">How do I get my car out of impound?</p>
            <ol className="sp-impound-steps">
              {impoundSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </motion.div>
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
            <h2>Need a Tow Right Now?</h2>
            <p>One call and we're on our way. Emergency service available 24/7.</p>
            <div className="sp-cta-actions">
              <a href="tel:6417520027" className="btn btn-primary btn-lg">
                <Phone size={18} /> Call 641-752-0027
              </a>
              <Link to="/contact" className="btn btn-white btn-lg">
                Send a Message <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
