import React from "react";
import { Link } from "react-router-dom";


function WorkOutsThree () {
    return (
        <div className="workouts-section-three">
            <img src="/images/three.jpg" alt="join me" className="workouts-section-three-img" />
            <div className="workouts-section-three-text">
                <h4 className="workouts-section-three-header">Workout With Me</h4>
                <p className="workouts-section-three-paragraph">As a certified fitness trainer and nutritionist, I have created holistic plans to nourish and strengthen my clients' bodies. I will remain available via email to respond to questions and offer individual advice. Precisely, I will be your personal trainer. I intend to give you value for your money by charging Ksh. 5000 per month. Please give it a try, and if you find it not suitable for your needs, you can cancel at any time.</p>
                <p className="workouts-section-three-join">Join today and we can start working out together!</p>
                <Link to ="/signup"><button className="workouts-section-three-button">Join Today</button></Link>
            </div>
        </div>
    )
}
export default WorkOutsThree;