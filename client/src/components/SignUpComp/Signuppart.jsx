import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signupUser = async (data) => {
    try {
        console.log(data);
        const response = await fetch("https://my-fitness-website-3bbj.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed.");
      }
      const responseData = await response.json();
      localStorage.setItem("token", responseData.token);
      localStorage.setItem("user", JSON.stringify(responseData.user));
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup failed:", error.message);
      alert(
        error.message ||
          "Signup failed. Please check your details and try again."
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleValidation = () => {
    if (formData.email !== formData.confirmEmail) {
      setError("Emails do not match!");
      return false;
    }
    setError("");
    return true;
  };
  //form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    //check all fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.confirmEmail ||
      !formData.password
    ) {
      setError("Please enter all fields");
      return;
    }
    if (handleValidation()) {
      await signupUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        confirmEmail: formData.confirmEmail,
        password: formData.password,
      });
      //Reset form after signup
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        password: "",
      });
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };
  return (
    <div className="signup">
      <h1 className="train-with-me">Train With Me, Rogers</h1>
      <h3 className="create-account">Create An Account</h3>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          placeholder="First Name"
          className="first-name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        ></input>

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          placeholder="Last Name"
          className="last-name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        ></input>

        <label htmlFor="your-email">Your Email</label>
        <input
          type="email"
          id="your-email"
          placeholder="email@address.com"
          className="your-email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        ></input>

        <label htmlFor="confirm-email">Confirm Email</label>
        <input
          type="email"
          id="confirm-email"
          placeholder="Confirm Email"
          className="confirm-email"
          name="confirmEmail"
          value={formData.confirmEmail}
          onChange={handleInputChange}
          required
        ></input>

        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          className="password"
          placeholder="Enter Your Password"
          aria-label="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        ></input>

        {error && <p className="error-message">{error}</p>}
        <button
          type="submit"
          className="new-account"
          aria-label="Continue to create a new account"
        >
          Continue
        </button>

        <p className="signup-policy">
          By continuing, you are indicating that you accept our{" "}
          <a href="/terms" className="terms-of-service">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="privacy-policy">
            Privacy Policy
          </a>
          , and consent to receiving emails from <a href="/">rogersfitnessclub.co.ke</a>.
        </p>
        <button
          type="button"
          className="signin-button"
          onClick={handleLoginRedirect}
        >
          Already a Member? Log In
        </button>
      </form>
    </div>
  );
}
export default SignUp;
