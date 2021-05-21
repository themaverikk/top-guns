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

    const { applicationState, setApplicationState } = useAppContext();
    const [error, setError] = useState({
        name: false,
        companyName: false,
        email: false,
        phone: false
    });

    const [helperText, sethelperText] = useState({
        name: "",
        companyName: "",
        email: "",
        phone: ""
    });

    const validateField = field => {

        const existingFieldValue = applicationState.contactDetails[field];

        switch (field) {
            case "name":
                if (!existingFieldValue) {
                    setError({
                        ...error,
                        name: true
                    });

                    sethelperText({
                        ...helperText,
                        name: "Please enter your name"
                    });
                }
                break;

            case "companyName":
                if (!existingFieldValue) {
                    setError({
                        ...error,
                        companyName: true
                    });

                    sethelperText({
                        ...helperText,
                        companyName: "Please enter a company name"
                    });
                }
                break;

            case "email":
                if (!existingFieldValue) {
                    setError({
                        ...error,
                        email: true
                    });

                    sethelperText({
                        ...helperText,
                        email: "Please enter company email",
                    });
                }
                break;

            case "phone":
                if (!existingFieldValue) {
                    setError({
                        ...error,
                        phone: true
                    });

                    sethelperText({
                        ...helperText,
                        phone: "Please enter a valid phone number"
                    });
                }
                break;

        }
    }

    const handleChange = field => event => {
        const updatedValue = event.target.value;

        setApplicationState({
            ...applicationState,
            contactDetails: {
                ...applicationState.contactDetails,
                [field]: updatedValue,
            }
        });

        validateField(field);


        console.log('ap: ', applicationState)
    }

    const handleSubmit = event => {
        event.preventDefault();

        validateField("name");
        validateField("companyName");
        validateField("email");
        validateField("phone");
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
                        <TextField variant="outlined" label="Name" required={true} defaultValue={applicationState.contactDetails.name} error={error.name} helperText={helperText.name} onChange={handleChange("name")} />
                        <TextField variant="outlined" label="Company Name" required={true} defaultValue={applicationState.contactDetails.companyName} error={error.companyName} helperText={helperText.companyName} onChange={handleChange("companyName")} />
                        <TextField variant="outlined" label="Email" required={true} defaultValue={applicationState.contactDetails.email} error={error.email} helperText={helperText.email} onChange={handleChange("email")} />
                        <TextField variant="outlined" label="Phone Number (with ISD code)" required={true} defaultValue={applicationState.contactDetails.phone} error={error.phone} helperText={helperText.phone} onChange={handleChange("phone")} />

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
