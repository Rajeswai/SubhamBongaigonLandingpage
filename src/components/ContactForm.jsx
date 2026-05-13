export default function ContactForm() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrap">
        <div className="contact-left">
          <div className="contact-title-line">
            <span></span>
            <b>❦</b>
            <span></span>
          </div>

          <p className="contact-label">Get In Touch</p>

          <h2>
            Let’s Build
            <br />
            <em>Something</em>
            <br />
            <em>Extraordinary.</em>
          </h2>

          <div className="contact-small-line">
            <span></span>
            <b>◆</b>
            <span></span>
          </div>

          <p className="contact-intro">
            Have a question or ready to start your dream project? We’d love to
            hear from you. Reach out to us and our team will connect with you
            shortly.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-info-icon">☎</div>
              <div>
                <h4>Phone</h4>
                <p>9854641000</p>
                <p>0361 234 2344</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">✉</div>
              <div>
                <h4>Website</h4>
                <p>subhamgroup.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">⌖</div>
              <div>
                <h4>Site Address</h4>
                <p>
                  Subham Park, Near Durga Mandir, Gurunanak Nagar,
                  Chapaguri Road, Bongaigaon, Assam - 783380
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">◷</div>
              <div>
                <h4>Office Address</h4>
                <p>
                  Subham Velocity, 5th Floor, Honuram Boro Path, Opposite
                  Wallford, G.S Road, Guwahati - 781005
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          <h3>Send Us A Message</h3>

          <div className="contact-form-line">
            <span></span>
            <b>◆</b>
            <span></span>
          </div>

          <form className="contact-form">
            <div className="contact-form-row">
              <label>
                <span>♙</span>
                <input type="text" placeholder="Your Name" />
              </label>

              <label>
                <span>✉</span>
                <input type="email" placeholder="Your Email" />
              </label>
            </div>

            <label>
              <span>☎</span>
              <input type="tel" placeholder="Your Phone" />
            </label>

            <label>
              <span>▦</span>
              <select defaultValue="">
                <option value="" disabled>
                  Select Enquiry Type
                </option>
                <option>Book A Site Visit</option>
                <option>Download Brochure</option>
                <option>Price Details</option>
                <option>Floor Plan Details</option>
              </select>
            </label>

            <label className="message-field">
              <span>✎</span>
              <textarea placeholder="Your Message"></textarea>
            </label>

            <button type="submit">Send Message ✈</button>
          </form>

          <div className="contact-form-sketch"></div>
          <div className="contact-gold-leaf">❧</div>
        </div>
      </div>
    </section>
  );
}