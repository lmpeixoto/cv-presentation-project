interface iExperience {
    Name: string;
    Institution: string;
    Description: string;
    Start: string;
    End: string;
    TechStack: string[];
}

const experienceData: iExperience[] = [
    {
        Name: 'Frontend Developer',
        Institution: 'LibreOffice',
        Description:
            'Mainly the maintenance of KiwiIrc (IRC chat used internaly for the team communication) UI',
        Start: '2021-09-01',
        End: 'Ongoing',
        TechStack: ['Javascript', 'Vue', 'Git', 'Websockets']
    },
    {
        Name: 'Fullstack Developer',
        Institution: 'FightPandemics',
        Description:
            'Maintenance of the REST API and MongoDB database, development of the chat feature, integration with React Frontend and UI improvement',
        Start: '2020-08-01',
        End: '2021-09-01',
        TechStack: [
            'Javascript',
            'Node',
            'Fastify',
            'React',
            'Git',
            'Docker',
            'AWS'
        ]
    },
    {
        Name: 'Development of deep learning tools for cancer omics analysis',
        Institution: 'University of Minho',
        Description:
            'Constructed a pipeline for using deep neural networks with cancer omics data.',
        Start: '2017-10-01',
        End: '2018-09-01',
        TechStack: [
            'Python',
            'Theano',
            'Keras',
            'Sci-Kit Learn',
            'AWS',
            'Bash Scripting',
            'R',
            'Unix'
        ]
    }
];

export default experienceData;
