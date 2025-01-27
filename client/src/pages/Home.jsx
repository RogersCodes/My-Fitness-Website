import React from "react";
import Hero from "../components/HomePage/hero";
import Component from "../components/HomePage/component";
import Philosophy from "../components/HomePage/philosophy";
import Exercise from "../components/HomePage/exercise";
import Nutrition from "../components/HomePage/nutrition";
import Mental from "../components/HomePage/mental";
import Intro from "../components/HomePage/intro";
import Contact from "../components/HomePage/contact";
import Navbar from "../components/HomePage/navbar";
import Footer from "../components/HomePage/footer";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <Component />
      <Philosophy />
      <Exercise />
      <Nutrition />
      <Mental />
      <Intro />
      <Footer />
      <Contact />
    </div>
  );
}

export default Home;
