import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <span className="contact-subtitle">03. What's Next?</span>
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-description">
                    Whether you have a question, an opportunity, or just want to connect,
                    feel free to drop a message.
                </p>

                {submitted ? (
                    <div className="contact-success">
                        Thank you! Your message has been sent.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;