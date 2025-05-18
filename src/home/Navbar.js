import React, { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const navigate = useNavigate()
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const buttonRef = useRef(null)
  const dropdownMenuRef = useRef(null)

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev)
  }

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownVisible(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src="/images/Logo1.png" alt="SPENDORA Logo" className="logo-img" />
        SPENDORA
      </div>

      <ul className="nav-items">
        <li onClick={() => navigate("/")}>
          <img src="/images/overview.png" alt="Overview" className="nav-icon" />
          Overview
        </li>
        <li onClick={() => navigate("/calendar")}>
          <img src="/images/calendar.png" alt="Calendar" className="nav-icon" />
          Calendar
        </li>
        <li onClick={() => navigate("/analytics")}>
          <img src="/images/analytics.png" alt="Analytics" className="nav-icon" />
          Analytics
        </li>
        <li onClick={() => navigate("/logs")}>
          <img src="/images/calculator.png" alt="Logs" className="nav-icon" />
          Logs
        </li>
      </ul>

      {/* User profile & dropdown at the bottom */}
      <div className="user-profile">
        <img src="/images/user.png" alt="User" />
        <span>Username</span>

        {/* Ellipsis button toggles dropdown */}
        <button onClick={toggleDropdown} className="ellipsis-btn" ref={buttonRef} aria-label="User menu">
          &#x22EE;
        </button>

        {/* Dropdown menu */}
        {isDropdownVisible && (
          <div className="dropdown-menu" ref={dropdownMenuRef}>
            <ul>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    navigate("/settings")
                    setDropdownVisible(false) // close dropdown on click
                  }}
                >
                  Settings
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
