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
                <title>James Bond Skills</title>
                <meta name="description" content="Hire Top Engineers Remotely" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <section id="business-plan" style={{ padding: '0px', width: '100%' }}>
                    <div className="row">
                        <div className="col-lg-8 col-md-12 pl-0 pr-5">
                            <div className="col-lg-12 col-md-12 pt-70 pr-5 text-center">
                                <img src="../../img/download.svg" className="img-fluid" alt="" style={{ minHeight: '50px', minWidth: '100px' }} />
                            </div>
                            <div className="text-center" style={{ paddingTop: '30px' }}>
                                <h5 className="text-center font-18">Thank you for your interest in Hire James Bond.</h5>
                            </div>
                            <h1 className="text-center" style={{fontFamily: 'Proxima Nova,Arial,"sans-serif"',paddingTop: '20px'}}>
                            Apply to Join the World's Top Talent Network
                            </h1>
                            <h5 className="text-center font-18">Fill this form to join us</h5>
                        <div style={{
                            fontFamily: 'Maison-Bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <form id="candidateApplyForm" onSubmit={handleSubmit}>
                                <FormControl component="fieldset" error={error.resume}>
                                    {Object.keys(applicationState.candidateDetails).map(field =>
                                        <TextField key={field} variant="outlined" required={true} label={applicationState.candidateDetails[field].label} defaultValue={applicationState.candidateDetails[field].value} error={error[field]} helperText={helperText[field]} onChange={handleChange(field)} style={{ padding: '10px' }} />
                                    )}
                                    <input type="file"  hidden accept=".pdf,.doc,.docx,.txt" id="resume-upload" onChange={handleFileChange} />
                                    <label htmlFor="resume-upload">
                                        <IconButton color="primary" className={classes.button} component="span">
                                            <PublishIcon /><span className="font-14">Upload your Resume/CV<br/>(Only pdf, doc, docx, txt allowed)</span>
                                        </IconButton>
                                        {resume && <p style={{fontSize:'small',paddingLeft: '10px'}}>{resume.name}</p>}
                                    </label>
                                    <FormHelperText>{helperText.resume}</FormHelperText>
                                        <div style={{ width: '500px' ,borderTopStyle: 'solid', borderTopWidth: '1px', borderTopColor: '#d8d8d8'}}></div>
                                        <div className="col-10 row pt-30" style={{ width: '400px' }}>
                                        <div className="col-6">
                                            <a href="/" passHref className="font-14" style={{ float: 'left' }}>
                                                <IconButton aria-label="back" style={{ fontSize: '12px', marginTop: '-10px;' }}>
                                                    <ArrowBackIosIcon />Back
                                                </IconButton>
                                            </a>
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

export default CandidateApply;
