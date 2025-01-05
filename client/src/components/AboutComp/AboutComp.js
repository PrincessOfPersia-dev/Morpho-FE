// src/components/AboutComp.js
import React from 'react';
import './AboutComp.css'; // We'll create this CSS file next

const AboutComp = () => {
    return (
        <div className="about">
            <div className="about-text">
                {/* <h2>About Us</h2> */}
                <p>Design with Curves aims to push the idea of working with complex geometries and coming up with new ideas in the realm of fluid architecture. 
                    The competition is for people who want to challenge the 'norm', when it comes to architecture.
                    <br/><br/>Chmfered</p>
            </div>
        </div>
    );
};

export default AboutComp;
