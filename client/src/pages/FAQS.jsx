import React from "react";
import Navbar from "../components/HomePage/navbar";
import Footer from "../components/HomePage/footer";
import Contact from "../components/HomePage/contact";
import FaqsPart from "../components/FAQS/Faqs";

function Faqs() {
  return (
    <div>
      <Navbar />
      <FaqsPart />
      <Footer />
      <Contact />
    </div>
  );
}
export default Faqs;
