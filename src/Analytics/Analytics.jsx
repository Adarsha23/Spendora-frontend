import React, { useState } from "react";

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
    <div className="min-h-screen bg-[#141d26] text-white p-6 font-sans">
      <div className="bg-[#0f1722] border border-blue-500 rounded-lg px-6 py-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Analytics</h2>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="bg-[#0f1722] border border-white rounded px-3 py-1 text-white"
          >
            <option value="Weekly">Weekly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>

        {/* Chart */}
        <div className="w-full h-[300px] bg-[#0a0f17] rounded-lg p-4 flex items-end justify-between">
          {chartData.map((item, index) => {
            const whiteHeight = (item.white / max) * 100;
            const grayHeight = (item.gray / max) * 100;

            return (
              <div key={index} className="flex flex-col items-center w-[13%]">
                <div className="flex items-end space-x-2 h-[220px]">
                  <div
                    className="bg-white w-9 rounded"
                    style={{ height: `${whiteHeight}%` }}
                  />
                  <div
                    className="bg-gray-400 w-9 rounded"
                    style={{ height: `${grayHeight}%` }}
                  />
                </div>
                <span className="text-sm mt-2">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Report Panel */}
      <div className="bg-[#2b3847] mt-4 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg">Report</h3>
          <span className="bg-[#3f4e5e] text-xs px-2 py-1 rounded-full">{period}</span>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-1">
            <p>Total spent:</p>
            <p>Total saved:</p>
            <p>Total income:</p>
            <p>
              Highest spent category: 
              <span className="text-gray-300 font-bold">[optional]</span>
            </p>
          </div>
          <div className="space-y-1">
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
