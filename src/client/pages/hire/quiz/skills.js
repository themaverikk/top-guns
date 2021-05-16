import { Box, Button, FormControl, GridList, GridListTile, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../context/state';

const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    tile: {
        width: "195px",
        boxShadow: "0 3px 10px 0 rgba(0,0,0,.09) !important",
        marginRight: "0",
        marginBottom: "11px",
        cursor: "pointer",
        borderRadius: "5px",
        backgroundColor: "#fff",
    },
    icon: {
        width: "30px",
        height: "30px",
        marginBottom: "8px"
    }

}));

const importAll = context => {
    let images = {};
    context.keys().map((item) => { images[item.replace('./', '').substring(0, item.length - 6)] = context(item).default; });
    return images;
}
const skillIcons = importAll(require.context('../public/img/skills', false, /\.(png|jpe?g|svg)$/));
const skillsData = [
    {
        img: skillIcons['Angular'],
        title: 'AngularJS Developer',
        isSelected: true,
    },
    {
        img: skillIcons['front-end'],
        title: 'Front End Developer',
    },
    {
        img: skillIcons['fullstack'],
        title: 'Full Stack Developer',
    },
    {
        img: skillIcons['backend'],
        title: 'Backend Engineer',
    },
    {
        img: skillIcons['ReactJS'],
        title: 'React Developer',
    },
    {
        img: skillIcons['Python'],
        title: 'Python Developer',
    },
    {
        img: skillIcons['Ruby'],
        title: 'RoR Developer',
    },
    {
        img: skillIcons['Java'],
        title: 'Java Developer',
    },
    {
        img: skillIcons['php'],
        title: 'PHP Developer',
    },
    {
        img: skillIcons['Javascript'],
        title: 'Javascript Developer',
    },
    {
        img: skillIcons['IOS'],
        title: 'IOS Developer',
    },
    {
        img: skillIcons['android'],
        title: 'Android Developer',
    },
    {
        img: skillIcons['Csharp'],
        title: 'C# Developer',
    },
    {
        img: skillIcons['Devops'],
        title: 'Devops Developer',
    },
    {
        img: skillIcons['Senior-developer'],
        title: 'Senior Web Developer',
    },
    {
        img: skillIcons['front-end'],
        title: 'Senior Frontend Developer',
    },
    {
        img: skillIcons['principal-engineer'],
        title: 'Principal Engineer',
    },
    {
        img: skillIcons['Technical-architect'],
        title: 'Technical Architect',
    },
    {
        img: skillIcons['NodeJS'],
        title: 'NodeJs',
    },
    {
        img: skillIcons['ReactJS'],
        title: 'React Native',
    },
    {
        img: skillIcons['Sketch'],
        title: 'Sketch',
    },
    {
        img: skillIcons['Swift'],
        title: 'Swift',
    },
    {
        img: skillIcons['Kotlin'],
        title: 'Kotlin',
    },
    {
        img: skillIcons['Go'],
        title: 'Golang',
    },
    {
        img: skillIcons['Typescript'],
        title: 'Typescript',
    },
    {
        img: skillIcons['Selenium'],
        title: 'Selenium',
    },
    {
        img: skillIcons['Machine-learning'],
        title: 'Machine Learning',
    },
    {
        img: skillIcons['Data-science'],
        title: 'Data Science',
    }
];

const Skills = () => {
    const classes = useStyles();
    const { data, updateData } = useAppContext();

    const { skills, setSkills } = useState(skillsData);

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
                            {skillsData.map(skill => (
                                <GridListTile classes={{
                                    root: classes.root,
                                    tile: classes.tile,
                                }} cols={skill.cols || 1} onClick={() => alert('some')}>
                                    <img key={skill.img} src={skill.img} alt={skill.title} className={classes.icon} />
                                    <Box component="div" display="block">{skill.title}</Box>
                                </GridListTile>
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
