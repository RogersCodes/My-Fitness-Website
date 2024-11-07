import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Contact from "../components/contact";
import FaqsPart from "../components/FAQS/Faqs";

function Faqs () {
    return (
        <div>
            <Navbar />
            <FaqsPart />
            <Footer />
            <Contact />
        </div>
    )
}
export default Faqs;