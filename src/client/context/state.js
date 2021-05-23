import { createContext, useContext, useState } from 'react';

const importAll = context => {
    let images = {};
    context.keys().map((item) => { images[item.replace('./', '').substring(0, item.length - 6)] = context(item).default; });
    return images;
}

const skillIcons = importAll(require.context('../public/img/skills', false, /\.(png|jpe?g|svg)$/));
const skills = [
    {
        id: 'angular',
        img: skillIcons['Angular'],
        title: 'AngularJS Developer',
        isSelected: false,
    },
    {
        id: 'frontend',
        img: skillIcons['front-end'],
        title: 'Front End Developer',
        isSelected: false
    },
    {
        id: 'fullstack',
        img: skillIcons['fullstack'],
        title: 'Full Stack Developer',
        isSelected: false
    },
    {
        id: 'backend',
        img: skillIcons['backend'],
        title: 'Backend Engineer',
        isSelected: false
    },
    {
        id: 'react',
        img: skillIcons['ReactJS'],
        title: 'React Developer',
        isSelected: false
    },
    {
        id: 'ror',
        img: skillIcons['Python'],
        title: 'Python Developer',
        isSelected: false
    },
    {
        id: 'ruby',
        img: skillIcons['Ruby'],
        title: 'RoR Developer',
        isSelected: false
    },
    {
        id: 'java',
        img: skillIcons['Java'],
        title: 'Java Developer',
        isSelected: false
    },
    {
        id: 'php',
        img: skillIcons['php'],
        title: 'PHP Developer',
        isSelected: false
    },
    {
        id: 'js',
        img: skillIcons['Javascript'],
        title: 'Javascript Developer',
        isSelected: false
    },
    {
        id: 'ios',
        img: skillIcons['IOS'],
        title: 'IOS Developer',
        isSelected: false
    },
    {
        id: 'android',
        img: skillIcons['android'],
        title: 'Android Developer',
        isSelected: false
    },
    {
        id: 'csharp',
        img: skillIcons['Csharp'],
        title: 'C# Developer',
        isSelected: false
    },
    {
        id: 'devops',
        img: skillIcons['Devops'],
        title: 'Devops Developer',
        isSelected: false
    },
    {
        id: 'senior_dev',
        img: skillIcons['Senior-developer'],
        title: 'Senior Web Developer',
        isSelected: false
    },
    {
        id: 'senior_frontend_dev',
        img: skillIcons['front-end'],
        title: 'Senior Frontend Developer',
        isSelected: false
    },
    {
        id: 'principal_engineer',
        img: skillIcons['principal-engineer'],
        title: 'Principal Engineer',
        isSelected: false
    },
    {
        id: 'tech_architect',
        img: skillIcons['Technical-architect'],
        title: 'Technical Architect',
        isSelected: false
    },
    {
        id: 'node',
        img: skillIcons['NodeJS'],
        title: 'NodeJs',
        isSelected: false
    },
    {
        id: 'react_native',
        img: skillIcons['ReactJS'],
        title: 'React Native',
        isSelected: false
    },
    {
        id: 'sketch',
        img: skillIcons['Sketch'],
        title: 'Sketch',
        isSelected: false
    },
    {
        id: 'swift',
        img: skillIcons['Swift'],
        title: 'Swift',
        isSelected: false
    },
    {
        id: 'kotlin',
        img: skillIcons['Kotlin'],
        title: 'Kotlin',
        isSelected: false
    },
    {
        id: 'go',
        img: skillIcons['Go'],
        title: 'Golang',
        isSelected: false
    },
    {
        id: 'ts',
        img: skillIcons['Typescript'],
        title: 'Typescript',
        isSelected: false
    },
    {
        id: 'selenium',
        img: skillIcons['Selenium'],
        title: 'Selenium',
        isSelected: false
    },
    {
        id: 'ml',
        img: skillIcons['Machine-learning'],
        title: 'Machine Learning',
        isSelected: false
    },
    {
        id: 'data_science',
        img: skillIcons['Data-science'],
        title: 'Data Science',
        isSelected: false
    }
];

const devResourcesQuestions = [
    {
        text: "How many developers do you want to hire?",
        name: "developersCount",
        answer: "",
        options: [
            {
                label: "One developer",
                value: "one_dev"
            },
            {
                label: "I need a team of developers",
                value: "dev_team"
            },
            {
                label: "I'll decide later",
                value: "undecided"
            },
        ]
    },
    {
        text: "How long do you need the developer?",
        name: "developersDuration",
        answer: "",
        options: [
            {
                label: "Less than 1 month",
                value: "less_than_month"
            }, {
                label: "1 to 3 months",
                value: "one_to_three_months"
            },
            {
                label: "3 to 6 months",
                value: "three_to_six_months"
            },
            {
                label: "Longer than 6 months",
                value: "more_than_six_months"
            },
            {
                label: "I'll decide later",
                value: "undecided"
            },
        ]
    }
];

const contactDetails = {
    name: {
        label: "Name",
        value: "",
    },
    companyName: {
        label: "Company Name",
        value: "",
    },
    email: {
        label: "Email",
        value: "",
    },
    phone: {
        label: "Phone number with ISD code",
        value: "",
    },
};

const candidateDetails = {
    name: {
        label: "Name",
        value: "",
    },
    email: {
        label: "Email",
        value: "",
    },
};

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [applicationState, setApplicationState] = useState(
        {
            questions: devResourcesQuestions,
            skills,
            contactDetails,
            candidateDetails
        });

    return (
        <AppContext.Provider value={{ applicationState, setApplicationState }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
