import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import emailjs from '@emailjs/browser';

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import ContactUsModal from "../components/contact/ContactUsModal"; // Import the new component

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";
import "../../src/components/contact/style/Contact.css"
import toast from "react-hot-toast";

const Contact = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => {
		setIsModalOpen(false);
		setName("");
		setEmail("");
		setMessage("");
	};

	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !email || !message) {
			toast.error("All fields are required...", {
				position: "top-center"
			})
		} else {
			const toastId = toast.loading("Sending message...");
			try {
				emailjs.sendForm(
					'service_1fx4v2a',
					'template_q6cqk0p',
					e.target,
					'RcJS2rrh_yC4RmUQh'
				).then((data) => {
					toast.success("Message send!", {
						id: toastId,
						position: "top-center",
					})
					setName("");
					setEmail("");
					setMessage("");
					closeModal();
				}).catch((error) => {
					toast.error("Failed to send message. Please try again.", {
						id: toastId,
						position: "top-center",
					});
				});
			} catch (error) {
				toast.error("Failed to send message. Please try again.", {
					id: toastId,
					position: "top-center",
				});
			}
		}
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">Let's Get in Touch: Ways to Connect with Me</div>

						<h2>
							<div className="subtitle contact-subtitle" style={{ letterSpacing: "1px", textAlign: "justify" }}>
								Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at{" "}
								<a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>&nbsp;or you can fill out this <span className="form-link" onClick={openModal} style={{ color: "blue", fontWeight: "bolder", textDecoration: "underline" }}>form</span>. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Alternatively, you can use the contact form on my website to get in touch. Simply fill out the required fields and I'll get back to you as soon as possible. Finally, if you prefer to connect on social media, you can find me on{" "}
								<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
									{INFO.socials.linkedin}
								</a>. I post regular updates and engage with my followers there, so don't hesitate to reach out. Thanks again for your interest, and I look forward to hearing from you!
							</div>
						</h2>
					</div>

					<div>
						<h2>Follow me on Socials</h2>
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>

			<ContactUsModal
				isOpen={isModalOpen}
				closeModal={closeModal}
				handleSubmit={handleSubmit}
				handleOverlayClick={handleOverlayClick}
				name={name}
				setName={setName}
				email={email}
				setEmail={setEmail}
				message={message}
				setMessage={setMessage}
			/>
		</React.Fragment>
	);
};

export default Contact;
