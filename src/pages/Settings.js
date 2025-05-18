import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../home/Navbar";
import Header from "../home/Header";
import "./Settings.css";

/**
 * Settings Page
 */
export default function Settings() {
  // Redirects to login.html in public folder
  const handleLogout = () => {
    localStorage.clear(); // Optional: clear local/session storage
    window.location.href = "/login.html"; // Redirects to login page
  };

  // Redirects to login.html after simulating delete
  const handleDelete = () => {
    localStorage.clear(); // clear local/session storage
    // Simulate API call or deletion logic here
    window.location.href = "/login.html"; // Redirects to login page
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Header title="Settings" />

        <div className="settings-grid">
          <Link to="/settings/terms" className="settings-card link-style">
            <div className="icon-placeholder">📜</div>
            <h3>Terms & Conditions</h3>
          </Link>

          <Link to="/settings/privacy" className="settings-card link-style">
            <div className="icon-placeholder">🔐</div>
            <h3>Privacy Policy</h3>
          </Link>

          <Link to="/settings/help" className="settings-card link-style">
            <div className="icon-placeholder">❓</div>
            <h3>Help</h3>
          </Link>

          <Link to="/settings/contact" className="settings-card link-style">
            <div className="icon-placeholder">📞</div>
            <h3>Contact Us</h3>
          </Link>
        </div>

        <div className="settings-actions">
          <button className="logout-btn" onClick={handleLogout}>
            Log Out
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
