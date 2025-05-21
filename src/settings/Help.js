import React from "react";
import Navbar from "../home/Navbar";
import Header from "../home/Header";
import "./InfoPages.css";

/**
 * Help Page
 * Provides basic guidance and troubleshooting tips.
 */
export default function Help() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Header title="Help" />
        <div className="info-content">
          <h3>1. How to Use Spendora</h3>
          <p>Navigate through the menu to track expenses, view logs, and more.</p>
          <h3>2. Trouble Logging In?</h3>
          <p>Check your internet connection and login credentials.</p>
          <h3>3. Still Need Help?</h3>
          <p>Use the Contact Us page to reach out to our support team.</p>
        </div>
      </div>
    </div>
  );
}
