import React, { useState } from "react";
import "./popups.css"; // Import separate CSS file for popups

const EditPopup = ({ expense, onSave, onCancel }) => {
  const [editedAmount, setEditedAmount] = useState(expense.amount.replace("$", "")); // Remove "$" when editing

  const handleSave = () => {
    onSave(expense.id, editedAmount); // Pass updated amount
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="popup-title">Edit Expense</h2>
        <input

          className="edit-input"
          value={editedAmount}
          onChange={(e) => setEditedAmount(e.target.value)}
        />
        <div className="popup-buttons">
          <button className="popup-button cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="popup-button confirm" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPopup;
