const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const path = require("path");
const nodemailer = require("nodemailer")

//email

const apikey = process.env.APIKEY;

let transporter = nodemailer.createTransport({
    host: 'mail.nasirgriffin.com',
    port: 587,
    auth: {
        user: process.env.ULTRON_MAIL_USER, 
        pass: process.env.ULTRON_MAIL_PASSWORD
    }
});

const sendEmail = (from, to, subject, text) =>  {
	const email = {
		from: from,
		to: to,
		subject: subject,
		text: text
	}
	
	if (email) {
		transporter.sendMail(email, (error, info) => {
			if (error) {
				console.error('Error sending email:', error);
			} else {
				console.log('Email sent successfully:', info.response);
			}
		});
	}
}

//routes

module.exports = router

router.get('/all', async (req, res) => {
	try {
		const Contacts = await Contact.find();
		res.json(Contacts)
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
})

router.get('/:id', async (req, res) => {
	try {
			const id = req.params.id
			const retrievedContact = await Contact.findById(id)
			if (retrievedContact)
				res.json(retrievedContact)
			else
				res.status(400).json({ message: err.message });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
})

router.post('/', async (req, res) => {
	const contact = new Contact({
		company: req.body.company,
		email: req.body.email,
		phonenumber: req.body.phonenumber,
		message: req.body.message
	})

	try {
			const newContact = await contact.save()
			const messageToMe = "Contact received from " + newContact.company +
			", call this contact at, " + newContact.phonenumber + ", email this contact at, " 
			+ newContact.email + ", the message received from this contact is, " + newContact.message
			sendEmail(
				"nasirgwebdev@gmail.com", 
				newContact.email, 
				"Confirmation of contact",
				"Thank you so much for getting in contact with me! I look forward to discussing further opportunities with you."
			)

			sendEmail(
				"nasirgwebdev@gmail.com", 
				"nasircrossgriffin@gmail.com", 
				"Contact received",
				messageToMe
			)
			res.status(201).json(newContact)
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
})





