import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const buttonRef = useRef(null); // Reference for the three dots button
  const dropdownMenuRef = useRef(null); // Reference for the dropdown menu

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  useEffect(() => {
    if (isDropdownVisible && buttonRef.current && dropdownMenuRef.current) {
      // Get the button's position
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdown = dropdownMenuRef.current;

      // Set dropdown position above the button
      dropdown.style.top = `${buttonRect.top - dropdown.offsetHeight - 5}px`;
      dropdown.style.left = `${buttonRect.left}px`;
      dropdown.style.display = "block"; // Ensure it's visible
    } else if (dropdownMenuRef.current) {
      dropdownMenuRef.current.style.display = "none"; // Hide when closed
    }
  }, [isDropdownVisible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/images/Logo1.png" alt="SPENDORA Logo" className="logo-img" />
        SPENDORA
      </div>

      <ul className="nav-items">
        <li>
          <img src="/images/overview.png" alt="Overview" className="nav-icon" />
          Overview
        </li>
        <li>
          <img src="/images/calendar.png" alt="Calendar" className="nav-icon" />
          Calendar
        </li>
        <li>
          <img src="/images/analytics.png" alt="Analytics" className="nav-icon" />
          Analytics
        </li>
        <li>
          <img src="/images/calculator.png" alt="Calculator" className="nav-icon" />
          Calculator
        </li>
        
        <li>
          <img src="/images/reviews.png" alt="Reviews" className="nav-icon" />
          Reviews
        </li>
      </ul>

      <div className="divider"></div>

      <div className="get-help">Get Help</div>

      <div className="user-profile">
        <img src="/images/user.png" alt="User" />
        <span>Username</span>

        {/* Three dots button */}
        <button onClick={toggleDropdown} className="ellipsis-btn" ref={buttonRef}>
          &#x22EE;
        </button>

        {/* Dropdown menu */}
        <div className="dropdown-menu" ref={dropdownMenuRef}>
          <ul>
            <li>
              <button className="dropdown-item">User Profile</button>
            </li>
            <li>
              <button className="dropdown-item">Settings</button>
            </li>
            <li>
              <button className="dropdown-item">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

