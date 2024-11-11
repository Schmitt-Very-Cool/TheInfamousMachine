import React from "react";
import { Link } from 'react-router-dom';
import YoutubeEmbed from "../components/YoutubeEmbed";

const AutoMineSweeperPage = () => {
    return (
        <div>
            <div className="center">
                <div className="fiery">
                    <div className="littlenefarious">
                        Parallel Minesweeper
                    </div>
                </div>
                <div className="smallheading">
                    <Link to="https://github.com/Schmitt-Very-Cool/Parallel_Minesweeper_Solver">GitHub</Link>
                </div>
                <br/>
                <YoutubeEmbed embedId="R-9Qkryzroc"/>
                <br/>
                <div className="subheading">Description</div>
                For the final project of my Parallel Programming course in university, I made a minesweeper-solving program that connects to one or more clients and offloads the work of solving the game onto the client computers. The server partitions the unrevealed squares into a number of similarly-sized groups equal to the number of clients, and then sends those coordinates, along with a copy of the current game state, to the client computers. Each client analyzes the board to come up with a probability of each assigned tile being a mine. Each client sends back the info, and the server synchronizes it all to decide which squares to click on. There is also a primitive GUI and the program can be slowed down so you can watch it solve the game in real time.
                <br/>
                <br/>
                <div className="subheading">Gallery</div>
                <div className="gallery">
                    <img className="gallery-item" src="assets/minesweeper/ms_0.jpg"/>
                    <img className="gallery-item" src="assets/minesweeper/ms_1.jpg"/>
                    <img className="gallery-item" src="assets/minesweeper/ms_2.jpg"/>
                    <img className="gallery-item" src="assets/minesweeper/ms_3.jpg"/>
                </div>
            </div>
        </div>
    );
}

export default AutoMineSweeperPage;