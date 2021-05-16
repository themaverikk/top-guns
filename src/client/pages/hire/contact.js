import { Box, Button, FormControl, IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Head from 'next/head';
import React, { useState } from 'react';
import { useAppContext } from '../../context/state';


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

const Skills = () => {
    const classes = useStyles();
    const { data, updateData } = useAppContext();

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
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="standard-basic" label="Standard" />

                    <Box component="div" display="block" className={classes.root}>

                    </Box>
                    <IconButton aria-label="back">
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Button variant="contained" color="primary">
                        Submit
                        </Button>
                </FormControl>
            </main>
        </div>
    );
};

export default Skills;
