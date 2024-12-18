import React from "react";
import Hero from '../components/hero';
import Component from '../components/component';
import Philosophy from '../components/philosophy';
import Exercise from '../components/exercise';
import Nutrition from '../components/nutrition';
import Mental from '../components/mental';
import Intro from '../components/intro';
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


function Home () {
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
    )
}

export default Home;