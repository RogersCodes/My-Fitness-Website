import React from "react";

function WorkoutsFour () {
    return (
        <div className="workouts-section-four">
            <div className="workouts-section-four-text">
                <h4 className="workouts-section-four-header">Workout From Home or At The Gym</h4>
                <p className="workouts-section-four-para">I have designed home and gym workout plans to incorporate your busy schedules and individual needs. Both programs will be equally challenging and beneficial to your fitness journey</p>
            </div>
            <table className="workouts-section-four-table">
                <caption className="table-caption">Equipment Needed</caption>
                <thead>
                    <tr>
                        <th>Home</th>
                        <th>Gym</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dumbbells</td>
                        <td>Dumbbells/ Kettlebells</td>
                    </tr>
                    <tr>
                        <td>Resistance bands</td>
                        <td>Barbells/ Cable machines/ Dumbbells/ Straight bars </td>
                    </tr>
                    <tr>
                        <td>A bench, chair, or step</td>
                        <td>A bench or step </td>
                    </tr>
                    <tr>
                        <td>Yoga mat</td>
                        <td>Yoga mat</td>
                    </tr>
                </tbody>
            </table>
            <h5 className="workouts-section-four-action"><span className="highlight-section-four">WOULD YOU</span> LIKE TO TRY IT OUT?</h5>
            <p className="workouts-section-four-action-news">My monthly newsletter contains secrets, advice, and articles to help you achieve the physique you want. Sign up now and I will send you a sample</p>
            
        </div>
    )
}
export default WorkoutsFour;