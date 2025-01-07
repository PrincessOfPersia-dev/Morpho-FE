// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Make sure you have this CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <img src={require('../../assets/logo.png')} alt="Logo" className="footer-logo" />
                    <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
                <div className="footer-column">
                    {/* <h4>Navigation</h4> */}
                    <nav className="footer-nav">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-column">
                    {/* <h4>Social Media</h4> */}
                    <div className="social-media">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.tiktok.com/@morphologiccomp" target="_blank" rel="noopener noreferrer">TikTok</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
