import React from "react";
import { Link } from "react-router-dom";

function NutritionThree () {
    return (
        <div className="nutrition-section-three">
            <img />
            <div className="nutrition-section-three-text">
                <h5 className="nutrition-section-three-header">Easy to Prepare, Fun to Eat</h5>
                <p className="nutrition-section-three-paragraph">My nutrition plan is simple and easy to follow. You do not need to have a special set of skills to follow them. I will provide detailed descriptions on how to prepare everything.</p>
                <p className="nutrition-section-three-second-para">Each week, I will provide you with meals and snacks options for each weekday, from Monday throug Friday. For weekends, you can prepare other meals or enjoy your favorite choice of meal</p>
                <p className="nutrition-section-three-call-to-act">Become the healthiest version of yourself</p>
                <Link to ="/signup"><button className="nutrition-section-three-button">Join Today</button></Link>
            </div>
        </div>
    )
}
export default NutritionThree;