import React from 'react';
import InstagramIcon from '../assets/images/Group 2.png';
import XIcon from '../assets/images/Vector.png';
import EmailIcon from '../assets/images/Group.png';

function Contact() {
    return (
        <div className="contact">
            <h2 className="contact-title">Rogers Fitness Club</h2>
            <ul className="contact-list">
                <li className="contact-list-item"><a href="/">Home</a></li>
                <li className="contact-list-item"><a href="/workouts">Workouts</a></li>
                <li className="contact-list-item"><a href="/nutrition">Nutrition</a></li>
            </ul>
            <div className="contact-images">
                <a href="https://www.instagram.com/dinx_roger/" target="_blank" rel="noopener noreferrer" aria-label="Visit my Instagram profile">
                    <img src={InstagramIcon} alt="Instagram Icon" className="instagram-image"/>
                </a>
                <a href="https://x.com/RawG_Dinx" target="_blank" rel="noopener noreferrer" aria-label="Visit my Twitter (X) profile">
                    <img src={XIcon} alt="Twitter (X) Icon" className="x-image"/>
                </a>
                <a href="mailto:adindajohnrogers@gmail.com">
                    <img src={EmailIcon} alt="Email Icon" className="email-image"/>
                </a>
            </div>
        </div>
    );
}

export default Contact;
