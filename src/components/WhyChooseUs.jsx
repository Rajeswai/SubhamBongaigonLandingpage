import whyImg from "../assets/images/why-choose-us.jpeg";

export default function WhyChooseUs() {
  const leftReasons = [
    {
      icon: "🛡️",
      title: "Trusted Developer",
      text: "A legacy of quality construction and timely delivery.",
    },
    {
      icon: "📍",
      title: "Prime Location",
      text: "Strategically located with easy access to everything you need.",
    },
    {
      icon: "🏢",
      title: "Quality Construction",
      text: "Built with superior materials and modern construction standards.",
    },
  ];

  const rightReasons = [
    {
      icon: "🌳",
      title: "Green Surroundings",
      text: "Lush landscapes and open spaces for a healthier life.",
    },
    {
      icon: "👥",
      title: "Vibrant Community",
      text: "A safe, friendly, and inclusive community for all ages.",
    },
    {
      icon: "₹",
      title: "Great Value",
      text: "Premium living spaces that offer long-term value and peace of mind.",
    },
  ];

  const bottomItems = [
    {
      icon: "🏅",
      title: "Premium Amenities",
      text: "World-class amenities for a comfortable life.",
    },
    {
      icon: "🛡️",
      title: "24x7 Security",
      text: "Round-the-clock security for your safety.",
    },
    {
      icon: "⚙️",
      title: "Hassle-Free Maintenance",
      text: "Professional upkeep for stress-free living.",
    },
    {
      icon: "🍃",
      title: "Sustainable Living",
      text: "Eco-friendly practices for a better tomorrow.",
    },
    {
      icon: "⌂",
      title: "Future Ready",
      text: "Homes designed for modern lifestyles.",
    },
  ];

  return (
    <section id="why-choose-us" className="why-section">
      <div className="why-heading">
        <div className="why-top-line">
          <span></span>
          <b>❦</b>
          <span></span>
        </div>

        <p>Why Choose Us</p>

        <h2>
          Built on Trust.
          <em> Designed for You.</em>
        </h2>

        <div className="why-small-line">
          <span></span>
          <b>❧</b>
          <span></span>
        </div>

        <h3>
          At Subham Park Bongaigaon, we go beyond bricks and concrete.
          <br />
          We create spaces that deliver comfort, value, and a better everyday life.
        </h3>
      </div>

      <div className="why-main-layout">
        <div className="why-reasons-column">
          {leftReasons.map((item) => (
            <div className="why-reason-card" key={item.title}>
              <div className="why-reason-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="why-image-frame">
          <img src={whyImg} alt="Why choose Subham Park Bongaigaon" />

          <div className="why-image-badge-icon">⌂</div>

          <div className="why-image-caption">
            <span>❧</span>
            <h4>
              Thoughtfully planned.
              <br />
              Perfectly delivered.
            </h4>
            <span>❧</span>
          </div>
        </div>

        <div className="why-reasons-column">
          {rightReasons.map((item) => (
            <div className="why-reason-card" key={item.title}>
              <div className="why-reason-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="why-bottom-strip">
        {bottomItems.map((item) => (
          <div className="why-strip-item" key={item.title}>
            <div className="why-strip-icon">{item.icon}</div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}