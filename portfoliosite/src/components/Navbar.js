import './Navbar.css';
import { Link } from 'react-router-dom';
import React, { useState, useCallback } from 'react';

function Navbar() {
    return (
        <div className="navContainer"> 
            <div className="NavBar">
                <Link to="/about" className="Link">About</Link>
                <Link to="/projects" className="Link">Projects</Link>
                <Link to="/contact" className="Link">Contact</Link>
                <Link to="/resume" className="Link">Resume</Link>
            </div>
        </div>
        
    );

    
}

export default Navbar;