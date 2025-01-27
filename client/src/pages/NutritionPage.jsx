import React from "react";
import Navbar from "../components/HomePage/navbar";
import NutritionOne from "../components/nutritionpg/NutritionOne";
import NutritionTwo from "../components/nutritionpg/NutritionTwo";
import Footer from "../components/HomePage/footer";
import NutritionThree from "../components/nutritionpg/NutritionThree";
import NutritionFour from "../components/nutritionpg/NutritionFour";
import Contact from "../components/HomePage/contact";

function NutritionPage() {
  return (
    <div className="nutrition-page">
      <Navbar />
      <NutritionOne />
      <NutritionTwo />
      <NutritionThree />
      <NutritionFour />
      <Footer />
      <Contact />
    </div>
  );
}
export default NutritionPage;
