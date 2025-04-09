import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page components
import Home from "./pages/Home";
import Logs from "./pages/Logs";
import CalendarPage from "./pages/CalendarPage"; // Updated to reflect the moved calendar files

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Logs page */}
        <Route path="/logs" element={<Logs />} />

        {/* Calendar page */}
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
