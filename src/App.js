import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logs from "./pages/Logs";
import Settings from "./pages/Settings"; // ✅ Import the Settings page

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />          {/* Home Page */}
        <Route path="/logs" element={<Logs />} />      {/* Logs Page */}
        <Route path="/settings" element={<Settings />} /> {/* Settings Page */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
