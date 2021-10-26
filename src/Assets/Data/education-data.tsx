interface iEducation {
    Name: string;
    Degree: string;
    Institution: string;
    Start: string;
    End: string;
    Description?: string;
}

const educationData: iEducation[] = [
    {
        Name: 'Bioinformatics',
        Degree: 'Master',
        Institution: 'University of Minho',
        Start: '2014-10-01',
        End: '2018-10-01'
    },
    {
        Name: 'Pharmaceutical Sciences',
        Degree: 'Master',
        Institution: 'University of Porto',
        Start: '2001-10-01',
        End: '2008-03-01'
    }
];

export default educationData;
