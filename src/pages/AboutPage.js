import React from "react";
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <div className="fiery">
                <div className="lessinfamous">
                    About
                </div>
            </div>
            <div className="center">
                This website was made by Patrick Schmitt to showcase his art and programming skills.
                <br/>
                <br/>
                <div className="subheading">Education</div>
                Bachelor of Arts in Computer Science from SUNY Oswego 
                <br/>
                graduated December 2023, 3.57 GPA
                <br/>
                <br/>
                <div className="subheading">Work Experience</div>
                <div className="smallheading">Database Assistant</div>
                SUNY Oswego Facilities Services
                <br/>
                June 2023 - August 2023
                <br/>
                <br/>
                <div className="smallheading">AI Trainer</div>
                DataAnnotation
                <br/>
                March 2024 - Present
                <br/>
                <br/>
                <div className="subheading">Links</div>
                <Link to="https://github.com/Schmitt-Very-Cool">GitHub</Link>
                <br/>
                <Link to="https://the-infamous-machine.itch.io/">itch.io</Link>
            </div>
        </div>
    );
}

export default AboutPage;