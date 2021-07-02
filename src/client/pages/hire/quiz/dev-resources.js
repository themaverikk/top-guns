import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, IconButton, Radio, RadioGroup } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAppContext } from '../../../context/state';

const RadioButtonQuestion = ({ question, handleChange }) => {
  return (<div key={question.name}>
    <FormLabel component="legend">{question.text}</FormLabel>
    <RadioGroup aria-label={question.name} name={question.name} defaultValue={question.answer} onChange={handleChange(question.name)}>
      {question.options.map(option => <FormControlLabel key={option.value} value={option.value} control={<Radio required={false} />} label={option.label} />)}
    </RadioGroup></div>
  );
}

const RadioButtonQuestions = ({ questions, ...props }) => {
  return questions.map(question => <RadioButtonQuestion key={question.name} question={question} {...props} />);
}

const DevResources = () => {
  const { applicationState, setApplicationState } = useAppContext();
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleChange = questionName => event => {

    const updateQuestionIndex = applicationState.questions.findIndex(question => question.name === questionName);

    if (updateQuestionIndex > -1) {
      const updatedQuestion = { ...applicationState.questions[updateQuestionIndex], answer: event.target.value };

      setApplicationState({
        ...applicationState,
        questions: [
          ...applicationState.questions.slice(0, updateQuestionIndex),
          updatedQuestion,
          ...applicationState.questions.slice(updateQuestionIndex + 1),
        ],
      });
    }
  }

  const handleSubmit = event => {
    event.preventDefault();

    if (applicationState.questions.some(question => !question.answer)) {
      setError(true);
      return;
    }

    setError(false);
    router.push("skills");
  };

  return (
    <div>
      {/* <Head>
        <title>James Bond- Hire</title>
        <meta name="description" content="Hire Top Engineers Remotely" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main>
      <Head>
        <title>Hire James Bond</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="Bootstrap, Landing page, Template, Business, Service"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <section id="business-plan" style={{padding: '0px'}}>
        <div className="row">
          <div className="col-lg-8 col-md-12 pl-0 pt-70 pr-5">
            <div style={{
                fontFamily: 'Maison-Bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <form onSubmit={handleSubmit}>
                <FormControl component="fieldset" error={error}>
                  <RadioButtonQuestions questions={applicationState.questions} handleChange={handleChange} />
                  {error && (
                    <FormHelperText>Please answer all the questions</FormHelperText>
                  )}
                  <div>
                    <div>
                      <Link href="/" passHref>
                        <IconButton aria-label="back">
                          <ArrowBackIosIcon />
                        </IconButton>
                      </Link>
                    </div>
                    <div>
                      <Button type="submit" variant="contained" color="primary">
                        Next
                      </Button>
                    </div>
                  </div>
                </FormControl>
              </form>
            </div>
          </div>

          <div className="row col-lg-4 col-md-12 pl-4 text-center" style={{background: 'linear-gradient(-1deg,#394458,#191e28 96%)', height:'637px' , minHeight: '100%', paddingTop: '100px', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '100px'}}>
            <div className="col-12">TRUSTED BY</div>
            <div className="col-6"><img src="img/business/business-img.png" className="img-fluid" alt="" style={{minHeight: '70px', minWidth: '100px'}}/></div>
            <div className="col-6">test3</div>
            <div className="col-6">test4</div>
            <div className="col-6">test5</div>
            <div className="col-6">test2</div>
            <div className="col-6">test3</div>
            <div className="col-6">test4</div>
            <div className="col-6">test5</div>
          </div>
      </div>
    </section>
      </main>
    </div>
  );
};

export default DevResources;
