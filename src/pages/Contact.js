import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, Send, MessageSquare
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import heroImg from '../assets/hero-contact.png';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  })
};

const contactInfo = [
  { icon: <Phone size={20} />, label: 'Phone', value: '641-752-0027', href: 'tel:6417520027' },
  { icon: <Phone size={20} />, label: 'Toll Free', value: '866-752-0027', href: 'tel:8667520027' },
  { icon: <Phone size={20} />, label: "Lonnie's Cell", value: '641-750-8854', href: 'tel:6417508854' },
  { icon: <Mail size={20} />, label: 'Fax', value: '641-752-0002', href: null },
  { icon: <MapPin size={20} />, label: 'Address', value: '1408 E. Main Street, Marshalltown, IA 50158', href: 'https://maps.google.com/?q=1408+E+Main+Street+Marshalltown+IA+50158' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <MessageSquare size={40} />
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp} custom={1}>
              Contact Us
            </motion.h1>
            <motion.p className="page-hero-subtitle" variants={fadeUp} custom={2}>
              Got a question, need a tow, or looking for a part?
              We're here to help. Reach out anytime.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-section">
        <div className="contact-inner">
          <div className="contact-grid">
            {/* Form */}
            <motion.div
              className="contact-form-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <Send size={32} />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>We'll get back to you as soon as possible. For immediate help, call us at 641-752-0027.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3>Send Us a Message</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text" id="name" name="name"
                        value={form.name} onChange={handleChange}
                        placeholder="Your name" required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email" id="email" name="email"
                        value={form.email} onChange={handleChange}
                        placeholder="your@email.com" required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel" id="phone" name="phone"
                        value={form.phone} onChange={handleChange}
                        placeholder="(555) 555-5555"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Needed</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service</option>
                        <option value="towing">24/7 Towing</option>
                        <option value="repair">Auto Repair</option>
                        <option value="parts">Parts Request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message" name="message" rows={5}
                      value={form.message} onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info Side */}
            <motion.div
              className="contact-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
            >
              <div className="contact-info-card">
                <h3>Get In Touch</h3>
                <div className="contact-info-list">
                  {contactInfo.map(c => (
                    <div key={c.label} className="contact-info-item">
                      <div className="contact-info-icon">{c.icon}</div>
                      <div>
                        <div className="contact-info-label">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="contact-info-value contact-info-link"
                             target={c.href.startsWith('http') ? '_blank' : undefined}
                             rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                            {c.value}
                          </a>
                        ) : (
                          <div className="contact-info-value">{c.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-hours-card">
                <div className="contact-hours-icon">
                  <Clock size={20} />
                </div>
                <h4>Business Hours</h4>
                <div className="contact-hours-list">
                  <div className="contact-hours-row">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="contact-hours-row">
                    <span>Saturday</span>
                    <span>By Appointment</span>
                  </div>
                  <div className="contact-hours-row">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                  <div className="contact-hours-emergency">
                    24/7 Emergency Towing Always Available
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <iframe
          title="Hogeland Auto Plaza Location"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=1408+E+Main+Street,+Marshalltown,+IA+50158&zoom=15"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </PageTransition>
  );
}
