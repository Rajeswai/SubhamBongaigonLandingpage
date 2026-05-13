const amenities = [
  {
    title: "Modern Gym",
    text: "Well-equipped fitness space for everyday wellness.",
    image: "/src/assets/images/modern-gym.png",
    icon: "🏋️",
  },
  {
    title: "Landscaped Garden",
    text: "Green open spaces crafted for calm family evenings.",
    image: "/src/assets/images/landscaped-garden.png",
    icon: "🌿",
  },
  {
    title: "Kids Play Area",
    text: "Safe and joyful zone designed for children.",
    image: "/src/assets/images/kids-play-area.png",
    icon: "👨‍👩‍👧",
  },
  {
    title: "Parking Space",
    text: "Convenient parking facility for residents and guests.",
    image: "/src/assets/images/parking-space.png",
    icon: "🚗",
  },
  {
    title: "24x7 Security",
    text: "Advanced security with CCTV surveillance.",
    image: "/src/assets/images/security.png",
    icon: "🛡️",
  },
  {
    title: "Clubhouse",
    text: "Elegant clubhouse for celebrations and gatherings.",
    image: "/src/assets/images/clubhouse.png",
    icon: "🏠",
  },
  {
    title: "Swimming Pool",
    text: "Relax and refresh in our premium swimming pool.",
    image: "/src/assets/images/swimming-pool.png",
    icon: "≋",
  },
  {
    title: "Indoor Games",
    text: "Enjoy a variety of indoor games and activities.",
    image: "/src/assets/images/indoor-games.png",
    icon: "🎮",
  },
  {
    title: "Jogging Track",
    text: "Scenic track for your daily walks and morning runs.",
    image: "/src/assets/images/jogging-track.png",
    icon: "🏃",
  },
  {
    title: "Power Backup",
    text: "Uninterrupted power for a worry-free living.",
    image: "/src/assets/images/power-backup.png",
    icon: "⚡",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="amenities-section">
      <div className="amenities-heading">
        <div className="amenities-top-line">
          <span></span>
          <b>❦</b>
          <span></span>
        </div>

        <p>Amenities</p>

        <h2>
          Designed for Comfort.
          <br />
          <em>Built for Better Living.</em>
        </h2>

        <div className="amenities-small-line">
          <span></span>
          <b>❧</b>
          <span></span>
        </div>

        <h3>
          At Subham Park Bongaigaon, every amenity is crafted to elevate your
          lifestyle.
          <br />
          Experience the perfect blend of luxury, convenience, and well-being.
        </h3>
      </div>

      <div className="amenities-grid">
        {amenities.map((item) => (
          <div className="amenity-card" key={item.title}>
            <div className="amenity-img-box">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="amenity-content">
              <div className="amenity-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}