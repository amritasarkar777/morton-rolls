'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <img src="/images/hero-bg.png" alt="" className="hero-bg-img" />
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
          DISCOVER OUR ROLLS <span>›</span>
        </button>
      </motion.div>
    </section>
  );
}
