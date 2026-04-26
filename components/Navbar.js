'use client';

import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="logo">
        <span className="logo-icon">🍞</span>
        <span className="logo-name">MORTONS</span>
        <span className="logo-sub">ROLLS</span>
      </div>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        <li><a href="#rolls">Our Rolls</a></li>
        <li><a href="#story">Our Story</a></li>
        <li><a href="#where">Where to Buy</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a className="nav-cta" href="#where">Find Us</a></li>
      </ul>

      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? '✕' : '☰'}
      </button>
    </header>
  );
}
