import React from "react";
import Navbar from "../HomePage/navbar";
import Footer from "../HomePage/footer";
import Contact from "../HomePage/contact";

const Terms = () => {
    return(
        <>
        <Navbar />
        <div className="terms-container">
            <h1>Terms of Service</h1>
            <p>Last Updated: 11 March 2025</p>
            <p>Welcome to Rogers Fitness Club! These Terms of Service ("Terms") govern your use of our website, services, and any related content. By signing up or using our services, you agree to these Terms. If you do not agree, please do not use our services.</p>
            <h2>1. Eligibility</h2>
            <p>By creating an account, you confirm that you are at least 18 years old or have parental consent to use our services. You must provide accurate and complete information when signing up.</p>
            <h2>2. Account Registration & Security</h2>
            <ul>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You agree to provide accurate, complete, and current information.</li>
                <li>You must not share your login details with others or allow unauthorized access.</li>
            </ul>
            <h2>3. User Conduct</h2>
            <p>By using our platform, you agree not to:</p>
            <ul>
                <li>Violate any applicable laws or regulations.</li>
                <li>Upload or distribute harmful, misleading, or offensive content.</li>
                <li>Engage in fraudulent or deceptive practices.</li>
            </ul>
            <h2>4. Privacy Policy</h2>
            <p>Your use of our services is also governed by our <a href="/privacy" className="privacy-policy">Privacy Policy</a>, which outlines how we collect, use, and protect your personal data.</p>
            <h2>5. Subscription & Payments</h2>
            <ul>
                <li>Some features may require payment. If you choose a paid plan, you agree to pay all applicable fees.</li>
                <li>Payments are non-refundable unless otherwise stated.</li>
            </ul>
            <h2>6. Termination</h2>
            <p>We reserve the right to suspend or terminate your account if you violate these Terms or engage in harmful activities on our platform.</p>
            <h2>7. Disclaimers & Limitation of Liability</h2>
            <ul>
                <li>We provide services "as is" without warranties of any kind.</li>
                <li>We are not liable for injuries, losses, or damages resulting from your use of our platform or fitness programs.</li>
            </ul>
            <h2>8. Changes to Terms</h2>
            <p>We may update these Terms periodically. Continued use of our services after changes means you accept the revised Terms.</p>
            <h2>9. Contact Us</h2>
            <p>For any questions, contact us at: <a href="mailto:adindajohnrogers@gmail.com" style={{ color:"grey", textDecoration: "underline;" }}>adindajohnrogers@gmail.com</a></p>
        </div>
        <Footer />
        <Contact />
        </>
        
    )
}
export default Terms;