import React from "react";
import Navbar from "../components/HomePage/navbar";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="error-page">
      <Navbar />
      <h5 className="error-header">Error 404: Page Not found</h5>
      <Link to="/" className="home-link">
        Go Back to Home Page
      </Link>
    </div>
  );
}

export default NoPage;
