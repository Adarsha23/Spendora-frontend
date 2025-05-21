import React from "react";
import "./ChartContainer.css";

const ChartContainer = ({ children }) => {
  return (
    <div className="chart-container">
      {children}
    </div>
  );
};

export default ChartContainer;
