export default function Benefits() {
  const items = [
    {
      icon: '/images/benefits-icon-bun.png',
      alt: 'Bun icon',
      title: <>CRISPY OUTSIDE.<br /><span className="orange">SOFT INSIDE.</span></>,
      desc: <>The perfect texture in every bite.<br />That&apos;s the Mortons difference.</>,
    },
    {
      icon: '/images/benefits-icon-sun.png',
      alt: 'Sun icon',
      title: <>THE ONLY WAY<br /><span className="orange">TO START YOUR DAY.</span></>,
      desc: 'Made for mornings. Made for your everyday.',
    },
    {
      icon: '/images/benefits-icon-grain.png',
      alt: 'Grain icon',
      title: <>BAKED FRESH.<br /><span className="orange">EVERY DAY.</span></>,
      desc: 'We bake fresh, so you can enjoy them at their best.',
    },
  ];

  return (
    <section className="benefits">
      {items.map((item, i) => (
        <div key={i} className="benefit-item">
          <img src={item.icon} alt={item.alt} className="benefit-icon-img" />
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
}
