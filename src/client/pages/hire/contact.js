import { Button, FormControl, IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAppContext } from '../../context/state';
import { submitHireRequest } from "../../utils";


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

const helperTextConfig = {
    name: {
        mandatory: "Please enter your name",
    },
    companyName: {
        mandatory: "Please enter a company name",
    },
    email: {
        mandatory: "Please enter a email",
    },
    phone: {
        mandatory: "Please enter a valid phone number",
    },
};

const Contact = () => {
    const classes = useStyles();

    const { applicationState, setApplicationState } = useAppContext();
    const [error, setError] = useState({
        name: false,
        companyName: false,
        email: false,
        phone: false
    });

    const [helperText, setHelperText] = useState({
        name: "",
        companyName: "",
        email: "",
        phone: ""
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

        for (const field in applicationState.contactDetails) {
            validateField(field, applicationState.contactDetails[field].value);
        }
    };

    const handleChange = field => event => {
        const updatedValue = event.target.value;

        setApplicationState({
            ...applicationState,
            contactDetails: {
                ...applicationState.contactDetails,
                [field]: {
                    ...applicationState.contactDetails[field],
                    value: updatedValue
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

            const questionsAnswers = applicationState.questions.map(question => {
                return {
                    question: question.name,
                    answer: question.answer
                }
            });

            const requiredSkills = applicationState.skills.filter(skill => skill.isSelected).map(skill => skill.id);
            const contactDetails = {};
            Object.keys(applicationState.contactDetails).forEach(field => {
                contactDetails[field] = applicationState.contactDetails[field].value
            })
            const hireRequestDetails = { questionsAnswers, requiredSkills, ...contactDetails };

            try {
                await submitHireRequest(hireRequestDetails);
                //TODO show success
            } catch (err) {
                //TODO show failure msg
            }
        }
    }


    return (
        <div>
            <Head>
                <title>James Bond Skills</title>
                <meta name="description" content="Hire Top Engineers Remotely" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

        <main>
            <section id="business-plan" style={{padding: '0px'}}>
               <div className="row">
                <div className="col-lg-8 col-md-12 pl-0 pt-70 pr-5">
                    <div style={{
                        fontFamily: 'Maison-Bold',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <form id="hireContactForm" onSubmit={handleSubmit}>
                        <FormControl component="fieldset">
                            {Object.keys(applicationState.contactDetails).map(field =>
                                <TextField key={field} variant="outlined" required={true} label={applicationState.contactDetails[field].label} defaultValue={applicationState.contactDetails[field].value} error={error[field]} helperText={helperText[field]} onChange={handleChange(field)} />
                            )}
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
                    </div>
                </div>

                <div className="col-lg-4 col-md-12 pl-4" style={{background: 'linear-gradient(-1deg,#394458,#191e28 96%)', height:'637px' , minHeight: '100%'}}>
                    <div className="business-item-info" background="primary">
                    <div className="business-item-img" background="primary">
                        <img
                        src="img/business/business-img.png"
                        className="img-fluid"
                        alt=""
                        />
                    </div>
                    </div>
                </div>
              </div>
        </section>
    </main>
        </div>
    );
};

export default Contact;
