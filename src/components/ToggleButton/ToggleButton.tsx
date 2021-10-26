import React from 'react';
import './ToggleButton.css';

interface iToggleButtonProps {
    darkTheme: boolean;
    toggleDarkTheme: () => void;
}

const ToggleButton = ({ darkTheme, toggleDarkTheme }: iToggleButtonProps) => {
    return <div className={`switch ${darkTheme}`} onClick={toggleDarkTheme} />;
};

export default ToggleButton;
