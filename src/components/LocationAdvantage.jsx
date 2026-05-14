import React, { useState } from "react";
import {
  GraduationCap,
  Cross,
  ShoppingBag,
  ShoppingCart,
  Train,
  Bus,
  Landmark,
  Route,
  ChevronDown,
  MapPin,
  ExternalLink,
} from "lucide-react";
import "../App.css";

const LocationAdvantage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const locations = [
    {
      icon: <GraduationCap />,
      title: "Schools & Colleges",
      time: "3 - 8 mins",
    },
    {
      icon: <Cross />,
      title: "Hospitals & Clinics",
      time: "5 - 10 mins",
    },
    {
      icon: <ShoppingBag />,
      title: "Shopping Malls",
      time: "6 - 12 mins",
    },
    {
      icon: <ShoppingCart />,
      title: "Daily Markets",
      time: "2 - 5 mins",
    },
  ];

  return (
    <section className="location-section" id="location">
      <div className="location-content">
        <div className="location-label">
          <span></span>
          <p>Location</p>
          <span></span>
        </div>

        <h2>
          Perfectly Located <br />
          <strong>for a Better Life.</strong>
        </h2>

        <div className="location-divider">
          <span></span>
          <i></i>
          <span></span>
        </div>

        <p className="location-text">
          Subham Park Bongaigaon enjoys a prime location with excellent
          connectivity to schools, hospitals, markets, and transport hubs.
        </p>

        <div className="location-accordion">
          {locations.map((item, index) => (
            <div
              className={`location-accordion-item ${
                openIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <span className="location-icon">{item.icon}</span>
                <span className="location-title">{item.title}</span>
                <ChevronDown className="location-arrow" />
              </button>

              {openIndex === index && (
                <div className="location-panel">
                  <p>{item.time} away from Subham Park Bongaigaon.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="location-map-card">
        <iframe
          title="Subham Park Bongaigaon Location"
          src="https://www.google.com/maps?q=Subham%20Park%20Bongaigaon&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="map-pin-card">
          <MapPin size={24} />
          <div>
            <h4>Subham Park</h4>
            <p>Bongaigaon</p>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Subham%20Park%20Bongaigaon"
          target="_blank"
          rel="noreferrer"
          className="map-button"
        >
          View on Google Maps <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
};

export default LocationAdvantage;