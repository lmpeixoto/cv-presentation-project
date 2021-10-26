import React from 'react';

interface iEducationCardProps {
    name: string;
    degree: string;
    institution: string;
    start: string;
    end: string;
    description?: string;
}

const EducationCard = ({
    name,
    degree,
    institution,
    start,
    end,
    description
}: iEducationCardProps) => {
    return (
        <div>
            <h1>{name}</h1>
            <h3>{degree}</h3>
            <h5>{institution}</h5>
            <h5>{start}</h5>
            <h5>{end}</h5>
            <h5>{description}</h5>
        </div>
    );
};

export default EducationCard;
