import './Navbar.css';
import { Link } from 'react-router-dom';
import React, { useState, useCallback } from 'react';

function Navbar() {
    return (
        <div className="NavBar">
            <container>
                <Link to="/about" className="Link">About</Link>
                <Link to="/projects" className="Link">Projects</Link>
                <Link to="/contact" className="Link">Contact</Link>
                <Link to="/resume" className="Link">Resume</Link>
            </container>
        </div>
    );

    
}

export default Navbar;