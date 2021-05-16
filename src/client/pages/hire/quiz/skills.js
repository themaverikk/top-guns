import { Box, Button, FormControl, GridList, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Head from 'next/head';
import React, { useState } from 'react';
import { useAppContext } from '../../../context/state';
import SkillTile from './SkillTile';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },

}));

const importAll = context => {
    let images = {};
    context.keys().map((item) => { images[item.replace('./', '').substring(0, item.length - 6)] = context(item).default; });
    return images;
}

const skillIcons = importAll(require.context('../../../public/img/skills', false, /\.(png|jpe?g|svg)$/));
const skillsData = [
    {
        img: skillIcons['Angular'],
        title: 'AngularJS Developer',
        isSelected: false,
    },
    {
        img: skillIcons['front-end'],
        title: 'Front End Developer',
        isSelected: false
    },
    {
        img: skillIcons['fullstack'],
        title: 'Full Stack Developer',
        isSelected: false
    },
    {
        img: skillIcons['backend'],
        title: 'Backend Engineer',
        isSelected: false
    },
    {
        img: skillIcons['ReactJS'],
        title: 'React Developer',
        isSelected: false
    },
    {
        img: skillIcons['Python'],
        title: 'Python Developer',
        isSelected: false
    },
    {
        img: skillIcons['Ruby'],
        title: 'RoR Developer',
        isSelected: false
    },
    {
        img: skillIcons['Java'],
        title: 'Java Developer',
        isSelected: false
    },
    {
        img: skillIcons['php'],
        title: 'PHP Developer',
        isSelected: false
    },
    {
        img: skillIcons['Javascript'],
        title: 'Javascript Developer',
        isSelected: false
    },
    {
        img: skillIcons['IOS'],
        title: 'IOS Developer',
        isSelected: false
    },
    {
        img: skillIcons['android'],
        title: 'Android Developer',
        isSelected: false
    },
    {
        img: skillIcons['Csharp'],
        title: 'C# Developer',
        isSelected: false
    },
    {
        img: skillIcons['Devops'],
        title: 'Devops Developer',
        isSelected: false
    },
    {
        img: skillIcons['Senior-developer'],
        title: 'Senior Web Developer',
        isSelected: false
    },
    {
        img: skillIcons['front-end'],
        title: 'Senior Frontend Developer',
        isSelected: false
    },
    {
        img: skillIcons['principal-engineer'],
        title: 'Principal Engineer',
        isSelected: false
    },
    {
        img: skillIcons['Technical-architect'],
        title: 'Technical Architect',
        isSelected: false
    },
    {
        img: skillIcons['NodeJS'],
        title: 'NodeJs',
        isSelected: false
    },
    {
        img: skillIcons['ReactJS'],
        title: 'React Native',
        isSelected: false
    },
    {
        img: skillIcons['Sketch'],
        title: 'Sketch',
        isSelected: false
    },
    {
        img: skillIcons['Swift'],
        title: 'Swift',
        isSelected: false
    },
    {
        img: skillIcons['Kotlin'],
        title: 'Kotlin',
        isSelected: false
    },
    {
        img: skillIcons['Go'],
        title: 'Golang',
        isSelected: false
    },
    {
        img: skillIcons['Typescript'],
        title: 'Typescript',
        isSelected: false
    },
    {
        img: skillIcons['Selenium'],
        title: 'Selenium',
        isSelected: false
    },
    {
        img: skillIcons['Machine-learning'],
        title: 'Machine Learning',
        isSelected: false
    },
    {
        img: skillIcons['Data-science'],
        title: 'Data Science',
        isSelected: false
    }
];

const Skills = () => {
    const classes = useStyles();
    const { data, updateData } = useAppContext();

    const [skills, setSkills] = useState(skillsData);

    const toggleSkill = index => {

        console.log('skills: ', skills);
        const isSkillSelected = skills[index].isSelected;
        const updatedSkill = { ...skills[index], isSelected: !isSkillSelected };

        setSkills([...skills.slice(0, index), updatedSkill, ...skills.slice(index + 1)]);
    }

    return (
        <div>
            <Head>
                <title>Top Guns Hire- Skills</title>
                <meta name="description" content="Hire Top Engineers Remotely" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <FormControl component="fieldset">
                    <Box component="div" display="block" className={classes.root}>
                        <GridList className={classes.gridList} cols={4}>
                            {skills.map((skill, index) => (
                                <SkillTile skill={skill} toggleSkill={() => toggleSkill(index)} />
                            ))}
                        </GridList>
                    </Box>
                    <IconButton aria-label="back">
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Button variant="contained" color="primary">
                        Next
                        </Button>
                </FormControl>
            </main>
        </div>
    );
};

export default Skills;
