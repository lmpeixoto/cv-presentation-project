import React from 'react';
import educationData from '../../Assets/Data/education-data';
import EducationCard from './EducationCard/EducationCard';
import './Education.css';

const Education: React.FC = () => {
    return (
        <div className="Education-container">
            {educationData.map((education) => (
                <div key={education.Id}>
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
        </div>
    );
};

export default Education;
