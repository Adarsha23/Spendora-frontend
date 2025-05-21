import React from "react";
import Navbar from "../home/Navbar";
import Calendar from "../Calendar/Calendar";
import CalendarHeader from "../Calendar/CalendarHeader";
import ReportPanel from "../Calendar/ReportPanel";
import "./CalendarPage.css";

const CalendarPage = () => {
  return (
    <div className="calendar-page-container">
      <Navbar />

      <div className="calendar-content">
        <CalendarHeader /> {/* Shows Month & Year on top only once */}

        <div className="calendar-main-panel">
          <div className="calendar">
            <Calendar />
          </div>
          <div className="report-panel">
            <ReportPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;