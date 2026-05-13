import footerBg from "../assets/images/footer-bg.png";

export default function Footer() {
  const links = [
    "Home",
    "About Project",
    "Amenities",
    "Floor Plans",
    "Gallery",
    "Location Advantage",
    "Testimonials",
    "Contact",
  ];

  return (
    <footer className="luxury-footer">
      <div
        className="luxury-footer-bg"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="luxury-footer-overlay">
          <div className="luxury-footer-top">
            <div className="footer-brand-block">
              <p className="footer-label">SUBHAM BUILDERS</p>

              <h2>
                Building Trust.
                <span>Crafting Dreams.</span>
              </h2>

              <p className="footer-text">
                Creating premium residences with elegant architecture,
                thoughtful planning, and lasting value for generations.
              </p>

              <div className="footer-socials">
                <a href="#">f</a>
                <a href="#">◎</a>
                <a href="#">in</a>
                <a href="#">▶</a>
              </div>
            </div>

            <div className="footer-links-block">
              <h3>Quick Links</h3>
              <ul>
                {links.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact-block">
              <h3>Contact Details</h3>

              <div className="footer-contact-item">
                <span>☎</span>
                <div>
                  <strong>Phone</strong>
                  <p>9854641000</p>
                  <p>0361 234 2344</p>
                </div>
              </div>

              <div className="footer-contact-item">
                <span>✉</span>
                <div>
                  <strong>Email</strong>
                  <p>info@subhamgroup.com</p>
                </div>
              </div>

              <div className="footer-contact-item">
                <span>⌖</span>
                <div>
                  <strong>Address</strong>
                  <p>
                    Subham Park, Near Durga Mandir, Chapaguri Road,
                    Bongaigaon, Assam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-stats-bar">
            <div className="footer-stat">
              <span>15+</span>
              <p>Years of Excellence</p>
            </div>

            <div className="footer-stat">
              <span>25+</span>
              <p>Projects Completed</p>
            </div>

            <div className="footer-stat">
              <span>5000+</span>
              <p>Happy Families</p>
            </div>

            <div className="footer-stat">
              <span>100%</span>
              <p>Commitment to Quality</p>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p>© 2026 Subham Builders. All Rights Reserved.</p>

            <div>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}