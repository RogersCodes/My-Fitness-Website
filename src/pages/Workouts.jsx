import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Contact from "../components/contact";
import WorkoutsOne from "../components/workoutspage/WorkoutsOne";
import WorkoutsTwo from "../components/workoutspage/WorkoutsTwo";
import WorkOutsThree from "../components/workoutspage/WorkoutsThree";
import WorkoutsFour from "../components/workoutspage/WorkoutsFour";

function Workouts () {
    
    return (
        <div className="workouts">
            <Navbar />
            <WorkoutsOne />
            <WorkoutsTwo />
            <WorkOutsThree />
            <WorkoutsFour />
            <Footer />
            <Contact />
        </div>
    )
}
export default Workouts;