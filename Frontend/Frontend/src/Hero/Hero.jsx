import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-container">
                <span className="hero-greeting">Hi, my name is</span>
                <h1 className="hero-name">Sreedhar & Vishnu Priya Project</h1>
                <h2 className="hero-tagline">I build scalable web apps & intelligent systems.</h2>
                <p className="hero-description">
                    Full-Stack Developer and Data Science engineer focused on crafting performant web applications,
                    robust backend services, and AI-driven platforms.
                </p>
                <div className="hero-actions">
                    <a href="#experience" className="btn btn-primary">View Work</a>
                    <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;