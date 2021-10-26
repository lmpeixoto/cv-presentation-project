import React from 'react';

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
            <h1>{name}</h1>
            <h3>{institution}</h3>
            <h5>{description}</h5>
            <h5>{start}</h5>
            <h5>{end}</h5>
            <h5>{techStack}</h5>
        </div>
    );
};

export default ExperienceCard;
