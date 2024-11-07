import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div className="contact">
           <ul className="contact-list">
                <li className="contact-list-item"><a href="/">Home</a></li>
                <li className="contact-list-item"><a href="/workouts">Workouts</a></li>
                <li className="contact-list-item"><a href="/nutrition">Nutrition</a></li>
            </ul>
            <div className="contact-images">
                <a href="https://www.instagram.com/dinx_roger/" target="_blank" rel="noopener noreferrer"><img src="images/Group 2.png" alt="instagram-icon" className="instagram-image"/></a>
                <a href="https://x.com/RawG_Dinx" target="_blank" rel="noopener noreferrer"><img src="images/Vector.png" alt="x-icon" className="x-image"/></a>
                <a href="mailto:adindajohnrogers@gmail.com"><img src="images/Group.png" alt="email-icon" className="email-image" /></a>
            </div>
            
        </div>
    )
}
export default Contact;