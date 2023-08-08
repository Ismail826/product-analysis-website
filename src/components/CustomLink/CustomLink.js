import React from 'react';
import './CustomLink.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({children,to,...props}) => {
    let resolve = useResolvedPath(to)
    let match =useMatch({path:resolve.pathname,end:true})
    return (
        <div>
            <Link style={{
                paddingBottom: "0px",
                margin: "5px",
                textTransform: "uppercase",
                color: match ? '#0991B1' : 'white', 
                textDecoration: "none",
                 }} to={to} {...props}>
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;