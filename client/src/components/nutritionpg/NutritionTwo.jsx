import React from "react";
import { Link } from "react-router-dom";

function NutritionTwo () {
    return (
        <div className="nutrition-section-two">
            <img src="/images/food.jpg" alt="food" className="nutrition-three-food" />
            <div className="nutrition-section-two-text">
                <h4 className="nutrition-section-two-header">Learn How to Fuel Your Body</h4>
                <p className="nutrition-section-two-paragraph">My meal plan incorporates the vital scientific principles, optimal nurition options, and general well-being</p>
                <p className="nutrition-section-two-second">I will teach how to time your meals, optimize your insulin, calculate the daily required macro and micro nutrients intake. The goal is not only to build muscles or lose fat but also maintain a general healthy lifestyle and longevity</p>
                <Link to ="/signup"><button className="nutrition-section-two-button">Enroll in My Program</button></Link>
            </div>
        </div>
    )
    
}
export default NutritionTwo;