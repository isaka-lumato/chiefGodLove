import React from "react";

const values = [
  {
    title: "Compassion",
    description: "Serving with love and dignity.",
  },
  {
    title: "Leadership",
    description: "Inspiring growth and transformation.",
  },
  {
    title: "Integrity",
    description: "Leading with honesty and moral strength.",
  },
  {
    title: "Empowerment",
    description: "Helping others overcome obstacles and succeed.",
  },
];

function CoreValuesSection() {
  return (
    <section className="core-values-section" id="CoreValues">
      <div className="core-values-header">
        <h2>Core Values</h2>
        <p>What drives our vision, purpose, and daily mission.</p>
      </div>

      <div className="core-values-container">
        {values.map((value, index) => (
          <div className="value-card" key={index}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>

      <div className="core-values-image">
        <img src="" alt="Core Values Background" />
      </div>
    </section>
  );
}

export default CoreValuesSection;
