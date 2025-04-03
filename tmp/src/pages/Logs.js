import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Import Navbar component
import LogsHeader from "../logs/LogsHeader"; // Import LogsHeader for title
import LogsList from "../logs/LogsList"; // Import LogsList for displaying expense logs
import Charts from "../logs/Charts"; // Import Charts component for displaying charts
import Categories from "../logs/Categories"; // Import Categories for adding expenses
import EditPopup from "../logs/EditPopup";  // Import Edit Popup
import DeletePopup from "../logs/DeletePopup"; // Import Delete Popup
import "./Logs.css"; // Import CSS styles for logs

const Logs = () => {
  const [expenses, setExpenses] = useState([]); // State for holding expenses
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false); // State for managing Edit Popup visibility
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false); // State for managing Delete Popup visibility
  const [selectedExpense, setSelectedExpense] = useState(null); // State for the selected expense

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

  // Function to open the Edit Popup
  const openEditPopup = (expense) => {
    setSelectedExpense(expense); // Set the selected expense to edit
    setIsEditPopupOpen(true); // Show the Edit Popup
  };

  // Function to close the Edit Popup
  const closeEditPopup = () => {
    setIsEditPopupOpen(false); // Close the Edit Popup
    setSelectedExpense(null); // Reset selected expense
  };

  // Function to save the edited expense
  const saveEditedExpense = (id, newAmount) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === id ? { ...expense, amount: `$${newAmount}` } : expense
      )
    );
    closeEditPopup(); // Close the popup after saving
  };

  // Function to open the Delete Popup
  const openDeletePopup = (expense) => {
    setSelectedExpense(expense); // Set the selected expense to delete
    setIsDeletePopupOpen(true); // Show the Delete Popup
  };

  // Function to close the Delete Popup
  const closeDeletePopup = () => {
    setIsDeletePopupOpen(false); // Close the Delete Popup
    setSelectedExpense(null); // Reset selected expense
  };

  // Function to delete an expense
  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id)); // Remove expense
    closeDeletePopup(); // Close the popup after deleting
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <LogsHeader />
        <div className="logs-content">
          {/* Pass expenses state and setExpenses function to LogsList */}
          <LogsList expenses={expenses} setExpenses={setExpenses} />
          <Charts />
        </div>

        {/* Pass addExpense function to Categories */}
        <Categories addExpense={addExpense} />
      </div>

      {/* Render Edit Popup if it's open */}
      {isEditPopupOpen && (
        <EditPopup
          expense={selectedExpense}
          onSave={saveEditedExpense}
          onCancel={closeEditPopup}
        />
      )}

      {/* Render Delete Popup if it's open */}
      {isDeletePopupOpen && (
        <DeletePopup
          expense={selectedExpense}
          onConfirm={deleteExpense}
          onCancel={closeDeletePopup}
        />
      )}
    </div>
  );
};

export default Logs;
