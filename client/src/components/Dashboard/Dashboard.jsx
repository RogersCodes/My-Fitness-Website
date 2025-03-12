import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [firstName, setFirstName] = useState("");
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  //protect the page to allow only logged in users
  if (!token) {
    return (
      <h2 className="dashboard-warning">Please log in to access this page.</h2>
    );
  }
  //Fetch user info from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
  
    if (!storedUser) {
      console.error("No user found in localStorage.");
      return;
    }
  
    try {
      const user = JSON.parse(storedUser);
      if (user && user._id) {
        setFirstName(user.firstName || "Guest"); // Provide a fallback
        setUserId(user._id);
      } else {
        console.error("User object is missing _id:", user);
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }, []);
  

  //logout option
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/signup";
  };
  //service booking
  const bookService = async (service) => {
    console.log("User ID being sent:", userId); //Debug log
    if (!userId) {
        console.error("Invalid or missing user ID");
        setMessage("Error: Invalid or missing user ID");
        return;
    }
    try {
      const response = await fetch(
        "https://my-fitness-website-3bbj.onrender.com/api/auth/book-service",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userId, service }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Booking failed. Please try again.");
      }

      setMessage(data.message);
    } catch (error) {
      console.error("Booking error:", error);
      setMessage(error.message);
    }
  };
  return (
    <div className="dashboard">
      <h1 className="dashboard-header">Welcome, {firstName}</h1>
      <div className="services-description">
        <p className="leading-services">My services include:</p>
        <p>💎 Insulin Optimization</p>
        <p>💎 Meal Timing Strategies</p>
        <p>💎 PCOS Management</p>
        <p>💎 Weight Loss</p>
        <p>💎 Fat Loss</p>
        <p>💎 Muscle Gain</p>
        <p>💎 Weight Gain</p>
        <p>💎 Strength and Hypertrophy</p>
        <p>💎 Supplementation</p>
      </div>
      <div className="services">
        <h3 className="service-header">Select a Service:</h3>
        <button
          className="service-button"
          onClick={() => bookService("meal-plan")}
        >
          Book a Meal Plan
        </button>
        <button
          className="service-button"
          onClick={() => bookService("workout")}
        >
          Book Workout Routine
        </button>
      </div>
      {message && <p className="booking-message">{message}</p>}
      <button className="logout-button" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};
export default Dashboard;
