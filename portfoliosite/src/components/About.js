import './About.css';
import React, { useState, useCallback } from 'react';

function LandingPage() {
    return(
        <div className="AboutPage">
            <h1 className="header">About Nasir Cross-Griffin</h1>

            <div className="LinkedIn">
                <div className="LogoAndLink">
                    <div className="LinkedInImageContainer">
                        <img src="/static/LinkedIn_icon.svg.webp" alt="no image"/>
                    </div>
                    <a className="LinkedInLink" href="https://www.linkedin.com/in/nasir-cross-griffin-a87b98303/">Learn more about me on LinkedIn!</a>
                </div>
            </div>

            <div className="About">
                <p className="About-Text">My Name is Nasir Cross-Griffin, I have a passion for software engineering
                and a desire to learn and grow in the tech industry. I wish to expand my skillset and increase my abilities 
                to their maximum. I am a Rowan University 2024 alumni. I live in New Jersey, but I will go wherever my career takes 
                me as I am willing to relocate. If given the opportunity, I will bring work ethic, integrity, and most importantly,
                success to any company under which I am employed. For a more detailed look at my skills, please view my resume on the
                resume page. Thank you for reading the about me section.
                </p>
            </div>
        </div>
    );
}

export default LandingPage;