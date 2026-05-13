import testimonialImg from "../assets/images/gallery-2.jpeg";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Mehta",
      role: "Happy Homeowner",
      text: "From the first visit to the handover, the experience was seamless and transparent. The quality and attention to detail are outstanding.",
      theme: "green",
      avatar: "https://i.pravatar.cc/120?img=12",
    },
    {
      name: "Priya Sharma",
      role: "Happy Homeowner",
      text: "Subham Builders delivered exactly what they promised — on time and beyond expectations. Our dream home is everything we wished for.",
      theme: "light",
      avatar: "https://i.pravatar.cc/120?img=47",
    },
    {
      name: "Vikram Soni",
      role: "Happy Homeowner",
      text: "The team is professional, supportive, and truly cares about their clients. Highly recommended for anyone looking for their perfect home.",
      theme: "green",
      avatar: "https://i.pravatar.cc/120?img=14",
    },
  ];

  const stats = [
    { icon: "👥", number: "5000+", label: "Happy Families" },
    { icon: "⌂", number: "25+", label: "Projects Completed" },
    { icon: "👍", number: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-hero-img">
        <img src={testimonialImg} alt="Luxury home" />
      </div>

      <aside className="testimonial-stats-panel">
        {stats.map((item) => (
          <div className="testimonial-stat" key={item.label}>
            <div className="testimonial-stat-icon">{item.icon}</div>
            <strong>{item.number}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </aside>

      <div className="testimonials-container">
        <div className="testimonials-heading">
          <div className="testimonial-title-line">
            <span></span>
            <b>❦</b>
            <span></span>
          </div>

          <p>Testimonials</p>

          <h2>
            Trusted by Families.
            <br />
            <em>Built on Relationships.</em>
          </h2>

          <div className="testimonial-small-line">
            <span></span>
            <b>◆</b>
            <span></span>
          </div>

          <h3>
            Our buyers’ trust and happiness inspire us to keep delivering
            exceptional spaces and experiences.
          </h3>
        </div>

        <div className="testimonial-cards">
          {reviews.map((review) => (
            <div
              className={`testimonial-card-v2 ${
                review.theme === "light" ? "testimonial-light" : ""
              }`}
              key={review.name}
            >
              <div className="testimonial-card-top">
                <span className="quote-mark">“</span>
                <span className="stars">★★★★★</span>
              </div>

              <p className="review-text">{review.text}</p>

              <div className="reviewer-row">
                <img src={review.avatar} alt={review.name} />
                <div>
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>

              <div className="big-quote">”</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}