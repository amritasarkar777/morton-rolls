'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1>
          WE BUILT<br />
          THIS CITY ON<br />
          <span className="orange">GREAT ROLLS.</span>
        </h1>
        <p className="hero-sub">Proudly baked in Scotland. Loved every day.</p>
        <button className="hero-btn">
          DISCOVER OUR ROLLS <span className="hero-btn-arrow">›</span>
        </button>
      </motion.div>

      <motion.div
        className="hero-badge"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <span className="hero-badge-icon">🍞</span>
        BAKED FRESH<br />EVERY DAY
      </motion.div>
    </section>
  );
}
