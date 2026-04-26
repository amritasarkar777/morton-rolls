'use client';

import { motion } from 'framer-motion';

const products = [
  {
    img: '/images/roll1.jpg',
    name: '6 Scottish Morning Rolls',
    desc: 'Soft, versatile and perfect for every morning.',
  },
  {
    img: '/images/roll2.jpg',
    name: '4 Scottish Square Rolls',
    desc: 'Hearty, satisfying and great for filled rolls.',
  },
  {
    img: '/images/roll3.jpg',
    name: '4 Scottish Seeded Rolls',
    desc: 'Packed with flavour and everyday goodness.',
  },
  {
    img: '/images/roll4.jpg',
    name: '6 Scottish Mini Rolls',
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
