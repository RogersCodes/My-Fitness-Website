import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";


function Navbar() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <h2 className="header-title">Rogers Fitness Club</h2>
          {/*Hamburger menu icon*/}
          <div className="hamburger-menu" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <FiX size={30} color="#fff" /> : <FiMenu size={30} color="#fff"/>}
          </div>
          <ul className="navbar-list">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
            <li><NavLink to="/workouts" className={({ isActive }) => (isActive ? "active" : "")}>Workouts</NavLink></li>
            <li><NavLink to="/nutrition" className={({ isActive }) => (isActive ? "active" : "")}>Nutrition</NavLink></li>
            <li><NavLink to="/faqs" className={({ isActive }) => (isActive ? "active" : "")}>FAQS</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>Blog</NavLink></li>
            <li>
                <button className="login-button" onClick={() => navigate("/login")}>Login</button>
              
            </li>
            <li>
                <button className="signup-button" onClick={() => navigate("/signup")}>Join Now!</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
