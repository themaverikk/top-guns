import { Box, Button, FormControl, IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Head from 'next/head';
import Link from 'next/link';
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
    const { applicationState } = useAppContext();
    const [error, setError] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div>
            <Head>
                <title>Top Guns Hire- Skills</title>
                <meta name="description" content="Hire Top Engineers Remotely" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <form onSubmit={handleSubmit}>
                    <FormControl component="fieldset">
                        <TextField error id="standard-basic" label="error" required={true} helperText="Incorrect entry." />
                        <TextField id="standard-basic" label="Email" required={true} />
                        <TextField id="standard-basic" label="Company Name" required={true} />
                        <TextField id="standard-basic" label="Email" required={true} />
                        <TextField id="standard-basic" label="Phone Number" required={true} />

                        <Box component="div" display="block" className={classes.root}>

                        </Box>
                        <Link href="/hire/quiz/skills" passHref >
                            <IconButton aria-label="back">
                                <ArrowBackIosIcon />
                            </IconButton>
                        </Link>
                        <Button variant="contained" color="primary">
                            Submit
                    </Button>
                    </FormControl>
                </form>
            </main>
        </div>
    );
};

export default Skills;
