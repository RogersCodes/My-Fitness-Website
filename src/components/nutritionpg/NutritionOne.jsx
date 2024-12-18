import React from "react";
import { Link } from "react-router-dom";

function NutritionOne () {
    return (
        <div className="nutrition-section-one">
            <img src="/images/fish.jpg" alt="fish" className="fish" />
            <div className="nutrition-section-one-text">
                <h5 className="nutrition-one-header">Eat Like Me</h5>
                <p className="nutrition-section-one-para">For over 10 years, I've dedicated myself to fitness, constantly testing and refining dietary strategies to maximize muscle growth, fat loss, and weight management. I've shared these proven practices with clients of all backgrounds, helping them achieve remarkable physical transformations. My published research articles highlight the most effective dietary approaches, and I'm a firm advocate of intermittent fasting, which has consistently helped my clients and me reach our fitness and body recomposition goals.</p>
                <p className="nutrition-section-one-second">As a dedicated researcher, fitness enthusiast, and nutrition specialist, I prioritize a personalized approach to every client’s journey. I start with a comprehensive body composition analysis to design meal plans that align perfectly with each client’s unique fitness goals. This process involves assessing physical, physiological, and psychological factors to ensure the most effective, customized approach. Rest assured, I practice these methods myself and I am committed to helping you achieve sustainable, transformative results.</p>
                <p className="nutrition-section-one-join">Sounds good? Join today to gain full access</p>
                <Link to ="/signup"><button className="nutrition-section-one-button">JOIN THE WINNING TEAM TODAY</button></Link>
            </div>
        </div>
    )
}
export default NutritionOne;