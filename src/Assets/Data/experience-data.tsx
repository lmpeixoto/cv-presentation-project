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
        Start: 'September 2021',
        End: 'Ongoing',
        TechStack: ['Javascript', 'Vue', 'Git', 'Websockets']
    },
    {
        Name: 'Fullstack Developer',
        Institution: 'FightPandemics',
        Description:
            'Maintenance of the REST API and MongoDB database, development of the chat feature, integration with React Frontend and UI improvement',
        Start: 'August 2020',
        End: 'September 2021',
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
        Start: 'October 2017',
        End: 'September 2018',
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
