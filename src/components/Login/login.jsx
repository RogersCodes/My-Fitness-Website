import React from "react";

function Login () {
    return (
        <div className="login-page">
            <h2 className="login-header">Log In</h2>
            <p className="login-intro">Please login to continue</p>
            <form className="login-form">
                <label htmlFor="login-email"></label>
                <input type="text" id="login-email" placeholder="Your Email" className="login-email-address" name="loginEmail" required></input>
                
            </form>
        </div>
    )
}
export default Login;