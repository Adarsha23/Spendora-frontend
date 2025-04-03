import React from "react";
import "./ChartContainer.css"; // Add any styling you need

const ChartContainer = ({ children }) => {
  return (
    <div className="chart-container">
      {children}
    </div>
  );
};

export default ChartContainer;
