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
        width: '80%',
        // height: 450,
        paddingLeft: '50px',
        fontSize: '14px',
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
                <section id="business-plan" style={{ padding: '0px', width: '100%' }}>
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="col-lg-12 col-md-12 pt-70 pr-5 text-center" >
                                <img src="../../img/download.svg" className="img-fluid" alt="" style={{ minHeight: '50px', minWidth: '100px' }} />
                            </div>
                            <div className="text-center" style={{ paddingTop: '30px' }}>
                                <h5 className="text-center font-18">Thank you for your interest in Hire James Bond.</h5>
                            </div>
                            <div style={{
                                fontFamily: 'Maison-Bold',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: '40px'
                            }}>
                                <div>
                                    <h5 style={{ fontSize: 'large' }}><b> How do we reach you ?</b></h5>
                                    <p style={{marginBottom: '5px'}}>Our talent experts will be in touch to help you find the best candidates for your job.</p>
                                    <form id="hireContactForm" onSubmit={handleSubmit}>
                                        <FormControl component="fieldset">
                                            {Object.keys(applicationState.contactDetails).map(field =>
                                                <TextField key={field} variant="outlined" required={true} label={applicationState.contactDetails[field].label} defaultValue={applicationState.contactDetails[field].value} error={error[field]} helperText={helperText[field]} onChange={handleChange(field)} style={{ padding: '10 10 10 10', width: '30vw', marginBottom: '15px' }} />
                                            )}
                                            <div className="col-10 row pt-30" style={{ width: '40vw', borderTopStyle: 'solid', borderTopWidth: '1px',borderTopColor: '#d8d8d8'}}>
                                                <div className="col-6">
                                                    <Link href="/hire/quiz/skills" passHref className="font-14" style={{ float: 'left' }}>
                                                        <IconButton aria-label="back" style={{ fontSize: '12px', marginTop: '-10px;' }}>
                                                            <ArrowBackIosIcon />Back
                                                        </IconButton>
                                                    </Link>
                                                </div>
                                                <div className="col-6">
                                                    <Button type="submit" variant="contained" color="primary" className="font-14" style={{ width: '100px', float: 'right' }}>
                                                        Submit
                                                    </Button>
                                                </div>
                                            </div>
                                        </FormControl>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="row col-lg-4 col-md-12 pl-4 text-center" style={{ background: 'linear-gradient(-1deg,#394458,#191e28 96%)', minHeight: '100vh', paddingTop: '100px', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '100px' }}>
                            <div className="col-12 h6">TRUSTED BY</div>
                            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{ minHeight: '50px', minWidth: '100px' }} /></div>
                            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{ minHeight: '50px', minWidth: '100px' }} /></div>
                            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{ minHeight: '50px', minWidth: '100px' }} /></div>
                            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{ minHeight: '50px', minWidth: '100px' }} /></div>
                            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{ minHeight: '50px', minWidth: '100px' }} /></div>
                            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{ minHeight: '50px', minWidth: '100px' }} /></div>
                            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{ minHeight: '50px', minWidth: '100px' }} /></div>
                            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{ minHeight: '50px', minWidth: '100px' }} /></div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;
