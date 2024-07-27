import React from 'react';
import { Link } from 'react-router-dom';


const HeaderBar = () => {
    return(
        <div className="headerBar">
            <Link to="/" className="headerLink">Home</Link>
            <Link to="/portfolio" className="headerLink">Portfolio</Link>
            <Link to="/about" className="headerLink">About</Link>
        </div>
    )
};

export default HeaderBar;