import './LandingPage.css';
import React, { useState, useCallback } from 'react';
import portrait from '../static/IMG_8092.jpg';

function LandingPage() {
    return(
        <div className="container">
            <div className="LandingPage">
                <div className="Welcome">
                    <h1 className="header1">Welcome To Nasir's Site!</h1>
                    <h2 className="header2">Please use the navbar to navigate to different pages.</h2>
                </div>
                <img src={portrait} alt="Portrait" className="Portrait"/>
            </div>
        </div>
    );
}

export default LandingPage;