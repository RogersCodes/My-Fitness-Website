import React from 'react';
import { Link } from 'react-router-dom';
import './component.css';

function Component() {
    return (
        <div className="component">
            <img src="/images/6 1.png" alt="workouts" className="component-image" />
            <div className="component-overlay"></div>
            <div className="component-text">
                <h2>NEW & FUN WORKOUTS EVERYDAY</h2>
                <p>Become fitter, stronger, more confident, and leaner. Join and get exclusive access to my customized workouts, fitness tips, and meal plans</p>
                <Link  to="/signup">
                    <button className="component-button">Join Now!</button>
                </Link>
                
            </div>
            
        </div>
    )
}
export default Component;