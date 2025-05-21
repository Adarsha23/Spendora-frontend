// src/components/Calendar.jsx

import React, { useState } from "react";
import "./Calendar.css";

/**
 * Calendar component that displays a dynamic monthly calendar
 * with today's date highlighted and selectable day feature.
 */
const Calendar = () => {
  // Grab today’s date so we can highlight it
  const today = new Date();

  // This tracks which date the user is currently viewing
  const [currentDate, setCurrentDate] = useState(new Date());

  // This tracks which date is selected (clicked)
  const [selectedDate, setSelectedDate] = useState(null);

  // Extract current month and year from the currentDate state
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Month and weekday names for display
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  /**
   * Get total number of days in a given month of a given year
   */
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  /**
   * Get which weekday the month starts on (0 = Sunday, 1 = Monday, etc.)
   */
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  /**
   * Shift the calendar view one month back
   */
  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  /**
   * Shift the calendar view one month forward
   */
  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  /**
   * Generates the grid of days for the current month
   */
  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);

    const days = [];

    // Fill in blanks for days before the first day of this month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Fill in the actual dates
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();

      const isSelected = selectedDate === day;

      days.push(
        <div
          key={day}
          className={`calendar-day 
                      ${isToday ? "today" : ""} 
                      ${isSelected ? "selected" : ""}`}
          onClick={() => setSelectedDate(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      {/* Header controls: navigation and year selector */}
      <div className="calendar-header-controls">
        <button className="month-nav-btn" onClick={prevMonth}>
          &lt;
        </button>
        <div className="month-year-display">
          <span className="month">{monthNames[currentMonth]}</span>
          <select
            className="year-select"
            value={currentYear}
            onChange={(e) =>
              setCurrentDate(new Date(parseInt(e.target.value), currentMonth, 1))
            }
          >
            {[2023, 2024, 2025, 2026].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <button className="month-nav-btn" onClick={nextMonth}>
          &gt;
        </button>
      </div>

      {/* Day labels */}
      <div className="calendar-days-header">
        {dayNames.map((day) => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
      </div>

      {/* Date grid */}
      <div className="calendar-days-grid">{renderCalendarDays()}</div>
    </div>
  );
};

export default Calendar;
