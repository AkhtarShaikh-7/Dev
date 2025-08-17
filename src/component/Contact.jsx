import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div>
                <br />
            </div>
            <h2>Contact Me</h2>
            <p>Have a project in mind? Let’s work together 🚀</p>

            <div className="contact-container">

                
                <div className="contact-form">

                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeF6sf4ssaRRHUk8enVC8FJpi3flsho5OG8v7sJHwRGH6dISA/viewform?embedded=true"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Contact Form"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
