import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../ToggleButton/ToggleButton';

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
            <div>
                <ToggleButton />
            </div>
            <hr />
        </div>
    );
};

export default Header;
