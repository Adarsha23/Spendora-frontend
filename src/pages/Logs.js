import React, { useState } from "react";
import Navbar from "../home/Navbar"; // Import Navbar component
import LogsHeader from "../logs/LogsHeader"; // Import LogsHeader for title
import LogsList from "../logs/LogsList"; // Import LogsList for displaying expense logs
import Categories from "../logs/Categories"; // Import Categories for adding expenses
import Charts from "../logs/Charts"; // Import Charts component for displaying charts

import "./Logs.css"; // Import CSS styles for logs

const Logs = () => {
  const [expenses, setExpenses] = useState([]); // State for holding expenses

  // Function to add expense
  const addExpense = (category, amount) => {
    const newExpense = {
      id: new Date().toISOString(), // Assign a unique ID based on the current timestamp
      category,
      amount: `$${amount}`, // Format the amount with a dollar sign
      date: new Date().toLocaleDateString(), // Current date in string format
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]); // Update the expenses state
  };

  return (
<div className="app-container">
  <Navbar />
  <div className="main-content">
    <LogsHeader />
    <div className="logs-content">
      {/* LogsList and Categories stacked vertically */}
      <div className="logs-list-container">
        <LogsList expenses={expenses} setExpenses={setExpenses} />
        <Categories addExpense={addExpense} />
      </div>

      {/* Charts section beside LogsList + Categories */}
      <div className="charts-container">
        <Charts />
      </div>
    </div>
  </div>

    </div>
  );
};

export default Logs;
