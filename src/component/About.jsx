import React from 'react'
import "../styles/About.css"
import dkImg from "../assets/dk.jpg"

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="head">
                <br />
            </div>
            <div className="about-container">

                <div className='left-img'>
                    <img src={dkImg} alt="" />
                </div>
                <div className='right-content'>
                    <h1>About Me!</h1>
                    <h2>Dev Kasotiya</h2>
                    <p>
                        Hi, I'm <span><b>Dev</b></span> — a passionate vlogger from India. <br />
                        I love capturing everyday stories, exploring new places, <br />
                        and sharing experiences with my amazing YouTube family.
                    </p>
                    <div className="box">
                        <div>
                            <div className='card'><h2>5.8K+</h2><p>Subscribers</p></div><br />
                            <div className='card'><h2>200+</h2><p>Videos</p></div>
                        </div>
                        <div> <div className='card'><h2>1M+</h2><p>Total Views</p></div><br />
                            <div className='card'><h2>3+</h2><p>Years Creating</p></div></div>
                    </div>
                    <button>Subscribe on YouTube</button>
                </div>
            </div>
        </div>
    )
}

export default About