import React from "react";
import Navbar from "../home/Navbar";
import Analytics from "../Analytics/Analytics";
import "../Analytics/Analytics.css";

const AnalyticsPage = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "#1a202c", color: "white", height: "100vh", overflow: "hidden" }}>
      <Navbar />
      <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
        <Analytics />
      </div>
    </div>
  );
};

export default AnalyticsPage;
