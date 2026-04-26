'use client';

import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <a href="/" className="logo">
        <img src="/images/logo.png" alt="Mortons Rolls" className="logo-img" />
      </a>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        <li><a href="#rolls">Our Rolls</a></li>
        <li><a href="#story">Our Story</a></li>
        <li><a href="#where">Where to Buy</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a className="nav-cta" href="#where">Find Us</a>

      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? '✕' : '☰'}
      </button>
    </header>
  );
}
