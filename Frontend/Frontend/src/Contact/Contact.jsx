import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus({ loading: false, success: true, error: null });
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setStatus({ loading: false, success: false, error: err.message });
        }
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

                {status.success ? (
                    <div className="contact-success">
                        Thank you! Your message has been sent successfully. Check your email for confirmation.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        {status.error && (
                            <div style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '8px' }}>
                                {status.error}
                            </div>
                        )}

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

                        <button
                            type="submit"
                            disabled={status.loading}
                            className="btn btn-primary submit-btn"
                        >
                            {status.loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;