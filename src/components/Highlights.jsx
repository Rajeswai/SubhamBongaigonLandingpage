export default function Highlights() {
  const marqueeItems = [
    "Premium Living Begins Here",
    "Step Into A World Designed For Comfort",
    "Luxury Residences In Bongaigaon",
    "Modern Amenities For Everyday Life",
    "Green Spaces • Secure Living",
  ];

  return (
    <section id="highlights" className="highlight-marquee-section">
      <div className="highlight-marquee">
        <div className="highlight-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span className="highlight-item" key={index}>
              {item}
              <b>⌁</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}