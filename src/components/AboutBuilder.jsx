import builderImg from "../assets/images/about-builder.jpeg";

export default function AboutBuilder() {
  const leftPoints = [
    {
      icon: "◇",
      title: "Quality That Defines Us",
      text: "We use premium materials and follow rigorous quality standards at every step.",
    },
    {
      icon: "🤝",
      title: "Integrity In Every Step",
      text: "Transparency, honesty, and ethical practices are the foundation of our work.",
    },
    {
      icon: "👥",
      title: "Experience You Can Trust",
      text: "Years of expertise and a team of passionate professionals make us a name you can rely on.",
    },
    {
      icon: "◷",
      title: "Commitment That Delivers",
      text: "We value your time and ensure every project is delivered on time, every time.",
    },
  ];

  const rightPoints = [
    {
      icon: "👤",
      title: "Customer First",
      text: "Your satisfaction is our top priority.",
    },
    {
      icon: "⌂",
      title: "Designed For Better Living",
      text: "Thoughtful planning for comfortable and modern living.",
    },
    {
      icon: "♧",
      title: "Sustainable Approach",
      text: "Eco-friendly practices for a greener and better future.",
    },
    {
      icon: "↗",
      title: "Value That Grows",
      text: "Projects that offer long-term value and a brighter future.",
    },
  ];

  const stats = [
    { icon: "✪", number: "15+", text: "Years of Experience" },
    { icon: "▥", number: "25+", text: "Projects Completed" },
    { icon: "👥", number: "5000+", text: "Happy Families" },
    { icon: "⌖", number: "5+", text: "Cities Presence" },
    { icon: "⌾", number: "100%", text: "Commitment to Quality" },
  ];

  return (
    <section id="about-builder" className="builder-section">
      <div className="builder-container">
        <div className="builder-main-grid">
          <div className="builder-left">
            <div className="builder-title-line">
              <span></span>
              <b>❦</b>
              <span></span>
            </div>

            <p className="builder-label">About The Builders</p>

            <h2>
              Building Legacies.
              <br />
              <em>Crafting Futures.</em>
            </h2>

            <div className="builder-small-line">
              <span></span>
              <b>❧</b>
              <span></span>
            </div>

            <p className="builder-desc">
              At Subham Builders, we believe that every structure we build is
              more than just concrete and steel — it's a promise of trust,
              quality, and a better tomorrow.
            </p>

            <div className="builder-left-cards">
              {leftPoints.map((item) => (
                <div className="builder-left-card" key={item.title}>
                  <div className="builder-left-icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="builder-image-wrap">
            <img src={builderImg} alt="Subham Builders" />

            <div className="builder-vision-card">
              <div className="vision-leaf">❦</div>
              <h3>Our Vision</h3>
              <p>
                To create exceptional spaces that enhance lives, build
                communities, and stand as landmarks for generations to come.
              </p>
            </div>
          </div>

          <div className="builder-right-panel">
            {rightPoints.map((item) => (
              <div className="builder-right-point" key={item.title}>
                <div className="builder-right-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="builder-stats-strip">
          {stats.map((item) => (
            <div className="builder-stat" key={item.text}>
              <div className="builder-stat-icon">{item.icon}</div>
              <div>
                <strong>{item.number}</strong>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}