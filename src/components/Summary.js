import React from "react";
import "./Summary.css";

const monthlySavings = [
  { month: "January", saved: "$200", suggestion: "Try reducing entertainment expenses." },
  { month: "February", saved: "$350", suggestion: "Increase savings by cutting down on groceries." },
  { month: "March", saved: "$150", suggestion: "Focus on better budgeting for utilities." },
  { month: "April", saved: "$100", suggestion: "Consider cutting back on non-essential purchases." },
  { month: "May", saved: "$450", suggestion: "Great savings! Keep the trend going." },
  { month: "June", saved: "$300", suggestion: "Try saving more by reducing unnecessary subscriptions." },
];

const Summary = () => {
  return (
    <div className="summary-card">
      <h3 className="summary-title">Summary & Suggestions</h3>
      <p className="summary-subtitle">How you’ve saved each month and tips for improvement</p>
      <div className="summary-container">
        {monthlySavings.map((data, index) => (
          <div key={index} className="summary-item">
            <h4 className="month">{data.month}</h4>
            <p className="saved-amount">Amount Saved: <span>{data.saved}</span></p>
            <p className="suggestion">{data.suggestion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
