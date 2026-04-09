import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import Home from './pages/Home';
import Towing from './pages/Towing';
import Repair from './pages/Repair';
import Parts from './pages/Parts';
import History from './pages/History';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/towing" element={<Towing />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <MobileCTA />
    </div>
  );
}

export default App;
