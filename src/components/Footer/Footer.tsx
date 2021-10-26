import React from 'react';
import {
    FaTwitter,
    FaGithubAlt,
    FaEnvelopeSquare,
    FaPhone
} from 'react-icons/fa';
import ToggleButton from '../ToggleButton/ToggleButton';

const Footer: React.FC = () => {
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
                <ToggleButton />
            </div>
        </div>
    );
};

export default Footer;
