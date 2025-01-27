import React from "react";
import Navbar from "../components/HomePage/navbar";
import Footer from "../components/HomePage/footer";
import Contact from "../components/HomePage/contact";
import WorkoutsOne from "../components/workoutspage/WorkoutsOne";
import WorkoutsTwo from "../components/workoutspage/WorkoutsTwo";
import WorkOutsThree from "../components/workoutspage/WorkoutsThree";
import WorkoutsFour from "../components/workoutspage/WorkoutsFour";

function Workouts() {
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
  );
}
export default Workouts;
