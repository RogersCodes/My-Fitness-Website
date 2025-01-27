import React from 'react';
import { Link } from 'react-router-dom';

function Nutrition() {
    return (
        <div className="nutrition">
            <img src="/images/20240121_152617 1.png" alt="food" className="nutrition-image"/>
            <div className="nutrition-text">
                <h3 className="nutrition-header">2. NUTRITION</h3>
                <ul className="nutrition-list">
                    <li>I create customized meal plans and favourite recipes for you</li>
                    <li>Nutritionally balanced</li>
                    <li>Intermittent fasting- 2 Meal a Day Plan</li>
                    <li>3 Meal a Day, 2 snacks a day option</li>
                    <li>Ever changing menu</li>
                    <li>Monthly shopping list</li>
                </ul>
                <Link to="/signup">
                    <button className="nutrition-button">JOIN NOW!</button>
                </Link>
                
            </div>

        </div>
    )
}
export default Nutrition;