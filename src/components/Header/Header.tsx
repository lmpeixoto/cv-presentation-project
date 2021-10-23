import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Education">Education</Link>
                </li>
                <li>
                    <Link to="/Experience">Experience</Link>
                </li>
                <li>
                    <Link to="/Bio">Bio</Link>
                </li>
            </ul>
            <hr />
        </div>
    );
};

export default Header;
