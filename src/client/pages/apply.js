import { Button, FormControl, FormHelperText, IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PublishIcon from '@material-ui/icons/Publish';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAppContext } from '../context/state';
import { applyForJob } from '../utils';


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
    const [resume, setResume] = useState(null);
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
        validateField("resume", resume);
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

    const handleFileChange = event => {
        setResume(event.target.files[0]);
        console.log('rfile ', event.target.files[0])
    }

    const handleSubmit = async event => {
        event.preventDefault();
        validateFields();

        const isFormValid = document.getElementById("candidateApplyForm").checkValidity();

        if (isFormValid) {

            const candidateDetails = new FormData();
            Object.keys(applicationState.candidateDetails).forEach(field => candidateDetails.append(field, applicationState.candidateDetails[field]));
            candidateDetails.append("resume", resume);

            try {
                await applyForJob(candidateDetails);
                //TODO show success
            } catch (err) {
                //TODO show failure msg
            }

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
                <form id="candidateApplyForm" onSubmit={handleSubmit}>
                    <FormControl component="fieldset" error={error.resume}>
                        {Object.keys(applicationState.candidateDetails).map(field =>
                            <TextField key={field} variant="outlined" required={true} label={applicationState.candidateDetails[field].label} defaultValue={applicationState.candidateDetails[field].value} error={error[field]} helperText={helperText[field]} onChange={handleChange(field)} />
                        )}

                        <input type="file" hidden accept=".pdf,.doc,.docx,.txt" id="resume-upload" onChange={handleFileChange} />
                        <label htmlFor="resume-upload">
                            <IconButton color="primary" className={classes.button} component="span">
                                <PublishIcon />(Only pdf, doc, docx, txt allowed)
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
