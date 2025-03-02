import React, { useEffect, useState } from "react";


const Dashboard = () => {
    const token = localStorage.getItem("token");
    const [firstName, setFirstName] = useState("");
    const [message, setMessage] = useState("");

    //protect the page to allow only logged in users
    if (!token) {
        return <h2 className="dashboard-warning">Please log in to access this page.</h2>;
    };
    //Fetch user info from local storage
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("Fetched user:", user); //debug
        if (user) {
            setFirstName(user.firstName);
        }
    }, []);

    //logout option
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = '/signup';
    };
//Service booking
const bookService = async (service) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/api/auth/book-service",
            { service },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        setMessage(response.data.message);
    } catch (error) {
        setMessage("Booking failed. Please try again.")
    }
};
    return (
        <div className="dashboard">
            <h1 className="dashboard-header">Welcome, {firstName}</h1>
            <div className="services">
                <h3 className="servive-header">Select a Service:</h3>
                <button className="service-button" onClick={() => bookService("meal-plan")}>Book a Meal Plan</button>
                <button className="service-button" onClick={() => bookService("workout")}>Book Workout Routine</button>
            </div>
            {message && <p className="boking-message">{message}</p>}
            <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
    )
}
export default Dashboard;