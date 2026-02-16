import './Contact.css';
import React, { useState, useCallback, useEffect } from 'react';

function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [message, setMessage] = useState("")
    const [thank, setThank] = useState(false)

    const BASE_URL = (process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_URL : "")

    useEffect(() => {
        window.scrollTo(0, 0)
        console.log(BASE_URL)
    }, [])
    

    const updateFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const updateLastName = (e) => {
        setLastName(e.target.value)
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

    const newContact = async (contact) => {
        console.log(contact)

        const BASE_URL = process.env.NODE_ENV === 'production' ? '' : process.env.REACT_APP_API_URL;

        try {
            const response = await fetch(`${BASE_URL}/api/contact/`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    body: JSON.stringify(contact),
            });

            if (response.ok) {
                return await response.json();
            } else {
                console.log(await response.status);
                throw new Error("Contact unsuccessful");
            }
        } catch(err) {
            throw new Error("Contact unsuccessful");
        }
    }

    const submitContact = async (e) => {
        e.preventDefault();

        const contactObj = {
            email: email,
            firstname: firstName,
            lastname: lastName,
            phone: phonenumber,
            message: message
        };

        try {
        await newContact(contactObj);
            setThank(true);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className="ContactPage Fade-In">
            <div className="Contact">
                {thank === true ? (
                    <div className='ThankYou'>
                        <p>Thank you for contacting me, please check your email to confirm that your contact was sent!</p>
                    </div>
                ) : (
                    <div className="ContactContainer">
                        <div className="BannerAndForm">
                            <h1 className="ContactBanner">CONTACT</h1>
                            <div className="FormContainer">
                                <form method="POST" onSubmit={(e) => {submitContact(e)}}>
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        onChange={(e) => updateFirstName(e)}
                                    />

                                    <label htmlFor="firstName">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        onChange={(e) => updateLastName(e)}
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
                                    <input type="submit"/>
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