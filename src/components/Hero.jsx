import heroBg from "../assets/images/herosectionbg.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-copy">
          <div className="hero-logo-mark">❦</div>

          <h1>
            Subham Park
            <span>Bongaigaon</span>
          </h1>

          <h2>
            Elevated Living,
            <br />
            <span>Everyday Bliss</span>
          </h2>

          <p>
            Premium 2.5 | 3 | 3.5 BHK Apartments
            <br />
            Designed for Comfort. Built for Life.
          </p>

          <div className="hero-features">
            <div>
              <span>⌖</span>
              <strong>Prime</strong>
              <small>Location</small>
            </div>

            <div>
              <span>▦</span>
              <strong>Modern</strong>
              <small>Amenities</small>
            </div>

            <div>
              <span>☑</span>
              <strong>24x7</strong>
              <small>Security</small>
            </div>

            <div>
              <span>♧</span>
              <strong>Green</strong>
              <small>Environment</small>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#contact" className="hero-btn primary">
              Book A Site Visit <span>→</span>
            </a>

            <a href="#floorplans" className="hero-btn secondary">
              ⬇ Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}