import React, { useState } from 'react';
import './Experience.css';

const experiences = [
    {
        role: 'Full-Stack Developer',
        company: 'Independent Projects',
        period: '2025 - Present',
        points: [
            'Built full-stack applications integrating machine learning inference with responsive React client interfaces.',
            'Constructed distributed microservices and background job processors using Python and Node.js.',
            'Containerized development and deployment runtimes with Docker and automated pipeline testing.'
        ]
    },
    {
        role: 'Data Engineering Intern',
        company: 'EduSkills Foundation & AWS',
        period: '2025',
        points: [
            'Engineered cloud telemetry pipelines and automated data collection routines.',
            'Worked with AWS storage and analytics solutions to support structured querying.',
            'Applied validation rules and anomaly checks to maintain high data integrity across pipeline runs.'
        ]
    }
];

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <div className="section-header">
                    <h2 className="section-title"><span>02.</span> Experience</h2>
                    <div className="section-line"></div>
                </div>

                <div className="experience-layout">
                    <div className="tab-list">
                        {experiences.map((exp, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                            >
                                {exp.company}
                            </button>
                        ))}
                    </div>

                    <div className="tab-panel">
                        <h3 className="job-role">
                            {experiences[activeTab].role}{' '}
                            <span className="job-company">@ {experiences[activeTab].company}</span>
                        </h3>
                        <p className="job-period">{experiences[activeTab].period}</p>
                        <ul className="job-points">
                            {experiences[activeTab].points.map((pt, idx) => (
                                <li key={idx}>
                                    <span className="bullet">▹</span>
                                    <span>{pt}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;