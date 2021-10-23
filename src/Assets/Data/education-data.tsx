interface iEducation {
    Name: string;
    Degree: string;
    Institution: string;
    Start: string;
    End: string;
    Descritpion?: string;
}

const educationData: iEducation[] = [
    {
        Name: 'Bioinformatics',
        Degree: 'Master',
        Institution: 'University of Minho',
        Start: 'October 2014',
        End: 'October 2018'
    },
    {
        Name: 'Pharmaceutical Sciences',
        Degree: 'Master',
        Institution: 'University of Porto',
        Start: 'October 2001',
        End: 'March 2008'
    }
];

export default educationData;
