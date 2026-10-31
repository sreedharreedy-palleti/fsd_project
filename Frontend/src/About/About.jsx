import React from 'react';
import './About.css';

const skills = [
    'React / Vite',
    'Node.js & Express',
    'Python / FastAPI',
    'Docker & CI/CD',
    'MongoDB & SQL',
    'Machine Learning'
];

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="section-header">
                    <h2 className="section-title"><span>01.</span> About Me</h2>
                    <div className="section-line"></div>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a software engineer focused on building full-stack applications,
                            scalable backend architectures, and machine learning models into reliable production workflows.
                        </p>
                        <p>
                            Whether containerizing services with Docker, profiling APIs, or building real-time data pipelines,
                            I prioritize clean code, testability, and efficient resource usage.
                        </p>
                        <p>Here are several tools and technologies I use regularly:</p>
                        <ul className="skills-grid">
                            {skills.map((skill, index) => (
                                <li key={index} className="skill-item">
                                    <span className="bullet">▹</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="about-image-wrapper">
                        <div className="image-backdrop"></div>
                        <div className="image-placeholder">
                            <span>[ Profile Image ]</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;