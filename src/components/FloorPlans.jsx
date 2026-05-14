import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Map } from "lucide-react";
import "../App.css";

import map1 from "../assets/images/map1.jpeg";
import map2 from "../assets/images/map2.jpeg";
import map3 from "../assets/images/map3.jpeg";
import map4 from "../assets/images/map4.jpeg";

const FloorPlans = () => {
  const plans = [
    { image: map1, title: " Floor Plan" },
    { image: map2, title: " Floor Plan" },
    { image: map3, title: " Floor Plan" },
    { image: map4, title: " Floor Plan" },
  ];

  const [active, setActive] = useState(0);

  const prevSlide = () => {
    setActive(active === 0 ? plans.length - 1 : active - 1);
  };

  const nextSlide = () => {
    setActive(active === plans.length - 1 ? 0 : active + 1);
  };

  const leftIndex = active === 0 ? plans.length - 1 : active - 1;
  const rightIndex = active === plans.length - 1 ? 0 : active + 1;

  return (
    <section className="floorplan-section" id="plan">
      <div className="floorplan-header">
        <div className="floorplan-label">
          <span></span>
          <p>Floor Plan</p>
          <span></span>
        </div>

        <h2>
          Smart Layouts for <br />
          <strong>Modern Living.</strong>
        </h2>

        <p>
          Explore thoughtfully designed floor plans crafted for comfort,
          privacy, and everyday convenience.
        </p>
      </div>

      <div className="floorplan-slider">
        <button className="floor-arrow left" onClick={prevSlide}>
          <ChevronLeft size={26} />
        </button>

        <div className="floor-side-card floor-left">
          <div className="floor-card-title">
            <Map size={18} />
            <span>{plans[leftIndex].title}</span>
          </div>
          <img src={plans[leftIndex].image} alt={plans[leftIndex].title} />
        </div>

        <div className="floor-main-card">
          <div className="floor-card-title">
            <Map size={20} />
            <span>{plans[active].title}</span>
          </div>
          <img src={plans[active].image} alt={plans[active].title} />
        </div>

        <div className="floor-side-card floor-right">
          <div className="floor-card-title">
            <Map size={18} />
            <span>{plans[rightIndex].title}</span>
          </div>
          <img src={plans[rightIndex].image} alt={plans[rightIndex].title} />
        </div>

        <button className="floor-arrow right" onClick={nextSlide}>
          <ChevronRight size={26} />
        </button>
      </div>

      <div className="floor-dots">
        {plans.map((_, index) => (
          <button
            key={index}
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default FloorPlans;