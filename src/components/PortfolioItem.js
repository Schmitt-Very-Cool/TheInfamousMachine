import React from "react";
import { Link } from 'react-router-dom';

function PortfolioItem({imageurl, title, description, link}){
    return(
        <div className="PortfolioItem">
            <img src={imageurl} alt="Thumbnail" className="pImage"/>
            <div className="textcontainer">
                <div className="pTitle">
                    <Link to={link}>{title}</Link>
                </div>
                {description}
            </div>
        </div>
    )
}

export default PortfolioItem;