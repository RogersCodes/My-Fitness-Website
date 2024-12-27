import React from "react";

const Dashboard = () => {
    const token = localStorage.getItem("token");

    //protect the page to allow only logged in users
    if (!token) {
        return <h2 className="dashboard-warning">Please log in to access this page.</h2>;
    }
    return (
        <div className="dashboard">
            <h1 className="dashboard-header">Welcome to Your Dashboard</h1>
            <section>
                <h2 className="dashboard-workouts">Workouts</h2>
                <ul className="workout-split-week">
                    <li className="workout-list">Monday: Hamstrings and Glutes</li>
                    <li className="workout-list">Tuesday: Chest, Shoulders, and Triceps</li>
                </ul>
            </section>
        </div>
    )
}