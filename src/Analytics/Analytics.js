import React, { useState } from "react";
import AnalyticsHeader from "./AnalyticsHeader";
import "./Analytics.css";

const weeklyData = [
  { label: "Sunday", white: 60, gray: 40 },
  { label: "Monday", white: 100, gray: 20 },
  { label: "Tuesday", white: 80, gray: 70 },
  { label: "Wednesday", white: 70, gray: 30 },
  { label: "Thursday", white: 70, gray: 60 },
  { label: "Friday", white: 80, gray: 50 },
  { label: "Saturday", white: 60, gray: 50 },
];

const yearlyData = [
  { label: "2019", white: 250, gray: 180 },
  { label: "2020", white: 300, gray: 200 },
  { label: "2021", white: 350, gray: 220 },
  { label: "2022", white: 280, gray: 190 },
  { label: "2023", white: 400, gray: 230 },
  { label: "2024", white: 450, gray: 300 },
  { label: "2025", white: 500, gray: 320 },
];

export default function Analytics() {
  const [period, setPeriod] = useState("Weekly");
  const chartData = period === "Weekly" ? weeklyData : yearlyData;
  const max = Math.max(...chartData.map((item) => Math.max(item.white, item.gray)));

  return (
    <div className="analytics-container">
      <AnalyticsHeader />

      <div className="analytics-dropdown">
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="Weekly">Weekly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      <div className="analytics-chart">
        {chartData.map((item, index) => {
          const whiteHeight = (item.white / max) * 100;
          const grayHeight = (item.gray / max) * 100;

          return (
            <div key={index} className="bar-container">
              <div className="bar-pair">
                <div
                  className="bar white"
                  style={{ height: `${whiteHeight}%` }}
                />
                <div
                  className="bar gray"
                  style={{ height: `${grayHeight}%` }}
                />
              </div>
              <span className="bar-label">{item.label}</span>
            </div>
          );
        })}
      </div>

      <div className="analytics-report">
        <div className="report-header">
          <h3>Report</h3>
          <span className="report-period">{period}</span>
        </div>

        <div className="report-grid">
          <div>
            <p>Total spent:</p>
            <p>Total saved:</p>
            <p>Total income:</p>
            <p>Highest spent category: <span className="optional">[optional]</span></p>
          </div>
          <div>
            <p>Total Budget</p>
            <p>Average Daily Income</p>
            <p>Average Daily Budget</p>
            <p>Average Daily Spend</p>
          </div>
        </div>
      </div>
    </div>
  );
}