import React, { useState } from "react";

function Footer() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [step, setStep] = useState(1); //1. email input, 2. Full form, 3: Success message
    const [message, setMessage] = useState("");
    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        setStep(2); //Show names after users enter email
    };
    const handleFullFormSubmit = async (e) => {
        e.preventDefault();
        if (!email || !firstName || !lastName) {
            setMessage("Please fill in all the fields.");
            return;
        }
    
        try {
            const res = await fetch("https://my-fitness-website-3bbj.onrender.com/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, firstName, lastName }),
            });
    
            const data = await res.json();
    
            if (res.ok) {
                setStep(3); // Show success message
                setMessage("🎉 Thank you for subscribing! Check your inbox for my latest guides.");
            } else {
                setMessage(data.message); // Display the actual error message from the backend
            }
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
        }
    };
    
    return (
        <div className="footer">
            <div className="footer-text">
                <h3 className="footer-header">
                    <span className="highlight-footer-text">DON'T MISS OUT</span> GET MY WORKOUT AND NUTRITION TIPS STRAIGHT TO YOUR INBOX
                </h3>
                <p className="footer-parting-shot">
                    Get fitter and stronger with my latest guides, tutorial videos, and insider offers
                </p>
            </div>
            {step === 1 && (
                <form className="email-form"  onSubmit={handleEmailSubmit}>
                    <input 
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="footer-input"
                        required
                    />
                    <button type="submit" className="email-button" required>HIT ME</button>
                    {message && <p className="error-message">{message}</p>}
                </form>
            )}
            {step === 2 && (
                <form className="email-form" onSubmit={handleFullFormSubmit}>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="footer-input"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="footer-input"
                        required
                    />
                    <button type="submit" className="email-button">Subscribe</button>
                    {message && <p className="error-message">{message}</p>}
                </form>
            )}
            {step === 3 && <p className="success-message">{message}</p>}
        </div>
    );
}
export default Footer;