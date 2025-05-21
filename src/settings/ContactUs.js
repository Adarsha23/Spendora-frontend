import React from "react";
import Navbar from "../home/Navbar";
import Header from "../home/Header";
import "./InfoPages.css";

/**
 * Contact Us Page
 * Allows users to contact the development or support team.
 */
export default function ContactUs() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Header title="Contact Us" />
        <div className="info-content">
          <p>If you have any questions, feedback, or issues, feel free to reach out:</p>
          <ul>
            <li>Email: support@spendora.com</li>
            <li>Phone: +977-9876543210</li>
            <li>Office Hours: 9 AM – 5 PM (Mon–Fri)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
