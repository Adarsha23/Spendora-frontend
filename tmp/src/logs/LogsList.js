import React, { useState } from "react";
import EditDeletePopup from "./EditDeletePopup";
import "./LogsList.css";

const LogsList = ({ expenses, setExpenses }) => {
  const [selectedLog, setSelectedLog] = useState(null);

  // Sort logs by date (descending)
  const sortedLogs = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Group logs by date
  const groupedLogs = sortedLogs.reduce((acc, log) => {
    acc[log.date] = acc[log.date] || [];
    acc[log.date].push(log);
    return acc;
  }, {});

  // Edit Expense Log
  const handleEdit = (id, newAmount) => {
    const updatedLogs = expenses.map((log) => {
      if (log.id === id) {
        return { ...log, amount: `$${newAmount}` }; // Update amount with the new value
      }
      return log;
    });
    setExpenses(updatedLogs); // Update state with the modified log
  };

  // Delete Expense Log
  const handleDelete = (id) => {
    const updatedLogs = expenses.filter((log) => log.id !== id); // Filter out the log by id
    setExpenses(updatedLogs); // Update state with the filtered logs
  };

  return (
    <div className="logs-container">
      <div className="logs-header">
        <h3 className="logs-title">Expense Logs</h3>
        <h6 className="logs-subtitle">Click on a log to edit or delete</h6>
      </div>
      <div className="logs-scroll-area">
        {/* Iterate through grouped logs */}
        {Object.entries(groupedLogs).map(([date, entries]) => (
          <div key={date} className="log-group">
            <h4 className="log-date">{date}</h4>
            {/* Display each entry within the date group */}
            {entries.map((log, index) => (
              <div
                key={log.id} // Use log.id instead of index for unique key
                className="log-item"
                onClick={() => setSelectedLog(log)}
              >
                <span>{log.category}</span>
                <span className="log-amount">{log.amount}</span>
              </div>
            ))}
            <div className="separator"></div>
          </div>
        ))}
      </div>
      {selectedLog && (
        <EditDeletePopup 
          log={selectedLog} 
          onClose={() => setSelectedLog(null)} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      )}
    </div>
  );
};

export default LogsList;
