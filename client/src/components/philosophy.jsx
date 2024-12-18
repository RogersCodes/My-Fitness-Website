import React from 'react';
import './philosophy.css';

function Philosophy() {
    return (
        <div className="philosophy">
            <img src="images/10 1.png" alt="philosophical" className="philosophy-image"/>
            <div className="philosophy-text">
                <h3>My Fitness Philosophy:</h3>
                <p>A self-actualized body able to perform all range of motions through:</p>
                <ol>
                    <li>Exercise</li>
                    <li>Nutrition</li>
                    <li>Mental well-being</li>
                    <li>Rest</li>
                </ol>
            </div>
        </div>
    )
}
export default Philosophy