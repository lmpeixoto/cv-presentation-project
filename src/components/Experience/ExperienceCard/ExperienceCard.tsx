import React from 'react';
import Timer from '../../Timer/Timer';

interface iExperienceCardProps {
    name: string;
    institution: string;
    description: string;
    start: string;
    end: string;
    techStack: string[];
}

const ExperienceCard = ({
    name,
    institution,
    description,
    start,
    end,
    techStack
}: iExperienceCardProps) => {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h3>Institution: {institution}</h3>
            <h5>Description: {description}</h5>
            <h5>Start: {start}</h5>
            <h5>End: {end}</h5>
            <h5>
                <Timer date={start} />
            </h5>
            <h5>TechStack:</h5>
            <div>
                <ul>
                    {techStack.map((tec) => (
                        <li>{tec}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;
