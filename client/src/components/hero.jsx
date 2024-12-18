import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

function Hero() {
    return (
        <div className="hero">
            <img src="/images/13 1.png" alt="Rogers" className="hero-image"/>
            <div className="hero-text">
                <p>Get full access to workouts and meal plans</p>
                <p>Build muscle, burn excess fat, strengthen your core, and get defined abs</p>
                <p>*Billed Monthly, Cancel Anytime*</p>
            </div>
            <Link to="/signup">
                <button className="hero-button">
                    Join Now!
                </button>
            </Link>
            
        </div>
    );
}

export default Hero;
