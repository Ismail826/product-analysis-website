import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (

        <nav className="nav">
            <nav> <Link className=""><small className="text-indigo-700 text-xl">Potato</small> Analysis</Link> </nav>

            <nav>
                <Link to="/home">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
            </nav>

        </nav>
    );
};

export default Header;