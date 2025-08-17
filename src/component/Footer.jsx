import React from "react";
import "../styles/Footer.css";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section: Socials */}
      <div className="footer-socials">
        <h3>Show Your Love ❤️</h3>
        <div className="social-icons">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        <p>Made with ❤️ by <b>Akhtar Shaikh</b></p>
      </div>
    </footer>
  );
};

export default Footer;
