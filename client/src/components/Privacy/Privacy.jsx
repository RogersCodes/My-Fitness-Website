import React from "react";
import Navbar from "../HomePage/navbar";
import Footer from "../HomePage/footer";
import Contact from "../HomePage/contact";

const Privacy = () => {
    return (
        <>
        <Navbar />
        <div className="privacy-container">
            <h1>Privacy Policy</h1>
            <p>Last Updated: 11 March 2025</p>
            <p>At Rogers Fitness Club, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website and services.</p>
            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
                <li><strong>Personal Information: </strong>Name, email address, phone number, payment details, and account credentials.</li>
                <li><strong>Health & Fitness Data: </strong>Information you provide regarding workouts, progress, or fitness goals.</li>
                <li><strong>Usage Information: </strong>Details about how you interact with our website, including IP addresses, browser type, and cookies.</li>
                <li><strong>Payment Information: </strong>If you purchase a service, we may collect payment details through a secure third-party processor.</li>
            </ul>
            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
                <li>Provide, operate, and improve our services.</li>
                <li>Process transactions and manage your account.</li>
                <li>Send important updates, promotions, and service-related communications.</li>
                <li>Ensure security, prevent fraud, and comply with legal obligations.</li>
            </ul>
            <h2>3. Sharing Your Information</h2>
            <p>We do not sell your personal data. However, we may share information with:</p>
            <ul>
                <li><strong>Service Providers: </strong>Third-party vendors assisting with payment processing, analytics, and customer support.</li>
                <li><strong>Legal Authorities: </strong>When required by law or to protect our rights and users.</li>
                <li><strong>Business Transfers: </strong>If we undergo a merger, acquisition, or sale of assets.</li>
            </ul>
            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal data. However, no method of transmission over the internet is 100% secure. You are responsible for maintaining the confidentiality of your account credentials.</p>
            <h2>5. Cookies & Tracking Technologies</h2>
            <p>We use cookies and similar technologies to enhance user experience, analyze website traffic, and personalize content. You can manage cookie preferences through your browser settings.</p>
            <h2>6. Your Rights & Choices</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul>
                <li>Access, update, or delete your personal information.</li>
                <li>Opt out of marketing communications.</li>
                <li>Restrict or object to data processing.</li>
                <li>Withdraw consent where applicable.</li>
            </ul>
            <p>To exercise these rights, contact us at:  <a href="mailto:adindajohnrogers@gmail.com" style={{ color:"grey", textDecoration: "underline;" }}>adindajohnrogers@gmail.com</a></p>
            <h2>7. Third-Party Links</h2>
            <p>Our website may contain links to external sites. We are not responsible for their privacy practices and encourage you to review their policies.</p>
            <h2>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated "Last Updated" date.</p>
            <h2>9. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, contact us at: <a href="mailto:adindajohnrogers@gmail.com" style={{ color:"grey", textDecoration: "underline;" }}>adindajohnrogers@gmail.com</a></p>
        </div>
        <Footer />
        <Contact />
        </>
    )
}
export default Privacy;