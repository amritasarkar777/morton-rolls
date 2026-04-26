export default function OurStory() {
  return (
    <section id="story" className="story">
      <div className="story-content">
        <p className="story-label">Our Story</p>
        <h2>
          A CITY. A HERITAGE.<br />
          <span className="orange">A GREAT ROLL.</span>
        </h2>
        <p>
          We're Mortons. Born in the heart of Scotland, built on tradition,
          and baked with pride. From our ovens to your table, we're here to
          fuel your mornings and your city.
        </p>
        <button className="story-btn">OUR STORY ›</button>
      </div>

      <div className="story-image">
        <img src="/images/hero.jpg" alt="Edinburgh city" />
      </div>
    </section>
  );
}
