import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, PieChart, Pie, Cell } from "recharts";
import { TrendingUp } from "lucide-react";
import "./Charts.css"; // Keep styling intact

// Updated Bar Chart Data (Daily Expenses)
const barChartData = [
  { day: "Apr 1", thisMonth: 15, previousMonth: 12 },
  { day: "Apr 6", thisMonth: 22, previousMonth: 18 },
  { day: "Apr 11", thisMonth: 35, previousMonth: 30 },
  { day: "Apr 16", thisMonth: 28, previousMonth: 24 },
  { day: "Apr 21", thisMonth: 40, previousMonth: 35 },
  { day: "Apr 26", thisMonth: 50, previousMonth: 45 },
];

// Updated Pie Chart Data (Monthly Expense per Category)
const expenseData = [
  { category: "Health", amount: 400, fill: "#4F4F4F" },
  { category: "Education", amount: 600, fill: "#707070" },
  { category: "Groceries", amount: 300, fill: "#A0A0A0" },
  { category: "Entertainment", amount: 500, fill: "#C0C0C0" },
  { category: "Others", amount: 200, fill: "#E0E0E0" },
];

// Custom Tooltip for Bar Chart
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`Date: ${label}`}</p>
        <p>{`This Month: $${payload[0].value}`}</p>
        <p>{`Previous Month: $${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const Charts = () => {
  return (
    <div className="charts-container">

      {/* Bar Chart Card (Moved Slightly Higher) */}
      <div className="card bar-chart-card">
        <h3 className="card-title">Bar Chart - Daily Expenses</h3>
        <p className="card-subtitle">Comparison of expenses day by day</p>
        <div className="bar-graph">
          <BarChart width={500} height={300} data={barChartData}>
            <CartesianGrid stroke="none" />
            <XAxis dataKey="day" tickLine={false} tickMargin={10} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: "#ffffff" }} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="thisMonth" fill="#FFFFFF" name="This Month" radius={8} />
            <Bar dataKey="previousMonth" fill="#707070" name="Previous Month" radius={8} />
          </BarChart>
        </div>
      </div>

      {/* Pie Chart Card */}
      <div className="card">
        <h3 className="card-title">Pie Chart - Monthly Expenses</h3>
        <p className="card-subtitle">Total spending per category</p>
        <div className="pie-chart">
          <PieChart width={300} height={300}>
            <Tooltip cursor={false} />
            <Pie data={expenseData} dataKey="amount" nameKey="category" innerRadius={60} strokeWidth={5}>
              {expenseData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="card-footer">
          <div className="footer-text">
            Trending up by 5.2% this month <TrendingUp className="icon" />
          </div>
          <p className="muted-text">Showing total expenses for this month</p>
        </div>
      </div>

    </div>
  );
};

export default Charts;
