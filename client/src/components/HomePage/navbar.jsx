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
          <ul className={`navbar-list ${isMobile ? "active": ""}`}>
            <li><NavLink to="/" onClick={() => setIsMobile(false)}>Home</NavLink></li>
            <li><NavLink to="/workouts" onClick={() => setIsMobile(false)}>Workouts</NavLink></li>
            <li><NavLink to="/nutrition" onClick={() => setIsMobile(false)}>Nutrition</NavLink></li>
            <li><NavLink to="/faqs" onClick={() => setIsMobile(false)}>FAQS</NavLink></li>
            <li><NavLink to="/blog" onClick={() => setIsMobile(false)}>Blog</NavLink></li>
            <li>
                <button className="login-button" onClick={() => { navigate("/login"); setIsMobile(false); }}>Login</button>
              
            </li>
            <li>
                <button className="signup-button" onClick={() => { navigate("/signup"); setIsMobile(false)}}>Join Now!</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
