import React from 'react'
import "../styles/Hero.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {

    const particlesInit = async (engine) => {
        // this loads the tsparticles package bundle
        await loadFull(engine);
    };



    return (
        <div className='hero'>


            {/* 🔹 Particle Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color:{value: "#111"}
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: "push" },
                            onHover: { enable: true, mode: "repulse" },
                            resize: true,
                        },
                        modes: {
                            push: { quantity: 4 },
                            repulse: { distance: 100, duration: 0.4 },
                        },
                    },
                    particles: {
                        color: { value: "#FF0000" },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 2,
                        },
                        collisions: { enable: true },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: { default: "bounce" },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: { density: { enable: true, area: 800 }, value: 100 },
                        opacity: { value: 0.5 },
                        shape: { type: "star" },
                        size: { value: { min: 1, max: 5 } },
                    },
                    detectRetina: true,
                }}
                style={{ position: "absolute", top: 0, left: 0 }}
            />




            <div className="container">
                <h1>✨Every Video, A New Experience✨</h1>
                <h2>Welcome To <b>DKTV</b> world</h2>
                <p>No fixed rules, no limits. Just raw creativity, crazy fun, and stories worth watching. <br /><br /> Hit play and see what today’s video has for you!</p>

                <div className="hero-button">
                    <button>🚀 Start Watching...</button>
                    <button>❤️ Subscribe Today!</button>
                </div>
            </div>

        </div>
    )
}

export default Hero