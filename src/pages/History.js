import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, Heart, Leaf, Users, Phone } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import './History.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  })
};

const timeline = [
  {
    year: '1948',
    title: 'The Beginning',
    desc: 'Lyle E. Hogeland opens a body shop on East Main Street in Marshalltown, Iowa. A small operation built on hard work and honest service.',
  },
  {
    year: '1960s',
    title: 'Growth & Expansion',
    desc: 'The business expands to include a salvage yard and towing services. Hogeland becomes a full-service automotive destination for Central Iowa.',
  },
  {
    year: '1980s',
    title: 'Next Generation',
    desc: 'Lonnie joins the family business, bringing fresh energy while honoring the values his father built. The salvage yard grows to over 8 acres.',
  },
  {
    year: 'Today',
    title: 'A Legacy Continues',
    desc: 'Now a progressive, environmentally friendly salvage yard with 24/7 towing, expert repair, and thousands of quality parts — still family-owned, still community-focused.',
  },
];

const values = [
  { icon: <Heart size={24} />, title: 'Community First', desc: 'We treat every customer like family. Always have, always will.' },
  { icon: <Leaf size={24} />, title: 'Eco-Conscious', desc: 'Environmentally responsible recycling of hundreds of vehicles each year.' },
  { icon: <Users size={24} />, title: 'Family Owned', desc: 'Three generations of Hogeland expertise under one roof.' },
  { icon: <Award size={24} />, title: 'Quality Promise', desc: 'Honest work, fair prices, and parts that get the job done.' },
];

export default function History() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="page-hero-gradient page-hero-gradient--red" />
          <div className="page-hero-grid" />
        </div>
        <div className="page-hero-inner">
          <motion.div initial="hidden" animate="visible">
            <motion.div className="page-hero-icon" variants={fadeUp}>
              <Award size={40} />
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp} custom={1}>
              Our Story
            </motion.h1>
            <motion.p className="page-hero-subtitle" variants={fadeUp} custom={2}>
              From a one-man body shop to Central Iowa's trusted auto service.
              Over 75 years of family values and automotive expertise.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Memorial */}
      <section className="memorial-section">
        <div className="memorial-inner">
          <motion.div
            className="memorial-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="memorial-accent" />
            <h3>In Loving Memory</h3>
            <div className="memorial-name">Lyle E. Hogeland</div>
            <div className="memorial-dates">December 2, 1922 — March 18, 2015</div>
            <p>
              Founder of Hogeland Auto Plaza. A man who built more than a business —
              he built a legacy of integrity, hard work, and service to community
              that carries on today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="timeline-inner">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">75+ Years of Service</h2>
          </motion.div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="timeline-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
              >
                <div className="timeline-dot" />
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sp-section sp-section--alt">
        <div className="sp-inner">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-tag">What We Stand For</span>
            <h2 className="section-title">Our Values</h2>
          </motion.div>
          <div className="sp-feature-grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="sp-feature-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="sp-feature-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
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
            <h2>Come Visit Us in Marshalltown</h2>
            <p>We'd love to meet you and show you why families have trusted us for three generations.</p>
            <div className="sp-cta-actions">
              <a href="tel:6417520027" className="btn btn-primary btn-lg">
                <Phone size={18} /> Call Us
              </a>
              <Link to="/contact" className="btn btn-white btn-lg">
                Get Directions <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
