import React from 'react';
import {
    FaTwitter,
    FaGithubAlt,
    FaEnvelopeSquare,
    FaPhone
} from 'react-icons/fa';
import ToggleButton from '../ToggleButton/ToggleButton';
import './Footer.css';

interface iFooterProps {
    darkTheme: boolean;
    toggleDarkTheme: () => void;
}

const Footer = ({ darkTheme, toggleDarkTheme }: iFooterProps) => {
    return (
        <div className="Footer-container">
            <hr />
            <ul className="Footer-contacts">
                <li className="Footer-social-item">
                    <FaPhone className="Footer-social-icon" />
                    <p>+351 934 982 792</p>
                </li>
                <li className="Footer-social-item">
                    <FaTwitter className="Footer-social-icon" />
                    <a href="https://twitter.com/lmpeixoto">Twitter</a>
                </li>
                <li className="Footer-social-item">
                    <FaEnvelopeSquare className="Footer-social-icon" />
                    <a href="mailto:lmpeixoto@gmail.com">Email</a>
                </li>
                <li className="Footer-social-item">
                    <FaGithubAlt className="Footer-social-icon" />
                    <a href="https://github.com/lmpeixoto">Github</a>
                </li>
            </ul>
            <div className="Theme-toggler">
                <ToggleButton
                    darkTheme={darkTheme}
                    toggleDarkTheme={toggleDarkTheme}
                />
            </div>
        </div>
    );
};

export default Footer;
