import React from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <h2 className="header-title">Rogers Fitness Club</h2>
          <ul className="navbar-list">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
            <li><NavLink to="/workouts" className={({ isActive }) => (isActive ? "active" : "")}>Workouts</NavLink></li>
            <li><NavLink to="/nutrition" className={({ isActive }) => (isActive ? "active" : "")}>Nutrition</NavLink></li>
            <li><NavLink to="/faqs" className={({ isActive }) => (isActive ? "active" : "")}>FAQS</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>Blog</NavLink></li>
            <li>
              <NavLink to="/login" className="no-underline">
                <button className="login-button">Login</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="no-underline">
                <button className="signup-button">Join Now!</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
