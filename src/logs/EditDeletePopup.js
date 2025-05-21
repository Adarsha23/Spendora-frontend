import React, { useState } from "react";
import "./EditDeletePopup.css"; // Import the CSS styles for popups

//receives 4 props from the parent component
const EditDeletePopup = ({ log, onClose, onEdit, onDelete }) => {
  const [editedAmount, setEditedAmount] = useState(log.amount.replace('$', '')); // Remove the "$" symbol to edit it as a number

  const handleSaveEdit = () => {
    onEdit(log.id, editedAmount); // Pass log id and the new amount to the editedAmount function
    onClose(); // Close the popup after saving
  };

  const handleDelete = () => {
    onDelete(log.id); // Pass log id to the delete function
    onClose(); // Close the popup after deleting
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h3 className="popup-title">{log.category} - {log.amount}</h3>
        
        {/* Input field for editing the amount */}
        <input
          type="number"
          value={editedAmount}
          onChange={(e) => setEditedAmount(e.target.value)} 
        />
        
        {/* Buttons for save, delete, and close actions */}
        <div className="popup-buttons">
          <button className="popup-btn edit-btn" onClick={handleSaveEdit}>Save Edit</button>
          <button className="popup-btn delete-btn" onClick={handleDelete}>Delete</button>
          <button className="popup-btn close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EditDeletePopup;
