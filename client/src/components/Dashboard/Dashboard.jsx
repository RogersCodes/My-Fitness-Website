import React from "react";

const Dashboard = () => {
    const token = localStorage.getItem("token");

    //protect the page to allow only logged in users
    if (!token) {
        return <h2 className="dashboard-warning">Please log in to access this page.</h2>;
    };
    //logout option
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = '/';
    };

    return (
        <div className="dashboard">
            <h1 className="dashboard-header">Welcome to Your Dashboard</h1>
            <section>
                <h2 className="dashboard-workouts">Workouts</h2>
                <ul className="workout-split-week">
                    <li className="workout-list">Monday: Hamstrings, Glutes, and Calves</li>
                    <li className="workout-list">Tuesday: Chest, Shoulders, and Triceps</li>
                    <li className="workout-list">Wednesday: Back, Biceps, and Abs</li>
                    <li className="workout-list">Thurday: Chest, Triceps, and Abs</li>
                    <li className="workout-list">Friday: Quadriceps and Calves</li>
                </ul>
            </section>
            <button className="logout-button" onClick={handleLogout}></button>
        </div>
    )
}
export default Dashboard;