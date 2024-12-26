import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login () {
    const [ inputData, setInputData ] = useState({
        loginEmail: "",
        loginPassword: "",

    });
    //logic for signup using the backend API
    const loginUser = async (email, passwword) => {
        try {
            const response = await axios.post("http://localhost:8080/api/login", {
                email: email,
                password: passwword,
            });
            //Handle succesful login
            console.log(response.data.token);
        } catch (error) {
            console.error('Login failed:', error.message.data.message);
        }
    };

    const navigateLogin = useNavigate();
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setInputData((prevData) => ({...prevData, [name]: value}));
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
                <input type="password" id="login-password" className="login-page-password" aria-label="loginPassword" placeholder="**********" name="LoginPassword" value={inputData.loginPassword} onChange={handleLoginChange} required></input>

                <button type="button" className="login-profile-button" aria-label="Proceed to your profile">Login</button>

                <button type="button" className="reset-password">Reset Your Password</button>

                <button type="button" className="join-now-button" onClick={handleSignUpRedirect}>Not A Member? Join Now!</button>
            </form>
        </div>
    )
}
export default Login;