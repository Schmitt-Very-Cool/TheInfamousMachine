import React from "react";
import { Link } from 'react-router-dom';
import YoutubeEmbed from "../components/YoutubeEmbed";

const AquariumSimulatorPage = () => {
    return (
        <div>
            <div className="center">
                <div className="fiery">
                    <div className="littlenefarious">
                        Aquarium Simulator
                    </div>
                </div>
                <div className="smallheading">
                    <Link to="https://github.com/Schmitt-Very-Cool/Aquarium_Simulator">GitHub</Link>
                </div>
                <br/>
                <YoutubeEmbed embedId="YtJET8fRFsU"/>
                <br/>
                <div className="subheading">Description</div>
                I made this program as the final project for my Simulations and Digital Worlds university class. The technical meat of this program lies in the simulation. I made my own discrete event simulation framework in Java, and I made it run in real time to incorporate game-like elements to it. The program is styled around a fish tank, where the tank and all the fish within are models. You can make fish happy by keeping them well fed and keeping the tank clean, as well as buying them decorations for the tank. Fish will move around the tank and dig up money from the substrate for the user to buy more fish or decor. All of the assets were drawn by me. On top of being the final project for a class, it was also my final project at university, so the Aquarium Simulator holds a special place in my heart!
                <br/>
                <br/>
                <div className="subheading">Gallery</div>
                <div className="gallery">
                    <img className="gallery-item" src="assets/aquarium/fish_1.jpg"/>
                    <img className="gallery-item" src="assets/aquarium/fish_2.jpg"/>
                    <img className="gallery-item" src="assets/aquarium/fish_3.jpg"/>
                </div>
            </div>
        </div>
    );
}

export default AquariumSimulatorPage;