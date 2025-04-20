import React from "react";
import "./Card.css"; // Add styling for the card component

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
