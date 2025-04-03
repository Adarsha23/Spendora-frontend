import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Logs from "./pages/Logs";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/logs" element={<Logs />} />

    </Routes>
    
    </BrowserRouter>
  );
};

export default App;



