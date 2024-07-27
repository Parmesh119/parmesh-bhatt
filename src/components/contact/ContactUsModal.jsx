import React from "react";

const ContactUsModal = ({ isOpen, closeModal, handleSubmit, handleOverlayClick, name, setName, email, setEmail, message, setMessage }) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay" onClick={handleOverlayClick}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<span className="close-button" onClick={closeModal}>&times;</span>
				<h2 style={{
					textAlign: "center",
					letterSpacing: "2px",
					fontWeight: "bolder"
				}}>Contact me</h2>
				<form className="contact-form" onSubmit={handleSubmit}>
					<label>Name</label>
					<input type="text" placeholder="Name" name="name" value={name}  autoFocus onChange={(e) => setName(e.target.value)} />
					<label>Email</label>
					<input type="email" placeholder="Email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} />
					<label>Message</label>
					<textarea name="message" placeholder="Message" rows={10} value={message}  onChange={(e) => setMessage(e.target.value)}></textarea>
					<button type="submit" className="submit_button" style={{
						position: "relative"
					}}>Send</button>
				</form>
			</div>
		</div>
	);
};

export default ContactUsModal;
