import './Navbar.css';

import React, { useState, useCallback } from 'react';
import portrait from '../static/IMG_8092.jpg';

function LandingPage() {
    return(
        <div className="LandingPage">
            <h1>Welcome To Nasir's Site</h1>
            <img src={portrait} alt="portrait" />
        </div>
    );
}