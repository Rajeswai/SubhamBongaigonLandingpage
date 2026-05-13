import gallery1 from "../assets/images/gallery-1.jpeg";
import gallery2 from "../assets/images/gallery-2.jpeg";
import gallery3 from "../assets/images/gallery-3.jpeg";
import gallery4 from "../assets/images/gallery-4.jpeg";
import gallery5 from "../assets/images/gallery-5.jpeg";
import gallery6 from "../assets/images/gallery-6.jpeg";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-heading">
        <div className="gallery-top-line">
          <span></span>
          <b>❦</b>
          <span></span>
        </div>

        <p>Gallery</p>

        <h2>
          Experience Life
          <br />
          <em>Beyond Ordinary</em>
        </h2>

        <div className="gallery-small-line">
          <span></span>
          <b>❧</b>
          <span></span>
        </div>

        <h3>
          A collection of spaces and moments that define
          <br />
          the lifestyle at Subham Park Bongaigaon.
        </h3>
      </div>

      <div className="gallery-layout">
        <div className="gallery-arch-card big-left">
          <img src={gallery1} alt="Beautiful Surroundings" />
          
        </div>

        <div className="gallery-stack left-stack">
          <div className="gallery-photo-card">
            <img src={gallery2} alt="Elegant Interiors" />
            
          </div>

          <div className="gallery-photo-card">
            <img src={gallery3} alt="Fitness For You" />
            
          </div>
        </div>

        <div className="gallery-center-card">
          <div className="center-icon">📷</div>
          <h4>
            Moments
            <br />
            Made Here,
            <br />
            <em>Memories</em>
            <br />
            <em>Forever.</em>
          </h4>

          <div className="center-line">
            <span></span>
            <b>❖</b>
            <span></span>
          </div>

          <p>
            From peaceful mornings to joyful evenings, every moment here feels
            like home.
          </p>

          <div className="center-leaf">❧</div>
        </div>

        <div className="gallery-stack right-stack">
          <div className="gallery-photo-card">
            <img src={gallery4} alt="Relax and Refresh" />
            
          </div>

          <div className="gallery-photo-card">
            <img src={gallery5} alt="Joyful Childhood" />
            
          </div>
        </div>

        <div className="gallery-arch-card big-right">
          <img src={gallery6} alt="Leisure and Fun" />
        </div>
      </div>
    </section>
  );
}