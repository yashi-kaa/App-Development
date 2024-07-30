import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo.jpg"; // Adjust the path according to your project structure

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here, such as clearing tokens or user data
    // For example: localStorage.removeItem("authToken");

    // Navigate to the homepage
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <span className="navbar-title">Recharge Portal</span>{" "}
        {/* Add this line */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </nav>
  );
}
