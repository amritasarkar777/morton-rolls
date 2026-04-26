export default function Footer() {
  return (
    <footer>
      <div className="footer-top">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">
              <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
                <circle cx="20" cy="20" r="20" fill="#F04E23"/>
                <ellipse cx="20" cy="24" rx="12" ry="7" fill="#fff" opacity="0.9"/>
                <ellipse cx="20" cy="20" rx="10" ry="6" fill="#FAD59A"/>
                <path d="M12 18 Q20 10 28 18" stroke="#F04E23" strokeWidth="1.5" fill="none"/>
              </svg>
            </span>
            <div>
              <div className="footer-logo-name">MORTONS</div>
              <div className="footer-logo-sub">— ROLLS —</div>
            </div>
          </div>
          <p className="footer-tagline">We build this city on great rolls.</p>
          <p className="footer-tagline-sub">Make your day, by starting it on a Mortons roll.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#rolls">Our Rolls</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#where">Where to Buy</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="footer-col">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a className="social-icon" href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a className="social-icon" href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a className="social-icon" href="#" aria-label="TikTok">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h5>Newsletter</h5>
          <p className="footer-newsletter-text">
            Sign up for news, offers and everyday goodness.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button aria-label="Subscribe">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2024 Mortons Rolls. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>
        <div className="footer-badge">
          <svg viewBox="0 0 20 14" width="24" height="16">
            <rect width="20" height="14" fill="#003399"/>
            <line x1="0" y1="0" x2="20" y2="14" stroke="#fff" strokeWidth="3"/>
            <line x1="20" y1="0" x2="0" y2="14" stroke="#fff" strokeWidth="3"/>
            <line x1="0" y1="0" x2="20" y2="14" stroke="#0065BD" strokeWidth="2"/>
            <line x1="20" y1="0" x2="0" y2="14" stroke="#0065BD" strokeWidth="2"/>
          </svg>
          Baked in Scotland
        </div>
      </div>
    </footer>
  );
}
