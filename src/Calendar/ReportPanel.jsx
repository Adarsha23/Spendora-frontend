// src/components/ReportPanel.jsx

import React from "react";
import "./ReportPanel.css";

const ReportPanel = () => {
  // Sample data - replace with your actual data
  const reportData = {
    dailyStats: {
      budget: "₹900",
      spend: "₹620",
      income: "₹1100"
    },
    selectedDate: {
      date: "8th March 2025",
      spent: "₹460",
      earned: "₹1000"
    },
    categories: {
      food: "₹460",
      transport: "₹150",
      shopping: "₹320"
    },
    monthReview: {
      totalSpent: "₹14,500",
      totalSaved: "₹8,200",
      totalIncome: "₹32,000"
    }
  };

  return (
    <div className="report-panel-container">
      <div className="report-header">
        <h3>Report</h3>
        <div className="report-tab">Daily Statistics</div>
      </div>
      
      <div className="report-content">
        <div className="report-section">
          <div className="report-item">
            <div className="report-label">Average Daily Budget:</div>
            <div className="report-value">{reportData.dailyStats.budget}</div>
          </div>
          
          <div className="report-item">
            <div className="report-label">Average Daily Spend:</div>
            <div className="report-value">{reportData.dailyStats.spend}</div>
          </div>
          
          <div className="report-item">
            <div className="report-label">Average Daily Income:</div>
            <div className="report-value">{reportData.dailyStats.income}</div>
          </div>
        </div>
        
        <div className="report-divider"></div>
        
        <div className="report-section">
          <div className="report-date">{reportData.selectedDate.date}</div>
          
          <div className="report-item">
            <div className="report-label">Spent:</div>
            <div className="report-value">{reportData.selectedDate.spent}</div>
          </div>
          
          <div className="report-item">
            <div className="report-label">Earned:</div>
            <div className="report-value">{reportData.selectedDate.earned}</div>
          </div>
        </div>
        
        <div className="report-section">
          <div className="report-subheader">Categories:</div>
          
          <div className="report-item">
            <div className="report-label">Food:</div>
            <div className="report-value">{reportData.categories.food}</div>
          </div>
          
          <div className="report-item">
            <div className="report-label">Transport:</div>
            <div className="report-value">{reportData.categories.transport}</div>
          </div>
          
          <div className="report-item">
            <div className="report-label">Shopping:</div>
            <div className="report-value">{reportData.categories.shopping}</div>
          </div>
        </div>
        
        <div className="report-section">
          <div className="report-subheader">Month Review</div>
          
          <div className="report-item">
            <div className="report-label">Total spent:</div>
            <div className="report-value">{reportData.monthReview.totalSpent}</div>
          </div>
          
          <div className="report-item">
            <div className="report-label">Total saved:</div>
            <div className="report-value">{reportData.monthReview.totalSaved}</div>
          </div>
          
          <div className="report-item">
            <div className="report-label">Total income:</div>
            <div className="report-value">{reportData.monthReview.totalIncome}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPanel;