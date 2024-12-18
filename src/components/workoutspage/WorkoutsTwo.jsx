import React from "react";
import { Link } from "react-router-dom";

function WorkoutsTwo () {
    return (
        <div className="workouts-section-two">
            <img src="/images/results.jpg" alt="results" className="workouts-results"/>
            <div className="workouts-section-two-text">
                <h4 className="workouts-section-two-text-header">Build Long Lasting Results</h4>
                <p className="workouts-section-two-text-paragraph">I am here to help achieve your maximum potential and maintain them. This means I will create customized workout plans and monitor your progress constantly. Whether you want to tone your muscles, lose weight, lose fat, increase strength, or re-align your physical self, I am ready to assist in achieving your fitness goals</p>
                <Link to ="/signup"><button className="workouts-section-two-button">Join Today!</button></Link>
            </div>
        </div>
    )
}
export default WorkoutsTwo;