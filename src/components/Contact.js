import './Contact.css';
import React, { useState, useCallback } from 'react';

function Contact() {
    return (
        <div className="Contact">
            <div>
                <form method='POST'>
                    <label htmlFor='company'>Company</label>
                    <input type="text" name="company" id="company"/>
                    <label htmlFor='email'>Email</label>
                    <input type="text" name="email" id="email"/>
                    <label htmlFor='phone number'>Phone Number</label>
                    <input type="text" name="phone number" id="number"/>
                    <label htmlFor="message">Message</label>
                    <input type="text" name="message" id="message"/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
}

export default Contact;