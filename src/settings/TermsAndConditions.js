import React from "react";
import Navbar from "../home/Navbar";
import Header from "../home/Header";
import "./InfoPages.css";

/**
 * Terms and Conditions Page
 * Displays the terms of service for users.
 */
export default function TermsAndConditions() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Header title="Terms & Conditions" />
        <div className="info-content">
          <h3>1. Introduction</h3>
          <p>By using our service, you agree to comply with all our terms and conditions.</p>
          <h3>2. User Responsibilities</h3>
          <p>You are responsible for keeping your account information secure.</p>
          <h3>3. Modification of Terms</h3>
          <p>We reserve the right to update these terms at any time.</p>
          <h3>4. Limitation of Liability</h3>
          <p>We are not liable for any damages caused by the misuse of our services.</p>
        </div>
      </div>
    </div>
  );
}
