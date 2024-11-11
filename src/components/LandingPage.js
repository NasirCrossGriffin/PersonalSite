import './LandingPage.css';
import React, { useState, useCallback } from 'react';
import portrait from '../static/IMG_8092.jpg';

function LandingPage() {
    return(
        <div className="LandingPage">
            <h1 className="Welcome">Welcome To Nasir's Site</h1>
            <img src={portrait} alt="Portrait" className="Portrait"/>
        </div>
    );
}

export default LandingPage;