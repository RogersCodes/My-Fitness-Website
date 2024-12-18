import React from "react";
import { Link } from "react-router-dom";

function WorkoutsOne () {
    return (
                <div className="workouts-section-one">
                    <img src="/images/cable.JPG" alt="chest-workout" className="cable-row"></img>
                    <div className="workouts-section-one-text">
                        <p className="workouts-heading">Intense, Exciting Workout Splits</p>
                        <p>Hi! Thank you for checking out my workout program! This program is customized to your needs. I will incorporate my 10-year experience in working out to develop unique routines to make you stronger and leaner. You will never be the same again!</p>
                        <p>Due to the busy life schedules, I have created workout plans that puts the life-work balance into consideration. You do not have to spend over two hours working out to achieve the best results! My workouts can be done at home and at the gym. The goal is to activate every muscle group to achieve the desired result, whether it is gaining muscle or losing fat or weight, I got you.</p>
                        <p className="workouts-part-of-team">Ready to be part of my team?</p>
                        <Link to ="/signup"><button className="workouts-button">JOIN THE WINNING TEAM</button></Link>
                    </div>
                </div>  
       
    )
}
export default WorkoutsOne;