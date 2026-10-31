import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="navbar-container">
                {/* Brand Logo */}
                <a href="#hero" className="navbar-logo" onClick={closeMenu}>
                    YR<span className="logo-dot">.</span>
                </a>

                {/* Mobile Hamburger Button */}
                <button
                    className={`hamburger ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                    type="button"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Navigation Links */}
                <div className={`nav-menu-wrapper ${isOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        <li>
                            <a href="#about" onClick={closeMenu}>
                                <span className="nav-index">01.</span> About
                            </a>
                        </li>
                        <li>
                            <a href="#experience" onClick={closeMenu}>
                                <span className="nav-index">02.</span> Experience
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={closeMenu}>
                                <span className="nav-index">03.</span> Contact
                            </a>
                        </li>
                    </ul>

                    <div className="nav-cta">
                        <a
                            href="#contact"
                            className="btn btn-primary nav-btn"
                            onClick={closeMenu}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;