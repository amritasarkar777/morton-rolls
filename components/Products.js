'use client';

import { motion } from 'framer-motion';

const products = [
  {
    img: '/images/roll-morning.png',
    name: <>6 Scottish<br />Morning Rolls</>,
    desc: 'Soft, versatile and perfect for every morning.',
  },
  {
    img: '/images/roll-square.png',
    name: <>4 Scottish<br />Square Rolls</>,
    desc: 'Hearty, satisfying and great for filled rolls.',
  },
  {
    img: '/images/roll-seeded.png',
    name: <>4 Scottish<br />Seeded Rolls</>,
    desc: 'Packed with flavour and everyday goodness.',
  },
  {
    img: '/images/roll-mini.png',
    name: <>6 Scottish<br />Mini Rolls</>,
    desc: 'Perfect for sharing, lunchboxes and more.',
  },
];

export default function Products() {
  return (
    <section id="rolls" className="products">
      <div className="products-header">
        <h2>Our Rolls</h2>
      </div>

      <div className="products-grid">
        {products.map((p, i) => (
          <motion.div
            key={i}
            className="product-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <img src={p.img} alt={p.name} />
            <div className="product-info">
              <h4>{p.name}</h4>
              <p>{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="products-footer">
        <button className="view-all-btn">VIEW ALL PRODUCTS ›</button>
      </div>
    </section>
  );
}
