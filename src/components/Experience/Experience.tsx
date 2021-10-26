import React from 'react';
import experienceData from '../../Assets/Data/experience-data';
import ExperienceCard from './ExperienceCard/ExperienceCard';

const Experience: React.FC = () => {
    return (
        <>
            {experienceData.map((experience) => (
                <div>
                    <ExperienceCard
                        name={experience.Name}
                        institution={experience.Institution}
                        description={experience.Description}
                        start={experience.Start}
                        end={experience.End}
                        techStack={experience.TechStack}
                    />
                </div>
            ))}
        </>
    );
};

export default Experience;
