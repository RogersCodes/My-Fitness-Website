import React from "react";
import Navbar from "../components/navbar";
import SignUp from "../components/SignUpComp/Signuppart";


function SignUpPage () {
    return (
        <div className="signup-page">
            <Navbar />
            <SignUp />
        </div>
    )
}
export default SignUpPage;