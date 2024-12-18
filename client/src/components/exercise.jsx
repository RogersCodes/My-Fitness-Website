import React from 'react';
import { Link } from 'react-router-dom';
import './exercise.css';

function Exercise() {
    return (
        <div className="exercise">
            <img src="/images/IMG_7256 1.png" alt="exercise" className="exercise-image"/>
            <div className="exercise-text">
                <h3 className="exercise-header">1. EXERCISE</h3>
                <ul className="exercise-list">
                    <li>Personalized workouts</li>
                    <li>No additional cardio required</li>
                    <li>Video demonstrations for each exercise</li>
                    <li>Equivalent options for home or gym equipment</li>
                    <li>Adjusted to your schedule: 30, 45, or 60 minutes</li>
                    <li>Endless variety of daily challenges to push your fitness level</li>
                    <li>Direct support from me</li>
                </ul>
                <Link to="/signup">
                    <button className="exercise-button">JOIN NOW!</button>
                </Link>
                
            </div>
        </div>
    )
}
export default Exercise;