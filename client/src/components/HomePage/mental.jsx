import React from 'react';
import { Link } from 'react-router-dom';

function Mental() {
    return (
        <div className="mental">
            <img src="/images/20190903085555_IMG_2915 1.png" alt="mental" className="mental-image"/>
            <div className="mental-text">
                <h3 className="mental-header">3. MENTAL WELL-BEING AND REST</h3>
                <ul className="mental-list">
                    <li>Be part of my supportive fitness community</li>
                    <li>Get help and accountability via WhatsApp group</li>
                    <li>Retreats and meetups</li>
                    <li>Need support? Email me for personalized advice</li>
                </ul>
                <Link to="/signup">
                    <button className="mental-button">JOIN NOW!</button>
                </Link>
                
            </div>

        </div>
    )
}
export default Mental;