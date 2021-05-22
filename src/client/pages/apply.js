import { Button, FormControl, FormHelperText, IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PublishIcon from '@material-ui/icons/Publish';
import Head from 'next/head';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useAppContext } from '../context/state';


const useStyles = makeStyles(theme => ({
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

const helperTextConfig = {
    name: {
        mandatory: "Please enter your name",
    },
    email: {
        mandatory: "Please enter a email",
    },
    resume: {
        mandatory: "Please upload your resume",
    },
};

const CandidateApply = () => {
    const classes = useStyles();

    const { applicationState, setApplicationState } = useAppContext();
    const resumeUploadInput = useRef(null);
    const [error, setError] = useState({
        name: false,
        email: false,
        resume: false
    });

    const [helperText, setHelperText] = useState({
        name: "",
        email: "",
        resume: ""
    });

    const validateField = (field, fieldValue) => {

        const [error, helperText] = fieldValue ? [false, ""] : [true, helperTextConfig[field].mandatory];

        setError(prevState => {
            return {
                ...prevState,
                [field]: error
            }
        });

        setHelperText(prevState => {
            return {
                ...prevState,
                [field]: helperText
            }
        });
    }

    const validateFields = () => {

        for (const field in applicationState.candidateDetails) {
            validateField(field, applicationState.candidateDetails[field]);
        }
        validateField("resume", resumeUploadInput.current.files[0]);
    };

    const handleChange = field => event => {
        const updatedValue = event.target.value;

        setApplicationState(prevState => {
            return {
                ...prevState,
                candidateDetails: {
                    ...prevState.candidateDetails,
                    [field]: updatedValue
                }
            }
        });

        validateField(field, updatedValue);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        validateFields();

        const isFormValid = document.getElementById("hireContactForm").checkValidity();

        if (isFormValid) {
            const candidateDetails = { ...applicationState.candidateDetails, resume: resumeUploadInput.current.files[0] };
        }
    }


    return (
        <div>
            <Head>
                <title>Top Guns Hire- Skills</title>
                <meta name="description" content="Hire Top Engineers Remotely" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <form id="hireContactForm" onSubmit={handleSubmit}>
                    <FormControl component="fieldset" error={error.resume}>
                        {Object.keys(applicationState.candidateDetails).map(field =>
                            <TextField key={field} variant="outlined" required={true} label={applicationState.candidateDetails[field].label} defaultValue={applicationState.candidateDetails[field].value} error={error[field]} helperText={helperText[field]} onChange={handleChange(field)} />
                        )}

                        <input type="file" hidden accept="application/pdf" id="resume-upload" ref={resumeUploadInput} />
                        <label htmlFor="resume-upload">
                            <IconButton color="primary" className={classes.button} component="span">
                                <PublishIcon />
                            </IconButton>
                        </label>
                        <FormHelperText>{helperText.resume}</FormHelperText>
                        <Link href="/hire/quiz/skills" passHref >
                            <IconButton aria-label="back">
                                <ArrowBackIosIcon />
                            </IconButton>
                        </Link>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </main>
        </div>
    );
};

export default CandidateApply;
