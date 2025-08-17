import React from "react";
import "../styles/Services.css";
import editing from "../assets/editing.jpeg";
import wed from "../assets/wed.jpg";
import event from "../assets/event.jpeg";
import youtu from "../assets/youtu.jpeg";

const Services = () => {
  const services = [
    {
      title: "Video Editing 🎬",
      description: "Professional editing for vlogs, short films, and events.",
      img: editing,
    },
    {
      title: "Image Editing 🖼️",
      description: "High-quality retouching and creative image enhancements.",
      img: editing,
    },
    {
      title: "Wedding Photography 💍",
      description: "Capturing your special day with cinematic memories.",
      img: wed,
    },
    {
      title: "Event Photography 🎉",
      description: "Professional coverage for parties, concerts, and events.",
      img: event,
    },
    {
      title: "YouTube Content Creator 📹",
      description: "Creating engaging vlogs and lifestyle videos.",
      img: youtu,
    },
  ];

  return (
    <section className="services" id="services">
        <div className="space">
            <br />
        </div>
      <h2>My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Hire Me Button */}
      <div className="hire-me">
        <a href="#contact">Hire Me</a>
        {/* OR link to WhatsApp directly */}
        {/* <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">Hire Me</a> */}
      </div>
    </section>
  );
};

export default Services;
