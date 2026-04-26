export default function Benefits() {
  const items = [
    {
      icon: '🫓',
      title: <>CRISPY OUTSIDE.<br /><span className="orange">SOFT INSIDE.</span></>,
      desc: "The perfect texture in every bite. That's the Mortons difference.",
    },
    {
      icon: '🌅',
      title: <><span className="orange">THE ONLY WAY<br />TO START YOUR DAY.</span></>,
      desc: 'Made for mornings. Made for your everyday.',
    },
    {
      icon: '🌾',
      title: <>BAKED FRESH.<br /><span className="orange">EVERY DAY.</span></>,
      desc: 'We bake fresh, so you can enjoy them at their best.',
    },
  ];

  return (
    <section className="benefits">
      {items.map((item, i) => (
        <div key={i} className="benefit-item">
          <span className="benefit-icon">{item.icon}</span>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
}
