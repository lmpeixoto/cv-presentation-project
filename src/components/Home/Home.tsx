import React from 'react';
import myPhoto from '../../Assets/Images/photo.jpg';

const Home: React.FC = () => {
    return (
        <div>
            <img src={myPhoto} alt="myself" />
        </div>
    );
};

export default Home;
