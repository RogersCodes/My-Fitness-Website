import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-text">
                <h3 className="footer-header"><span className="highlight-footer-text">DON'T MISS OUT</span> GET MY WORKOUT AND NUTRITION TIPS STRAIGHT TO YOUR INBOX</h3>
                <p className="footer-parting-shot">Get fitter and stronger with my latest guides, tutorial videos, and insider offers</p>
            </div>
            <form className="email-form">
                <input type="email" placeholder="Your email" aria-label="Email address" className="footer-input"></input>
                <button type="submit" className="email-button" required>HIT ME</button>
            </form>
        </div>
    )
}
export default Footer;