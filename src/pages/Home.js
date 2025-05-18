import React from 'react';
import Header from '../home/Header'; // Reusing the Header component
import Charts from '../home/Charts'; // Bar chart and pie chart section
import Navbar from '../home/Navbar'; // Left navigation sidebar
import ReportSection from '../home/ReportSection'; // Report, Pie Chart, Budget
import Summary from '../home/Summary'; // Summary component
import "./Home.css"; // Styles specific to Home page

/**
 * Home Component
 * Represents the dashboard view of the application
 */
export default function Home() {
  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <Navbar />

      {/* Main content area */}
      <div className="main-content">
        {/* Pass dynamic title to Header */}
        <Header title="Overview" />

        {/* Layout containing summary and chart area */}
        <div className="content-layout">
          <Summary />
          <Charts />
        </div>

        {/* Bottom report section */}
        <ReportSection />
      </div>
    </div>
  );
}
