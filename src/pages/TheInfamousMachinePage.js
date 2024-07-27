import React from "react";
import { Link } from 'react-router-dom';
import YoutubeEmbed from "../components/YoutubeEmbed";

const TheInfamousMachinePage = () => {
    return (
        <div>
            <div className="center">
                <div className="fiery">
                    <div className="littleinfamous">
                        TheInfamousMachine.com
                    </div>
                </div>
                <div className="smallheading">
                    <Link to="https://github.com/Schmitt-Very-Cool/TheInfamousMachine">GitHub</Link>
                </div>
                <br/>
                <YoutubeEmbed embedId="Yep6GVM0IYs"/>
                <br/>
                <div className="subheading">Description</div>
                This website was created by me to show off all of my cool art and programs. It was built mostly in react.js. I gave the website a very unique style in order to stand out more. TheInfamousMachine.com is updated regularly, so come back often to see what I've been working on!
                <br/>
                <br/>
                <div className="subheading">Gallery</div>
                <div className="gallery">
                    <img className="gallery-item" src="assets/theinfamousmachine/title_screen.jpg"/>
                </div>
            </div>
        </div>
    );
}

export default TheInfamousMachinePage;