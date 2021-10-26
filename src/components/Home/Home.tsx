import React from 'react';
import myPhoto from '../../Assets/Images/photo.jpg';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Luís Peixoto</h1>
            <h1>Technical Skills:</h1>
            <ul>
                <li>
                    <h5>Web Development</h5>
                    Javascript, Node, Express, Fastify, React, Vue
                </li>
                <li>
                    <h5>Deep Learning</h5>
                    Python, SciKit-learn, Keras, TensorFlow, Theano, Numpy,
                    Sci-Pi
                </li>
                <li>
                    <h5>Databases</h5>
                    MySQL, MongoDB
                </li>
                <li>
                    <h5>DevOps</h5>
                    Bash, Docker, Git, AWS
                </li>
            </ul>
            <div>
                <img src={myPhoto} alt="myself" />
            </div>
        </div>
    );
};

export default Home;
