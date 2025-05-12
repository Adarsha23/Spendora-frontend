import React, { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom" // 👈 this is the magic hook
import "./Navbar.css"

const Navbar = () => {
  const navigate = useNavigate() // 👈 makes routing possible with a button click
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const buttonRef = useRef(null)
  const dropdownMenuRef = useRef(null)

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev)
  }

  useEffect(() => {
    if (isDropdownVisible && buttonRef.current && dropdownMenuRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const dropdown = dropdownMenuRef.current
      dropdown.style.top = `${buttonRect.top - dropdown.offsetHeight - 5}px`
      dropdown.style.left = `${buttonRect.left}px`
      dropdown.style.display = "block"
    } else if (dropdownMenuRef.current) {
      dropdownMenuRef.current.style.display = "none"
    }
  }, [isDropdownVisible])

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
      <div className="logo" onClick={() => navigate("/")}> {/* Navigate to Home */}
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

      <div className="divider"></div>

      <div className="get-help" onClick={() => alert("Need help?")}>
        Get Help
      </div>

      <div className="user-profile">
        <img src="/images/user.png" alt="User" />
        <span>Username</span>

        <button onClick={toggleDropdown} className="ellipsis-btn" ref={buttonRef}>
          &#x22EE;
        </button>

        <div className="dropdown-menu" ref={dropdownMenuRef}>
          <ul>
            <li>
              <button className="dropdown-item" onClick={() => navigate("/profile")}>
                User Profile
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => navigate("/settings")}>
                Settings
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => alert("Logged out!")}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
