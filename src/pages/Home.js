import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Truck, Wrench, Settings, Phone, ArrowRight,
  Shield, Clock, Award, Star, ChevronRight, MapPin
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
};

const services = [
  {
    icon: <Truck size={32} />,
    title: '24/7 Emergency Towing',
    desc: 'Flatbed hauling within 200 miles. Light to heavy duty — we handle it all, day or night.',
    link: '/towing',
    accent: 'var(--red)',
  },
  {
    icon: <Wrench size={32} />,
    title: 'Auto Repair',
    desc: 'Fast, honest repair with accurate estimates. We get you back on the road safely.',
    link: '/repair',
    accent: 'var(--gold)',
  },
  {
    icon: <Settings size={32} />,
    title: 'Parts & Salvage',
    desc: 'New, used, and antique parts. 8+ acres of inventory — we have what you need.',
    link: '/parts',
    accent: '#4A9EFF',
  },
];

const stats = [
  { value: '75+', label: 'Years in Business', icon: <Award size={22} /> },
  { value: '200', label: 'Mile Tow Radius', icon: <Truck size={22} /> },
  { value: '8+', label: 'Acres of Parts', icon: <Settings size={22} /> },
  { value: '24/7', label: 'Emergency Service', icon: <Clock size={22} /> },
];

const testimonials = [
  { name: 'Mike R.', loc: 'Marshalltown', text: 'Called at 2 AM stuck on I-80. They were there in 30 minutes. Saved my trip.', stars: 5 },
  { name: 'Sarah K.', loc: 'Grinnell', text: 'Found a hard-to-find transmission for my 2004 truck. Half the price of the dealer.', stars: 5 },
  { name: 'Dave L.', loc: 'Newton', text: 'Honest folks who stand behind their work. Been going here for 20 years.', stars: 5 },
];

export default function Home() {
  return (
    <PageTransition>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient" />
          <div className="hero-grid-pattern" />
        </div>
        <div className="hero-inner">
          <motion.div className="hero-content" initial="hidden" animate="visible">
            <motion.div className="hero-badge" variants={fadeUp} custom={0}>
              <Shield size={14} />
              <span>Trusted Since 1948</span>
            </motion.div>
            <motion.h1 className="hero-title" variants={fadeUp} custom={1}>
              Central Iowa's Most
              <span className="hero-title-accent"> Trusted </span>
              Auto Service
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeUp} custom={2}>
              Three generations of reliable towing, expert repair, and quality parts.
              When you need it done right, you need Hogeland.
            </motion.p>
            <motion.div className="hero-actions" variants={fadeUp} custom={3}>
              <a href="tel:6417520027" className="btn btn-primary btn-lg">
                <Phone size={18} />
                Call 641-752-0027
              </a>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Get a Quote
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div className="hero-trust" variants={fadeUp} custom={4}>
              <div className="hero-trust-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--gold)" color="var(--gold)" />)}
              </div>
              <span>Rated 5 stars by our community</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero-card">
              <div className="hero-card-icon">
                <Phone size={28} />
              </div>
              <h3>Need Help Now?</h3>
              <p>24/7 emergency towing available within 200 miles of Marshalltown</p>
              <a href="tel:6417520027" className="hero-card-btn">
                Call Emergency Line
                <ChevronRight size={16} />
              </a>
              <div className="hero-card-glow" />
            </div>
          </motion.div>
        </div>
        <div className="hero-scroll-indicator">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="hero-scroll-dot"
          />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="stats-inner">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i}
            >
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section" id="services">
        <div className="services-inner">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-desc">
              From roadside emergencies to full engine rebuilds — we've got you covered.
            </p>
          </motion.div>
          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="service-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8 }}
              >
                <div className="service-icon" style={{ color: s.accent }}>
                  {s.icon}
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <Link to={s.link} className="service-link" style={{ color: s.accent }}>
                  Learn More <ArrowRight size={16} />
                </Link>
                <div className="service-card-border" style={{ background: s.accent }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="about-strip">
        <div className="about-inner">
          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-tag">Our Heritage</span>
            <h2 className="section-title">Family-Owned Since 1948</h2>
            <p>
              Founded by Lyle E. Hogeland as a body shop, Hogeland Auto Plaza has
              grown into a full-service towing, repair, and salvage operation
              serving Central Iowa. Today, we continue the tradition of treating
              every customer like family — with honest work and fair prices.
            </p>
            <div className="about-values">
              <div className="about-value">
                <Shield size={20} />
                <span>Honest Estimates</span>
              </div>
              <div className="about-value">
                <Clock size={20} />
                <span>Fast Turnaround</span>
              </div>
              <div className="about-value">
                <Award size={20} />
                <span>Quality Parts</span>
              </div>
            </div>
            <Link to="/history" className="btn btn-outline" style={{ marginTop: 24 }}>
              Read Our Story <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            className="about-highlight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <div className="about-year-card">
              <div className="about-year">1948</div>
              <div className="about-year-label">Year Founded</div>
              <div className="about-year-desc">
                Three generations of automotive expertise under one roof
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section">
        <div className="testimonials-inner">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-tag">Reviews</span>
            <h2 className="section-title">What Our Customers Say</h2>
          </motion.div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="testimonial-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
              >
                <div className="testimonial-stars">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={14} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name[0]}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-loc">
                      <MapPin size={12} /> {t.loc}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="cta-content"
          >
            <h2>Stranded? Broken Down? Need Parts?</h2>
            <p>We're here around the clock. One call does it all.</p>
            <div className="cta-actions">
              <a href="tel:6417520027" className="btn btn-primary btn-lg">
                <Phone size={18} />
                Call 641-752-0027
              </a>
              <Link to="/contact" className="btn btn-white btn-lg">
                Send a Message
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
