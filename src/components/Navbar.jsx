import logo from "../assets/images/logo.jpeg";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Amenities", href: "#amenities" },
  { label: "Walkthrough", href: "#gallery" },
  { label: "Plan", href: "#floorplans" },
  { label: "Location", href: "#location" },
  { label: "About Us", href: "#about" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="top-item">📍 Bongaigaon, Guwahati</div>
        <div className="top-item">📞 +91 9854041000</div>
        <div className="top-item">⏰ Mon - Sat : 10:00 AM - 7:00 PM</div>

        <div className="top-icons">
          <a href="/" aria-label="Facebook">f</a>
          <a href="/" aria-label="Instagram">i</a>
          <a href="/" aria-label="WhatsApp">w</a>
        </div>
      </div>

      <div className="header-inner">
        <a href="#hero" className="brand">
          <img src={logo} alt="Subham Park Bongaigaon Logo" />
          <div>
            <span>Luxury Living</span>
            <strong>Subham Park Bongaigaon</strong>
          </div>
        </a>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#contact" className="brochure-btn">
            Download Brochure ↗
          </a>
        </div>
      </div>

      <div className="header-accent">
        <div className="accent-leaf">❦</div>
      </div>
    </header>
  );
}