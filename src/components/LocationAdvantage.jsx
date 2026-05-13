export default function LocationAdvantage() {
  const places = [
    { icon: "🎓", title: "Schools & Colleges", time: "3 - 8 mins" },
    { icon: "🚆", title: "Railway Station", time: "7 - 10 mins" },
    { icon: "✚", title: "Hospitals & Clinics", time: "5 - 10 mins" },
    { icon: "🚌", title: "Bus Stand", time: "5 - 8 mins" },
    { icon: "🛍️", title: "Shopping Malls", time: "6 - 12 mins" },
    { icon: "🏦", title: "Banks & ATMs", time: "3 - 6 mins" },
    { icon: "🛒", title: "Daily Markets", time: "2 - 5 mins" },
    { icon: "🛣️", title: "National Highway", time: "4 - 7 mins" },
  ];

  const bottomItems = [
    {
      icon: "📍",
      title: "Strategic Location",
      text: "Well-connected to all major destinations.",
    },
    {
      icon: "✓",
      title: "Save Time Everyday",
      text: "Close to essentials for a hassle-free life.",
    },
    {
      icon: "👥",
      title: "Growing Neighbourhood",
      text: "Surrounded by development and opportunities.",
    },
    {
      icon: "⌂",
      title: "High Investment Value",
      text: "A location that ensures a better tomorrow.",
    },
  ];

  return (
    <section id="location" className="location-section">
      <div className="location-container">
        <div className="location-main-grid">
          <div className="location-left">
            <div className="location-title-line">
              <span></span>
              <b>❦</b>
              <span></span>
            </div>

            <p className="location-label">Location Advantage</p>

            <h2>
              Perfectly Placed
              <br />
              <em>for a Better Life.</em>
            </h2>

            <div className="location-small-line">
              <span></span>
              <b>❧</b>
              <span></span>
            </div>

            <p className="location-desc">
              Subham Park Bongaigaon enjoys a prime location with excellent
              connectivity to schools, hospitals, markets, and transport hubs.
            </p>

            <div className="nearby-card">
              <div className="nearby-card-title">
                Everything You Need, Just Minutes Away
              </div>

              <div className="nearby-grid">
                {places.map((item) => (
                  <div className="nearby-item" key={item.title}>
                    <div className="nearby-icon">{item.icon}</div>
                    <div className="nearby-copy">
                      <h4>{item.title}</h4>
                      <p>{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="location-map-side">
            <div className="map-title-pill">📍 Subham Park Bongaigaon</div>

            <div className="map-frame">
              <iframe
                title="Subham Park Bongaigaon Location"
                src="https://www.google.com/maps?q=https://maps.app.goo.gl/pbG6xGzDq1JhrKPk9&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="map-floating-card">
                <div className="map-floating-icon">⌖</div>
                <div>
                  <h3>
                    Easy to Reach,
                    <br />
                    Easy to Love.
                  </h3>
                  <p>
                    Well-connected to all key destinations for a convenient
                    everyday life.
                  </p>
                </div>
              </div>
            </div>

            <a
              className="open-map-btn"
              href="https://maps.app.goo.gl/pbG6xGzDq1JhrKPk9"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>

        <div className="location-bottom-strip">
          {bottomItems.map((item) => (
            <div className="location-strip-item" key={item.title}>
              <div className="strip-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}