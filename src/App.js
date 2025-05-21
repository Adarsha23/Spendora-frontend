import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import Logs from "./pages/Logs";
import CalendarPage from "./pages/CalendarPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import Settings from "./pages/Settings";
import TermsAndConditions from "./settings/TermsAndConditions";
import PrivacyPolicy from "./settings/PrivacyPolicy";
import Help from "./settings/Help";
import ContactUs from "./settings/ContactUs";

// App component
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />                        {/* Home Page */}
        <Route path="/logs" element={<Logs />} />                    {/* Logs Page */}
        <Route path="/calendar" element={<CalendarPage />} />      {/* Calendar Page */}
        <Route path="/analytics" element={<AnalyticsPage />} />      {/* Analytics Page */}
        <Route path="/settings" element={<Settings />} />            {/* Settings Main Page */}
        <Route path="/settings/terms" element={<TermsAndConditions />} />   {/* Terms and Conditions */}
        <Route path="/settings/privacy" element={<PrivacyPolicy />} />      {/* Privacy Policy */}
        <Route path="/settings/help" element={<Help />} />                 {/* Help */}
        <Route path="/settings/contact" element={<ContactUs />} />         {/* Contact Us */}
      </Routes>

    </BrowserRouter>
  );
};

export default App;
