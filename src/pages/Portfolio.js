import React from "react";
import HeaderBar from '../components/HeaderBar';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {
    return (
        <div>
            <div className="fiery">
                <div className="lessinfamous">
                    Portfolio
                </div>
            </div>
            <PortfolioItem 
                imageurl="/assets/fire.gif" 
                title="This Website!" 
                description="My very own website built in-house in React. Hope you enjoy!" 
                link="/this" 
            />
            <PortfolioItem 
                imageurl="/assets/minesweeper/ms_3.jpg" 
                title="Parallel Minesweeper" 
                description="A program that solves a minesweeper game by offloading the work onto other computers! A showcase of networking and parallel programming made for my Parallel Programming university class." 
                link="/paramines" 
            />
            <PortfolioItem 
                imageurl="/assets/aquarium/fish_1.jpg" 
                title="Aquarium Simulator" 
                description="A Discrete Event Simulation with a custom-built framework, wrapped in an aquarium theme. Made for my Simulations and Digital Worlds university class." 
                link="/aquarium" 
            />
        </div>
    );
}

export default Portfolio;