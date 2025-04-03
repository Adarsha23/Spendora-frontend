import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, PieChart, Pie, Sector } from "recharts";
import { TrendingUp } from "lucide-react";
import "./Charts.css"; // Include styles for the charts

// Data for Bar Chart (Savings per month)
const barChartData = [
  { month: "January", savings: 186 },
  { month: "February", savings: 305 },
  { month: "March", savings: 237 },
  { month: "April", savings: 73 },
  { month: "May", savings: 209 },
  { month: "June", savings: 214 },
];

// Data for Pie Chart (Expenses per category)
const expenseData = [
    { category: "Health", amount: 400, fill: "#4F4F4F" },       // Dark Gray
    { category: "Education", amount: 600, fill: "#707070" },    // Medium Gray
    { category: "Groceries", amount: 300, fill: "#A0A0A0" },    // Light Gray
    { category: "Entertainment", amount: 500, fill: "#C0C0C0" }, // Lighter Gray
    { category: "Others", amount: 200, fill: "#E0E0E0" },       // Very Light Gray
  ];
  

// Custom Tooltip for Bar Chart
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`Month: ${label}`}</p>
        <p>{`Savings: $${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

// Custom Active Shape for Pie Chart
const CustomActiveShape = ({ outerRadius = 0, ...props }) => (
  <Sector {...props} outerRadius={outerRadius + 10} />
);

const Charts = () => {
  return (
    <div className="charts-container">
      
      {/* Bar Chart Section */}
      <div className="card">
        <h3 className="card-title">Bar Chart - Monthly Savings</h3>
        <p className="card-subtitle">Trending up by 5.2% this month</p>
        <div className="bar-graph">
          <BarChart
            width={500}
            height={300}
            data={barChartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid stroke="none" />
            <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: "#ffffff" }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="savings" fill="#FFFFFF" radius={8} />
          </BarChart>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="card">
        <h3 className="card-title">Pie Chart - Expense Distribution</h3>
        <p className="card-subtitle">January - June 2024</p>
        <div className="pie-chart">
          <PieChart width={300} height={300}>
            <Tooltip cursor={false} />
            <Pie
              data={expenseData}
              dataKey="amount"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={CustomActiveShape}
            />
          </PieChart>
        </div>
        <div className="card-footer">
          <div className="footer-text">
            Trending up by 5.2% this month <TrendingUp className="icon" />
          </div>
          <p className="muted-text">Showing total expenses for the last 6 months</p>
        </div>
      </div>

    </div>
  );
};

export default Charts;
