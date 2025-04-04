import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logs from "./pages/Logs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Update the path to root ("/") */}
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
