import './Contact.css';
import React, { useState, useCallback, useEffect } from 'react';

function Contact() {
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [message, setMessage] = useState("")
    const [thank, setThank] = useState(false)

    const BASE_URL = (process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_URL : "")

    useEffect(() => {console.log(BASE_URL)}, [])
    

    const updateCompany = (e) => {
        setCompany(e.target.value)
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const updatePhonenumber = (e) => {
        setPhonenumber(e.target.value)
    }

    const updateMessage = (e) => {
        setMessage(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const contactData = {
                company: company,
                email: email,
                phonenumber: phonenumber,
                message: message
            };
    
            const response = await fetch(`${BASE_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData) 
            });
    
            if (!response.ok) {
                throw new Error('Failed to create contact');
            } else {
                const contact = response.json();
                setThank(true);
                return contact;
            }
        } catch (err) {
            console.error('Error:', err.message);
            return null;
        }
    }

    return (
        <div className="ContactPage">
            <div className="Contact">
                {thank === true ? (
                    <div>
                        <p>Thank you for contacting me, please check your email to confirm that your contact was sent!</p>
                    </div>
                ) : (
                    <div className="ContactContainer">
                        <div className="BannerAndForm">
                            <h1 className="ContactBanner">CONTACT</h1>
                            <div className="FormContainer">
                                <form method="POST" onSubmit={(e) => submitHandler(e)}>
                                    <label htmlFor="company">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        onChange={(e) => updateCompany(e)}
                                    />
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        onChange={(e) => updateEmail(e)}
                                    />
                                    <label htmlFor="phone-number">Phone Number</label>
                                    <input
                                        type="text"
                                        name="phone number"
                                        id="phone-number"
                                        onChange={(e) => updatePhonenumber(e)}
                                    />
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="5" // Default number of rows
                                        cols="30" // Default number of columns
                                        onChange={(e) => updateMessage(e)}
                                    />
                                    <input type="submit" />
                                </form>
                            </div>
                        </div>
                        <h1 className="ContactInstructions">FILL OUT THE FORM<br />TO SEND ME AN EMAIL</h1>
                    </div>
                )}
            </div>
        </div>
    );
    
}

export default Contact;