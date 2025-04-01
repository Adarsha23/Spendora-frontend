import React from "react";
import "./ReportSection.css";

const monthlyData = {
  income: 2000, // Example income
  budgetSet: 1500, // Example budget set by user
  totalSpent: 1200, // Example total spending in the month
};

const remainingBudget = monthlyData.budgetSet - monthlyData.totalSpent;
const avgDailyBudget = monthlyData.budgetSet / 30; // Assuming 30-day month
const avgMoneySpentPerDay = monthlyData.totalSpent / 30;

const ReportSection = () => {
  return (
    <div className="report-section">
      <div className="report-card">
        <h3 className="report-title">Monthly Statistics</h3>
        <div className="report-item">
          <span className="label">Income:</span>
          <span className="value">${monthlyData.income}</span>
        </div>
        <div className="report-item">
          <span className="label">Budget Set:</span>
          <span className="value">${monthlyData.budgetSet}</span>
        </div>
        <div className="report-item">
          <span className="label">Remaining Budget:</span>
          <span className={`value ${remainingBudget < 0 ? "negative" : ""}`}>
            ${remainingBudget}
          </span>
        </div>
        <div className="report-item">
          <span className="label">Avg Daily Budget:</span>
          <span className="value">${avgDailyBudget.toFixed(2)}</span>
        </div>
        <div className="report-item">
          <span className="label">Avg Money Spent Per Day:</span>
          <span className="value">${avgMoneySpentPerDay.toFixed(2)}</span>
        </div>
        <div className="report-item">
          <span className="label">Total Money Spent:</span>
          <span className="value">${monthlyData.totalSpent}</span>
        </div>
      </div>
    </div>
  );
};

export default ReportSection;
