import React, { useState } from "react";
import "./Categories.css";


// Categories array with image placeholders
const categories = [
  { name: "Groceries", image: <img src="/images/groceries.png" alt="Groceries" className="category-icon" /> },
  { name: "Transportation", image: <img src="/images/transportation.png" alt="Transportation" className="category-icon" /> },
  { name: "Repairs", image: <img src="/images/repairs.png" alt="Repairs" className="category-icon" /> },
  { name: "Grooming", image: <img src="/images/grooming.png" alt="Grooming" className="category-icon" /> },
  { name: "Health", image: <img src="/images/health.png" alt="Health" className="category-icon" /> },
  { name: "Education", image: <img src="/images/education.png" alt="Education" className="category-icon" /> },
  { name: "Shopping", image: <img src="/images/shopping.png" alt="Shopping" className="category-icon" /> },
  { name: "Donations", image: <img src="/images/donations.png" alt="Donations" className="category-icon" /> },
  { name: "Sports", image: <img src="/images/sports.png" alt="Sports" className="category-icon" /> },
  { name: "Travel", image: <img src="/images/plane.png" alt="Travel" className="category-icon" /> },
  { name: "Gifts", image: <img src="/images/gifts.png" alt="Gifts" className="category-icon" /> },
  { name: "Kids", image: <img src="/images/kids.png" alt="Kids" className="category-icon" /> },
  { name: "Entertainment", image: <img src="/images/entertainment.png" alt="Entertainment" className="category-icon" /> },
  { name: "Vehicle", image: <img src="/images/vehicle.png" alt="Vehicle" className="category-icon" /> },
  { name: "Clothing", image: <img src="/images/clothing.png" alt="Clothing" className="category-icon" /> },
  { name: "Salary", image: <img src="/images/salary.png" alt="Salary" className="category-icon" /> },
  { name: "Investments", image: <img src="/images/investments.png" alt="Investments" className="category-icon" /> },
  { name: "Bonus", image: <img src="/images/bonus.png" alt="Bonus" className="category-icon" /> },
  { name: "Others", image: <img src="/images/others.png" alt="Others" className="category-icon" /> },
  { name: "Part-Time", image: <img src="/images/part-time.png" alt="Part-Time" className="category-icon" /> },
];

const Categories = ({ addExpense }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expenseAmount, setExpenseAmount] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);

  const handleSaveExpense = () => {
    if (expenseAmount && selectedCategory) {
      addExpense(selectedCategory, expenseAmount); // Pass new expense to parent
      setShowDrawer(false); // Close the drawer after saving
      setExpenseAmount(""); // Reset amount input
    }
  };

  return (
    <div className="categories-container">
      <h3 className="categories-title">Expense Categories</h3>
      <div className="categories-scroll-area">
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <button
                className="category-button"
                onClick={() => {
                  setSelectedCategory(category.name);
                  setShowDrawer(true);
                }}
              >
                {category.image}
                <span className="category-name">{category.name}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Expense Entry Drawer */}
      {showDrawer && (
        <div className="category-drawer">
          <h4>Enter Expense for: {selectedCategory}</h4>
          <input
            type="number"
            placeholder="Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            className="category-input"
          />
          <button className="category-save-button" onClick={handleSaveExpense}>
            Save
          </button>
          <button
            className="category-close-button"
            onClick={() => setShowDrawer(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Categories;
