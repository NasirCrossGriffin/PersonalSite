import './Navbar.css';
import { Link } from 'react-router-dom';


import React, { useState, useCallback } from 'react';

function Navbar() {
    return (
        <div className="navBar">
            <container>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </container>
        </div>
    );
}