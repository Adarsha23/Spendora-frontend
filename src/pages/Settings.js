// src/settings/Settings.js
import React from "react";
import Navbar from "../home/Navbar"; // Reusing existing navbar
import Header from "../home/Header"; // Reusing Header component (you can customize it if needed)
import "./Settings.css"; // Stylesheet for the settings page

export default function Settings() {
  return (
    <div className="app-container">
      {/* Navbar is reused from the home page */}
      <Navbar />
      
      <div className="main-content">
        {/* Pass the title dynamically to the Header component */}
        <Header title="Settings" />

        <div className="settings-layout">
          {/* Settings sections as cards */}
          <div className="settings-card">
            <h3 className="settings-card-title">Profile Settings</h3>
            <p className="settings-card-description">Edit your personal details</p>
          </div>

          <div className="settings-card">
            <h3 className="settings-card-title">Security Settings</h3>
            <p className="settings-card-description">Change your password and security settings</p>
          </div>

          <div className="settings-card">
            <h3 className="settings-card-title">Preferences</h3>
            <p className="settings-card-description">Set your application preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
}

