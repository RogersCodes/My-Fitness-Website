import React from "react";
import { Link } from "react-router-dom";

function SignUp () {
    return (
        <div className="signup">
            <h1 className="train-with-me">Train With Me, Rogers</h1>
            <h3 className="create-account">Create An Account</h3>
            <form className="signup-form">
                <div className="name-details">
                    <label htmlFor="your-name">Your Name</label>
                    <input type="text" id="first-name" placeholder="First Name" className="first-name" required></input>
                    <input type="text" id="last-name" placeholder="Last Name" className="last-name" required></input>
                </div>
                <label htmlFor="your-email">Your Email</label>
                <input type="email" placeholder="email@address.com" className="your-email" required></input>
                <input type="email" placeholder="Confirm Email" className="confirm-email" required></input>
                <label htmlFor="password">Your Password</label>
                <input type="password" id="password" className="password" placeholder="Enter Your Password"></input>
                <button type="submit" className="new-account" aria-label="Continue to create a new account">Continue</button>
                <p className="signup-policy">By continuing, you are indicating that you accept our <span className="terns-of-service">Terms of Service</span>and <span className="privacy-policy">Privacy Policy</span>, and consent to receiving emails from rogersfitnessclub.com.</p>
                <Link to="/login"><button type="button" className="login-button">Already a Member? Log In</button></Link>
            </form>
        </div>
    )
}
export default SignUp;