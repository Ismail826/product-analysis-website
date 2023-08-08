import React from 'react';
import { Link } from 'react-router-dom';

import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (

        <nav className="nav sticky top-0">
            <nav> <CustomLink> <small className="text-indigo-700 text-xl">Potato</small> Analysis </CustomLink> </nav>

            <nav>
                
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>

        </nav>
    );
};

export default Header;