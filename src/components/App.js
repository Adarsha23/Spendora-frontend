import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Summary from "./Summary";
import Charts from "./Charts";  // Import the Charts component
import ReportSection from "./ReportSection";
import "./App.css"; // Ensure styles match the design

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Header />
        <div className="content-layout">
          <Summary />
          <Charts />  {/* Render the Charts component here */}
        </div>
        <ReportSection />
      </div>
    </div>
  );
};

export default App;



