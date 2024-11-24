import React from "react";

function Login () {
    return (
        <div className="login-page">
            <h2 className="login-header">Log In</h2>
            <p className="login-intro">Please login to continue</p>
            <form className="login-form">
                <label htmlFor="login-email"></label>
                <input type="text" id="login-email" placeholder="Your Email" className="login-email-address" name="loginEmail" required></input>

                <label htmlFor="login-password"></label>
                <input type="password" id="login-password" className="login-page-password" aria-label="loginPassword" placeholder="**********" name="LoginPassword" required></input>

                <button type="button" className="login-profile-button" aria-label="Proceed to your profile">Login</button>

                <button type="button" className="reset-password">Reset Your Password</button>

                <button type="button" className="join-now-button">Not A Member? Join Now!</button>
            </form>
        </div>
    )
}
export default Login;