import React from "react";
import Navbar from "../home/Navbar";
import Header from "../home/Header";
import "./InfoPages.css";

/**
 * Privacy Policy Page
 * Informs users how their data is collected and handled.
 */
export default function PrivacyPolicy() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Header title="Privacy Policy" />
        <div className="info-content">
          <h3>1. Data Collection</h3>
          <p>We only collect necessary data for providing our services.</p>
          <h3>2. Data Usage</h3>
          <p>Your data is used solely to improve user experience and functionality.</p>
          <h3>3. Data Sharing</h3>
          <p>We do not share your personal information with third parties.</p>
          <h3>4. Your Rights</h3>
          <p>You can request to view, edit, or delete your data at any time.</p>
        </div>
      </div>
    </div>
  );
}
