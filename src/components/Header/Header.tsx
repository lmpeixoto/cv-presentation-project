import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../ToggleButton/ToggleButton';
import './Header.css';

interface iHeaderProps {
    darkTheme: boolean;
    toggleDarkTheme: () => void;
}

const Header = ({ darkTheme, toggleDarkTheme }: iHeaderProps) => {
    return (
        <div className="Header-container">
            <ul className="Header-navigator">
                <li className="Navigator-item">
                    <Link className="Navigator-link" to="/Home">
                        Home
                    </Link>
                </li>
                <li className="Navigator-item">
                    <Link className="Navigator-link" to="/Education">
                        Education
                    </Link>
                </li>
                <li className="Navigator-item">
                    <Link className="Navigator-link" to="/Experience">
                        Experience
                    </Link>
                </li>
                <li className="Navigator-item">
                    <Link className="Navigator-link" to="/Bio">
                        Bio
                    </Link>
                </li>
            </ul>
            <div className="Theme-toggler">
                <ToggleButton
                    darkTheme={darkTheme}
                    toggleDarkTheme={toggleDarkTheme}
                />
            </div>
            <hr />
        </div>
    );
};

export default Header;
