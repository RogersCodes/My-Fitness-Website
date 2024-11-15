import React from "react";
import Navbar from "../components/navbar";
import SignUp from "../components/SignUpComp/Signuppart";
import Footer from "../components/footer";
import Contact from "../components/contact";

function SignUpPage () {
    return (
        <div className="signup-page">
            <Navbar />
            <SignUp />
        </div>
    )
}
export default SignUpPage;