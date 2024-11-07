import React from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <ul>
            <h2 className="header-title">Rogers Fitness Club</h2>
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/workouts" activeClassName="active">Workouts</NavLink></li>
            <li><NavLink to="/nutrition" activeClassName="active">Nutrition</NavLink></li>
            <li><NavLink to="/faqs" activeClassName="active">FAQS</NavLink></li>
            <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
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
