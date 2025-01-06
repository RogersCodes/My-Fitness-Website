import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login () {
    const [ inputData, setInputData ] = useState({
        loginEmail: "",
        loginPassword: "",

    });
    //logic for signup using the backend API
    const navigateLogin = useNavigate();
    const loginUser = async (email, password) => {
        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Login failed. Please check your email and password.");
        }
             const data = await response.json();
            //Store token from server-side
            localStorage.setItem("token", data.token);
            //Redirect clients workouts and meal plans page
            navigateLogin('/dashboard');
        } catch (error) {
            console.error("Login failed:", error.message);
            alert(error.message);
        }
    };

    
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setInputData((prevData) => ({...prevData, [name]: value}));
    };
    //When user fails to enter the correct details
    const handleLoginClick = () => {
        const { loginEmail, loginPassword } = inputData;
        if (!loginEmail || !loginPassword) {
            alert("Please fill in both email and password");
            return;
        }
        loginUser(loginEmail, loginPassword);
    };

    const handleSignUpRedirect = () => {
        navigateLogin("/signup");
    }
    return (
        <div className="login-page">
            <h2 className="login-header">Log In</h2>
            <p className="login-intro">Please login to continue</p>
            <form className="login-form">
                <label htmlFor="login-email"></label>
                <input type="text" id="login-email" placeholder="Your Email" className="login-email-address" name="loginEmail" value={inputData.loginEmail} onChange={handleLoginChange} required></input>

                <label htmlFor="login-password"></label>
                <input type="password" id="login-password" className="login-page-password" aria-label="loginPassword" placeholder="**********" name="loginPassword" value={inputData.loginPassword} onChange={handleLoginChange} required></input>

                <button type="button" className="login-profile-button" aria-label="Proceed to your profile" onClick={handleLoginClick}>Login</button>

                <button type="button" className="reset-password">Reset Your Password</button>

                <button type="button" className="join-now-button" onClick={handleSignUpRedirect}>Not A Member? Join Now!</button>
            </form>
        </div>
    )
}
export default Login;