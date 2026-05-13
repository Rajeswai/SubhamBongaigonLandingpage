import aboutImg from "../assets/images/aboutsectionbg.png";

export default function AboutProject() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image-area">
          <img src={aboutImg} alt="Subham Park Bongaigaon" />
        </div>

        <div className="about-content-area">
          <div className="about-heading-top">
            <span></span>
            <div>❦</div>
            <span></span>
          </div>

          <p className="about-label">ABOUT US</p>

          <h2>
            Crafted for Comfort.
            <br />
            <em>Built for Life.</em>
          </h2>

          <div className="about-small-line">
            <span></span>
            <b>❧</b>
            <span></span>
          </div>

          <p className="about-text">
            Subham Park Bongaigaon is a premium residential development that
            brings together contemporary architecture, thoughtful design, and
            world-class amenities to create a lifestyle of comfort, convenience,
            and sophistication.
          </p>

          <p className="about-text">
            Every detail of our project reflects our commitment to quality,
            sustainability, and customer satisfaction. From spacious homes and
            lush green landscapes to modern amenities and excellent connectivity,
            we ensure a living experience that truly stands apart.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <div className="feature-icon">▥</div>
              <h4>PREMIUM<br />RESIDENCES</h4>
              <p>2.5, 3 & 3.5 BHK<br />Luxury Apartments</p>
            </div>

            <div className="about-feature">
              <div className="feature-icon">♧</div>
              <h4>GREEN<br />ENVIRONMENT</h4>
              <p>Landscaped Gardens<br />& Open Spaces</p>
            </div>

            <div className="about-feature">
              <div className="feature-icon">⌂</div>
              <h4>24×7<br />SECURITY</h4>
              <p>Advanced Security<br />& CCTV Surveillance</p>
            </div>

            <div className="about-feature">
              <div className="feature-icon">⌁</div>
              <h4>LIFESTYLE<br />AMENITIES</h4>
              <p>Clubhouse, Gym,<br />Kids Play Area & More</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-vision-mission">
        <div className="vm-box">
          <div className="vm-icon">◎</div>
          <div>
            <h3>Our Vision</h3>
            <p>
              To be a trusted name in real estate by delivering quality
              construction, timely delivery, and exceptional customer satisfaction.
            </p>
          </div>
        </div>

        <div className="vm-divider"></div>

        <div className="vm-box">
          <div className="vm-icon">◇</div>
          <div>
            <h3>Our Mission</h3>
            <p>
              To create sustainable communities that enhance lifestyles and
              build a better tomorrow for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}