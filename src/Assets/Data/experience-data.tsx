interface iExperience {
    Name: string;
    Institution: string;
    Descritpion: string;
    Start: string;
    End: string;
    TechStack: string[];
}

const experienceData: iExperience[] = [
    {
        Name: 'Frontend Developer',
        Institution: 'LibreOffice',
        Descritpion:
            'Mainly the maintenance of KiwiIrc (IRC chat used internaly for the team communication) UI',
        Start: 'September 2021',
        End: 'Ongoing',
        TechStack: ['Javascript', 'Vue', 'Git', 'Websockets']
    },
    {
        Name: 'Fullstack Developer',
        Institution: 'FightPandemics',
        Descritpion:
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
    }
];

export default experienceData;
