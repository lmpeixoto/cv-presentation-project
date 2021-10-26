import React from 'react';
import {
    FaTwitter,
    FaGithubAlt,
    FaEnvelopeSquare,
    FaPhone
} from 'react-icons/fa';
import ToggleButton from '../ToggleButton/ToggleButton';

interface iFooterProps {
    darkTheme: boolean;
    toggleDarkTheme: () => void;
}

const Footer = ({ darkTheme, toggleDarkTheme }: iFooterProps) => {
    return (
        <div>
            <hr />
            <ul>
                <li>
                    <FaPhone />
                    <p>+351 934 982 792</p>
                </li>
                <li>
                    <FaTwitter />
                    <a href="https://twitter.com/lmpeixoto">Twitter</a>
                </li>
                <li>
                    <FaEnvelopeSquare />
                    <a href="mailto:lmpeixoto@gmail.com">Email</a>
                </li>
                <li>
                    <FaGithubAlt />
                    <a href="https://github.com/lmpeixoto">Github</a>
                </li>
            </ul>
            <div>
                <ToggleButton
                    darkTheme={darkTheme}
                    toggleDarkTheme={toggleDarkTheme}
                />
            </div>
        </div>
    );
};

export default Footer;
