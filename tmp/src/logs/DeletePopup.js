import React from "react";
import "./popups.css"; // Import separate CSS file for popups

const DeletePopup = ({ expense, onConfirm, onCancel }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="popup-title">Delete Expense?</h2>
        <p className="popup-description">
          Are you sure you want to delete <strong>{expense.category}</strong> expense of <strong>{expense.amount}</strong>?
        </p>
        <div className="popup-buttons">
          <button className="popup-button cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="popup-button confirm" onClick={() => onConfirm(expense.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
