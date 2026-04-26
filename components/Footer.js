export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-icon">🍞</span>
            <span className="logo-name">MORTONS</span>
            <span className="logo-sub">ROLLS</span>
          </div>
          <p>We build this city on great rolls. Start every morning the Mortons way.</p>
        </div>

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

        <div className="footer-col">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a className="social-icon" href="#" aria-label="Facebook">f</a>
            <a className="social-icon" href="#" aria-label="Instagram">📷</a>
            <a className="social-icon" href="#" aria-label="TikTok">♪</a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Newsletter</h5>
          <p style={{ color: '#aab4c0', fontSize: '13px', marginBottom: '14px', lineHeight: '1.5' }}>
            Sign up for news, offers and everyday goodness.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button aria-label="Subscribe">›</button>
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
          🏴󠁧󠁢󠁳󠁣󠁴󠁿 Baked in Scotland
        </div>
      </div>
    </footer>
  );
}
