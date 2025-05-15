import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import Logs from "./pages/Logs";
import CalendarPage from "./pages/CalendarPage";
import AnalyticsPage from "./pages/AnalyticsPage";

// Main layout component for shared styles
const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 min-h-screen text-white">
        {/* You can add a Navbar or Sidebar here if needed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
