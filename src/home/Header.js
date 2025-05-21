import React from "react";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <div className="header">
      <h2 className="overview-title">{title}</h2> {/* dynamic title */}
    </div>
  );
};

export default Header;


