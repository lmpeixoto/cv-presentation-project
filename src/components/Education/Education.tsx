import React from 'react';
import educationData from '../../Assets/Data/education-data';
import EducationCard from './EducationCard/EducationCard';

const Education: React.FC = () => {
    return (
        <>
            {educationData.map((education) => (
                <div>
                    <EducationCard
                        name={education.Name}
                        institution={education.Institution}
                        degree={education.Degree}
                        start={education.Start}
                        end={education.End}
                        description={education.Description}
                    />
                </div>
            ))}
        </>
    );
};
export default Education;
