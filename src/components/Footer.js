import React from 'react';
import { FaTwitter, FaMedium, FaLinkedin } from 'react-icons/fa';  // Icons
import '../styles/Footer.css';  // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="menu">
        <ul className="links">
          <li><a href="/career">Career</a></li>
          <li><a href="/meeting">Meet</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="socialMedia">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
          <FaMedium className="icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>
      <p className="copyright">
        © Felix — All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
