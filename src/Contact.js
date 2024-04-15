import React, { useState, useRef } from "react";
import "./Contact.css";
import backgroundImage from "./images/sunrise-over-sea-SBI-300878742.jpg";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_lbbu0wt";
const TEMPLATE_ID = "template_x0k7c2i";
const PUBLIC_KEY = "mxKaZw6O3lW9N8B7s";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [formStatus, setFormStatus] = useState(null);
	const form = useRef();

	const isValidEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	// Check if form fields are valid for submission
	const isFormValid = () => {
		return name.trim() !== "" && isValidEmail(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!isFormValid()) return;

		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
				publicKey: PUBLIC_KEY,
			})
			.then(
				(response) => {
					console.log("SUCCESS!", response.text);
					setFormStatus("SUCCESS");
					// Optionally reset form fields here
					setName("");
					setEmail("");
					setMessage("");
				},
				(error) => {
					console.log("FAILED...", error.text);
					setFormStatus("FAILED");
				}
			);
	};

	return (
		<div
			className="contact-wrapper"
			style={{
				backgroundImage: `url(${backgroundImage})`,
				height: "auto",
				width: "100%",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="contact-container">
				<h1>CONTACT US</h1>
				<div className="contact-info">
					<div className="email-info">
						<h2>Email</h2>
						<p>info@harbourviewdesign.ca</p>
					</div>
					<div className="phone-info">
						<h2>Phone/Text</h2>
						<p>1-902-410-4162</p>
					</div>
				</div>
				<p>
					Whether you're looking to launch a brand new website or revitalize an existing one, we
					have the expertise to help you succeed.
				</p>
				<p>
					Let's navigate the digital landscape together and set your business on a course for
					success!
				</p>
				<form ref={form} onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Your Name*"
						value={name}
						name="name"
						onChange={(e) => setName(e.target.value)}
					/>

					<input
						type="email"
						placeholder="Your Email*"
						value={email}
						name="email"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<textarea
						value={message}
						placeholder="Your Message"
						name="message"
						onChange={(e) => setMessage(e.target.value)}
					></textarea>

					<button type="submit" disabled={!isFormValid()}>
						Submit
					</button>
					{formStatus === "SUCCESS" && (
						<p className="success-message">Your message has been sent successfully!</p>
					)}
					{formStatus === "FAILED" && (
						<p className="error-message">Failed to send your message. Please try again later.</p>
					)}
				</form>
			</div>
		</div>
	);
};

export default Contact;
