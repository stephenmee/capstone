import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo2.png'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-item">
                <img src={logo} alt="Company Logo" />
            </div>
            <div className="footer-item">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/reservations">Reservations</Link>
                        </li>
                        <li>
                            <Link to="/order-online">Order Online</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="footer-item">
                <p>Address: 742 Evergreen Terrace, Springfield, IL 90210</p>
                <p>Email us at: example@email.com</p>
                <p>Call us at: +123-45-678-910</p>
            </div>
            <div className="footer-item">
                <ul className="social-links">
                    <li>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
