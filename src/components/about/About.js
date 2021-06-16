import React from 'react';
import './about.css';
import Me from '../../media/Me.jpg';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me</h3>
                <p>I'm a Full stack developer with experience in JavaScript, TypeScript, Python, C#, Nodejs, React, Mysql, MariaDB,
                    developing a scaling application following atomic design with SOLID principles with React, Typescrypt and Node.js
                </p>
            </div>
            <div className="about-img">
                <img src={Me} alt="about"></img>
            </div>
        </div>
    )
}

export default About
